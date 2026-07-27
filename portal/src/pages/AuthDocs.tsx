import { FC } from 'react';
import { CodeBlock } from '../components/CodeBlock';

const AUTH_COLOR = '#8b5cf6';

export const AuthDocs: FC = () => {
  return (
    <div className="px-3 sm:px-6 py-4 sm:py-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
        <span className="text-2xl sm:text-3xl">🔐</span>
        <div className="min-w-0">
          <h1 className="text-xl sm:text-3xl font-bold truncate" style={{ color: AUTH_COLOR }}>
            Forge Auth
          </h1>
          <p className="text-theme-muted text-xs sm:text-sm">v2.0.1 · Node auth toolkit</p>
        </div>
        <span
          className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold"
          style={{
            background: `linear-gradient(135deg, ${AUTH_COLOR}, #ec4899)`,
            color: '#fff',
          }}
        >
          2.0.1
        </span>
      </div>

      <p className="text-sm sm:text-lg text-theme-secondary mb-4 max-w-2xl">
        Zero-dependency Node.js auth toolkit for Harbor and any HTTP framework: HMAC sessions,
        refresh/rotation, cookie helpers, API keys, scrypt, and OIDC+PKCE.
      </p>

      <div
        className="mb-6 sm:mb-8 rounded-lg border border-theme-border px-3 py-2 text-xs sm:text-sm text-theme-secondary"
        style={{ borderColor: `${AUTH_COLOR}55` }}
      >
        <strong className="text-theme-primary">Not AuthMaster.</strong>{' '}
        <code>@forgedevstack/forge-auth</code> is the <strong>Node</strong> toolkit. The React OAuth UI
        (AuthMaster) is a different product — recommended package name:{' '}
        <code>@forgedevstack/auth-master</code>.
      </div>

      <div className="space-y-8 sm:space-y-12">
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Installation</h2>
          <CodeBlock language="bash" code="npm install @forgedevstack/forge-auth" />
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Harbor middleware</h2>
          <CodeBlock
            language="ts"
            code={`import {
  createSessionPair,
  createHarborSessionMiddleware,
  setSessionCookie,
  setRefreshCookie,
} from '@forgedevstack/forge-auth';

const secret = process.env.SESSION_SECRET!;

app.post('/login', (req, res) => {
  const pair = createSessionPair({
    secret,
    accessPayload: { userId: 'user-1', role: 'admin' },
  });
  setSessionCookie(res, pair.accessToken, { httpOnly: true, sameSite: 'Lax' });
  setRefreshCookie(res, pair.refreshToken, { httpOnly: true, sameSite: 'Lax' });
  res.json({ ok: true });
});

app.use(createHarborSessionMiddleware({ secret }));

app.get('/profile', (req, res) => {
  res.json({ userId: req.forgeSession?.payload.userId });
});`}
          />
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Cookie sessions</h2>
          <CodeBlock
            language="ts"
            code={`import { createHarborCookieSessionMiddleware } from '@forgedevstack/forge-auth';

app.use(createHarborCookieSessionMiddleware({ secret: process.env.SESSION_SECRET! }));`}
          />
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">What&apos;s included</h2>
          <ul className="list-disc pl-5 space-y-1 text-sm text-theme-secondary">
            <li>HMAC-SHA256 sessions with TTL</li>
            <li>Refresh tokens + rotation</li>
            <li>Harbor bearer / API key / cookie middleware</li>
            <li>scrypt password hashing</li>
            <li>API key generate + timing-safe verify</li>
            <li>OIDC authorization-code + PKCE + refresh grant helpers</li>
          </ul>
          <p className="mt-3 text-sm text-theme-muted">
            Repo:{' '}
            <a
              className="text-pink-400 hover:underline"
              href="https://github.com/yaghobieh/forge-auth"
              target="_blank"
              rel="noreferrer"
            >
              yaghobieh/forge-auth
            </a>
            {' · '}
            npm:{' '}
            <a
              className="text-pink-400 hover:underline"
              href="https://www.npmjs.com/package/@forgedevstack/forge-auth"
              target="_blank"
              rel="noreferrer"
            >
              @forgedevstack/forge-auth
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};
