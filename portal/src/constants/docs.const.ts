export interface DocSection {
  title: string;
  path: string;
  children?: DocSection[];
}

export interface DocNavigation {
  title: string;
  sections: DocSection[];
}

export const DOC_NAVIGATION: DocNavigation[] = [
  {
    title: 'Getting Started',
    sections: [
      { title: 'Quick Start', path: '/docs/quick-start' },
      { title: 'Installation', path: '/docs/installation' },
      { title: 'Project Templates', path: '/docs/templates' },
      { title: 'CLI', path: '/docs/cli' },
    ],
  },
  {
    title: 'Server',
    sections: [
      { title: 'Creating a Server', path: '/docs/server' },
      { title: 'Routes', path: '/docs/routes' },
      { title: 'Request Validation', path: '/docs/validation' },
      { title: 'Error Handling', path: '/docs/errors' },
      { title: 'HTTP Logger', path: '/docs/http-logger' },
      { title: 'Configuration', path: '/docs/config' },
    ],
  },
  {
    title: 'Database',
    sections: [
      { title: 'Connections', path: '/docs/connections' },
      { title: 'Schema', path: '/docs/schemas' },
      { title: 'Schema Types', path: '/docs/schematypes' },
      { title: 'Models', path: '/docs/models' },
      { title: 'Documents', path: '/docs/documents' },
      { title: 'Queries', path: '/docs/queries' },
      { title: 'Virtuals', path: '/docs/virtuals' },
      { title: 'Hooks', path: '/docs/hooks' },
      { title: 'Indexes', path: '/docs/indexes' },
    ],
  },
  {
    title: 'Authentication',
    sections: [
      { title: 'JWT', path: '/docs/jwt' },
      { title: 'API Keys', path: '/docs/api-keys' },
      { title: 'RBAC', path: '/docs/rbac' },
      { title: 'Request Signing', path: '/docs/signing' },
      { title: 'Password Hashing', path: '/docs/passwords' },
    ],
  },
  {
    title: 'Real-Time',
    sections: [
      { title: 'WebSocket', path: '/docs/websocket' },
      { title: 'Rooms', path: '/docs/rooms' },
      { title: 'Broadcasting', path: '/docs/broadcasting' },
    ],
  },
  {
    title: 'Background Jobs',
    sections: [
      { title: 'Scheduler', path: '/docs/scheduler' },
      { title: 'Cron Jobs', path: '/docs/cron' },
      { title: 'Intervals', path: '/docs/intervals' },
    ],
  },
  {
    title: 'Performance',
    sections: [
      { title: 'Caching', path: '/docs/caching' },
      { title: 'Rate Limiting', path: '/docs/rate-limiting' },
      { title: 'Metrics', path: '/docs/metrics' },
      { title: 'Health Checks', path: '/docs/health' },
    ],
  },
  {
    title: 'File Handling',
    sections: [
      { title: 'File Uploads', path: '/docs/uploads' },
    ],
  },
  {
    title: 'Extras',
    sections: [
      { title: 'Docker Manager', path: '/docs/docker' },
      { title: 'i18n', path: '/docs/i18n' },
      { title: 'TypeScript', path: '/docs/typescript' },
      { title: 'Migration from Mongoose', path: '/docs/migration' },
    ],
  },
  {
    title: 'API Reference',
    sections: [
      { title: 'Harbor', path: '/docs/api/harbor' },
      { title: 'Schema', path: '/docs/api/schema' },
      { title: 'Model', path: '/docs/api/model' },
      { title: 'Query', path: '/docs/api/query' },
      { title: 'JWT', path: '/docs/api/jwt' },
      { title: 'WebSocket', path: '/docs/api/websocket' },
      { title: 'Scheduler', path: '/docs/api/scheduler' },
      { title: 'Cache', path: '/docs/api/cache' },
    ],
  },
];
