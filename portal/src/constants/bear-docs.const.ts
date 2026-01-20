/**
 * Bear Documentation Constants
 */

export const BEAR_COLOR = '#ec4899'; // Pink like Lotso

export interface BearNavItem {
  path: string;
  label: string;
  exact?: boolean;
}

export const BEAR_NAV: BearNavItem[] = [
  { path: '', label: 'Overview', exact: true },
  { path: 'installation', label: 'Installation' },
  { path: 'theme-provider', label: 'Theme Provider' },
  { path: 'button', label: 'Button' },
  { path: 'card', label: 'Card' },
  { path: 'modal', label: 'Modal' },
  { path: 'drawer', label: 'Drawer' },
  { path: 'tooltip', label: 'Tooltip' },
  { path: 'input', label: 'Input' },
  { path: 'select', label: 'Select' },
  { path: 'switch', label: 'Switch' },
  { path: 'grid', label: 'Grid' },
  { path: 'flex', label: 'Flex' },
  { path: 'container', label: 'Container' },
  { path: 'badge', label: 'Badge' },
  { path: 'spinner', label: 'Spinner' },
  { path: 'icons', label: 'Icons' },
  { path: 'multiselect', label: 'MultiSelect' },
  { path: 'autocomplete', label: 'Autocomplete' },
  { path: 'datatable', label: 'DataTable' },
  { path: 'carousel', label: 'Carousel' },
  { path: 'accordion', label: 'Accordion' },
  { path: 'tabs', label: 'Tabs' },
  { path: 'avatar', label: 'Avatar' },
  { path: 'progress', label: 'Progress' },
  { path: 'hooks', label: 'Hooks' },
  { path: 'api', label: 'API Reference' },
];

export interface BearDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
  filename?: string;
  livePreview?: boolean;
}

export interface BearDocPage {
  slug: string;
  title: string;
  description: string;
  sections: BearDocSection[];
}

