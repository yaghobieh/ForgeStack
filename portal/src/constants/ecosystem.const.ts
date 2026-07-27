export interface EcosystemLayer {
  id: string;
  title: string;
  summary: string;
  color: string;
  packages: EcosystemLayerPackage[];
}

export interface EcosystemLayerPackage {
  packageId: string;
  name: string;
  role: string;
}

export const ECOSYSTEM_TITLE = 'How the pieces fit together';
export const ECOSYSTEM_SUBTITLE = 'Every library works standalone, but they are designed as one stack: build the interface with Bear, wire state and data, route with Compass, and serve it all from Harbor.';

export const ECOSYSTEM_LAYERS: EcosystemLayer[] = [
  {
    id: 'ui',
    title: 'User Interface',
    summary: 'Components, grids, carousels, and media players for the visible part of your app.',
    color: '#d97706',
    packages: [
      { packageId: 'bear', name: 'Bear', role: '60+ React UI components, light + dark mode' },
      { packageId: 'table', name: 'Grid Table', role: 'Enterprise data grid' },
      { packageId: 'rail', name: 'Rail', role: 'Carousels and sliders' },
      { packageId: 'torch', name: 'Torch', role: 'Video, audio, and ad players' },
    ],
  },
  {
    id: 'logic',
    title: 'App Logic',
    summary: 'State, forms, data fetching, and routing that connect UI to your backend.',
    color: '#a855f7',
    packages: [
      { packageId: 'synapse', name: 'Synapse', role: 'State management' },
      { packageId: 'form', name: 'Forge Form', role: 'Form state and validation' },
      { packageId: 'query', name: 'Forge Query', role: 'Data fetching and caching' },
      { packageId: 'compass', name: 'Compass', role: 'Client-side routing' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    summary: 'A Node.js framework with routes, controllers, services, database, and auth built in.',
    color: '#0066cc',
    packages: [
      { packageId: 'harbor', name: 'Harbor', role: 'Backend framework' },
      { packageId: 'auth', name: 'Forge Auth', role: 'Node auth toolkit (not AuthMaster React)' },
    ],
  },
  {
    id: 'tooling',
    title: 'Tooling & DX',
    summary: 'Scaffold projects, document components, style with shortcuts, and translate your app.',
    color: '#ec4899',
    packages: [
      { packageId: 'cli', name: 'Forge CLI', role: 'Project scaffolding' },
      { packageId: 'kiln', name: 'Kiln', role: 'Component docs (Storybook alternative)' },
      { packageId: 'aerocraft', name: 'AeroCraft', role: 'CSS utility shortcuts' },
      { packageId: 'lingo', name: 'Lingo', role: 'i18n and localization' },
      { packageId: 'anvil', name: 'Anvil', role: 'Utilities and hooks' },
    ],
  },
];
