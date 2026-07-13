export const COLORS = {
  primary: {
    50: '#ecfeff',
    100: '#cffafe',
    200: '#a5f3fc',
    300: '#67e8f9',
    400: '#22d3ee',
    500: '#06b6d4',
    600: '#0891b2',
    700: '#0e7490',
    800: '#155e75',
    900: '#164e63',
  },
  jet: {
    900: '#101c38',
    800: '#0c1730',
    700: '#1f2937',
    600: '#374151',
  },
} as const;

export const BEAR_THEME_MODE = 'dark' as const;

/** ForgeStack electric-blue scale for Bear's theme (mirrors tailwind `forge`) */
export const BEAR_THEME_PRIMARY = {
  50: '#eef7ff',
  100: '#d9edff',
  200: '#bce0ff',
  300: '#8ecbff',
  400: '#59adff',
  500: '#338fff',
  600: '#1c70f5',
  700: '#155be2',
  800: '#184ab7',
  900: '#1a4190',
  950: '#152a58',
} as const;

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #59adff 0%, #1c70f5 50%, #22d3ee 100%)',
  background: 'linear-gradient(180deg, #101c38 0%, #050914 100%)',
  text: 'linear-gradient(135deg, #59adff 0%, #22d3ee 100%)',
} as const;

export const FONTS = {
  sans: "'Inter', system-ui, sans-serif",
  mono: "'JetBrains Mono', monospace",
} as const;

export const SYNTAX_COLORS = {
  keyword: '#c792ea',
  string: '#c3e88d',
  function: '#82aaff',
  comment: '#676e95',
  number: '#f78c6c',
  property: '#f07178',
  type: '#ffcb6b',
} as const;