export const BEAR_DOCS: Record<string, BearDocPage> = {
  overview: {
    slug: 'overview',
    title: 'Bear',
    description: 'Strong, reliable React UI components. Tailwind-powered, zero config required.',
    sections: [
      {
        id: 'intro',
        title: 'Why Bear? 🐻',
        content: 'Bear is a modern UI component library for React. Like a bear - strong, reliable, and protective. Unlike other libraries, Bear bundles Tailwind CSS so you don\'t need any configuration. Just install and use.',
      },
      {
        id: 'features',
        title: 'Features',
        content: '• Zero-config Tailwind (bundled with bear- prefix)\n• Theme Provider with hooks\n• Light/Dark mode support\n• Accessible components (WCAG 2.1)\n• Mobile-first responsive design\n• Tree-shakeable\n• Full TypeScript support',
      },
      {
        id: 'quick-start',
        title: 'Quick Start',
        content: 'Get started with Bear in seconds:',
        code: `import { BearProvider, Button, Card, Flex, Modal } from '@forgedevstack/bear';
import '@forgedevstack/bear/styles.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BearProvider defaultMode="dark">
      <Card>
        <Card.Header>
          <h2>Welcome to Bear</h2>
        </Card.Header>
        <Card.Body>
          <Flex gap={4}>
            <Button variant="primary" onClick={() => setIsOpen(true)}>
              Open Modal
            </Button>
            <Button variant="outline">Learn More</Button>
          </Flex>
        </Card.Body>
      </Card>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Hello!">
        <p>This is a Bear modal component.</p>
      </Modal>
    </BearProvider>
  );
}`,
        filename: 'App.tsx',
      },
    ],
  },
  installation: {
    slug: 'installation',
    title: 'Installation',
    description: 'Get Bear up and running in your project.',
    sections: [
      {
        id: 'npm',
        title: 'Install with npm',
        content: 'Install Bear using your preferred package manager:',
        code: `# npm
npm install @forgedevstack/bear

# yarn
yarn add @forgedevstack/bear

# pnpm
pnpm add @forgedevstack/bear`,
        filename: 'terminal',
      },
      {
        id: 'import-styles',
        title: 'Import Styles',
        content: 'Import the Bear stylesheet in your app entry point:',
        code: `import '@forgedevstack/bear/styles.css';`,
        filename: 'main.tsx',
      },
      {
        id: 'wrap-provider',
        title: 'Wrap with BearProvider',
        content: 'Wrap your app with the BearProvider to enable theming:',
        code: `import { BearProvider } from '@forgedevstack/bear';

function App() {
  return (
    <BearProvider defaultMode="dark">
      <YourApp />
    </BearProvider>
  );
}`,
        filename: 'App.tsx',
      },
    ],
  },
  'theme-provider': {
    slug: 'theme-provider',
    title: 'Theme Provider',
    description: 'Customize colors, typography, and more with the theme system.',
    sections: [
      {
        id: 'usage',
        title: 'Basic Usage',
        content: 'The BearProvider wraps your app and provides theme context:',
        code: `import { BearProvider, useBear, useBearMode } from '@forgedevstack/bear';

function App() {
  return (
    <BearProvider 
      defaultMode="dark"
      persistPreference={true}
      theme={{
        colors: {
          primary: {
            500: '#d97706',
          },
        },
      }}
    >
      <ThemeToggle />
    </BearProvider>
  );
}

function ThemeToggle() {
  const { mode, toggleMode } = useBearMode();
  
  return (
    <button onClick={toggleMode}>
      Current: {mode}
    </button>
  );
}`,
        filename: 'ThemeExample.tsx',
      },
      {
        id: 'hooks',
        title: 'Theme Hooks',
        content: '• useBear() - Full context with theme, mode, setMode, toggleMode\n• useBearTheme() - Just the theme object\n• useBearMode() - Just mode and toggle function',
      },
    ],
  },
  button: {
    slug: 'button',
    title: 'Button',
    description: 'Accessible button component with multiple variants and sizes.',
    sections: [
      {
        id: 'variants',
        title: 'Variants',
        content: 'Buttons come in 8 variants: primary, secondary, success, warning, danger, info, ghost, outline',
        code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="danger">Danger</Button>
<Button variant="info">Info</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="outline">Outline</Button>`,
        filename: 'ButtonVariants.tsx',
        livePreview: true,
      },
      {
        id: 'sizes',
        title: 'Sizes',
        content: '5 sizes available: xs, sm, md, lg, xl',
        code: `<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`,
        filename: 'ButtonSizes.tsx',
        livePreview: true,
      },
      {
        id: 'loading',
        title: 'Loading State',
        content: 'Show a loading spinner:',
        code: `<Button loading>Saving...</Button>
<Button loading disabled>Processing</Button>`,
        filename: 'ButtonLoading.tsx',
        livePreview: true,
      },
    ],
  },
  modal: {
    slug: 'modal',
    title: 'Modal',
    description: 'Accessible modal dialog with backdrop and animations.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Modal dialogs for confirmations, forms, and content:',
        code: `const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmation"
  footer={
    <>
      <Button variant="ghost" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary">Confirm</Button>
    </>
  }
>
  <p>Are you sure you want to proceed?</p>
</Modal>`,
        filename: 'ModalBasic.tsx',
        livePreview: true,
      },
      {
        id: 'sizes',
        title: 'Modal Sizes',
        content: 'Available sizes: sm, md, lg, xl, full',
        code: `<Modal size="sm">Small modal</Modal>
<Modal size="md">Medium modal</Modal>
<Modal size="lg">Large modal</Modal>
<Modal size="xl">Extra large modal</Modal>
<Modal size="full">Full width modal</Modal>`,
        filename: 'ModalSizes.tsx',
      },
    ],
  },
  drawer: {
    slug: 'drawer',
    title: 'Drawer',
    description: 'Slide-out panel from any edge of the screen.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Drawer slides from the edge of the screen:',
        code: `const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Drawer</Button>

<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Navigation"
  side="right"
>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</Drawer>`,
        filename: 'DrawerBasic.tsx',
        livePreview: true,
      },
      {
        id: 'sides',
        title: 'Drawer Sides',
        content: 'Available sides: left, right, top, bottom',
        code: `<Drawer side="left">From left</Drawer>
<Drawer side="right">From right</Drawer>
<Drawer side="top">From top</Drawer>
<Drawer side="bottom">From bottom</Drawer>`,
        filename: 'DrawerSides.tsx',
      },
    ],
  },
  tooltip: {
    slug: 'tooltip',
    title: 'Tooltip',
    description: 'Informative text popup on hover.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Show helpful information on hover:',
        code: `<Tooltip content="This is a helpful tooltip">
  <Button>Hover me</Button>
</Tooltip>

<Tooltip content="Click to copy" position="bottom">
  <Button variant="outline">Copy Link</Button>
</Tooltip>`,
        filename: 'TooltipBasic.tsx',
        livePreview: true,
      },
    ],
  },
  input: {
    slug: 'input',
    title: 'Input',
    description: 'Text input with labels, validation, and addons.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Form inputs with various states:',
        code: `<Input label="Email" placeholder="you@example.com" />

<Input 
  label="Password" 
  type="password"
  helperText="Must be at least 8 characters"
/>

<Input 
  label="Username" 
  error="This username is taken"
/>

<Input 
  label="Search" 
  leftAddon={<SearchIcon />}
  placeholder="Search..."
/>`,
        filename: 'InputBasic.tsx',
        livePreview: true,
      },
    ],
  },
  select: {
    slug: 'select',
    title: 'Select',
    description: 'Dropdown selection with custom styling.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Custom styled select dropdown:',
        code: `const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

<Select 
  label="Framework"
  options={options}
  placeholder="Select a framework"
  onChange={(value) => console.log(value)}
/>`,
        filename: 'SelectBasic.tsx',
        livePreview: true,
      },
    ],
  },
  switch: {
    slug: 'switch',
    title: 'Switch',
    description: 'Toggle switch for on/off states.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Toggle switch for boolean values:',
        code: `const [enabled, setEnabled] = useState(false);

<Switch 
  label="Enable notifications"
  checked={enabled}
  onCheckedChange={setEnabled}
/>

<Switch 
  label="Dark mode"
  size="lg"
/>

<Switch 
  label="Disabled option"
  disabled
/>`,
        filename: 'SwitchBasic.tsx',
        livePreview: true,
      },
    ],
  },
  grid: {
    slug: 'grid',
    title: 'Grid',
    description: 'CSS Grid-based layout component for responsive designs.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Create grid layouts with columns and gaps:',
        code: `<Grid cols={3} gap={4}>
  <Grid.Item>Item 1</Grid.Item>
  <Grid.Item>Item 2</Grid.Item>
  <Grid.Item>Item 3</Grid.Item>
</Grid>`,
        filename: 'GridBasic.tsx',
      },
      {
        id: 'spanning',
        title: 'Column Spanning',
        content: 'Span items across multiple columns:',
        code: `<Grid cols={4} gap={4}>
  <Grid.Item colSpan={2}>Spans 2 columns</Grid.Item>
  <Grid.Item>Normal</Grid.Item>
  <Grid.Item>Normal</Grid.Item>
  <Grid.Item colSpan="full">Full width</Grid.Item>
</Grid>`,
        filename: 'GridSpanning.tsx',
      },
    ],
  },
  flex: {
    slug: 'flex',
    title: 'Flex',
    description: 'Flexbox-based layout component for flexible alignments.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Create flexible layouts:',
        code: `<Flex direction="row" align="center" justify="between" gap={4}>
  <div>Left</div>
  <div>Center</div>
  <div>Right</div>
</Flex>`,
        filename: 'FlexBasic.tsx',
      },
    ],
  },
  container: {
    slug: 'container',
    title: 'Container',
    description: 'Width-constrained content wrapper with responsive padding.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Constrain content width and center it:',
        code: `<Container size="lg" centered>
  <h1>Page Content</h1>
  <p>This content is centered and width-constrained.</p>
</Container>`,
        filename: 'ContainerBasic.tsx',
      },
    ],
  },
  badge: {
    slug: 'badge',
    title: 'Badge',
    description: 'Status labels and indicators with multiple variants.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Display status labels:',
        code: `<Badge variant="success">Active</Badge>
<Badge variant="warning" pill>Beta</Badge>
<Badge variant="danger" dot>Error</Badge>
<Badge variant="info" size="lg">New</Badge>`,
        filename: 'BadgeBasic.tsx',
        livePreview: true,
      },
    ],
  },
  spinner: {
    slug: 'spinner',
    title: 'Spinner',
    description: 'Loading indicator with customizable size and color.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Show loading state:',
        code: `<Spinner size="sm" />
<Spinner size="md" color="#d97706" />
<Spinner size="lg" />`,
        filename: 'SpinnerBasic.tsx',
        livePreview: true,
      },
    ],
  },
  icons: {
    slug: 'icons',
    title: 'Icons',
    description: 'SVG icon system with customizable size and color.',
    sections: [
      {
        id: 'preset',
        title: 'Preset Icons',
        content: 'Use the built-in icon set:',
        code: `import { BearIcons, CheckIcon, XIcon, PlusIcon } from '@forgedevstack/bear';

// Individual imports
<CheckIcon size="md" color="green" />
<XIcon size="md" color="red" />
<PlusIcon size="lg" />

// Or use the collection
<BearIcons.Check size="sm" />
<BearIcons.Search color="#d97706" />`,
        filename: 'IconsPreset.tsx',
      },
      {
        id: 'custom',
        title: 'Custom Icons',
        content: 'Wrap any SVG path:',
        code: `<Icon size="md" color="blue">
  <path d="M12 2L2 7l10 5 10-5-10-5z" />
</Icon>`,
        filename: 'IconsCustom.tsx',
      },
    ],
  },
  hooks: {
    slug: 'hooks',
    title: 'Hooks',
    description: 'Utility hooks for common UI patterns.',
    sections: [
      {
        id: 'media-query',
        title: 'useMediaQuery',
        content: 'React to viewport changes:',
        code: `import { useIsMobile, useIsDesktop, useMediaQuery } from '@forgedevstack/bear';

function ResponsiveComponent() {
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();
  const isLandscape = useMediaQuery('(orientation: landscape)');
  
  if (isMobile) return <MobileView />;
  return <DesktopView />;
}`,
        filename: 'useMediaQuery.tsx',
      },
      {
        id: 'disclosure',
        title: 'useDisclosure',
        content: 'Manage open/close state:',
        code: `import { useDisclosure } from '@forgedevstack/bear';

function ModalExample() {
  const { isOpen, open, close, toggle } = useDisclosure();
  
  return (
    <>
      <Button onClick={open}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={close}>
        Content here
      </Modal>
    </>
  );
}`,
        filename: 'useDisclosure.tsx',
      },
      {
        id: 'click-outside',
        title: 'useClickOutside',
        content: 'Detect clicks outside an element:',
        code: `import { useClickOutside } from '@forgedevstack/bear';

function Dropdown() {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, close } = useDisclosure();
  
  useClickOutside(ref, close);
  
  return (
    <div ref={ref}>
      {isOpen && <DropdownMenu />}
    </div>
  );
}`,
        filename: 'useClickOutside.tsx',
      },
    ],
  },
  multiselect: {
    slug: 'multiselect',
    title: 'MultiSelect',
    description: 'Select multiple options with tags and search.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Allow users to select multiple options:',
        code: `import { MultiSelect } from '@forgedevstack/bear';

const skills = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'Solid' },
];

function SkillsSelector() {
  const [selected, setSelected] = useState<string[]>([]);
  
  return (
    <MultiSelect
      label="Skills"
      options={skills}
      value={selected}
      onChange={setSelected}
      placeholder="Select skills..."
      searchable
    />
  );
}`,
        filename: 'MultiSelectBasic.tsx',
        livePreview: true,
      },
      {
        id: 'validation',
        title: 'Validation & Limits',
        content: 'Add validation and selection limits:',
        code: `<MultiSelect
  label="Team Members"
  options={teamMembers}
  value={selected}
  onChange={setSelected}
  maxSelections={5}
  error={selected.length === 0 ? 'Select at least one member' : undefined}
  helperText="Select up to 5 team members"
/>`,
        filename: 'MultiSelectValidation.tsx',
      },
    ],
  },
  autocomplete: {
    slug: 'autocomplete',
    title: 'Autocomplete',
    description: 'Text input with search suggestions.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Provide suggestions as users type:',
        code: `import { Autocomplete } from '@forgedevstack/bear';

const countries = [
  { value: 'us', label: 'United States', description: 'North America' },
  { value: 'uk', label: 'United Kingdom', description: 'Europe' },
  { value: 'de', label: 'Germany', description: 'Europe' },
  { value: 'jp', label: 'Japan', description: 'Asia' },
];

function CountrySearch() {
  const [country, setCountry] = useState('');
  
  return (
    <Autocomplete
      label="Country"
      options={countries}
      value={country}
      onChange={setCountry}
      onSelect={(opt) => console.log('Selected:', opt)}
      placeholder="Search countries..."
    />
  );
}`,
        filename: 'AutocompleteBasic.tsx',
        livePreview: true,
      },
      {
        id: 'freesolo',
        title: 'Free Solo Mode',
        content: 'Allow custom values not in the options:',
        code: `<Autocomplete
  label="Tags"
  options={existingTags}
  value={tag}
  onChange={setTag}
  freeSolo
  helperText="Select existing or create new"
/>`,
        filename: 'AutocompleteFreeSolo.tsx',
      },
    ],
  },
  datatable: {
    slug: 'datatable',
    title: 'DataTable',
    description: 'Flexible data table with sorting and styling.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Display tabular data with custom columns:',
        code: `import { DataTable, Badge } from '@forgedevstack/bear';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'pending' },
];

