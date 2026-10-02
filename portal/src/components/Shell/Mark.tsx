import { FC } from 'react';

export const Mark: FC<{ size?: number }> = ({ size = 42 }) => (
  <svg className="fs-mark" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#1E2523" />
    <path d="M11 9h12v30h-7.5L11 33.5V9z" fill="#F4F5F0" />
    <path d="M25 9h15l-3.2 8.2H25V9z" fill="#22C55E" />
    <path d="M25 20.5h11.5l-2.4 7H25v-7z" fill="#F4F5F0" />
  </svg>
);

const ICONS: Record<string, FC<{ color: string }>> = {
  bear: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <circle cx="8" cy="8" r="4" fill={color} />
      <circle cx="24" cy="8" r="4" fill={color} />
      <circle cx="16" cy="18" r="9" fill={color} />
    </svg>
  ),
  rail: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <rect x="3" y="12" width="18" height="8" rx="2" fill={color} />
      <rect x="16" y="12" width="13" height="8" rx="2" fill={color} opacity="0.55" />
    </svg>
  ),
  calendar: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <rect x="4" y="6" width="24" height="22" rx="3" fill={color} />
      <path d="M4 12h24" stroke="#121816" strokeWidth="2" />
    </svg>
  ),
  table: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <rect x="4" y="5" width="24" height="22" rx="2" fill={color} />
      <path d="M4 12h24M14 12v15M22 12v15" stroke="#121816" strokeWidth="1.6" />
    </svg>
  ),
  torch: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path d="M16 3l4 8h7l-6 5 2 8-7-4-7 4 2-8-6-5h7z" fill={color} />
    </svg>
  ),
  synapse: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <circle cx="8" cy="16" r="4" fill={color} />
      <circle cx="24" cy="8" r="3" fill={color} />
      <circle cx="24" cy="24" r="3" fill={color} />
      <path d="M12 16h8M12 15l10-6M12 17l10 6" stroke={color} strokeWidth="1.6" />
    </svg>
  ),
  form: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <rect x="6" y="4" width="20" height="24" rx="2" fill={color} />
      <path d="M10 11h12M10 16h12M10 21h8" stroke="#121816" strokeWidth="1.6" />
    </svg>
  ),
  query: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <circle cx="14" cy="14" r="8" fill="none" stroke={color} strokeWidth="3" />
      <path d="M20 20l7 7" stroke={color} strokeWidth="3" />
    </svg>
  ),
  compass: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <circle cx="16" cy="16" r="11" fill="none" stroke={color} strokeWidth="2" />
      <path d="M16 6l3 10-3 10-3-10z" fill={color} />
    </svg>
  ),
  harbor: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path d="M6 22h20l-2 4H8z" fill={color} />
      <path d="M16 6v12" stroke={color} strokeWidth="2" />
      <circle cx="16" cy="6" r="2" fill={color} />
    </svg>
  ),
  auth: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <rect x="8" y="14" width="16" height="12" rx="2" fill={color} />
      <path d="M11 14V11a5 5 0 0 1 10 0v3" fill="none" stroke={color} strokeWidth="2" />
    </svg>
  ),
  relay: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path d="M6 16h14M16 10l6 6-6 6" fill="none" stroke={color} strokeWidth="2.4" />
    </svg>
  ),
  kiln: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path d="M16 4c4 6 6 9 6 13a6 6 0 1 1-12 0c0-4 2-7 6-13z" fill={color} />
    </svg>
  ),
  aerocraft: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path d="M4 18l24-8-10 16-2-6z" fill={color} />
    </svg>
  ),
  lingo: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <circle cx="16" cy="16" r="10" fill="none" stroke={color} strokeWidth="2" />
      <path d="M6 16h20M16 6c3 3 4 6 4 10s-1 7-4 10c-3-3-4-6-4-10s1-7 4-10z" fill="none" stroke={color} strokeWidth="1.6" />
    </svg>
  ),
  anvil: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path d="M6 12h16l4 4H10L6 12zM12 16h8v8h-8z" fill={color} />
    </svg>
  ),
  cli: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <rect x="3" y="6" width="26" height="20" rx="3" fill={color} />
      <path d="M8 14l4 3-4 3M14 20h8" stroke="#121816" strokeWidth="1.8" />
    </svg>
  ),
  gitforge: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <circle cx="10" cy="8" r="3" fill={color} />
      <circle cx="22" cy="16" r="3" fill={color} />
      <circle cx="10" cy="24" r="3" fill={color} />
      <path d="M10 11v10M12 9c6 0 8 5 8 7" stroke={color} strokeWidth="1.6" fill="none" />
    </svg>
  ),
  lintforge: ({ color }) => (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path d="M16 3l3 8h8l-6.5 5 2.5 8L16 19l-7 5 2.5-8L5 11h8z" fill={color} />
    </svg>
  ),
};

export const LibGlyph: FC<{ id: string; color: string }> = ({ id, color }) => {
  const Icon = ICONS[id] ?? ICONS.anvil;
  return (
    <span
      style={{
        width: 40,
        height: 40,
        borderRadius: 10,
        display: 'grid',
        placeItems: 'center',
        background: `${color}22`,
        flex: '0 0 auto',
      }}
    >
      <Icon color={color} />
    </span>
  );
};
