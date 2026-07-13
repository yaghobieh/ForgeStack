import { SECTION_IDS } from './menu.const';

// MCP / AI / Skills anchor sections on the homepage

export interface FocusSection {
  id: string;
  anchorId: string;
  icon: string;
  title: string;
  description: string;
  points: string[];
  linkLabel: string;
  linkUrl: string;
}

export const FOCUS_SECTIONS_TITLE = 'Beyond the libraries';
export const FOCUS_SECTIONS_SUBTITLE =
  'ForgeStack is also tooling for the AI-native workflow — MCP servers, AI pipelines, and agent skills.';

export const FOCUS_SECTIONS: FocusSection[] = [
  {
    id: 'mcp',
    anchorId: SECTION_IDS.mcp,
    icon: '🧩',
    title: 'MCP',
    description:
      'Forge MCP lets you build Model Context Protocol servers with typed tools, resources, and prompts in a few lines of TypeScript — so your ForgeStack apps can talk to AI agents.',
    points: [
      'Typed tools, resources, and prompts',
      'A few lines of TypeScript to a running server',
      'Pairs with Harbor on the backend',
    ],
    linkLabel: 'forge-mcp on GitHub',
    linkUrl: 'https://github.com/yaghobieh/forge-mcp',
  },
  {
    id: 'ai',
    anchorId: SECTION_IDS.ai,
    icon: '🤖',
    title: 'AI',
    description:
      'Forge AI is a retrieval-augmented generation toolkit for Node.js: embeddings, vector search, and prompt pipelines. Lingo Portal already uses AI to translate every key to all languages in one click.',
    points: [
      'Embeddings and vector search for Node.js',
      'Composable prompt pipelines',
      'AI-assisted translation in Lingo Portal',
    ],
    linkLabel: 'forge-ai on GitHub',
    linkUrl: 'https://github.com/yaghobieh/forge-ai',
  },
  {
    id: 'skills',
    anchorId: SECTION_IDS.skills,
    icon: '🎓',
    title: 'Skills',
    description:
      'ForgeStack repos ship agent skills and rules for AI-assisted development — component workflows, code-quality checks, and release playbooks that keep generated code consistent with the ecosystem standards.',
    points: [
      'UI standards and component workflows as skills',
      'Code-review and code-quality playbooks',
      'Release workflows agents can follow end to end',
    ],
    linkLabel: 'Explore the ecosystem on GitHub',
    linkUrl: 'https://github.com/yaghobieh/ForgeStack',
  },
];
