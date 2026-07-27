export const HARBOR_VERSION = '1.6.2';
export const VERSION = '1.0.6';

export const TITLE = 'ForgeStack';
export const TAGLINE = 'One ecosystem. Every layer of your app.';
export const DESCRIPTION = 'ForgeStack is an open-source ecosystem of React and Node.js libraries published under @forgedevstack — UI components, data grid, forms, data fetching, state, routing, i18n, and a backend framework, designed to work together or standalone.';

export const NPM_SCOPE = '@forgedevstack';
export const NPM_ORG_URL = 'https://www.npmjs.com/org/forgedevstack';
export const HERO_INSTALL_COMMAND = 'npm install @forgedevstack/bear';

export const STATS = [
  { value: '15+', label: 'Published Packages' },
  { value: 'TypeScript', label: 'First Class Support' },
  { value: 'MIT', label: 'License' },
];

export interface ForgePackage {
  id: string;
  name: string;
  title: string;
  description: string;
  icon: string;
  status: 'ready' | 'coming-soon' | 'planned';
  npmPackage: string;
  docsPath: string;
  features: string[];
  color: string;
  version?: string;
}

export const PACKAGES: ForgePackage[] = [
  {
    id: 'cli',
    name: 'Forge CLI',
    title: 'Project Scaffolding',
    description: 'Create and manage ForgeStack projects with npx, pnpm, yarn, or bun. Templates for React, Server, and Full-Stack monorepos.',
    icon: '⚒️',
    status: 'ready',
    npmPackage: '@forgedevstack/forge-cli',
    docsPath: '/cli',
    features: [
      'React, Server, and Full-Stack templates',
      'React + Vite template',
      'Server (Express) template',
      'Full-stack monorepo template',
      'Bear UI integration',
      'Synapse nuclear generator',
      'forge-socket / forge-ai / forge-mcp / depwarden',
      'Custom theme colors',
      'npm, pnpm, yarn, bun support',
    ],
    color: '#ec4899',
    version: '1.0.6',
  },
  {
    id: 'harbor',
    name: 'Harbor',
    title: 'Node.js Backend Framework',
    description: 'Complete backend framework with MongoDB ODM, WebSocket, scheduling, caching, authentication, and more.',
    icon: '⚓',
    status: 'ready',
    npmPackage: '@forgedevstack/harbor',
    docsPath: '/harbor',
    features: [
      'Zero-config server creation',
      'MongoDB ODM (Mongoose replacement)',
      'JWT & API Key authentication',
      'WebSocket with rooms',
      'Job scheduling (cron)',
      'Rate limiting',
      'Caching (memory/Redis)',
      'Prometheus metrics',
      'Health checks',
      'File uploads',
      'i18n support',
    ],
    version: '1.6.2',
    color: '#0066cc',
  },
  {
    id: 'compass',
    name: 'Compass',
    title: 'Type-safe Routing',
    description: 'Type-safe routing with guards, permissions, navigation blocking, transitions, and DevTools.',
    icon: '🧭',
    status: 'ready',
    npmPackage: '@forgedevstack/forge-compass',
    docsPath: '/compass',
    features: [
      'Route guards (auth, roles, permissions)',
      'Navigation blocking (unsaved changes)',
      'Query string state sync',
      'Route prefetching',
      'Scroll restoration',
      'Route transitions',
      'Accessibility (announcer, focus)',
      'DevTools panel',
    ],
    color: '#3b82f6',
    version: '1.0.2',
  },
  {
    id: 'form',
    name: 'Form',
    title: 'Form Management',
    description: 'Lightweight form management with built-in validation, caching, API submission, and DevTools.',
    icon: '📝',
    status: 'ready',
    npmPackage: '@forgedevstack/forge-form',
    docsPath: '/form',
    features: [
      'Built-in validators',
      'Async validation',
      'Form persistence (cache)',
      'API submission with retries',
      'DevTools panel',
      'Zero dependencies',
    ],
    color: '#10b981',
    version: '1.0.0',
  },
  {
    id: 'synapse',
    name: 'Synapse',
    title: 'State Management',
    description: 'Ultra-simple state management for React. No dispatch, no reducers, just signals. Like Zustand but even simpler.',
    icon: '🐙',
    status: 'ready',
    npmPackage: '@forgedevstack/synapse',
    docsPath: '/synapse',
    features: [
      'Nucleus (simple state containers)',
      'Signals & computed values',
      'React hooks (useNucleus, usePick)',
      'Chrome/Safari DevTools',
      'Time-travel debugging',
      'Middleware (logger, persist, immer)',
      'API hooks (useQuery, useMutation)',
      'Full TypeScript support',
      '< 2KB gzipped',
    ],
    color: '#a855f7',
    version: '1.2.0',
  },
  {
    id: 'query',
    name: 'Forge Query',
    title: 'Data Fetching & Caching',
    description: 'Powerful data fetching library with smart caching, automatic refetching, and DevTools support.',
    icon: '🐍',
    status: 'ready',
    npmPackage: '@forgedevstack/forge-query',
    docsPath: '/query',
    features: [
      'Smart caching (LRU)',
      'Background refetching',
      'Automatic retries with backoff',
      'Request deduplication',
      'useMutation hook',
      'Chrome/Safari DevTools',
      'TypeScript first',
      'Works with React 16.8+',
      'Offline support',
      '< 3KB gzipped',
    ],
    color: '#eb2f96',
    version: '1.0.0',
  },
  {
    id: 'table',
    name: 'Grid Table',
    title: 'React Data Grid',
    description: 'Enterprise-grade React data grid with range selection, infinite scroll, row grouping, sorting, filtering, pagination, and sticky columns. Mobile-first, dark/light themes, SCSS styling.',
    icon: '📊',
    status: 'ready',
    npmPackage: '@forgedevstack/grid-table',
    docsPath: '/table',
    features: [
      'Range selection (Excel-like)',
      'Infinite scroll',
      'Row grouping',
      'Sorting & multi-sort',
      'Filtering with operators',
      'Pagination',
      'Row selection',
      'Sticky columns (left/right)',
      'Drag & drop column reordering',
      'Column resize',
      'Custom cell rendering',
      'Mobile responsive',
      'Dark/Light theme',
    ],
    color: '#52c41a',
    version: '1.1.1',
  },
  {
    id: 'anvil',
    name: 'Anvil',
    title: 'Utility Library + Hooks',
    description: 'Modern utility library like Lodash with React hooks and Vue composables. Type guards, deep clone, array/object utilities, and 40+ hooks.',
    icon: '⚒️',
    status: 'ready',
    npmPackage: '@forgedevstack/anvil',
    docsPath: '/anvil',
    features: [
      '100+ utility functions',
      'Type guards (isNull, isEmpty, etc.)',
      'Deep clone & freeze',
      'Array utilities (unique, chunk, groupBy)',
      'Object utilities (get, set, merge)',
      'String utilities (camelCase, slugify)',
      'Function utilities (debounce, throttle)',
      'React hooks (useForm, useResponsive)',
      'Vue composables',
      'Full TypeScript support',
      'Zero dependencies',
      'Tree-shakeable',
    ],
    color: '#EC4899',
    version: '1.0.6',
  },
  {
    id: 'bear',
    name: 'Bear',
    title: 'UI Component Library',
    description: 'The flagship ForgeStack library: 60+ strong, reliable React UI components with light and dark mode. Tailwind-powered, zero config required. Theme provider with hooks for full customization.',
    icon: '🐻',
    status: 'ready',
    npmPackage: '@forgedevstack/bear',
    docsPath: '/bear',
    features: [
      'Zero-config Tailwind',
      'Theme Provider with hooks',
      'Light/Dark mode',
      'Button, Card, Modal, Drawer',
      'Tooltip, Input, Select, Switch',
      'Grid, Flex, Container, Badge',
      'Icon system with presets',
      'Responsive hooks (useIsMobile)',
      'useDisclosure, useClickOutside',
      'Full TypeScript support',
      'Accessible (WCAG 2.1)',
      'Mobile-first design',
      'Tree-shakeable',
    ],
    color: '#d97706',
    version: '1.2.4',
  },
  {
    id: 'rail',
    name: 'Rail',
    title: 'React Carousel Engine',
    description:
      'Modular carousel for React: touch, snap, loop, breakpoints, CSS scroll-snap, modules, and effects. Documentation, demos, API reference, and Rail Studio live at railjs.com.',
    icon: '🚃',
    status: 'ready',
    npmPackage: '@forgedevstack/rail',
    docsPath: '/rail',
    features: [
      'Touch and mouse drag with configurable physics',
      'Navigation, pagination, autoplay, keyboard, thumbs',
      'Virtual slides, parallax, free mode, grid, zoom',
      'Effects: fade, cube, flip, coverflow, cards, creative, StoryMode',
      'Accessible A11y module and useRail hook',
      'Import CSS from package or copy rail.css',
      'Tree-shakeable module imports',
    ],
    color: '#06b6d4',
    version: '1.0.0',
  },
  {
    id: 'kiln',
    name: 'Kiln',
    title: 'Component Documentation Tool',
    description: 'Lightweight Storybook alternative. Document and showcase your components with zero config. CLI with kiln init for instant setup.',
    icon: '🔥',
    status: 'ready',
    npmPackage: '@forgedevstack/kiln',
    docsPath: '/kiln',
    features: [
      'Zero-config setup',
      'kiln init CLI',
      'kiln.config.json',
      'Story file format',
      'Live preview canvas',
      'Code snippets',
      'Dark/Light theme',
      'Search components',
      'Sidebar navigation',
      'Minimal bundle (~15KB)',
      'Custom theming',
      'Story groups',
    ],
    color: '#b45309',
    version: '1.0.5',
  },
  {
    id: 'lingo',
    name: 'Lingo',
    title: 'i18n & Translation',
    description:
      'Translation and localization for ForgeStack apps. Nested keys, interpolation, CLDR plurals, RTL, and optional React bindings. Pair with Lingo Portal for remote keys and AI-assisted translation.',
    icon: '🌐',
    status: 'ready',
    npmPackage: '@forgedevstack/lingo',
    docsPath: '/lingo',
    features: [
      'Dot-notation keys and nested namespaces',
      '{{variable}} interpolation',
      'CLDR plural categories (30+ locales)',
      'RTL: dir and lang on document / provider',
      'Local bundles or Lingo Portal API',
      'Framework-agnostic core + React adapter',
      'Locale persistence (localStorage)',
      'Zero runtime deps in core (React optional peer)',
    ],
    color: '#0d9488',
    version: '1.0.1',
  },
  {
    id: 'aerocraft',
    name: 'AeroCraft',
    title: 'CSS shortcut utilities',
    description:
      'Shortcut-first utilities compiled to plain CSS with PostCSS. Official docs, Studio, Playground, and v1.0.1 component presets at aerocraftjs.com.',
    icon: '✈️',
    status: 'ready',
    npmPackage: '@forgedevstack/aerocraft',
    docsPath: '/aerocraft',
    features: [
      'Layout, spacing, typography, and motion shortcuts',
      'Design tokens via theme (colors, spacing, radii)',
      'componentRecipes (circle-button, input-rounded) + customShortcuts',
      'utilityRecipe metadata for docs and tooling',
      'Responsive breakpoint prefixes, CLI, React helpers, pre-built CSS',
    ],
    color: '#6366f1',
    version: '1.0.5',
  },
  {
    id: 'torch',
    name: 'Torch',
    title: 'Media & ad players',
    description:
      'Video, audio, reels, and ad players with React hooks and theming. Documentation and examples on torchjs.com.',
    icon: '🔦',
    status: 'ready',
    npmPackage: '@forgedevstack/torch',
    docsPath: '/torch',
    features: [
      'Configurable players for product surfaces',
      'React hooks and context',
      'Stylesheet export from the package',
    ],
    color: '#f97316',
    version: '1.0.0',
  },
  {
    id: 'auth',
    name: 'AuthMaster',
    title: 'OAuth Authentication',
    description: 'Simple OAuth authentication for React with Google, Facebook, and GitHub. Built-in UI components and configurable log levels.',
    icon: '🔐',
    status: 'ready',
    npmPackage: '@forgedevstack/forge-auth',
    docsPath: '/auth',
    features: [
      'Google OAuth',
      'Facebook Login',
      'GitHub OAuth',
      'Type-safe TypeScript',
      'Session persistence',
      'Configurable log levels',
      'AuthGuard component',
      'UserAvatar, UserInfo',
      'Zero config defaults',
      '~5KB gzipped',
    ],
    color: '#8b5cf6',
    version: '1.0.0',
  },
  {
    id: 'relay',
    name: 'Relay',
    title: 'HTTP Client',
    description: 'Zero-dependency HTTP client built on native fetch. Axios alternative with interceptors, retry, WebSocket, and React hooks.',
    icon: '📡',
    status: 'coming-soon',
    npmPackage: '@forgedevstack/relay',
    docsPath: '/relay',
    features: [
      'Zero dependencies',
      'Built on native fetch',
      'Request/response interceptors',
      'Timeout & retry logic',
      'File upload with progress',
      'Request cancellation',
      'WebSocket client',
      'Auto-reconnect',
      'React hooks (useRelay, useSocket)',
      'Full TypeScript support',
      '< 5KB gzipped',
    ],
    color: '#6366f1',
    version: '1.0.0',
  },
  {
    id: 'lintforge',
    name: 'LintForge',
    title: 'Lint Rules',
    description: 'ESLint rules and style enforcement for ForgeStack and Bear UI projects. Keep types in type files, constants in const files, and code consistent across the ecosystem.',
    icon: '✨',
    status: 'coming-soon',
    npmPackage: '@forgedevstack/lintforge',
    docsPath: '/lintforge',
    features: [
      'ForgeStack code style rules',
      'Bear UI conventions',
      'Types and constants file enforcement',
      'VS Code extension available today',
    ],
    color: '#ec4899',
  },
  {
    id: 'socket',
    name: 'Forge Socket',
    title: 'WebSocket Client',
    description: 'Type-safe WebSocket client with auto-reconnect, rooms, and React hooks. Pairs with Harbor WebSocket on the server.',
    icon: '🔌',
    status: 'coming-soon',
    npmPackage: '@forgedevstack/forge-socket',
    docsPath: '/socket',
    features: [
      'Auto-reconnect with backoff',
      'Rooms and channels',
      'React hooks (useSocket)',
      'Works with Harbor WebSocket',
    ],
    color: '#14b8a6',
  },
  {
    id: 'ai',
    name: 'Forge AI',
    title: 'RAG Toolkit',
    description: 'Retrieval-augmented generation toolkit: embeddings, vector search, and prompt pipelines for Node.js apps.',
    icon: '🤖',
    status: 'coming-soon',
    npmPackage: '@forgedevstack/forge-ai',
    docsPath: '/ai',
    features: [
      'Embeddings and vector search',
      'Prompt pipelines',
      'Streaming responses',
      'Harbor integration',
    ],
    color: '#22d3ee',
  },
  {
    id: 'mcp',
    name: 'Forge MCP',
    title: 'MCP Server Helper',
    description: 'Build Model Context Protocol servers with typed tools, resources, and prompts in a few lines of TypeScript.',
    icon: '🛠️',
    status: 'coming-soon',
    npmPackage: '@forgedevstack/forge-mcp',
    docsPath: '/mcp',
    features: [
      'Typed tool definitions',
      'Resources and prompts',
      'stdio and HTTP transports',
      'Zero-config setup',
    ],
    color: '#f59e0b',
  },
];

