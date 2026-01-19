// UI constants

export const LOGO_SIZES = {
  sm: 32,
  md: 48,
  lg: 64,
} as const;

export type LogoSize = keyof typeof LOGO_SIZES;

