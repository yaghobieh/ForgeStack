import { FC, useEffect, useState } from 'react';

const STORAGE_KEY = 'forge-alloy-banner-dismissed';

const readVisible = (): boolean => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== '1';
  } catch {
    return true;
  }
};

export const AlloyBanner: FC = () => {
  const [visible, setVisible] = useState(readVisible);

  useEffect(() => {
    const site = document.querySelector('.fs-site');
    if (site instanceof HTMLElement) {
      site.style.setProperty('--fs-chrome', visible ? '120px' : '76px');
    }
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* private mode */
    }
    setVisible(false);
  };

  return (
    <div className="alloy-banner">
      <span className="alloy-banner__mark">Alloy</span>
      <p className="alloy-banner__text">Want to build your app in 1 minute?</p>
      <a className="alloy-banner__cta" href="https://www.alloy-ai.dev/" target="_blank" rel="noopener noreferrer">
        Start for free
      </a>
      <button type="button" className="alloy-banner__close" aria-label="Dismiss" onClick={dismiss}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
};
