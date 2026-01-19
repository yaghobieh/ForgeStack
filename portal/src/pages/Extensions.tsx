import { FC, useEffect, useState } from 'react';
import { EXTENSIONS } from '@constants';
import { VSCodeIcon, DownloadIcon, ExternalLinkIcon } from '../components/Icons';

interface ExtensionStats {
  downloads: number;
  rating?: number;
}

const fetchOpenVsxStats = async (extensionId: string): Promise<ExtensionStats | null> => {
  try {
    const response = await fetch(
      `https://open-vsx.org/api/Yaghobieh/${extensionId}`
    );
    if (!response.ok) return null;
    const data = await response.json();
    return {
      downloads: data.downloadCount || 0,
      rating: data.averageRating,
    };
  } catch {
    return null;
  }
};

const formatDownloads = (count: number): string => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
};

export const Extensions: FC = () => {
  const [stats, setStats] = useState<Record<string, ExtensionStats>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStats = async () => {
      const results: Record<string, ExtensionStats> = {};
      
      for (const ext of EXTENSIONS) {
        const extensionStats = await fetchOpenVsxStats(ext.id);
        if (extensionStats) {
          results[ext.id] = extensionStats;
        }
      }
      
      setStats(results);
      setLoading(false);
    };

    loadStats();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forge-500/10 text-forge-500 text-sm font-medium mb-4">
          <VSCodeIcon size={16} />
          VS Code & Cursor Extensions
        </div>
        <h1 className="text-4xl font-bold text-theme-primary mb-4">
          Developer Extensions
        </h1>
        <p className="text-lg text-theme-muted max-w-2xl mx-auto">
          Boost your productivity with our VS Code and Cursor extensions. 
          Available on Open VSX marketplace.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {EXTENSIONS.map((ext) => {
          const extStats = stats[ext.id];
          
          return (
            <div
              key={ext.id}
              className="group relative bg-theme-secondary border border-theme-border rounded-xl p-6 hover:border-forge-500/50 transition-all hover:shadow-lg hover:shadow-forge-500/10"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{ backgroundColor: `${ext.color}20` }}
                >
                  {ext.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-semibold text-theme-primary">
                      {ext.name}
                    </h3>
                    {ext.status === 'ready' && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/20 text-green-400">
                        Available
                      </span>
                    )}
                  </div>
                  
                  <p className="text-theme-muted text-sm mb-4">
                    {ext.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5 text-theme-muted">
                      <DownloadIcon size={14} />
                      {loading ? (
                        <span className="w-12 h-4 bg-theme-tertiary rounded animate-pulse" />
                      ) : (
                        <span className="font-medium">
                          {extStats ? formatDownloads(extStats.downloads) : '—'}
                        </span>
                      )}
                      <span className="text-theme-muted/60">installs</span>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-theme-muted">
                      <VSCodeIcon size={14} />
                      <span>VS Code / Cursor</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex gap-3">
                <a
                  href={ext.openVsxLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-forge-600 hover:bg-forge-500 text-white font-medium text-sm transition-colors"
                >
                  <DownloadIcon size={16} />
                  Install from Open VSX
                </a>
                
                <a
                  href={ext.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-theme-border hover:bg-theme-tertiary text-theme-primary font-medium text-sm transition-colors"
                  title="View on Open VSX"
                >
                  <ExternalLinkIcon size={16} />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 p-6 bg-theme-secondary/50 border border-theme-border rounded-xl">
        <h3 className="text-lg font-semibold text-theme-primary mb-3">
          Install via Command Palette
        </h3>
        <div className="space-y-3">
          {EXTENSIONS.map((ext) => (
            <div key={ext.id} className="flex items-center gap-3">
              <span className="text-lg">{ext.icon}</span>
              <code className="flex-1 px-3 py-2 bg-theme-tertiary rounded-lg text-sm text-forge-400 font-mono">
                ext install Yaghobieh.{ext.id}
              </code>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-theme-muted">
          Open Command Palette (<kbd className="px-1.5 py-0.5 bg-theme-tertiary rounded text-xs">Ctrl+Shift+X</kbd> / <kbd className="px-1.5 py-0.5 bg-theme-tertiary rounded text-xs">Cmd+Shift+X</kbd>) 
          and paste the command above.
        </p>
      </div>
    </div>
  );
};

