import { FC, useState } from 'react';
import { CodeBlock } from '../CodeBlock';
import {
  LIBRARY_CODE_EXAMPLES,
  CODE_EXAMPLES_TITLE,
  CODE_EXAMPLES_SUBTITLE,
} from '@constants/codeExamples.const';
import { SECTION_IDS } from '@constants/menu.const';
import { NUMBERS } from '@constants';

export const LibraryCodeExamples: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(NUMBERS.ZERO);
  const active = LIBRARY_CODE_EXAMPLES[activeIndex];

  return (
    <section id={SECTION_IDS.examples} className="py-10 sm:py-16 px-3 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-heading gradient-text inline-block">{CODE_EXAMPLES_TITLE}</h2>
          <p className="section-subheading mx-auto mt-2">{CODE_EXAMPLES_SUBTITLE}</p>
        </div>

        <div className="flex items-center justify-center gap-2 mb-5 flex-wrap">
          {LIBRARY_CODE_EXAMPLES.map((example, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={example.id}
                onClick={() => setActiveIndex(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                  isActive
                    ? 'text-theme-primary border-forge-500/50 bg-forge-500/10 shadow-lg shadow-forge-500/10'
                    : 'text-theme-muted border-theme-border hover:text-theme-secondary hover:border-forge-500/30'
                }`}
                style={isActive ? { borderColor: example.accentColor } : undefined}
              >
                <span aria-hidden>{example.icon}</span>
                <span>{example.label}</span>
              </button>
            );
          })}
        </div>

        <CodeBlock code={active.code} filename={active.filename} />
      </div>
    </section>
  );
};
