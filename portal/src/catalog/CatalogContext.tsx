import { createContext, FC, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { CATALOG_URL, Catalog, CatalogItem } from './types';

interface CatalogState {
  catalog: Catalog | null;
  error: string | null;
  items: CatalogItem[];
}

const CatalogContext = createContext<CatalogState>({
  catalog: null,
  error: null,
  items: [],
});

export const CatalogProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [catalog, setCatalog] = useState<Catalog | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(CATALOG_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`Catalog request failed (${response.status})`);
        return response.json() as Promise<Catalog>;
      })
      .then((data) => {
        if (!cancelled) setCatalog(data);
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Catalog request failed');
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const items = useMemo(() => {
    if (!catalog) return [];
    return [...catalog.libraries, ...catalog.tools, ...catalog.extensions];
  }, [catalog]);

  return (
    <CatalogContext.Provider value={{ catalog, error, items }}>
      {children}
    </CatalogContext.Provider>
  );
};

export function useCatalog(): CatalogState {
  return useContext(CatalogContext);
}

export function useCatalogItem(id: string | undefined): CatalogItem | undefined {
  const { items } = useCatalog();
  return items.find((item) => item.id === id);
}
