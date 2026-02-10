import { FC, useEffect } from 'react';
import { STUDIO_NEWS_POPUP } from '@/constants/studio.const';

interface StudioNewsPopupProps {
  onClose: () => void;
}

export const StudioNewsPopup: FC<StudioNewsPopupProps> = ({ onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-labelledby="studio-news-title"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md rounded-xl bg-theme-secondary border border-theme-border shadow-xl p-6 transition duration-200">
        <h2 id="studio-news-title" className="text-xl font-bold text-theme-primary mb-3">
          {STUDIO_NEWS_POPUP.title}
        </h2>
        <p className="text-theme-muted text-sm mb-6">
          {STUDIO_NEWS_POPUP.summary}
        </p>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-forge-600 hover:bg-forge-500 text-white font-medium text-sm transition-colors"
          >
            {STUDIO_NEWS_POPUP.cta}
          </button>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-theme-muted hover:text-theme-primary hover:bg-theme-tertiary transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
