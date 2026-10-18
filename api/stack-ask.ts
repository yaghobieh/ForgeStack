import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const ASK_LIMIT = 5;
const QUESTION_MAX = 600;
const REFUSAL = 'Ask a question about the ForgeStack libraries.';
const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
const FORGE_WORD = /\b(forge(?:stack)?|bear|harbor|compass|synapse|kiln|lingo|torch|rail|anvil|grid|query|form|gitforge|lintforge|aerocraft|warden|ink|calendar|kanban|relay|socket|mcp|cli|stack|library|libraries)\b/i;
const QUESTION_WORD = /[?]|\b(what|how|why|which|when|where|who|can|could|does|do|did|is|are|should|would|will|tell me|explain|describe)\b/i;

const SITES: Record<string, { site: string; npm: string; forge: string }> = {
  bear: { site: 'https://bearui.com', npm: '@forgedevstack/bear', forge: 'https://forgedevstack.com/bear' },
  table: { site: 'https://grid-table.com', npm: '@forgedevstack/grid-table', forge: 'https://forgedevstack.com/table' },
  rail: { site: 'https://railjs.com', npm: '@forgedevstack/rail', forge: 'https://forgedevstack.com/rail' },
  harbor: { site: 'https://harborjs.com', npm: '@forgedevstack/harbor', forge: 'https://forgedevstack.com/harbor/docs/quick-start' },
  aerocraft: { site: 'https://aerocraftjs.com', npm: '@forgedevstack/aerocraft', forge: 'https://forgedevstack.com/aerocraft' },
  calendar: { site: 'https://forgecalendar.com', npm: '@forgedevstack/calendar', forge: 'https://forgedevstack.com/calendar' },
  ink: { site: 'https://inkforgejs.com', npm: '@forgedevstack/ink', forge: 'https://forgedevstack.com/ink' },
  torch: { site: 'https://forgedevstack.com/torch', npm: '@forgedevstack/torch', forge: 'https://forgedevstack.com/torch' },
};

const counts = new Map<string, number>();

interface ApiRequest {
  method?: string;
  body?: { question?: unknown };
  headers?: Record<string, string | string[] | undefined>;
}

interface ApiResponse {
  status: (code: number) => { json: (body: unknown) => void };
}

const clientIp = (request: ApiRequest): string => {
  const forwarded = request.headers?.['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) return forwarded.split(',')[0].trim();
  if (Array.isArray(forwarded) && forwarded[0]) return forwarded[0].split(',')[0].trim();
  return 'unknown';
};

const catalogText = (): string => {
  const paths = [join(process.cwd(), 'portal/public/catalog.json'), join(process.cwd(), 'public/catalog.json')];
  for (const path of paths) {
    try {
      const raw = JSON.parse(readFileSync(path, 'utf8')) as { libraries?: { name?: string; npm?: string; description?: string; install?: string; docs?: { code?: string }[] }[] };
      return (raw.libraries ?? [])
        .map((entry) => {
          const sample = entry.docs?.find((doc) => doc.code)?.code;
          return `${entry.name} (${entry.npm}): ${entry.description ?? ''}${entry.install ? `\nInstall: ${entry.install}` : ''}${sample ? `\nExample:\n${sample}` : ''}`;
        })
        .join('\n\n');
    } catch {
      continue;
    }
  }
  return 'Bear (@forgedevstack/bear), Harbor, Compass, Grid Table (@forgedevstack/grid-table), Rail, AeroCraft, Torch, Ink, Calendar.';
};

const matchedSources = (question: string) => {
  const text = question.toLowerCase();
  const sources: { label: string; href: string }[] = [];
  for (const [id, info] of Object.entries(SITES)) {
    if (text.includes(id) || (id === 'table' && text.includes('grid'))) {
      sources.push({ label: info.site.replace('https://', ''), href: info.site });
      sources.push({ label: info.npm, href: `https://www.npmjs.com/package/${info.npm}` });
      sources.push({ label: 'Forge docs', href: info.forge });
    }
  }
  sources.push({ label: 'Google', href: `https://www.google.com/search?q=${encodeURIComponent(`${question} site:forgedevstack.com`)}` });
  return sources.slice(0, 8);
};

const askDeepSeek = async (key: string, question: string): Promise<string> => {
  const response = await fetch(DEEPSEEK_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'deepseek-chat',
      temperature: 0.2,
      max_tokens: 1600,
      messages: [
        {
          role: 'system',
          content: [
            'You are Stack Builder for ForgeStack.',
            `If the message is not a ForgeStack question, reply with exactly: ${REFUSAL}`,
            'For a real question, write three short paragraphs and one fenced tsx example from the catalog. Link the docs and npm URLs you are given. Do not invent packages.',
            '',
            catalogText(),
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

export const maxDuration = 60;

export default async function handler(request: ApiRequest, response: ApiResponse) {
  try {
    if (request.method !== 'POST') {
      response.status(405).json({ error: 'Send a question.' });
      return;
    }
    const ip = clientIp(request);
    const used = counts.get(ip) ?? 0;
    const remaining = Math.max(0, ASK_LIMIT - used);
    if (remaining === 0) {
      response.status(429).json({ error: 'This address has used its 5 questions.', remaining: 0 });
      return;
    }
    const question = typeof request.body?.question === 'string' ? request.body.question.trim() : '';
    if (!question || question.length > QUESTION_MAX) {
      response.status(400).json({ error: 'Send one short question about ForgeStack.', remaining });
      return;
    }
    const isQuestion = question.includes('?') || QUESTION_WORD.test(question);
    if (!isQuestion || !FORGE_WORD.test(question)) {
      response.status(200).json({ answer: REFUSAL, remaining });
      return;
    }
    const key = process.env.DEEPSEEK_API_KEY ?? '';
    if (!key) {
      response.status(500).json({ error: 'DeepSeek is not configured.', remaining });
      return;
    }
    const answer = await askDeepSeek(key, question);
    const nextUsed = used + 1;
    counts.set(ip, nextUsed);
    response.status(200).json({
      answer,
      sources: answer === REFUSAL ? [] : matchedSources(question),
      remaining: ASK_LIMIT - nextUsed,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'DeepSeek did not answer.';
    response.status(502).json({ error: message });
  }
}
