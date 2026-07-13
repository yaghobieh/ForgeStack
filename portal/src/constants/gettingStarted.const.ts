export interface GettingStartedStep {
  number: number;
  title: string;
  description: string;
  code: string;
  language: 'bash' | 'tsx';
}

export const GETTING_STARTED_TITLE = 'Get started in 2 minutes';
export const GETTING_STARTED_SUBTITLE = 'Install Bear, the flagship UI library, and render your first component. Every ForgeStack package installs the same way.';

export const GETTING_STARTED_STEPS: GettingStartedStep[] = [
  {
    number: 1,
    title: 'Install Bear',
    description: 'Add the UI library to any React 18+ project.',
    code: 'npm install @forgedevstack/bear',
    language: 'bash',
  },
  {
    number: 2,
    title: 'Import the styles',
    description: 'One CSS import in your app entry file.',
    code: "import '@forgedevstack/bear/styles.css';",
    language: 'tsx',
  },
  {
    number: 3,
    title: 'Use components',
    description: 'Wrap your app in BearProvider for light/dark theming, then compose.',
    code: `import { BearProvider, Button, Card, CardHeader, CardBody } from '@forgedevstack/bear';

function App() {
  return (
    <BearProvider>
      <Card>
        <CardHeader>Welcome to ForgeStack</CardHeader>
        <CardBody>
          <Button variant="primary">Get Started</Button>
        </CardBody>
      </Card>
    </BearProvider>
  );
}`,
    language: 'tsx',
  },
];

export const GETTING_STARTED_NEXT_STEPS = [
  { label: 'Bear component docs', to: '/bear', external: false },
  { label: 'Scaffold a full app with Forge CLI', to: '/cli', external: false },
  { label: 'Build a backend with Harbor', to: '/harbor/docs/quick-start', external: false },
];
