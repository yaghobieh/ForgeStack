import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE_SUFFIX,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  TWITTER_CARD_TYPE,
  PAGE_JSON_LD_ID,
} from '@constants/seo.const';

export interface PageMeta {
  /** Page title — suffixed with the site name unless it already mentions it */
  title?: string;
  description?: string;
  /** Route path used for canonical + og:url, e.g. "/blog" */
  path?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  /** JSON-LD structured data injected as a script tag (replaced per route) */
  jsonLd?: Record<string, unknown>;
}

const upsertMeta = (attribute: 'name' | 'property', key: string, content: string): void => {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

const upsertCanonical = (url: string): void => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
};

const upsertJsonLd = (data: Record<string, unknown> | undefined): void => {
  const existing = document.getElementById(PAGE_JSON_LD_ID);
  if (existing) existing.remove();
  if (!data) return;
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = PAGE_JSON_LD_ID;
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/** Head manager for the Vite SPA — updates title/meta/OG/Twitter/JSON-LD per route. */
export const setPageMeta = (meta: PageMeta): void => {
  const rawTitle = meta.title ?? DEFAULT_TITLE;
  const title = rawTitle.includes(SITE_NAME) ? rawTitle : `${rawTitle}${SITE_TITLE_SUFFIX}`;
  const description = meta.description ?? DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${meta.path ?? ''}`;
  const image = meta.ogImage ?? DEFAULT_OG_IMAGE;

  document.title = title;
  upsertMeta('name', 'description', description);
  upsertMeta('property', 'og:title', title);
  upsertMeta('property', 'og:description', description);
  upsertMeta('property', 'og:type', meta.ogType ?? 'website');
  upsertMeta('property', 'og:url', url);
  upsertMeta('property', 'og:image', image);
  upsertMeta('property', 'og:site_name', SITE_NAME);
  upsertMeta('name', 'twitter:card', TWITTER_CARD_TYPE);
  upsertMeta('name', 'twitter:title', title);
  upsertMeta('name', 'twitter:description', description);
  upsertMeta('name', 'twitter:image', image);
  upsertCanonical(url);
  upsertJsonLd(meta.jsonLd);
};
