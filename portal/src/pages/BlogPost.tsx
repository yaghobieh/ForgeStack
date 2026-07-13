import { FC } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Badge } from '@forgedevstack/bear';
import { Markdown } from '../components/Markdown';
import { getBlogPost } from '../data/blog.data';
import {
  BLOG_BACK_LABEL,
  BLOG_READING_TIME_SUFFIX,
  formatBlogDate,
} from '@constants/blog.const';
import { BLOG_PATH } from '@constants/menu.const';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '@constants/seo.const';
import { AUTHOR } from '@constants/author.const';
import { usePageMeta } from '../hooks';

export const BlogPost: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const postPath = post ? `${BLOG_PATH}/${post.slug}` : BLOG_PATH;

  usePageMeta({
    title: post?.title,
    description: post?.description,
    path: postPath,
    ogType: 'article',
    jsonLd: post
      ? {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          image: DEFAULT_OG_IMAGE,
          mainEntityOfPage: `${SITE_URL}${postPath}`,
          author: {
            '@type': 'Person',
            name: AUTHOR.name,
            url: AUTHOR.linkedin,
          },
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
          },
        }
      : undefined,
  });

  if (!post) {
    return <Navigate to={BLOG_PATH} replace />;
  }

  return (
    <article className="fade-in py-10 sm:py-16 px-3 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <Link to={BLOG_PATH} className="text-sm font-semibold text-forge-400 hover:text-forge-300">
          {BLOG_BACK_LABEL}
        </Link>

        <header className="mt-6 mb-8">
          <div className="flex items-center gap-3 flex-wrap mb-3 text-xs text-theme-muted">
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTimeMinutes}{BLOG_READING_TIME_SUFFIX}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-theme-primary leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <Badge key={tag} size="sm" pill variant="info">{tag}</Badge>
            ))}
          </div>
        </header>

        <Markdown content={post.content} />
      </div>
    </article>
  );
};
