import { FC } from 'react';
import { FrameworkIconProps, Framework } from './types';

// React Icon
export const ReactIcon: FC<FrameworkIconProps> = ({ className, size = 16 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size} 
    fill="currentColor"
  >
    <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z"/>
  </svg>
);

// Vue Icon
export const VueIcon: FC<FrameworkIconProps> = ({ className, size = 16 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size} 
    fill="currentColor"
  >
    <path d="M2 3h3.5L12 13.14 18.5 3H22L12 20 2 3m4.5 0H9L12 8.2 15 3h2.5L12 13 6.5 3z"/>
  </svg>
);

// Angular Icon
export const AngularIcon: FC<FrameworkIconProps> = ({ className, size = 16 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size} 
    fill="currentColor"
  >
    <path d="M12 2L2 6.5l1.5 12.5L12 22l8.5-3L22 6.5 12 2zm0 2.3l7.6 2.6-1.2 9.6L12 19.5l-6.4-3-1.2-9.6L12 4.3zm0 2.2l-4.1 8.9h1.5l.8-2.1h3.6l.8 2.1h1.5L12 6.5zm0 2.8l1.3 3.4h-2.6L12 9.3z"/>
  </svg>
);

// Vanilla JS Icon
export const VanillaIcon: FC<FrameworkIconProps> = ({ className, size = 16 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size} 
    fill="currentColor"
  >
    <path d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7v5.74c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z"/>
  </svg>
);

// Svelte Icon
export const SvelteIcon: FC<FrameworkIconProps> = ({ className, size = 16 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size} 
    fill="currentColor"
  >
    <path d="M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.287-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.243 1.243 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .703 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.136.498z"/>
  </svg>
);

// Solid Icon
export const SolidIcon: FC<FrameworkIconProps> = ({ className, size = 16 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size} 
    fill="currentColor"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
    <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"/>
  </svg>
);

// Qwik Icon
export const QwikIcon: FC<FrameworkIconProps> = ({ className, size = 16 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size} 
    fill="currentColor"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

// Lit Icon
export const LitIcon: FC<FrameworkIconProps> = ({ className, size = 16 }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    width={size} 
    height={size} 
    fill="currentColor"
  >
    <path d="M12 2L4 6v6l8 4 8-4V6l-8-4zm0 2.18l5.5 2.75L12 9.68 6.5 6.93 12 4.18zM6 8.25l5 2.5v5.5l-5-2.5v-5.5zm12 0v5.5l-5 2.5v-5.5l5-2.5z"/>
  </svg>
);

// Framework colors for styling
export const FRAMEWORK_COLORS: Record<Framework, string> = {
  react: '#61DAFB',
  vue: '#42B883',
  angular: '#DD0031',
  vanilla: '#F7DF1E',
  svelte: '#FF3E00',
  solid: '#2C4F7C',
  qwik: '#18B6F6',
  lit: '#325CFF',
};

// Get icon component by framework
export const getFrameworkIcon = (framework: Framework): FC<FrameworkIconProps> => {
  const icons: Record<Framework, FC<FrameworkIconProps>> = {
    react: ReactIcon,
    vue: VueIcon,
    angular: AngularIcon,
    vanilla: VanillaIcon,
    svelte: SvelteIcon,
    solid: SolidIcon,
    qwik: QwikIcon,
    lit: LitIcon,
  };
  return icons[framework] || VanillaIcon;
};

// Get framework color
export const getFrameworkColor = (framework: Framework, isActive: boolean): string => {
  if (!isActive) return 'text-theme-muted hover:text-theme-secondary';
  return `text-[${FRAMEWORK_COLORS[framework]}]`;
};

