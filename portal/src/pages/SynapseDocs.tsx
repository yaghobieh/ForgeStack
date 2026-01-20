import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SYNAPSE_NAV_ITEMS, SYNAPSE_COLOR } from '../constants/synapse-docs.const';
import { SynapseIcon } from '../components/Icons';
import { MobileDocsNav } from '../components/MobileDocsNav';

// Navigation component - exported for reuse
export const SynapseDocsNav: FC = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-20 w-56 shrink-0 hidden xl:block">
      <div className="flex items-center gap-2 px-3 mb-4">
        <SynapseIcon size={28} />
        <span className="font-semibold" style={{ color: SYNAPSE_COLOR }}>Synapse</span>
        <span 
          className="text-xs px-2 py-0.5 rounded"
          style={{ backgroundColor: `${SYNAPSE_COLOR}20`, color: SYNAPSE_COLOR }}
        >
          v1.0.0
        </span>
      </div>

      <div className="space-y-1">
        {SYNAPSE_NAV_ITEMS.map((item) => {
          const path = `/synapse${item.path ? `/${item.path}` : ''}`;
          const isActive = item.exact
            ? location.pathname === '/synapse' || location.pathname === '/synapse/'
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
              style={isActive ? { backgroundColor: `${SYNAPSE_COLOR}20`, color: SYNAPSE_COLOR } : undefined}
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
export const SynapseDocsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 px-4 sm:px-6 py-4 sm:py-8 max-w-7xl mx-auto">
      {/* Mobile Navigation */}
      <MobileDocsNav
        items={SYNAPSE_NAV_ITEMS}
        basePath="/synapse"
        color={SYNAPSE_COLOR}
        title="Synapse"
        icon={<SynapseIcon size={20} />}
      />
      
      {/* Desktop Navigation */}
      <SynapseDocsNav />
      
      {/* Content */}
      <div className="flex-1 min-w-0 max-w-4xl">
        {children}
      </div>
    </div>
  );
};

// Re-export for convenience
export { SynapseDocContent } from '../components/SynapseDocContent';
export { SYNAPSE_NAV_ITEMS, SYNAPSE_COLOR } from '../constants/synapse-docs.const';
