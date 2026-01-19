import { FC } from 'react';
import { LogoProps } from './types';
import { LOGO_SIZES } from '@/constants/ui.const';

export const Logo: FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const pixelSize = typeof size === 'number' ? size : LOGO_SIZES[size];
  
  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="forgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1890ff"/>
          <stop offset="50%" stopColor="#13c2c2"/>
          <stop offset="100%" stopColor="#1890ff"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      

      <circle cx="100" cy="100" r="90" fill="#2b2b2b" stroke="url(#forgeGradient)" strokeWidth="3"/>
      

      <g transform="translate(100, 100)" filter="url(#glow)">

        <rect x="-45" y="10" width="90" height="20" rx="3" fill="url(#forgeGradient)"/>
        <rect x="-35" y="-10" width="70" height="25" rx="4" fill="url(#forgeGradient)"/>
        

        <rect x="-8" y="-55" width="16" height="45" rx="2" fill="#a9b7c6"/>
        <rect x="-20" y="-70" width="40" height="20" rx="4" fill="url(#forgeGradient)"/>
        

        <circle cx="-30" cy="-20" r="3" fill="#ffc66d" opacity="0.8"/>
        <circle cx="35" cy="-25" r="2" fill="#ffc66d" opacity="0.6"/>
        <circle cx="-25" cy="-35" r="2" fill="#cc7832" opacity="0.7"/>
        <circle cx="30" cy="-40" r="3" fill="#cc7832" opacity="0.5"/>
      </g>
    </svg>
  );
};
