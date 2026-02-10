import { FC, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PACKAGES } from '@constants';
import { PACKAGE_BADGES } from '@constants/sidebar.const';
import { createPortal } from 'react-dom';
import { Badge } from '../Badge';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  if (!mounted) return null;

  const content = (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 left-0 bottom-0 w-[280px] max-w-[85vw] bg-theme-secondary z-[101] transform transition-transform duration-300 ease-out lg:hidden overflow-y-auto overscroll-contain ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div className="flex items-center justify-between p-4 border-b border-theme-border">
          <Link to="/" className="flex items-center gap-2" onClick={onClose}>
            <span className="text-xl font-bold text-theme-primary">ForgeStack</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-theme-tertiary transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5 text-theme-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          <h3 className="text-xs uppercase tracking-wider text-theme-muted font-semibold mb-3 px-2">
            Packages
          </h3>
          <nav className="space-y-0.5">
            {PACKAGES.map((pkg) => {
              const isActive = location.pathname.includes(`/${pkg.id}`);
              const badge = PACKAGE_BADGES[pkg.id];
              // CLI links directly to /cli, others use /package/docs/quick-start pattern
              const href = pkg.status === 'ready' 
                ? (pkg.id === 'cli' ? pkg.docsPath : `${pkg.docsPath}/docs/quick-start`)
                : '#';

              return (
                <Link
                  key={pkg.id}
                  to={href}
                  onClick={pkg.status === 'ready' ? onClose : (e) => e.preventDefault()}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] font-semibold transition-all ${
                    isActive
                      ? 'text-white'
                      : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary'
                  } ${pkg.status !== 'ready' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{
                    backgroundColor: isActive ? `${pkg.color}20` : undefined,
                    borderLeft: isActive ? `3px solid ${pkg.color}` : '3px solid transparent',
                  }}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: pkg.color }}
                    />
                    <span className="truncate">{pkg.name}</span>
                  </div>
                  {badge && <Badge variant={badge} />}
                  {pkg.status !== 'ready' && !badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-theme-tertiary text-theme-muted flex-shrink-0">
                      Soon
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-theme-border mx-4" />

        <div className="p-4">
          <h3 className="text-xs uppercase tracking-wider text-theme-muted font-semibold mb-3 px-2">
            Quick Links
          </h3>
          <nav className="space-y-1">
            <Link
              to="/studio"
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                location.pathname === '/studio' ? 'text-white bg-forge-500/20' : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary'
              }`}
            >
              <span className="text-lg">🐻</span>
              About Studio
            </Link>
            <Link
              to="/showcase"
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Showcase
            </Link>
            <Link
              to="/extensions"
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              Extensions
            </Link>
            <a
              href="https://github.com/AY-Space/forgestack"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </nav>
        </div>

        <div className="p-4 mt-auto">
          <Link
            to="/harbor/docs/quick-start"
            onClick={onClose}
            className="block w-full px-4 py-3 rounded-lg bg-forge-600 hover:bg-forge-500 text-white font-medium text-center transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );

  return createPortal(content, document.body);
};

