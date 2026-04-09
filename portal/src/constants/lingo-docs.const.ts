export interface LingoDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
}

export const LINGO_VERSION = '1.0.1';

export const LINGO_NPM_URL = 'https://www.npmjs.com/package/@forgedevstack/lingo';
export const LINGO_GITHUB_URL = 'https://github.com/yaghobieh/lingo';
export const LINGO_PORTAL_REPO_URL = 'https://github.com/yaghobieh/lingo-portal';

export const LINGO_DOCS: LingoDocSection[] = [
  {
    id: 'what-is-lingo',
    title: 'What is Lingo?',
    content: `**Lingo** (\`@forgedevstack/lingo\`) is the ForgeStack **translation and localization** library. It gives you a small, predictable API for **nested keys**, **interpolation**, **CLDR-style plurals**, **RTL**, and **locale switching**, with a **framework-agnostic core** and an optional **React** layer (\`@forgedevstack/lingo/react\`).

Use **local JSON** bundles in-repo, or point the same client at **Lingo Portal** over HTTP so editors and AI can manage keys without redeploying copy for every tweak.

**Package**: ${LINGO_NPM_URL}  
**Source**: ${LINGO_GITHUB_URL}`,
  },
  {
    id: 'lingo-portal',
    title: 'Lingo Portal (app + API)',
    content: `**Lingo Portal** is the full-stack product that sits next to the library: projects, locales, translation keys, workspace roles, billing hooks, and AI-assisted translation. The UI is built with **Bear**, **Compass**, and **Grid Table**—the same stack we recommend for ForgeStack admin surfaces.

**Repository**: ${LINGO_PORTAL_REPO_URL}

**Architecture (how “server” fits)**  
The portal is a **Vite + React** single-page app for the browser. A **Node HTTP API** (Harbor-style server) runs beside it: authentication, CRUD for projects and keys, health checks, and integration with AI or payment providers. The Vite dev server **proxies** \`/api\` to that backend. There is **no React SSR** in the classic sense (no \`renderToString\` for the app shell); **rendering happens on the client**, while **data and auth are served by the API**. Deployments typically expose static \`dist\` plus the API process (or separate services).

**Mock mode**  
By default the server can run against JSON seed data under \`server/data/\` so you can try flows without MongoDB. Flip to real persistence with environment-driven config when you wire models.`,
  },
  {
    id: 'installation',
    title: 'Installation',
    content: 'React is an optional peer when you use the React bindings.',
    code: `npm install @forgedevstack/lingo

npm install @forgedevstack/lingo react react-dom`,
  },
  {
    id: 'quick-start',
    title: 'Quick start (local bundles)',
    content: 'Create a Lingo instance with locales and nested translation objects, then wrap your app with the provider.',
    code: `import { createLingo, LingoProvider, useLingo } from '@forgedevstack/lingo';

const lingo = createLingo({
  defaultLocale: 'en',
  fallbackLocale: 'en',
  locales: ['en', 'es'],
  source: {
    type: 'local',
    translations: {
      en: { app: { title: 'Hello, {{name}}!' } },
      es: { app: { title: '¡Hola, {{name}}!' } },
    },
  },
});

function App() {
  return (
    <LingoProvider instance={lingo}>
      <Shell />
    </LingoProvider>
  );
}`,
  },
  {
    id: 'ecosystem',
    title: 'Why it exists in ForgeStack',
    content: `Lingo fills the gap between **ad-hoc i18n** and **heavy enterprise TMS** tools: typed-friendly keys, small bundle, first-class **RTL**, and a path to **managed keys** through Lingo Portal. Pair with **Bear** for locale toggles and **Compass** for localized routes when you build product UIs.`,
  },
];
