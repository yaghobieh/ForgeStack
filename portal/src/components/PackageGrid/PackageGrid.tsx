import { FC } from 'react';
import { Link } from 'react-router-dom';
import { PACKAGES } from '@/constants/content.const';
import type { PackageCardProps } from './types';

const StatusBadge: FC<{ status: PackageCardProps['status'] }> = ({ status }) => {
  const styles = {
    ready: 'bg-green-500/20 text-green-400 border-green-500/30',
    'coming-soon': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    planned: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  };

  const labels = {
    ready: 'Ready',
    'coming-soon': 'Coming Soon',
    planned: 'Planned',
  };

  return (
    <span className={`px-2 py-0.5 text-xs rounded-full border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

const PackageCard: FC<PackageCardProps> = ({
  id,
  name,
  title,
  description,
  icon,
  status,
  features,
  color,
}) => {
  const isReady = status === 'ready';

  return (
    <div 
      className="forge-card group"
      style={{ borderColor: `${color}20` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{icon}</span>
          <div>
            <h3 className="text-xl font-bold text-theme-primary">{name}</h3>
            <p className="text-sm text-theme-muted">{title}</p>
          </div>
        </div>
        <StatusBadge status={status} />
      </div>

      <p className="text-theme-secondary mb-4">
        {description}
      </p>

      <ul className="space-y-2 mb-6">
        {features.slice(0, 4).map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-theme-muted">
            <svg className="w-4 h-4" style={{ color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {isReady ? (
        <Link
          to={`/${id}/docs/quick-start`}
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color }}
        >
          View Documentation
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      ) : (
        <span className="text-sm text-theme-muted">
          Coming soon...
        </span>
      )}
    </div>
  );
};

export const PackageGrid: FC = () => {
  return (
    <section id="packages" className="py-24 bg-theme-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-theme-primary mb-4">
            Packages
          </h2>
          <p className="text-lg text-theme-muted max-w-2xl mx-auto">
            Powerful, type-safe tools for modern development. Use them individually or together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

