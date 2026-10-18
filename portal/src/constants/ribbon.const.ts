// webOS-style library ribbon — one slice per ForgeStack library

export interface RibbonLibrary {
  id: string;
  name: string;
  icon: string;
  tagline: string;
  npmPackage: string;
  /** Internal portal route (react-router) — used when present */
  docsRoute?: string;
  /** External docs URL — used when no internal route exists */
  docsUrl?: string;
  githubUrl: string;
  /** Gradient stops for the slice surface */
  colorFrom: string;
  colorTo: string;
  /** Glow color used on hover */
  glow: string;
}

const GITHUB_BASE = 'https://github.com/yaghobieh';
const NPM_PACKAGE_BASE = 'https://www.npmjs.com/package';

export const npmPackageUrl = (npmPackage: string): string =>
  `${NPM_PACKAGE_BASE}/${npmPackage}`;

export const RIBBON_LIBRARIES: RibbonLibrary[] = [
  {
    id: 'bear',
    name: 'Bear',
    icon: '🐻',
    tagline: '60+ React UI components with light & dark mode. The flagship.',
    npmPackage: '@forgedevstack/bear',
    docsRoute: '/bear',
    githubUrl: `${GITHUB_BASE}/bear`,
    colorFrom: '#59adff',
    colorTo: '#1c70f5',
    glow: 'rgba(89, 173, 255, 0.55)',
  },
  {
    id: 'grid-table',
    name: 'Grid Table',
    icon: '📊',
    tagline: 'Enterprise data grid: grouping, range selection, infinite scroll.',
    npmPackage: '@forgedevstack/grid-table',
    docsRoute: '/table',
    githubUrl: `${GITHUB_BASE}/grid-table`,
    colorFrom: '#818cf8',
    colorTo: '#4f46e5',
    glow: 'rgba(129, 140, 248, 0.55)',
  },
  {
    id: 'harbor',
    name: 'Harbor',
    icon: '⚓',
    tagline: 'Node.js backend framework: ODM, WebSocket, auth, queues, mail.',
    npmPackage: '@forgedevstack/harbor',
    docsRoute: '/harbor/docs/quick-start',
    githubUrl: `${GITHUB_BASE}/Harbor`,
    colorFrom: '#3b82f6',
    colorTo: '#1d4ed8',
    glow: 'rgba(59, 130, 246, 0.55)',
  },
  {
    id: 'synapse',
    name: 'Synapse',
    icon: '🐙',
    tagline: 'Signal-based state management. No dispatch, no reducers.',
    npmPackage: '@forgedevstack/synapse',
    docsRoute: '/synapse',
    githubUrl: `${GITHUB_BASE}/synapse`,
    colorFrom: '#22d3ee',
    colorTo: '#0e7490',
    glow: 'rgba(34, 211, 238, 0.55)',
  },
  {
    id: 'forge-query',
    name: 'Forge Query',
    icon: '🐍',
    tagline: 'Data fetching with smart caching, refetching, and DevTools.',
    npmPackage: '@forgedevstack/forge-query',
    docsRoute: '/query',
    githubUrl: `${GITHUB_BASE}/forge-query`,
    colorFrom: '#2dd4bf',
    colorTo: '#0f766e',
    glow: 'rgba(45, 212, 191, 0.5)',
  },
  {
    id: 'forge-form',
    name: 'Forge Form',
    icon: '📝',
    tagline: 'Form state and validation with caching and API submission.',
    npmPackage: '@forgedevstack/forge-form',
    docsRoute: '/form',
    githubUrl: `${GITHUB_BASE}/forge-form`,
    colorFrom: '#6366f1',
    colorTo: '#3730a3',
    glow: 'rgba(99, 102, 241, 0.55)',
  },
  {
    id: 'forge-compass',
    name: 'Compass',
    icon: '🧭',
    tagline: 'Type-safe routing with guards, blocking, and transitions.',
    npmPackage: '@forgedevstack/forge-compass',
    docsRoute: '/compass',
    githubUrl: `${GITHUB_BASE}/compass`,
    colorFrom: '#38bdf8',
    colorTo: '#075985',
    glow: 'rgba(56, 189, 248, 0.5)',
  },
  {
    id: 'anvil',
    name: 'Anvil',
    icon: '⚒️',
    tagline: 'Utility library: type guards, deep clone, 40+ React hooks.',
    npmPackage: '@forgedevstack/anvil',
    docsRoute: '/anvil',
    githubUrl: `${GITHUB_BASE}/Anvil`,
    colorFrom: '#7dd3fc',
    colorTo: '#0284c7',
    glow: 'rgba(125, 211, 252, 0.5)',
  },
  {
    id: 'kiln',
    name: 'Kiln',
    icon: '🔥',
    tagline: 'Zero-config Storybook alternative for component showcases.',
    npmPackage: '@forgedevstack/kiln',
    docsRoute: '/kiln',
    githubUrl: `${GITHUB_BASE}/kiln`,
    colorFrom: '#67e8f9',
    colorTo: '#0891b2',
    glow: 'rgba(103, 232, 249, 0.5)',
  },
  {
    id: 'lingo',
    name: 'Lingo',
    icon: '🌐',
    tagline: 'i18n with nested keys, CLDR plurals, RTL, and React bindings.',
    npmPackage: '@forgedevstack/lingo',
    docsRoute: '/lingo',
    githubUrl: `${GITHUB_BASE}/lingo`,
    colorFrom: '#5eead4',
    colorTo: '#115e59',
    glow: 'rgba(94, 234, 212, 0.5)',
  },
  {
    id: 'rail',
    name: 'Rail',
    icon: '🚃',
    tagline: 'Modular carousel engine: touch, snap physics, 25+ modules.',
    npmPackage: '@forgedevstack/rail',
    docsRoute: '/rail',
    githubUrl: `${GITHUB_BASE}/rail`,
    colorFrom: '#4f6bf5',
    colorTo: '#312e81',
    glow: 'rgba(79, 107, 245, 0.55)',
  },
  {
    id: 'ink',
    name: 'Ink',
    icon: '🖋️',
    tagline: 'WYSIWYG rich editor: toolbar, typo auto-fix, AI stub.',
    npmPackage: '@forgedevstack/ink',
    docsUrl: 'https://inkforgejs.com',
    githubUrl: `${GITHUB_BASE}/ink`,
    colorFrom: '#5eead4',
    colorTo: '#0f766e',
    glow: 'rgba(20, 184, 166, 0.5)',
  },
  {
    id: 'forge-cli',
    name: 'Forge CLI',
    icon: '⌨️',
    tagline: 'Scaffold React, server, and full-stack monorepo projects.',
    npmPackage: '@forgedevstack/forge-cli',
    docsRoute: '/cli',
    githubUrl: `${GITHUB_BASE}/forge-cli`,
    colorFrom: '#93c5fd',
    colorTo: '#3b82f6',
    glow: 'rgba(147, 197, 253, 0.55)',
  },
  {
    id: 'lintforge',
    name: 'LintForge',
    icon: '✨',
    tagline: 'ESLint rules and style enforcement for the ecosystem.',
    npmPackage: '@forgedevstack/lintforge',
    githubUrl: `${GITHUB_BASE}/lintforge`,
    colorFrom: '#a5b4fc',
    colorTo: '#6366f1',
    glow: 'rgba(165, 180, 252, 0.5)',
  },
  {
    id: 'forge-socket',
    name: 'Forge Socket',
    icon: '🔌',
    tagline: 'Type-safe WebSocket client with auto-reconnect and rooms.',
    npmPackage: '@forgedevstack/forge-socket',
    githubUrl: `${GITHUB_BASE}/forge-socket`,
    colorFrom: '#06b6d4',
    colorTo: '#164e63',
    glow: 'rgba(6, 182, 212, 0.5)',
  },
  {
    id: 'forge-auth',
    name: 'Forge Auth',
    icon: '🔐',
    tagline: 'Node auth toolkit 2.0.1: sessions, Harbor middleware, OIDC.',
    npmPackage: '@forgedevstack/forge-auth',
    docsRoute: '/auth',
    githubUrl: `${GITHUB_BASE}/forge-auth`,
    colorFrom: '#60a5fa',
    colorTo: '#1e40af',
    glow: 'rgba(96, 165, 250, 0.55)',
  },
  {
    id: 'forge-ai',
    name: 'Forge AI',
    icon: '🤖',
    tagline: 'RAG toolkit: embeddings, vector search, prompt pipelines.',
    npmPackage: '@forgedevstack/forge-ai',
    githubUrl: `${GITHUB_BASE}/forge-ai`,
    colorFrom: '#6d8dff',
    colorTo: '#2f4bcc',
    glow: 'rgba(109, 141, 255, 0.55)',
  },
  {
    id: 'forge-mcp',
    name: 'Forge MCP',
    icon: '🧩',
    tagline: 'Build Model Context Protocol servers with typed tools.',
    npmPackage: '@forgedevstack/forge-mcp',
    githubUrl: `${GITHUB_BASE}/forge-mcp`,
    colorFrom: '#0ea5e9',
    colorTo: '#0369a1',
    glow: 'rgba(14, 165, 233, 0.5)',
  },
  {
    id: 'aerocraft',
    name: 'AeroCraft',
    icon: '✈️',
    tagline: 'Shortcut-first CSS utilities compiled with PostCSS.',
    npmPackage: '@forgedevstack/aerocraft',
    docsRoute: '/aerocraft',
    githubUrl: `${GITHUB_BASE}/aerocraft`,
    colorFrom: '#8ecbff',
    colorTo: '#155be2',
    glow: 'rgba(142, 203, 255, 0.55)',
  },
  {
    id: 'torch',
    name: 'Torch',
    icon: '🔦',
    tagline: 'Video, audio, reels, and ad players with React hooks.',
    npmPackage: '@forgedevstack/torch',
    docsRoute: '/torch',
    githubUrl: `${GITHUB_BASE}/torch`,
    colorFrom: '#45c4f9',
    colorTo: '#1273b8',
    glow: 'rgba(69, 196, 249, 0.5)',
  },
  {
    id: 'crucible',
    name: 'Crucible',
    icon: '🧪',
    tagline: 'Testing utilities forged for the ForgeStack ecosystem.',
    npmPackage: '@forgedevstack/crucible',
    githubUrl: `${GITHUB_BASE}/crucible`,
    colorFrom: '#94a9c9',
    colorTo: '#3c4f6e',
    glow: 'rgba(148, 169, 201, 0.5)',
  },
];

export const RIBBON_TITLE = 'The ForgeStack launcher';
export const RIBBON_SUBTITLE =
  'Every library in the ecosystem — hover a slice to peek, click to open the docs.';
export const RIBBON_HINT = 'Drag, scroll, or use the arrows to explore';

export const RIBBON_ACTION_LABELS = {
  docs: 'Docs',
  npm: 'npm',
  github: 'GitHub',
} as const;

export const RIBBON_DOWNLOADS_LABEL = '/week';
export const RIBBON_VERSION_PREFIX = 'v';

export const RIBBON_GAP_PX = 14;
export const RIBBON_PACKAGE_NAMES: readonly string[] = RIBBON_LIBRARIES.map(
  (lib) => lib.npmPackage
);
