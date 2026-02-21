# ForgeStack

<p align="center">
  <img src="./portal/public/logo.svg" alt="ForgeStack Logo" width="200" />
</p>

<h3 align="center">Modern Developer Tools for Building Better Applications</h3>

<p align="center">
  <a href="https://forgestack.dev">Website</a> •
  <a href="https://forgestack.dev/docs">Documentation</a> •
  <a href="https://forgestack.dev/about">About</a> •
  <a href="https://github.com/yaghobieh/ForgeStack">GitHub</a>
</p>

---

## 🛠️ Packages

ForgeStack is a collection of powerful, type-safe developer tools:

| Package | Description | Status |
|---------|-------------|--------|
| **[@forgestack/harbor](./packages/harbor)** | Node.js backend framework with MongoDB ODM, route management, Docker orchestration | ✅ Ready |
| **[@forgestack/compass](./packages/compass)** | React router with guards, validations, and type-safe routes | 🚧 Coming Soon |
| **[@forgestack/synapse](./packages/synapse)** | State management with Redux-like patterns | 🚧 Coming Soon |
| **[@forgestack/query](./packages/query)** | Data fetching and caching layer | 📋 Planned |
| **[@forgestack/table](./packages/table)** | Headless table with sorting, filtering, pagination | 📋 Planned |

---

## 🚀 Quick Start

### Harbor - Node.js Backend Framework

```bash
npm install @forgestack/harbor
```

```typescript
import { createServer, router, GET, POST } from '@forgestack/harbor';

// Create server in one line
const server = createServer({ port: 3000 });

// Define routes without importing express
const users = router('/api/users', [
  GET('/', async () => ({ users: [] })),
  POST('/', async (req) => ({ id: '123', ...req.body })),
]);

server.use(users);

// Server running at http://localhost:3000
```

---

## 📦 Installation

Each package can be installed independently:

```bash
# Backend framework
npm install @forgestack/harbor

# React router (coming soon)
npm install @forgestack/compass

# State management (coming soon)
npm install @forgestack/synapse
```

---

## 🌐 Ecosystem

- **[Bear UI](https://bearui.com)** – React UI component library (Tailwind, 50+ components). Use templates to start fast: `npx create-forge my-app --template react`.
- **[ForgeStack CLI](https://www.npmjs.com/package/@forgedevstack/cli)** – Create React projects with Bear, Compass, Synapse & more in seconds.
- **[LintForge](https://open-vsx.org/extension/Yaghobieh/lintforge)** – VS Code / Open VSX extension for ForgeStack projects.

---

## 🎨 Philosophy

ForgeStack packages share a common philosophy:

- **🎯 Type-Safe** - Full TypeScript support with inference
- **🚀 Simple API** - Easy to learn, powerful to use
- **📦 Lightweight** - Minimal dependencies, tree-shakeable
- **🔌 Composable** - Use individually or together
- **📚 Well Documented** - Comprehensive docs with examples

---

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

