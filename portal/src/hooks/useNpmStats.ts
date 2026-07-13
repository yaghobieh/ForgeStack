import { useState, useEffect } from 'react';

const NPM_REGISTRY_URL = 'https://registry.npmjs.org';
const NPM_DOWNLOADS_URL = 'https://api.npmjs.org/downloads/point/last-week';
const CACHE_KEY = 'forgestack-npm-stats';
const CACHE_TTL_MS = 60 * 60 * 1000;

export interface NpmPackageStats {
  version?: string;
  weeklyDownloads?: number;
}

export type NpmStatsMap = Partial<Record<string, NpmPackageStats>>;

interface NpmStatsCache {
  timestamp: number;
  stats: NpmStatsMap;
}

const readCache = (): NpmStatsCache | null => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as NpmStatsCache;
    if (!parsed.timestamp || Date.now() - parsed.timestamp > CACHE_TTL_MS) return null;
    return parsed;
  } catch {
    return null;
  }
};

const writeCache = (stats: NpmStatsMap): void => {
  try {
    const payload: NpmStatsCache = { timestamp: Date.now(), stats };
    localStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    // Storage full or unavailable — live without the cache
  }
};

const fetchJson = async (url: string): Promise<Record<string, unknown> | null> => {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return (await res.json()) as Record<string, unknown>;
  } catch {
    return null;
  }
};

const fetchPackageStats = async (pkg: string): Promise<NpmPackageStats> => {
  const [latest, downloads] = await Promise.all([
    fetchJson(`${NPM_REGISTRY_URL}/${pkg}/latest`),
    fetchJson(`${NPM_DOWNLOADS_URL}/${pkg}`),
  ]);
  return {
    version: typeof latest?.version === 'string' ? latest.version : undefined,
    weeklyDownloads: typeof downloads?.downloads === 'number' ? downloads.downloads : undefined,
  };
};

/**
 * Fetches latest version + weekly downloads for a list of npm packages.
 * Results are cached in localStorage for an hour and degrade gracefully
 * (missing entries stay undefined) when the registry is unreachable.
 */
export function useNpmStats(packages: readonly string[]): NpmStatsMap {
  const [stats, setStats] = useState<NpmStatsMap>({});

  useEffect(() => {
    let cancelled = false;

    const cached = readCache();
    if (cached) {
      setStats(cached.stats);
      return;
    }

    const fetchAll = async () => {
      const results = await Promise.allSettled(
        packages.map(async (pkg) => ({ pkg, stats: await fetchPackageStats(pkg) }))
      );

      const map: NpmStatsMap = {};
      results.forEach((r) => {
        if (r.status === 'fulfilled') {
          map[r.value.pkg] = r.value.stats;
        }
      });

      if (!cancelled) {
        setStats(map);
        writeCache(map);
      }
    };

    fetchAll();

    return () => {
      cancelled = true;
    };
    // Package list is a module-level constant; deliberately fetch once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return stats;
}

const THOUSAND = 1000;

export const formatDownloads = (count: number): string => {
  if (count >= THOUSAND * THOUSAND) return `${(count / (THOUSAND * THOUSAND)).toFixed(1)}M`;
  if (count >= THOUSAND) return `${(count / THOUSAND).toFixed(1)}k`;
  return String(count);
};