function UsersTable() {
  return (
    <DataTable
      columns={[
        { key: 'name', header: 'Name', accessor: (row) => row.name },
        { key: 'email', header: 'Email', accessor: (row) => row.email },
        {
          key: 'status',
          header: 'Status',
          cell: (row) => (
            <Badge variant={row.status === 'active' ? 'success' : 'warning'}>
              {row.status}
            </Badge>
          ),
        },
      ]}
      data={users}
      rowKey={(row) => row.id}
      variant="striped"
    />
  );
}`,
        filename: 'DataTableBasic.tsx',
        livePreview: true,
      },
      {
        id: 'sorting',
        title: 'Sortable Columns',
        content: 'Enable sorting on columns:',
        code: `<DataTable
  columns={[
    { key: 'name', header: 'Name', sortable: true },
    { key: 'email', header: 'Email', sortable: true },
    { key: 'createdAt', header: 'Created', sortable: true, align: 'right' },
  ]}
  data={users}
  rowKey={(row) => row.id}
  sortColumn={sortColumn}
  sortDirection={sortDirection}
  onSort={handleSort}
  stickyHeader
  maxHeight={400}
/>`,
        filename: 'DataTableSorting.tsx',
      },
    ],
  },
  carousel: {
    slug: 'carousel',
    title: 'Carousel',
    description: 'Sliding content carousel with touch and auto-play support.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Create image or content carousels:',
        code: `import { Carousel } from '@forgedevstack/bear';

