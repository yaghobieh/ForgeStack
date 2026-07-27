import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MobileDocsNav } from '../components/MobileDocsNav';
import { CodeBlock } from '../components/CodeBlock';

// Constants
export const FORGE_QUERY_COLOR = '#eb2f96';

export const FORGE_QUERY_NAV_ITEMS = [
  { path: '', label: 'Overview', exact: true },
  { path: 'installation', label: 'Installation' },
  { path: 'quick-start', label: 'Quick Start' },
  { path: 'queries', label: 'Queries' },
  { path: 'infinite', label: 'Infinite Queries' },
  { path: 'mutations', label: 'Mutations' },
  { path: 'caching', label: 'Caching' },
  { path: 'devtools', label: 'DevTools' },
  { path: 'typescript', label: 'TypeScript' },
  { path: 'api', label: 'API Reference' },
];

// Forge Query Icon - Snake forming Q
export const ForgeQueryIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.38l2.08 2.08 1.41-1.41-2.08-2.08C19.5 17.58 20 15.85 20 14c0-5.52-4.48-10-8-10z"
      fill={FORGE_QUERY_COLOR}
      opacity="0.2"
    />
    <path
      d="M12 4c4.41 0 8 3.59 8 8 0 1.48-.4 2.87-1.11 4.06l-1.46-1.46C17.79 13.77 18 12.91 18 12c0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6c.91 0 1.77-.21 2.54-.57l1.46 1.46C14.87 19.6 13.48 20 12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8z"
      fill={FORGE_QUERY_COLOR}
    />
    <circle cx="12" cy="12" r="3" fill={FORGE_QUERY_COLOR} />
    <path
      d="M19 19l3 3M17.5 14.5c.5-.5 1.5-.5 2.5.5s1 2 .5 2.5"
      stroke={FORGE_QUERY_COLOR}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Navigation component