export interface ForgeExtension {
  id: string;
  name: string;
  platform: 'vscode' | 'cursor' | 'chrome' | 'jetbrains';
  description: string;
  link: string;
  openVsxLink?: string;
  marketplaceLink?: string;
  icon: string;
  color: string;
  status: 'ready' | 'coming-soon';
}

export const EXTENSIONS: ForgeExtension[] = [
  {
    id: 'gitforge',
    name: 'GitForge',
    platform: 'vscode',
    description: 'Powerful Git management extension for VS Code and Cursor. Streamline your Git workflow with intuitive UI and smart commands.',
    link: 'https://open-vsx.org/extension/Yaghobieh/gitforge',
    openVsxLink: 'https://open-vsx.org/extension/Yaghobieh/gitforge',
    icon: '🔀',
    color: '#f05033',
    status: 'ready',
  },
  {
    id: 'npm-runner',
    name: 'npm Runner',
    platform: 'vscode',
    description: 'Run npm scripts directly from VS Code with a single click. Supports npm, yarn, pnpm, and bun.',
    link: 'https://open-vsx.org/extension/Yaghobieh/npm-runner',
    openVsxLink: 'https://open-vsx.org/extension/Yaghobieh/npm-runner',
    icon: '📦',
    color: '#cb3837',
    status: 'ready',
  },
  {
    id: 'lintforge',
    name: 'LintForge',
    platform: 'vscode',
    description: 'ESLint and style enforcement for ForgeStack and Bear UI projects. Keep code consistent across the ecosystem.',
    link: 'https://open-vsx.org/extension/Yaghobieh/lintforge',
    openVsxLink: 'https://open-vsx.org/extension/Yaghobieh/lintforge',
    icon: '✨',
    color: '#ec4899',
    status: 'ready',
  },
];

