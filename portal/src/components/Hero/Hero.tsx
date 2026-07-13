import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo, LogoText, LogoExpanded } from '../Logo';
import { CodeCarousel } from '../CodeCarousel';
import { TAGLINE, DESCRIPTION, STATS, AUTHOR, HERO_INSTALL_COMMAND } from '@constants';

const LIBRARY_ROUTES: Record<string, string> = {
  harbor: '/harbor/docs/quick-start',
  compass: '/compass',
  synapse: '/synapse',
  query: '/query',
  bear: '/bear',
  anvil: '/anvil',
  kiln: '/kiln',
  table: '/table',
  form: '/form',
  cli: '/cli',
};

export const Hero: FC = () => {
  const navigate = useNavigate();

  const handleLibraryClick = (id: string) => {
    const route = LIBRARY_ROUTES[id];
    if (route) {
      navigate(route);
    }
  };

  return (
    <section className="forge-stack__hero relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Enhanced animated background with more flare */}
      <div className="forge-stack__hero-bg absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-600/25 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-700/20 rounded-full blur-3xl" />

        <div className="hidden sm:block absolute top-20 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="hidden sm:block absolute bottom-20 left-20 w-64 h-64 bg-sky-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="hidden sm:block absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/25 to-transparent" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent" />
        </div>

        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.12) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(168, 85, 247, 0.12) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <div className="text-center lg:text-left min-w-0">
            {/* Logo with animated glow */}
            <div className="flex items-center gap-2 sm:gap-3 justify-center lg:justify-start mb-4 sm:mb-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-pink-500/30 rounded-xl blur-xl animate-pulse" />
                <Logo size={36} animated />
              </div>
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold truncate">
                <LogoText />
              </h1>
            </div>

            <p className="text-base sm:text-xl lg:text-2xl text-pink-400 font-semibold mb-3 sm:mb-4 leading-tight">
              {TAGLINE}
            </p>
            
            <p className="text-xs sm:text-base text-theme-secondary mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              {DESCRIPTION}
            </p>

            {/* Stats with enhanced styling */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start mb-6 sm:mb-8">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center lg:text-left group">
                  <div className="text-lg sm:text-2xl font-bold gradient-text group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-theme-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mb-8 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-pink-500/10 border border-pink-500/20 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xl sm:text-2xl">🐻</span>
                <span className="text-pink-400 font-semibold text-sm sm:text-base">Start with Bear — the flagship UI library</span>
              </div>
              <p className="text-xs sm:text-sm text-theme-secondary mb-3">
                60+ React components with light and dark mode. Then add state, routing, forms, and data from the same ecosystem.
              </p>
              <div className="flex flex-col gap-2">
                <code className="px-3 sm:px-4 py-2 rounded-lg bg-black/40 font-mono text-xs sm:text-sm text-theme-primary border border-theme-border flex items-center gap-2 overflow-x-auto">
                  <span className="text-pink-400 flex-shrink-0">$</span>
                  <span className="whitespace-nowrap">{HERO_INSTALL_COMMAND}</span>
                </code>
                <Link
                  to="/bear"
                  className="px-4 py-2 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-400 font-medium text-sm transition-colors text-center"
                >
                  Bear docs →
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8 px-2 sm:px-0">
              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg font-mono text-xs sm:text-sm font-medium bg-theme-tertiary text-theme-primary border border-theme-border hover:border-forge-500/50 hover:text-forge-400 transition-all"
              >
                <span className="text-theme-muted">$</span> Browse all libraries
              </a>
              <a
                href="https://github.com/yaghobieh/ForgeStack"
                target="_blank"
                rel="noopener noreferrer"
                className="forge-button-outline text-sm sm:text-base px-4 sm:px-8 py-2 sm:py-3 text-center"
              >
                View on GitHub
              </a>
            </div>

            <div className="hidden lg:block">
              <LogoExpanded onLibraryClick={handleLibraryClick} />
            </div>
          </div>

          <div className="w-full min-w-0 overflow-hidden">
            <CodeCarousel />
            
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 justify-center lg:justify-start pt-4 border-t border-theme">
              <span className="text-sm text-theme-muted">Created by</span>
              <div className="flex items-center gap-3">
                <a
                  href={AUTHOR.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 hover:text-pink-300 font-semibold transition-colors"
                >
                  {AUTHOR.name}
                </a>
                <div className="flex items-center gap-2">
                  <a
                    href={AUTHOR.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-muted hover:text-pink-400 transition-colors"
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
                    className="text-theme-muted hover:text-pink-400 transition-colors"
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
        </div>
      </div>
    </section>
  );
};
