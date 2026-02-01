import { useState, useEffect } from 'react';

const NPM_PACKAGES = [
  '@forgedevstack/grid-table',
  '@forgedevstack/anvil',
  '@forgedevstack/bear',
  '@forgedevstack/synapse',
] as const;

export type NpmPackageId = 'grid-table' | 'anvil' | 'bear' | 'synapse';

const PKG_TO_ID: Record<string, NpmPackageId> = {
  '@forgedevstack/grid-table': 'grid-table',
  '@forgedevstack/anvil': 'anvil',
  '@forgedevstack/bear': 'bear',
  '@forgedevstack/synapse': 'synapse',
};

export type NpmVersions = Partial<Record<NpmPackageId, string>>;

export function useNpmVersions(): NpmVersions {
  const [versions, setVersions] = useState<NpmVersions>({});

  useEffect(() => {
    const fetchAll = async () => {
      const results = await Promise.allSettled(
        NPM_PACKAGES.map(async (pkg) => {
          const res = await fetch(`https://registry.npmjs.org/${pkg}/latest`);
          const data = await res.json();
          return { pkg, version: data?.version };
        })
      );

      const map: NpmVersions = {};
      results.forEach((r) => {
        if (r.status === 'fulfilled' && r.value.version) {
          const id = PKG_TO_ID[r.value.pkg];
          if (id) map[id] = r.value.version;
        }
      });
      setVersions(map);
    };

    fetchAll();
  }, []);

  return versions;
}
