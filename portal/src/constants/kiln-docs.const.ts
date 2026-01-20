/**
 * Kiln Documentation Constants
 * Comprehensive documentation for the component documentation tool
 */

export const KILN_COLOR = '#b45309';

export interface KilnNavItem {
  path: string;
  label: string;
  exact?: boolean;
}

export const KILN_NAV: KilnNavItem[] = [
  { path: '', label: 'Overview', exact: true },
  { path: 'installation', label: 'Installation' },
  { path: 'quick-start', label: 'Quick Start' },
  { path: 'config', label: 'Configuration' },
  { path: 'stories', label: 'Writing Stories' },
  { path: 'canvas', label: 'Canvas Options' },
  { path: 'theming', label: 'Theming' },
  { path: 'cli', label: 'CLI Commands' },
  { path: 'api', label: 'API Reference' },
];

export interface KilnDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
  filename?: string;
  livePreview?: boolean;
  features?: string[];
  comparison?: { kiln: string; storybook: string }[];
}

export interface KilnDocPage {
  slug: string;
  title: string;
  description: string;
  sections: KilnDocSection[];
}

export const KILN_DOCS: Record<string, KilnDocPage> = {
  overview: {
    slug: 'overview',
    title: 'Kiln',
    description: 'Lightweight component documentation tool. A blazing-fast Storybook alternative.',
    sections: [
      {
        id: 'intro',
        title: 'Why Kiln? 🔥',
        content: 'Kiln is where your components get tested with heat. Unlike Storybook\'s bloated setup, Kiln is minimal, fast, and just works. Zero config required - just run kiln init and start documenting your components.',
      },
      {
        id: 'comparison',
        title: 'Kiln vs Storybook',
        content: 'See how Kiln compares to Storybook:',
        comparison: [
          { kiln: '~15KB bundle', storybook: '~2MB+ bundle' },
          { kiln: 'Zero config', storybook: 'Complex config' },
          { kiln: '<1s startup', storybook: '10-30s startup' },
          { kiln: 'Simple API', storybook: 'Complex addon system' },
          { kiln: 'Just React', storybook: 'Framework adapters' },
        ],
      },
      {
        id: 'features',
        title: 'Features',
        content: 'Everything you need to document your components:',
        features: [
          'Zero-config setup (just run kiln init)',
          '~15KB bundle (vs Storybook\'s 2MB+)',
          'Story file format (.story.tsx)',
          'Live preview canvas with controls',
          'Code snippets with one-click copy',
          'Dark/Light theme toggle',
          'Component search',
          'Sidebar navigation',
          'Custom theming via kiln.config.json',
          'Story groups and organization',
          'React 18+ support',
          'Full TypeScript support',
        ],
      },
      {
        id: 'quick-install',
        title: 'Quick Start',
        content: 'Get started with Kiln in under a minute:',
        code: `# Install Kiln
npm install @forgedevstack/kiln --save-dev

# Initialize (creates kiln.config.json)
npx kiln init

# Start the dev server
npx kiln dev

# Open http://localhost:6006 to see your docs!`,
        filename: 'terminal',
      },
    ],
  },
  installation: {
    slug: 'installation',
    title: 'Installation',
    description: 'Get Kiln up and running in your project.',
    sections: [
      {
        id: 'requirements',
        title: 'Requirements',
        content: 'Before installing Kiln, make sure you have:\n\n• Node.js 18+ installed\n• React 18+ in your project\n• TypeScript (recommended but optional)',
      },
      {
        id: 'npm',
        title: 'Install with Package Manager',
        content: 'Install Kiln using your preferred package manager:',
        code: `# npm
npm install @forgedevstack/kiln --save-dev

# yarn  
yarn add @forgedevstack/kiln --dev

# pnpm
pnpm add @forgedevstack/kiln -D

# bun
bun add @forgedevstack/kiln -d`,
        filename: 'terminal',
      },
      {
        id: 'init',
        title: 'Initialize Kiln',
        content: 'Run the init command to create the configuration file. This sets up everything you need:',
        code: `npx kiln init

# This creates kiln.config.json with these defaults:
{
  "title": "My Component Library",
  "description": "Component documentation powered by Kiln",
  "theme": "dark",
  "primaryColor": "#d97706",
  "stories": [
    "src/**/*.story.tsx",
    "src/**/*.stories.tsx"
  ],
  "port": 6006,
  "showCodeDefault": true
}`,
        filename: 'kiln.config.json',
      },
      {
        id: 'scripts',
        title: 'Add Scripts',
        content: 'Add these scripts to your package.json for convenience:',
        code: `{
  "scripts": {
    "kiln": "kiln dev",
    "kiln:build": "kiln build",
    "kiln:preview": "kiln preview"
  }
}`,
        filename: 'package.json',
      },
    ],
  },
  'quick-start': {
    slug: 'quick-start',
    title: 'Quick Start',
    description: 'Create your first story in minutes.',
    sections: [
      {
        id: 'first-story',
        title: 'Your First Story',
        content: 'Create a .story.tsx file next to your component. Stories are just descriptions of your component in different states:',
        code: `// Button.story.tsx
import { defineStories, defineStory } from '@forgedevstack/kiln';
import { Button } from './Button';

export default defineStories({
  title: 'Button',
  component: Button,
  description: 'Primary button component for user actions.',
  stories: [
    defineStory({
      name: 'Primary',
      render: () => <Button variant="primary">Click me</Button>,
      code: '<Button variant="primary">Click me</Button>',
      description: 'The primary button variant.',
    }),
    defineStory({
      name: 'Secondary',
      render: () => <Button variant="secondary">Cancel</Button>,
      code: '<Button variant="secondary">Cancel</Button>',
    }),
    defineStory({
      name: 'Danger',
      render: () => <Button variant="danger">Delete</Button>,
      code: '<Button variant="danger">Delete</Button>',
    }),
  ],
});`,
        filename: 'Button.story.tsx',
      },
      {
        id: 'run-kiln',
        title: 'Start Kiln',
        content: 'Run the dev server and see your stories come to life:',
        code: `npx kiln dev

# Output:
# 🔥 Kiln is running at http://localhost:6006
# Found 3 stories in 1 group
# Watching for changes...

# Hot reloads when you edit story files!`,
        filename: 'terminal',
      },
      {
        id: 'story-with-args',
        title: 'Stories with Args',
        content: 'Pass props to your component using the args property. This is useful when your component has many props:',
        code: `defineStory({
  name: 'With All Props',
  render: (props) => <Button {...props} />,
  args: {
    variant: 'primary',
    size: 'lg',
    disabled: false,
    loading: false,
    children: 'Submit',
  },
  code: \`<Button 
  variant="primary" 
  size="lg" 
  disabled={false}
>
  Submit
</Button>\`,
  description: 'Button with all props configured.',
})`,
        filename: 'Button.story.tsx',
      },
      {
        id: 'file-structure',
        title: 'Recommended File Structure',
        content: 'Keep story files alongside your components for easy maintenance:',
        code: `src/
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.story.tsx    ← Story file
│   │   ├── Button.test.tsx
│   │   └── index.ts
│   ├── Card/
│   │   ├── Card.tsx
│   │   ├── Card.story.tsx
│   │   └── index.ts
│   └── Badge/
│       ├── Badge.tsx
│       ├── Badge.story.tsx
│       └── index.ts
└── kiln.config.json`,
        filename: 'file-structure',
      },
    ],
  },
  config: {
    slug: 'config',
    title: 'Configuration',
    description: 'Customize Kiln with kiln.config.json.',
    sections: [
      {
        id: 'options',
        title: 'Config Options',
        content: 'Full configuration reference for kiln.config.json:',
        code: `{
  // Site title (shown in sidebar header)
  "title": "My Components",
  
  // Description for SEO
  "description": "Component documentation for my project",
  
  // Logo path (relative or URL)
  "logo": "./logo.svg",
  
  // Theme mode: "light" | "dark" | "auto"
  "theme": "dark",
  
  // Primary brand color (hex)
  "primaryColor": "#d97706",
  
  // Story file patterns (glob)
  "stories": [
    "src/**/*.story.tsx",
    "src/**/*.stories.tsx"
  ],
  
  // Dev server port
  "port": 6006,
  
  // Show code by default in preview
  "showCodeDefault": true,
  
  // Enable testing panel (experimental)
  "testing": false,
  
  // Output directory for build
  "outDir": "kiln-static"
}`,
        filename: 'kiln.config.json',
      },
      {
        id: 'theme-options',
        title: 'Theme Options',
        content: 'The theme option controls the default appearance:',
        code: `// Dark mode (default)
{ "theme": "dark" }

// Light mode
{ "theme": "light" }

// Auto (follows system preference)
{ "theme": "auto" }`,
        filename: 'kiln.config.json',
      },
      {
        id: 'story-patterns',
        title: 'Story File Patterns',
        content: 'Use glob patterns to find your story files:',
        code: `{
  "stories": [
    // All .story.tsx files in src
    "src/**/*.story.tsx",
    
    // Also match .stories.tsx (Storybook style)
    "src/**/*.stories.tsx",
    
    // Only in components folder
    "src/components/**/*.story.tsx",
    
    // Exclude node_modules (automatic)
  ]
}`,
        filename: 'kiln.config.json',
      },
    ],
  },
  stories: {
    slug: 'stories',
    title: 'Writing Stories',
    description: 'Learn how to write effective component stories.',
    sections: [
      {
        id: 'structure',
        title: 'Story Structure',
        content: 'Each story file exports a default with a stories array. Use defineStories and defineStory helpers for type safety:',
        code: `import { defineStories, defineStory } from '@forgedevstack/kiln';
import { Card } from './Card';

export default defineStories({
  // Group title in sidebar
  title: 'Card',
  
  // The component being documented
  component: Card,
  
  // Optional description
  description: 'Flexible container component.',
  
  // Array of story variations
  stories: [
    defineStory({
      // Story name in sidebar
      name: 'Default',
      
      // Render function (required)
      render: () => <Card>Content</Card>,
      
      // Code to display (optional)
      code: '<Card>Content</Card>',
      
      // Story description (optional)
      description: 'Basic card usage.',
    }),
  ],
});`,
        filename: 'Card.story.tsx',
      },
      {
        id: 'render-props',
        title: 'Using render with Props',
        content: 'The render function can receive props from args:',
        code: `defineStory({
  name: 'With Title',
  render: (props) => <Card {...props} />,
  args: {
    title: 'Welcome',
    variant: 'elevated',
    children: 'Card content goes here.',
  },
  code: \`<Card title="Welcome" variant="elevated">
  Card content goes here.
</Card>\`,
})`,
        filename: 'Card.story.tsx',
      },
      {
        id: 'complex-stories',
        title: 'Complex Stories',
        content: 'For more complex examples, use a full render function:',
        code: `defineStory({
  name: 'With Actions',
  render: () => {
    const [count, setCount] = useState(0);
    
    return (
      <Card title="Interactive Card">
        <p>Count: {count}</p>
        <Button onClick={() => setCount(c => c + 1)}>
          Increment
        </Button>
      </Card>
    );
  },
  code: \`const [count, setCount] = useState(0);

<Card title="Interactive Card">
  <p>Count: {count}</p>
  <Button onClick={() => setCount(c => c + 1)}>
    Increment
  </Button>
</Card>\`,
  description: 'Card with interactive state.',
})`,
        filename: 'Card.story.tsx',
      },
      {
        id: 'organizing',
        title: 'Organizing Stories',
        content: 'Group related stories together and use descriptive names:',
        code: `// Good: Descriptive, organized
defineStories({
  title: 'Form / Input',  // Creates nested group
  stories: [
    { name: 'Default' },
    { name: 'With Label' },
    { name: 'With Error' },
    { name: 'Disabled' },
    { name: 'With Helper Text' },
  ],
});

// Good: Separate files for variants
// Button.story.tsx - basic variants
// ButtonGroup.story.tsx - grouped buttons
// ButtonIcons.story.tsx - with icons`,
        filename: 'best-practices.tsx',
      },
    ],
  },
  canvas: {
    slug: 'canvas',
    title: 'Canvas Options',
    description: 'Customize the preview canvas for your stories.',
    sections: [
      {
        id: 'backgrounds',
        title: 'Background Options',
        content: 'Use KilnCanvas to control the preview background. This is useful for components that need specific backgrounds:',
        code: `import { KilnCanvas } from '@forgedevstack/kiln';

// Transparent background (default)
<KilnCanvas background="transparent">
  <MyComponent />
</KilnCanvas>

// Light background
<KilnCanvas background="light">
  <DarkComponent />
</KilnCanvas>

// Dark background
<KilnCanvas background="dark">
  <LightComponent />
</KilnCanvas>

// Checker pattern (for transparency)
<KilnCanvas background="checker">
  <IconWithTransparency />
</KilnCanvas>`,
        filename: 'canvas-backgrounds.tsx',
      },
      {
        id: 'sizing',
        title: 'Canvas Sizing',
        content: 'Control padding and centering for better presentation:',
        code: `// Centered with medium padding (default)
<KilnCanvas centered padding="md">
  <Button>Centered</Button>
</KilnCanvas>

// No padding, not centered (full width)
<KilnCanvas centered={false} padding="none">
  <FullWidthComponent />
</KilnCanvas>

// Large padding for small components
<KilnCanvas padding="lg">
  <Icon name="star" />
</KilnCanvas>

// Small padding for compact view
<KilnCanvas padding="sm">
  <Badge>Compact</Badge>
</KilnCanvas>`,
        filename: 'canvas-sizing.tsx',
      },
      {
        id: 'in-stories',
        title: 'Using Canvas in Stories',
        content: 'Wrap your render function with KilnCanvas for custom backgrounds:',
        code: `import { defineStory, KilnCanvas } from '@forgedevstack/kiln';

defineStory({
  name: 'On Dark Background',
  render: () => (
    <KilnCanvas background="dark" padding="lg">
      <WhiteText>Visible on dark</WhiteText>
    </KilnCanvas>
  ),
  code: '<WhiteText>Visible on dark</WhiteText>',
})`,
        filename: 'story-with-canvas.tsx',
      },
    ],
  },
  theming: {
    slug: 'theming',
    title: 'Theming',
    description: 'Customize the look and feel of your Kiln docs.',
    sections: [
      {
        id: 'colors',
        title: 'Custom Colors',
        content: 'Set your brand color in the config file. This affects the sidebar, buttons, and active states:',
        code: `// kiln.config.json
{
  "primaryColor": "#3B82F6",  // Blue
  "theme": "dark"
}

// Other color ideas:
// "#10B981" - Emerald green
// "#8B5CF6" - Purple  
// "#F59E0B" - Amber
// "#EF4444" - Red
// "#EC4899" - Pink`,
        filename: 'kiln.config.json',
      },
      {
        id: 'programmatic',
        title: 'Programmatic Theming',
        content: 'For advanced cases, configure the theme in code:',
        code: `import { KilnProvider, KilnLayout } from '@forgedevstack/kiln';

function KilnApp({ stories }) {
  return (
    <KilnProvider 
      config={{ 
        title: 'My Components',
        primaryColor: '#10B981',  // Emerald
        theme: 'dark',
        showCodeDefault: true,
      }}
      stories={stories}
    >
      <KilnLayout />
    </KilnProvider>
  );
}`,
        filename: 'KilnApp.tsx',
      },
      {
        id: 'custom-logo',
        title: 'Custom Logo',
        content: 'Add your own logo to the sidebar:',
        code: `// kiln.config.json
{
  "title": "Acme UI",
  "logo": "./assets/acme-logo.svg"
}

// Supported formats:
// - SVG (recommended)
// - PNG, JPG, WebP
// - External URL

// Logo appears at 32x32 in sidebar header`,
        filename: 'kiln.config.json',
      },
    ],
  },
  cli: {
    slug: 'cli',
    title: 'CLI Commands',
    description: 'Command-line interface reference.',
    sections: [
      {
        id: 'init',
        title: 'kiln init',
        content: 'Initialize Kiln in your project. Creates kiln.config.json with sensible defaults:',
        code: `npx kiln init

# Options:
npx kiln init --force    # Overwrite existing config
npx kiln init --template # Use template config

# Output:
# ✓ Created kiln.config.json
# ✓ Ready to go! Run 'npx kiln dev' to start`,
        filename: 'terminal',
      },
      {
        id: 'dev',
        title: 'kiln dev',
        content: 'Start the development server with hot reload:',
        code: `npx kiln dev

# Options:
npx kiln dev --port 3000     # Custom port
npx kiln dev --open          # Open browser
npx kiln dev --host          # Expose to network

# Output:
# 🔥 Kiln is running at http://localhost:6006
# Found 12 stories in 4 groups
# Watching for changes...`,
        filename: 'terminal',
      },
      {
        id: 'build',
        title: 'kiln build',
        content: 'Build static documentation for deployment:',
        code: `npx kiln build

# Options:
npx kiln build --outDir dist/docs   # Custom output

# Output:
# ✓ Building stories...
# ✓ Optimizing assets...
# ✓ Built to kiln-static/ (2.3 MB)
# Ready for deployment!`,
        filename: 'terminal',
      },
      {
        id: 'preview',
        title: 'kiln preview',
        content: 'Preview the built documentation locally:',
        code: `npx kiln preview

# Options:
npx kiln preview --port 4000

# Output:
# 📦 Serving kiln-static/ at http://localhost:4173`,
        filename: 'terminal',
      },
    ],
  },
  api: {
    slug: 'api',
    title: 'API Reference',
    description: 'Complete API documentation for Kiln.',
    sections: [
      {
        id: 'exports',
        title: 'Exports',
        content: 'Main exports from @forgedevstack/kiln:\n\n• KilnProvider - Context provider that wraps your Kiln app\n• KilnLayout - Main layout component with sidebar and canvas\n• KilnCanvas - Preview wrapper with background/padding options\n• useKiln - Hook to access Kiln context (theme, stories, etc.)\n• defineStory - Type-safe helper to create a single story\n• defineStories - Type-safe helper to create a story group\n• DEFAULT_CONFIG - Default configuration values',
      },
      {
        id: 'define-stories',
        title: 'defineStories()',
        content: 'Create a story group for a component:',
        code: `import { defineStories } from '@forgedevstack/kiln';

interface DefineStoriesOptions<P> {
  // Display name in sidebar
  title: string;
  
  // The component being documented
  component: React.ComponentType<P>;
  
  // Optional description
  description?: string;
  
  // Array of stories
  stories: Story<P>[];
}

export default defineStories<ButtonProps>({
  title: 'Button',
  component: Button,
  description: 'A button component.',
  stories: [...],
});`,
        filename: 'api.ts',
      },
      {
        id: 'define-story',
        title: 'defineStory()',
        content: 'Create a single story:',
        code: `import { defineStory } from '@forgedevstack/kiln';

interface DefineStoryOptions<P> {
  // Story name in sidebar
  name: string;
  
  // Render function (receives props from args)
  render: React.ComponentType<P> | ((props: P) => JSX.Element);
  
  // Default props for the component
  args?: Partial<P>;
  
  // Code to display (string)
  code?: string;
  
  // Story description
  description?: string;
}

defineStory({
  name: 'Primary',
  render: Button,
  args: { variant: 'primary', children: 'Click' },
  code: '<Button variant="primary">Click</Button>',
  description: 'Primary button style.',
})`,
        filename: 'api.ts',
      },
      {
        id: 'use-kiln',
        title: 'useKiln()',
        content: 'Access Kiln context in custom components:',
        code: `import { useKiln } from '@forgedevstack/kiln';

function CustomComponent() {
  const {
    // Configuration
    config,
    
    // All story groups
    stories,
    
    // Currently active story
    activeStory,
    setActiveStory,
    
    // Theme controls
    theme,           // 'light' | 'dark'
    toggleTheme,
    
    // Code visibility
    showCode,
    toggleShowCode,
    
    // Search
    searchQuery,
    setSearchQuery,
  } = useKiln();
  
  return <div>Theme: {theme}</div>;
}`,
        filename: 'useKiln.tsx',
      },
      {
        id: 'types',
        title: 'TypeScript Types',
        content: 'Available types for TypeScript users:\n\n• KilnConfig - Configuration object type\n• Story<P> - Single story definition (generic)\n• StoryGroup - Collection of stories\n• KilnCanvasProps - Canvas component props\n• KilnProviderProps - Provider component props\n• ActiveStory - Currently selected story reference',
      },
    ],
  },
};
