import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TABLE_NAV_ITEMS, TABLE_COLOR } from '../constants/table-docs.const';
import { MobileDocsNav } from '../components/MobileDocsNav';

// Navigation component - exported for reuse
export const TableDocsNav: FC = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-20 w-56 shrink-0 hidden xl:block">
      <div className="flex items-center gap-2 px-3 mb-4">
        <span className="text-2xl">📊</span>
        <span className="font-semibold" style={{ color: TABLE_COLOR }}>Grid Table</span>
        <span 
          className="text-xs px-2 py-0.5 rounded"
          style={{ backgroundColor: `${TABLE_COLOR}20`, color: TABLE_COLOR }}
        >
          v1.0.6
        </span>
      </div>

      <div className="space-y-1">
        {TABLE_NAV_ITEMS.map((item) => {
          const path = `/table${item.path ? `/${item.path}` : ''}`;
          const isActive = item.exact
            ? location.pathname === '/table' || location.pathname === '/table/'
            : location.pathname === path;

          return (
            <NavLink
              key={item.path}
              to={path}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'font-medium'
                  : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-hover'
              }`}
              style={isActive ? { backgroundColor: `${TABLE_COLOR}20`, color: TABLE_COLOR } : undefined}
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

// Layout wrapper - exported for use in App.tsx
export const TableDocsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 px-4 sm:px-6 py-4 sm:py-8 max-w-7xl mx-auto">
      <MobileDocsNav
        items={TABLE_NAV_ITEMS}
        basePath="/table"
        color={TABLE_COLOR}
        title="Grid Table"
        icon={<span className="text-lg">📊</span>}
      />
      
      <TableDocsNav />
      
      <div className="flex-1 min-w-0 max-w-4xl">
        {children}
      </div>
    </div>
  );
};

// Re-export for convenience
export { TableDocContent } from '../components/TableDocContent';
export { TABLE_NAV_ITEMS, TABLE_COLOR } from '../constants/table-docs.const';
