import { FC } from 'react';
import { CodeBlock } from '@/components';
import {
  AEROCRAFT_DOCS,
  AEROCRAFT_PORTAL_URL,
  AEROCRAFT_VERSION,
} from '@/constants/aerocraft-docs.const';

const AeroCraftDocs: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">✈️</span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AeroCraft</h1>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400">
            v{AEROCRAFT_VERSION}
          </span>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          CSS shortcut utilities — docs, reference, Studio, and Playground on {AEROCRAFT_PORTAL_URL.replace('https://', '')}
        </p>
      </div>

      {AEROCRAFT_DOCS.map((section) => (
        <section key={section.id} id={section.id} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{section.title}</h2>

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

          {section.code && (
            <CodeBlock code={section.code} language="typescript" showLineNumbers />
          )}
        </section>
      ))}

      <section
        id="next-steps"
        className="mb-12 p-6 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 rounded-xl border border-indigo-500/20"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Next steps</h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>
            <a
              href={AEROCRAFT_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              AeroCraft Portal (docs &amp; Studio)
            </a>
          </li>
          <li>
            🚃 Carousel engine: <a href="/rail" className="text-indigo-600 dark:text-indigo-400 hover:underline">Rail</a>
            {' '}
            (
            <a href="https://railjs.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">railjs.com</a>
            )
          </li>
          <li>
            🔦 Media players: <a href="/torch" className="text-indigo-600 dark:text-indigo-400 hover:underline">Torch</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AeroCraftDocs;
