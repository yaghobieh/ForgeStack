import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CodeBlock } from '../components/CodeBlock';

const CLI_COLOR = '#ec4899';

export const CliDocs: FC = () => {
  return (
    <div className="px-3 sm:px-6 py-4 sm:py-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
        <span className="text-2xl sm:text-3xl">⚒️</span>
        <div className="min-w-0">
          <h1 className="text-xl sm:text-3xl font-bold truncate" style={{ color: CLI_COLOR }}>
            Forge CLI
          </h1>
          <p className="text-theme-muted text-xs sm:text-sm">v1.0.0-rc.1</p>
        </div>
        <span 
          className="text-[10px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full font-semibold animate-pulse"
          style={{ 
            background: `linear-gradient(135deg, ${CLI_COLOR}, #a855f7)`,
            color: '#fff',
          }}
        >
          NEW
        </span>
      </div>

      <p className="text-sm sm:text-lg text-theme-secondary mb-6 sm:mb-8 max-w-2xl">
        Create and manage ForgeStack projects with a single command. 
        Supports npm, pnpm, yarn, and bun.
      </p>

      <div className="space-y-8 sm:space-y-12">
        {/* Quick Start */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Quick Start</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div className="p-2 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
              <div className="text-xs sm:text-sm font-medium text-theme-muted mb-2">npm</div>
              <CodeBlock language="bash" code="npx create-forge my-app" />
            </div>
            <div className="p-2 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
              <div className="text-xs sm:text-sm font-medium text-theme-muted mb-2">pnpm</div>
              <CodeBlock language="bash" code="pnpm create forge my-app" />
            </div>
            <div className="p-2 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
              <div className="text-xs sm:text-sm font-medium text-theme-muted mb-2">yarn</div>
              <CodeBlock language="bash" code="yarn create forge my-app" />
            </div>
            <div className="p-2 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
              <div className="text-xs sm:text-sm font-medium text-theme-muted mb-2">bun</div>
              <CodeBlock language="bash" code="bunx create-forge my-app" />
            </div>
          </div>
        </section>

        {/* Templates */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Templates</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="p-3 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
              <h3 className="font-semibold text-theme-primary mb-1 sm:mb-2 text-sm sm:text-base">⚛️ React (Default)</h3>
              <p className="text-xs sm:text-sm text-theme-muted mb-2 sm:mb-3">
                Vite + React 18 + TypeScript with Bear UI, Forge Compass routing, and Synapse state.
              </p>
              <CodeBlock language="bash" code="npx create-forge my-app --template react" />
            </div>

            <div className="p-3 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
              <h3 className="font-semibold text-theme-primary mb-1 sm:mb-2 text-sm sm:text-base">⚓ Server (Harbor)</h3>
              <p className="text-xs sm:text-sm text-theme-muted mb-2 sm:mb-3">
                <strong className="text-pink-400">Harbor</strong> backend framework or Express.js with TypeScript.
              </p>
              <CodeBlock language="bash" code="npx create-forge my-api --template server" />
            </div>

            <div className="p-3 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
              <h3 className="font-semibold text-theme-primary mb-1 sm:mb-2 text-sm sm:text-base">🚀 Full-Stack Monorepo</h3>
              <p className="text-xs sm:text-sm text-theme-muted mb-2 sm:mb-3">
                Workspace-based monorepo with React frontend + <strong className="text-pink-400">Harbor</strong> backend.
              </p>
              <CodeBlock language="bash" code="npx create-forge my-project --template fullstack" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">What's Included</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            {[
              { icon: '🐻', title: 'Bear UI', desc: 'Components + Theme' },
              { icon: '🧭', title: 'Compass', desc: 'Routing + Guards' },
              { icon: '⚡', title: 'Synapse', desc: 'State Management' },
              { icon: '📝', title: 'Form', desc: 'Form + Validation' },
              { icon: '🔍', title: 'Query', desc: 'Data Fetching' },
              { icon: '📊', title: 'Grid', desc: 'Data Tables' },
              { icon: '⚒️', title: 'Anvil', desc: 'Utilities' },
              { icon: '⚓', title: 'Harbor', desc: 'Backend' },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-theme-tertiary">
                <span className="text-base sm:text-xl flex-shrink-0">{item.icon}</span>
                <div className="min-w-0">
                  <div className="font-medium text-theme-primary text-xs sm:text-sm truncate">{item.title}</div>
                  <div className="text-[10px] sm:text-sm text-theme-muted truncate">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add Command */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Add Packages</h2>
          <p className="text-theme-muted mb-3 sm:mb-4 text-xs sm:text-base">
            Add ForgeStack packages to an existing project:
          </p>
          <CodeBlock
            language="bash"
            code={`# Interactive mode
npx forge add

# Direct add
npx forge add bear
npx forge add synapse
npx forge add forge-compass`}
          />
        </section>

        {/* Synapse Nuclear */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Synapse Nuclear Slices</h2>
          <p className="text-theme-muted mb-3 sm:mb-4 text-xs sm:text-base">
            Generate organized state management slices:
          </p>
          <CodeBlock
            language="bash"
            code={`npx forge nuclear user

# Creates: src/nuclear/slices/user/
#   ├── index.ts
#   ├── user.nucleus.ts
#   ├── user.types.ts
#   └── user.hooks.ts`}
          />
        </section>

        {/* CLI Options */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">CLI Options</h2>
          <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
            <table className="w-full text-xs sm:text-sm min-w-[400px]">
              <thead>
                <tr className="border-b border-theme-border">
                  <th className="text-left py-2 px-2 sm:px-3 text-theme-muted">Command</th>
                  <th className="text-left py-2 px-2 sm:px-3 text-theme-muted">Options</th>
                  <th className="text-left py-2 px-2 sm:px-3 text-theme-muted">Description</th>
                </tr>
              </thead>
              <tbody className="text-theme-secondary">
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-mono">create</td>
                  <td className="py-2 px-2 sm:px-3 font-mono text-[10px] sm:text-xs">-t, --template</td>
                  <td className="py-2 px-2 sm:px-3">react, server, fullstack</td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-mono"></td>
                  <td className="py-2 px-2 sm:px-3 font-mono text-[10px] sm:text-xs">-o, --out-dir</td>
                  <td className="py-2 px-2 sm:px-3">Output directory</td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-mono"></td>
                  <td className="py-2 px-2 sm:px-3 font-mono text-[10px] sm:text-xs">-y, --yes</td>
                  <td className="py-2 px-2 sm:px-3">Skip prompts</td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-mono">add</td>
                  <td className="py-2 px-2 sm:px-3 font-mono text-[10px] sm:text-xs">-c, --color</td>
                  <td className="py-2 px-2 sm:px-3">Bear primary color</td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-mono">nuclear</td>
                  <td className="py-2 px-2 sm:px-3 font-mono text-[10px] sm:text-xs">-p, --path</td>
                  <td className="py-2 px-2 sm:px-3">Base path (default: src)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Quick Mode */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Quick Mode</h2>
          <p className="text-theme-muted mb-3 sm:mb-4 text-xs sm:text-base">
            Skip all prompts and create with all ForgeStack packages:
          </p>
          <CodeBlock
            language="bash"
            code="npx create-forge my-app --yes"
          />
          <div className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-lg border border-pink-500/20 bg-pink-500/5">
            <p className="text-xs sm:text-sm text-theme-secondary">
              <strong className="text-pink-400">Includes:</strong> Bear UI, Compass, Query, Form, Synapse, Grid Table, Anvil, Docker
            </p>
          </div>
        </section>

        {/* Docker */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-theme-primary">Docker Support</h2>
          <p className="text-theme-muted mb-3 sm:mb-4 text-xs sm:text-base">
            Generated projects include Docker configuration:
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="p-2 sm:p-3 rounded-lg bg-theme-tertiary text-center">
              <div className="font-mono text-[10px] sm:text-sm text-theme-primary">Dockerfile</div>
              <div className="text-[10px] sm:text-xs text-theme-muted">Production</div>
            </div>
            <div className="p-2 sm:p-3 rounded-lg bg-theme-tertiary text-center">
              <div className="font-mono text-[10px] sm:text-sm text-theme-primary">Dockerfile.dev</div>
              <div className="text-[10px] sm:text-xs text-theme-muted">Development</div>
            </div>
            <div className="p-2 sm:p-3 rounded-lg bg-theme-tertiary text-center">
              <div className="font-mono text-[10px] sm:text-sm text-theme-primary">docker-compose</div>
              <div className="text-[10px] sm:text-xs text-theme-muted">Full stack</div>
            </div>
          </div>
        </section>

        {/* Generator Scripts */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-theme-primary">Generator Scripts</h2>
          <p className="text-theme-muted mb-4 text-sm sm:text-base">
            Use built-in scripts to generate new files:
          </p>
          <CodeBlock
            language="bash"
            code={`# Generate new page
npm run generate:page

# Generate component  
npm run generate:component

# Generate Synapse slice
npm run generate:slice`}
          />
        </section>

        {/* Project Structure */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-theme-primary">Generated Project Structure</h2>
          <p className="text-theme-muted mb-4 text-sm sm:text-base">
            The CLI creates a well-organized project structure:
          </p>
          <CodeBlock
            language="text"
            code={`my-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.types.ts
│   │       └── index.ts
│   ├── pages/               # Page components
│   │   ├── Home/
│   │   │   ├── Home.tsx
│   │   │   ├── Home.types.ts
│   │   │   ├── Home.const.ts
│   │   │   └── index.ts
│   │   └── Users/
│   │       └── Users.tsx
│   ├── nuclear/             # Synapse state management
│   │   ├── config/
│   │   │   └── nuclear.config.ts
│   │   └── slices/
│   │       └── app/
│   │           ├── app.nucleus.ts
│   │           ├── app.types.ts
│   │           ├── app.hooks.ts
│   │           └── index.ts
│   ├── api/                 # API layer (Forge Query)
│   │   └── users.ts
│   ├── utils/               # Utility functions (Anvil)
│   │   └── index.ts
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry with ThemeProvider
│   └── index.css
├── Dockerfile               # Production build
├── Dockerfile.dev           # Development
├── docker-compose.yml       # Full stack
├── nginx.conf               # Nginx config
└── package.json`}
          />
        </section>

        {/* Harbor Server Structure */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-theme-primary">Harbor Server Structure</h2>
          <p className="text-theme-muted mb-4 text-sm sm:text-base">
            When selecting <strong className="text-pink-400">Harbor</strong> for server templates:
          </p>
          <CodeBlock
            language="text"
            code={`my-api/
├── src/
│   ├── constants/
│   │   └── config.ts        # Environment config
│   ├── routes/
│   │   └── user.routes.ts   # Route definitions
│   ├── controllers/
│   │   └── user.controller.ts
│   ├── models/
│   │   └── user.model.ts    # Mongoose schemas
│   ├── services/
│   │   └── user.service.ts  # Business logic
│   └── index.ts             # Harbor server entry
├── Dockerfile
├── docker-compose.yml       # Includes MongoDB
└── package.json`}
          />
        </section>

        {/* Theme Customization */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-theme-primary">Theme Customization</h2>
          <p className="text-theme-muted mb-4 text-sm sm:text-base">
            Customize Bear UI theme in your <code className="px-1 py-0.5 rounded bg-theme-tertiary text-xs">main.tsx</code>:
          </p>
          <CodeBlock
            language="typescript"
            code={`import { ThemeProvider } from '@forgedevstack/bear';

// Custom theme configuration
const customTheme = {
  colors: {
    primary: '#ec4899',    // Your brand color
    secondary: '#8b5cf6',
    accent: '#06b6d4',
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
};

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={customTheme}>
    <App />
  </ThemeProvider>
);`}
          />
        </section>

        {/* ForgeStack Ecosystem */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-theme-primary">ForgeStack Ecosystem</h2>
          <p className="text-theme-muted mb-4 text-sm sm:text-base">
            All ForgeStack packages work seamlessly together:
          </p>
          <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0">
            <table className="w-full text-xs sm:text-sm min-w-[500px]">
              <thead>
                <tr className="border-b border-theme-border">
                  <th className="text-left py-2 px-2 sm:px-3 text-theme-muted">Package</th>
                  <th className="text-left py-2 px-2 sm:px-3 text-theme-muted">Purpose</th>
                  <th className="text-left py-2 px-2 sm:px-3 text-theme-muted">Docs</th>
                </tr>
              </thead>
              <tbody className="text-theme-secondary">
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-medium">Bear UI</td>
                  <td className="py-2 px-2 sm:px-3">Components, Theme, Icons</td>
                  <td className="py-2 px-2 sm:px-3"><Link to="/bear" className="text-pink-400 hover:underline">View</Link></td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-medium">Compass</td>
                  <td className="py-2 px-2 sm:px-3">Routing, Guards, Navigation</td>
                  <td className="py-2 px-2 sm:px-3"><Link to="/compass" className="text-pink-400 hover:underline">View</Link></td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-medium">Synapse</td>
                  <td className="py-2 px-2 sm:px-3">State, Signals, API Hooks</td>
                  <td className="py-2 px-2 sm:px-3"><Link to="/synapse" className="text-pink-400 hover:underline">View</Link></td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-medium">Forge Form</td>
                  <td className="py-2 px-2 sm:px-3">Form State, Validation</td>
                  <td className="py-2 px-2 sm:px-3"><Link to="/form" className="text-pink-400 hover:underline">View</Link></td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-medium">Forge Query</td>
                  <td className="py-2 px-2 sm:px-3">Data Fetching, Caching</td>
                  <td className="py-2 px-2 sm:px-3"><Link to="/query" className="text-pink-400 hover:underline">View</Link></td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-medium">Grid Table</td>
                  <td className="py-2 px-2 sm:px-3">Advanced Data Grids</td>
                  <td className="py-2 px-2 sm:px-3"><Link to="/table" className="text-pink-400 hover:underline">View</Link></td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-medium">Harbor</td>
                  <td className="py-2 px-2 sm:px-3">Backend Framework</td>
                  <td className="py-2 px-2 sm:px-3"><Link to="/harbor" className="text-pink-400 hover:underline">View</Link></td>
                </tr>
                <tr className="border-b border-theme-border">
                  <td className="py-2 px-2 sm:px-3 font-medium">Anvil</td>
                  <td className="py-2 px-2 sm:px-3">Utilities, Hooks, Helpers</td>
                  <td className="py-2 px-2 sm:px-3"><Link to="/anvil" className="text-pink-400 hover:underline">View</Link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Example: Full App */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-theme-primary">Example: Building a Users Page</h2>
          <p className="text-theme-muted mb-4 text-sm sm:text-base">
            Here's how ForgeStack packages work together:
          </p>
          <CodeBlock
            language="typescript"
            code={`// src/pages/Users/Users.tsx
import { useQuery, useMutation } from '@forgedevstack/synapse';
import { GridTable } from '@forgedevstack/grid-table';
import { Button, Card, Flex, Text } from '@forgedevstack/bear';
import { useNavigate } from '@forgedevstack/compass';
import { FormProvider, useForm, useField } from '@forgedevstack/forge-form';
import { formatDate } from '@forgedevstack/anvil';

// Fetch users with Synapse
const { data: users, isLoading, refetch } = useQuery<User[]>({
  key: ['users'],
  fn: () => fetch('/api/users').then(r => r.json()),
});

// Mutation for creating users
const { mutate: createUser } = useMutation({
  fn: (user: NewUser) => fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
  }),
  onSuccess: () => refetch(),
});

return (
  <Card padding="lg">
    <Flex justify="space-between" align="center" mb="md">
      <Text variant="h2">Users</Text>
      <Button onClick={() => setShowForm(true)}>Add User</Button>
    </Flex>
    
    <GridTable
      data={users || []}
      columns={[
        { key: 'name', header: 'Name' },
        { key: 'email', header: 'Email' },
        { 
          key: 'createdAt', 
          header: 'Created',
          render: (v) => formatDate(v) 
        },
      ]}
      loading={isLoading}
      pagination
      searchable
    />
  </Card>
);`}
          />
        </section>

        {/* Roadmap */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-theme-primary">Coming Soon</h2>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              { title: 'Forge Test', desc: 'Testing utilities & mocks', status: 'In Progress' },
              { title: 'Forge i18n', desc: 'Internationalization', status: 'Planned' },
              { title: 'Forge Auth', desc: 'Authentication flows', status: 'Planned' },
              { title: 'Visual Studio Code Extension', desc: 'IntelliSense & snippets', status: 'Planned' },
            ].map((item) => (
              <div key={item.title} className="p-3 sm:p-4 rounded-lg bg-theme-secondary border border-theme-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-theme-primary text-sm sm:text-base">{item.title}</span>
                  <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded ${
                    item.status === 'In Progress' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-amber-500/20 text-amber-400'
                  }`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-theme-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Get Help */}
        <section className="pb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-theme-primary">Get Help</h2>
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            <a
              href="https://github.com/yaghobieh/ForgeStack"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-theme-secondary border border-theme-border hover:border-pink-500/30 transition-colors text-center"
            >
              <div className="text-2xl mb-2">⭐</div>
              <div className="font-medium text-theme-primary text-sm">GitHub</div>
              <div className="text-xs text-theme-muted">Star & Contribute</div>
            </a>
            <a
              href="https://github.com/yaghobieh/ForgeStack/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-theme-secondary border border-theme-border hover:border-pink-500/30 transition-colors text-center"
            >
              <div className="text-2xl mb-2">🐛</div>
              <div className="font-medium text-theme-primary text-sm">Issues</div>
              <div className="text-xs text-theme-muted">Report Bugs</div>
            </a>
            <a
              href="https://github.com/yaghobieh/ForgeStack/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg bg-theme-secondary border border-theme-border hover:border-pink-500/30 transition-colors text-center"
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="font-medium text-theme-primary text-sm">Discussions</div>
              <div className="text-xs text-theme-muted">Ask Questions</div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
