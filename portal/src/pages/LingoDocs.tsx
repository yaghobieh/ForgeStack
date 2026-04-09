import { FC } from 'react';
import { CodeBlock } from '@/components';
import { LINGO_DOCS, LINGO_VERSION } from '@/constants/lingo-docs.const';

const LingoDocs: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🌐</span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Lingo</h1>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400">
            v{LINGO_VERSION}
          </span>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Translation and localization for ForgeStack — library + Lingo Portal for managed keys
        </p>
      </div>

      {LINGO_DOCS.map((section) => (
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
        className="mb-12 p-6 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-xl border border-teal-500/20"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Next steps</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            <a
              href="https://github.com/yaghobieh/lingo-portal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:underline"
            >
              Lingo Portal repository (UI + API)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yaghobieh/lingo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 dark:text-teal-400 hover:underline"
            >
              Lingo library source
            </a>
          </li>
          <li>
            🚃 Carousels: <a href="/rail" className="text-teal-600 dark:text-teal-400 hover:underline">Rail</a>
          </li>
          <li>
            🐻 UI: <a href="/bear" className="text-teal-600 dark:text-teal-400 hover:underline">Bear</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default LingoDocs;
