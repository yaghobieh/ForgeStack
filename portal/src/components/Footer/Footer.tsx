import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { PACKAGES } from '@/constants';

export const Footer: FC = () => {
  return (
    <footer className="bg-theme-secondary border-t border-theme-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">

          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <Logo size={40} />
              <span className="text-xl font-bold text-theme-primary">ForgeStack</span>
            </Link>
            <p className="text-theme-muted text-sm">
              Modern Developer Tools for Building Better Applications
            </p>
          </div>


          <div>
            <h4 className="font-semibold text-theme-primary mb-4">Packages</h4>
            <ul className="space-y-2">
              {PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <Link
                    to={pkg.status === 'ready' ? `/${pkg.id}/docs/quick-start` : '#'}
                    className={`text-sm transition-colors ${
                      pkg.status === 'ready'
                        ? 'text-theme-muted hover:text-theme-primary'
                        : 'text-theme-muted/50 cursor-not-allowed'
                    }`}
                  >
                    {pkg.name}
                    {pkg.status !== 'ready' && (
                      <span className="ml-2 text-xs opacity-60">
                        {pkg.status === 'coming-soon' ? '(Soon)' : '(Planned)'}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="font-semibold text-theme-primary mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/yaghobieh/ForgeStack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-theme-muted hover:text-theme-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/org/forgestack"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-theme-muted hover:text-theme-primary transition-colors"
                >
                  npm
                </a>
              </li>
              <li>
                <Link
                  to="/harbor/docs/quick-start"
                  className="text-sm text-theme-muted hover:text-theme-primary transition-colors"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="font-semibold text-theme-primary mb-4">Community</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/yaghobieh/ForgeStack/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-theme-muted hover:text-theme-primary transition-colors"
                >
                  Issues
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/yaghobieh/ForgeStack/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-theme-muted hover:text-theme-primary transition-colors"
                >
                  Discussions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-theme-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-theme-muted">
            © {new Date().getFullYear()} ForgeStack. MIT License.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/yaghobieh/ForgeStack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-muted hover:text-theme-primary transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
