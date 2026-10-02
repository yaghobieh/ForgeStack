import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AUTHOR } from '@/constants/author.const';
import { useCatalog } from '@/catalog/CatalogContext';
import { Mark } from './Mark';

export const SiteFooter: FC = () => {
  const { catalog } = useCatalog();
  const libs = (catalog?.libraries ?? []).slice(0, 8);

  return (
    <footer className="fs-foot">
      <div className="fs-foot-grid">
        <div>
          <Link to="/" className="fs-brand">
            <Mark size={36} />
            <span>ForgeStack</span>
          </Link>
          <p className="tag">The open source application stack for the web.</p>
        </div>
        <div>
          <h3>Libraries</h3>
          {libs.map((item) => (
            <Link key={item.id} to={`/libraries/${item.id}`}>{item.name}</Link>
          ))}
          <Link to="/libraries">Browse all</Link>
        </div>
        <div>
          <h3>Blog</h3>
          <span className="dead">Paused</span>
        </div>
        <div>
          <h3>Community</h3>
          <Link to="/community">Community</Link>
          <a href="https://discord.gg/forgestack" target="_blank" rel="noreferrer">Discord</a>
          <a href="https://github.com/yaghobieh" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div>
          <h3>Tools</h3>
          <Link to="/libraries/cli">Forge CLI</Link>
          <Link to="/libraries/gitforge">GitForge</Link>
          <Link to="/libraries/lintforge">LintForge</Link>
        </div>
        <div>
          <h3>Support</h3>
          <Link to="/support/connect">Connect us</Link>
          <Link to="/support/agenda">Agenda</Link>
          <Link to="/support/career">Career</Link>
          <a href={AUTHOR.linkedin} target="_blank" rel="noreferrer">John Yaghobieh</a>
        </div>
      </div>
      <div className="fs-foot-bar">
        <div>
          © {new Date().getFullYear()} ForgeStack ·{' '}
          <a href={AUTHOR.linkedin} target="_blank" rel="noreferrer">{AUTHOR.name}</a>
        </div>
        <nav aria-label="Legal and social">
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
          <a href="https://github.com/yaghobieh" aria-label="GitHub" target="_blank" rel="noreferrer">Git</a>
          <a href="https://www.npmjs.com/org/forgedevstack" aria-label="npm" target="_blank" rel="noreferrer">npm</a>
          <a href={AUTHOR.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">in</a>
        </nav>
      </div>
    </footer>
  );
};
