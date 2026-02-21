import { FC } from 'react';
import { Link } from 'react-router-dom';

const ACTIONS = [
  {
    title: 'Read the docs',
    description: 'Harbor, Bear, CLI, and more. Type-safe APIs and examples.',
    href: '/harbor/docs/quick-start',
    internal: true,
    label: 'Docs →',
  },
  {
    title: 'Try Bear UI',
    description: '50+ React components. Tailwind, dark mode, TypeScript.',
    href: 'https://bearui.com',
    internal: false,
    label: 'Bear UI →',
  },
  {
    title: 'Use templates',
    description: 'Start a React or full-stack app in seconds with the CLI.',
    href: '/templates',
    internal: true,
    label: 'Templates →',
  },
  {
    title: 'About us',
    description: 'Why we built ForgeStack and who we are.',
    href: '/about',
    internal: true,
    label: 'About →',
  },
] as const;

export const WhatWeCanDo: FC = () => (
  <section className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
    <h2 className="section-heading mb-2">What we can do</h2>
    <p className="section-subheading text-theme-muted mb-10">
      Explore the docs, try Bear UI, spin up a project from a template, or read about why we built this.
    </p>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {ACTIONS.map((item) => {
        const className =
          'forge-card-interactive block p-5 rounded-xl border border-theme-border bg-theme-card hover:border-forge-500/40 group';
        const content = (
          <>
            <h3 className="font-semibold text-theme-primary mb-1.5 group-hover:text-forge-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-theme-muted mb-3">{item.description}</p>
            <span className="text-sm font-medium text-forge-500 group-hover:text-forge-400">
              {item.label}
            </span>
          </>
        );
        if (item.internal) {
          return (
            <Link key={item.title} to={item.href} className={className}>
              {content}
            </Link>
          );
        }
        return (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {content}
          </a>
        );
      })}
    </div>
  </section>
);
