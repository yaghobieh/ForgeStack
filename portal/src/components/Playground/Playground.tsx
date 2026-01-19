import { FC, useState, useRef, useEffect } from 'react';
import sdk from '@stackblitz/sdk';
import { PlaygroundProps } from './types';
import { PLAYGROUND_EXAMPLES } from './examples';

export const Playground: FC<PlaygroundProps> = ({ className = '' }) => {
  const [selectedExample, setSelectedExample] = useState(PLAYGROUND_EXAMPLES[0]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmbedded, setIsEmbedded] = useState(false);
  const embedRef = useRef<HTMLDivElement>(null);

  const openInStackBlitz = () => {
    sdk.openProject(
      {
        title: `Harbor - ${selectedExample.title}`,
        description: selectedExample.description,
        template: 'node',
        files: selectedExample.files,
        settings: {
          compile: {
            trigger: 'auto',
            clearConsole: false,
          },
        },
      },
      {
        openFile: selectedExample.entryPoint,
        newWindow: true,
      }
    );
  };

  const embedInPage = async () => {
    if (!embedRef.current) return;
    
    setIsLoading(true);
    
    try {
      await sdk.embedProject(
        embedRef.current,
        {
          title: `Harbor - ${selectedExample.title}`,
          description: selectedExample.description,
          template: 'node',
          files: selectedExample.files,
          settings: {
            compile: {
              trigger: 'auto',
              clearConsole: false,
            },
          },
        },
        {
          openFile: selectedExample.entryPoint,
          height: 600,
          view: 'default',
          hideExplorer: false,
          hideNavigation: false,
          forceEmbedLayout: true,
        }
      );
      setIsEmbedded(true);
    } catch (error) {
      console.error('Failed to embed StackBlitz:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Reset embed when example changes
  useEffect(() => {
    setIsEmbedded(false);
  }, [selectedExample]);

  return (
    <section className={`py-16 bg-theme-secondary ${className}`}>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-theme-primary mb-4">
            Try Harbor <span className="text-harbor-500">Live</span>
          </h2>
          <p className="text-lg text-theme-muted max-w-2xl mx-auto">
            Experiment with Harbor directly in your browser. No installation required.
          </p>
        </div>


        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {PLAYGROUND_EXAMPLES.map((example) => (
            <button
              key={example.id}
              onClick={() => setSelectedExample(example)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedExample.id === example.id
                  ? 'bg-harbor-500 text-white shadow-lg'
                  : 'bg-theme-tertiary text-theme-secondary hover:bg-theme-primary hover:text-theme-primary'
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>


        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-theme-primary">{selectedExample.title}</h3>
          <p className="text-theme-muted">{selectedExample.description}</p>
        </div>


        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={openInStackBlitz}
            className="flex items-center gap-2 px-6 py-3 bg-harbor-500 text-white rounded-lg font-medium hover:bg-harbor-600 transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Open in StackBlitz
          </button>
          
          {!isEmbedded && (
            <button
              onClick={embedInPage}
              disabled={isLoading}
              className="flex items-center gap-2 px-6 py-3 bg-theme-tertiary text-theme-primary rounded-lg font-medium hover:bg-jet-700 transition-colors border border-theme-border"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Loading...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Preview Here
                </>
              )}
            </button>
          )}
        </div>


        <div 
          ref={embedRef}
          className={`w-full rounded-xl overflow-hidden border border-theme-border ${
            isEmbedded ? 'min-h-[600px]' : 'hidden'
          }`}
        />


        {!isEmbedded && (
          <div className="bg-theme-primary rounded-xl border border-theme-border overflow-hidden">

            <div className="flex border-b border-theme-border bg-theme-secondary">
              {Object.keys(selectedExample.files).map((filename) => (
                <div
                  key={filename}
                  className={`px-4 py-2 text-sm font-mono ${
                    filename === selectedExample.entryPoint
                      ? 'bg-theme-primary text-harbor-500 border-b-2 border-harbor-500'
                      : 'text-theme-muted'
                  }`}
                >
                  {filename}
                </div>
              ))}
            </div>
            

            <div className="p-6 overflow-x-auto">
              <pre className="font-mono text-sm text-theme-secondary leading-relaxed">
                <code>{selectedExample.files[selectedExample.entryPoint]}</code>
              </pre>
            </div>
          </div>
        )}


        <p className="text-center text-sm text-theme-muted mt-6">
          Powered by <a href="https://stackblitz.com" target="_blank" rel="noopener noreferrer" className="text-harbor-500 hover:underline">StackBlitz</a> WebContainers — runs Node.js entirely in your browser.
        </p>
      </div>
    </section>
  );
};

