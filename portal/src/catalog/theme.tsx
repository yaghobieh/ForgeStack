import { FC, useEffect, useState } from 'react';

export type ThemeChoice = 'light' | 'dark' | 'system';

const STORAGE_KEY = 'fs-theme';

function systemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function resolveTheme(choice: ThemeChoice): 'light' | 'dark' {
  return choice === 'system' ? systemTheme() : choice;
}

function readChoice(): ThemeChoice {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  return 'dark';
}

export function applyTheme(choice: ThemeChoice): void {
  const theme = resolveTheme(choice);
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  root.setAttribute('data-theme-choice', choice);
  root.classList.toggle('dark', theme === 'dark');
  root.classList.toggle('light', theme === 'light');
}

export const ThemeControl: FC = () => {
  const [choice, setChoice] = useState<ThemeChoice>('dark');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const initial = readChoice();
    setChoice(initial);
    applyTheme(initial);
    const color = window.matchMedia('(prefers-color-scheme: dark)');
    const onColor = () => {
      const current = localStorage.getItem(STORAGE_KEY) as ThemeChoice | null;
      if (current === 'system') applyTheme('system');
    };
    color.addEventListener('change', onColor);
    return () => color.removeEventListener('change', onColor);
  }, []);

  const pick = (next: ThemeChoice) => {
    localStorage.setItem(STORAGE_KEY, next);
    setChoice(next);
    applyTheme(next);
    setOpen(false);
  };

  const label = choice === 'system' ? 'System' : choice === 'light' ? 'Light' : 'Dark';

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      const root = document.querySelector('.fs-theme');
      if (root && event.target instanceof Node && !root.contains(event.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    return () => document.removeEventListener('mousedown', onPointer);
  }, [open]);

  return (
    <div className="fs-theme">
      <button
        type="button"
        className="fs-theme-btn"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        {label}
      </button>
      {open && (
        <div className="fs-theme-menu" role="menu">
          {(['light', 'dark', 'system'] as ThemeChoice[]).map((option) => (
            <button
              key={option}
              type="button"
              role="menuitemradio"
              aria-checked={choice === option}
              onClick={() => pick(option)}
            >
              {option === 'system' ? 'System' : option === 'light' ? 'Light' : 'Dark'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
