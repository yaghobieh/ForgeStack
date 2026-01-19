// Synapse Documentation Content
// Data-driven structure for backend-ready documentation

export interface SynapseDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
  filename?: string;
  language?: string;
}

export interface SynapseDocPage {
  slug: string;
  title: string;
  description: string;
  sections: SynapseDocSection[];
  features?: {
    icon: string;
    title: string;
    desc: string;
  }[];
  apiTable?: {
    headers: string[];
    rows: string[][];
  };
  middleware?: {
    icon: string;
    name: string;
    desc: string;
  }[];
}

// Brand color
export const SYNAPSE_COLOR = '#a855f7';

// Navigation structure
export const SYNAPSE_NAV_ITEMS = [
  { path: '', label: 'Overview', exact: true },
  { path: 'installation', label: 'Installation' },
  { path: 'quick-start', label: 'Quick Start' },
  { path: 'nucleus', label: 'Nucleus' },
  { path: 'signals', label: 'Signals' },
  { path: 'hooks', label: 'Hooks' },
  { path: 'middleware', label: 'Middleware' },
  { path: 'api-hooks', label: 'API Hooks' },
  { path: 'devtools', label: 'DevTools' },
  { path: 'typescript', label: 'TypeScript' },
  { path: 'api', label: 'API Reference' },
];

