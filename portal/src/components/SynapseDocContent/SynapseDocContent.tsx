import { FC, ReactNode } from 'react';
import { SYNAPSE_DOCS, SYNAPSE_COLOR } from '@/constants/synapse-docs.const';
import { CodeBlock } from '../CodeBlock';
import { SynapseIcon } from '../Icons';

interface SynapseDocContentProps {
  page: string;
}

// Feature Card Component
const FeatureCard: FC<{ icon: ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-3 rounded-lg bg-theme-primary/50">
    <div className="mb-1" style={{ color: SYNAPSE_COLOR }}>{icon}</div>
    <h4 className="font-medium text-theme-primary text-sm">{title}</h4>
    <p className="text-xs text-theme-secondary">{desc}</p>
  </div>
);

// Overview Feature Component
const OverviewFeature: FC<{ icon: ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div 
    className="p-4 rounded-lg border border-theme-border bg-theme-secondary hover:border-opacity-50 transition-colors"
    style={{ borderColor: `${SYNAPSE_COLOR}30` }}
  >
    <div className="w-8 h-8 mb-2" style={{ color: SYNAPSE_COLOR }}>{icon}</div>
    <h3 className="font-medium text-theme-primary">{title}</h3>
    <p className="text-sm text-theme-secondary">{desc}</p>
  </div>
);

// Middleware Card Component
const MiddlewareCard: FC<{ icon: string; name: string; desc: string }> = ({ icon, name, desc }) => {
  const getIcon = () => {
    switch (icon) {
      case 'log':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>;
      case 'save':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>;
      case 'edit':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>;
      case 'undo':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></svg>;
      case 'clock':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
      case 'shield':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>;
      case 'sync':
        return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>;
      default:
        return null;
    }
  };

  return (
    <div 
      className="p-4 rounded-lg border border-theme-border bg-theme-secondary hover:border-opacity-50 transition-colors"
      style={{ borderColor: `${SYNAPSE_COLOR}30` }}
    >
      <div className="w-6 h-6 mb-2" style={{ color: SYNAPSE_COLOR }}>{getIcon()}</div>
      <h3 className="font-mono font-medium text-theme-primary">{name}()</h3>
      <p className="text-sm text-theme-secondary">{desc}</p>
    </div>
  );
};

// Feature icon mapper for overview
const getFeatureIcon = (iconName: string) => {
  switch (iconName) {
    case 'nucleus':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/></svg>;
    case 'signal':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case 'hooks':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
    case 'middleware':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4v16h16"/><path d="M4 20h16"/><rect x="8" y="8" width="4" height="8"/><rect x="14" y="4" width="4" height="12"/></svg>;
    case 'devtools':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>;
    case 'api':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;
    case 'typescript':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><path d="M8 7h8"/><path d="M8 11h6"/></svg>;
    case 'time':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case 'tiny':
      return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>;
    default:
      return null;
  }
};

export const SynapseDocContent: FC<SynapseDocContentProps> = ({ page }) => {
  const doc = SYNAPSE_DOCS[page];

  if (!doc) {
    return <div className="text-red-500">Documentation for "{page}" not found.</div>;
  }

  const isOverview = page === 'overview';
  const isMiddleware = page === 'middleware';
  const isDevtools = page === 'devtools';

  return (
    <article className="max-w-none space-y-8">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          {isOverview && <SynapseIcon size={56} />}
          <div>
            <h1 className="text-4xl font-bold" style={{ color: SYNAPSE_COLOR }}>{doc.title}</h1>
            {isOverview && (
              <span 
                className="text-xs px-2 py-0.5 rounded"
                style={{ backgroundColor: `${SYNAPSE_COLOR}20`, color: SYNAPSE_COLOR }}
              >
                v1.0.0
              </span>
            )}
          </div>
        </div>
        <p className="text-xl text-theme-secondary leading-relaxed">
          {doc.description}
        </p>
      </div>

      {/* Overview "Why Synapse" section */}
      {isOverview && (
        <div 
          className="rounded-xl p-6 border"
          style={{ 
            background: `linear-gradient(to right, ${SYNAPSE_COLOR}20, #6366f120)`,
            borderColor: `${SYNAPSE_COLOR}30`
          }}
        >
          <h3 className="text-lg font-semibold text-theme-primary mb-4">Why Synapse?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4">
              <div className="w-10 h-10 mx-auto mb-2" style={{ color: SYNAPSE_COLOR }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
              </div>
              <h4 className="font-medium text-theme-primary">Ultra Simple</h4>
              <p className="text-sm text-theme-secondary">No dispatch, no reducers, no selectors</p>
            </div>
            <div className="text-center p-4">
              <div className="w-10 h-10 mx-auto mb-2" style={{ color: SYNAPSE_COLOR }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
              </div>
              <h4 className="font-medium text-theme-primary">Tiny Bundle</h4>
              <p className="text-sm text-theme-secondary">&lt; 2KB gzipped</p>
            </div>
            <div className="text-center p-4">
              <div className="w-10 h-10 mx-auto mb-2" style={{ color: SYNAPSE_COLOR }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <h4 className="font-medium text-theme-primary">Fast</h4>
              <p className="text-sm text-theme-secondary">Minimal re-renders with fine-grained subscriptions</p>
            </div>
          </div>
        </div>
      )}

      {/* DevTools Features Grid */}
      {isDevtools && doc.features && (
        <div 
          className="rounded-xl p-6 border"
          style={{ 
            background: `linear-gradient(to right, ${SYNAPSE_COLOR}20, #6366f120)`,
            borderColor: `${SYNAPSE_COLOR}30`
          }}
        >
          <h3 className="text-lg font-semibold text-theme-primary mb-4">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {doc.features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="3"/></svg>}
                title={feature.title}
                desc={feature.desc}
              />
            ))}
          </div>
        </div>
      )}

      {/* Middleware cards grid */}
      {isMiddleware && doc.middleware && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {doc.middleware.map((mw) => (
            <MiddlewareCard key={mw.name} icon={mw.icon} name={mw.name} desc={mw.desc} />
          ))}
        </div>
      )}

      {/* Sections */}
      {doc.sections.map((section) => (
        <div key={section.id}>
          <h2 className="text-xl font-semibold text-theme-primary mb-4">{section.title}</h2>
          <p className="text-theme-secondary mb-4 whitespace-pre-line">{section.content}</p>
          {section.code && (
            <CodeBlock code={section.code} filename={section.filename} language={section.language} />
          )}
        </div>
      ))}

      {/* Overview features grid */}
      {isOverview && doc.features && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {doc.features.map((feature) => (
            <OverviewFeature
              key={feature.title}
              icon={getFeatureIcon(feature.icon)}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      )}

      {/* API Table (for nucleus comparison, devtools shortcuts, api reference) */}
      {doc.apiTable && (
        <div className="overflow-x-auto">
          <table className="w-full border border-theme-border rounded-lg text-sm">
            <thead>
              <tr className="bg-theme-secondary">
                {doc.apiTable.headers.map((header) => (
                  <th key={header} className="px-4 py-3 text-left font-medium text-theme-primary border-b border-theme-border">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {doc.apiTable.rows.map((row, idx) => (
                <tr key={idx} className="border-b border-theme-border hover:bg-theme-hover">
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      className={`px-4 py-3 ${cellIdx === 0 ? 'font-mono' : 'text-theme-secondary'}`}
                      style={cellIdx === 0 ? { color: SYNAPSE_COLOR } : undefined}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </article>
  );
};

