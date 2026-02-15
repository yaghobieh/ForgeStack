/**
 * Relay Documentation Content
 */

export interface RelayDocSection {
  id: string;
  title: string;
  content: string;
  code?: string;
}

export const RELAY_DOCS: RelayDocSection[] = [
  {
    id: 'introduction',
    title: 'Introduction',
    content: `Relay is a zero-dependency HTTP client built on native \`fetch\`. It's designed as a modern alternative to Axios with a familiar API, full TypeScript support, and additional features like WebSocket integration and React hooks.

**Why Relay?**
- **Zero dependencies** - No bloat, just native APIs
- **Tiny bundle** - Less than 5KB gzipped
- **TypeScript first** - Full type safety out of the box
- **Modern** - Built for ES2020+ and modern browsers
- **Extensible** - Interceptors, retry logic, and more`,
  },
  {
    id: 'installation',
    title: 'Installation',
    content: 'Install Relay using your preferred package manager:',
    code: `npm install @forgedevstack/relay
# or
pnpm add @forgedevstack/relay
# or
yarn add @forgedevstack/relay`,
  },
  {
    id: 'quick-start',
    title: 'Quick Start',
    content: 'Making requests with Relay is simple and intuitive:',
    code: `import { relay } from '@forgedevstack/relay';

// GET request
const { data: users } = await relay.get('/api/users');

// POST request
const { data: newUser } = await relay.post('/api/users', {
  name: 'John Doe',
  email: 'john@example.com',
});

// With query parameters
const { data } = await relay.get('/api/users', {
  params: { role: 'admin', active: true },
});

// Full response access
const response = await relay.get('/api/users');
console.log(response.status);     // 200
console.log(response.headers);    // { 'content-type': '...' }
console.log(response.data);       // [...]`,
  },
  {
    id: 'create-instance',
    title: 'Creating Instances',
    content: 'Create custom instances with default configurations:',
    code: `import { createRelay } from '@forgedevstack/relay';

const api = createRelay({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Authorization': 'Bearer your-token',
    'X-Custom-Header': 'value',
  },
});

// All requests use the default config
const users = await api.get('/users');
const posts = await api.get('/posts');

// Override config per-request
const data = await api.get('/users', {
  timeout: 5000,
  headers: { 'X-Request-ID': '123' },
});`,
  },
  {
    id: 'interceptors',
    title: 'Interceptors',
    content: 'Transform requests and responses with interceptors:',
    code: `import { createRelay } from '@forgedevstack/relay';

const api = createRelay({ baseURL: 'https://api.example.com' });

// Request interceptor - add auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = \`Bearer \${token}\`;
  }
  return config;
});

// Response interceptor - transform data
api.interceptors.response.use((response) => {
  // Log response time
  console.log(\`Request completed: \${response.status}\`);
  return response;
});

// Error handling interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized
      window.location.href = '/login';
    }
    throw error;
  }
);

// Remove interceptor
const id = api.interceptors.request.use((config) => config);
api.interceptors.request.eject(id);`,
  },
  {
    id: 'retry-timeout',
    title: 'Retry & Timeout',
    content: 'Built-in retry logic and timeout handling:',
    code: `import { relay } from '@forgedevstack/relay';

// Automatic retry on failure (5xx errors, network errors)
const { data } = await relay.get('/api/flaky-endpoint', {
  retries: 3,           // Retry up to 3 times
  retryDelay: 1000,     // 1 second between retries
});

// Request timeout
const { data } = await relay.get('/api/slow-endpoint', {
  timeout: 5000,        // 5 second timeout
});

// Both options together
const { data } = await relay.post('/api/important', payload, {
  timeout: 10000,
  retries: 2,
  retryDelay: 2000,
});`,
  },
  {
    id: 'file-upload',
    title: 'File Upload',
    content: 'Upload files with progress tracking:',
    code: `import { relay } from '@forgedevstack/relay';

// Simple file upload
const file = document.querySelector('input[type="file"]').files[0];
const { data } = await relay.upload('/api/upload', file);

// With progress tracking
const { data } = await relay.upload('/api/upload', file, {
  onUploadProgress: (progress) => {
    console.log(\`\${progress.percent}% uploaded\`);
    console.log(\`\${progress.loaded} / \${progress.total} bytes\`);
  },
});

// Upload FormData
const formData = new FormData();
formData.append('file', file);
formData.append('name', 'my-document');

const { data } = await relay.upload('/api/upload', formData);`,
  },
  {
    id: 'cancellation',
    title: 'Request Cancellation',
    content: 'Cancel requests using AbortController:',
    code: `import { relay, isRelayError, ERROR_CODES } from '@forgedevstack/relay';

// Create abort controller
const controller = new AbortController();

// Start request with signal
const request = relay.get('/api/large-data', {
  signal: controller.signal,
});

// Cancel after 2 seconds
setTimeout(() => {
  controller.abort();
}, 2000);

// Handle cancellation
try {
  const { data } = await request;
} catch (error) {
  if (isRelayError(error) && error.code === ERROR_CODES.CANCELED) {
    console.log('Request was cancelled');
  }
}`,
  },
  {
    id: 'websocket',
    title: 'WebSocket (Real-time)',
    content: 'Built-in WebSocket client with auto-reconnect:',
    code: `import { createSocket } from '@forgedevstack/relay';

const socket = createSocket({
  url: 'wss://api.example.com/ws',
  autoReconnect: true,           // Auto-reconnect on disconnect
  maxReconnectAttempts: 5,       // Max reconnect attempts
  reconnectInterval: 3000,       // 3 seconds between attempts
  heartbeatInterval: 30000,      // Send ping every 30 seconds
  heartbeatMessage: 'ping',      // Heartbeat message
});

// Connect
socket.connect();

// Subscribe to specific events
const unsubscribe = socket.on('newMessage', (data) => {
  console.log('New message:', data);
});

// Subscribe to all messages
socket.onMessage((data) => {
  console.log('Received:', data);
});

// Monitor connection status
socket.onStatusChange((status) => {
  // 'connecting' | 'connected' | 'disconnected' | 'reconnecting' | 'error'
  console.log('Status:', status);
});

// Send messages
socket.send({ type: 'chat', message: 'Hello!' });
socket.send('Simple string message');

// Disconnect
socket.disconnect();

// Cleanup subscription
unsubscribe();`,
  },
  {
    id: 'react-hooks',
    title: 'React Hooks',
    content: 'Optional React hooks for declarative data fetching:',
    code: `import { useRelay, useGet, useSocket } from '@forgedevstack/relay';

// Basic usage
function UserList() {
  const { data, loading, error, execute } = useRelay('/api/users', {
    immediate: true,  // Fetch on mount
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
      <button onClick={() => execute()}>Refresh</button>
    </ul>
  );
}

// Shorthand hooks
function Posts() {
  const { data, loading } = useGet('/api/posts', { immediate: true });
  // Also: usePost, usePut, usePatch, useDelete
}

// WebSocket hook
function Chat() {
  const { isConnected, lastMessage, send } = useSocket('wss://chat.example.com', {
    autoConnect: true,
    onMessage: (data) => console.log('New:', data),
  });

  return (
    <div>
      <p>Status: {isConnected ? '🟢 Connected' : '🔴 Disconnected'}</p>
      <p>Last: {JSON.stringify(lastMessage)}</p>
      <button onClick={() => send({ text: 'Hello!' })}>
        Send Message
      </button>
    </div>
  );
}`,
  },
  {
    id: 'error-handling',
    title: 'Error Handling',
    content: 'Comprehensive error handling with typed errors:',
    code: `import { relay, isRelayError, ERROR_CODES } from '@forgedevstack/relay';

try {
  const { data } = await relay.get('/api/protected');
} catch (error) {
  if (isRelayError(error)) {
    console.log('Code:', error.code);
    console.log('Message:', error.message);
    console.log('Config:', error.config);
    
    switch (error.code) {
      case ERROR_CODES.TIMEOUT:
        console.log('Request timed out');
        break;
      case ERROR_CODES.NETWORK:
        console.log('Network error - check connection');
        break;
      case ERROR_CODES.CANCELED:
        console.log('Request was cancelled');
        break;
      case ERROR_CODES.BAD_REQUEST:
        console.log('Client error:', error.response?.status);
        break;
      case ERROR_CODES.BAD_RESPONSE:
        console.log('Server error:', error.response?.status);
        break;
    }
    
    // Access response data on errors
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Data:', error.response.data);
    }
  }
}`,
  },
  {
    id: 'api-reference',
    title: 'API Reference',
    content: `### Methods

| Method | Description |
|--------|-------------|
| \`relay.get(url, config?)\` | GET request |
| \`relay.post(url, data?, config?)\` | POST request |
| \`relay.put(url, data?, config?)\` | PUT request |
| \`relay.patch(url, data?, config?)\` | PATCH request |
| \`relay.delete(url, config?)\` | DELETE request |
| \`relay.head(url, config?)\` | HEAD request |
| \`relay.options(url, config?)\` | OPTIONS request |
| \`relay.upload(url, file, config?)\` | File upload |
| \`relay.request(config)\` | Generic request |
| \`createRelay(config)\` | Create new instance |
| \`createSocket(config)\` | Create WebSocket client |

### Config Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| \`baseURL\` | \`string\` | - | Base URL for requests |
| \`headers\` | \`object\` | \`{}\` | Default headers |
| \`timeout\` | \`number\` | \`30000\` | Timeout in ms |
| \`retries\` | \`number\` | \`0\` | Retry attempts |
| \`retryDelay\` | \`number\` | \`1000\` | Delay between retries |
| \`responseType\` | \`string\` | \`'json'\` | Response type |
| \`params\` | \`object\` | - | Query parameters |
| \`signal\` | \`AbortSignal\` | - | Cancellation signal |
| \`credentials\` | \`string\` | - | Credentials mode |

### Response Object

| Property | Type | Description |
|----------|------|-------------|
| \`data\` | \`T\` | Response data |
| \`status\` | \`number\` | HTTP status code |
| \`statusText\` | \`string\` | Status text |
| \`headers\` | \`object\` | Response headers |
| \`config\` | \`object\` | Request config |`,
  },
];

export const RELAY_VERSION = '1.0.0';
