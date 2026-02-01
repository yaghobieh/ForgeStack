export const HARBOR_VERSION = '1.5.0';
export const VERSION = '1.0.0'; // ForgeStack version

export const TITLE = 'ForgeStack';
export const TAGLINE = 'Modern Developer Tools';
export const DESCRIPTION = 'A collection of powerful, type-safe developer tools for building better applications. From backend to frontend, ForgeStack has you covered.';

export const STATS = [
  { value: 'TypeScript', label: 'First Class Support' },
  { value: 'Minimal', label: 'Dependencies' },
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
    id: 'harbor',
    name: 'Harbor',
    title: 'Node.js Backend Framework',
    description: 'Complete backend framework with MongoDB ODM, WebSocket, scheduling, caching, authentication, and more.',
    icon: '⚓',
    status: 'ready',
    npmPackage: '@forgestack/harbor',
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
    version: '1.5.0',
    color: '#0066cc', // Harbor blue
  },
  {
    id: 'compass',
    name: 'Compass',
    title: 'React Router with Superpowers',
    description: 'Type-safe routing with guards, validations, middleware, and nested layouts.',
    icon: '🧭',
    status: 'coming-soon',
    npmPackage: '@forgestack/compass',
    docsPath: '/compass',
    features: [
      'Type-safe routes',
      'Route guards (auth, roles)',
      'Param validation',
      'Search param parsing',
      'Nested layouts',
      'Lazy loading',
    ],
    color: '#13c2c2',
    version: '0.1.0-alpha',
  },
  {
    id: 'form-manager',
    name: 'Form Manager',
    title: 'Form State & Validation',
    description: 'Declarative form management with validation, nested fields, and integrations. Coming soon.',
    icon: '📋',
    status: 'coming-soon',
    npmPackage: '@forgedevstack/form-manager',
    docsPath: '/form-manager',
    features: [
      'Declarative form state',
      'Built-in validation',
      'Nested fields',
      'TypeScript first',
    ],
    color: '#0ea5e9',
    version: '0.0.1',
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
    version: '1.0.0',
  },
  {
    id: 'table',
    name: 'Grid Table',
    title: 'React Data Grid',
    description: 'Powerful headless data table with sorting, filtering, pagination, sticky columns, and mobile-first responsive design. Built with SCSS for maximum customization.',
    icon: '📊',
    status: 'ready',
    npmPackage: '@forgedevstack/grid-table',
    docsPath: '/table',
    features: [
      'Sorting & multi-sort',
      'Filtering with operators',
      'Pagination',
      'Row selection',
      'Sticky columns (left/right)',
      'Drag & drop column reordering',
      'Column resize',
      'Custom cell rendering',
      'Cell click events',
      'Mobile responsive',
      'Dark/Light theme',
      'Skeleton loading',
      'SCSS styling',
    ],
    color: '#52c41a',
    version: '0.2.0',
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
    version: '1.0.0',
  },
  {
    id: 'bear',
    name: 'Bear',
    title: 'UI Component Library',
    description: 'Strong, reliable React UI components. Tailwind-powered, zero config required. Theme provider with hooks for full customization.',
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
    version: '1.0.3',
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
    version: '0.1.0',
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
];

export const GITHUB_URL = 'https://github.com/yaghobieh/ForgeStack';

export const QUICK_START_CODE = `import { createServer, connect, router, route } from '@forgestack/harbor';
import { Schema, model } from '@forgestack/harbor/database';
import { JWT, jwtAuth } from '@forgestack/harbor/auth';

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
