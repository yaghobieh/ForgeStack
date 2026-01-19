import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { VersionDropdown } from '../components/VersionDropdown';

// Harbor brand color
const HARBOR_COLOR = '#0066cc';

// Navigation structure - exported for use elsewhere
export interface HarborNavSection {
  title: string;
  path: string;
}

export interface HarborNavGroup {
  title: string;
  sections: HarborNavSection[];
}

export const HARBOR_NAV: HarborNavGroup[] = [
  {
    title: 'Getting Started',
    sections: [
      { title: 'Quick Start', path: 'quick-start' },
      { title: 'Installation', path: 'installation' },
      { title: 'Project Templates', path: 'templates' },
    ],
  },
  {
    title: 'Core',
    sections: [
      { title: 'Server', path: 'server' },
      { title: 'Routes', path: 'routes' },
      { title: 'Configuration', path: 'config' },
    ],
  },
  {
    title: 'Database',
    sections: [
      { title: 'MongoDB ODM', path: 'database' },
      { title: 'Validation', path: 'validation' },
    ],
  },
  {
    title: 'Features',
    sections: [
      { title: 'WebSocket', path: 'websocket' },
      { title: 'Scheduler', path: 'scheduler' },
      { title: 'Rate Limiting', path: 'rate-limit' },
      { title: 'Health Checks', path: 'health' },
      { title: 'Metrics', path: 'metrics' },
      { title: 'File Uploads', path: 'upload' },
      { title: 'Caching', path: 'cache' },
      { title: 'Authentication', path: 'auth' },
    ],
  },
  {
    title: 'Utilities',
    sections: [
      { title: 'HTTP Logger', path: 'logger' },
      { title: 'Docker', path: 'docker' },
      { title: 'i18n', path: 'i18n' },
    ],
  },
];

// Navigation component - exported for reuse
export const HarborDocsNav: FC = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-20 w-56 shrink-0 hidden xl:block space-y-6">
      <div className="flex items-center gap-2 px-3 mb-4">
        <span className="text-2xl">⚓</span>
        <span className="font-semibold" style={{ color: HARBOR_COLOR }}>Harbor</span>
        <VersionDropdown />
      </div>

      {HARBOR_NAV.map((group) => (
        <div key={group.title}>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-theme-muted mb-2 px-3">
            {group.title}
          </h4>
          <div className="space-y-1">
            {group.sections.map((section) => {
              const fullPath = `/harbor/docs/${section.path}`;
              const isActive = location.pathname === fullPath || 
                location.pathname.startsWith(`${fullPath}/`);

              return (
                <NavLink
                  key={section.path}
                  to={fullPath}
                  className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive
                      ? 'font-medium'
                      : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary'
                  }`}
                  style={isActive ? { backgroundColor: `${HARBOR_COLOR}20`, color: HARBOR_COLOR } : undefined}
                >
                  {section.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
};

// Layout wrapper - exported for use in App.tsx
export const HarborDocsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex gap-8 px-6 py-8 max-w-7xl mx-auto">
      <HarborDocsNav />
      <div className="flex-1 min-w-0 max-w-4xl">
        {children}
      </div>
    </div>
  );
};

// Re-export DocContent for convenience
export { DocContent } from '../components/DocContent';
