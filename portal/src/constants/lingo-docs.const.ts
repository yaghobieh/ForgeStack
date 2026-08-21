export interface LingoDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
}

export const LINGO_VERSION = '1.0.2';

export const LINGO_NPM_URL = 'https://www.npmjs.com/package/@forgedevstack/lingo';
export const LINGO_GITHUB_URL = 'https://github.com/yaghobieh/lingo';

export const LINGO_DOCS: LingoDocSection[] = [
  {
    id: 'what-is-lingo',
    title: 'What is Lingo?',
    content: `**Lingo** (\`@forgedevstack/lingo\`) is the ForgeStack **translation and localization** library. It gives you a small, predictable API for **nested keys**, **interpolation**, **CLDR-style plurals**, **RTL**, and **locale switching**, with a **framework-agnostic core** and an optional **React** layer (\`@forgedevstack/lingo/react\`).

Use **local JSON** bundles in-repo, or point the same client at a **remote HTTP** source so keys can be updated without redeploying copy for every tweak.

**Package**: ${LINGO_NPM_URL}  
**Source**: ${LINGO_GITHUB_URL}`,
  },
  {
    id: 'remote-source',
    title: 'Remote source',
    content: `Set \`source.type\` to \`remote\` (or \`hybrid\`) and pass an endpoint plus project id. The core fetches bundles over HTTP and still resolves keys, plurals, and RTL the same way as local maps.

There is **no React SSR** in the library itself: wrap the client with \`LingoProvider\` and load bundles on the client (or inject a preloaded map).`,
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
    id: 'formatters',
    title: 'Dates, numbers, and currency',
    content: 'Use the active locale for Intl formatters so copy and numbers stay in sync. Available on the instance and via `useLingoFormat`.',
    code: `const { formatDate, formatNumber, formatCurrency } = useLingoFormat();

formatDate(new Date(), { dateStyle: 'medium' });
formatNumber(1234.5, { maximumFractionDigits: 1 });
formatCurrency(19, 'USD');

lingo.formatDate(new Date());
lingo.formatNumber(1234.5);
lingo.formatCurrency(19, 'EUR');`,
  },
  {
    id: 'ecosystem',
    title: 'Why it exists in ForgeStack',
    content: `Lingo fills the gap between **ad-hoc i18n** and a heavy translation platform: typed-friendly keys, small bundle, first-class **RTL**, and a path to **managed keys** over HTTP. Pair with **Bear** for locale toggles and **Compass** for localized routes when you build product UIs.`,
  },
];
