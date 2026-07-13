import { PlaygroundExample } from './types';

export const PLAYGROUND_EXAMPLES: PlaygroundExample[] = [
  {
    id: 'basic-server',
    title: 'Basic Server',
    description: 'Create a simple HTTP server with routes',
    entryPoint: 'server.ts',
    files: {
      'server.ts': `import { createServer, router, GET, POST } from '@forgedevstack/harbor';

// Create server with minimal config
const server = createServer({ port: 3000, autoStart: false });

// Define routes - no express import needed!
const apiRoutes = router('/api', [
  GET('/', async () => {
    return { message: 'Hello from Harbor! 🚢' };
  }),
  
  GET('/users', async () => {
    return { 
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      ]
    };
  }),
  
  POST('/users', async (req) => {
    return { 
      message: 'User created!',
      user: { id: Date.now(), ...req.body }
    };
  }),
]);

server.use(apiRoutes);

// Start the server
server.listen(3000, () => {
  console.log('🚢 Harbor server running at http://localhost:3000');
  console.log('Try: curl http://localhost:3000/api');
  console.log('Try: curl http://localhost:3000/api/users');
});
`,
      'package.json': `{
  "name": "harbor-playground",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "tsx server.ts"
  },
  "dependencies": {
    "@forgedevstack/harbor": "latest",
    "tsx": "latest"
  }
}
`,
      'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "strict": true
  }
}
`,
    },
  },
  {
    id: 'validation',
    title: 'Request Validation',
    description: 'Validate request body, params, and query',
    entryPoint: 'server.ts',
    files: {
      'server.ts': `import { createServer, router, GET, POST } from '@forgedevstack/harbor';

const server = createServer({ port: 3000, autoStart: false });

const routes = router('/api', [
  // GET with query validation
  GET('/search', async (req) => {
    const { q, page = 1, limit = 10 } = req.query;
    return { 
      query: q,
      page: Number(page),
      limit: Number(limit),
      results: []
    };
  }, {
    validation: {
      query: {
        q: { type: 'string', required: true, min: 1 },
        page: { type: 'number', min: 1 },
        limit: { type: 'number', min: 1, max: 100 },
      },
    },
  }),
  
  // POST with body validation
  POST('/register', async (req) => {
    const { email, password, name, age } = req.body;
    return { 
      message: 'Registration successful!',
      user: { email, name, age }
    };
  }, {
    validation: {
      body: {
        email: { type: 'email', required: true },
        password: { type: 'string', required: true, min: 8 },
        name: { type: 'string', required: true, min: 2 },
        age: { type: 'number', min: 18 },
      },
    },
  }),
]);

server.use(routes);

server.listen(3000, () => {
  console.log('🚢 Validation example running at http://localhost:3000');
  console.log('');
  console.log('Test commands:');
  console.log('curl "http://localhost:3000/api/search?q=hello&page=1"');
  console.log('');
  console.log('curl -X POST http://localhost:3000/api/register \\\\');
  console.log('  -H "Content-Type: application/json" \\\\');
  console.log('  -d \'{"email":"test@test.com","password":"12345678","name":"John","age":25}\'');
});
`,
      'package.json': `{
  "name": "harbor-validation-example",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "tsx server.ts"
  },
  "dependencies": {
    "@forgedevstack/harbor": "latest",
    "tsx": "latest"
  }
}
`,
      'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "strict": true
  }
}
`,
    },
  },
  {
    id: 'middleware',
    title: 'Pre/Post Middleware',
    description: 'Add middleware before and after route handlers',
    entryPoint: 'server.ts',
    files: {
      'server.ts': `import { createServer, router, GET, POST } from '@forgedevstack/harbor';

const server = createServer({ port: 3000, autoStart: false });

// Logging middleware
const logRequest = async (req: any, res: any, next: any) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  next();
};

// Timing middleware
const timing = async (req: any, res: any, next: any) => {
  req.startTime = Date.now();
  next();
};

// Post-handler to add timing header
const addTiming = async (req: any, res: any, result: any) => {
  const duration = Date.now() - req.startTime;
  console.log(\`Request took \${duration}ms\`);
};

const routes = router('/api', [
  GET('/data', async (req) => {
    // Simulate some work
    await new Promise(r => setTimeout(r, 100));
    return { 
      data: 'Hello with middleware!',
      timestamp: new Date().toISOString()
    };
  }, {
    pre: [logRequest, timing],
    post: [addTiming],
  }),
  
  GET('/protected', async (req) => {
    return { secret: 'You have access!' };
  }, {
    pre: [
      logRequest,
      // Auth check middleware
      async (req, res, next) => {
        const token = req.headers.authorization;
        if (token === 'Bearer secret123') {
          next();
        } else {
          res.status(401).json({ error: 'Unauthorized' });
        }
      },
    ],
  }),
]);

server.use(routes);

server.listen(3000, () => {
  console.log('🚢 Middleware example running at http://localhost:3000');
  console.log('');
  console.log('Test commands:');
  console.log('curl http://localhost:3000/api/data');
  console.log('');
  console.log('curl http://localhost:3000/api/protected');
  console.log('curl -H "Authorization: Bearer secret123" http://localhost:3000/api/protected');
});
`,
      'package.json': `{
  "name": "harbor-middleware-example",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "tsx server.ts"
  },
  "dependencies": {
    "@forgedevstack/harbor": "latest",
    "tsx": "latest"
  }
}
`,
      'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "strict": true
  }
}
`,
    },
  },
];

