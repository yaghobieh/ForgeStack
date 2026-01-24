import { FC } from 'react';
import { CodeBlock, TabbedCode } from '../CodeBlock';
import { ANVIL_DOCS } from '../../constants/anvil-docs.const';

interface AnvilDocContentProps {
  page: string;
}

// Anvil brand color
const ANVIL_COLOR = '#EC4899';

export const AnvilDocContent: FC<AnvilDocContentProps> = ({ page }) => {
  const doc = ANVIL_DOCS[page];
  
  if (!doc) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-theme-primary mb-4">Page Not Found</h1>
        <p className="text-theme-secondary">The documentation page "{page}" does not exist.</p>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-4" style={{ color: ANVIL_COLOR }}>
          {doc.title}
        </h1>
        <p className="text-lg text-theme-secondary leading-relaxed">
          {doc.description}
        </p>
      </div>

      {doc.sections.map((section) => (
        <div key={section.id} id={section.id}>
          {section.title && (
            <h2 className="text-xl font-semibold text-theme-primary mb-4">
              {section.title}
            </h2>
          )}
          {section.content && (
            <p className="text-theme-secondary mb-4 leading-relaxed">
              {section.content}
            </p>
          )}
          {section.code && (
            <CodeBlock 
              code={section.code} 
              filename={section.filename}
            />
          )}
        </div>
      ))}

      {doc.examples && doc.examples.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold text-theme-primary mb-4">
            Framework Examples
          </h2>
          <p className="text-theme-secondary mb-4">
            See how to use these utilities across different frameworks:
          </p>
          <TabbedCode examples={doc.examples} />
        </div>
      )}
    </article>
  );
};

export default AnvilDocContent;

