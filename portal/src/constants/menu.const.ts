// Hamburger drawer menu — top bar navigation

export const HOME_PATH = '/';
export const ECOSYSTEM_PATH = '/ecosystem';
export const AI_TOOLING_PATH = '/ai';
export const BLOG_PATH = '/blog';
export const ABOUT_PATH = '/about';

export const SECTION_IDS = {
  mcp: 'mcp',
  ai: 'ai',
  skills: 'skills',
  creator: 'creator',
  examples: 'code-examples',
} as const;

export interface AppMenuItem {
  id: string;
  label: string;
  /** External URL (opens in a new tab) */
  href?: string;
  /** Internal route (react-router path, may include a #hash) */
  route?: string;
  /** Rendered as disabled with a "soon" badge */
  comingSoon?: boolean;
}

export const APP_MENU_ITEMS: AppMenuItem[] = [
  { id: 'ecosystem', label: 'Ecosystem', route: ECOSYSTEM_PATH },
  { id: 'blog', label: 'Blog', route: BLOG_PATH },
  { id: 'mcp', label: 'MCP', route: `${AI_TOOLING_PATH}#${SECTION_IDS.mcp}` },
  { id: 'ai', label: 'AI', route: `${AI_TOOLING_PATH}#${SECTION_IDS.ai}` },
  { id: 'skills', label: 'Skills', route: `${AI_TOOLING_PATH}#${SECTION_IDS.skills}` },
  { id: 'about', label: 'About us', route: ABOUT_PATH },
];

export const MENU_DRAWER_TITLE = 'ForgeStack';
export const MENU_SOON_LABEL = 'soon';
export const MENU_ARIA_LABEL = 'Open ForgeStack menu';

export const CODE_BUTTON_LABEL = 'Code';
export const CODE_BUTTON_ARIA_LABEL = 'Open code examples';
