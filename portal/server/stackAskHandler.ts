import { gatherResearch, libraryIndex, type AskSource } from './stackSources';

const ASK_LIMIT = 5;
const QUESTION_MAX = 600;
const REFUSAL = 'Ask a question about the ForgeStack libraries.';
const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
const DEEPSEEK_MODEL = 'deepseek-chat';

const FORGE_WORD = /\b(forge(?:stack)?|bear|harbor|compass|synapse|kiln|lingo|torch|rail|anvil|grid|query|form|gitforge|lintforge|aerocraft|warden|ink|calendar|kanban|relay|socket|mcp|cli|stack|library|libraries)\b/i;
const QUESTION_WORD = /[?]|\b(what|how|why|which|when|where|who|can|could|does|do|did|is|are|should|would|will|tell me|explain|describe)\b/i;

const counts = new Map<string, number>();

export interface AskResult {
  status: number;
  body: {
    answer?: string;
    error?: string;
    remaining?: number;
    sources?: AskSource[];
  };
}

const isForgeQuestion = (text: string): boolean => {
  const trimmed = text.trim();
  return (trimmed.includes('?') || QUESTION_WORD.test(trimmed)) && FORGE_WORD.test(trimmed);
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
  if (!response.ok) throw new Error(`DeepSeek ${response.status}`);
  const payload = (await response.json()) as { choices?: { message?: { content?: string } }[] };
  const answer = payload.choices?.[0]?.message?.content?.trim();
  if (!answer) throw new Error('DeepSeek empty');
  return answer;
};

export const handleStackAsk = async (input: {
  method: string;
  question: string;
  ip: string;
  key: string;
  portalRoot: string;
}): Promise<AskResult> => {
  if (input.method !== 'POST') return { status: 405, body: { error: 'Send a question.' } };

  const ip = input.ip || 'unknown';
  const used = counts.get(ip) ?? 0;
  const remaining = Math.max(0, ASK_LIMIT - used);
  if (remaining === 0) return { status: 429, body: { error: 'This address has used its 5 questions.', remaining: 0 } };

  const question = input.question.trim();
  if (!question || question.length > QUESTION_MAX) {
    return { status: 400, body: { error: 'Send one short question about ForgeStack.', remaining } };
  }
  if (!isForgeQuestion(question)) return { status: 200, body: { answer: REFUSAL, remaining } };
  if (!input.key) return { status: 500, body: { error: 'DeepSeek is not configured.', remaining } };

  try {
    const catalog = libraryIndex(input.portalRoot);
    const research = await gatherResearch(input.portalRoot, question);
    let answer = await askDeepSeek(input.key, catalog, question, research.notes);
    if (!answer.includes('```') && answer !== REFUSAL) {
      answer = await askDeepSeek(input.key, catalog, `${question}\n\nThe previous draft had no code. Rewrite it with a complete tsx example from the research.`, research.notes);
    }
    const nextUsed = used + 1;
    counts.set(ip, nextUsed);
    return {
      status: 200,
      body: {
        answer,
        sources: answer === REFUSAL ? [] : research.sources,
        remaining: ASK_LIMIT - nextUsed,
      },
    };
  } catch {
    return { status: 502, body: { error: 'DeepSeek did not answer. Try again.', remaining } };
  }
};
