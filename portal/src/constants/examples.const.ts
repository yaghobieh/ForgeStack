// Code examples for carousel - organized by package

export interface CodeExample {
  id: string;
  package: string;
  packageName: string;
  title: string;
  description: string;
  filename: string;
  code: string;
  color: string;
}

export const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'harbor-server',
    package: '@forgedevstack/harbor',
    packageName: 'Harbor',
    title: 'Zero-Config Server',
    description: 'Create a production-ready server in seconds',
    filename: 'server.ts',
    code: `import { createServer, router, route } from '@forgedevstack/harbor';

const server = createServer({ port: 3000 });

const users = router('/api/users', [
  route.get('/', async () => ({ users: [] })),
  route.post('/', async (req) => ({ id: '123', ...req.body })),
  route.delete('/:id', async (req) => ({ deleted: req.params.id })),
]);

server.use(users);
server.listen(3000, () => console.log('Server running!'));`,
    color: '#1890ff',
  },
  {
    id: 'harbor-odm',
    package: '@forgedevstack/harbor',
    packageName: 'Harbor',
    title: 'MongoDB ODM',
    description: 'Mongoose replacement with full type safety',
    filename: 'models/user.ts',
    code: `import { Schema, model, connect } from '@forgedevstack/harbor/database';

await connect('mongodb://localhost:27017/myapp');

const UserSchema = new Schema({
  email: { type: 'string', required: true, unique: true },
  name: { type: 'string', required: true },
  role: { type: 'string', enum: ['user', 'admin'] },
});

const User = model('User', UserSchema);
const admins = await User.find({ role: 'admin' });`,
    color: '#1890ff',
  },
  {
    id: 'harbor-auth',
    package: '@forgedevstack/harbor',
    packageName: 'Harbor',
    title: 'JWT Authentication',
    description: 'Built-in JWT auth with RBAC',
    filename: 'auth/middleware.ts',
    code: `import { JWT, jwtAuth, requireRole } from '@forgedevstack/harbor';

const jwt = new JWT({ secret: process.env.JWT_SECRET! });

// Generate token
const token = jwt.sign({ userId: '123', role: 'admin' });

// Protect routes
app.use('/api', jwtAuth(jwt));
app.get('/api/admin', requireRole('admin'), adminHandler);`,
    color: '#1890ff',
  },
  {
    id: 'harbor-ratelimit',
    package: '@forgedevstack/harbor',
    packageName: 'Harbor',
    title: 'Rate Limiting',
    description: 'Protect APIs with rate limiting',
    filename: 'middleware/rateLimit.ts',
    code: `import { rateLimit } from '@forgedevstack/harbor';

// 100 requests per 15 minutes
app.use(rateLimit({ max: 100, windowMs: 15 * 60 * 1000 }));

// Strict limit for login
app.post('/login', rateLimit({ max: 5, windowMs: 60000 }), login);`,
    color: '#1890ff',
  },
  {
    id: 'harbor-websocket',
    package: '@forgedevstack/harbor',
    packageName: 'Harbor',
    title: 'WebSocket',
    description: 'Real-time with rooms and broadcasting',
    filename: 'ws/chat.ts',
    code: `import { createWebSocketServer } from '@forgedevstack/harbor';

const wss = createWebSocketServer({
  onConnection: (client) => wss.join(client, 'lobby'),
  onMessage: (client, data) => {
    wss.broadcastToRoom('lobby', { user: client.id, ...data });
  },
});

wss.attach(server.server);`,
    color: '#1890ff',
  },
  {
    id: 'harbor-scheduler',
    package: '@forgedevstack/harbor',
    packageName: 'Harbor',
    title: 'Job Scheduler',
    description: 'Cron-like task scheduling',
    filename: 'jobs/cleanup.ts',
    code: `import { createScheduler } from '@forgedevstack/harbor';

const scheduler = createScheduler();

// Daily at midnight
scheduler.cron('cleanup', '0 0 * * *', async () => {
  await db.logs.deleteMany({ age: { $gt: 30 } });
});

// Every 5 minutes
scheduler.every('5m', 'health', async () => {
  await checkServices();
});

scheduler.start();`,
    color: '#1890ff',
  },
  {
    id: 'harbor-cache',
    package: '@forgedevstack/harbor',
    packageName: 'Harbor',
    title: 'Caching',
    description: 'Memory & Redis caching layer',
    filename: 'cache/products.ts',
    code: `import { cache, cacheResponse } from '@forgedevstack/harbor';

// Manual caching
const products = await cache.getOrSet('products', async () => {
  return await db.products.find();
}, 60000); // 1 minute TTL

// Middleware caching
app.get('/api/products', cacheResponse({ ttl: 60000 }), handler);`,
    color: '#1890ff',
  },
  {
    id: 'harbor-metrics',
    package: '@forgedevstack/harbor',
    packageName: 'Harbor',
    title: 'Prometheus Metrics',
    description: 'Built-in metrics endpoint',
    filename: 'metrics/setup.ts',
    code: `import { metricsMiddleware, metricsEndpoint, healthCheck } from '@forgedevstack/harbor';

// Collect HTTP metrics automatically
app.use(metricsMiddleware());

// Prometheus scrape endpoint
app.get('/metrics', metricsEndpoint());

// Health check with DB status
app.get('/health', healthCheck({ checks: [mongoHealthCheck(db)] }));`,
    color: '#1890ff',
  },
  {
    id: 'compass-routes',
    package: '@forgedevstack/forge-compass',
    packageName: 'Compass',
    title: 'Type-Safe Routes',
    description: 'React router with guards and validation',
    filename: 'routes.tsx',
    code: `import { createRouter, route } from '@forgedevstack/forge-compass';

const router = createRouter([
  route('/', HomePage),
  route('/users/:id', UserPage, {
    params: { id: 'number' },
    guard: isAuthenticated,
  }),
  route('/admin/*', AdminLayout, {
    guard: hasRole('admin'),
    children: [
      route('dashboard', Dashboard),
      route('settings', Settings),
    ],
  }),
]);`,
    color: '#13c2c2',
  },
  {
    id: 'synapse-store',
    package: '@forgedevstack/synapse',
    packageName: 'Synapse',
    title: 'State Management',
    description: 'Redux-like state with zero boilerplate',
    filename: 'store/counter.ts',
    code: `import { createStore, action } from '@forgedevstack/synapse';

const counterStore = createStore({
  count: 0,
  
  increment: action((state) => {
    state.count += 1;
  }),
  
  decrement: action((state) => {
    state.count -= 1;
  }),
});

// In component: const { count } = useStore(counterStore);`,
    color: '#722ed1',
  },
];

export const CAROUSEL_AUTO_INTERVAL = 6000;
