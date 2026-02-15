import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CodeBlock } from '../components/CodeBlock';

const AUTH_COLOR = '#8b5cf6';

export const AuthDocs: FC = () => {
  return (
    <div className="px-3 sm:px-6 py-4 sm:py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
        <span className="text-2xl sm:text-3xl">🔐</span>
        <div className="min-w-0">
          <h1 className="text-xl sm:text-3xl font-bold truncate" style={{ color: AUTH_COLOR }}>
            AuthMaster
          </h1>
          <p className="text-theme-muted text-xs sm:text-sm">v1.0.0-alpha</p>
        </div>
        <span 
          className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold animate-pulse"
          style={{ 
            background: `linear-gradient(135deg, ${AUTH_COLOR}, #ec4899)`,
            color: '#fff',
          }}
        >
          NEW
        </span>
      </div>

      <p className="text-sm sm:text-lg text-theme-secondary mb-6 sm:mb-8 max-w-2xl">
        Simple OAuth authentication for React with Google, Facebook, and GitHub.
        Built-in UI components and configurable log levels.
      </p>

      <div className="space-y-8 sm:space-y-12">
        {/* Installation */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Installation</h2>
          <CodeBlock language="bash" code="npm install @forgedevstack/forge-auth" />
        </section>

        {/* Quick Start */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Quick Start</h2>
          <CodeBlock
            language="tsx"
            code={`import { AuthProvider, GoogleButton, useAuth } from '@forgedevstack/forge-auth';

function App() {
  return (
    <AuthProvider
      config={{
        google: { clientId: 'your-google-client-id' },
        facebook: { appId: 'your-facebook-app-id' },
        github: { clientId: 'your-github-client-id' },
        logLevel: 'info',
      }}
    >
      <LoginPage />
    </AuthProvider>
  );
}

function LoginPage() {
  const { isAuthenticated, user, signOut } = useAuth();

  if (isAuthenticated) {
    return (
      <div>
        <p>Welcome, {user?.name}!</p>
        <button onClick={signOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <div>
      <GoogleButton />
      <FacebookButton />
      <GitHubButton />
    </div>
  );
}`}
          />
        </section>

        {/* OAuth Providers */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">OAuth Providers</h2>
          <div className="grid gap-3 sm:gap-4">
            <div className="p-3 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔵</span>
                <h3 className="font-semibold text-theme-primary text-sm sm:text-base">Google</h3>
              </div>
              <p className="text-xs sm:text-sm text-theme-muted mb-3">
                OAuth 2.0 with email, profile, and OpenID scopes.
              </p>
              <CodeBlock
                language="tsx"
                code={`google: {
  clientId: 'your-client-id.apps.googleusercontent.com',
  scopes: ['email', 'profile'],
  redirectUri: '/auth/callback',
}`}
              />
            </div>
            
            <div className="p-3 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🔷</span>
                <h3 className="font-semibold text-theme-primary text-sm sm:text-base">Facebook</h3>
              </div>
              <p className="text-xs sm:text-sm text-theme-muted mb-3">
                Facebook Login with public profile access.
              </p>
              <CodeBlock
                language="tsx"
                code={`facebook: {
  appId: 'your-app-id',
  scopes: ['email', 'public_profile'],
}`}
              />
            </div>

            <div className="p-3 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">⚫</span>
                <h3 className="font-semibold text-theme-primary text-sm sm:text-base">GitHub</h3>
              </div>
              <p className="text-xs sm:text-sm text-theme-muted mb-3">
                Developer-friendly OAuth with user and email access.
              </p>
              <CodeBlock
                language="tsx"
                code={`github: {
  clientId: 'your-client-id',
  scopes: ['read:user', 'user:email'],
}`}
              />
            </div>
          </div>
        </section>

        {/* Components */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Components</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {[
              { name: 'GoogleButton', desc: 'Google sign-in' },
              { name: 'FacebookButton', desc: 'Facebook sign-in' },
              { name: 'GitHubButton', desc: 'GitHub sign-in' },
              { name: 'AuthGuard', desc: 'Protected content' },
              { name: 'GuestGuard', desc: 'Guest-only content' },
              { name: 'UserAvatar', desc: 'Profile picture' },
              { name: 'UserInfo', desc: 'User details' },
              { name: 'SignOutButton', desc: 'Sign out action' },
            ].map((item) => (
              <div key={item.name} className="p-2 sm:p-3 rounded-lg bg-theme-tertiary">
                <div className="font-mono text-xs sm:text-sm text-theme-primary">{item.name}</div>
                <div className="text-[10px] sm:text-xs text-theme-muted">{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Hooks */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Hooks</h2>
          <CodeBlock
            language="tsx"
            code={`import { 
  useAuth,           // Main auth hook
  useUser,           // Get current user
  useIsAuthenticated, // Check auth status
  useAuthLoading,    // Loading state
  useAuthError,      // Error state
} from '@forgedevstack/forge-auth';

// Example
const { user, isAuthenticated, signOut } = useAuth();
const currentUser = useUser();
const isLoggedIn = useIsAuthenticated();`}
          />
        </section>

        {/* Log Levels */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Log Levels</h2>
          <p className="text-theme-muted mb-3 sm:mb-4 text-xs sm:text-base">
            Control console output with the <code className="px-1 py-0.5 rounded bg-theme-tertiary text-xs">logLevel</code> config:
          </p>
          <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
            <table className="w-full text-xs sm:text-sm min-w-[300px]">
              <thead>
                <tr className="border-b border-theme-border">
                  <th className="text-left py-2 px-2 sm:px-3 text-theme-muted">Level</th>
                  <th className="text-left py-2 px-2 sm:px-3 text-theme-muted">Shows</th>
                </tr>
              </thead>
              <tbody className="text-theme-secondary">
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-mono text-purple-400">debug</td>
                  <td className="py-2 px-2 sm:px-3">Everything</td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-mono text-blue-400">info</td>
                  <td className="py-2 px-2 sm:px-3">Info, warnings, errors</td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-mono text-amber-400">warn</td>
                  <td className="py-2 px-2 sm:px-3">Warnings and errors</td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-mono text-red-400">error</td>
                  <td className="py-2 px-2 sm:px-3">Errors only</td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-mono text-theme-muted">none</td>
                  <td className="py-2 px-2 sm:px-3">Silent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* AuthGuard */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">AuthGuard</h2>
          <p className="text-theme-muted mb-3 sm:mb-4 text-xs sm:text-base">
            Protect content - only show when authenticated:
          </p>
          <CodeBlock
            language="tsx"
            code={`import { AuthGuard, GuestGuard } from '@forgedevstack/forge-auth';

// Only show to authenticated users
<AuthGuard fallback={<LoginPage />} loading={<Spinner />}>
  <Dashboard />
</AuthGuard>

// Only show to guests (not logged in)
<GuestGuard fallback={<Navigate to="/dashboard" />}>
  <LoginPage />
</GuestGuard>`}
          />
        </section>

        {/* With Bear UI */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">With Bear UI</h2>
          <p className="text-theme-muted mb-3 sm:mb-4 text-xs sm:text-base">
            AuthMaster works seamlessly with <Link to="/bear" className="text-pink-400 hover:underline">Bear UI</Link>:
          </p>
          <CodeBlock
            language="tsx"
            code={`import { Card, Flex, Text, Divider } from '@forgedevstack/bear';
import { GoogleButton, FacebookButton, GitHubButton } from '@forgedevstack/forge-auth';

function LoginCard() {
  return (
    <Card padding="lg" shadow="md">
      <Text variant="h3" align="center" mb="lg">
        Sign In
      </Text>
      <Flex direction="column" gap="sm">
        <GoogleButton fullWidth />
        <FacebookButton fullWidth />
        <GitHubButton fullWidth />
      </Flex>
      <Divider my="md" />
      <Text size="sm" color="muted" align="center">
        By signing in, you agree to our Terms
      </Text>
    </Card>
  );
}`}
          />
        </section>

        {/* User Type */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">User Type</h2>
          <CodeBlock
            language="typescript"
            code={`interface AuthUser {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  provider: 'google' | 'facebook' | 'github';
  providerId: string;
  metadata?: Record<string, unknown>;
  expiresAt?: number;
}`}
          />
        </section>

        {/* Roadmap */}
        <section className="pb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Roadmap</h2>
          <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
            {[
              'Email/Password auth',
              'Magic link auth',
              'Two-factor (2FA)',
              'Apple Sign-In',
              'Microsoft/Azure AD',
              'Role-based access',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 p-2 sm:p-3 rounded-lg bg-theme-tertiary">
                <span className="text-amber-400 text-xs">○</span>
                <span className="text-xs sm:text-sm text-theme-secondary">{item}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
