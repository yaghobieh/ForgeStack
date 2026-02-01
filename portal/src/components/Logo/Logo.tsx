import { FC, useState } from 'react';
import { LogoProps } from './types';
import { LOGO_SIZES } from '@/constants/ui.const';
import './Logo.css';

const LIBRARIES = [
  { id: 'harbor', name: 'Harbor', color: '#0066cc', description: 'Backend Framework' },
  { id: 'compass', name: 'Compass', color: '#13c2c2', description: 'Router' },
  { id: 'synapse', name: 'Synapse', color: '#a855f7', description: 'State Management' },
  { id: 'table', name: 'Table', color: '#52c41a', description: 'Data Grid' },
  { id: 'anvil', name: 'Anvil', color: '#EC4899', description: 'Utilities' },
  { id: 'bear', name: 'Bear', color: '#d97706', description: 'UI Components' },
  { id: 'kiln', name: 'Kiln', color: '#b45309', description: 'Component Docs' },
];

export const Logo: FC<LogoProps> = ({ size = 'md', className = '', animated = true }) => {
  const pixelSize = typeof size === 'number' ? size : LOGO_SIZES[size];
  const isSmall = pixelSize < 32;
  
  return (
    <div className={`forge-logo ${animated ? 'forge-logo--animated' : ''} ${className}`} style={{ width: pixelSize, height: pixelSize }}>
      <svg
        width={pixelSize}
        height={pixelSize}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="forgeFlame" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fa8c16">
              <animate attributeName="stop-color" values="#fa8c16;#eb2f96;#722ed1;#1890ff;#fa8c16" dur="8s" repeatCount="indefinite"/>
            </stop>
            <stop offset="50%" stopColor="#eb2f96">
              <animate attributeName="stop-color" values="#eb2f96;#722ed1;#1890ff;#13c2c2;#eb2f96" dur="8s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stopColor="#722ed1">
              <animate attributeName="stop-color" values="#722ed1;#1890ff;#13c2c2;#52c41a;#722ed1" dur="8s" repeatCount="indefinite"/>
            </stop>
          </linearGradient>
          
          <linearGradient id="forgeBase" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2d2d2d"/>
            <stop offset="100%" stopColor="#1a1a1a"/>
          </linearGradient>
          
          <filter id="forgeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>
        
        <circle cx="50" cy="50" r="46" fill="url(#forgeBase)" stroke="url(#forgeFlame)" strokeWidth="1.5"/>
        
        <g className="forge-logo__flame" filter="url(#forgeGlow)">
          <path 
            d="M50 22 Q42 35 44 45 Q46 55 50 62 Q54 55 56 45 Q58 35 50 22Z" 
            fill="url(#forgeFlame)"
            className="forge-logo__flame-main"
          />
          <path 
            d="M44 32 Q38 40 40 48 Q42 52 44 50 Q46 48 44 42 Q42 36 44 32Z" 
            fill="url(#forgeFlame)" 
            opacity="0.7"
            className="forge-logo__flame-left"
          />
          <path 
            d="M56 32 Q62 40 60 48 Q58 52 56 50 Q54 48 56 42 Q58 36 56 32Z" 
            fill="url(#forgeFlame)" 
            opacity="0.7"
            className="forge-logo__flame-right"
          />
        </g>
        
        <rect x="35" y="62" width="30" height="8" rx="2" fill="url(#forgeFlame)" opacity="0.9"/>
        <rect x="30" y="70" width="40" height="10" rx="3" fill="#3d3d3d"/>
        <rect x="32" y="72" width="36" height="6" rx="2" fill="#2a2a2a"/>
        
        {!isSmall && (
          <g className="forge-logo__orbs">
            {LIBRARIES.slice(0, 6).map((lib, i) => (
              <circle 
                key={lib.id}
                className={`forge-logo__orb forge-logo__orb--${i + 1}`} 
                cx="50" 
                cy="50" 
                r={2.5} 
                fill={lib.color}
              >
                <animate attributeName="opacity" values="0.6;1;0.6" dur={`${2 + i * 0.3}s`} repeatCount="indefinite"/>
              </circle>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
};

export const LogoText: FC<{ className?: string }> = ({ className = '' }) => (
  <span className={`forge-logo-text ${className}`}>
    <span className="forge-logo-text__forge">Forge</span>
    <span className="forge-logo-text__stack">Stack</span>
  </span>
);

export const LogoExpanded: FC<{ className?: string; onLibraryClick?: (id: string) => void }> = ({ 
  className = '',
  onLibraryClick 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLib, setActiveLib] = useState<string | null>(null);

  return (
    <div 
      className={`forge-logo-expanded ${isHovered ? 'forge-logo-expanded--active' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setActiveLib(null); }}
    >
      <div className="forge-logo-expanded__center">
        <Logo size={64} animated />
        <div className="forge-logo-expanded__title">
          <LogoText />
        </div>
      </div>
      
      <div className="forge-logo-expanded__grid">
        {LIBRARIES.map((lib) => (
          <button
            key={lib.id}
            className={`forge-logo-expanded__item ${activeLib === lib.id ? 'forge-logo-expanded__item--active' : ''}`}
            style={{ '--lib-color': lib.color } as React.CSSProperties}
            onMouseEnter={() => setActiveLib(lib.id)}
            onMouseLeave={() => setActiveLib(null)}
            onClick={() => onLibraryClick?.(lib.id)}
          >
            <div className="forge-logo-expanded__item-dot" style={{ backgroundColor: lib.color }} />
            <div className="forge-logo-expanded__item-info">
              <span className="forge-logo-expanded__item-name">{lib.name}</span>
              <span className="forge-logo-expanded__item-desc">{lib.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
