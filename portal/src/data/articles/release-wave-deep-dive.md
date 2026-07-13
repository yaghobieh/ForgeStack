
**Source and repos:** [github.com/yaghobieh](https://github.com/yaghobieh) · **Portal:** [forgedevstack.com](https://forgedevstack.com)

On July 12, 2026 we pushed the largest coordinated release in ForgeStack's history to npm: four brand-new libraries and updates across seven existing ones. The theme is simple. Until today, you could build most of an app on ForgeStack — UI with Bear, routing with Compass, state with Synapse, data with Forge Query, backend with Harbor. But the moment your app needed live updates, real authentication, or an AI feature, you had to leave the stack. This wave closes those gaps.

Here is what we shipped and why.

---

## The Problem We Kept Hitting

Every modern product brief now includes the same three requirements: it should update in real time, it should have proper login, and it should have some AI in it. A chat app. A live dashboard. A document Q&A feature. Building these on ForgeStack meant wiring in Socket.IO, an auth SaaS, and a LangChain-sized dependency tree — three ecosystems with three different philosophies bolted onto a stack whose whole point is coherence.

So we built the missing pillars ourselves, the ForgeStack way: TypeScript-first, minimal or zero dependencies, and small APIs that compose with the rest of the stack.

---

## Pillar 1: Real Time — Harbor WS Hub + Forge Socket

Harbor 1.6.3 ([github.com/yaghobieh/Harbor](https://github.com/yaghobieh/Harbor), [npm](https://www.npmjs.com/package/@forgedevstack/harbor)) adds a first-class WebSocket Hub under a new `@forgedevstack/harbor/ws` subpath. It handles the parts that are annoying to get right: authentication runs *before* the upgrade is accepted (rejected clients get a proper HTTP 401 and never open a socket), all traffic uses a typed `{ event, payload }` envelope, rooms clean up after themselves, heartbeats terminate dead connections, and a pub/sub adapter contract lets you fan out across multiple instances (in-memory by default, Redis-compatible by contract).

```typescript
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

On the other side of the wire sits the brand-new **Forge Socket 1.0.0** ([github.com/yaghobieh/forge-socket](https://github.com/yaghobieh/forge-socket), [npm](https://www.npmjs.com/package/@forgedevstack/forge-socket)) — a typed WebSocket client for the browser and Node with zero runtime dependencies. It speaks the same envelope protocol as the hub and handles reconnection with capped exponential backoff and jitter, heartbeat keepalive, room membership that automatically rejoins after a reconnect, and an offline queue for messages sent while the connection is down.

```typescript
import { ForgeSocket } from '@forgedevstack/forge-socket';

interface Incoming {
  'chat:new': { from: string; text: string };
}
interface Outgoing {
  'chat:send': { text: string };
}

const socket = new ForgeSocket<Incoming, Outgoing>({ url: 'wss://example.com/chat' });
socket.on('chat:new', (payload) => render(payload));
socket.connect();
socket.join('lobby');
socket.send('chat:send', { text: 'hello' }, 'lobby');
```

Server and client were designed as twins. You define your event map once and both ends are typed.

And to complete the loop into the UI layer, Forge Query 1.0.1 ([github.com/yaghobieh/forge-query](https://github.com/yaghobieh/forge-query)) adds `useSubscription` — a hook that keeps a cached query updated from any push source. It is adapter-based, so the library has zero transport dependencies: hand it a `subscribe(listener) => cleanup` source (a Forge Socket handler fits naturally), give it an `onEvent` reducer, and events fold into the cache. The same release brings declarative optimistic updates to `useMutation`, with automatic snapshot and rollback on error.

Harbor 1.6.3 also ships streaming multipart uploads (`@forgedevstack/harbor/upload`): file bytes flow straight to a storage adapter without buffering whole files in memory, with per-file size limits, mime allowlists, and a built-in local disk adapter.

---

## Pillar 2: Auth — Forge Auth 2.0.0

**Forge Auth** ([github.com/yaghobieh/forge-auth](https://github.com/yaghobieh/forge-auth), [npm](https://www.npmjs.com/package/@forgedevstack/forge-auth)) is an auth toolkit for Node.js built entirely on `node:crypto` — zero runtime dependencies. It covers HMAC-SHA256 signed session tokens with TTL, scrypt password hashing with self-describing hash strings, API key generation and timing-safe verification, and OIDC authorization-code helpers with PKCE (S256).

The design bet is framework-agnostic guards: plain functions over a minimal `{ headers }` request shape that return `{ authorized, context }`. They work with Harbor, Express, Fastify, or raw `node:http` — and the same session guard that protects an HTTP route can protect a WebSocket upgrade in the WS Hub's `authenticate` hook.

```typescript
import { createSession, createSessionGuard } from '@forgedevstack/forge-auth';

const token = createSession({ userId: 'user-1', role: 'admin' }, secret, { ttlSeconds: 3600 });

const guard = createSessionGuard<{ userId: string; role: string }>({ secret });
const result = await guard({ headers: req.headers });
if (!result.authorized) return res.status(401).json({ error: result.reason });
```

---

## Pillar 3: AI — Forge AI 1.0.0

**Forge AI** ([github.com/yaghobieh/forge-ai](https://github.com/yaghobieh/forge-ai), [npm](https://www.npmjs.com/package/@forgedevstack/forge-ai)) is deliberately a *thin* RAG toolkit, not a framework. It gives you text chunking (fixed-size or sentence-boundary strategies with overlap), provider-agnostic embeddings (a built-in client for any OpenAI-compatible endpoint, or implement the `EmbeddingProvider` interface for anything else), and pgvector SQL helpers for table creation and cosine-similarity queries. Document extraction for pdf/docx/xlsx is defined as a contract with an extractor registry — parsers like `pdf-parse`, `mammoth`, and `xlsx` are optional peer dependencies you register yourself, so the core stays at zero runtime dependencies.

```typescript
import { chunkText, createOpenAiEmbeddingProvider, buildSimilarityQuerySql, formatVectorLiteral } from '@forgedevstack/forge-ai';

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

If you have ever wanted RAG without adopting an entire orchestration framework, this is the shape we wanted it to have: functions you call, SQL you can read, and your own database.

---

## Pillar 4: MCP — Forge MCP 1.0.0

**Forge MCP** ([github.com/yaghobieh/forge-mcp](https://github.com/yaghobieh/forge-mcp), [npm](https://www.npmjs.com/package/@forgedevstack/forge-mcp)) is a tiny helper for building API-key-protected stdio [MCP](https://modelcontextprotocol.io) servers — the protocol that lets agents like Cursor and Claude Desktop call your tools. It wraps the official SDK so you define tools with plain JSON schemas (no zod, no boilerplate) and get a working server from one `createMcpServer` call. The API key resolves eagerly so a misconfigured server fails at startup, not on the first tool call. If you are shipping a product in 2026, an MCP server is becoming as standard as a REST API; this makes it a twenty-line task.

---

## Grid Table Grows Up

Grid Table 1.1.1 ([github.com/yaghobieh/grid-table](https://github.com/yaghobieh/grid-table), [npm](https://www.npmjs.com/package/@forgedevstack/grid-table)) is the biggest single-library drop in the wave, and it moves the grid firmly into AG-Grid territory:

- **Set filters** (checkbox lists) and **date range filters** in the filter popup
- **Expandable group rows** with collapse/expand on group headers
- **Excel-style range selection** with drag-to-select, plus **clipboard paste** of tab-separated data into a selected range
- **SSRM-style infinite scroll** with block loading (`onLoadBlock`, `blockSize`, `totalRowCount`)
- **Multi-row column group headers** with real colspan
- **Delta row updates** via an `applyTransaction` utility for `{ add, update, remove }` batches, with **flash cells** highlighting what changed
- A **fill handle** and **bulk edit** config for spreadsheet-style editing
- **Export scope** control (`all` / `filtered` / `sorted` / `selected`) and **saved views synced to the URL**

Pair delta updates and flash cells with Forge Socket and you have a live-updating dashboard grid without a commercial grid license.

---

## The Supporting Cast

The rest of the stack kept pace:

- **Bear 1.2.5** ([github.com/yaghobieh/bear](https://github.com/yaghobieh/bear)) adds `MessageList` — a chat message list with consecutive-author grouping, day separators, auto-scroll, and a "new messages" affordance — plus `pauseOnHover` and `maxToasts` for toasts, a multiline mode for `MentionsInput`, and full light-mode support for `CommandPalette`. Notice a pattern? The chat-app UI pieces landed in the same wave as the socket layer.
- **Synapse 1.2.1** ([github.com/yaghobieh/synapse](https://github.com/yaghobieh/synapse)) wires persistence directly into `createNucleus` (hydrate on creation, debounced writes, versioned migrations), ships storage adapters for local/session/memory, makes the middleware pipeline functional with a new `interceptor`, and adds a zero-dependency Redux DevTools connector.
- **Forge Query 1.0.1** — live subscriptions and optimistic updates, covered above.
- **Forge Compass 1.0.3** ([github.com/yaghobieh/compass](https://github.com/yaghobieh/compass)) — browser back/forward now behaves exactly as users expect on `popstate`.
- **Kiln 1.0.6** ([github.com/yaghobieh/kiln](https://github.com/yaghobieh/kiln)) — our Storybook alternative keeps maturing, with URL-addressable story routes and a docs-first tab option.

---

## What This Adds Up To

Take stock of what a ForgeStack app can now be, end to end: Harbor serving the API and the WebSocket hub, Forge Auth guarding both, Forge Socket and Forge Query streaming server events into the cache, Synapse persisting client state, Bear rendering the chat with `MessageList`, Grid Table flashing delta updates into a live dashboard, Forge AI powering document Q&A over pgvector, and Forge MCP exposing the whole thing to AI agents. Every package is MIT licensed, TypeScript-first, and deliberately small.

## Getting Started

```bash
npm install @forgedevstack/forge-socket @forgedevstack/forge-auth @forgedevstack/forge-ai @forgedevstack/forge-mcp
```

Docs and live examples are on the portal at [forgedevstack.com](https://forgedevstack.com), and every repo lives under [github.com/yaghobieh](https://github.com/yaghobieh). If you build something with the new pillars — a chat app, a live grid, a RAG feature — we would genuinely like to see it.
