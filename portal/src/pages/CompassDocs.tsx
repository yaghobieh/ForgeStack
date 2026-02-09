import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MobileDocsNav } from '../components/MobileDocsNav';
import { CodeBlock } from '../components/CodeBlock';

export const COMPASS_COLOR = '#3b82f6';

export const COMPASS_NAV_ITEMS = [
  { path: '', label: 'Overview', exact: true },
  { path: 'installation', label: 'Installation' },
  { path: 'quick-start', label: 'Quick Start' },
  { path: 'routes', label: 'Routes' },
  { path: 'guards', label: 'Guards' },
  { path: 'navigation', label: 'Navigation' },
  { path: 'hooks', label: 'Hooks' },
  { path: 'advanced', label: 'Advanced Features' },
  { path: 'devtools', label: 'DevTools' },
  { path: 'api', label: 'API Reference' },
];

export const CompassIcon: FC<{ size?: number; className?: string }> = ({ size = 24, className }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
    <circle cx="24" cy="24" r="22" fill="none" stroke={COMPASS_COLOR} strokeWidth="2.5"/>
    <circle cx="24" cy="24" r="16" fill="none" stroke={COMPASS_COLOR} strokeWidth="1" opacity="0.3"/>
    <polygon points="24,5 20,24 28,24" fill="#ef4444"/>
    <polygon points="24,43 20,24 28,24" fill="#64748b"/>
    <polygon points="43,24 24,20 24,28" fill="#94a3b8"/>
    <polygon points="5,24 24,20 24,28" fill="#94a3b8"/>
    <circle cx="24" cy="24" r="4" fill="#1e40af"/>
    <circle cx="24" cy="24" r="2" fill="#60a5fa"/>
  </svg>
);

