import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';
import { CodeCarousel } from '../CodeCarousel';
import { TITLE, TAGLINE, DESCRIPTION, STATS, AUTHOR } from '@constants';

export const Hero: FC = () => {
  return (
    <section className="forge-stack__hero relative min-h-screen flex items-center pt-16 overflow-hidden">

      <div className="forge-stack__hero-bg absolute inset-0 z-0">
        <div className="forge-stack__hero-glow-1 absolute top-1/4 left-1/4 w-96 h-96 bg-forge-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="forge-stack__hero-glow-2 absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="forge-stack__hero-glow-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-forge-600/5 rounded-full blur-3xl" />
      </div>

      <div className="forge-stack__hero-container relative z-10 max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="forge-stack__hero-grid grid lg:grid-cols-2 gap-12 items-center">

          <div className="forge-stack__hero-content text-left">

            <div className="forge-stack__hero-logo mb-8">
              <Logo size={80} className="mb-6" />
            </div>


            <h1 className="forge-stack__hero-title text-5xl md:text-6xl font-extrabold mb-4">
              <span className="forge-stack__hero-title-text bg-gradient-to-r from-forge-400 via-accent-400 to-forge-400 bg-clip-text text-transparent">
                {TITLE}
              </span>
            </h1>
            <p className="forge-stack__hero-tagline text-2xl md:text-3xl text-accent-400 font-semibold mb-6">
              {TAGLINE}
            </p>
            <p className="forge-stack__hero-description text-lg text-theme-muted mb-8 max-w-xl">
              {DESCRIPTION}
            </p>


            <div className="forge-stack__hero-stats flex gap-8 mb-8">
              {STATS.map((stat, index) => (
                <div key={index} className="forge-stack__hero-stat text-left">
                  <div className="forge-stack__hero-stat-value text-xl font-bold text-forge-400">
                    {stat.value}
                  </div>
                  <div className="forge-stack__hero-stat-label text-sm text-theme-muted">{stat.label}</div>
                </div>
              ))}
            </div>


            <div className="forge-stack__hero-cta flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/harbor/docs/quick-start"
                className="forge-stack__hero-cta-primary forge-button text-base px-6 py-3"
              >
                Get Started
              </Link>
              <a
                href="https://github.com/yaghobieh/ForgeStack"
                target="_blank"
                rel="noopener noreferrer"
                className="forge-stack__hero-cta-secondary forge-button-outline text-base px-6 py-3"
              >
                View on GitHub
              </a>
            </div>


            <div className="forge-stack__hero-author flex items-center gap-4 pt-4 border-t border-white/10">
              <span className="forge-stack__hero-author-label text-sm text-theme-muted">Created by</span>
              <div className="forge-stack__hero-author-info flex items-center gap-3">
                <a
                  href={AUTHOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="forge-stack__hero-author-name text-forge-400 hover:text-forge-300 font-medium transition-colors"
                >
                  {AUTHOR.name}
                </a>
                <div className="forge-stack__hero-author-links flex items-center gap-2">
                  <a
                    href={AUTHOR.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="forge-stack__hero-author-linkedin text-theme-muted hover:text-forge-400 transition-colors"
                    title="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={AUTHOR.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="forge-stack__hero-author-github text-theme-muted hover:text-forge-400 transition-colors"
                    title="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className="forge-stack__hero-terminal lg:pl-8">
            <CodeCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
