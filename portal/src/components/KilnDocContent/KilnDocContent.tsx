import { FC } from 'react';
import { KILN_DOCS, KILN_COLOR, KilnDocSection } from '../../constants/kiln-docs.const';
import { CodeBlock } from '../CodeBlock';
import { LivePreview } from '../LivePreview';

interface KilnDocContentProps {
  page: keyof typeof KILN_DOCS;
}

/**
 * ComparisonTable - Renders Kiln vs Storybook comparison
 */
const ComparisonTable: FC<{ comparison: { kiln: string; storybook: string }[] }> = ({ comparison }) => (
  <div className="overflow-x-auto mb-6">
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th 
            className="px-4 py-3 text-left text-sm font-semibold rounded-tl-lg"
            style={{ backgroundColor: KILN_COLOR, color: '#fff' }}
          >
            🔥 Kiln
          </th>
          <th 
            className="px-4 py-3 text-left text-sm font-semibold rounded-tr-lg bg-gray-600 text-white"
          >
            📚 Storybook
          </th>
        </tr>
      </thead>
      <tbody>
        {comparison.map((row, i) => (
          <tr key={i} className="border-b border-theme-border">
            <td className="px-4 py-3 text-sm" style={{ color: '#4ade80' }}>
              ✓ {row.kiln}
            </td>
            <td className="px-4 py-3 text-sm text-theme-secondary">
              {row.storybook}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/**
 * FeatureGrid - Renders features in a nice grid
 */
const FeatureGrid: FC<{ features: string[] }> = ({ features }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
    {features.map((feature, i) => (
      <div 
        key={i}
        className="flex items-center gap-2 px-4 py-3 rounded-lg border border-theme-border bg-theme-secondary"
      >
        <span style={{ color: KILN_COLOR }}>✓</span>
        <span className="text-sm text-theme-primary">{feature}</span>
      </div>
    ))}
  </div>
);

/**
 * SectionRenderer - Renders a single documentation section
 */
const SectionRenderer: FC<{ section: KilnDocSection }> = ({ section }) => {
  // Determine language based on filename
  const getLanguage = (filename?: string): string => {
    if (!filename) return 'tsx';
    if (filename === 'terminal') return 'bash';
    if (filename.endsWith('.json')) return 'json';
    if (filename.endsWith('.tsx') || filename.endsWith('.ts')) return 'tsx';
    return 'tsx';
  };

  return (
    <section id={section.id} className="scroll-mt-20">
      <h2 className="text-xl font-semibold text-theme-primary mb-3 flex items-center gap-2">
        {section.title}
      </h2>

      {section.content && (
        <div className="text-theme-secondary whitespace-pre-line mb-4 leading-relaxed">
          {section.content}
        </div>
      )}

      {/* Render comparison table */}
      {section.comparison && (
        <ComparisonTable comparison={section.comparison} />
      )}

      {/* Render feature grid */}
      {section.features && (
        <FeatureGrid features={section.features} />
      )}

      {/* Render code block or live preview */}
      {section.code && !section.livePreview && (
        <CodeBlock 
          code={section.code} 
          language={getLanguage(section.filename)}
          filename={section.filename !== 'terminal' ? section.filename : undefined}
        />
      )}

      {/* Render live preview when specified */}
      {section.code && section.livePreview && (
        <LivePreview
          code={section.code}
          title={section.title}
          description={section.content}
          accentColor={KILN_COLOR}
          filename={section.filename}
        >
          <div className="text-white text-center">
            <span className="text-2xl">🔥</span>
            <p className="mt-2 text-sm opacity-75">Live preview coming soon</p>
          </div>
        </LivePreview>
      )}
    </section>
  );
};

/**
 * KilnDocContent - Renders Kiln documentation pages
 */
export const KilnDocContent: FC<KilnDocContentProps> = ({ page }) => {
  const doc = KILN_DOCS[page];

  if (!doc) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-theme-primary mb-2">Page Not Found</h2>
        <p className="text-theme-secondary">The requested documentation page doesn't exist.</p>
      </div>
    );
  }

  return (
    <article className="max-w-none">
      {/* Header */}
      <header className="mb-8 pb-8 border-b border-theme-border">
        <div className="flex items-center gap-3 mb-3">
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ backgroundColor: `${KILN_COLOR}20`, color: KILN_COLOR }}
          >
            🔥 Component Docs
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-theme-primary mb-3">
          {doc.title}
        </h1>
        <p className="text-lg text-theme-secondary">{doc.description}</p>
      </header>

      {/* Sections */}
      <div className="space-y-10">
        {doc.sections.map((section) => (
          <SectionRenderer key={section.id} section={section} />
        ))}
      </div>

      {/* Footer CTA */}
      <div 
        className="mt-12 p-6 rounded-xl border"
        style={{ borderColor: `${KILN_COLOR}40`, backgroundColor: `${KILN_COLOR}10` }}
      >
        <h3 className="text-lg font-semibold mb-2" style={{ color: KILN_COLOR }}>
          🔥 Ready to get started?
        </h3>
        <p className="text-theme-secondary mb-4">
          Install Kiln and create your first story in under a minute.
        </p>
        <code 
          className="block px-4 py-3 rounded-lg font-mono text-sm"
          style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
        >
          npm install @forgedevstack/kiln && npx kiln init
        </code>
      </div>

      {/* Next Steps */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {page === 'overview' && (
          <>
            <a 
              href="/kiln/installation"
              className="block p-4 rounded-lg border border-theme-border hover:border-amber-500/50 transition-colors"
            >
              <span className="text-lg font-medium text-theme-primary">Installation →</span>
              <p className="text-sm text-theme-secondary mt-1">Set up Kiln in your project</p>
            </a>
            <a 
              href="/kiln/quick-start"
              className="block p-4 rounded-lg border border-theme-border hover:border-amber-500/50 transition-colors"
            >
              <span className="text-lg font-medium text-theme-primary">Quick Start →</span>
              <p className="text-sm text-theme-secondary mt-1">Create your first story</p>
            </a>
          </>
        )}
        {page === 'installation' && (
          <a 
            href="/kiln/quick-start"
            className="block p-4 rounded-lg border border-theme-border hover:border-amber-500/50 transition-colors"
          >
            <span className="text-lg font-medium text-theme-primary">Next: Quick Start →</span>
            <p className="text-sm text-theme-secondary mt-1">Write your first story file</p>
          </a>
        )}
        {page === 'quick-start' && (
          <a 
            href="/kiln/stories"
            className="block p-4 rounded-lg border border-theme-border hover:border-amber-500/50 transition-colors"
          >
            <span className="text-lg font-medium text-theme-primary">Next: Writing Stories →</span>
            <p className="text-sm text-theme-secondary mt-1">Learn advanced story patterns</p>
          </a>
        )}
      </div>
    </article>
  );
};