export const CompassDocsNav: FC = () => {
  const location = useLocation();
  
  return (
    <nav className="sticky top-20 w-56 shrink-0 hidden xl:block">
      <div className="flex items-center gap-2 px-3 mb-4">
        <CompassIcon size={28} />
        <span className="font-semibold" style={{ color: COMPASS_COLOR }}>Compass</span>
        <span 
          className="text-xs px-2 py-0.5 rounded"
          style={{ backgroundColor: `${COMPASS_COLOR}20`, color: COMPASS_COLOR }}
        >
          v1.1.0
        </span>
      </div>

      <div className="space-y-1">
        {COMPASS_NAV_ITEMS.map((item) => {
          const path = `/compass${item.path ? `/${item.path}` : ''}`;
          const isActive = item.exact 
            ? location.pathname === '/compass' || location.pathname === '/compass/'
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
              style={isActive ? { backgroundColor: `${COMPASS_COLOR}20`, color: COMPASS_COLOR } : undefined}
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export const CompassDocsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 px-4 sm:px-6 py-4 sm:py-8 max-w-7xl mx-auto">
      <MobileDocsNav
        items={COMPASS_NAV_ITEMS}
        basePath="/compass"
        color={COMPASS_COLOR}
        title="Compass"
        icon={<CompassIcon size={20} />}
      />
      
      <CompassDocsNav />
      
      <div className="flex-1 min-w-0 max-w-4xl">
        {children}
      </div>
    </div>
  );
};

const INSTALL_CODE = `# npm
npm install @forgedevstack/forge-compass

# yarn
yarn add @forgedevstack/forge-compass

# pnpm
pnpm add @forgedevstack/forge-compass`;

const QUICK_START_CODE = `import { CompassProvider, Routes, Link } from '@forgedevstack/forge-compass';
import { authGuard } from '@forgedevstack/forge-compass';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/about', name: 'about', component: AboutPage },
  { 
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardPage,
    guards: [authGuard(() => isLoggedIn, '/login')],
  },
  { path: '*', component: NotFoundPage },
];

function App() {
  return (
    <CompassProvider routes={routes} devTools>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
      <Routes />
    </CompassProvider>
  );
}`;

const GUARDS_CODE = `import { authGuard, roleGuard, permissionGuard, featureGuard } from '@forgedevstack/forge-compass';

// Authentication guard
const isAuthenticated = authGuard(
  () => !!localStorage.getItem('token'),
  '/login'
);

// Role-based guard
const isAdmin = roleGuard(
  ['admin', 'superadmin'],
  () => user.role,
  '/unauthorized'
);

// Permission guard
const canEdit = permissionGuard(
  ['posts:write', 'posts:delete'],
  () => user.permissions,
  '/forbidden'
);

// Feature flag guard
const hasBetaFeature = featureGuard(
  'new-dashboard',
  (name) => features.isEnabled(name)
);

// Use in routes
const routes = [
  {
    path: '/admin',
    component: AdminPanel,
    guards: [isAuthenticated, isAdmin],
  },
];`;

const NAVIGATION_CODE = `import { useNavigate, Link, NavLink } from '@forgedevstack/forge-compass';

// Link component
<Link to="/dashboard">Dashboard</Link>

// NavLink with active styling
<NavLink 
  to="/profile" 
  activeClassName="active"
  exactActiveClassName="exact"
>
  Profile
</NavLink>

// Programmatic navigation
function MyComponent() {
  const { navigate, push, replace, back, forward } = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/dashboard')}>Go to Dashboard</button>
      <button onClick={() => replace('/home')}>Replace with Home</button>
      <button onClick={back}>Go Back</button>
    </>
  );
}`;

const HOOKS_CODE = `// Core hooks
const router = useRouter();           // Access router instance
const route = useRoute();             // Current route context
const { userId } = useParams();       // Route parameters
const { page } = useQuery();          // Query string params
const { navigate } = useNavigate();   // Navigation methods
const breadcrumbs = useBreadcrumbs(); // Breadcrumb trail
const isMatch = useRouteMatch('/users/:id'); // Match pattern

// Advanced hooks
const { block, unblock } = useBlocker();           // Navigation blocking
const [filters, setFilters] = useQueryState({});   // Query state sync
const { prefetch } = usePrefetch();                // Route prefetching
useScrollRestoration('auto');                      // Scroll restoration
const { focusHeading } = useFocus('heading');      // Focus management`;

const ADVANCED_CODE = `// Navigation Blocking (unsaved changes)
const { block, unblock, state } = useBlocker(isDirty, 'Unsaved changes!');

// Query String State
const [filters, setFilters, reset] = useQueryState({
  defaultValue: { page: 1, search: '', sort: 'date' }
});

// Route Prefetching
const { prefetch, prefetchOnHover } = usePrefetch();
<Link to="/heavy-page" {...prefetchOnHover('/heavy-page')}>Heavy Page</Link>

// Route Transitions
<Transition type="fade" duration={200}>
  <Routes />
</Transition>

// Route Groups
const routes = routeGroup({
  guards: [authGuard],
  layout: DashboardLayout,
  children: [
    { path: '/dashboard', component: Dashboard },
    { path: '/settings', component: Settings },
  ],
});

// Error Boundaries
<RouteErrorBoundary fallback={ErrorPage}>
  <Routes />
</RouteErrorBoundary>`;

const DEVTOOLS_CODE = `// Enable via provider
<CompassProvider 
  routes={routes} 
  devTools 
  devToolsPosition="right"
>
  <Routes />
</CompassProvider>

// Or import separately
import { CompassDevTools } from '@forgedevstack/forge-compass/devtools';

<CompassProvider routes={routes}>
  <Routes />
  {process.env.NODE_ENV === 'development' && <CompassDevTools />}
</CompassProvider>`;

const API_CODE = `// Provider props
<CompassProvider
  routes={routes}              // Route configuration
  basePath="/app"              // Base path prefix
  mode="history"               // 'history' | 'hash'
  devTools={true}              // Enable DevTools
  devToolsPosition="right"     // 'left' | 'right'
  showProgress={true}          // Loading progress bar
  progressColor="#3b82f6"      // Progress bar color
  scrollRestoration="auto"     // 'auto' | 'manual' | 'disabled'
  announceRoutes={true}        // Screen reader announcements
  onNavigate={(to, from) => {}}// Navigation callback
/>

// Route configuration
type RouteConfig = {
  path: string;
  name?: string;
  component?: Component;
  element?: ReactNode;
  children?: RouteConfig[];
  guards?: Guard[];
  meta?: { title?: string; ... };
  redirect?: string;
  layout?: Component;
  fallback?: ReactNode;
  errorBoundary?: Component;
};`;

export const CompassDocContent: FC<{ page: string }> = ({ page }) => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      {page === 'overview' && (
        <section>
          <h1 className="text-4xl font-bold text-theme-primary mb-4 flex items-center gap-3">
            <CompassIcon size={48} />
            Forge Compass
          </h1>
          <p className="text-lg text-theme-secondary mb-6">
            Type-safe routing with guards, permissions, and declarative configuration.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Guards', value: '10+' },
              { label: 'Bundle Size', value: '< 5KB' },
              { label: 'React', value: '16.8+' },
              { label: 'TypeScript', value: 'First Class' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-lg bg-theme-card border border-theme">
                <div className="text-xl font-bold" style={{ color: COMPASS_COLOR }}>{stat.value}</div>
                <div className="text-sm text-theme-secondary">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <h2 className="text-2xl font-bold text-theme-primary mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Route Guards', desc: 'Auth, role, permission guards with async support' },
              { title: 'Array-based Config', desc: 'Define routes as simple objects, no JSX nesting' },
              { title: 'Navigation Blocking', desc: 'Prevent navigation with unsaved changes' },
              { title: 'Query State Sync', desc: 'Sync component state with URL query params' },
              { title: 'Scroll Restoration', desc: 'Automatic scroll position management' },
              { title: 'Route Transitions', desc: 'Fade, slide, and custom animations' },
              { title: 'Accessibility', desc: 'Route announcer, focus management' },
              { title: 'DevTools', desc: 'Real-time navigation debugging panel' },
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
            Install Forge Compass using your preferred package manager.
          </p>
          <CodeBlock code={INSTALL_CODE} language="bash" />
        </section>
      )}

      {page === 'quick-start' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Quick Start</h1>
          <p className="text-theme-secondary mb-6">
            Get up and running with Forge Compass in minutes.
          </p>
          <CodeBlock code={QUICK_START_CODE} language="tsx" />
        </section>
      )}

      {page === 'routes' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Route Configuration</h1>
          <p className="text-theme-secondary mb-6">
            Define routes as an array of objects. No JSX nesting required.
          </p>
          <CodeBlock code={`const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: { title: 'Home' },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardLayout,
    guards: [authGuard],
    children: [
      { path: '', component: DashboardHome, index: true },
      { path: 'profile', component: Profile },
      { path: 'settings', component: Settings },
    ],
  },
  {
    path: '/login',
    redirect: '/auth/login', // Redirects
  },
  {
    path: '*',
    component: NotFound, // Catch-all
  },
];`} language="tsx" />
        </section>
      )}

      {page === 'guards' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Guards</h1>
          <p className="text-theme-secondary mb-6">
            Protect routes with built-in guards or create your own.
          </p>
          <CodeBlock code={GUARDS_CODE} language="tsx" />
        </section>
      )}

      {page === 'navigation' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Navigation</h1>
          <p className="text-theme-secondary mb-6">
            Navigate using components or hooks.
          </p>
          <CodeBlock code={NAVIGATION_CODE} language="tsx" />
        </section>
      )}

      {page === 'hooks' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Hooks</h1>
          <p className="text-theme-secondary mb-6">
            Access router state and actions with hooks.
          </p>
          <CodeBlock code={HOOKS_CODE} language="tsx" />
        </section>
      )}

      {page === 'advanced' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">Advanced Features</h1>
          <p className="text-theme-secondary mb-6">
            Power features for complex applications.
          </p>
          <CodeBlock code={ADVANCED_CODE} language="tsx" />
        </section>
      )}

      {page === 'devtools' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">DevTools</h1>
          <p className="text-theme-secondary mb-6">
            Debug navigation in real-time with the DevTools panel.
          </p>
          <CodeBlock code={DEVTOOLS_CODE} language="tsx" />
          
          <h3 className="text-xl font-bold text-theme-primary mt-6 mb-3">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-theme-card border border-theme">
              <div className="font-semibold mb-2" style={{ color: COMPASS_COLOR }}>Routes</div>
              <ul className="text-sm text-theme-secondary space-y-1">
                <li>• View all registered routes</li>
                <li>• Current route context</li>
                <li>• Route parameters</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-theme-card border border-theme">
              <div className="font-semibold mb-2" style={{ color: COMPASS_COLOR }}>Navigation</div>
              <ul className="text-sm text-theme-secondary space-y-1">
                <li>• Navigation history</li>
                <li>• Guard results</li>
                <li>• Redirect tracking</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg bg-theme-card border border-theme">
              <div className="font-semibold mb-2" style={{ color: COMPASS_COLOR }}>Logs</div>
              <ul className="text-sm text-theme-secondary space-y-1">
                <li>• Real-time event log</li>
                <li>• Navigation timing</li>
                <li>• Error tracking</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {page === 'api' && (
        <section>
          <h1 className="text-3xl font-bold text-theme-primary mb-4">API Reference</h1>
          <p className="text-theme-secondary mb-6">
            Complete API reference for Forge Compass.
          </p>
          <CodeBlock code={API_CODE} language="tsx" />
        </section>
      )}
    </div>
  );
};

export default CompassDocContent;

