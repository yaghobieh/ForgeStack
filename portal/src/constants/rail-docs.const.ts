export interface RailDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
}

export const RAIL_VERSION = '1.0.0';

export const RAIL_PORTAL_URL = 'https://railjs.com';
export const RAIL_PORTAL_STUDIO_URL = 'https://railjs.com/studio';
export const RAIL_GITHUB_URL = 'https://github.com/yaghobieh/rail';
export const RAIL_PORTAL_REPO_URL = 'https://github.com/yaghobieh/rail-portal';

export const RAIL_DOCS: RailDocSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `**Rail** is a modular carousel and slider engine for React: touch-ready, accessible, and built for real product UIs. It covers horizontal and vertical layouts, loop mode, responsive breakpoints, CSS scroll-snap mode, auto height, and a large set of optional **modules** (navigation, pagination, autoplay, keyboard, virtual slides, thumbs, and more) plus **effects** (fade, cube, flip, coverflow, cards, creative, StoryMode).

**Rail Portal** is the official documentation site: feature overview, Get Started, full API reference, live demos, and changelog. **Rail Studio** (inside the portal) is an interactive builder: tweak slides, effects, and navigation, then copy generated JSX.

**Links**
- Portal & docs: ${RAIL_PORTAL_URL}
- **Studio**: ${RAIL_PORTAL_STUDIO_URL}
- Library source: ${RAIL_GITHUB_URL}
- Portal source: ${RAIL_PORTAL_REPO_URL}`,
  },
  {
    id: 'installation',
    title: 'Installation',
    content: 'Install the npm package and import the default stylesheet (or ship equivalent CSS in your app).',
    code: `npm install @forgedevstack/rail

import { Rail, RailSlide, Navigation, Pagination } from '@forgedevstack/rail';
import '@forgedevstack/rail/styles.css';`,
  },
  {
    id: 'quick-start',
    title: 'Quick start',
    content: 'Register the modules you need on the `Rail` instance. Tree-shake imports so unused modules stay out of your bundle.',
    code: `import { Rail, RailSlide, Navigation, Pagination } from '@forgedevstack/rail';
import '@forgedevstack/rail/styles.css';

export function HeroCarousel() {
  return (
    <Rail
      slidesPerView={1}
      spaceBetween={24}
      navigation
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
    >
      <RailSlide>Slide 1</RailSlide>
      <RailSlide>Slide 2</RailSlide>
      <RailSlide>Slide 3</RailSlide>
    </Rail>
  );
}`,
  },
  {
    id: 'studio',
    title: 'Rail Studio',
    content: `**Rail Studio** is the visual playground on the Rail Portal. Pick presets, adjust slides per view, spacing, direction, effect type, pagination style, and more—then export ready-to-paste **React + Rail** code.

Open **${RAIL_PORTAL_STUDIO_URL}** (from the portal nav: Studio). When you self-host the portal from GitHub, the same route is **/studio** on your deployed origin.`,
  },
  {
    id: 'ecosystem',
    title: 'ForgeStack ecosystem',
    content: `Rail works alongside **Bear** for UI chrome, **Compass** for routing inside demo apps, and **Anvil** for small utilities. The portal itself is a Vite + React app; the library stays framework-agnostic aside from React as the supported renderer.`,
  },
];
