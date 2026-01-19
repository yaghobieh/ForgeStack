import { FC } from 'react';
import { BadgeProps, BadgeVariant } from './types';

interface BadgeConfig {
  gradient: string;
  icon: string;
  glow: string;
  textColor: string;
}

const BADGE_CONFIG: Record<BadgeVariant, BadgeConfig> = {
  NEW: {
    gradient: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffcc00 100%)',
    icon: '🔥',
    glow: 'rgba(255, 107, 53, 0.4)',
    textColor: '#fff',
  },
  BETA: {
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: '⚡',
    glow: 'rgba(102, 126, 234, 0.4)',
    textColor: '#fff',
  },
  ALPHA: {
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '🧪',
    glow: 'rgba(240, 147, 251, 0.4)',
    textColor: '#fff',
  },
  SOON: {
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '🚀',
    glow: 'rgba(79, 172, 254, 0.4)',
    textColor: '#fff',
  },
};

export const Badge: FC<BadgeProps> = ({ variant, className = '', showIcon = true }) => {
  const config = BADGE_CONFIG[variant];

  return (
    <span
      className={`
        inline-flex items-center gap-0.5
        text-[9px] font-black uppercase tracking-wider
        px-1.5 py-0.5 rounded-md
        shadow-sm
        transition-all duration-200
        hover:scale-105 hover:shadow-md
        ${className}
      `}
      style={{
        background: config.gradient,
        color: config.textColor,
        boxShadow: `0 2px 8px ${config.glow}`,
        textShadow: '0 1px 2px rgba(0,0,0,0.2)',
      }}
    >
      {showIcon && <span className="text-[8px]">{config.icon}</span>}
      <span>{variant}</span>
    </span>
  );
};
