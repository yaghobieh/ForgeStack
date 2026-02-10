# Forge Stack: A Full Ecosystem for Modern Web Applications

Forge Stack is a set of type-safe, composable tools for building web applications from backend to frontend. Each package can be used on its own or combined into a single stack. Here is what the ecosystem includes and where it is headed.

---

## What Is Forge Stack?

Forge Stack is a collection of developer tools that share the same philosophy: type-safe, simple APIs, minimal dependencies, and strong documentation. You can adopt one package or the whole set. Everything is designed to work together without locking you into a single framework.

---

## The Packages

**Bear** is the UI layer. It is a React component library built for Tailwind, with a theme provider, light and dark mode, and a wide set of components: buttons, cards, modals, drawers, inputs, selects, grids, and more. Bear is built for accessibility and mobile-first layouts. You get a consistent design system without heavy configuration.

**Compass** is the routing layer. It adds type-safe routing for React with guards, permissions, and navigation control. You can protect routes by auth or role, block navigation when there are unsaved changes, sync state with the URL, and use built-in DevTools. It fits naturally with Bear and the rest of the stack.

**Synapse** is the state layer. It offers a simple, Redux-like mental model without reducers or dispatch. You work with nuclei (state containers), signals, and computed values. React hooks like useNucleus and usePick connect components to state. Middleware supports logging, persistence, and Immer-style updates. Built-in API hooks and DevTools with time-travel make it easy to manage both UI and server state in one place.

**Forge Form** handles forms and validation. It provides form state, built-in and async validation, optional persistence and cache, and API submission with retries. A DevTools panel helps you inspect and debug forms. It stays small and dependency-free while covering the usual form needs.

**Forge Query** handles data fetching and caching. It gives you smart caching, background refetching, retries with backoff, and request deduplication. useMutation and DevTools round out the story. It is TypeScript-first and works with React 16.8 and above, including offline scenarios.

**Grid Table** is a headless data grid for React. It supports sorting, filtering, pagination, row selection, sticky columns, column reorder and resize, and custom cell rendering. It is built with SCSS so you can style it to match Bear or your own design system. It is built for both desktop and mobile.

**Anvil** is the utility layer. It provides type guards, deep clone, and helpers for arrays, objects, strings, and functions. It also ships React hooks and Vue composables. Everything is tree-shakeable and type-safe so you only bundle what you use.

**Harbor** is the backend. It is a Node.js framework that replaces the need to wire Express, Mongoose, and validation by hand. You get server creation, route management, MongoDB ODM, validation, WebSockets, scheduling, caching, auth, and Docker-friendly setup in one place. The motivation behind Harbor is simple: backend development should be fast and predictable. Many teams spend time gluing Express, Mongoose, and validation libraries together and then maintaining that glue. Harbor gives you a single pipeline: connect the database, define models and routes, add validation and auth, and ship. It is TypeScript-first and config-driven so that both small APIs and larger services stay consistent and easy to reason about.

---

## The CLI: Create and Manage Forge Stack Projects

The Forge CLI lets you create and manage projects that use the ecosystem. It supports npm, pnpm, yarn, and bun.

Create a new app with a single command. The default template is React: Vite, React 18, TypeScript, Bear UI, Compass routing, and Synapse state. You can also choose a server template (Harbor or Express with TypeScript) or a full-stack monorepo with a React frontend and a Harbor backend.

You can add packages to an existing project in interactive mode or by name. The CLI can generate Synapse nuclear slices so your state lives in a clear, consistent structure. Generator scripts in the project can create new pages, components, or slices so you stay within the same conventions.

Generated projects include Docker support: Dockerfile for production, Dockerfile.dev for development, and docker-compose for running the full stack. Theme customization is supported so you can set Bear primary color and other options when scaffolding or later in code.

In short, the CLI gives you a standard layout and tooling so you can focus on features instead of boilerplate.

---

## Coming Soon: AI Portal and Visual Building

Forge Stack is expanding beyond packages and the CLI. An AI-powered portal is in the roadmap. The goal is to let you create applications and sites in new ways:

- **Code generation with AI** – Describe what you want in natural language and get Forge Stack code (Bear components, Compass routes, Synapse state, forms, queries) that follows the same patterns the CLI and docs use.
- **Drag-and-drop building** – Assemble pages and flows visually using Bear components and Compass routes, with the output as real Forge Stack code you can edit and extend.
- **AI assistant** – A bot that helps you navigate the ecosystem, choose the right package, and generate or refactor code so you stay consistent with the stack.

The idea is not to replace coding but to speed up scaffolding, exploration, and iteration while keeping everything in the same type-safe, composable ecosystem.

---

## Why It Fits Medium, dev.to, and Reddit

Forge Stack is a good fit for developers who want a coherent set of tools without a single-vendor lock-in. You can adopt Bear and Compass first, add Synapse and Forge Query when you need state and data fetching, use Forge Form and Grid Table where they help, and back it all with Harbor. The CLI and the upcoming AI portal are there to reduce setup and repetition so you spend more time on product and less on wiring.

If you are building a new product or refactoring an existing one and care about TypeScript, clear APIs, and a consistent stack from API to UI, Forge Stack is worth a look. Documentation and examples are available at forgestack.dev, and the packages are published under the MIT license so you can use and adapt them freely.
