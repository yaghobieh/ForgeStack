import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { BEAR_NAV, BEAR_COLOR } from '../constants/bear-docs.const';
import { MobileDocsNav } from '../components/MobileDocsNav';
import { useNpmVersions } from '../hooks';

// Bear Logo - Full body Lotso-style pink teddy bear with angry eyebrows
// Using solid colors for better small-size rendering
export const BearIcon: FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <ellipse cx="50" cy="72" rx="26" ry="20" fill="#db2777" />
    <ellipse cx="50" cy="73" rx="16" ry="12" fill="#fde68a" />
    
    <ellipse cx="32" cy="88" rx="12" ry="9" fill="#db2777" />
    <ellipse cx="32" cy="89" rx="8" ry="6" fill="#fde68a" />
    <ellipse cx="68" cy="88" rx="12" ry="9" fill="#db2777" />
    <ellipse cx="68" cy="89" rx="8" ry="6" fill="#fde68a" />
    
    <ellipse cx="24" cy="68" rx="8" ry="12" fill="#db2777" transform="rotate(-15 24 68)" />
    <ellipse cx="76" cy="68" rx="8" ry="12" fill="#db2777" transform="rotate(15 76 68)" />
    
    <ellipse cx="50" cy="36" rx="26" ry="24" fill="#db2777" />
    
    <ellipse cx="28" cy="16" rx="10" ry="10" fill="#db2777" />
    <ellipse cx="28" cy="16" rx="6" ry="6" fill="#fcd34d" />
    <ellipse cx="72" cy="16" rx="10" ry="10" fill="#db2777" />
    <ellipse cx="72" cy="16" rx="6" ry="6" fill="#fcd34d" />
    
    <ellipse cx="50" cy="44" rx="14" ry="10" fill="#fde68a" />
    
    <ellipse cx="50" cy="40" rx="6" ry="4" fill="#7c3aed" />
    
    <path d="M32 24 Q38 21 44 25" stroke="#581c87" strokeWidth="3" strokeLinecap="round" fill="none" />
    <path d="M68 24 Q62 21 56 25" stroke="#581c87" strokeWidth="3" strokeLinecap="round" fill="none" />
    
    <ellipse cx="38" cy="32" rx="6" ry="7" fill="#ffffff" />
    <ellipse cx="39" cy="33" rx="4" ry="5" fill="#78350f" />
    <ellipse cx="40" cy="33" rx="2" ry="2.5" fill="#1c1917" />
    <ellipse cx="37" cy="31" rx="1.5" ry="1.5" fill="#ffffff" />
    
    <ellipse cx="62" cy="32" rx="6" ry="7" fill="#ffffff" />
    <ellipse cx="61" cy="33" rx="4" ry="5" fill="#78350f" />
    <ellipse cx="60" cy="33" rx="2" ry="2.5" fill="#1c1917" />
    <ellipse cx="63" cy="31" rx="1.5" ry="1.5" fill="#ffffff" />
    
    <path d="M44 48 Q50 46 56 48" stroke="#9d174d" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

// Navigation component - Fixed position with internal scroll
export const BearDocsNav: FC = () => {
  const location = useLocation();
  const { bear } = useNpmVersions();
  const version = bear ?? '1.0.6';

  return (
    <nav className="fixed top-20 w-56 shrink-0 hidden xl:block" style={{ height: 'calc(100vh - 5rem)' }}>
      <div className="h-full flex flex-col">
        <div className="flex flex-wrap items-center gap-2 px-3 pb-4 flex-shrink-0">
          <a 
            href="https://bearui.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs px-2 py-0.5 rounded transition-all hover:scale-105 font-medium"
            style={{ backgroundColor: BEAR_COLOR, color: '#fff' }}
          >
            bearui.com →
          </a>
          <BearIcon size={28} />
          <span className="font-semibold" style={{ color: BEAR_COLOR }}>Bear</span>
          <span 
            className="text-xs px-2 py-0.5 rounded font-medium"
            style={{ backgroundColor: `${BEAR_COLOR}20`, color: BEAR_COLOR }}
          >
            v{version}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto space-y-1 pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {BEAR_NAV.map((item) => {
            const path = `/bear${item.path ? `/${item.path}` : ''}`;
            const isActive = item.exact
              ? location.pathname === '/bear' || location.pathname === '/bear/'
              : location.pathname === path;

            return (
              <NavLink
                key={item.path || 'overview'}
                to={path}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'font-medium'
                    : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary'
                }`}
                style={isActive ? { backgroundColor: `${BEAR_COLOR}20`, color: BEAR_COLOR } : undefined}
              >
                <span>{item.label}</span>
                {item.isNew && (
                  <span 
                    className="text-[10px] px-1.5 py-0.5 rounded-full font-semibold animate-pulse shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${BEAR_COLOR}, #f472b6)`,
                      color: '#fff',
                      boxShadow: `0 0 8px ${BEAR_COLOR}60`
                    }}
                  >
                    NEW
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

// Layout wrapper
export const BearDocsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { bear } = useNpmVersions();
  const version = bear ?? '1.0.6';

  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 px-4 sm:px-6 py-4 sm:py-8 max-w-7xl mx-auto">
      <div className="xl:hidden mb-2 flex items-center gap-2 flex-wrap">
        <a 
          href="https://bearui.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-xs px-2 py-1 rounded font-medium"
          style={{ backgroundColor: BEAR_COLOR, color: '#fff' }}
        >
          bearui.com →
        </a>
        <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: `${BEAR_COLOR}20`, color: BEAR_COLOR }}>
          v{version}
        </span>
      </div>
      <MobileDocsNav
        items={BEAR_NAV}
        basePath="/bear"
        color={BEAR_COLOR}
        title="Bear"
        icon={<BearIcon size={20} />}
      />
      
      <BearDocsNav />
      
      <div className="hidden xl:block w-56 flex-shrink-0" />
      
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
};

export const BearDocs: FC = () => {
  return (
    <BearDocsLayout>
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-theme-primary">Bear UI</h1>
        <p className="text-theme-secondary mt-2">Documentation coming soon...</p>
      </div>
    </BearDocsLayout>
  );
};