<Carousel showDots showArrows>
  <div className="h-48 bg-pink-500 rounded-lg flex items-center justify-center text-white">
    Slide 1
  </div>
  <div className="h-48 bg-purple-500 rounded-lg flex items-center justify-center text-white">
    Slide 2
  </div>
  <div className="h-48 bg-blue-500 rounded-lg flex items-center justify-center text-white">
    Slide 3
  </div>
</Carousel>`,
        filename: 'CarouselBasic.tsx',
        livePreview: true,
      },
      {
        id: 'autoplay',
        title: 'Auto-play & Multiple Slides',
        content: 'Enable auto-play and show multiple slides:',
        code: `<Carousel 
  autoPlay={3000} 
  slidesToShow={3} 
  gap={16}
  pauseOnHover
  loop
>
  {items.map((item) => (
    <Card key={item.id}>{item.content}</Card>
  ))}
</Carousel>`,
        filename: 'CarouselAutoplay.tsx',
      },
    ],
  },
  accordion: {
    slug: 'accordion',
    title: 'Accordion',
    description: 'Collapsible content panels for organizing information.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Create expandable sections:',
        code: `import { Accordion, AccordionItem } from '@forgedevstack/bear';

<Accordion defaultOpen={['faq-1']}>
  <AccordionItem id="faq-1" title="What is Bear?">
    Bear is a modern UI component library for React.
  </AccordionItem>
  <AccordionItem id="faq-2" title="Is it free?">
    Yes! Bear is open source and free to use.
  </AccordionItem>
  <AccordionItem id="faq-3" title="Does it support dark mode?">
    Absolutely! Full light/dark mode support included.
  </AccordionItem>
