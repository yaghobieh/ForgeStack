import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';
import { loadEnv } from 'vite';
import { handleStackAsk } from './stackAskHandler';

const ASK_PATH = '/api/stack-ask';

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

export const stackAskPlugin = (): Plugin => ({
  name: 'stack-ask',
  configureServer(server) {
    const env = loadEnv(server.config.mode, server.config.root, '');
    const key = env.DEEPSEEK_API_KEY ?? '';

    server.middlewares.use(async (request, response, next) => {
      const url = request.url?.split('?')[0];
      if (url !== ASK_PATH) {
        next();
        return;
      }

      let question = '';
      if (request.method === 'POST') {
        try {
          const body = JSON.parse(await readJson(request)) as { question?: string };
          question = typeof body.question === 'string' ? body.question : '';
        } catch {
          sendJson(response, 400, { error: 'Send a question.' });
          return;
        }
      }

      const result = await handleStackAsk({
        method: request.method ?? 'GET',
        question,
        ip: clientIp(request),
        key,
        portalRoot: server.config.root,
      });
      sendJson(response, result.status, result.body);
    });
  },
});
