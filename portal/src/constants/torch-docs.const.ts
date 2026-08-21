export interface TorchDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
}

export const TORCH_VERSION = '1.0.1';

export const TORCH_GITHUB_URL = 'https://github.com/yaghobieh/torch';
export const TORCH_NPM = '@forgedevstack/torch';

export const TORCH_DOCS: TorchDocSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `**Torch** is the ForgeStack media layer: video, audio, vertical reels, and ad-oriented players with theming and a tracking pipeline.

Wrap your app (or a subtree) with **TorchProvider**, import the stylesheet once, then drop in **TorchPlayer**, **ReelPlayer**, or **AdPlayer**.

**Links**
- Package: ${TORCH_NPM}
- Source: ${TORCH_GITHUB_URL}`,
  },
  {
    id: 'install',
    title: 'Install',
    content: 'Install the package and import the stylesheet once. The CSS is required for layout, controls, and animations.',
    code: `npm install ${TORCH_NPM} react react-dom

import { TorchProvider, TorchPlayer } from '${TORCH_NPM}';
import '${TORCH_NPM}/styles.css';`,
  },
  {
    id: 'quick-start',
    title: 'Quick start',
    content: 'Provider config sets accent color and optional tracking. Players inherit those defaults unless you override per instance.',
    code: `import { TorchProvider, TorchPlayer } from '${TORCH_NPM}';
import '${TORCH_NPM}/styles.css';

export function App() {
  return (
    <TorchProvider
      config={{
        accentColor: '#f97316',
        tracking: { enabled: true, onEvent: (event) => console.log(event) },
      }}
    >
      <TorchPlayer
        src="https://example.com/video.mp4"
        poster="https://example.com/poster.jpg"
        size="md"
      />
    </TorchProvider>
  );
}`,
  },
  {
    id: 'players',
    title: 'Players',
    content: `**TorchPlayer** — standard video or audio. Required \`src\`. Optional \`type\` (\`video\` | \`audio\`), \`poster\`, \`size\` (\`sm\` | \`md\` | \`lg\` | \`full\`), \`playlist\`, \`mode="sticky"\` for a scroll-following mini player.

**ReelPlayer** — vertical feed. Required \`items\` (tracks plus optional avatar, username, counts). Swipe is wired for touch. Callbacks: \`onLike\`, \`onShare\`, \`onFollow\`, \`onComment\`.

**AdPlayer** — main content plus \`ads\` with \`pre-roll\`, \`mid-roll\`, or \`post-roll\`. Each ad can set \`skipAfter\`, \`clickUrl\`, and \`adId\`.

**Hooks** — \`useTorchPlayer\` for custom chrome, \`useTorchSticky\` for PiP-style positioning, \`useReelPlayer\` for reel index and gestures. \`useTorchContext()\` reads provider accent, tracking, and icon overrides.`,
  },
  {
    id: 'mobile',
    title: 'Mobile',
    content: `**Known gap:** TorchPlayer chrome is desktop-first. Seek uses mouse click coordinates, progress preview is hover-only, and volume/speed menus listen for mousedown. On phones the custom overlay often fails to seek, drag, or dismiss menus — especially on iOS Safari over a native \`<video>\`.

Until the next Torch release:
- Prefer **ReelPlayer** for vertical mobile feeds (touch swipe already exists).
- Use **muted + autoPlay** when the browser requires it.
- Keep controls large (\`size="full"\`) and test on a real device, not only desktop DevTools.
- Do not rely on hover volume, hover thumbnails, or Picture-in-Picture on iOS.

The next Torch slice should add HLS, captions, and iOS Picture-in-Picture. Seek and tap menus ship in 1.0.1.`,
  },
  {
    id: 'ecosystem',
    title: 'ForgeStack',
    content: `Use Torch with **Bear** for surrounding UI, **Compass** for navigation, **AeroCraft** for layout utilities, and **Rail** when you need carousel-style motion instead of a full media surface.`,
  },
];
