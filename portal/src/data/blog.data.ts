import releaseWaveDeepDive from './articles/release-wave-deep-dive.md?raw';
import releaseWaveDevGuide from './articles/release-wave-dev-guide.md?raw';
import releaseWaveBrief from './articles/release-wave-brief.md?raw';
import railLaunch from './articles/rail-launch.md?raw';
import whyHarbor from './articles/why-harbor.md?raw';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  /** ISO date, used for display and JSON-LD datePublished */
  date: string;
  readingTimeMinutes: number;
  tags: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'forgestack-release-wave-2026-07',
    title: 'The ForgeStack Release Wave: Four New Libraries and the Missing Pieces for Real-Time, AI-Powered Apps',
    description:
      'forge-socket, forge-auth, forge-ai, and forge-mcp launch together, Harbor gets a WebSocket Hub and streaming uploads, and Grid Table lands AG-Grid-class features. The full story behind the largest coordinated release in ForgeStack history.',
    date: '2026-07-12',
    readingTimeMinutes: 9,
    tags: ['release', 'real-time', 'ai', 'typescript'],
    content: releaseWaveDeepDive,
  },
  {
    slug: 'release-wave-developer-guide',
    title: 'ForgeStack Release Wave: The Developer Guide, with Real Code',
    description:
      'A code-first walkthrough of the July 2026 release wave: typed WebSockets with forge-socket and the Harbor WS Hub, zero-dependency auth, a thin RAG toolkit, MCP servers, and the biggest Grid Table drop yet.',
    date: '2026-07-12',
    readingTimeMinutes: 7,
    tags: ['release', 'tutorial', 'react', 'nodejs'],
    content: releaseWaveDevGuide,
  },
  {
    slug: 'release-wave-in-brief',
    title: 'ForgeStack Release Wave, in Brief: 11 Packages in One Day',
    description:
      'The short version of the July 2026 release wave: four new libraries for real-time, auth, AI, and MCP, plus major updates to Harbor, Grid Table, Bear, Synapse, Forge Query, Compass, and Kiln.',
    date: '2026-07-12',
    readingTimeMinutes: 2,
    tags: ['release', 'announcement'],
    content: releaseWaveBrief,
  },
  {
    slug: 'rail-open-source-launch',
    title: 'Rail: The Motion Layer We Always Wanted for React',
    description:
      'We open-sourced Rail — a modular carousel engine for React with 25+ opt-in modules, snap physics, touch, accessibility, and effects from fade to Story Mode. Part of the ForgeStack ecosystem, built to sit next to Bear.',
    date: '2026-05-20',
    readingTimeMinutes: 5,
    tags: ['rail', 'react', 'open-source', 'ui'],
    content: railLaunch,
  },
  {
    slug: 'why-harbor',
    title: 'Why Harbor Is a Good Choice for Your Node Backend',
    description:
      'Harbor replaces the Express-plus-glue assembly with one coherent framework: server, routes, MongoDB ODM, validation, auth, WebSockets, scheduling, caching, metrics, and health checks — TypeScript-first and MIT licensed.',
    date: '2026-04-14',
    readingTimeMinutes: 4,
    tags: ['harbor', 'nodejs', 'backend'],
    content: whyHarbor,
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((post) => post.slug === slug);
