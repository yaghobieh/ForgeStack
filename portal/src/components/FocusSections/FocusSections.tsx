import { FC } from 'react';
import {
  FOCUS_SECTIONS,
  FOCUS_SECTIONS_TITLE,
  FOCUS_SECTIONS_SUBTITLE,
} from '@constants/focusSections.const';

export const FocusSections: FC = () => {
  return (
    <section className="py-10 sm:py-16 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-heading gradient-text inline-block">{FOCUS_SECTIONS_TITLE}</h2>
          <p className="section-subheading mx-auto mt-2">{FOCUS_SECTIONS_SUBTITLE}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {FOCUS_SECTIONS.map((section) => (
            <article
              key={section.id}
              id={section.anchorId}
              className="fs-tile p-6 scroll-mt-24 flex flex-col"
            >
              <div className="fs-tile-icon mb-4" aria-hidden>{section.icon}</div>
              <h3 className="text-lg font-bold text-theme-primary mb-2">{section.title}</h3>
              <p className="text-sm text-theme-secondary leading-relaxed mb-4">
                {section.description}
              </p>
              <ul className="space-y-2 mb-5">
                {section.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-theme-secondary">
                    <span className="text-forge-400 mt-0.5" aria-hidden>◆</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <a
                href={section.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="forge-link text-sm mt-auto"
              >
                {section.linkLabel} →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
