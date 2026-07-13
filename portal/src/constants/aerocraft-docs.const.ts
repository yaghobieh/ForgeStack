export interface AeroCraftDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
}

export const AEROCRAFT_VERSION = '1.0.1';

export const AEROCRAFT_PORTAL_URL = 'https://aerocraftjs.com';
export const AEROCRAFT_GITHUB_URL = 'https://github.com/yaghobieh/aero-craft';
export const AEROCRAFT_NPM = '@forgedevstack/aerocraft';

export const AEROCRAFT_DOCS: AeroCraftDocSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `**AeroCraft** is a shortcut-first CSS utility system: one class encodes a full intent (for example centered flex rows, line clamps, or grid presets) and PostCSS emits real CSS you can ship anywhere.

The **AeroCraft Portal** at ${AEROCRAFT_PORTAL_URL} is the official site: getting started, core concepts, full property reference, curated **recipes**, **Studio** (live config + preview), and a **Playground** for HTML snippets.

**What is new in v${AEROCRAFT_VERSION}**
- **componentRecipes** — built-in presets such as \`circle-button\` and \`input-rounded\`; merge or override per declaration in \`defineConfig\`.
- **utilityRecipe** — optional human-readable note on shortcuts (and on entries) for docs and tooling; legacy \`tailwind\` keys in config are still normalized at resolve time.

**Where to read about minimum / preset classes**
- Portal path: **Documentation → Core concepts → Component presets** (\`/docs/core-concepts/component-recipes\` on ${AEROCRAFT_PORTAL_URL.replace('https://', '')}).

**Links**
- Portal: ${AEROCRAFT_PORTAL_URL}
- Package: ${AEROCRAFT_NPM}
- Source: ${AEROCRAFT_GITHUB_URL}`,
  },
  {
    id: 'install',
    title: 'Install',
    content: 'Add the npm package and the PostCSS plugin, then reference `@aerocraft` from your CSS entry.',
    code: `npm install ${AEROCRAFT_NPM} postcss

import { aerocraftPlugin } from '${AEROCRAFT_NPM}/postcss';
import config from './aerocraft.config.js';

export default {
  plugins: [aerocraftPlugin(config)],
};`,
  },
  {
    id: 'ecosystem',
    title: 'ForgeStack',
    content: `AeroCraft pairs with **Bear** for UI, **Compass** for routing in demo apps, **Rail** (${'https://railjs.com'}) for carousels, and **Torch** (${'https://torchjs.com'}) for media players. Use \`defineConfig\` for design tokens, \`customShortcuts\` for bespoke patterns, and \`componentRecipes\` when you want single-class shells (buttons, inputs) without repeating the same declaration bundle.`,
  },
];
