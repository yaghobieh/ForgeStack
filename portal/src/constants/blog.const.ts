// Blog page copy and helpers

export const BLOG_TITLE = 'ForgeStack Blog';
export const BLOG_SUBTITLE =
  'Release notes, deep dives, and stories from the ForgeStack ecosystem.';
export const BLOG_META_DESCRIPTION =
  'News and articles from ForgeStack: release waves, library launches, and deep dives into Bear, Harbor, Rail, Grid Table, and the rest of the @forgedevstack ecosystem.';
export const BLOG_READ_LABEL = 'Read article';
export const BLOG_BACK_LABEL = '← All articles';
export const BLOG_READING_TIME_SUFFIX = ' min read';
export const BLOG_DATE_LOCALE = 'en-US';

export const formatBlogDate = (isoDate: string): string =>
  new Date(`${isoDate}T00:00:00Z`).toLocaleDateString(BLOG_DATE_LOCALE, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
