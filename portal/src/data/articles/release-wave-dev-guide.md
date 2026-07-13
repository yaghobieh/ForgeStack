**Repos:** [github.com/yaghobieh](https://github.com/yaghobieh) · **Portal:** [forgedevstack.com](https://forgedevstack.com)

ForgeStack shipped a coordinated release wave to npm today (July 12, 2026): four new libraries and updates across seven existing ones. The goal of the wave is that you can now build real-time, AI-powered apps — chat, live dashboards, document Q&A — entirely on the stack. Here is what landed, grouped by concern, with real code from the READMEs.

## New: Real-Time — forge-socket 1.0.0 + Harbor WS Hub

[`@forgedevstack/forge-socket`](https://www.npmjs.com/package/@forgedevstack/forge-socket) ([repo](https://github.com/yaghobieh/forge-socket)) is a typed WebSocket client for browser and Node with zero runtime dependencies: auto-reconnect with capped exponential backoff and jitter, heartbeat keepalive, rooms that rejoin after reconnect, and an offline message queue.

```ts
import { ForgeSocket } from '@forgedevstack/forge-socket';

interface Incoming {
  'chat:message': { user: string; text: string };
}
interface Outgoing {
  'chat:send': { text: string };
}

const socket = new ForgeSocket<Incoming, Outgoing>({ url: 'wss://example.com/ws' });

socket.on('chat:message', (payload) => {
  console.log(`${payload.user}: ${payload.text}`);
});

socket.connect();
socket.join('general');
socket.send('chat:send', { text: 'hello' }, 'general');
```

Its server twin is the new WebSocket Hub in [Harbor 1.6.3](https://www.npmjs.com/package/@forgedevstack/harbor) ([repo](https://github.com/yaghobieh/Harbor)), under the `@forgedevstack/harbor/ws` subpath. Auth runs before the upgrade is accepted (rejections answer with a real HTTP status and never open a socket), messages use a typed `{ event, payload }` envelope, rooms clean up automatically, heartbeats terminate dead connections, and a `WsPubSubAdapter` contract enables multi-instance fan-out (in-memory adapter included, Redis-compatible by design).

```ts
import { createServer } from '@forgedevstack/harbor';
import { createWsHub } from '@forgedevstack/harbor/ws';

const server = createServer();
server.listen(3000);

const hub = createWsHub({
  path: '/chat',
  authenticate: async (request) => {
    const token = new URL(request.url ?? '', 'http://localhost').searchParams.get('token');
    const user = await verifyToken(token);
    if (!user) return { accept: false, status: 401 };
    return { accept: true, context: { userId: user.id } };
  },
  onMessage: (connection, message) => {
    if (message.event === 'chat:send') {
      void hub.broadcastToRoom('lobby', 'chat:new', {
        from: connection.context.userId,
        text: message.payload,
      });
    }
  },
});
```

Harbor 1.6.3 also adds **streaming multipart uploads** (`@forgedevstack/harbor/upload`): a `streamUpload` middleware that pipes file bytes straight to a storage adapter without buffering whole files in memory, with size limits, mime allowlists (`415` on rejection, `413` on oversize), and a built-in `LocalDiskStorageAdapter`.

## New: Auth — forge-auth 2.0.0

[`@forgedevstack/forge-auth`](https://www.npmjs.com/package/@forgedevstack/forge-auth) ([repo](https://github.com/yaghobieh/forge-auth)) is an auth toolkit built entirely on `node:crypto` — zero runtime dependencies:

- HMAC-SHA256 signed session tokens with TTL
- scrypt password hashing with self-describing hash strings
- API key generation (`fsk_` prefixed) with SHA-256 hashing and timing-safe verification
- OIDC authorization-code helpers with PKCE (S256)
- Framework-agnostic guards over a minimal `{ headers }` request shape

```ts
import { createSession, createSessionGuard } from '@forgedevstack/forge-auth';

const token = createSession({ userId: 'user-1', role: 'admin' }, secret, { ttlSeconds: 3600 });

const guard = createSessionGuard<{ userId: string; role: string }>({ secret });
const result = await guard({ headers: req.headers });
if (!result.authorized) return res.status(401).json({ error: result.reason });
```

Guards are plain functions returning `{ authorized, context }`, so they work with Harbor, Express, Fastify, or raw `node:http` — including inside the WS Hub's `authenticate` hook.

## New: AI — forge-ai 1.0.0

[`@forgedevstack/forge-ai`](https://www.npmjs.com/package/@forgedevstack/forge-ai) ([repo](https://github.com/yaghobieh/forge-ai)) is a thin RAG toolkit, not a framework: text chunking (fixed or sentence strategies with overlap), provider-agnostic embeddings (built-in client for any OpenAI-compatible endpoint), and pgvector SQL helpers. Document extraction for pdf/docx/xlsx is an `Extractor` contract with a registry — `pdf-parse`, `mammoth`, and `xlsx` are optional peer dependencies you plug in, keeping the core at zero runtime dependencies.

```ts
import {
  chunkText,
  createOpenAiEmbeddingProvider,
  buildSimilarityQuerySql,
  formatVectorLiteral,
} from '@forgedevstack/forge-ai';

const chunks = chunkText(documentText, { strategy: 'sentence', chunkSize: 512, overlap: 64 });

const provider = createOpenAiEmbeddingProvider({
  baseUrl: 'https://api.openai.com/v1',
  apiKey: process.env.OPENAI_API_KEY ?? '',
});
const embeddings = await provider.embed(chunks.map((chunk) => chunk.text));

const [queryEmbedding] = await provider.embed(['What is ForgeStack?']);
const results = await db.query(
  buildSimilarityQuerySql({ table: 'documents', topK: 5 }),
  [formatVectorLiteral(queryEmbedding)],
);
```

## New: MCP — forge-mcp 1.0.0

[`@forgedevstack/forge-mcp`](https://www.npmjs.com/package/@forgedevstack/forge-mcp) ([repo](https://github.com/yaghobieh/forge-mcp)) is a tiny helper for building API-key-protected stdio [MCP](https://modelcontextprotocol.io) servers. It wraps the official SDK so tools are defined with plain JSON schemas — no zod, no boilerplate. The API key resolves eagerly, so a misconfigured server fails at startup instead of on the first tool call.

```ts
import { createMcpServer, textResult } from '@forgedevstack/forge-mcp';

const { start } = createMcpServer({
  name: 'my-server',
  version: '1.0.0',
  apiKey: { envVar: 'MY_API_KEY' },
  tools: [
    {
      name: 'echo',
      description: 'Echo a message',
      inputSchema: { type: 'object', properties: { message: { type: 'string' } }, required: ['message'] },
      handler: (args) => textResult(String(args.message)),
    },
  ],
});

start();
```

## Data Grid — grid-table 1.1.1

[`@forgedevstack/grid-table`](https://www.npmjs.com/package/@forgedevstack/grid-table) ([repo](https://github.com/yaghobieh/grid-table)) gets its biggest feature drop yet, closing much of the gap to AG-Grid:

- **Set filters** (`filterType: 'set'` checkbox lists) and **date range filters** (`filterType: 'date'` with from/to and `between`)
- **Expandable group rows** — `rowGroups.showHeaders`, collapse/expand via chevron, `useRowGroupExpansion` hook
- **Excel-style range selection** (`rangeSelection`, drag-to-select) and **clipboard paste** — Ctrl/Cmd+V pastes tab-separated data into the selected range when cell edit is on
- **SSRM-style infinite scroll** — `infiniteScroll` with `onLoadBlock`, `blockSize`, `totalRowCount`
- **Multi-row column group headers** with real colspan (`columnGroups` + `alignColumnGroups`)
- **Delta row updates** — `applyTransaction` for `{ add, update, remove }` batches, with **flash cells** highlighting changes
- **Fill handle** and **bulk edit** configs for spreadsheet-style editing
- **`exportScope`** (`'all' | 'filtered' | 'sorted' | 'selected'`) for CSV/Excel/PDF/clipboard/print, and **saved views synced to the URL** (`savedViews.syncUrl`)

Combine `applyTransaction` + `flashCells` with forge-socket and you get a live dashboard grid with no commercial license.

## State and Data — synapse 1.2.1, forge-query 1.0.1

[Synapse 1.2.1](https://www.npmjs.com/package/@forgedevstack/synapse) ([repo](https://github.com/yaghobieh/synapse)) wires persistence directly into `createNucleus` via a `persist` config (hydration on creation, debounced writes, versioned `migrate`), adds `StorageAdapter` built-ins for local/session/memory (SSR-safe), makes the `middleware` pipeline functional with a new `interceptor({ before, after })`, and ships a zero-dependency `reduxDevtools()` connector.

[Forge Query 1.0.1](https://www.npmjs.com/package/@forgedevstack/forge-query) ([repo](https://github.com/yaghobieh/forge-query)) adds live queries and optimistic updates:

- **`useSubscription`** — keeps a query updated from any push source via an adapter-based `SubscriptionSource` (`subscribe(listener) => cleanup`); zero transport dependencies, events fold into the cache through an `onEvent` reducer
- **`QueryClient.consumeSubscription`** — the same, imperatively, outside React
- **`optimisticUpdate`** on `useMutation` — optimistic cache value on mutate, automatic snapshot and rollback on error, optional `reconcile` and `invalidateOnSettled`

## UI and Tooling — bear 1.2.5, forge-compass 1.0.3, kiln 1.0.6

[Bear 1.2.5](https://www.npmjs.com/package/@forgedevstack/bear) ([repo](https://github.com/yaghobieh/bear)) adds **`MessageList`** — a chat message list with consecutive-author grouping (`groupWindowMs`), day separators, auto-scroll-to-bottom, and a "new messages" affordance — plus Toast `pauseOnHover` and `maxToasts`, a `multiline` mode for `MentionsInput`, and full light-mode support for `CommandPalette`. The chat UI landed in the same wave as the socket layer on purpose.

[Forge Compass 1.0.3](https://www.npmjs.com/package/@forgedevstack/forge-compass) ([repo](https://github.com/yaghobieh/compass)) fixes browser back/forward: `popstate` no longer calls `history.replaceState`, so the URL stack matches the user's actual history. [Kiln 1.0.6](https://www.npmjs.com/package/@forgedevstack/kiln) ([repo](https://github.com/yaghobieh/kiln)) — the ForgeStack Storybook alternative — carries URL-addressable story routes and a docs-first tab option.

## Try It

```bash
npm install @forgedevstack/forge-socket @forgedevstack/forge-auth @forgedevstack/forge-ai @forgedevstack/forge-mcp
```

Everything is MIT licensed and TypeScript-first. Docs and live examples: [forgedevstack.com](https://forgedevstack.com). Source: [github.com/yaghobieh](https://github.com/yaghobieh). Issues and PRs welcome.