export const ForgeQueryDocsNav: FC = () => {
  const location = useLocation();
  
  return (
    <nav className="sticky top-20 w-56 shrink-0 hidden xl:block">
      <div className="flex items-center gap-2 px-3 mb-4">
        <ForgeQueryIcon size={28} />
        <span className="font-semibold" style={{ color: FORGE_QUERY_COLOR }}>Query</span>
        <span 
          className="text-xs px-2 py-0.5 rounded"
          style={{ backgroundColor: `${FORGE_QUERY_COLOR}20`, color: FORGE_QUERY_COLOR }}
        >
          v1.0.2
        </span>
      </div>

      <div className="space-y-1">
        {FORGE_QUERY_NAV_ITEMS.map((item) => {
          const path = `/query${item.path ? `/${item.path}` : ''}`;
          const isActive = item.exact 
            ? location.pathname === '/query' || location.pathname === '/query/'
            : location.pathname === path;
            
          return (
            <NavLink
              key={item.path || 'overview'}
              to={path}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive 
                  ? 'font-medium'
                  : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-hover'
              }`}
              style={isActive ? { backgroundColor: `${FORGE_QUERY_COLOR}20`, color: FORGE_QUERY_COLOR } : undefined}
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

// Layout wrapper
export const ForgeQueryDocsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 px-4 sm:px-6 py-4 sm:py-8 max-w-7xl mx-auto">
      <MobileDocsNav
        items={FORGE_QUERY_NAV_ITEMS}
        basePath="/query"
        color={FORGE_QUERY_COLOR}
        title="Query"
        icon={<ForgeQueryIcon size={20} />}
      />
      
      <ForgeQueryDocsNav />
      
      <div className="flex-1 min-w-0 max-w-4xl">
        {children}
      </div>
    </div>
  );
};

// Code examples
const INSTALL_CODE = `# npm
npm install @forgedevstack/forge-query

# yarn
yarn add @forgedevstack/forge-query

# pnpm
pnpm add @forgedevstack/forge-query

# Optional — only needed for in-app DevTools
npm install @forgedevstack/bear`;

const INFINITE_QUERY_CODE = `import { useInfiniteQuery } from '@forgedevstack/forge-query';

function ProjectList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['projects'],
    initialPageParam: 0,
    queryFn: ({ pageParam }) =>
      fetch(\`/api/projects?cursor=\${pageParam}\`).then((r) => r.json()),
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
  });

  return (
    <div>
      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.items.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      ))}
      <button
        disabled={!hasNextPage || isFetchingNextPage}
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? 'Loading…' : 'Load more'}
      </button>
    </div>
  );
}`;

const PERSIST_CODE = `import {
  QueryClient,
  persistQueryClient,
  createLocalStoragePersister,
} from '@forgedevstack/forge-query';

const queryClient = new QueryClient();

const persistence = persistQueryClient(queryClient, {
  storage: createLocalStoragePersister(),
  persistKey: 'my-app-query-cache',
  buster: 'v1',
  maxAge: 24 * 60 * 60 * 1000,
});

await persistence.restore();
// Limits: JSON-serializable data only; no encryption; not an offline mutation queue.`;

const QUICK_START_CODE = `import { useQuery, QueryClient, QueryClientProvider } from '@forgedevstack/forge-query';

// Create a client
const queryClient = new QueryClient();

// Wrap your app
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

// Use in components
function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => fetch('/api/users').then(res => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`;

const QUERY_OPTIONS_CODE = `useQuery({
  queryKey: ['user', userId],
  queryFn: async ({ queryKey, signal }) => {
    const [, id] = queryKey;
    const response = await fetch(\`/api/users/\${id}\`, { signal });
    return response.json();
  },
  
  // Cache configuration
  staleTime: 5 * 60 * 1000,    // Fresh for 5 minutes
  cacheTime: 10 * 60 * 1000,   // Cache for 10 minutes
  
  // Retry configuration
  retry: 3,
  retryDelay: 1000,
  
  // Refetch triggers
  refetchOnWindowFocus: true,
  refetchOnReconnect: true,
  refetchInterval: 30000, // Poll every 30 seconds
  
  // Callbacks
  onSuccess: (data) => console.log('Fetched!', data),
  onError: (error) => console.error('Failed!', error),
});`;

const MUTATION_CODE = `import { useMutation, useQueryClient } from '@forgedevstack/forge-query';

function CreateUser() {
  const queryClient = useQueryClient();
  
  const { mutate, isLoading, error } = useMutation({
    mutationFn: (newUser) => fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(newUser),
    }).then(res => res.json()),
    
    onSuccess: () => {
      // Invalidate and refetch users list
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      mutate({ name: 'John', email: 'john@example.com' });
    }}>
      <button type="submit" disabled={isLoading}>
        Create User
      </button>
      {error && <div>Error: {error.message}</div>}
    </form>
  );
}`;

const DEVTOOLS_CODE = `import { ForgeQueryDevTools } from '@forgedevstack/forge-query/devtools';

function App() {
  return (
    <>
      <MyApp />
      {/* DevTools button appears in bottom-right corner */}
      <ForgeQueryDevTools position="bottom-right" />
    </>
  );
}`;

const CACHE_CODE = `import {
  QueryClient,
  persistQueryClient,
  createLocalStoragePersister,
} from '@forgedevstack/forge-query';

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: 0,
    cacheTime: 5 * 60 * 1000,
    retry: 3,
  },
  cache: {
    maxEntries: 1000,
    persist: true,
    persistKey: 'my-app-cache',
  },
  devtools: {
    enabled: true,
    maxLogs: 100,
  },
});

queryClient.setQueryData(['user', 1], { id: 1, name: 'John' });
queryClient.getQueryData(['user', 1]);
await queryClient.ensureQueryData({
  queryKey: ['user', 1],
  queryFn: () => fetch('/api/users/1').then((r) => r.json()),
});
await queryClient.prefetchQuery({
  queryKey: ['users'],
  queryFn: () => fetch('/api/users').then((r) => r.json()),
});
queryClient.invalidateQueries({ queryKey: ['users'] });

const persistence = persistQueryClient(queryClient, {
  storage: createLocalStoragePersister(),
  buster: 'v1',
});
await persistence.restore();`;

const API_HOOKS_CODE = `// useQuery - Fetch and cache data
const { data, isLoading, error, refetch, isFetching } = useQuery({
  queryKey: ['key'],
  queryFn: fetchFn,
  enabled: true,
  staleTime: 0,
  cacheTime: 5 * 60 * 1000,
});

// useInfiniteQuery - Paginated / infinite scroll
const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
} = useInfiniteQuery({
  queryKey: ['feed'],
  initialPageParam: 0,
  queryFn: ({ pageParam }) => fetchPage(pageParam),
  getNextPageParam: (last) => last.nextCursor ?? undefined,
});

// useMutation - Modify data
const { mutate, mutateAsync, isLoading, error, reset } = useMutation({
  mutationFn: updateFn,
  onMutate: (variables) => {},
  onSuccess: (data) => {},
  onError: (error) => {},
  onSettled: () => {},
});

// useQueryClient - Access the query client
const queryClient = useQueryClient();
queryClient.invalidateQueries(['users']);
queryClient.setQueryData(['user', 1], newData);
await queryClient.ensureQueryData({ queryKey: ['users'], queryFn: fetchUsers });
await queryClient.prefetchQuery({ queryKey: ['users'], queryFn: fetchUsers });

// useIsFetching - Check if any queries are fetching
const isFetching = useIsFetching();
const isUsersFetching = useIsFetching(['users']);`;

// Content component
export const ForgeQueryDocContent: FC<{ page: string }> = ({ page }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {page === 'overview' && (
        <section>
          <h1 className="text-4xl font-bold text-theme-primary mb-4 flex items-center gap-3">
            <ForgeQueryIcon size={48} />
            Forge Query
          </h1>
          <p className="text-lg text-theme-secondary mb-6">
            Powerful data fetching and caching library for React with DevTools support.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Smart Caching', value: 'LRU' },
              { label: 'Bundle Size', value: '< 3KB' },
              { label: 'React', value: '16.8+' },
              { label: 'TypeScript', value: 'First Class' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-lg bg-theme-card border border-theme">
                <div className="text-xl font-bold" style={{ color: FORGE_QUERY_COLOR }}>{stat.value}</div>
                <div className="text-sm text-theme-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold text-theme-primary mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Automatic Caching', desc: 'Smart LRU caching with configurable eviction policies' },
              { title: 'Infinite Queries', desc: 'useInfiniteQuery with page accumulation and fetchNextPage' },
              { title: 'Prefetch & Ensure', desc: 'prefetchQuery, ensureQueryData, and batch prefetchQueries' },
              { title: 'Cache Persistence', desc: 'Optional localStorage restore MVP (JSON-serializable only)' },
              { title: 'Background Refetching', desc: 'Keep data fresh without blocking the UI' },
              { title: 'Optimistic Updates', desc: 'Update the UI before server response' },
              { title: 'DevTools Extension', desc: 'Inspect queries, cache, and logs — Bear is optional peer' },
              { title: 'TypeScript First', desc: 'Full type inference for data, errors, and variables' },
            ].map((feature) => (
              <div key={feature.title} className="p-4 rounded-lg bg-theme-card border border-theme">
                <div className="font-semibold text-theme-primary">{feature.title}</div>
                <div className="text-sm text-theme-secondary">{feature.desc}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {page === 'installation' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Installation</h1>
          <p className="text-theme-secondary mb-6">
            Install Forge Query using your preferred package manager.
          </p>
          <CodeBlock code={INSTALL_CODE} language="bash" />
        </section>
      )}

      {page === 'quick-start' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Quick Start</h1>
          <p className="text-theme-secondary mb-6">
            Get up and running with Forge Query in minutes.
          </p>
          <CodeBlock code={QUICK_START_CODE} language="tsx" />
        </section>
      )}

      {page === 'queries' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Queries</h1>
          <p className="text-theme-secondary mb-6">
            The <code className="text-pink-500 dark:text-pink-400">useQuery</code> hook is the main way to fetch data.
            It handles loading states, caching, retries, and refetching automatically.
          </p>
          <CodeBlock code={QUERY_OPTIONS_CODE} language="tsx" />
        </section>
      )}

      {page === 'infinite' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Infinite Queries</h1>
          <p className="text-theme-secondary mb-6">
            Use <code className="text-pink-500 dark:text-pink-400">useInfiniteQuery</code> for cursor/page-based lists.
            Pages accumulate as <code className="text-pink-500 dark:text-pink-400">{`{ pages, pageParams }`}</code>.
          </p>
          <CodeBlock code={INFINITE_QUERY_CODE} language="tsx" />
        </section>
      )}

      {page === 'mutations' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Mutations</h1>
          <p className="text-theme-secondary mb-6">
            Use <code className="text-pink-500 dark:text-pink-400">useMutation</code> for create, update, and delete operations.
          </p>
          <CodeBlock code={MUTATION_CODE} language="tsx" />
        </section>
      )}

      {page === 'caching' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Caching</h1>
          <p className="text-theme-secondary mb-6">
            Configure cache behavior globally or per-query. Supports LRU eviction, persistence MVP, prefetch, and manual cache operations.
          </p>
          <CodeBlock code={CACHE_CODE} language="tsx" />
          <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">Persistence limits</h2>
          <CodeBlock code={PERSIST_CODE} language="tsx" />
        </section>
      )}

      {page === 'devtools' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">DevTools</h1>
          <p className="text-theme-secondary mb-6">
            Forge Query includes powerful DevTools for inspecting queries, cache, and logs. 
            Available as an in-app panel or browser extension.
          </p>
          
          <h2 className="text-2xl font-bold text-theme-primary mt-8 mb-4">In-App DevTools</h2>
          <p className="text-theme-secondary mb-4">
            Add the DevTools component to your app for a floating panel with query inspector.
          </p>
          <CodeBlock code={DEVTOOLS_CODE} language="tsx" />
          
          <h3 className="text-xl font-bold text-theme-primary mt-6 mb-3">Configuration</h3>
          <CodeBlock 
            code={`<ForgeQueryDevTools
  position="bottom-right"    // Panel button position
  initialOpen={false}        // Start open or closed
  enabled={true}             // Enable/disable
  showInProduction={false}   // Show in production builds
/>`} 
            language="tsx" 
          />
          
          <h3 className="text-xl font-bold text-theme-primary mt-6 mb-3">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-theme-card border border-theme">
              <div className="font-semibold mb-2" style={{ color: FORGE_QUERY_COLOR }}>Queries Tab</div>
              <ul className="text-sm text-theme-secondary space-y-1">
                <li>• View all active queries</li>
                <li>• See status, data, errors</li>
                <li>• Refetch or invalidate</li>
                <li>• Search by query key</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-theme-card border border-theme">
              <div className="font-semibold mb-2" style={{ color: FORGE_QUERY_COLOR }}>Logs Tab</div>
              <ul className="text-sm text-theme-secondary space-y-1">
                <li>• Real-time activity log</li>
                <li>• Fetch, success, error events</li>
                <li>• Cache hits/misses</li>
                <li>• Timestamps for each event</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-theme-card border border-theme">
              <div className="font-semibold mb-2" style={{ color: FORGE_QUERY_COLOR }}>Cache Tab</div>
              <ul className="text-sm text-theme-secondary space-y-1">
                <li>• Cache statistics</li>
                <li>• Hit/miss ratios</li>
                <li>• Preview cached data</li>
                <li>• Memory usage</li>
              </ul>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-theme-primary mt-10 mb-4">Browser Extension</h2>
          <p className="text-theme-secondary mb-4">
            Install the Forge Query DevTools extension for a dedicated DevTools panel in Chrome.
            No code changes required!
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <a 
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: FORGE_QUERY_COLOR }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 19.2c-3.96 0-7.2-3.24-7.2-7.2S8.04 4.8 12 4.8s7.2 3.24 7.2 7.2-3.24 7.2-7.2 7.2z"/>
              </svg>
              Chrome Extension (Coming Soon)
            </a>
            <a 
              href="https://github.com/forgedevstack/forge-query/tree/main/devtools-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium border border-theme text-theme-primary hover:bg-theme-hover transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              Build from Source
            </a>
          </div>
          
          <h3 className="text-xl font-bold text-theme-primary mt-6 mb-3">Manual Installation</h3>
          <CodeBlock 
            code={`# Clone the repository
git clone https://github.com/forgedevstack/forge-query.git
cd forge-query/devtools-extension

# Install dependencies
npm install

# Build the extension
npm run build

# Load in Chrome:
# 1. Go to chrome://extensions
# 2. Enable "Developer mode"
# 3. Click "Load unpacked"
# 4. Select the devtools-extension folder`} 
            language="bash" 
          />
          
          <h3 className="text-xl font-bold text-theme-primary mt-8 mb-3">Privacy</h3>
          <div className="p-4 rounded-lg bg-green-900/20 border border-green-800 mb-4">
            <p className="text-green-400 font-medium mb-2">Your data stays on your machine</p>
            <ul className="text-sm text-green-300 space-y-1">
              <li>• No data is transmitted to external servers</li>
              <li>• Only inspects the current tab's query state</li>
              <li>• All data is cleared when DevTools closes</li>
            </ul>
          </div>
          <p className="text-theme-secondary">
            Read our full{' '}
            <a 
              href="/privacy/forge-query-devtools" 
              className="font-medium hover:underline"
              style={{ color: FORGE_QUERY_COLOR }}
            >
              Privacy Policy for the DevTools Extension
            </a>
          </p>
        </section>
      )}

      {page === 'typescript' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">TypeScript</h1>
          <p className="text-theme-secondary mb-6">
            Forge Query is written in TypeScript and provides full type inference
            for query data, errors, and variables.
          </p>
          <CodeBlock 
            code={`interface User {
  id: number;
  name: string;
  email: string;
}

// Data is automatically typed as User[]
const { data } = useQuery<User[]>({
  queryKey: ['users'],
  queryFn: fetchUsers,
});

// Type-safe mutations
const { mutate } = useMutation<User, Error, Partial<User>>({
  mutationFn: updateUser,
});`} 
            language="tsx" 
          />
        </section>
      )}

      {page === 'api' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">API Reference</h1>
          <p className="text-theme-secondary mb-6">
            Complete API reference for all Forge Query hooks and utilities.
          </p>
          <CodeBlock code={API_HOOKS_CODE} language="tsx" />
        </section>
      )}
    </div>
  );
};

export default ForgeQueryDocContent;
