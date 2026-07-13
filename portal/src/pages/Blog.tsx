import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@forgedevstack/bear';
import { BLOG_POSTS } from '../data/blog.data';
import {
  BLOG_TITLE,
  BLOG_SUBTITLE,
  BLOG_META_DESCRIPTION,
  BLOG_READ_LABEL,
  BLOG_READING_TIME_SUFFIX,
  formatBlogDate,
} from '@constants/blog.const';
import { BLOG_PATH } from '@constants/menu.const';
import { usePageMeta } from '../hooks';

export const Blog: FC = () => {
  usePageMeta({
    title: BLOG_TITLE,
    description: BLOG_META_DESCRIPTION,
    path: BLOG_PATH,
  });

  return (
    <div className="fade-in py-10 sm:py-16 px-3 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="section-heading gradient-text inline-block">{BLOG_TITLE}</h1>
          <p className="section-subheading mx-auto mt-2">{BLOG_SUBTITLE}</p>
        </div>

        <div className="flex flex-col gap-5">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              to={`${BLOG_PATH}/${post.slug}`}
              className="fs-glass block rounded-2xl border border-theme-border p-6 sm:p-7 transition-all hover:border-forge-500/50 hover-glow"
            >
              <div className="flex items-center gap-3 flex-wrap mb-2 text-xs text-theme-muted">
                <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                <span aria-hidden>·</span>
                <span>{post.readingTimeMinutes}{BLOG_READING_TIME_SUFFIX}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-theme-primary mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-theme-secondary mb-4">{post.description}</p>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <Badge key={tag} size="sm" pill variant="info">{tag}</Badge>
                  ))}
                </div>
                <span className="text-sm font-semibold text-forge-400">{BLOG_READ_LABEL}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
