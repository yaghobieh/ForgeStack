import { FC, useEffect, useState } from 'react';
import { GitHubIcon, ExternalLinkIcon } from '../components/Icons';
import { SHOWCASE_REPOS } from '@constants/sidebar.const';

interface GitHubRepo {
  id: string;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  topics: string[];
  updated_at: string;
}

const SHOWCASE_REPO_PATHS = SHOWCASE_REPOS.map((repo) =>
  repo.url.replace('https://github.com/', '')
);

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Rust: '#dea584',
  Go: '#00ADD8',
};

export const Showcase: FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repoData = await Promise.all(
          SHOWCASE_REPO_PATHS.map(async (repoPath) => {
            const response = await fetch(`https://api.github.com/repos/${repoPath}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch ${repoPath}`);
            }
            return response.json();
          })
        );
        setRepos(repoData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-theme-primary py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-theme-primary mb-4">Showcase</h1>
          <p className="text-lg text-theme-muted max-w-2xl mx-auto">
            Open source projects from the ForgeStack ecosystem
          </p>
        </div>

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-forge-500 border-t-transparent"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-400 mb-4">{error}</p>
            <p className="text-theme-muted">Check back later or visit our GitHub directly.</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid gap-6 md:grid-cols-2">
            {repos.map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-theme-secondary border border-theme-border rounded-xl p-6 transition-all hover:border-forge-500/50 hover:shadow-lg hover:shadow-forge-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <GitHubIcon size={24} className="text-theme-muted" />
                    <div>
                      <h3 className="font-semibold text-lg text-theme-primary group-hover:text-forge-500 transition-colors">
                        {repo.name}
                      </h3>
                      <span className="text-xs text-theme-muted font-mono">{repo.full_name}</span>
                    </div>
                  </div>
                  <ExternalLinkIcon size={16} className="text-theme-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <p className="text-sm text-theme-secondary mb-4 line-clamp-2">
                  {repo.description || 'No description available'}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics?.slice(0, 4).map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-1 bg-theme-tertiary text-theme-muted rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs text-theme-muted">
                  {repo.language && (
                    <div className="flex items-center gap-1.5">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: LANGUAGE_COLORS[repo.language] || '#6e6e6e' }}
                      />
                      <span>{repo.language}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .587l3.668 7.431 8.207 1.191-5.938 5.785 1.402 8.168L12 18.896l-7.339 3.859 1.402-8.168L.125 9.209l8.207-1.191L12 .587z"/>
                    </svg>
                    <span>{repo.stargazers_count}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
                    </svg>
                    <span>{repo.forks_count}</span>
                  </div>
                  <span className="ml-auto">Updated {formatDate(repo.updated_at)}</span>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="https://github.com/yaghobieh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-theme-secondary border border-theme-border rounded-lg text-theme-primary hover:border-forge-500/50 transition-colors"
          >
            <GitHubIcon size={20} />
            <span>View all repositories</span>
            <ExternalLinkIcon size={16} className="text-theme-muted" />
          </a>
        </div>
      </div>
    </div>
  );
};

