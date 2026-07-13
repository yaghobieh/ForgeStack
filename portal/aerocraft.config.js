import { defineConfig } from '@forgedevstack/aerocraft';

/**
 * AeroCraft config for the ForgeStack portal.
 *
 * The full-viewport webOS launcher styles (fs-launcher / fs-ribbon shells)
 * are defined here as custom shortcuts and emitted through the `@aerocraft`
 * entry in src/styles/aerocraft.css. State-dependent rules (hover expansion,
 * media queries, descendant selectors) stay in src/styles/index.css.
 */
export default defineConfig({
  responsive: false,
  theme: {
    colors: {
      brand: {
        DEFAULT: '#1c70f5',
        400: '#59adff',
        500: '#338fff',
        600: '#1c70f5',
        700: '#155be2',
      },
      accent: '#22d3ee',
      surface: '#050914',
      'surface-elevated': '#091124',
      'surface-raised': '#101c38',
    },
    fontFamily: {
      display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
    },
  },
  customShortcuts: {
    'fs-launcher': {
      group: 'layout',
      css: {
        '--fs-navbar-h': '3.5rem',
        position: 'relative',
        height: 'calc(100dvh - var(--fs-navbar-h))',
        'min-height': '540px',
        display: 'flex',
        'flex-direction': 'column',
        overflow: 'hidden',
      },
    },
    'fs-launcher__bg': {
      group: 'background',
      css: {
        position: 'absolute',
        inset: '0',
        'z-index': '0',
        background: [
          'radial-gradient(90% 70% at 70% 20%, var(--fs-glow-magenta), transparent 60%)',
          'radial-gradient(80% 60% at 20% 30%, var(--fs-glow-violet), transparent 60%)',
          'linear-gradient(180deg, #0a1530 0%, #060d1f 60%, var(--fs-bg) 100%)',
        ].join(', '),
      },
    },
    'fs-launcher__cover': {
      group: 'layout',
      css: {
        position: 'absolute',
        inset: '0',
        width: '100%',
        height: '100%',
        'object-fit': 'cover',
        opacity: '0',
        transition: 'opacity 0.6s ease',
      },
    },
    'fs-launcher__cover--loaded': {
      group: 'layout',
      css: { opacity: '1' },
    },
    'fs-launcher__overlay': {
      group: 'background',
      css: {
        position: 'absolute',
        inset: '0',
        background: [
          'linear-gradient(180deg, rgba(4, 8, 18, 0.55) 0%, transparent 22%)',
          'linear-gradient(0deg, rgba(4, 8, 18, 0.96) 0%, rgba(7, 14, 32, 0.72) 34%, rgba(7, 14, 32, 0.25) 52%, transparent 66%)',
          'radial-gradient(120% 90% at 50% 110%, var(--fs-glow-purple), transparent 55%)',
        ].join(', '),
      },
    },
    'fs-launcher__brand': {
      group: 'layout',
      css: {
        position: 'relative',
        'z-index': '1',
        padding: 'clamp(1.5rem, 5vh, 4rem) 1.25rem 0 clamp(1.25rem, 4vw, 3.5rem)',
      },
    },
    'fs-launcher__title': {
      group: 'font',
      css: {
        'font-size': 'clamp(2rem, 4.5vw, 3.5rem)',
        'font-weight': '800',
        'letter-spacing': '-0.02em',
        'text-shadow': '0 4px 30px rgba(0, 0, 0, 0.6)',
      },
    },
    'fs-launcher__kicker': {
      group: 'font',
      css: {
        'margin-top': '0.35rem',
        'font-size': 'clamp(0.85rem, 1.4vw, 1.05rem)',
        'font-weight': '600',
        color: 'var(--text-primary)',
        'text-shadow': '0 2px 16px rgba(0, 0, 0, 0.7)',
      },
    },
    'fs-launcher__dock': {
      group: 'layout',
      css: { position: 'relative', 'z-index': '2', 'margin-top': 'auto' },
    },
    'fs-launcher__hint': {
      group: 'layout',
      css: {
        position: 'relative',
        'z-index': '1',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        gap: '0.5rem',
        padding: '0.35rem 0 0.8rem',
        'font-size': '0.72rem',
        color: 'var(--text-muted)',
      },
    },
    'fs-ribbon': {
      group: 'layout',
      css: {
        '--fs-slice-w': '232px',
        '--fs-slice-w-open': '424px',
        '--fs-slice-h': 'min(348px, 44dvh)',
        '--fs-slice-skew': '-4deg',
      },
    },
    'fs-ribbon__hint': {
      group: 'font',
      css: {
        padding: '0 max(0.75rem, calc((100vw - 96rem) / 2 + 0.75rem))',
        'margin-bottom': '0.5rem',
        'font-size': '0.72rem',
        'font-weight': '500',
        'letter-spacing': '0.04em',
        'text-transform': 'uppercase',
        color: 'rgba(255, 255, 255, 0.55)',
        'text-shadow': '0 1px 8px rgba(0, 0, 0, 0.6)',
      },
    },
    'fs-ribbon__band': {
      group: 'layout',
      css: { position: 'relative', padding: '0.5rem 0 0.25rem' },
    },
    'fs-ribbon__rail': {
      group: 'layout',
      css: {
        padding: '0 max(0.75rem, calc((100vw - 96rem) / 2 + 0.75rem))',
        overflow: 'visible',
      },
    },
  },
});
