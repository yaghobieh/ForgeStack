import { FC } from 'react';
import { CodeBlock } from '../CodeBlock';

interface DocContentProps {
  page: string;
}

interface DocPage {
  title: string;
  content: string;
  code?: string;
  language?: string;
}

const DOCS: Record<string, DocPage> = {
  'quick-start': {
    title: 'Quick Start',
    content: `Get up and running with @forgestack/harbor in minutes.`,
    code: `import { createServer, router, GET, POST } from '@forgestack/harbor';
import { connect, Schema, model } from '@forgestack/harbor/database';

// Connect to MongoDB
await connect('mongodb://localhost:27017/myapp');

// Define a model
const User = model('User', new Schema({
  email: { type: 'string', required: true, unique: true },
  name: { type: 'string', required: true },
}));

// Create server
const server = createServer({ port: 3000 });

// Define routes - no express import needed!
const userRoutes = router('/api/users', [
  GET('/', async () => {
    const users = await User.find();
    return { users };
  }),
  
  GET('/:id', async (req) => {
    const user = await User.findById(req.params.id);
    return { user };
  }),
  
  POST('/', async (req) => {
    const user = await User.create(req.body);
    return { user };
  }, {
    validation: {
      body: {
        email: { type: 'email', required: true },
        name: { type: 'string', required: true, min: 2 },
      },
    },
  }),
]);

server.use(userRoutes);
console.log('Server running at http://localhost:3000');`,
  },

  'installation': {
    title: 'Installation',
    content: `Install @forgestack/harbor using your preferred package manager.`,
    code: `# npm
npm install @forgestack/harbor

# pnpm
pnpm add @forgestack/harbor

# yarn
yarn add @forgestack/harbor`,
    language: 'bash',
  },

  'templates': {
    title: 'Project Templates',
    content: `Use the Harbor CLI to scaffold a complete project with best practices.`,
    code: `# Create a new project
npx @forgestack/harbor create my-app

# Initialize in existing project
npx @forgestack/harbor init

# Initialize with template
npx @forgestack/harbor init --template

# Project structure created:
#
# my-app/
# ├── server.ts           # Entry point
# ├── routes/             # Route definitions
# │   └── index.ts
# ├── controllers/        # Request handlers
# │   └── index.ts
# ├── services/           # Business logic
# │   └── index.ts
# ├── models/             # Database models
# │   └── index.ts
# ├── types/              # TypeScript types
# │   └── index.ts
# ├── utils/              # Utilities
# │   └── index.ts
# ├── constants/          # Configuration
# │   └── index.ts
# ├── package.json
# ├── tsconfig.json
# ├── harbor.config.json
# └── .eslintrc.js`,
    language: 'bash',
  },

  'server': {
    title: 'Creating a Server',
    content: `The createServer function creates a configured Express server with sensible defaults. It supports CORS, body parsing, error handling, and more out of the box.`,
    code: `import { createServer } from '@forgestack/harbor';

// Basic server
const server = createServer({ port: 3000 });

// Full configuration
const server = createServer({
  port: 3000,
  host: 'localhost',
  configPath: './harbor.config.json', // Optional config file
  autoStart: false, // Don't auto-start, use .listen() instead
  
  onReady: (info) => {
    console.log(\`Server ready at http://\${info.host}:\${info.port}\`);
    console.log(\`Uptime: \${info.uptime}ms\`);
  },
  
  onError: (error) => {
    console.error('Server error:', error);
  },
});

// Express-like methods
server.use(middleware);
server.get('/health', (req, res) => res.json({ status: 'ok' }));
server.post('/api/data', (req, res) => res.json(req.body));

// Start listening
server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Or use async start
await server.start();
await server.stop();
await server.restart();`,
  },

  'routes': {
    title: 'Routes',
    content: `Define routes without importing Express directly. Harbor provides helper functions for all HTTP methods with built-in validation, pre/post hooks, and error handling.`,
    code: `import { router, GET, POST, PUT, PATCH, DELETE } from '@forgestack/harbor';

// Create a route group
const userRoutes = router('/api/users', [
  // GET /api/users
  GET('/', async () => {
    return { users: [] };
  }),
  
  // GET /api/users/:id
  GET('/:id', async (req) => {
    return { user: { id: req.params.id } };
  }),
  
  // POST /api/users with validation
  POST('/', async (req) => {
    return { user: req.body };
  }, {
    validation: {
      body: {
        email: { type: 'email', required: true },
        name: { type: 'string', required: true, min: 2 },
        age: { type: 'number', min: 18 },
      },
    },
  }),
  
  // PUT with pre-function (middleware)
  PUT('/:id', async (req) => {
    return { updated: true };
  }, {
    pre: [
      async (req, res, next) => {
        console.log('Before handler');
        next();
      },
    ],
    post: [
      async (req, res, result) => {
        console.log('After handler:', result);
      },
    ],
  }),
  
  // DELETE with timeout
  DELETE('/:id', async (req) => {
    return { deleted: true };
  }, {
    timeout: 5000, // 5 second timeout
  }),
]);

// Use with server
server.use(userRoutes);`,
  },

  'config': {
    title: 'Configuration',
    content: `Harbor uses a harbor.config.json file for configuration. All options are optional with sensible defaults.`,
    code: `{
  "server": {
    "port": 3000,
    "host": "localhost",
    "cors": {
      "enabled": true,
      "origin": "*",
      "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
      "credentials": true
    },
    "bodyParser": {
      "json": true,
      "urlencoded": true,
      "limit": "10mb"
    }
  },
  "routes": {
    "prefix": "/api",
    "timeout": 30000
  },
  "errors": {
    "404": { "message": "Not Found", "json": true },
    "500": { "message": "Server Error", "json": true, "log": true }
  },
  "logger": {
    "enabled": true,
    "level": "info",
    "format": "combined"
  },
  "database": {
    "uri": "mongodb://localhost:27017",
    "name": "myapp"
  }
}`,
    language: 'json',
  },

  'database': {
    title: 'Database (MongoDB ODM)',
    content: `Harbor includes a full MongoDB ODM as a complete Mongoose replacement. It provides Schema, Model, Query with all methods, connection management, hooks, and more.`,
    code: `import { connect, Schema, model, Types } from '@forgestack/harbor/database';

// Connect to MongoDB
await connect('mongodb://localhost:27017/myapp', {
  dbName: 'myapp',
  maxPoolSize: 10,
  retryWrites: true,
});

// Define a schema
const UserSchema = new Schema({
  email: { type: 'string', required: true, unique: true },
  name: { type: 'string', required: true },
  age: { type: 'number', min: 0 },
  role: { type: 'string', enum: ['user', 'admin'], default: 'user' },
  profile: {
    avatar: { type: 'string' },
    bio: { type: 'string', max: 500 },
  },
  tags: [{ type: 'string' }],
  createdAt: { type: 'date', default: () => new Date() },
}, {
  timestamps: true,
  collection: 'users',
});

// Add hooks
UserSchema.pre('save', async function() {
  console.log('Before save:', this);
});

UserSchema.post('find', async function(docs) {
  console.log('Found:', docs.length, 'documents');
});

// Create model
const User = model('User', UserSchema);

// Query examples
const users = await User.find();
const admins = await User.find({ role: 'admin' });
const user = await User.findById('507f1f77bcf86cd799439011');
const one = await User.findOne({ email: 'test@test.com' });

// Create
const newUser = await User.create({
  email: 'john@example.com',
  name: 'John Doe',
});

// Update
await User.updateOne({ _id: id }, { name: 'New Name' });
await User.updateMany({ role: 'user' }, { verified: true });
await User.findByIdAndUpdate(id, { name: 'Updated' });

// Delete
await User.deleteOne({ _id: id });
await User.deleteMany({ inactive: true });

// Aggregation
const stats = await User.aggregate([
  { $match: { role: 'admin' } },
  { $group: { _id: '$role', count: { $sum: 1 } } },
]);`,
  },

  'validation': {
    title: 'Request Validation',
    content: `Built-in validation for request params, query, body, and headers. Validation errors are automatically handled and returned as JSON.`,
    code: `import { router, POST, GET } from '@forgestack/harbor';

const routes = router('/api', [
  // Body validation
  POST('/register', async (req) => {
    // req.body is already validated
    const { email, password, name } = req.body;
    return { success: true };
  }, {
    validation: {
      body: {
        email: { type: 'email', required: true },
        password: { type: 'string', required: true, min: 8, max: 100 },
        name: { type: 'string', required: true, min: 2, max: 50 },
        age: { type: 'number', min: 18, max: 120 },
        website: { type: 'url' },
        role: { type: 'string', enum: ['user', 'admin'] },
      },
    },
  }),
  
  // Query validation
  GET('/search', async (req) => {
    const { q, page, limit } = req.validated.query;
    return { results: [], page, limit };
  }, {
    validation: {
      query: {
        q: { type: 'string', required: true, min: 1 },
        page: { type: 'number', default: 1, min: 1 },
        limit: { type: 'number', default: 10, min: 1, max: 100 },
      },
    },
  }),
  
  // Params validation
  GET('/users/:id', async (req) => {
    const { id } = req.validated.params;
    return { userId: id };
  }, {
    validation: {
      params: {
        id: { type: 'objectId', required: true },
      },
    },
  }),
]);

// Validation types:
// - string: String validation with min/max length
// - number: Number validation with min/max value
// - boolean: Boolean validation
// - email: Email format validation
// - url: URL format validation
// - objectId: MongoDB ObjectId validation
// - array: Array validation
// - object: Nested object validation
// - date: Date validation
// - enum: Enum validation`,
  },

  'websocket': {
    title: 'WebSocket',
    content: `Real-time communication with WebSocket support. Includes rooms, broadcasting, heartbeat, and client tracking.`,
    code: `import { createServer } from '@forgestack/harbor';
import { createWebSocketServer } from '@forgestack/harbor/websocket';

const server = createServer({ port: 3000 });

// Create WebSocket server
const wss = createWebSocketServer(server, {
  path: '/ws',
  heartbeat: {
    enabled: true,
    interval: 30000,
    timeout: 10000,
  },
});

// Handle connections
wss.onConnection((client, context) => {
  console.log('Client connected:', client.id);
  
  // Send to client
  client.send({ type: 'welcome', message: 'Hello!' });
  
  // Join a room
  wss.joinRoom(client.id, 'chat:general');
});

// Handle messages
wss.onMessage('chat:message', async (data, client) => {
  console.log('Message from', client.id, ':', data);
  
  // Broadcast to room
  wss.broadcastToRoom('chat:general', {
    type: 'chat:message',
    from: client.id,
    message: data.message,
  });
});

// Handle disconnection
wss.onDisconnect((client) => {
  console.log('Client disconnected:', client.id);
});

// Broadcast to all clients
wss.broadcast({ type: 'announcement', message: 'Server update!' });

// Get connected clients
const clients = wss.getClients();
const roomClients = wss.getRoomClients('chat:general');`,
  },

  'scheduler': {
    title: 'Job Scheduler',
    content: `Cron-like job scheduling for background tasks. Supports cron expressions, intervals, and one-time schedules.`,
    code: `import { createScheduler } from '@forgestack/harbor/scheduler';

const scheduler = createScheduler();

// Cron expression (every day at midnight)
scheduler.cron('cleanup', '0 0 * * *', async () => {
  console.log('Running daily cleanup...');
  await cleanupOldRecords();
});

// Interval scheduling
scheduler.every('healthCheck', '5m', async () => {
  console.log('Running health check...');
  await checkServices();
});

// One-time schedule
scheduler.at('reminder', new Date('2026-02-01'), async () => {
  console.log('Sending reminder...');
  await sendReminder();
});

// With options
scheduler.cron('backup', '0 2 * * *', async () => {
  await performBackup();
}, {
  timezone: 'America/New_York',
  runOnInit: false,
  retries: 3,
  retryDelay: 5000,
  onError: (error) => {
    console.error('Backup failed:', error);
  },
});

// Control jobs
scheduler.pause('backup');
scheduler.resume('backup');
scheduler.cancel('backup');

// Get job status
const status = scheduler.getStatus('backup');
console.log(status); // { running: true, lastRun: Date, nextRun: Date }

// List all jobs
const jobs = scheduler.listJobs();`,
  },

  'rate-limit': {
    title: 'Rate Limiting',
    content: `Protect your API with rate limiting. Supports memory and Redis stores for distributed systems.`,
    code: `import { createServer, router, GET } from '@forgestack/harbor';
import { rateLimit } from '@forgestack/harbor/middleware';

const server = createServer({ port: 3000 });

// Apply global rate limit
server.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window
  message: 'Too many requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
}));

// Per-route rate limiting
const authRoutes = router('/api/auth', [
  GET('/login', async (req) => {
    return { success: true };
  }),
], {
  middleware: [
    rateLimit({
      windowMs: 60 * 1000, // 1 minute
      max: 5, // 5 attempts per minute
      keyGenerator: (req) => req.ip + ':login',
      skip: (req) => req.headers['x-admin-key'] === process.env.ADMIN_KEY,
    }),
  ],
});

// Redis store for distributed rate limiting
import { RedisRateLimitStore } from '@forgestack/harbor/middleware';

server.use(rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  store: new RedisRateLimitStore({
    redis: redisClient,
    prefix: 'rl:',
  }),
}));`,
  },

  'health': {
    title: 'Health Checks',
    content: `Built-in health check endpoint with database, Redis, memory, and disk checks. Perfect for Kubernetes and load balancers.`,
    code: `import { createServer } from '@forgestack/harbor';
import { healthCheck } from '@forgestack/harbor/middleware';

const server = createServer({ port: 3000 });

// Basic health check
server.use(healthCheck({
  path: '/health',
}));
// Returns: { status: 'ok', timestamp: '2026-01-14T...' }

// With custom checks
server.use(healthCheck({
  path: '/health',
  checks: [
    // MongoDB check
    {
      name: 'mongodb',
      check: async () => {
        await mongoose.connection.db.admin().ping();
        return { healthy: true };
      },
      critical: true, // Fail health check if this fails
    },
    
    // Redis check
    {
      name: 'redis',
      check: async () => {
        const pong = await redis.ping();
        return { healthy: pong === 'PONG' };
      },
      critical: false,
    },
    
    // Memory check
    {
      name: 'memory',
      check: async () => {
        const used = process.memoryUsage();
        const heapUsedMB = used.heapUsed / 1024 / 1024;
        return {
          healthy: heapUsedMB < 500, // Under 500MB
          details: { heapUsedMB: Math.round(heapUsedMB) },
        };
      },
    },
    
    // Disk check
    {
      name: 'disk',
      check: async () => {
        const disk = await checkDiskSpace('/');
        return {
          healthy: disk.free > 1024 * 1024 * 1024, // 1GB free
          details: { freeGB: Math.round(disk.free / 1024 / 1024 / 1024) },
        };
      },
    },
  ],
}));

// Response example:
// {
//   status: 'healthy',
//   timestamp: '2026-01-14T10:00:00.000Z',
//   checks: {
//     mongodb: { healthy: true, latency: 5 },
//     redis: { healthy: true, latency: 2 },
//     memory: { healthy: true, details: { heapUsedMB: 120 } },
//     disk: { healthy: true, details: { freeGB: 50 } }
//   }
// }`,
  },

  'metrics': {
    title: 'Prometheus Metrics',
    content: `Prometheus-compatible metrics endpoint for monitoring. Automatically tracks request duration, count, and size.`,
    code: `import { createServer } from '@forgestack/harbor';
import { metrics } from '@forgestack/harbor/middleware';

const server = createServer({ port: 3000 });

// Enable metrics collection
server.use(metrics({
  path: '/metrics',
  prefix: 'harbor_',
  defaultLabels: {
    app: 'my-api',
    env: process.env.NODE_ENV,
  },
}));

// Auto-collected metrics:
// - harbor_http_requests_total (counter)
// - harbor_http_request_duration_seconds (histogram)
// - harbor_http_request_size_bytes (histogram)
// - harbor_http_response_size_bytes (histogram)
// - harbor_active_connections (gauge)

// Custom metrics
import { Counter, Gauge, Histogram } from '@forgestack/harbor/middleware';

const ordersCounter = new Counter({
  name: 'orders_total',
  help: 'Total number of orders',
  labelNames: ['status'],
});

const activeUsers = new Gauge({
  name: 'active_users',
  help: 'Number of active users',
});

const responseTime = new Histogram({
  name: 'response_time_seconds',
  help: 'Response time in seconds',
  buckets: [0.1, 0.5, 1, 2, 5],
});

// Use in routes
ordersCounter.inc({ status: 'completed' });
activeUsers.set(150);
responseTime.observe(0.25);`,
  },

  'upload': {
    title: 'File Uploads',
    content: `Handle file uploads with disk or memory storage. Supports file type validation, size limits, and custom filenames.`,
    code: `import { createServer, router, POST } from '@forgestack/harbor';
import { upload } from '@forgestack/harbor/middleware';

const server = createServer({ port: 3000 });

// Disk storage
const diskUpload = upload({
  storage: 'disk',
  destination: './uploads',
  filename: (req, file) => {
    const ext = file.originalname.split('.').pop();
    return \`\${Date.now()}-\${Math.random().toString(36).slice(2)}.\${ext}\`;
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 5, // Max 5 files
  },
  fileFilter: (req, file) => {
    const allowed = ['image/jpeg', 'image/png', 'image/gif'];
    return allowed.includes(file.mimetype);
  },
});

// Memory storage (for processing)
const memoryUpload = upload({
  storage: 'memory',
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB
});

// Single file upload
const routes = router('/api', [
  POST('/upload', async (req) => {
    const file = req.file;
    return {
      filename: file.filename,
      size: file.size,
      mimetype: file.mimetype,
      path: file.path,
    };
  }),
], {
  middleware: [diskUpload.single('file')],
});

// Multiple files
const multiRoutes = router('/api', [
  POST('/upload-multiple', async (req) => {
    const files = req.files;
    return { files: files.map(f => f.filename) };
  }),
], {
  middleware: [diskUpload.array('files', 5)],
});

// Multiple fields
const fieldsRoutes = router('/api', [
  POST('/upload-fields', async (req) => {
    return {
      avatar: req.files.avatar[0].filename,
      documents: req.files.documents.map(f => f.filename),
    };
  }),
], {
  middleware: [
    diskUpload.fields([
      { name: 'avatar', maxCount: 1 },
      { name: 'documents', maxCount: 10 },
    ]),
  ],
});`,
  },

  'cache': {
    title: 'Caching',
    content: `Memory and Redis caching for improved performance. Includes middleware for response caching and a CacheManager for custom caching.`,
    code: `import { createServer, router, GET } from '@forgestack/harbor';
import { cache, createCacheManager, MemoryCacheStore, RedisCacheStore } from '@forgestack/harbor/cache';

// Memory cache (default)
const memoryCache = createCacheManager();

// Redis cache
const redisCache = createCacheManager({
  store: new RedisCacheStore({
    redis: redisClient,
    prefix: 'cache:',
  }),
});

// Manual caching
await memoryCache.set('key', { data: 'value' }, { ttl: 3600 }); // 1 hour
const value = await memoryCache.get('key');
await memoryCache.delete('key');
await memoryCache.clear();

// Response caching middleware
const server = createServer({ port: 3000 });

const routes = router('/api', [
  GET('/products', async () => {
    // Expensive database query
    const products = await Product.find();
    return { products };
  }),
], {
  middleware: [
    cache({
      ttl: 300, // 5 minutes
      key: (req) => \`products:\${req.query.category || 'all'}\`,
      condition: (req, res) => res.statusCode === 200,
    }),
  ],
});

// Cache decorator pattern
async function getUser(id: string) {
  const cached = await memoryCache.get(\`user:\${id}\`);
  if (cached) return cached;
  
  const user = await User.findById(id);
  await memoryCache.set(\`user:\${id}\`, user, { ttl: 600 });
  return user;
}

// Cache with tags for invalidation
await memoryCache.set('product:1', product, { 
  ttl: 3600,
  tags: ['products', 'category:electronics'],
});
await memoryCache.invalidateTag('products'); // Invalidate all products`,
  },

  'auth': {
    title: 'Authentication',
    content: `Complete authentication system with JWT, API Keys, RBAC, and request signing.`,
    code: `import { createServer, router, GET, POST } from '@forgestack/harbor';
import { 
  jwtAuth, createJWT, verifyJWT,
  apiKeyAuth, hasRole, hasPermission,
  requestSignatureAuth, hashPassword, comparePassword
} from '@forgestack/harbor/auth';

const server = createServer({ port: 3000 });

// --- JWT Authentication ---
const jwtMiddleware = jwtAuth({
  secret: process.env.JWT_SECRET!,
  algorithms: ['HS256'],
  expiresIn: '7d',
});

// Create token
const token = createJWT({ userId: '123', role: 'admin' }, process.env.JWT_SECRET!);

// Verify token
const payload = verifyJWT(token, process.env.JWT_SECRET!);

// Protected routes
const protectedRoutes = router('/api/protected', [
  GET('/profile', async (req) => {
    return { user: req.user }; // User from JWT
  }),
], {
  middleware: [jwtMiddleware],
});

// --- API Key Authentication ---
const apiKeyMiddleware = apiKeyAuth({
  header: 'X-API-Key',
  validator: async (key) => {
    const apiKey = await ApiKey.findOne({ key, active: true });
    return apiKey ? { valid: true, user: apiKey.user } : { valid: false };
  },
});

// --- Role-Based Access Control ---
const adminRoutes = router('/api/admin', [
  GET('/dashboard', async () => {
    return { stats: {} };
  }),
], {
  middleware: [
    jwtMiddleware,
    hasRole('admin'), // Requires admin role
  ],
});

const moderatorRoutes = router('/api/moderate', [
  POST('/ban/:userId', async (req) => {
    return { banned: true };
  }),
], {
  middleware: [
    jwtMiddleware,
    hasPermission('users:ban'), // Requires specific permission
  ],
});

// --- Password Hashing ---
const hashedPassword = await hashPassword('mypassword', { rounds: 12 });
const isValid = await comparePassword('mypassword', hashedPassword);

// --- Request Signature Verification ---
const signedRoutes = router('/api/webhooks', [
  POST('/github', async (req) => {
    return { received: true };
  }),
], {
  middleware: [
    requestSignatureAuth({
      secret: process.env.WEBHOOK_SECRET!,
      header: 'X-Hub-Signature-256',
      algorithm: 'sha256',
    }),
  ],
});`,
  },

  'logger': {
    title: 'HTTP Logger',
    content: `Morgan-like HTTP request logger with customizable formats and colors.`,
    code: `import { createServer, httpLogger } from '@forgestack/harbor';

const server = createServer({ port: 3000 });

// Predefined formats
server.use(httpLogger({ format: 'combined' }));
server.use(httpLogger({ format: 'dev' }));    // Colored, concise
server.use(httpLogger({ format: 'short' }));
server.use(httpLogger({ format: 'tiny' }));

// Custom format
server.use(httpLogger({
  format: ':method :url :status :response-time ms',
  colorize: true,
}));

// With options
server.use(httpLogger({
  format: 'combined',
  stream: fs.createWriteStream('./access.log', { flags: 'a' }),
  skip: (req, res) => res.statusCode < 400, // Only log errors
  immediate: false, // Log after response
}));

// Available tokens:
// :method - HTTP method (GET, POST, etc.)
// :url - Request URL
// :status - Response status code
// :response-time - Response time in ms
// :date - Date in various formats
// :referrer - Referrer header
// :user-agent - User agent header
// :remote-addr - Client IP address
// :http-version - HTTP version
// :content-length - Response content length`,
  },

  'docker': {
    title: 'Docker Management',
    content: `Programmatic Docker container and compose management.`,
    code: `import { DockerManager, createDockerManager } from '@forgestack/harbor';

const docker = createDockerManager();

// List containers
const containers = await docker.listContainers();
const running = await docker.listContainers({ all: false });

// Container operations
await docker.startContainer('my-container');
await docker.stopContainer('my-container');
await docker.restartContainer('my-container');
await docker.removeContainer('my-container', { force: true });

// Get container info
const info = await docker.inspectContainer('my-container');
const logs = await docker.getContainerLogs('my-container', { tail: 100 });

// Images
const images = await docker.listImages();
await docker.pullImage('nginx:latest');
await docker.removeImage('old-image:v1');

// Docker Compose
await docker.compose.up({
  file: './docker-compose.yml',
  detached: true,
  build: true,
});

await docker.compose.down({
  file: './docker-compose.yml',
  volumes: true,
});

await docker.compose.logs({
  file: './docker-compose.yml',
  follow: true,
  service: 'api',
});`,
  },

  'i18n': {
    title: 'Internationalization',
    content: `Built-in i18n support for multi-language applications with interpolation and pluralization.`,
    code: `import { t, setLocale, getLocale, registerLocale, addTranslations } from '@forgestack/harbor';

// Register a locale with translations
registerLocale('es', {
  welcome: 'Bienvenido',
  'greeting': 'Hola, {{name}}!',
  'items': {
    one: '{{count}} artículo',
    other: '{{count}} artículos',
  },
  'errors.notFound': 'No encontrado',
  'errors.unauthorized': 'No autorizado',
});

registerLocale('fr', {
  welcome: 'Bienvenue',
  'greeting': 'Bonjour, {{name}}!',
});

// Set current locale
setLocale('es');

// Get current locale
const locale = getLocale(); // 'es'

// Translate
console.log(t('welcome')); // "Bienvenido"
console.log(t('greeting', { name: 'Juan' })); // "Hola, Juan!"

// Pluralization
console.log(t('items', { count: 1 })); // "1 artículo"
console.log(t('items', { count: 5 })); // "5 artículos"

// Nested keys
console.log(t('errors.notFound')); // "No encontrado"

// Add translations dynamically
addTranslations('es', {
  'new.key': 'Nueva traducción',
});

// In Express middleware
app.use((req, res, next) => {
  const lang = req.headers['accept-language']?.split(',')[0] || 'en';
  setLocale(lang);
  next();
});`,
  },
};

export const DocContent: FC<DocContentProps> = ({ page }) => {
  const doc = DOCS[page] || DOCS['quick-start'];

  return (
    <article className="max-w-none">
      <h1 className="text-4xl font-bold text-harbor-500 mb-6">{doc.title}</h1>
      
      <p className="text-lg text-theme-secondary mb-8 leading-relaxed">
        {doc.content}
      </p>
      
      {doc.code && (
        <div className="mt-6">
          <CodeBlock
            code={doc.code}
            filename={`example.${doc.language === 'json' ? 'json' : doc.language === 'bash' ? 'sh' : 'ts'}`}
            language={doc.language || 'typescript'}
          />
        </div>
      )}
    </article>
  );
};
