import { FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
  exact?: boolean;
}

interface MobileDocsNavProps {
  items: NavItem[];
  basePath: string;
  color: string;
  title: string;
  icon?: React.ReactNode;
}

export const MobileDocsNav: FC<MobileDocsNavProps> = ({ items, basePath, color, title, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Find current page title
  const currentItem = items.find((item) => {
    const fullPath = `${basePath}${item.path ? `/${item.path}` : ''}`;
    return item.exact 
      ? location.pathname === fullPath 
      : location.pathname === fullPath || location.pathname.startsWith(`${fullPath}/`);
  });

  return (
    <div className="xl:hidden mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-theme-border bg-theme-secondary"
      >
        <div className="flex items-center gap-3">
          {icon && <span className="flex-shrink-0">{icon}</span>}
          <div className="text-left">
            <div className="text-xs text-theme-muted">{title}</div>
            <div className="font-medium text-theme-primary" style={{ color }}>
              {currentItem?.label || 'Overview'}
            </div>
          </div>
        </div>
        <svg 
          className={`w-5 h-5 text-theme-muted transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 rounded-lg border border-theme-border bg-theme-secondary overflow-hidden max-h-64 overflow-y-auto">
          {items.map((item) => {
            const fullPath = `${basePath}${item.path ? `/${item.path}` : ''}`;
            const isActive = item.exact
              ? location.pathname === fullPath
              : location.pathname === fullPath || location.pathname.startsWith(`${fullPath}/`);

            return (
              <NavLink
                key={item.path || 'index'}
                to={fullPath}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 text-sm border-b border-theme-border last:border-b-0 transition-colors ${
                  isActive
                    ? 'font-medium'
                    : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary'
                }`}
                style={isActive ? { backgroundColor: `${color}20`, color } : undefined}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

