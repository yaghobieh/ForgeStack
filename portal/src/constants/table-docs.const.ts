// Grid Table Documentation Content
// Data-driven structure for backend-ready documentation

export interface TableDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
  filename?: string;
  language?: string;
}

export interface TableDocPage {
  slug: string;
  title: string;
  description: string;
  sections: TableDocSection[];
  features?: {
    icon: string;
    title: string;
    desc: string;
  }[];
  apiTable?: {
    headers: string[];
    rows: string[][];
  };
}

// Brand color
export const TABLE_COLOR = '#52c41a';

// Navigation structure
export const TABLE_NAV_ITEMS = [
  { path: '', label: 'Overview', exact: true },
  { path: 'installation', label: 'Installation' },
  { path: 'quick-start', label: 'Quick Start' },
  { path: 'columns', label: 'Columns' },
  { path: 'sorting', label: 'Sorting' },
  { path: 'filtering', label: 'Filtering' },
  { path: 'pagination', label: 'Pagination' },
  { path: 'selection', label: 'Row Selection' },
  { path: 'sticky', label: 'Sticky Columns' },
  { path: 'cell-click', label: 'Cell Click' },
  { path: 'custom-render', label: 'Custom Rendering' },
  { path: 'theming', label: 'Theming' },
  { path: 'mobile', label: 'Mobile View' },
  { path: 'api', label: 'API Reference' },
];

