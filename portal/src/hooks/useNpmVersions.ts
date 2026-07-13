import { useState, useEffect } from 'react';
import { PACKAGES } from '@/constants/content.const';

const NPM_REGISTRY_URL = 'https://registry.npmjs.org';

const PUBLISHED_PACKAGES = PACKAGES.filter(
  (pkg) => pkg.status === 'ready' && pkg.npmPackage.startsWith('@forgedevstack/')
);

export type NpmVersions = Partial<Record<string, string>>;

export function useNpmVersions(): NpmVersions {
  const [versions, setVersions] = useState<NpmVersions>({});

  useEffect(() => {
    const fetchAll = async () => {
      const results = await Promise.allSettled(
        PUBLISHED_PACKAGES.map(async (pkg) => {
          const res = await fetch(`${NPM_REGISTRY_URL}/${pkg.npmPackage}/latest`);
          const data = await res.json();
          return { id: pkg.id, version: data?.version as string | undefined };
        })
      );

      const map: NpmVersions = {};
      results.forEach((r) => {
        if (r.status === 'fulfilled' && r.value.version) {
          map[r.value.id] = r.value.version;
        }
      });
      setVersions(map);
    };

    fetchAll();
  }, []);

  return versions;
}
