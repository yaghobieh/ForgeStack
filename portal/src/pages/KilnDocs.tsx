import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { KILN_NAV, KILN_COLOR } from '../constants/kiln-docs.const';
import { MobileDocsNav } from '../components/MobileDocsNav';

// Kiln Logo - Furnace with flame
export const KilnIcon: FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="kilnIconGrad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#78350f" />
        <stop offset="50%" stopColor="#b45309" />
        <stop offset="100%" stopColor="#f59e0b" />
      </linearGradient>
      <linearGradient id="kilnFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#ef4444" />
        <stop offset="50%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>
    {/* Background */}
    <rect x="5" y="5" width="90" height="90" rx="15" fill="#1a1a2e" />
    {/* Kiln body - arch shape */}
    <path
      d="M20 75 L20 40 Q20 20 50 20 Q80 20 80 40 L80 75 Z"
      fill="url(#kilnIconGrad)"
      stroke="#92400e"
      strokeWidth="2"
    />
    {/* Kiln opening */}
    <path
      d="M30 75 L30 50 Q30 35 50 35 Q70 35 70 50 L70 75 Z"
      fill="#18181b"
    />
    {/* Fire/flame */}
    <path
      d="M50 70 Q40 55 45 45 Q50 55 55 50 Q60 55 55 65 Q55 70 50 70 Z"
      fill="url(#kilnFlameGrad)"
    >
      <animate
        attributeName="d"
        values="M50 70 Q40 55 45 45 Q50 55 55 50 Q60 55 55 65 Q55 70 50 70 Z;
                M50 70 Q42 52 48 42 Q50 52 52 48 Q58 52 52 62 Q55 70 50 70 Z;
                M50 70 Q40 55 45 45 Q50 55 55 50 Q60 55 55 65 Q55 70 50 70 Z"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);

// Navigation component
export const KilnDocsNav: FC = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-20 w-56 shrink-0 hidden xl:block">
      <div className="flex items-center gap-2 px-3 mb-4">
        <KilnIcon size={28} />
        <span className="font-semibold" style={{ color: KILN_COLOR }}>Kiln</span>
        <span 
          className="text-xs px-2 py-0.5 rounded"
          style={{ backgroundColor: `${KILN_COLOR}20`, color: KILN_COLOR }}
        >
          v0.1.0
        </span>
      </div>

      <div className="space-y-1">
        {KILN_NAV.map((item) => {
          const path = `/kiln${item.path ? `/${item.path}` : ''}`;
          const isActive = item.exact
            ? location.pathname === '/kiln' || location.pathname === '/kiln/'
            : location.pathname === path;

          return (
            <NavLink
              key={item.path || 'overview'}
              to={path}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'font-medium'
                  : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary'
              }`}
              style={isActive ? { backgroundColor: `${KILN_COLOR}20`, color: KILN_COLOR } : undefined}
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

// Layout wrapper
export const KilnDocsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-8 px-4 sm:px-6 py-4 sm:py-8 max-w-7xl mx-auto">
      {/* Mobile Navigation */}
      <MobileDocsNav
        items={KILN_NAV}
        basePath="/kiln"
        color={KILN_COLOR}
        title="Kiln"
        icon={<KilnIcon size={20} />}
      />
      
      {/* Desktop Navigation */}
      <KilnDocsNav />
      
      {/* Content */}
      <div className="flex-1 min-w-0 max-w-4xl">
        {children}
      </div>
    </div>
  );
};

// Re-export for convenience
export { KilnDocContent } from '../components/KilnDocContent';
export { KILN_NAV, KILN_COLOR } from '../constants/kiln-docs.const';

