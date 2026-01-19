/**
 * Test @forgestack/harbor imports and basic functionality
 */

// Test main imports
import { createServer, router, GET, POST, PUT, DELETE } from '@forgestack/harbor';

// Test subpath imports
import { Schema, model, connect } from '@forgestack/harbor/database';
import { createRateLimiter } from '@forgestack/harbor/middleware';
import { createWebSocketServer } from '@forgestack/harbor/websocket';
import { createScheduler } from '@forgestack/harbor/scheduler';
import { createCache } from '@forgestack/harbor/cache';
import { jwtAuth, apiKeyAuth } from '@forgestack/harbor/auth';

console.log('✅ All @forgestack/harbor imports successful!');

// Test createServer
const server = createServer({ port: 3000 });
console.log('✅ createServer works:', typeof server);

// Test router
const routes = router('/api/test', [
  GET('/', () => ({ message: 'Hello' })),
  POST('/', (req) => ({ received: req.body })),
]);
console.log('✅ router works:', typeof routes);

// Test Schema
const userSchema = new Schema({
  name: { type: 'string', required: true },
  email: { type: 'string', required: true },
});
console.log('✅ Schema works:', typeof userSchema);

// Test model
const User = model('User', userSchema);
console.log('✅ model works:', typeof User);

// Test middleware creators
const rateLimiter = createRateLimiter({ windowMs: 60000, max: 100 });
console.log('✅ createRateLimiter works:', typeof rateLimiter);

// Test scheduler
const scheduler = createScheduler();
console.log('✅ createScheduler works:', typeof scheduler);

// Test cache
const cache = createCache({ store: 'memory' });
console.log('✅ createCache works:', typeof cache);

console.log('\n🎉 All @forgestack/harbor tests passed!');

