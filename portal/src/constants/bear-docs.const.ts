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
  // Layout
  { path: 'grid', label: 'Grid' },
  { path: 'flex', label: 'Flex' },
  { path: 'container', label: 'Container' },
  { path: 'paper', label: 'Paper' },
  { path: 'divider', label: 'Divider' },
  // Inputs
  { path: 'button', label: 'Button' },
  { path: 'button-group', label: 'ButtonGroup' },
  { path: 'input', label: 'Input' },
  { path: 'select', label: 'Select' },
  { path: 'multiselect', label: 'MultiSelect' },
  { path: 'autocomplete', label: 'Autocomplete' },
  { path: 'checkbox', label: 'Checkbox' },
  { path: 'radio', label: 'Radio' },
  { path: 'switch', label: 'Switch' },
  { path: 'rating', label: 'Rating' },
  { path: 'transfer-list', label: 'TransferList' },
  // Data Display
  { path: 'typography', label: 'Typography' },
  { path: 'badge', label: 'Badge' },
  { path: 'avatar', label: 'Avatar' },
  { path: 'list', label: 'List' },
  { path: 'card', label: 'Card' },
  { path: 'datatable', label: 'DataTable' },
  { path: 'tooltip', label: 'Tooltip' },
  // Feedback
  { path: 'alert', label: 'Alert' },
  { path: 'toast', label: 'Toast' },
  { path: 'skeleton', label: 'Skeleton' },
  { path: 'spinner', label: 'Spinner' },
  { path: 'progress', label: 'Progress' },
  { path: 'pagination', label: 'Pagination' },
  { path: 'slider', label: 'Slider' },
  { path: 'modal', label: 'Modal' },
  { path: 'drawer', label: 'Drawer' },
  { path: 'bear-loader', label: 'BearLoader' },
  // Navigation
  { path: 'tabs', label: 'Tabs' },
  { path: 'menu', label: 'Menu' },
  { path: 'dropdown', label: 'Dropdown' },
  { path: 'link', label: 'Link' },
  { path: 'speed-dial', label: 'SpeedDial' },
  { path: 'fab', label: 'FAB' },
  { path: 'breadcrumbs', label: 'Breadcrumbs' },
  { path: 'stepper', label: 'Stepper' },
  { path: 'bottom-navigation', label: 'BottomNavigation' },
  // Other
  { path: 'accordion', label: 'Accordion' },
  { path: 'carousel', label: 'Carousel' },
  { path: 'date-picker', label: 'DatePicker' },
  { path: 'time-picker', label: 'TimePicker' },
  { path: 'color-picker', label: 'ColorPicker' },
  { path: 'file-upload', label: 'FileUpload' },
  { path: 'number-input', label: 'NumberInput' },
  { path: 'otp-input', label: 'OTPInput' },
  { path: 'chip', label: 'Chip' },
  { path: 'tree-view', label: 'TreeView' },
  { path: 'timeline', label: 'Timeline' },
  { path: 'statistic', label: 'Statistic' },
  { path: 'empty-state', label: 'EmptyState' },
  { path: 'image', label: 'Image' },
  { path: 'popover', label: 'Popover' },
  { path: 'app-bar', label: 'AppBar' },
  { path: 'scroll-area', label: 'ScrollArea' },
  { path: 'collapsible', label: 'Collapsible' },
  { path: 'kbd', label: 'Kbd' },
  { path: 'copy-button', label: 'CopyButton' },
  { path: 'icons', label: 'Icons' },
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
  // NEW COMPONENTS
  rating: {
    slug: 'rating',
    title: 'Rating',
    description: 'Star rating input with half-star support and customization.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Interactive star rating:',
        code: `import { Rating } from '@forgedevstack/bear';

<Rating value={3} onChange={(val) => console.log(val)} />
<Rating value={4.5} precision={0.5} />
<Rating value={5} readOnly />
<Rating max={10} value={7} />`,
        filename: 'RatingBasic.tsx',
        livePreview: true,
      },
      {
        id: 'sizes',
        title: 'Sizes',
        content: 'Different rating sizes:',
        code: `<Rating size="sm" value={3} />
<Rating size="md" value={4} />
<Rating size="lg" value={5} />`,
        filename: 'RatingSizes.tsx',
        livePreview: true,
      },
    ],
  },
  radio: {
    slug: 'radio',
    title: 'Radio',
    description: 'Radio buttons for single-selection in a group.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Radio group for single selection:',
        code: `import { RadioGroup, Radio } from '@forgedevstack/bear';

<RadioGroup value={selected} onChange={setSelected}>
  <Radio value="option1" label="Option 1" />
  <Radio value="option2" label="Option 2" />
  <Radio value="option3" label="Option 3" />
</RadioGroup>`,
        filename: 'RadioBasic.tsx',
        livePreview: true,
      },
      {
        id: 'variants',
        title: 'Variants',
        content: 'Colored radio buttons:',
        code: `<RadioGroup>
  <Radio value="primary" variant="primary" label="Primary" />
  <Radio value="success" variant="success" label="Success" />
  <Radio value="danger" variant="danger" label="Danger" />
</RadioGroup>`,
        filename: 'RadioVariants.tsx',
        livePreview: true,
      },
    ],
  },
  checkbox: {
    slug: 'checkbox',
    title: 'Checkbox',
    description: 'Checkbox for multiple selections with indeterminate state.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Standalone and grouped checkboxes:',
        code: `import { Checkbox } from '@forgedevstack/bear';

<Checkbox label="Accept terms" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
<Checkbox label="Subscribe to newsletter" />
<Checkbox label="Remember me" defaultChecked />`,
        filename: 'CheckboxBasic.tsx',
        livePreview: true,
      },
      {
        id: 'indeterminate',
        title: 'Indeterminate State',
        content: 'Parent checkbox with partial selection:',
        code: `<Checkbox label="Select All" indeterminate={someSelected} />`,
        filename: 'CheckboxIndeterminate.tsx',
      },
    ],
  },
  'button-group': {
    slug: 'button-group',
    title: 'ButtonGroup',
    description: 'Group related buttons together.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Grouped buttons:',
        code: `import { ButtonGroup, Button } from '@forgedevstack/bear';

<ButtonGroup>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>`,
        filename: 'ButtonGroupBasic.tsx',
        livePreview: true,
      },
      {
        id: 'variants',
        title: 'Variants',
        content: 'Different button group styles:',
        code: `<ButtonGroup variant="outline">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>`,
        filename: 'ButtonGroupVariants.tsx',
        livePreview: true,
      },
    ],
  },
  fab: {
    slug: 'fab',
    title: 'FAB',
    description: 'Floating Action Button for primary actions.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Fixed position action button:',
        code: `import { Fab } from '@forgedevstack/bear';
import { PlusIcon, EditIcon } from '@forgedevstack/bear';

<Fab position="bottom-right" onClick={handleAdd}>
  <PlusIcon />
</Fab>

<Fab extended variant="success">
  <EditIcon /> Edit
</Fab>`,
        filename: 'FabBasic.tsx',
        livePreview: true,
      },
    ],
  },
  'transfer-list': {
    slug: 'transfer-list',
    title: 'TransferList',
    description: 'Dual-list control for moving items between collections.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Move items between lists:',
        code: `import { TransferList } from '@forgedevstack/bear';

const items = [
  { id: 1, label: 'Item 1' },
  { id: 2, label: 'Item 2' },
  { id: 3, label: 'Item 3' },
];

<TransferList
  items={items}
  leftTitle="Available"
  rightTitle="Selected"
  onChange={(left, right) => console.log(left, right)}
/>`,
        filename: 'TransferListBasic.tsx',
        livePreview: true,
      },
    ],
  },
  divider: {
    slug: 'divider',
    title: 'Divider',
    description: 'Visual separator for content sections.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Horizontal and vertical dividers:',
        code: `import { Divider } from '@forgedevstack/bear';

<Divider />
<Divider orientation="vertical" />
<Divider>OR</Divider>
<Divider textAlign="left">Section</Divider>`,
        filename: 'DividerBasic.tsx',
        livePreview: true,
      },
    ],
  },
  typography: {
    slug: 'typography',
    title: 'Typography',
    description: 'Text components with consistent styling.',
    sections: [
      {
        id: 'variants',
        title: 'Variants',
        content: 'Different typography styles:',
        code: `import { Typography } from '@forgedevstack/bear';

<Typography variant="h1">Heading 1</Typography>
<Typography variant="h2">Heading 2</Typography>
<Typography variant="h3">Heading 3</Typography>
<Typography variant="body1">Body text 1</Typography>
<Typography variant="body2">Body text 2</Typography>
<Typography variant="caption">Caption text</Typography>
<Typography variant="overline">OVERLINE</Typography>`,
        filename: 'TypographyVariants.tsx',
        livePreview: true,
      },
      {
        id: 'colors',
        title: 'Colors',
        content: 'Colored text:',
        code: `<Typography color="primary">Primary</Typography>
<Typography color="secondary">Secondary</Typography>
<Typography color="success">Success</Typography>
<Typography color="error">Error</Typography>`,
        filename: 'TypographyColors.tsx',
        livePreview: true,
      },
    ],
  },
  list: {
    slug: 'list',
    title: 'List',
    description: 'Organized lists with items, icons, and actions.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Simple list with items:',
        code: `import { List, ListItem } from '@forgedevstack/bear';

<List>
  <ListItem primary="Inbox" secondary="You have 3 new messages" />
  <ListItem primary="Drafts" />
  <ListItem primary="Sent" secondary="Last sent: 2 days ago" />
</List>`,
        filename: 'ListBasic.tsx',
        livePreview: true,
      },
      {
        id: 'with-icons',
        title: 'With Icons',
        content: 'List items with leading icons:',
        code: `<List>
  <ListItem icon={<InboxIcon />} primary="Inbox" />
  <ListItem icon={<SendIcon />} primary="Sent" />
  <ListItem icon={<SettingsIcon />} primary="Settings" />
</List>`,
        filename: 'ListWithIcons.tsx',
        livePreview: true,
      },
    ],
  },
  alert: {
    slug: 'alert',
    title: 'Alert',
    description: 'Feedback messages for user actions.',
    sections: [
      {
        id: 'severities',
        title: 'Severities',
        content: 'Different alert types:',
        code: `import { Alert } from '@forgedevstack/bear';

<Alert severity="success">Operation completed successfully!</Alert>
<Alert severity="info">This is an informational message.</Alert>
<Alert severity="warning">Warning: Check your input.</Alert>
<Alert severity="error">Error: Something went wrong.</Alert>`,
        filename: 'AlertSeverities.tsx',
        livePreview: true,
      },
      {
        id: 'with-title',
        title: 'With Title',
        content: 'Alerts with title and actions:',
        code: `<Alert severity="success" title="Success" closable onClose={() => {}}>
  Your changes have been saved.
</Alert>`,
        filename: 'AlertWithTitle.tsx',
        livePreview: true,
      },
    ],
  },
  paper: {
    slug: 'paper',
    title: 'Paper',
    description: 'Elevated surface for content.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Paper with elevation:',
        code: `import { Paper } from '@forgedevstack/bear';

<Paper>Default paper</Paper>
<Paper elevation={2}>Elevated paper</Paper>
<Paper elevation={4}>Higher elevation</Paper>
<Paper variant="outlined">Outlined paper</Paper>`,
        filename: 'PaperBasic.tsx',
        livePreview: true,
      },
    ],
  },
  link: {
    slug: 'link',
    title: 'Link',
    description: 'Styled anchor links with variants.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Link components:',
        code: `import { Link } from '@forgedevstack/bear';

<Link href="#">Default Link</Link>
<Link href="#" variant="primary">Primary Link</Link>
<Link href="#" variant="secondary">Secondary Link</Link>
<Link href="https://example.com" external>External Link</Link>`,
        filename: 'LinkBasic.tsx',
        livePreview: true,
      },
    ],
  },
  menu: {
    slug: 'menu',
    title: 'Menu',
    description: 'Popup menu for actions and navigation.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Menu with items:',
        code: `import { Menu, MenuItem, MenuDivider } from '@forgedevstack/bear';

<Menu trigger={<Button>Open Menu</Button>}>
  <MenuItem onClick={() => {}}>Profile</MenuItem>
  <MenuItem onClick={() => {}}>Settings</MenuItem>
  <MenuDivider />
  <MenuItem onClick={() => {}} danger>Logout</MenuItem>
</Menu>`,
        filename: 'MenuBasic.tsx',
        livePreview: true,
      },
    ],
  },
  dropdown: {
    slug: 'dropdown',
    title: 'Dropdown',
    description: 'Customizable dropdown for actions and navigation.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Dropdown with options:',
        code: `import { Dropdown } from '@forgedevstack/bear';

<Dropdown
  trigger={<Button>Options</Button>}
  items={[
    { label: 'Edit', onClick: () => {} },
    { label: 'Duplicate', onClick: () => {} },
    { divider: true },
    { label: 'Delete', onClick: () => {}, variant: 'danger' },
  ]}
/>`,
        filename: 'DropdownBasic.tsx',
        livePreview: true,
      },
    ],
  },
  'speed-dial': {
    slug: 'speed-dial',
    title: 'SpeedDial',
    description: 'Floating action button with expandable actions.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Speed dial with actions:',
        code: `import { SpeedDial } from '@forgedevstack/bear';
import { PlusIcon, EditIcon, DeleteIcon, ShareIcon } from '@forgedevstack/bear';

<SpeedDial
  icon={<PlusIcon />}
  position="bottom-right"
  actions={[
    { key: 'edit', label: 'Edit', icon: <EditIcon /> },
    { key: 'share', label: 'Share', icon: <ShareIcon /> },
    { key: 'delete', label: 'Delete', icon: <DeleteIcon /> },
  ]}
/>`,
        filename: 'SpeedDialBasic.tsx',
        livePreview: true,
      },
    ],
  },
  toast: {
    slug: 'toast',
    title: 'Toast',
    description: 'Notification toasts for user feedback.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Show toast notifications from anywhere:',
        code: `import { ToastProvider, useToast } from '@forgedevstack/bear';

// Wrap your app with ToastProvider
<ToastProvider>
  <App />
</ToastProvider>

// Use the hook in any component
function MyComponent() {
  const toast = useToast();
  
  return (
    <Button onClick={() => toast.success('Saved successfully!')}>
      Save
    </Button>
  );
}`,
        filename: 'ToastBasic.tsx',
        livePreview: true,
      },
      {
        id: 'types',
        title: 'Toast Types',
        content: 'Different toast variants:',
        code: `toast.success('Operation completed!');
toast.error('Something went wrong');
toast.warning('Please check your input');
toast.info('New update available');`,
        filename: 'ToastTypes.tsx',
      },
      {
        id: 'positions',
        title: 'Positions',
        content: 'Toast positioning:',
        code: `<ToastProvider position="top-right">
<ToastProvider position="top-center">
<ToastProvider position="bottom-left">
<ToastProvider position="bottom-center">`,
        filename: 'ToastPositions.tsx',
      },
    ],
  },
  skeleton: {
    slug: 'skeleton',
    title: 'Skeleton',
    description: 'Loading placeholders for content.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Show skeleton loaders while content loads:',
        code: `import { Skeleton } from '@forgedevstack/bear';

<Skeleton variant="text" width={200} />
<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rectangular" width={210} height={118} />`,
        filename: 'SkeletonBasic.tsx',
        livePreview: true,
      },
      {
        id: 'animation',
        title: 'Animation',
        content: 'Different animation modes:',
        code: `<Skeleton animation="pulse" />
<Skeleton animation="wave" />
<Skeleton animation={false} />`,
        filename: 'SkeletonAnimation.tsx',
      },
    ],
  },
  pagination: {
    slug: 'pagination',
    title: 'Pagination',
    description: 'Navigate through pages of content.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Page navigation controls:',
        code: `import { Pagination } from '@forgedevstack/bear';

const [page, setPage] = useState(1);

<Pagination
  currentPage={page}
  totalPages={10}
  onPageChange={setPage}
/>`,
        filename: 'PaginationBasic.tsx',
        livePreview: true,
      },
      {
        id: 'options',
        title: 'Options',
        content: 'Customize pagination behavior:',
        code: `<Pagination
  currentPage={page}
  totalPages={20}
  onPageChange={setPage}
  showFirstLast
  showPrevNext
  maxVisiblePages={5}
/>`,
        filename: 'PaginationOptions.tsx',
      },
    ],
  },
  slider: {
    slug: 'slider',
    title: 'Slider',
    description: 'Input slider for selecting values within a range.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Single value slider:',
        code: `import { Slider } from '@forgedevstack/bear';

const [value, setValue] = useState(50);

<Slider
  value={value}
  onChange={setValue}
  min={0}
  max={100}
/>`,
        filename: 'SliderBasic.tsx',
        livePreview: true,
      },
      {
        id: 'range',
        title: 'Range Slider',
        content: 'Select a range of values:',
        code: `const [range, setRange] = useState([20, 80]);

<Slider
  value={range}
  onChange={setRange}
  min={0}
  max={100}
/>`,
        filename: 'SliderRange.tsx',
        livePreview: true,
      },
      {
        id: 'variants',
        title: 'Variants',
        content: 'Different slider styles:',
        code: `<Slider variant="primary" value={50} />
<Slider variant="success" value={75} />
<Slider variant="warning" value={30} />`,
        filename: 'SliderVariants.tsx',
      },
    ],
  },
  'bear-loader': {
    slug: 'bear-loader',
    title: 'BearLoader',
    description: 'Animated Lotso-style bear loading animation.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Usage',
        content: 'Full-page loading animation:',
        code: `import { BearLoader } from '@forgedevstack/bear';

// Show during initial load
<BearLoader duration={2000} onComplete={() => setLoading(false)} />`,
        filename: 'BearLoaderBasic.tsx',
        livePreview: true,
      },
      {
        id: 'props',
        title: 'Props',
        content: '• duration - Animation duration in ms (default: 2000)\n• onComplete - Callback when animation completes',
      },
    ],
  },
  'date-picker': {
    slug: 'date-picker',
    title: 'DatePicker',
    description: 'Calendar-based date selection component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Select dates with a calendar popup:', code: `import { DatePicker } from '@forgedevstack/bear';\n\nconst [date, setDate] = useState<Date | null>(null);\n\n<DatePicker value={date} onChange={setDate} label="Select Date" />`, filename: 'DatePickerBasic.tsx', livePreview: true },
    ],
  },
  'time-picker': {
    slug: 'time-picker',
    title: 'TimePicker',
    description: 'Time selection input component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Select time with hour, minute, and period:', code: `import { TimePicker } from '@forgedevstack/bear';\n\nconst [time, setTime] = useState('');\n\n<TimePicker value={time} onChange={setTime} label="Select Time" />`, filename: 'TimePickerBasic.tsx', livePreview: true },
    ],
  },
  breadcrumbs: {
    slug: 'breadcrumbs',
    title: 'Breadcrumbs',
    description: 'Navigation breadcrumb trail component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Show navigation path:', code: `import { Breadcrumbs } from '@forgedevstack/bear';\n\n<Breadcrumbs items={[\n  { label: 'Home', href: '/' },\n  { label: 'Products', href: '/products' },\n  { label: 'Current Page' },\n]} />`, filename: 'BreadcrumbsBasic.tsx', livePreview: true },
    ],
  },
  stepper: {
    slug: 'stepper',
    title: 'Stepper',
    description: 'Multi-step form wizard component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Show progress through steps:', code: `import { Stepper } from '@forgedevstack/bear';\n\n<Stepper\n  steps={[\n    { label: 'Account' },\n    { label: 'Details' },\n    { label: 'Review' },\n  ]}\n  activeStep={1}\n/>`, filename: 'StepperBasic.tsx', livePreview: true },
    ],
  },
  popover: {
    slug: 'popover',
    title: 'Popover',
    description: 'Click-triggered popup content component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Show content on click:', code: `import { Popover } from '@forgedevstack/bear';\n\n<Popover content={<div>Popover content</div>}>\n  <Button>Click me</Button>\n</Popover>`, filename: 'PopoverBasic.tsx', livePreview: true },
    ],
  },
  chip: {
    slug: 'chip',
    title: 'Chip',
    description: 'Small dismissible label component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Display tags and filters:', code: `import { Chip } from '@forgedevstack/bear';\n\n<Chip>Default</Chip>\n<Chip color="primary" onDelete={() => {}}>Deletable</Chip>\n<Chip variant="outlined">Outlined</Chip>`, filename: 'ChipBasic.tsx', livePreview: true },
    ],
  },
  'tree-view': {
    slug: 'tree-view',
    title: 'TreeView',
    description: 'Hierarchical data display component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Display tree structure:', code: `import { TreeView } from '@forgedevstack/bear';\n\n<TreeView\n  data={[\n    { id: '1', label: 'Folder 1', children: [\n      { id: '1.1', label: 'File 1' },\n    ]},\n  ]}\n  onSelect={(node) => console.log(node)}\n/>`, filename: 'TreeViewBasic.tsx', livePreview: true },
    ],
  },
  timeline: {
    slug: 'timeline',
    title: 'Timeline',
    description: 'Vertical timeline for events component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Display events chronologically:', code: `import { Timeline } from '@forgedevstack/bear';\n\n<Timeline\n  items={[\n    { id: '1', title: 'Event 1', date: '2024-01-01' },\n    { id: '2', title: 'Event 2', date: '2024-02-01' },\n  ]}\n/>`, filename: 'TimelineBasic.tsx', livePreview: true },
    ],
  },
  'file-upload': {
    slug: 'file-upload',
    title: 'FileUpload',
    description: 'Drag-and-drop file upload component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Upload files with drag and drop:', code: `import { FileUpload } from '@forgedevstack/bear';\n\n<FileUpload\n  onFilesSelect={(files) => console.log(files)}\n  accept="image/*"\n  multiple\n/>`, filename: 'FileUploadBasic.tsx', livePreview: true },
    ],
  },
  'number-input': {
    slug: 'number-input',
    title: 'NumberInput',
    description: 'Numeric input with stepper buttons.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Number input with +/- buttons:', code: `import { NumberInput } from '@forgedevstack/bear';\n\nconst [value, setValue] = useState(0);\n\n<NumberInput value={value} onChange={setValue} min={0} max={100} />`, filename: 'NumberInputBasic.tsx', livePreview: true },
    ],
  },
  'otp-input': {
    slug: 'otp-input',
    title: 'OTPInput',
    description: 'One-time password input component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'OTP verification input:', code: `import { OTPInput } from '@forgedevstack/bear';\n\n<OTPInput\n  length={6}\n  onComplete={(code) => console.log(code)}\n/>`, filename: 'OTPInputBasic.tsx', livePreview: true },
    ],
  },
  'color-picker': {
    slug: 'color-picker',
    title: 'ColorPicker',
    description: 'Color selection component with presets.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Pick colors with presets:', code: `import { ColorPicker } from '@forgedevstack/bear';\n\nconst [color, setColor] = useState('#ec4899');\n\n<ColorPicker value={color} onChange={setColor} />`, filename: 'ColorPickerBasic.tsx', livePreview: true },
    ],
  },
  statistic: {
    slug: 'statistic',
    title: 'Statistic',
    description: 'Display metrics with icons and trends.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Show statistics:', code: `import { Statistic } from '@forgedevstack/bear';\n\n<Statistic\n  title="Total Users"\n  value={1234}\n  trend={{ value: 12, isUpward: true }}\n/>`, filename: 'StatisticBasic.tsx', livePreview: true },
    ],
  },
  'empty-state': {
    slug: 'empty-state',
    title: 'EmptyState',
    description: 'Placeholder for empty content states.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Show when no data exists:', code: `import { EmptyState, Button } from '@forgedevstack/bear';\n\n<EmptyState\n  title="No results found"\n  description="Try adjusting your search or filters"\n  action={<Button>Clear filters</Button>}\n/>`, filename: 'EmptyStateBasic.tsx', livePreview: true },
    ],
  },
  image: {
    slug: 'image',
    title: 'Image',
    description: 'Image component with lazy loading and fallback.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Lazy loaded images:', code: `import { Image } from '@forgedevstack/bear';\n\n<Image\n  src="/photo.jpg"\n  alt="Description"\n  aspectRatio="16:9"\n  rounded="lg"\n/>`, filename: 'ImageBasic.tsx', livePreview: true },
    ],
  },
  'app-bar': {
    slug: 'app-bar',
    title: 'AppBar',
    description: 'Top application bar component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Application header:', code: `import { AppBar } from '@forgedevstack/bear';\n\n<AppBar\n  leftContent={<Logo />}\n  rightContent={<UserMenu />}\n/>`, filename: 'AppBarBasic.tsx', livePreview: true },
    ],
  },
  'bottom-navigation': {
    slug: 'bottom-navigation',
    title: 'BottomNavigation',
    description: 'Mobile bottom navigation bar.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Mobile navigation:', code: `import { BottomNavigation } from '@forgedevstack/bear';\n\n<BottomNavigation\n  items={[\n    { id: 'home', label: 'Home', icon: <HomeIcon /> },\n    { id: 'search', label: 'Search', icon: <SearchIcon /> },\n  ]}\n  value={activeTab}\n  onChange={setActiveTab}\n/>`, filename: 'BottomNavigationBasic.tsx', livePreview: true },
    ],
  },
  'scroll-area': {
    slug: 'scroll-area',
    title: 'ScrollArea',
    description: 'Custom scrollbar container.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Styled scrollable area:', code: `import { ScrollArea } from '@forgedevstack/bear';\n\n<ScrollArea maxHeight={300}>\n  {/* Long content */}\n</ScrollArea>`, filename: 'ScrollAreaBasic.tsx', livePreview: true },
    ],
  },
  collapsible: {
    slug: 'collapsible',
    title: 'Collapsible',
    description: 'Animated expand/collapse component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Toggle content visibility:', code: `import { Collapsible } from '@forgedevstack/bear';\n\n<Collapsible trigger={<Button>Toggle</Button>}>\n  <div>Hidden content here</div>\n</Collapsible>`, filename: 'CollapsibleBasic.tsx', livePreview: true },
    ],
  },
  kbd: {
    slug: 'kbd',
    title: 'Kbd',
    description: 'Keyboard shortcut display component.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Show keyboard shortcuts:', code: `import { Kbd } from '@forgedevstack/bear';\n\n<Kbd keys={['cmd', 'k']} />\n<Kbd>Enter</Kbd>`, filename: 'KbdBasic.tsx', livePreview: true },
    ],
  },
  'copy-button': {
    slug: 'copy-button',
    title: 'CopyButton',
    description: 'One-click copy to clipboard button.',
    sections: [
      { id: 'basic', title: 'Basic Usage', content: 'Copy text to clipboard:', code: `import { CopyButton } from '@forgedevstack/bear';\n\n<CopyButton value="Text to copy" showText />`, filename: 'CopyButtonBasic.tsx', livePreview: true },
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
        content: '• Button, ButtonGroup - Clickable buttons\n• Card, CardHeader, CardBody, CardFooter - Content containers\n• Modal - Dialog overlay\n• Drawer - Slide-out panel\n• Tooltip - Hover information\n• Input - Text input\n• Select - Dropdown selection\n• MultiSelect - Multi-option selection\n• Autocomplete - Text input with suggestions\n• Checkbox - Multiple selection\n• Radio, RadioGroup - Single selection\n• Rating - Star rating\n• Switch - Toggle control\n• TransferList - Dual-list transfer\n• DataTable - Data grid\n• Grid, GridItem - CSS Grid layout\n• Flex - Flexbox layout\n• Container - Width-constrained wrapper\n• Paper - Elevated surface\n• Divider - Content separator\n• Typography - Text styling\n• Badge - Status labels\n• Avatar - User avatars\n• List, ListItem - Organized lists\n• Alert - Feedback messages\n• Spinner - Loading indicator\n• Progress - Progress bars\n• Menu, MenuItem - Popup menu\n• Dropdown - Action dropdown\n• Link - Styled links\n• Tabs - Tab navigation\n• Accordion - Collapsible content\n• Carousel - Image slider\n• SpeedDial - Expandable FAB\n• Fab - Floating action button\n• Icons - 300+ SVG icons',
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
