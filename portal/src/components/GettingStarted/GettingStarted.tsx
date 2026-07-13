import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CodeBlock } from '../CodeBlock';
import {
  GETTING_STARTED_TITLE,
  GETTING_STARTED_SUBTITLE,
  GETTING_STARTED_STEPS,
  GETTING_STARTED_NEXT_STEPS,
} from '@constants';
import type { GettingStartedProps } from './types';

export const GettingStarted: FC<GettingStartedProps> = ({ className = '' }) => (
  <section id="get-started" className={`relative overflow-hidden py-16 sm:py-20 ${className}`}>
    <div className="fs-glow-orb w-[500px] h-[350px] top-10 right-[-120px]" style={{ background: 'var(--fs-glow-violet)' }} />
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-theme-primary mb-4">{GETTING_STARTED_TITLE}</h2>
      <p className="text-lg text-theme-muted max-w-2xl mx-auto">{GETTING_STARTED_SUBTITLE}</p>
    </div>

    {GETTING_STARTED_STEPS.map((step) => (
      <div key={step.number} className="mb-10">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold flex-shrink-0 shadow-lg shadow-blue-600/40">
            {step.number}
          </div>
          <div>
            <h3 className="text-xl font-bold text-theme-primary">{step.title}</h3>
            <p className="text-sm text-theme-muted">{step.description}</p>
          </div>
        </div>
        <div className="mt-3">
          <CodeBlock code={step.code} language={step.language} />
        </div>
      </div>
    ))}

    <div className="fs-glass rounded-xl p-5 sm:p-6">
      <h3 className="font-semibold text-theme-primary mb-3">Where to next</h3>
      <div className="flex flex-wrap gap-3">
        {GETTING_STARTED_NEXT_STEPS.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="px-4 py-2 rounded-lg bg-theme-tertiary border border-theme-border text-sm font-medium text-theme-secondary hover:text-forge-400 hover:border-forge-500/50 transition-all"
          >
            {item.label} →
          </Link>
        ))}
      </div>
    </div>
    </div>
  </section>
);
