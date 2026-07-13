import { FC, useState, useRef, useEffect } from 'react';
import { VersionDropdownProps, VersionInfo } from './types';

const VERSIONS: VersionInfo[] = [
  {
    version: '1.5.0',
    date: '2026-01-14',
    highlights: [
      'WebSocket support with rooms',
      'Job scheduler (cron)',
      'JWT & API Key authentication',
      'Rate limiting middleware',
      'Prometheus metrics',
      'File uploads (disk/memory)',
      'Caching (memory/Redis)',
      'Health checks endpoint',
    ],
  },
  {
    version: '1.4.0',
    date: '2026-01-14',
    highlights: [
      'route.get(), route.post() syntax',
      'Express-like convenience methods',
      'ForgeStack branding',
      'Package renamed to @forgedevstack/harbor',
    ],
  },
  {
    version: '1.3.0',
    date: '2026-01-13',
    highlights: [
      'Full MongoDB ODM (Mongoose replacement)',
      'Schema, Model, Query with all methods',
      'Connection management',
      'Hooks (pre, post) support',
    ],
  },
  {
    version: '1.2.0',
    date: '2026-01-12',
    highlights: [
      'Simplified router API with GET(), POST(), etc.',
      'Removed need for .build() on routes',
      'CLI for project scaffolding',
    ],
  },
  {
    version: '1.1.0',
    date: '2026-01-11',
    highlights: [
      'HTTP request logger (Morgan alternative)',
      'i18n support for translations',
      'Docker manager',
    ],
  },
  {
    version: '1.0.0',
    date: '2026-01-10',
    highlights: [
      'Initial release',
      'createServer() for quick setup',
      'Route management with pre/post functions',
      'Validation system & Error handling',
    ],
  },
];

export const VersionDropdown: FC<VersionDropdownProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentVersion = VERSIONS[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-xs px-2.5 py-1 rounded-full bg-harbor-500/20 text-harbor-500 font-medium hover:bg-harbor-500/30 transition-colors flex items-center gap-1.5"
      >
        v{currentVersion.version}
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-theme-secondary border border-theme-border rounded-xl shadow-xl z-50 overflow-hidden">
          <div className="p-3 border-b border-theme-border bg-harbor-500/10">
            <div className="text-xs text-harbor-500 uppercase tracking-wider font-semibold">Version History</div>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {VERSIONS.map((version, index) => (
              <div
                key={version.version}
                className={`p-3 border-b border-theme-border hover:bg-theme-tertiary transition-colors ${
                  index === 0 ? 'bg-harbor-500/5' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold text-theme-primary">v{version.version}</span>
                    {index === 0 && (
                      <span className="text-xs px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30">
                        Latest
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-theme-muted">{version.date}</span>
                </div>
                <ul className="text-xs text-theme-muted space-y-1">
                  {version.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-harbor-500 mt-0.5">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/yaghobieh/ForgeStack/blob/main/packages/harbor/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 text-center text-sm text-harbor-500 hover:text-harbor-400 hover:bg-theme-tertiary transition-colors border-t border-theme-border"
          >
            View full changelog →
          </a>
        </div>
      )}
    </div>
  );
};

