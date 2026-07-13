export interface TorchDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
}

export const TORCH_VERSION = '1.0.1';

export const TORCH_PORTAL_URL = 'https://torchjs.com';
export const TORCH_GITHUB_URL = 'https://github.com/yaghobieh/torch';
export const TORCH_NPM = '@forgedevstack/torch';

export const TORCH_DOCS: TorchDocSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `**Torch** is the ForgeStack media layer: video, audio, reels, and ad-oriented players with theming and tracking-friendly hooks.

The **Torch Portal** at ${TORCH_PORTAL_URL} hosts documentation, examples, and integration notes alongside the rest of the stack.

**Links**
- Portal: ${TORCH_PORTAL_URL}
- Package: ${TORCH_NPM}
- Source: ${TORCH_GITHUB_URL}`,
  },
  {
    id: 'install',
    title: 'Install',
    content: 'Install the package and import the stylesheet when you use bundled player chrome.',
    code: `npm install ${TORCH_NPM}

import { TorchPlayer } from '${TORCH_NPM}';
import '${TORCH_NPM}/styles.css';`,
  },
  {
    id: 'ecosystem',
    title: 'ForgeStack',
    content: `Use Torch with **Bear** for surrounding UI, **Compass** for navigation, **AeroCraft** (${'https://aerocraftjs.com'}) for layout utilities, and **Rail** (${'https://railjs.com'}) when you need carousel-style motion instead of a full media surface.`,
  },
];
