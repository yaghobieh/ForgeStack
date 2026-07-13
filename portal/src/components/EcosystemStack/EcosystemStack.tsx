import { FC, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ECOSYSTEM_TITLE, ECOSYSTEM_SUBTITLE, ECOSYSTEM_LAYERS, PACKAGES, packageDocsHref } from '@constants';
import type { EcosystemStackProps } from './types';

export const EcosystemStack: FC<EcosystemStackProps> = ({ className = '' }) => (
  <section className={`relative overflow-hidden py-16 sm:py-20 ${className}`}>
    <div className="fs-glow-orb w-[600px] h-[400px] top-[-100px] left-1/2 -translate-x-1/2" style={{ background: 'var(--fs-glow-purple)' }} />
    <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-theme-primary mb-4">{ECOSYSTEM_TITLE}</h2>
      <p className="text-lg text-theme-muted max-w-3xl mx-auto">{ECOSYSTEM_SUBTITLE}</p>
    </div>
    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
      {ECOSYSTEM_LAYERS.map((layer) => (
        <div
          key={layer.id}
          className="fs-tile p-5 sm:p-6"
          style={{
            '--tile-color': layer.color,
            '--tile-glow': `color-mix(in srgb, ${layer.color} 25%, transparent)`,
            borderTopWidth: '3px',
            borderTopColor: layer.color,
          } as CSSProperties}
        >
          <h3 className="text-xl font-semibold mb-1.5" style={{ color: layer.color }}>
            {layer.title}
          </h3>
          <p className="text-sm text-theme-muted mb-4">{layer.summary}</p>
          <ul className="space-y-2">
            {layer.packages.map((layerPkg) => {
              const pkg = PACKAGES.find((p) => p.id === layerPkg.packageId);
              const content = (
                <>
                  <span className="font-medium text-theme-primary">{layerPkg.name}</span>
                  <span className="text-theme-muted"> — {layerPkg.role}</span>
                </>
              );
              return (
                <li key={layerPkg.packageId} className="text-sm">
                  {pkg && pkg.status === 'ready' ? (
                    <Link
                      to={packageDocsHref(pkg)}
                      className="group inline-flex items-start gap-2 hover:opacity-80 transition-opacity"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: layer.color }} />
                      <span>{content}</span>
                    </Link>
                  ) : (
                    <span className="inline-flex items-start gap-2 opacity-70">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: layer.color }} />
                      <span>{content}</span>
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
    </div>
  </section>
);
