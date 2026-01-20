import type { PreviewBackground, PreviewSize } from './types';

/** Delay in ms before hiding the "Copied!" message */
export const COPY_FEEDBACK_DELAY = 2000;

/** Default accent color */
export const DEFAULT_ACCENT_COLOR = '#d97706';

/** Minimum height for preview area */
export const MIN_PREVIEW_HEIGHT = 150;

/** Preview size configurations */
export const PREVIEW_SIZE_CONFIG: Record<PreviewSize, { minHeight: number; padding: string }> = {
  sm: { minHeight: 100, padding: 'p-4' },
  md: { minHeight: 150, padding: 'p-6' },
  lg: { minHeight: 200, padding: 'p-8' },
  xl: { minHeight: 300, padding: 'p-12' },
  auto: { minHeight: 80, padding: 'p-6' },
};

/** Background style classes */
export const BACKGROUND_CLASSES: Record<PreviewBackground, string> = {
  dark: 'bg-gray-900',
  light: 'bg-white text-gray-900',
  checker: 'bg-gray-800 bg-[linear-gradient(45deg,#374151_25%,transparent_25%),linear-gradient(-45deg,#374151_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#374151_75%),linear-gradient(-45deg,transparent_75%,#374151_75%)] bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0]',
  transparent: 'bg-transparent',
  gradient: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
  dots: 'bg-gray-900 bg-[radial-gradient(#374151_1px,transparent_1px)] bg-[length:16px_16px]',
};

/** Responsive breakpoints */
export const RESPONSIVE_SIZES = {
  mobile: { width: 375, label: '📱 Mobile' },
  tablet: { width: 768, label: '📱 Tablet' },
  desktop: { width: '100%', label: '🖥️ Desktop' },
} as const;

/** View mode icons */
export const VIEW_MODE_ICONS = {
  preview: '👁️',
  code: '</>',
  split: '⬜⬜',
} as const;

/** Toolbar button classes */
export const TOOLBAR_BUTTON_CLASSES = {
  base: 'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
  active: 'text-white',
  inactive: 'text-gray-400 hover:text-white hover:bg-gray-700',
} as const;

/** Code block styles */
export const CODE_BLOCK_CLASSES = {
  container: 'bg-gray-950 rounded-b-xl overflow-hidden',
  pre: 'p-4 overflow-x-auto text-sm',
  code: 'text-gray-300 font-mono leading-relaxed',
} as const;

