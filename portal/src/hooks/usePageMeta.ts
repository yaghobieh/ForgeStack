import { useEffect } from 'react';
import { setPageMeta } from '@utils/head';
import type { PageMeta } from '@utils/head';

/** Applies per-route SEO meta (title, description, OG/Twitter, JSON-LD) on mount. */
export const usePageMeta = (meta: PageMeta): void => {
  useEffect(() => {
    setPageMeta(meta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meta.title, meta.description, meta.path]);
};