export const SYNAPSE_DOCS: Record<string, SynapseDocPage> = {
  'overview': {
    slug: 'overview',
    title: 'Synapse',
    description: 'Ultra-simple state management for React. No dispatch, no reducers, just signals.',
    sections: [
      {
        id: 'example',
        title: 'Quick Example',
        content: 'Create state and use it in components with minimal boilerplate:',
        code: `import { createNucleus, useNucleus } from '@forgedevstack/synapse';

// Create your state
const counterNucleus = createNucleus((set) => ({
  count: 0,
  increment: () => set((s) => ({ count: s.count + 1 })),
  decrement: () => set((s) => ({ count: s.count - 1 })),
  reset: () => set({ count: 0 }),
}));

// Use in components
function Counter() {
  const { count, increment, decrement, reset } = useNucleus(counterNucleus);
  
  return (
    <div>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}`,
        filename: 'Counter.tsx',
      },
    ],
    features: [
      { icon: 'nucleus', title: 'Nucleus', desc: 'Simple state containers' },
      { icon: 'signal', title: 'Signals', desc: 'Reactive primitives' },
      { icon: 'hooks', title: 'Hooks', desc: 'useNucleus, usePick, useSignal' },
      { icon: 'middleware', title: 'Middleware', desc: 'Logger, persist, immer' },
      { icon: 'devtools', title: 'DevTools', desc: 'Chrome/Safari extension' },
      { icon: 'api', title: 'API Hooks', desc: 'useQuery, useMutation' },
      { icon: 'typescript', title: 'TypeScript', desc: 'Full type inference' },
      { icon: 'time', title: 'Time Travel', desc: 'Debug with history' },
      { icon: 'tiny', title: 'Tiny', desc: '< 2KB gzipped' },
    ],
  },
  'installation': {
    slug: 'installation',
    title: 'Installation',
    description: 'Install Synapse using your preferred package manager.',
    sections: [
      {
        id: 'install',
        title: 'Package Managers',
        content: 'Install using npm, pnpm, yarn, or bun:',
        code: `# npm
npm i @forgedevstack/synapse

# pnpm
pnpm add @forgedevstack/synapse

# yarn
yarn add @forgedevstack/synapse

# bun
bun add @forgedevstack/synapse`,
        filename: 'terminal',
      },
      {
        id: 'requirements',
        title: 'Requirements',
        content: '✓ React 16.8+ (hooks support)\n✓ TypeScript 4.7+ (recommended)',
      },
      {
        id: 'devtools',
        title: 'DevTools Extension',
        content: 'Install the browser extension for debugging.',
      },
    ],
  },
  'quick-start': {
    slug: 'quick-start',
    title: 'Quick Start',
    description: 'Get up and running with Synapse in 3 steps.',
    sections: [
      {
        id: 'step1',
        title: '1. Create a Nucleus',
        content: 'Define your state and actions in a nucleus:',
        code: `import { createNucleus } from '@forgedevstack/synapse';

interface UserState {
  user: { name: string; email: string } | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const userNucleus = createNucleus<UserState>((set) => ({
  user: null,
  loading: false,
  
  login: async (email, password) => {
    set({ loading: true });
    const user = await api.login(email, password);
    set({ user, loading: false });
  },
  
  logout: () => set({ user: null }),
}));`,
        filename: 'state/user.ts',
      },
      {
        id: 'step2',
        title: '2. Use in Components',
        content: 'Access state and actions with the useNucleus hook:',
        code: `import { useNucleus } from '@forgedevstack/synapse';
import { userNucleus } from './state/user';

function UserProfile() {
  const { user, logout } = useNucleus(userNucleus);
  
  if (!user) return <LoginForm />;
  
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}`,
        filename: 'UserProfile.tsx',
      },
      {
        id: 'step3',
        title: '3. Optimize with usePick',
        content: 'Select specific state slices for optimized re-renders:',
        code: `import { usePick } from '@forgedevstack/synapse';
import { userNucleus } from './state/user';

// Only re-renders when name changes!
function UserName() {
  const name = usePick(userNucleus, (s) => s.user?.name);
  return <span>{name}</span>;
}`,
        filename: 'UserName.tsx',
      },
    ],
  },
  'nucleus': {
    slug: 'nucleus',
    title: 'Nucleus',
    description: 'A Nucleus is the core state container in Synapse. It replaces "store" from Redux/Zustand with a simpler API.',
    sections: [
      {
        id: 'create',
        title: 'Creating a Nucleus',
        content: 'Create a nucleus with state and actions:',
        code: `import { createNucleus } from '@forgedevstack/synapse';

const todosNucleus = createNucleus((set, get) => ({
  // State
  todos: [],
  filter: 'all',
  
  // Actions
  addTodo: (text: string) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, done: false }],
  })),
  
  toggleTodo: (id: number) => set((state) => ({
    todos: state.todos.map(t => 
      t.id === id ? { ...t, done: !t.done } : t
    ),
  })),
  
  // Computed (using get())
  getActiveTodos: () => get().todos.filter(t => !t.done),
  
  // Async action
  fetchTodos: async () => {
    const todos = await api.getTodos();
    set({ todos });
  },
}));`,
        filename: 'todosNucleus.ts',
      },
      {
        id: 'methods',
        title: 'Nucleus Methods',
        content: 'Available methods on a nucleus instance:\n• get() - Get current state\n• set(partial) - Update state with partial object or function\n• subscribe(listener) - Subscribe to state changes\n• pick(key) - Get a specific property\n• reset() - Reset to initial state\n• destroy() - Cleanup and destroy nucleus',
      },
    ],
    apiTable: {
      headers: ['Redux/Zustand', 'Synapse'],
      rows: [
        ['store', 'nucleus'],
        ['dispatch(action)', 'set({ ... })'],
        ['useSelector()', 'usePick()'],
        ['createStore()', 'createNucleus()'],
      ],
    },
  },
  'signals': {
    slug: 'signals',
    title: 'Signals',
    description: 'Signals are reactive primitives for fine-grained reactivity. Perfect for simple state.',
    sections: [
      {
        id: 'basic',
        title: 'Basic Signal',
        content: 'Create and use signals for simple reactive values:',
        code: `import { signal, useSignal } from '@forgedevstack/synapse';

// Create a signal
const count = signal(0);

// Use in component
function Counter() {
  const value = useSignal(count);
  
  return (
    <button onClick={() => count.set(v => v + 1)}>
      Count: {value}
    </button>
  );
}`,
        filename: 'Counter.tsx',
      },
      {
        id: 'computed',
        title: 'Computed Signals',
        content: 'Derive values from other signals:',
        code: `import { signal, computed, useComputed } from '@forgedevstack/synapse';

const firstName = signal('John');
const lastName = signal('Doe');

// Derived value - updates automatically
const fullName = computed(() => 
  \`\${firstName.value} \${lastName.value}\`
);

function Name() {
  const name = useComputed(fullName);
  return <h1>{name}</h1>; // "John Doe"
}`,
        filename: 'Name.tsx',
      },
      {
        id: 'batch',
        title: 'Batch Updates',
        content: 'Batch multiple signal updates into a single render:',
        code: `import { signal, batch } from '@forgedevstack/synapse';

const firstName = signal('John');
const lastName = signal('Doe');
const age = signal(30);

// Without batch: 3 re-renders
firstName.set('Jane');
lastName.set('Smith');
age.set(25);

// With batch: 1 re-render
batch(() => {
  firstName.set('Jane');
  lastName.set('Smith');
  age.set(25);
});`,
        filename: 'batch.ts',
      },
    ],
  },
  'hooks': {
    slug: 'hooks',
    title: 'React Hooks',
    description: 'Synapse provides several React hooks for accessing and subscribing to state.',
    sections: [
      {
        id: 'useNucleus',
        title: 'useNucleus',
        content: 'Use entire nucleus state in a component:',
        code: `import { useNucleus } from '@forgedevstack/synapse';

function TodoList() {
  const { todos, addTodo, toggleTodo } = useNucleus(todosNucleus);
  
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
          {todo.text}
        </li>
      ))}
    </ul>
  );
}`,
        filename: 'TodoList.tsx',
      },
      {
        id: 'usePick',
        title: 'usePick',
        content: 'Select specific state slice - only re-renders when selected value changes:',
        code: `import { usePick } from '@forgedevstack/synapse';

// Only re-renders when todos.length changes
function TodoCount() {
  const count = usePick(todosNucleus, s => s.todos.length);
  return <span>{count} todos</span>;
}

// Custom equality function
function TodoIds() {
  const ids = usePick(
    todosNucleus,
    s => s.todos.map(t => t.id),
    (a, b) => a.join(',') === b.join(',') // Custom compare
  );
  return <pre>{JSON.stringify(ids)}</pre>;
}`,
        filename: 'TodoCount.tsx',
      },
      {
        id: 'useNuclei',
        title: 'useNuclei',
        content: 'Use multiple nuclei together:',
        code: `import { useNuclei } from '@forgedevstack/synapse';

function Dashboard() {
  const [user, todos] = useNuclei([userNucleus, todosNucleus]);
  
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>You have {todos.todos.length} todos</p>
    </div>
  );
}`,
        filename: 'Dashboard.tsx',
      },
      {
        id: 'useSubscribe',
        title: 'useSubscribe',
        content: 'Subscribe to state changes for side effects:',
        code: `import { useSubscribe } from '@forgedevstack/synapse';

function Analytics() {
  useSubscribe(userNucleus, (state, prev) => {
    if (state.user !== prev.user) {
      analytics.track('user_changed', { user: state.user });
    }
  });
  
  return null;
}`,
        filename: 'Analytics.tsx',
      },
    ],
  },
  'middleware': {
    slug: 'middleware',
    title: 'Middleware',
    description: 'Enhance nuclei with built-in middleware for logging, persistence, undo/redo, and more.',
    sections: [
      {
        id: 'logger',
        title: 'Logger',
        content: 'Log state changes to console:',
        code: `import { createNucleus } from '@forgedevstack/synapse';
import { logger } from '@forgedevstack/synapse/middleware';

const myNucleus = createNucleus(
  (set) => ({ count: 0 }),
  { middleware: [logger({ diff: true, timestamp: true })] }
);`,
        filename: 'with-logger.ts',
      },
      {
        id: 'persist',
        title: 'Persist',
        content: 'Persist state to localStorage or sessionStorage:',
        code: `import { persist } from '@forgedevstack/synapse/middleware';

const userNucleus = createNucleus(
  (set) => ({
    name: '',
    preferences: { theme: 'dark' },
  }),
  {
    middleware: [
      persist({
        key: 'user-state',
        storage: 'local',
        include: ['preferences'],
      })
    ]
  }
);`,
        filename: 'with-persist.ts',
      },
      {
        id: 'immer',
        title: 'Immer',
        content: 'Enable mutable-style immutable updates:',
        code: `import { immer } from '@forgedevstack/synapse/middleware';

const todosNucleus = createNucleus(
  (set) => ({
    todos: [{ id: 1, text: 'Learn Synapse', done: false }],
    toggle: (id: number) => set((draft) => {
      const todo = draft.todos.find(t => t.id === id);
      if (todo) todo.done = !todo.done;
    }),
  }),
  { middleware: [immer()] }
);`,
        filename: 'with-immer.ts',
      },
      {
        id: 'undo',
        title: 'Undo / Redo',
        content: 'Add undo/redo capability to any nucleus. Perfect for editors, drawing apps, and form builders:',
        code: `import { undo } from '@forgedevstack/synapse/middleware';

const canvasNucleus = createNucleus(
  (set) => ({
    shapes: [],
    addShape: (shape) => set((s) => ({ shapes: [...s.shapes, shape] })),
    deleteShape: (id) => set((s) => ({ shapes: s.shapes.filter(s => s.id !== id) })),
  }),
  { middleware: [undo({ limit: 50, exclude: ['selectedId'] })] }
);

function Canvas() {
  const { shapes, undo, redo, canUndo, canRedo } = useNucleus(canvasNucleus);
  
  return (
    <div>
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
    </div>
  );
}`,
        filename: 'with-undo.ts',
      },
      {
        id: 'throttle',
        title: 'Throttle / Debounce',
        content: 'Prevent excessive re-renders during rapid updates:',
        code: `import { throttle, debounce } from '@forgedevstack/synapse/middleware';

const sliderNucleus = createNucleus(
  (set) => ({
    value: 50,
    setValue: (value) => set({ value }),
  }),
  { middleware: [throttle({ wait: 16 })] }
);

const searchNucleus = createNucleus(
  (set) => ({
    query: '',
    setQuery: (query) => set({ query }),
  }),
  { middleware: [debounce({ wait: 300 })] }
);`,
        filename: 'with-throttle.ts',
      },
      {
        id: 'validate',
        title: 'Validate',
        content: 'Validate state shape with Zod or any compatible schema library:',
        code: `import { validate } from '@forgedevstack/synapse/middleware';
import { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email(),
  age: z.number().min(0).max(150),
});

const userNucleus = createNucleus(
  (set) => ({
    email: '',
    age: 0,
    updateEmail: (email) => set({ email }),
  }),
  {
    middleware: [
      validate({
        schema: UserSchema,
        mode: 'reject',
        onError: (err) => console.error('Invalid:', err),
      })
    ]
  }
);

userNucleus.get().updateEmail('invalid');     // Rejected!
userNucleus.get().updateEmail('a@b.com');     // OK`,
        filename: 'with-validate.ts',
      },
      {
        id: 'sync',
        title: 'Sync',
        content: 'Keep state synchronized across browser tabs:',
        code: `import { sync } from '@forgedevstack/synapse/middleware';

const cartNucleus = createNucleus(
  (set) => ({
    items: [],
    addItem: (item) => set((s) => ({ items: [...s.items, item] })),
    clear: () => set({ items: [] }),
  }),
  {
    middleware: [
      sync({
        key: 'cart',
        include: ['items'],
        debounce: 100,
      })
    ]
  }
);

// Tab 1: Add item
cartNucleus.get().addItem({ id: '1', name: 'Shoes' });

// Tab 2: Instantly sees the new item!`,
        filename: 'with-sync.ts',
      },
      {
        id: 'combined',
        title: 'Combining Middleware',
        content: 'Stack multiple middleware together:',
        code: `const editorNucleus = createNucleus(
  (set) => ({
    content: '',
    cursor: 0,
    setContent: (content) => set({ content }),
  }),
  {
    middleware: [
      undo({ limit: 100, exclude: ['cursor'] }),
      throttle({ wait: 50, keys: ['cursor'] }),
      validate({ schema: EditorSchema, mode: 'warn' }),
      sync({ key: 'editor', include: ['content'] }),
      logger({ collapsed: true }),
      persist({ key: 'draft', throttle: 1000 }),
    ]
  }
);`,
        filename: 'combined.ts',
      },
    ],
    middleware: [
      { icon: 'log', name: 'logger', desc: 'Log state changes to console' },
      { icon: 'save', name: 'persist', desc: 'Persist state to storage' },
      { icon: 'edit', name: 'immer', desc: 'Mutable-style immutable updates' },
      { icon: 'undo', name: 'undo', desc: 'Undo/redo state changes' },
      { icon: 'clock', name: 'throttle', desc: 'Throttle rapid updates' },
      { icon: 'shield', name: 'validate', desc: 'Validate state with Zod' },
      { icon: 'sync', name: 'sync', desc: 'Sync state across tabs' },
    ],
  },
  'api-hooks': {
    slug: 'api-hooks',
    title: 'API Hooks',
    description: 'Built-in hooks for data fetching and mutations.',
    sections: [
      {
        id: 'useQuery',
        title: 'useQuery',
        content: 'Fetch data with automatic loading and error states:',
        code: `import { useQuery } from '@forgedevstack/synapse';

function UserList() {
  const { data, loading, error, refetch } = useQuery(
    () => fetch('/api/users').then(r => r.json()),
    { 
      refetchOnFocus: true,
      refetchInterval: 30000, // 30 seconds
      staleTime: 5000,        // 5 seconds
    }
  );
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  
  return (
    <ul>
      {data?.map(user => <li key={user.id}>{user.name}</li>)}
      <button onClick={refetch}>Refresh</button>
    </ul>
  );
}`,
        filename: 'UserList.tsx',
      },
      {
        id: 'useMutation',
        title: 'useMutation',
        content: 'Handle mutations with callbacks:',
        code: `import { useMutation } from '@forgedevstack/synapse';

function CreateUser() {
  const { mutate, loading, error } = useMutation(
    (data) => fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(r => r.json()),
    {
      onSuccess: (user) => {
        toast.success('User created!');
        navigate(\`/users/\${user.id}\`);
      },
      onError: (err) => toast.error(err.message),
    }
  );
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      mutate({ name: e.target.name.value });
    }}>
      <input name="name" required />
      <button disabled={loading}>
        {loading ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
}`,
        filename: 'CreateUser.tsx',
      },
    ],
  },
  'devtools': {
    slug: 'devtools',
    title: 'DevTools Extension',
    description: 'Chrome & Safari browser extension for debugging Synapse state.',
    sections: [
      {
        id: 'enable',
        title: 'Enable DevTools in Your App',
        content: 'DevTools are auto-enabled in development mode:',
        code: `import { createNucleus } from '@forgedevstack/synapse';

// DevTools are auto-enabled in development mode
const counterNucleus = createNucleus(
  (set) => ({
    count: 0,
    increment: () => set((s) => ({ count: s.count + 1 })),
    decrement: () => set((s) => ({ count: s.count - 1 })),
  }),
  {
    devtools: true,           // Enable (default in dev)
    devtoolsName: 'Counter',  // Shows as "Counter" in DevTools
  }
);`,
        filename: 'counterNucleus.ts',
      },
      {
        id: 'usage',
        title: 'Using DevTools',
        content: '1. Open DevTools - Press F12 or right-click → Inspect, then click the "Synapse" tab\n2. View State - See all your nuclei and their current state in a tree view\n3. Track Actions - Watch actions appear in real-time as state changes\n4. Time Travel - Click the ⏪ button on any action to jump to that state\n5. Edit Live - Click any value in the State tab to edit it directly\n6. Save Snapshots - Click 📸 to save current state, click snapshot to restore',
      },
    ],
    features: [
      { icon: 'chart', title: 'State Inspector', desc: 'View all nuclei and signals in a tree view' },
      { icon: 'rewind', title: 'Time Travel', desc: 'Jump to any previous state with one click' },
      { icon: 'edit', title: 'Live Edit', desc: 'Modify state directly and see changes instantly' },
      { icon: 'camera', title: 'Snapshots', desc: 'Save and restore state snapshots' },
      { icon: 'download', title: 'Export/Import', desc: 'Export state as JSON, import from file' },
      { icon: 'activity', title: 'Performance', desc: 'Track updates/sec, state size, render count' },
      { icon: 'search', title: 'Search', desc: 'Search across all state values' },
      { icon: 'diff', title: 'Diff View', desc: 'See exactly what changed in each action' },
      { icon: 'clock', title: 'Action Tracking', desc: 'View all actions with timestamps' },
    ],
    apiTable: {
      headers: ['Shortcut', 'Action'],
      rows: [
        ['Ctrl/Cmd + F', 'Search state'],
        ['Ctrl/Cmd + S', 'Save snapshot'],
        ['Ctrl/Cmd + E', 'Export state'],
        ['Ctrl/Cmd + I', 'Import state'],
        ['↑ / ↓', 'Navigate actions'],
        ['Enter', 'Jump to selected action'],
      ],
    },
  },
  'typescript': {
    slug: 'typescript',
    title: 'TypeScript',
    description: 'Synapse is written in TypeScript and provides excellent type inference.',
    sections: [
      {
        id: 'inference',
        title: 'Full Type Inference',
        content: 'Types are automatically inferred throughout your application:',
        code: `import { createNucleus, useNucleus, usePick } from '@forgedevstack/synapse';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodosState {
  todos: Todo[];
  filter: 'all' | 'active' | 'done';
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  setFilter: (filter: 'all' | 'active' | 'done') => void;
}

// Full type inference
const todosNucleus = createNucleus<TodosState>((set) => ({
  todos: [],
  filter: 'all',
  
  addTodo: (text) => set((state) => ({
    todos: [...state.todos, { id: Date.now(), text, done: false }],
  })),
  
  toggleTodo: (id) => set((state) => ({
    todos: state.todos.map(t => 
      t.id === id ? { ...t, done: !t.done } : t
    ),
  })),
  
  setFilter: (filter) => set({ filter }),
}));

// Types are inferred in components
function TodoApp() {
  const { todos, addTodo, filter } = useNucleus(todosNucleus);
  //     ^? Todo[]  ^? (text: string) => void
  
  const count = usePick(todosNucleus, s => s.todos.length);
  //    ^? number
  
  return <div>...</div>;
}`,
        filename: 'typed-todos.ts',
      },
    ],
  },
  'api': {
    slug: 'api',
    title: 'API Reference',
    description: 'Complete API reference for Synapse.',
    sections: [],
    apiTable: {
      headers: ['Function/Hook', 'Description'],
      rows: [
        ['createNucleus(initializer, config?)', 'Create a new nucleus'],
        ['signal(initialValue)', 'Create a reactive signal'],
        ['computed(computeFn)', 'Create a derived signal'],
        ['batch(fn)', 'Batch multiple updates'],
        ['effect(fn)', 'Run side effects on signal changes'],
        ['useNucleus(nucleus)', 'Use entire nucleus state'],
        ['usePick(nucleus, selector, equalityFn?)', 'Use selected state slice'],
        ['useNuclei([...nuclei])', 'Use multiple nuclei'],
        ['useSignal(signal)', 'Use signal value'],
        ['useComputed(computed)', 'Use computed value'],
        ['useQuery(fetcher, options?)', 'Fetch data with state'],
        ['useMutation(mutationFn, options?)', 'Handle mutations'],
        ['useSubscribe(nucleus, callback)', 'Subscribe to changes'],
        ['useSnapshot(nucleus)', 'Get state without subscribing'],
        ['useAction(actionFn)', 'Create stable action reference'],
        ['logger(options?)', 'Log state changes middleware'],
        ['persist(options)', 'Persist state middleware'],
        ['immer()', 'Enable mutable-style updates middleware'],
      ],
    },
  },
};