</Accordion>`,
        filename: 'AccordionBasic.tsx',
        livePreview: true,
      },
    ],
  },
  tabs: {
    slug: 'tabs',
    title: 'Tabs',
    description: 'Tabbed interface for organizing content into panels.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Create tabbed navigation:',
        code: `import { Tabs, TabList, Tab, TabPanel } from '@forgedevstack/bear';

<Tabs defaultTab="overview" variant="line">
  <TabList>
    <Tab id="overview">Overview</Tab>
    <Tab id="features">Features</Tab>
    <Tab id="pricing">Pricing</Tab>
  </TabList>
  <TabPanel tabId="overview">Overview content...</TabPanel>
  <TabPanel tabId="features">Features list...</TabPanel>
  <TabPanel tabId="pricing">Pricing plans...</TabPanel>
</Tabs>`,
        filename: 'TabsBasic.tsx',
        livePreview: true,
      },
      {
        id: 'variants',
        title: 'Tab Variants',
        content: 'Different visual styles:',
        code: `// Line tabs (default)
<Tabs defaultTab="tab1" variant="line">...</Tabs>

// Pill tabs
<Tabs defaultTab="tab1" variant="pills">...</Tabs>

// Enclosed tabs
<Tabs defaultTab="tab1" variant="enclosed">...</Tabs>`,
        filename: 'TabsVariants.tsx',
      },
    ],
  },
  avatar: {
    slug: 'avatar',
    title: 'Avatar',
    description: 'User profile images with status and fallback support.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Display user avatars:',
        code: `import { Avatar, AvatarGroup } from '@forgedevstack/bear';