export const TABLE_DOCS: Record<string, TableDocPage> = {
  'overview': {
    slug: 'overview',
    title: 'Grid Table',
    description: 'A powerful, headless React data table component with Tailwind CSS styling, designed for flexibility and performance.',
    sections: [
      {
        id: 'intro',
        title: 'Basic Table',
        content: 'Get started with a simple table example:',
        code: `import { GridTable } from '@forgedevstack/grid-table';
import '@forgedevstack/grid-table/dist/grid-table.css';

const columns = [
  { id: 'name', accessor: 'name', header: 'Name', sortable: true },
  { id: 'email', accessor: 'email', header: 'Email', sortable: true },
  { id: 'role', accessor: 'role', header: 'Role' },
  { id: 'status', accessor: 'status', header: 'Status' },
];

<GridTable data={data} columns={columns} />`,
        filename: 'App.tsx',
      },
    ],
    features: [
      { icon: '↕️', title: 'Sorting', desc: 'Single & multi-column sorting' },
      { icon: '🔍', title: 'Filtering', desc: 'Text, number, select filters' },
      { icon: '📄', title: 'Pagination', desc: 'Built-in pagination controls' },
      { icon: '✅', title: 'Selection', desc: 'Row & multi-select support' },
      { icon: '📌', title: 'Sticky Columns', desc: 'Pin columns left or right' },
      { icon: '🎨', title: 'Custom Cells', desc: 'Render any React component' },
      { icon: '🔀', title: 'Drag & Drop', desc: 'Reorder columns by dragging' },
      { icon: '🌓', title: 'Theming', desc: 'Dark/light mode support' },
      { icon: '📱', title: 'Mobile', desc: 'Responsive mobile layout' },
    ],
  },
  'installation': {
    slug: 'installation',
    title: 'Installation',
    description: 'Install Grid Table using your preferred package manager.',
    sections: [
      {
        id: 'npm',
        title: 'Package Managers',
        content: 'Install using npm, pnpm, yarn, or bun:',
        code: `# npm
npm i @forgedevstack/grid-table

# pnpm
pnpm add @forgedevstack/grid-table

# yarn
yarn add @forgedevstack/grid-table

# bun
bun add @forgedevstack/grid-table`,
        filename: 'terminal',
      },
      {
        id: 'requirements',
        title: 'Requirements',
        content: '✓ React 16.8+ (hooks support)\n✓ TypeScript 5.0+ (recommended)',
      },
      {
        id: 'scss',
        title: 'SCSS Styling',
        content: 'Grid Table uses SCSS for styling. Import the styles in your main SCSS file:',
        code: `// main.scss or App.scss
@import '@forgedevstack/grid-table/dist/grid-table.css';

// Or import the SCSS source for customization
@import '@forgedevstack/grid-table/src/grid-table.scss';`,
        filename: 'styles.scss',
      },
      {
        id: 'tailwind',
        title: 'Tailwind CSS (Optional)',
        content: 'If you prefer Tailwind CSS, you can still use it alongside SCSS:',
        code: `// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@forgedevstack/grid-table/dist/**/*.{js,ts,jsx,tsx}',
  ],
};`,
        filename: 'tailwind.config.js',
      },
    ],
  },
  'quick-start': {
    slug: 'quick-start',
    title: 'Quick Start',
    description: 'Get up and running with Grid Table in minutes.',
    sections: [
      {
        id: 'example',
        title: 'Complete Example',
        content: 'Here is a complete example with TypeScript types and custom rendering:',
        code: `import { GridTable, ColumnDefinition } from '@forgedevstack/grid-table';
import '@forgedevstack/grid-table/dist/grid-table.css';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  status: 'active' | 'inactive';
}

const data: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user', status: 'active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user', status: 'inactive' },
];

const columns: ColumnDefinition<User>[] = [
  { id: 'name', accessor: 'name', header: 'Name', sortable: true, filterable: true },
  { id: 'email', accessor: 'email', header: 'Email', sortable: true },
  { 
    id: 'role', 
    accessor: 'role', 
    header: 'Role',
    render: (value) => (
      <span className={\`px-2 py-1 rounded text-xs \${
        value === 'admin' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'
      }\`}>
        {String(value).toUpperCase()}
      </span>
    ),
  },
  { id: 'status', accessor: 'status', header: 'Status' },
];

function App() {
  return (
    <GridTable
      data={data}
      columns={columns}
      showPagination
      showGlobalFilter
      enableRowSelection
      onRowClick={(row, index) => console.log('Clicked:', row)}
    />
  );
}`,
        filename: 'App.tsx',
      },
    ],
  },
  'columns': {
    slug: 'columns',
    title: 'Column Definition',
    description: 'Columns are defined using the ColumnDefinition interface.',
    sections: [
      {
        id: 'example',
        title: 'Column Configuration',
        content: 'Configure columns with all available options:',
        code: `const columns: ColumnDefinition<User>[] = [
  {
    id: 'name',
    accessor: 'name',
    header: 'Name',
    width: 200,
    sortable: true,
    filterable: true,
    sticky: 'left', // Stick to left
  },
  {
    id: 'email',
    accessor: 'email',
    header: 'Email',
    width: 250,
    sortable: true,
  },
  {
    id: 'role',
    accessor: 'role',
    header: 'Role',
    filterType: 'select',
    filterOptions: [
      { value: 'admin', label: 'Admin' },
      { value: 'user', label: 'User' },
    ],
    render: (value) => <RoleBadge role={value} />,
  },
  {
    id: 'createdAt',
    accessor: (row) => new Date(row.createdAt).toLocaleDateString(),
    header: 'Created',
    sortable: true,
  },
];`,
        filename: 'columns.ts',
      },
    ],
    apiTable: {
      headers: ['Property', 'Type', 'Default', 'Description'],
      rows: [
        ['id', 'string', 'required', 'Unique identifier for the column'],
        ['accessor', 'string | (row) => value', 'required', 'Key or function to access row data'],
        ['header', 'ReactNode | () => ReactNode', 'required', 'Column header content'],
        ['width', 'number | string', '150', 'Column width in pixels or CSS value'],
        ['minWidth', 'number', '50', 'Minimum column width'],
        ['maxWidth', 'number', '500', 'Maximum column width'],
        ['align', "'left' | 'center' | 'right'", "'left'", 'Text alignment'],
        ['sortable', 'boolean', 'false', 'Enable sorting for this column'],
        ['filterable', 'boolean', 'false', 'Enable filtering for this column'],
        ['resizable', 'boolean', 'true', 'Allow column resizing'],
        ['draggable', 'boolean', 'true', 'Allow drag-drop reordering'],
        ['hidden', 'boolean', 'false', 'Hide this column'],
        ['hiddenOnMobile', 'boolean', 'false', 'Hide on mobile screens'],
        ['sticky', "'left' | 'right'", 'undefined', 'Pin column to left or right'],
        ['render', '(value, row, index) => ReactNode', 'undefined', 'Custom cell renderer'],
        ['filterType', "'text' | 'number' | 'select' | 'date'", "'text'", 'Filter input type'],
        ['filterOptions', 'Array<{value, label}>', 'undefined', 'Options for select filter'],
        ['className', 'string', 'undefined', 'CSS class for column'],
        ['headerClassName', 'string', 'undefined', 'CSS class for header cell'],
        ['cellClassName', 'string', 'undefined', 'CSS class for data cells'],
      ],
    },
  },
  'sorting': {
    slug: 'sorting',
    title: 'Sorting',
    description: 'Enable sorting on columns by setting sortable: true.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Sorting',
        content: 'Enable sorting on any column:',
        code: `const columns = [
  { id: 'name', accessor: 'name', header: 'Name', sortable: true },
  { id: 'email', accessor: 'email', header: 'Email', sortable: true },
  { id: 'role', accessor: 'role', header: 'Role', sortable: true },
];

<GridTable data={data} columns={columns} />`,
        filename: 'sorting.tsx',
      },
      {
        id: 'multi',
        title: 'Multi-Column Sort',
        content: 'Hold Shift while clicking to sort by multiple columns.',
      },
      {
        id: 'custom',
        title: 'Custom Sort Function',
        content: 'Provide a custom sort function for complex sorting logic:',
        code: `{
  id: 'date',
  accessor: 'createdAt',
  header: 'Date',
  sortable: true,
  sortFn: (a, b, direction) => {
    const dateA = new Date(a).getTime();
    const dateB = new Date(b).getTime();
    return direction === 'asc' ? dateA - dateB : dateB - dateA;
  },
}`,
        filename: 'custom-sort.ts',
      },
      {
        id: 'callback',
        title: 'Sort Callback',
        content: 'Listen to sort changes:',
        code: `<GridTable
  data={data}
  columns={columns}
  onSort={(sorting) => {
    console.log('Current sort:', sorting);
    // [{ columnId: 'name', direction: 'asc' }]
  }}
/>`,
        filename: 'sort-callback.tsx',
      },
    ],
  },
  'filtering': {
    slug: 'filtering',
    title: 'Filtering',
    description: 'Grid Table supports both global search and per-column filtering.',
    sections: [
      {
        id: 'global',
        title: 'Global Filter',
        content: 'Enable global search across all columns:',
        code: `<GridTable
  data={data}
  columns={columns}
  showGlobalFilter // Enable global search
/>`,
        filename: 'global-filter.tsx',
      },
      {
        id: 'column',
        title: 'Column Filters',
        content: 'Enable filtering on specific columns with different filter types:',
        code: `const columns = [
  { 
    id: 'name', 
    accessor: 'name', 
    header: 'Name', 
    filterable: true, // Enable column filter
    filterType: 'text', // Default
  },
  { 
    id: 'role', 
    accessor: 'role', 
    header: 'Role', 
    filterable: true,
    filterType: 'select',
    filterOptions: [
      { value: 'admin', label: 'Admin' },
      { value: 'user', label: 'User' },
      { value: 'guest', label: 'Guest' },
    ],
  },
  { 
    id: 'salary', 
    accessor: 'salary', 
    header: 'Salary', 
    filterable: true,
    filterType: 'number', // Number with operators
  },
];`,
        filename: 'column-filters.ts',
      },
      {
        id: 'operators',
        title: 'Filter Operators',
        content: 'The filter popup supports these operators: contains, equals, startsWith, endsWith, notContains, notEquals, greaterThan, lessThan.',
      },
    ],
  },
  'pagination': {
    slug: 'pagination',
    title: 'Pagination',
    description: 'Built-in pagination with customizable options.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Pagination',
        content: 'Enable pagination on your table:',
        code: `<GridTable
  data={data}
  columns={columns}
  showPagination
  paginationConfig={{
    initialPageSize: 10,
    pageSizeOptions: [5, 10, 20, 50, 100],
  }}
  onPageChange={(page, pageSize) => {
    console.log('Page:', page, 'Size:', pageSize);
  }}
/>`,
        filename: 'pagination.tsx',
      },
      {
        id: 'config',
        title: 'Pagination Options',
        content: 'Configure pagination behavior:',
        code: `interface PaginationConfig {
  initialPage?: number;       // Default: 1
  initialPageSize?: number;   // Default: 10
  pageSizeOptions?: number[]; // Default: [10, 20, 50, 100]
  showFirstLast?: boolean;    // Show first/last buttons
  showPageNumbers?: boolean;  // Show page number buttons
  maxVisiblePages?: number;   // Max visible page buttons
}`,
        filename: 'pagination-config.ts',
      },
    ],
  },
  'selection': {
    slug: 'selection',
    title: 'Row Selection',
    description: 'Enable row selection with single or multi-select support.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Selection',
        content: 'Enable row selection:',
        code: `<GridTable
  data={data}
  columns={columns}
  enableRowSelection
  onRowSelect={(selectedRows) => {
    console.log('Selected:', selectedRows);
  }}
/>`,
        filename: 'selection.tsx',
      },
      {
        id: 'options',
        title: 'Selection Options',
        content: 'Configure selection behavior with multi-select and conditional selection:',
        code: `<GridTable
  data={data}
  columns={columns}
  enableRowSelection      // Enable selection
  enableMultiSelect       // Allow selecting multiple rows
  isRowSelectable={(row) => row.status !== 'locked'}  // Conditional
  onRowSelect={(rows) => setSelectedUsers(rows)}
/>`,
        filename: 'selection-options.tsx',
      },
    ],
  },
  'sticky': {
    slug: 'sticky',
    title: 'Sticky Columns',
    description: 'Pin columns to the left or right side so they remain visible when scrolling horizontally.',
    sections: [
      {
        id: 'example',
        title: 'Sticky Name & Actions',
        content: 'Pin columns to left or right:',
        code: `const columns = [
  {
    id: 'name',
    accessor: 'name',
    header: 'Name',
    sticky: 'left', // Sticks to left
  },
  { id: 'email', accessor: 'email', header: 'Email' },
  { id: 'role', accessor: 'role', header: 'Role' },
  { id: 'status', accessor: 'status', header: 'Status' },
  {
    id: 'actions',
    accessor: 'id',
    header: 'Actions',
    sticky: 'right', // Sticks to right
    render: (_, row) => (
      <div className="flex gap-2">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    ),
  },
];`,
        filename: 'sticky-columns.tsx',
      },
    ],
  },
  'cell-click': {
    slug: 'cell-click',
    title: 'Cell Click Events',
    description: 'Handle clicks on individual cells to perform specific actions.',
    sections: [
      {
        id: 'handler',
        title: 'Click Handler',
        content: 'Handle row and cell clicks:',
        code: `<GridTable
  data={data}
  columns={columns}
  onRowClick={(row, index) => {
    console.log('Row clicked:', { row, index });
  }}
  onCellClick={(event) => {
    console.log('Cell clicked:', event);
    // event = { row, rowIndex, columnId, value }
    
    // Example: Open email client when clicking email cell
    if (event.columnId === 'email') {
      window.open(\`mailto:\${event.value}\`, '_blank');
    }
    
    // Example: Edit specific field
    if (event.columnId === 'name') {
      openEditModal(event.row, 'name');
    }
  }}
/>`,
        filename: 'cell-click.tsx',
      },
      {
        id: 'event',
        title: 'Event Object',
        content: 'The cell click event provides detailed information:',
        code: `interface CellClickEvent<T> {
  row: T;              // The row data
  rowIndex: number;    // Row index in the data array
  columnId: string;    // Column ID that was clicked
  value: unknown;      // Cell value
}`,
        filename: 'cell-click-event.ts',
      },
    ],
  },
  'custom-render': {
    slug: 'custom-render',
    title: 'Custom Cell Rendering',
    description: 'Use the render prop to display custom React components in cells.',
    sections: [
      {
        id: 'example',
        title: 'Custom Renderers',
        content: 'Create custom cell renderers for badges, status indicators, and action buttons:',
        code: `// Define components outside
const RoleBadge = ({ role }: { role: string }) => (
  <span className={\`px-2 py-1 rounded text-xs font-medium \${
    role === 'admin' ? 'bg-purple-500/20 text-purple-400' :
    role === 'user' ? 'bg-blue-500/20 text-blue-400' :
    'bg-gray-500/20 text-gray-400'
  }\`}>
    {role.toUpperCase()}
  </span>
);

const StatusIndicator = ({ status }: { status: string }) => (
  <span className={\`flex items-center gap-2 \${
    status === 'active' ? 'text-green-400' : 'text-red-400'
  }\`}>
    <span className={\`w-2 h-2 rounded-full \${
      status === 'active' ? 'bg-green-400' : 'bg-red-400'
    }\`} />
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
);

// Use in columns
const columns = [
  { id: 'name', accessor: 'name', header: 'Name' },
  { 
    id: 'role', 
    accessor: 'role', 
    header: 'Role',
    render: (value) => <RoleBadge role={String(value)} />,
  },
  { 
    id: 'status', 
    accessor: 'status', 
    header: 'Status',
    render: (value) => <StatusIndicator status={String(value)} />,
  },
  {
    id: 'actions',
    accessor: 'id',
    header: 'Actions',
    render: (_, row) => (
      <div className="flex gap-2">
        <button onClick={() => editUser(row)}>Edit</button>
        <button onClick={() => deleteUser(row)}>Delete</button>
      </div>
    ),
  },
];`,
        filename: 'custom-render.tsx',
      },
    ],
  },
  'theming': {
    slug: 'theming',
    title: 'Theming',
    description: 'Grid Table uses CSS variables for theming, making it easy to customize colors.',
    sections: [
      {
        id: 'variables',
        title: 'CSS Variables',
        content: 'Customize the table with CSS variables:',
        code: `/* Add to your CSS */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --bg-tertiary: #ebebeb;
  --bg-hover: #e0e0e0;
  --text-primary: #262626;
  --text-secondary: #595959;
  --text-muted: #8c8c8c;
  --border-color: rgba(0, 0, 0, 0.06);
  --accent-primary: #52c41a; /* Grid Table green */
}

/* Dark mode */
html.dark {
  --bg-primary: #1e1e1e;
  --bg-secondary: #2b2b2b;
  --bg-tertiary: #3c3c3c;
  --bg-hover: #4e4e4e;
  --text-primary: #a9b7c6;
  --text-secondary: #808080;
  --text-muted: #606060;
  --border-color: rgba(255, 255, 255, 0.08);
}`,
        filename: 'theme.css',
      },
      {
        id: 'classes',
        title: 'Custom Class Names',
        content: 'Override default classes with your own:',
        code: `<GridTable
  data={data}
  columns={columns}
  classNames={{
    root: 'my-custom-table',
    header: 'my-header-class',
    body: 'my-body-class',
    row: 'my-row-class',
    cell: 'my-cell-class',
    pagination: 'my-pagination-class',
  }}
/>`,
        filename: 'custom-classes.tsx',
      },
    ],
  },
  'mobile': {
    slug: 'mobile',
    title: 'Mobile Responsive',
    description: 'Grid Table automatically adapts to mobile screens with a card-based layout.',
    sections: [
      {
        id: 'config',
        title: 'Mobile Configuration',
        content: 'Configure mobile breakpoints and behavior:',
        code: `<GridTable
  data={data}
  columns={columns}
  mobileBreakpoint="md"        // 'sm' | 'md' | 'lg' (default: 'md')
  showMobileLabels            // Show column labels on mobile
/>`,
        filename: 'mobile-config.tsx',
      },
      {
        id: 'hidden',
        title: 'Hide Columns on Mobile',
        content: 'Use hiddenOnMobile to hide columns on mobile screens:',
        code: `const columns = [
  { id: 'name', accessor: 'name', header: 'Name' },
  { id: 'email', accessor: 'email', header: 'Email', hiddenOnMobile: true },
  { id: 'role', accessor: 'role', header: 'Role' },
];`,
        filename: 'hidden-mobile.ts',
      },
      {
        id: 'drawer',
        title: 'Mobile Drawer',
        content: 'On mobile, filter and sort controls appear in a slide-up drawer for better UX.',
      },
    ],
  },
  'api': {
    slug: 'api',
    title: 'API Reference',
    description: 'Complete API reference for Grid Table props.',
    sections: [],
    apiTable: {
      headers: ['Prop', 'Type', 'Description'],
      rows: [
        ['data', 'T[]', 'Array of data objects to display'],
        ['columns', 'ColumnDefinition<T>[]', 'Column configuration array'],
        ['loading', 'boolean', 'Show loading skeleton'],
        ['error', 'Error | string', 'Error state to display'],
        ['emptyContent', 'ReactNode', 'Content for empty state'],
        ['showPagination', 'boolean', 'Enable pagination'],
        ['showGlobalFilter', 'boolean', 'Enable global search'],
        ['showFilter', 'boolean', 'Enable column filters'],
        ['enableRowSelection', 'boolean', 'Enable row selection'],
        ['enableDragDrop', 'boolean', 'Enable column drag-drop'],
        ['enableColumnResize', 'boolean', 'Enable column resizing'],
        ['stickyHeader', 'boolean', 'Sticky table header'],
        ['paginationConfig', 'PaginationConfig', 'Pagination settings'],
        ['onRowClick', '(row, index) => void', 'Row click handler'],
        ['onCellClick', '(event) => void', 'Cell click handler'],
        ['onRowSelect', '(rows) => void', 'Selection change handler'],
        ['onSort', '(sorting) => void', 'Sort change handler'],
        ['onFilter', '(filters) => void', 'Filter change handler'],
        ['onPageChange', '(page, size) => void', 'Page change handler'],
        ['getRowId', '(row) => string | number', 'Custom row ID getter'],
        ['getRowClassName', '(row, index) => string', 'Dynamic row classes'],
        ['isRowDisabled', '(row) => boolean', 'Disable specific rows'],
      ],
    },
  },
};

