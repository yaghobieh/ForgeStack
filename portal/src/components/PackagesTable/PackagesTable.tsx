import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '@/constants/content.const';
import { usePackageTheme } from '../../context/ThemeContext';
import type { PackagesTableProps } from './types';

const STATUS_LABELS = {
  'ready': 'Ready',
  'coming-soon': 'Coming Soon',
  'planned': 'Planned',
} as const;

const STATUS_STYLES = {
  'ready': 'bg-green-500/20 text-green-400 border-green-500/30',
  'coming-soon': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'planned': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
} as const;

interface PackageVersionInfo {
  version: string;
  date: string;
  highlights: string[];
}

const PACKAGE_VERSIONS: Record<string, PackageVersionInfo> = {
  harbor: {
    version: '1.5.0',
    date: '2026-01-14',
    highlights: [
      'WebSocket support with rooms',
      'Job scheduler (cron)',
      'JWT & API Key auth',
      'Rate limiting',
      'Prometheus metrics',
      'File uploads',
      'Redis caching',
      'Health checks',
    ],
  },
  compass: {
    version: '0.1.0-alpha',
    date: 'Coming Soon',
    highlights: [
      'Type-safe routes',
      'Route guards',
      'Param validation',
    ],
  },
  synapse: {
    version: '0.1.0-alpha',
    date: 'Coming Soon',
    highlights: [
      'Simple store creation',
      'Computed values',
      'Async actions',
    ],
  },
  query: {
    version: 'Planned',
    date: 'TBD',
    highlights: [
      'Automatic caching',
      'Background refetching',
    ],
  },
  table: {
    version: 'Planned',
    date: 'TBD',
    highlights: [
      'Sorting & filtering',
      'Pagination',
    ],
  },
};

interface VersionDropdownContentProps {
  packageId: string;
  color: string;
}

const VersionDropdownContent: FC<VersionDropdownContentProps> = ({ packageId, color }) => {
  const versionInfo = PACKAGE_VERSIONS[packageId];
  if (!versionInfo) return null;

  return (
    <div className="absolute top-full left-0 mt-2 w-72 bg-theme-secondary border border-theme-border rounded-lg shadow-xl z-50 overflow-hidden">
      <div className="p-3 border-b border-theme-border" style={{ backgroundColor: `${color}10` }}>
        <div className="flex items-center justify-between">
          <span className="font-mono font-semibold text-theme-primary">v{versionInfo.version}</span>
          <span className="text-xs text-theme-muted">{versionInfo.date}</span>
        </div>
      </div>
      <div className="p-3">
        <div className="text-xs text-theme-muted uppercase tracking-wider mb-2">What's New</div>
        <ul className="text-sm space-y-1.5">
          {versionInfo.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-theme-secondary">
              <span style={{ color }} className="mt-0.5">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      {packageId === 'harbor' && (
        <a
          href="https://github.com/yaghobieh/ForgeStack/blob/main/packages/harbor/CHANGELOG.md"
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2 text-center text-xs border-t border-theme-border transition-colors hover:bg-theme-tertiary"
          style={{ color }}
        >
          View full changelog →
        </a>
      )}
    </div>
  );
};

export const PackagesTable: FC<PackagesTableProps> = ({ className = '' }) => {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  const { setActivePackageId } = usePackageTheme();

  return (
    <section id="packages" className={`py-24 bg-theme-primary ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-theme-primary mb-4">Packages</h2>
          <p className="text-lg text-theme-muted max-w-2xl mx-auto">
            Powerful, type-safe tools for modern development. Use them individually or together.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-theme-border">
                <th className="text-left py-4 px-4 text-xs font-semibold uppercase tracking-wider text-theme-muted">
                  Package
                </th>
                <th className="text-left py-4 px-4 text-xs font-semibold uppercase tracking-wider text-theme-muted">
                  Description
                </th>
                <th className="text-left py-4 px-4 text-xs font-semibold uppercase tracking-wider text-theme-muted">
                  Version
                </th>
                <th className="text-left py-4 px-4 text-xs font-semibold uppercase tracking-wider text-theme-muted">
                  Status
                </th>
                <th className="text-left py-4 px-4 text-xs font-semibold uppercase tracking-wider text-theme-muted">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {PACKAGES.map((pkg) => {
                const versionInfo = PACKAGE_VERSIONS[pkg.id];
                const isExpanded = expandedPackage === pkg.id;
                const isHovered = hoveredPackage === pkg.id;

                return (
                  <tr
                    key={pkg.id}
                    className="border-b border-theme-border transition-all group relative"
                    style={{
                      backgroundColor: isHovered ? `${pkg.color}08` : undefined,
                      borderLeftWidth: isHovered ? '3px' : '0px',
                      borderLeftColor: isHovered ? pkg.color : 'transparent',
                    }}
                    onMouseEnter={() => {
                      setHoveredPackage(pkg.id);
                      setActivePackageId(pkg.id);
                    }}
                    onMouseLeave={() => {
                      setHoveredPackage(null);
                    }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{pkg.icon}</span>
                        <div>
                          <div className="font-semibold text-theme-primary">{pkg.name}</div>
                          <div className="text-xs font-mono text-theme-muted">{pkg.npmPackage}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-theme-secondary max-w-xs">
                      <div className="relative group/desc inline-block">
                        <span className="cursor-help border-b border-dashed border-theme-muted">{pkg.title}</span>
                        <div className="absolute left-0 top-full mt-2 z-[9999] opacity-0 invisible group-hover/desc:opacity-100 group-hover/desc:visible transition-all duration-200 pointer-events-none">
                          <div 
                            className="bg-theme-secondary border border-theme-border rounded-lg shadow-2xl p-5 w-80"
                            style={{ borderTopColor: pkg.color, borderTopWidth: '3px' }}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-3xl">{pkg.icon}</span>
                              <div>
                                <span className="font-bold text-lg" style={{ color: pkg.color }}>{pkg.name}</span>
                                <div className="text-xs text-theme-muted font-mono">{pkg.npmPackage}</div>
                              </div>
                            </div>
                            <p className="text-sm text-theme-secondary mb-4">{pkg.description}</p>
                            <div className="text-xs text-theme-muted">
                              <span className="font-semibold uppercase tracking-wider">Features</span>
                              <ul className="mt-2 space-y-1">
                                {pkg.features.slice(0, 5).map((feature, i) => (
                                  <li key={i} className="flex items-center gap-2 text-theme-secondary">
                                    <span style={{ color: pkg.color }}>•</span> {feature}
                                  </li>
                                ))}
                                {pkg.features.length > 5 && (
                                  <li className="text-theme-muted italic mt-2">+{pkg.features.length - 5} more...</li>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 relative">
                      <button
                        onClick={() => setExpandedPackage(isExpanded ? null : pkg.id)}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-md font-mono text-sm transition-colors hover:bg-theme-tertiary"
                        style={{ color: pkg.color }}
                      >
                        <span className="font-semibold">v{versionInfo?.version || '-'}</span>
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {isExpanded && <VersionDropdownContent packageId={pkg.id} color={pkg.color} />}
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-1 text-xs rounded-full border ${STATUS_STYLES[pkg.status]}`}>
                        {STATUS_LABELS[pkg.status]}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {pkg.status === 'ready' ? (
                        <Link
                          to={`/${pkg.id}/docs/quick-start`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:brightness-110"
                          style={{ backgroundColor: pkg.color }}
                        >
                          <span>Docs</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      ) : (
                        <span className="text-sm text-theme-muted italic">Coming soon</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

