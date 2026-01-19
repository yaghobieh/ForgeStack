/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ForgeStack brand colors (WebStorm-inspired)
        forge: {
          50: '#e6f7ff',
          100: '#bae7ff',
          200: '#91d5ff',
          300: '#69c0ff',
          400: '#40a9ff',
          500: '#1890ff',  // Primary blue
          600: '#096dd9',
          700: '#0050b3',
          800: '#003a8c',
          900: '#002766',
        },
        // Harbor brand colors (Deep blue/teal)
        harbor: {
          50: '#e6f4ff',
          100: '#b3d4ff',
          200: '#80b4ff',
          300: '#4d94ff',
          400: '#1a74ff',
          500: '#0066cc',  // Primary harbor blue
          600: '#0052a3',
          700: '#003d7a',
          800: '#002952',
          900: '#001429',
        },
        // Cyan accent (WebStorm-like)
        accent: {
          50: '#e6fffb',
          100: '#b5f5ec',
          200: '#87e8de',
          300: '#5cdbd3',
          400: '#36cfc9',
          500: '#13c2c2',  // Cyan accent
          600: '#08979c',
          700: '#006d75',
          800: '#00474f',
          900: '#002329',
        },
        // Dark theme backgrounds (JetBrains style)
        jet: {
          950: '#1e1e1e',   // Deepest background
          900: '#2b2b2b',   // Main background
          850: '#242424',
          800: '#3c3c3c',   // Surface
          700: '#4e4e4e',   // Elevated
          600: '#5a5a5a',
          500: '#6e6e6e',
        },
        // Light mode colors
        light: {
          bg: '#ffffff',
          surface: '#f5f5f5',
          border: '#e8e8e8',
          text: '#262626',
          muted: '#8c8c8c',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