export const GITHUB_URL = 'https://github.com/yaghobieh/ForgeStack';

export const QUICK_START_CODE = `import { createServer, connect, router, route } from '@forgedevstack/harbor';
import { Schema, model } from '@forgedevstack/harbor/database';
import { JWT, jwtAuth } from '@forgedevstack/harbor/auth';

// Connect to MongoDB
await connect('mongodb://localhost:27017/myapp');

// Define a model
const User = model('User', new Schema({
  email: { type: 'string', required: true, unique: true },
  name: { type: 'string', required: true },
}));

// Setup JWT
const jwt = new JWT({ secret: process.env.JWT_SECRET! });

// Create server
const server = createServer({ port: 3000 });

// Define routes
const userRoutes = router('/api/users', [
  route.get('/', async () => {
    const users = await User.find();
    return { users };
  }),
  
  route.get('/:id', async (req) => {
    const user = await User.findById(req.params.id);
    return { user };
  }),
  
  route.post('/', async (req) => {
    const user = await User.create(req.body);
    return { user };
  }, {
    validation: {
      body: {
        email: { type: 'email', required: true },
        name: { type: 'string', required: true, min: 2 },
      },
    },
  }),
]);

// Protected routes
server.use('/api', jwtAuth(jwt));
server.use(userRoutes);
server.listen(3000);`;
