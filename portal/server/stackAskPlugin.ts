import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';
import { loadEnv } from 'vite';
import { gatherResearch, libraryIndex, type AskSource } from './stackSources';

const ASK_PATH = '/api/stack-ask';
const ASK_LIMIT = 5;
const QUESTION_MAX = 600;
const REFUSAL = 'Ask a question about the ForgeStack libraries.';
const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
const DEEPSEEK_MODEL = 'deepseek-chat';

const FORGE_WORD = /\b(forge(?:stack)?|bear|harbor|compass|synapse|kiln|lingo|torch|rail|anvil|grid|query|form|gitforge|lintforge|aerocraft|warden|ink|calendar|kanban|relay|socket|mcp|cli|stack|library|libraries)\b/i;
const QUESTION_WORD = /^(what|how|why|which|when|where|who|can|could|does|do|did|is|are|should|would|will|tell me|explain|describe)\b/i;

const counts = new Map<string, number>();

const readJson = (request: IncomingMessage): Promise<string> =>
  new Promise((resolveBody, reject) => {
    const chunks: Buffer[] = [];
    request.on('data', (chunk: Buffer) => chunks.push(chunk));
    request.on('end', () => resolveBody(Buffer.concat(chunks).toString('utf8')));
    request.on('error', reject);
  });

const sendJson = (response: ServerResponse, status: number, body: unknown) => {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(body));
};

const clientIp = (request: IncomingMessage): string => {
  const forwarded = request.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return request.socket.remoteAddress ?? 'unknown';
};

const isForgeQuestion = (text: string): boolean => {
  const trimmed = text.trim();
  const looksLikeQuestion = trimmed.includes('?') || QUESTION_WORD.test(trimmed);
  return looksLikeQuestion && FORGE_WORD.test(trimmed);
};

const askDeepSeek = async (key: string, catalog: string, question: string, research: string): Promise<string> => {
  const response = await fetch(DEEPSEEK_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: DEEPSEEK_MODEL,
      temperature: 0.2,
      max_tokens: 1800,
      messages: [
        {
          role: 'system',
          content: [
            'You are Stack Builder for ForgeStack.',
            'Answer only a question about the ForgeStack libraries.',
            'If the message is not a question about ForgeStack, including greetings, how are you, weather, news, jokes, or any other topic, reply with exactly:',
            REFUSAL,
            'Do not add anything else to that refusal. No code on a refusal.',
            'For a real question, write a full answer: three short paragraphs that name the real props, then one fenced tsx code block that compiles against those props.',
            'Use the research notes. If they describe cellStyle, headerStyle, or GridTableThemeTokens, the example must use them. Do not stop at an install command.',
            'Link the docs site, the Forge docs page, and the npm package with markdown links, using only URLs from the research.',
            'Do not invent package names or props that are absent from the research.',
            '',
            'Libraries:',
            catalog,
            '',
            'Research:',
            research || 'No extra research.',
          ].join('\n'),
        },
        { role: 'user', content: question },
      ],
    }),
  });
  if (!response.ok) {
    throw new Error(`DeepSeek ${response.status}`);
  }
  const payload = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const answer = payload.choices?.[0]?.message?.content?.trim();
  if (!answer) {
    throw new Error('DeepSeek empty');
  }
  return answer;
};

export const stackAskPlugin = (): Plugin => ({
  name: 'stack-ask',
  configureServer(server) {
    const env = loadEnv(server.config.mode, server.config.root, '');
    const key = env.DEEPSEEK_API_KEY;
    const catalog = libraryIndex(server.config.root);

    server.middlewares.use(async (request, response, next) => {
      const url = request.url?.split('?')[0];
      if (url !== ASK_PATH || request.method !== 'POST') {
        next();
        return;
      }

      const ip = clientIp(request);
      const used = counts.get(ip) ?? 0;
      const remaining = Math.max(0, ASK_LIMIT - used);
      if (remaining === 0) {
        sendJson(response, 429, { error: 'This address has used its 5 questions.', remaining: 0 });
        return;
      }

      let question = '';
      try {
        const body = JSON.parse(await readJson(request)) as { question?: string };
        question = typeof body.question === 'string' ? body.question.trim() : '';
      } catch {
        sendJson(response, 400, { error: 'Send a question.', remaining });
        return;
      }

      if (!question || question.length > QUESTION_MAX) {
        sendJson(response, 400, { error: 'Send one short question about ForgeStack.', remaining });
        return;
      }

      if (!isForgeQuestion(question)) {
        sendJson(response, 200, { answer: REFUSAL, remaining });
        return;
      }

      if (!key) {
        sendJson(response, 500, { error: 'DeepSeek is not configured.', remaining });
        return;
      }

      try {
        const research = await gatherResearch(server.config.root, question);
        let answer = await askDeepSeek(key, catalog, question, research.notes);
        if (!answer.includes('```') && answer !== REFUSAL) {
          answer = await askDeepSeek(
            key,
            catalog,
            `${question}\n\nThe previous draft had no code. Rewrite it with a complete tsx example from the research.`,
            research.notes,
          );
        }
        const nextUsed = used + 1;
        counts.set(ip, nextUsed);
        const sources: AskSource[] = answer === REFUSAL ? [] : research.sources;
        sendJson(response, 200, { answer, sources, remaining: ASK_LIMIT - nextUsed });
      } catch {
        sendJson(response, 502, { error: 'DeepSeek did not answer. Try again.', remaining });
      }
    });
  },
});
