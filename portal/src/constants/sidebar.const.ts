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
  harbor: undefined,
  compass: 'SOON',
  'form-manager': 'SOON',
  synapse: undefined,
  table: undefined,
  anvil: undefined,
  bear: undefined,
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
      { id: 'github-org', label: 'GitHub', iconName: 'github', href: 'https://github.com/yaghobieh', external: true },
      { id: 'npm', label: 'npm', iconName: 'npm', href: 'https://www.npmjs.com/org/forgestack', external: true },
      { id: 'brand', label: 'Brand Guide', iconName: 'palette' },
    ],
  },
];