// With image
<Avatar src="/user.jpg" alt="John Doe" size="md" />

// With initials fallback
<Avatar initials="JD" size="lg" />

// With status indicator
<Avatar src="/user.jpg" status="online" />

// Avatar group
<AvatarGroup max={3}>
  <Avatar src="/user1.jpg" bordered />
  <Avatar src="/user2.jpg" bordered />
  <Avatar src="/user3.jpg" bordered />
  <Avatar src="/user4.jpg" bordered />
</AvatarGroup>`,
        filename: 'AvatarBasic.tsx',
        livePreview: true,
      },
    ],
  },
  progress: {
    slug: 'progress',
    title: 'Progress',
    description: 'Progress bars with multiple variants and animations.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Show progress indicators:',
        code: `import { Progress } from '@forgedevstack/bear';

<Progress value={75} showLabel />
<Progress value={50} color="success" />
<Progress value={30} color="warning" striped />
<Progress value={90} color="danger" striped animated />
<Progress indeterminate />`,
        filename: 'ProgressBasic.tsx',
        livePreview: true,
      },
    ],
  },
  api: {
    slug: 'api',
    title: 'API Reference',
    description: 'Complete API documentation for all Bear exports.',
    sections: [
      {
        id: 'components',
        title: 'Components',
        content: '• Button - Clickable button with variants\n• Card, CardHeader, CardBody, CardFooter - Content containers\n• Modal - Dialog overlay\n• Drawer - Slide-out panel\n• Tooltip - Hover information\n• Input - Text input\n• Select - Dropdown selection\n• Switch - Toggle control\n• MultiSelect - Multi-option selection with tags\n• Autocomplete - Text input with suggestions\n• DataTable - Flexible data table\n• Grid, GridItem - CSS Grid layout\n• Flex - Flexbox layout\n• Container - Width-constrained wrapper\n• Badge - Status labels\n• Spinner - Loading indicator\n• Icon - SVG wrapper\n• BearLogo - Bear brand logo',
      },
      {
        id: 'hooks-list',
        title: 'Hooks',
        content: '• useBear - Full theme context\n• useBearTheme - Theme object only\n• useBearMode - Mode and toggle\n• useMediaQuery - Media query matching\n• useIsMobile, useIsTablet, useIsDesktop\n• useDisclosure - Open/close state\n• useClickOutside - Outside click detection',
      },
      {
        id: 'utils',
        title: 'Utilities',
        content: '• cn - Class name utility\n• deepMerge - Deep object merge',
      },
    ],
  },
};
