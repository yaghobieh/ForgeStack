import { FC } from 'react';
import { Link } from 'react-router-dom';

const TEMPLATES = [
  { id: 'react', name: 'React', description: 'Vite + React 18 + Bear UI, Compass, Synapse. Optional Grid Table & Forge Query.', command: 'npx create-forge my-app --template react' },
  { id: 'portal', name: 'Portal', description: 'Docs/demos UI — Bear + Compass, Navbar & Footer, theme builder, changelog.', command: 'npx create-forge my-portal --template portal' },
  { id: 'server', name: 'Server', description: 'Node.js API — Harbor or Express, REST or WebSockets.', command: 'npx create-forge my-api --template server' },
  { id: 'fullstack', name: 'Full-Stack', description: 'Monorepo with React frontend and Node server.', command: 'npx create-forge my-project --template fullstack' },
];

export const Templates: FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-12">
    <h1 className="text-4xl font-bold text-theme-primary mb-4">Templates</h1>
    <p className="text-lg text-theme-muted mb-8">
      Start fast with ForgeStack CLI templates. Pick React, Portal, Server, or Full-Stack and get a production-ready setup in seconds.
    </p>
    <div className="grid gap-6 md:grid-cols-2">
      {TEMPLATES.map((t) => (
        <div
          key={t.id}
          className="p-6 rounded-xl border border-theme-border bg-theme-secondary hover:border-forge-500/50 transition-all"
        >
          <h3 className="text-xl font-semibold text-theme-primary mb-2">{t.name}</h3>
          <p className="text-theme-muted text-sm mb-4">{t.description}</p>
          <code className="block px-4 py-2 rounded-lg bg-theme-tertiary text-forge-400 text-sm font-mono overflow-x-auto">
            {t.command}
          </code>
        </div>
      ))}
    </div>
    <div className="mt-10">
      <Link
        to="/cli"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-forge-600 hover:bg-forge-500 text-white font-medium transition-colors"
      >
        CLI docs →
      </Link>
    </div>
  </div>
);
