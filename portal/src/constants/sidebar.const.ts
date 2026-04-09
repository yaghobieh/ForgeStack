export interface SidebarLink {
  id: string;
  label: string;
  iconName?: 'github' | 'email' | 'npm' | 'book' | 'blog' | 'sparkles' | 'palette' | 'package' | 'external' | 'extension' | 'robot';
  href?: string;
  badge?: 'NEW' | 'BETA' | 'ALPHA' | 'SOON';
  external?: boolean;
  disabled?: boolean;
}

export interface SidebarSection {
  id: string;
  title?: string;
  links: SidebarLink[];
}

export const PACKAGE_BADGES: Record<string, 'NEW' | 'BETA' | 'ALPHA' | 'SOON' | undefined> = {
  cli: 'NEW',
  auth: 'NEW',
  relay: 'NEW',
  rail: 'NEW',
  lingo: 'NEW',
  harbor: undefined,
  compass: undefined,
  form: undefined,
  synapse: undefined,
  query: undefined,
  table: undefined,
  anvil: undefined,
  bear: undefined,
  kiln: undefined,
  mcp: 'SOON',
};

export const SHOWCASE_REPOS = [
  {
    id: 'synapse',
    name: 'Synapse',
    description: 'State management library for React with saga-like effects',
    url: 'https://github.com/yaghobieh/Synapse',
    stars: 3,
  },
  {
    id: 'harbor',
    name: 'Harbor',
    description: 'Complete Node.js backend framework',
    url: 'https://github.com/yaghobieh/Harbor',
    stars: 0,
  },
  {
    id: 'npm-runner',
    name: 'npm-runner',
    description: 'CLI tool for running npm scripts',
    url: 'https://github.com/yaghobieh/npm-runner',
    stars: 0,
  },
  {
    id: 'gitforge',
    name: 'GitForge',
    description: 'Git workflow automation tool',
    url: 'https://github.com/yaghobieh/gitforge',
    stars: 0,
  },
  {
    id: 'rail',
    name: 'Rail',
    description: 'Modular React carousel engine',
    url: 'https://github.com/yaghobieh/rail',
    stars: 0,
  },
  {
    id: 'rail-portal',
    name: 'Rail Portal',
    description: 'Docs, demos, API reference, and Rail Studio',
    url: 'https://github.com/yaghobieh/rail-portal',
    stars: 0,
  },
  {
    id: 'lingo',
    name: 'Lingo',
    description: 'i18n and localization library',
    url: 'https://github.com/yaghobieh/lingo',
    stars: 0,
  },
  {
    id: 'lingo-portal',
    name: 'Lingo Portal',
    description: 'Translation management app (Bear, Compass, API server)',
    url: 'https://github.com/yaghobieh/lingo-portal',
    stars: 0,
  },
];

export const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    id: 'community',
    links: [
      { id: 'showcase', label: 'Showcase', iconName: 'sparkles' },
      { id: 'extensions', label: 'Extensions', iconName: 'extension', badge: 'NEW' },
      { id: 'mcp', label: 'MCP', iconName: 'robot', badge: 'SOON' },
      { id: 'blog', label: 'Blog', iconName: 'blog', badge: 'SOON' },
      { id: 'learn', label: 'Learn', iconName: 'book' },
    ],
  },
  {
    id: 'resources',
    title: 'Resources',
    links: [
      { id: 'templates', label: 'Templates', iconName: 'package' },
      { id: 'github-org', label: 'GitHub', iconName: 'github', href: 'https://github.com/yaghobieh', external: true },
      { id: 'npm', label: 'npm', iconName: 'npm', href: 'https://www.npmjs.com/org/forgestack', external: true },
      { id: 'brand', label: 'Brand Guide', iconName: 'palette' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    links: [
      { id: 'about', label: 'About Us', iconName: 'book' },
      { id: 'careers', label: 'Careers', iconName: 'sparkles', badge: 'SOON' },
    ],
  },
];
