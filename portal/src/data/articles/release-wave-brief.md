We just shipped the largest release wave in ForgeStack's history — 11 packages on npm in one day.

Four brand-new libraries close the gaps for building real-time, AI-powered apps entirely on the stack:

- **forge-socket** — typed WebSocket client with auto-reconnect, heartbeat, and rooms. Zero dependencies.
- **forge-auth** — sessions, scrypt password hashing, API keys, and OIDC with PKCE, built entirely on `node:crypto`.
- **forge-ai** — a thin RAG toolkit: chunking, provider-agnostic embeddings, and pgvector helpers. No framework lock-in.
- **forge-mcp** — build an API-key-protected MCP server for AI agents in under 20 lines.

On the server, **Harbor 1.6.3** adds a WebSocket Hub with upgrade-level auth and rooms, plus streaming uploads that never buffer whole files in memory. On the client, **Grid Table 1.1.1** lands set and date-range filters, Excel-style range selection with clipboard paste, infinite scroll with block loading, delta updates with flash cells, and expandable group rows — enterprise-grid features, MIT licensed.

**Bear**, **Synapse**, **Forge Query**, **Compass**, and **Kiln** all shipped updates in the same wave, including a chat `MessageList` component, built-in state persistence, and live query subscriptions.

A chat app, a live dashboard, a document Q&A feature — end to end on one TypeScript-first stack.

## Try it

```bash
npm install @forgedevstack/forge-socket
```

Docs: [forgedevstack.com](https://forgedevstack.com)

Source: [github.com/yaghobieh](https://github.com/yaghobieh)
