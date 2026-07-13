import { FC } from 'react';
import { AUTHOR, CREATOR_TITLE, CREATOR_LINK_LABEL } from '@constants';
import { SECTION_IDS } from '@constants/menu.const';

export const AboutCreator: FC = () => {
  return (
    <section id={SECTION_IDS.creator} className="py-10 sm:py-14 px-3 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="fs-glass rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-5 sm:gap-7">
          <img
            src={AUTHOR.imageUrl}
            alt={AUTHOR.name}
            className="w-20 h-20 rounded-full object-cover border-2 border-forge-500/40 shadow-lg shadow-forge-500/20 flex-shrink-0"
            loading="lazy"
          />
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-theme-primary">{AUTHOR.name}</h3>
            <p className="text-sm text-forge-400 font-semibold mb-2">{CREATOR_TITLE}</p>
            <p className="text-sm text-theme-secondary mb-3">{AUTHOR.bio}</p>
            <a
              href={AUTHOR.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-pink-400 hover:text-pink-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              {CREATOR_LINK_LABEL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
