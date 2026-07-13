import { FC, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '@/constants/content.const';
import { packageDocsHref } from '@/constants';
import { usePackageTheme } from '../../context/ThemeContext';
import { useNpmVersions } from '../../hooks';
import type { PackagesTableProps } from './types';

const NPM_PACKAGE_URL = 'https://www.npmjs.com/package';

const STATUS_LABELS = {
  'ready': 'Ready',
  'coming-soon': 'Coming Soon',
  'planned': 'Planned',
} as const;

const STATUS_STYLES = {
  'ready': 'bg-green-500/15 text-green-400 border-green-500/25',
  'coming-soon': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
  'planned': 'bg-gray-500/15 text-gray-400 border-gray-500/25',
} as const;

const hexToRgba = (hex: string, alpha: number): string => {
  const value = hex.replace('#', '');
  const r = parseInt(value.substring(0, 2), 16);
  const g = parseInt(value.substring(2, 4), 16);
  const b = parseInt(value.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const PackagesTable: FC<PackagesTableProps> = ({ className = '' }) => {
  const { setActivePackageId } = usePackageTheme();
  const npmVersions = useNpmVersions();

  const getVersion = (pkgId: string): string | undefined => {
    const pkg = PACKAGES.find((p) => p.id === pkgId);
    return npmVersions[pkgId] ?? pkg?.version;
  };

  return (
    <section id="packages" className={`relative py-24 overflow-hidden ${className}`}>
      <div className="fs-glow-orb w-[500px] h-[400px] top-0 left-[-150px]" style={{ background: 'var(--fs-glow-violet)' }} />
      <div className="fs-glow-orb w-[500px] h-[400px] bottom-0 right-[-150px]" style={{ background: 'var(--fs-glow-magenta)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-theme-primary mb-4">All Libraries</h2>
          <p className="text-lg text-theme-muted max-w-2xl mx-auto">
            Every ForgeStack package at a glance — what it does, its live npm version, and where the docs live. Use them individually or together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {PACKAGES.map((pkg) => {
            const version = getVersion(pkg.id);
            const tileStyle = {
              '--tile-color': pkg.color,
              '--tile-glow': hexToRgba(pkg.color, 0.28),
            } as CSSProperties;

            return (
              <div
                key={pkg.id}
                className="fs-tile p-5 flex flex-col"
                style={tileStyle}
                onMouseEnter={() => setActivePackageId(pkg.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="fs-tile-icon">{pkg.icon}</span>
                  <span className={`px-2.5 py-1 text-xs rounded-full border ${STATUS_STYLES[pkg.status]}`}>
                    {STATUS_LABELS[pkg.status]}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-theme-primary">{pkg.name}</h3>
                  <span className="font-mono text-xs px-2 py-0.5 rounded-md" style={{ color: pkg.color, backgroundColor: hexToRgba(pkg.color, 0.12) }}>
                    {version ? `v${version}` : 'soon'}
                  </span>
                </div>
                <div className="text-xs font-mono text-theme-muted mb-3 truncate">{pkg.npmPackage}</div>

                <p className="text-sm text-theme-secondary leading-relaxed mb-5 line-clamp-3 flex-1">
                  {pkg.description}
                </p>

                {pkg.status === 'ready' ? (
                  <div className="flex items-center gap-2">
                    <Link
                      to={packageDocsHref(pkg)}
                      className="flex-1 text-center px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:brightness-110"
                      style={{ backgroundColor: pkg.color, boxShadow: `0 0 20px -6px ${hexToRgba(pkg.color, 0.6)}` }}
                    >
                      Docs →
                    </Link>
                    <a
                      href={`${NPM_PACKAGE_URL}/${pkg.npmPackage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm font-medium border border-theme-border text-theme-secondary transition-colors hover:text-theme-primary hover:bg-theme-tertiary"
                    >
                      npm
                    </a>
                  </div>
                ) : (
                  <div className="text-center px-4 py-2 rounded-lg text-sm font-medium border border-dashed border-theme-border text-theme-muted italic">
                    On the roadmap
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
