import { FC } from 'react';
import { Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom';
import { AnvilDocContent } from '../components/AnvilDocContent';
import { ANVIL_NAV } from '../constants/anvil-docs.const';

// Anvil brand color - Pink
const ANVIL_COLOR = '#EC4899';

// Anvil Logo - Curly braces with wrench (functions + helpers)
export const AnvilIcon: FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <defs>
      <linearGradient id="anvilPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F472B6"/>
        <stop offset="50%" stopColor="#EC4899"/>
        <stop offset="100%" stopColor="#DB2777"/>
      </linearGradient>
      <linearGradient id="anvilAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDA4AF"/>
        <stop offset="100%" stopColor="#FB7185"/>
      </linearGradient>
    </defs>
    {/* Left curly brace */}
    <path 
      d="M25 25 Q15 25 15 35 L15 42 Q15 50 10 50 Q15 50 15 58 L15 65 Q15 75 25 75" 
      stroke="url(#anvilPinkGrad)" 
      strokeWidth="5" 
      strokeLinecap="round"
      fill="none"
    />
    {/* Right curly brace */}
    <path 
      d="M75 25 Q85 25 85 35 L85 42 Q85 50 90 50 Q85 50 85 58 L85 65 Q85 75 75 75" 
      stroke="url(#anvilPinkGrad)" 
      strokeWidth="5" 
      strokeLinecap="round"
      fill="none"
    />
    {/* Wrench/Tool in center */}
    <g transform="translate(50, 50) rotate(-45)">
      <path d="M-8 -20 L-4 -12 L4 -12 L8 -20 L4 -22 L-4 -22 Z" fill="url(#anvilAccent)"/>
      <rect x="-3" y="-12" width="6" height="24" rx="2" fill="url(#anvilPinkGrad)"/>
      <circle cx="0" cy="15" r="6" fill="url(#anvilAccent)"/>
      <circle cx="0" cy="15" r="3" fill="#1a1a2e"/>
    </g>
    {/* Function dots */}
    <circle cx="35" cy="50" r="3" fill="url(#anvilAccent)"/>
    <circle cx="65" cy="50" r="3" fill="url(#anvilAccent)"/>
  </svg>
);

// Navigation component - exported for use in layout
export const AnvilDocsNav: FC = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-20 w-56 shrink-0 hidden xl:block space-y-6">
      <div className="flex items-center gap-2 px-3 mb-4">
        <AnvilIcon size={24} />
        <span className="font-semibold" style={{ color: ANVIL_COLOR }}>Anvil</span>
      </div>

      <div className="space-y-1">
        {ANVIL_NAV.map((item) => {
          const fullPath = `/anvil${item.path ? `/${item.path}` : ''}`;
          const isActive = item.exact
            ? location.pathname === fullPath
            : location.pathname === fullPath || location.pathname.startsWith(`${fullPath}/`);

          return (
            <NavLink
              key={item.path || 'overview'}
              to={fullPath}
              className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'font-medium'
                  : 'text-theme-secondary hover:text-theme-primary hover:bg-theme-tertiary'
              }`}
              style={isActive ? { backgroundColor: `${ANVIL_COLOR}20`, color: ANVIL_COLOR } : undefined}
            >
              {item.label}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

// Layout wrapper for Anvil docs pages
export const AnvilDocsLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex gap-8 px-6 py-8 max-w-7xl mx-auto">
      <AnvilDocsNav />
      <div className="flex-1 min-w-0 max-w-4xl">
        {children}
      </div>
    </div>
  );
};

// Main Anvil Docs component with routes
export const AnvilDocs: FC = () => {
  return (
    <AnvilDocsLayout>
      <Routes>
        {/* All Anvil doc routes */}
        <Route index element={<AnvilDocContent page="overview" />} />
        <Route path="installation" element={<AnvilDocContent page="installation" />} />
        <Route path="style-forge" element={<AnvilDocContent page="style-forge" />} />
        <Route path="type-guards" element={<AnvilDocContent page="type-guards" />} />
        <Route path="array" element={<AnvilDocContent page="array" />} />
        <Route path="object" element={<AnvilDocContent page="object" />} />
        <Route path="string" element={<AnvilDocContent page="string" />} />
        <Route path="function" element={<AnvilDocContent page="function" />} />
        <Route path="clone" element={<AnvilDocContent page="clone" />} />
        <Route path="react-hooks" element={<AnvilDocContent page="react-hooks" />} />
        <Route path="vue-composables" element={<AnvilDocContent page="vue-composables" />} />
        <Route path="types" element={<AnvilDocContent page="types" />} />
        <Route path="api" element={<AnvilDocContent page="api" />} />
        
        {/* Redirect old cn route to style-forge */}
        <Route path="cn" element={<Navigate to="/anvil/style-forge" replace />} />
        
        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/anvil" replace />} />
      </Routes>
    </AnvilDocsLayout>
  );
};

export default AnvilDocs;
