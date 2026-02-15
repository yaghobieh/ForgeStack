/**
 * Relay Documentation Page
 */

import { FC } from 'react';
import { CodeBlock } from '@/components';
import { RELAY_DOCS, RELAY_VERSION } from '@/constants/relay-docs.const';

const RelayDocs: FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">📡</span>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Relay</h1>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
            v{RELAY_VERSION}
          </span>
        </div>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Zero-dependency HTTP client for the ForgeStack ecosystem
        </p>
      </div>

      {/* Sections */}
      {RELAY_DOCS.map((section) => (
        <section key={section.id} id={section.id} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {section.title}
          </h2>
          
          {section.content.includes('|') ? (
            <div 
              className="prose prose-sm dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: section.content
                  .replace(/\|(.+)\|/g, '<tr><td>$1</td></tr>')
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">$1</code>')
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
                    <li key={i} className="text-gray-600 dark:text-gray-300">
                      {line.replace('- ', '').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs">$1</code>')}
                    </li>
                  );
                }
                return (
                  <p 
                    key={i} 
                    className="text-gray-600 dark:text-gray-300 mb-2"
                    dangerouslySetInnerHTML={{
                      __html: line
                        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                        .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-xs">$1</code>')
                    }}
                  />
                );
              })}
            </div>
          )}
          
          {section.code && (
            <CodeBlock 
              code={section.code} 
              language="typescript"
              showLineNumbers
            />
          )}
        </section>
      ))}

      {/* Next Steps */}
      <section id="next-steps" className="mb-12 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl border border-indigo-500/20">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Next Steps
        </h2>
        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
          <li>📚 Explore the <a href="/bear" className="text-indigo-500 hover:underline">Bear UI</a> components</li>
          <li>🧭 Set up routing with <a href="/compass" className="text-indigo-500 hover:underline">Compass</a></li>
          <li>🐙 Manage state with <a href="/synapse" className="text-indigo-500 hover:underline">Synapse</a></li>
          <li>📝 Handle forms with <a href="/form" className="text-indigo-500 hover:underline">Forge Form</a></li>
          <li>⚒️ Use utilities from <a href="/anvil" className="text-indigo-500 hover:underline">Anvil</a></li>
        </ul>
      </section>
    </div>
  );
};

export default RelayDocs;
