import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { AUTHOR } from '@/constants';
// Use AUTHOR.linkedin and AUTHOR.github for profile links (no separate URL constants).

const BEAR_UI_URL = 'https://bearui.com';
const FORGESTACK_GITHUB_URL = 'https://github.com/yaghobieh/ForgeStack';
const CLI_NPM_URL = 'https://www.npmjs.com/package/@forgedevstack/cli';
const LINTFORGE_VSX_URL = 'https://open-vsx.org/extension/Yaghobieh/lintforge';
const TEMPLATES_PATH = '/templates';

const TeamMemberCard: FC = () => {
  const [imgError, setImgError] = useState(false);
  const showImage = AUTHOR.imageUrl && !imgError;

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-theme-primary mb-6">Our team</h2>
      <div className="group flex flex-col items-center w-full max-w-[220px] mx-auto">
        <div className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0 border-2 border-theme-border bg-theme-tertiary mb-3">
          {showImage ? (
            <img
              src={AUTHOR.imageUrl}
              alt={AUTHOR.name}
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="w-full h-full flex items-center justify-center text-2xl font-semibold text-forge-400">
              JY
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-theme-primary text-center mb-0.5">{AUTHOR.name}</h3>
        <p className="text-xs text-theme-muted text-center mb-2">{AUTHOR.role}</p>
        <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-[max-height,opacity] duration-300 ease-out w-full">
          <p className="text-theme-muted text-xs text-center px-2 mb-3">{AUTHOR.bio}</p>
        </div>
        <div className="flex gap-4 justify-center">
          <a
            href={AUTHOR.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forge-400 hover:text-forge-300 font-medium text-sm"
          >
            LinkedIn
          </a>
          <a
            href={AUTHOR.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-forge-400 hover:text-forge-300 font-medium text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export const AboutUs: FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-12">
    <h1 className="text-4xl font-bold text-theme-primary mb-4">About Us</h1>
    <p className="text-lg text-theme-muted mb-10">
      ForgeStack exists to give developers a coherent, type-safe set of tools—from backend and state to UI and scaffolding. We built it because we wanted one stack that plays well together, with less config and more consistency. Everything is open source and built for the long run.
    </p>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-theme-primary mb-4">Why we built ForgeStack</h2>
      <p className="text-theme-muted mb-4">
        We were tired of gluing unrelated libraries, each with its own conventions and breaking changes. We wanted a single ecosystem where the backend, the router, the state layer, and the UI share the same philosophy: <strong className="text-theme-primary">type-safe, simple API, minimal config, and great DX</strong>. So we started building it—first the UI (Bear), then the backend (Harbor), then state (Synapse), and the CLI to tie it all together.
      </p>
      <p className="text-theme-muted">
        Every part is designed to work on its own or together. You can use Bear in any React app; you can use Harbor without Bear. When you use them together, you get a consistent experience and fewer surprises.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-2xl font-semibold text-theme-primary mb-4">What we build</h2>
      <p className="text-theme-muted mb-6">
        Each piece has a clear role. Here’s what we offer and why it exists—with links so you can dive in.
      </p>
      <ul className="space-y-6">
        <li className="p-4 rounded-xl border border-theme-border bg-theme-secondary">
          <h3 className="font-semibold text-theme-primary mb-1">
            <a href={BEAR_UI_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 underline">Bear UI</a>
          </h3>
          <p className="text-theme-muted text-sm mb-2">
            React component library (50+ components) with Tailwind, dark mode, and full TypeScript. Buttons, forms, modals, data tables, code editors, and more. We built it so you can ship UIs fast without fighting design systems or outdated docs.
          </p>
          <a href={BEAR_UI_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 text-sm font-medium">Browse components →</a>
        </li>
        <li className="p-4 rounded-xl border border-theme-border bg-theme-secondary">
          <h3 className="font-semibold text-theme-primary mb-1">Harbor</h3>
          <p className="text-theme-muted text-sm mb-2">
            Node.js backend framework with MongoDB ODM, route management, and Docker support. Simple API: define routes and handlers without boilerplate. We built it for apps that need a fast, typed backend without the weight of a full meta-framework.
          </p>
          <a href={FORGESTACK_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 text-sm font-medium">Repo & docs →</a>
        </li>
        <li className="p-4 rounded-xl border border-theme-border bg-theme-secondary">
          <h3 className="font-semibold text-theme-primary mb-1">Synapse</h3>
          <p className="text-theme-muted text-sm mb-2">
            State management with Redux-like patterns and a focus on simplicity. We built it so you get predictable state without the boilerplate of classic Redux, and it fits naturally with Bear and Compass.
          </p>
          <a href={FORGESTACK_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 text-sm font-medium">Repo →</a>
        </li>
        <li className="p-4 rounded-xl border border-theme-border bg-theme-secondary">
          <h3 className="font-semibold text-theme-primary mb-1">
            <a href={CLI_NPM_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 underline">ForgeStack CLI</a>
          </h3>
          <p className="text-theme-muted text-sm mb-2">
            Create React projects with Bear, Compass, Synapse and more in seconds. Use templates to start fast: <code className="bg-theme-bg px-1 rounded">npx @forgedevstack/forge-cli my-app --template react</code>. We built it so you don’t waste time on initial setup.
          </p>
          <Link to={TEMPLATES_PATH} className="text-forge-400 hover:text-forge-300 text-sm font-medium">Templates on this site →</Link>
          {' · '}
          <a href={CLI_NPM_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 text-sm font-medium">npm</a>
        </li>
        <li className="p-4 rounded-xl border border-theme-border bg-theme-secondary">
          <h3 className="font-semibold text-theme-primary mb-1">
            <a href={LINTFORGE_VSX_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 underline">LintForge</a>
          </h3>
          <p className="text-theme-muted text-sm mb-2">
            VS Code / Open VS X extension for ForgeStack projects. Linting and tooling where you code. We built it so the ecosystem feels first-class inside the editor.
          </p>
          <a href={LINTFORGE_VSX_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 text-sm font-medium">Open VSX →</a>
        </li>
      </ul>
    </section>

    <TeamMemberCard />

    <section>
      <p className="text-theme-muted text-sm">
        ForgeStack and Bear are open source. Contributions and feedback welcome on <a href={FORGESTACK_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 underline">GitHub</a>.
      </p>
    </section>
  </div>
);
