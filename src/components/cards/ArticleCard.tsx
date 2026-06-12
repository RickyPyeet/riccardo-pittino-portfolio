import { Link } from 'react-router-dom';

import { Badge } from '@/components/ui/Badge';
import { Image } from '@/components/ui/Image';
import { Tag } from '@/components/ui/Tag';
import { getArticleContent } from '@/data/articles';
import type { Article } from '@/types';
import { formatDate } from '@/utils/formatDate';
import { formatReadingTime, getReadingTime } from '@/utils/readingTime';
import { cn } from '@/utils/classNames';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact';
  className?: string;
}

export function ArticleCard({
  article,
  variant = 'default',
  className,
}: ArticleCardProps) {
  const readingTime = getReadingTime(getArticleContent(article));
  const isCompact = variant === 'compact';

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-lg border border-primary/10 bg-white dark:border-[var(--color-border)] dark:bg-[var(--color-bg)]',
        className,
      )}
    >
      {article.image && !isCompact && (
        <Image
          src={article.image}
          alt={article.imageAlt ?? article.title}
          width={600}
          height={340}
          className="rounded-none"
        />
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="category">{article.category}</Badge>
          <span className="text-tiny text-tertiary">
            {formatDate(article.publishedAt)}
          </span>
          <span className="text-tiny text-tertiary">
            {formatReadingTime(readingTime)}
          </span>
        </div>

        <h3 className="text-xl">
          <Link
            to={`/articles/${article.slug}`}
            className="text-primary no-underline transition-colors hover:text-accent-dark dark:text-[var(--color-text)] dark:hover:text-accent"
          >
            {article.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-small">{article.excerpt}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <Link
          to={`/articles/${article.slug}`}
          className="mt-4 text-small font-medium text-accent-dark no-underline hover:underline dark:text-accent"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
