import { FC } from 'react';
import { CodeBlock } from '@/components';
import { RAIL_DOCS, RAIL_VERSION } from '@/constants/rail-docs.const';

const RailDocs: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🚃</span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Rail</h1>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-400">
            v{RAIL_VERSION}
          </span>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Modular carousel engine for React — docs, demos, and Studio on railjs.com
        </p>
      </div>

      {RAIL_DOCS.map((section) => (
        <section key={section.id} id={section.id} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{section.title}</h2>

          {section.content.includes('|') ? (
            <div
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{
                __html: section.content
                  .replace(/\|(.+)\|/g, '<tr><td>$1</td></tr>')
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>'),
              }}
            />
          ) : (
            <div className="prose prose-sm dark:prose-invert max-w-none mb-4">
              {section.content.split('\n').map((line, i) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <h3 key={i} className="font-semibold text-lg mt-4 mb-2">
                      {line.replace(/\*\*/g, '')}
                    </h3>
                  );
                }
                if (line.startsWith('- ')) {
                  return (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-300 list-disc ml-5"
                      dangerouslySetInnerHTML={{
                        __html: line
                          .replace(/^- /, '')
                          .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                          .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs">$1</code>'),
                      }}
                    />
                  );
                }
                if (line.trim() === '') {
                  return <br key={i} />;
                }
                return (
                  <p
                    key={i}
                    className="text-gray-600 dark:text-gray-300 mb-2"
                    dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                        .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs">$1</code>'),
                    }}
                  />
                );
              })}
            </div>
          )}

          {section.code && (
            <CodeBlock code={section.code} language="typescript" showLineNumbers />
          )}
        </section>
      ))}

      <section
        id="next-steps"
        className="mb-12 p-6 bg-gradient-to-r from-cyan-500/10 to-sky-500/10 rounded-xl border border-cyan-500/20"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Next steps</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            <a
              href="https://railjs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Rail Portal (docs & demos)
            </a>
          </li>
          <li>
            <a
              href="https://railjs.com/studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Rail Studio (interactive builder)
            </a>
          </li>
          <li>
            🌐 Copy and locales: <a href="/lingo" className="text-cyan-600 dark:text-cyan-400 hover:underline">Lingo</a>
          </li>
          <li>
            🐻 UI kit: <a href="/bear" className="text-cyan-600 dark:text-cyan-400 hover:underline">Bear</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default RailDocs;
