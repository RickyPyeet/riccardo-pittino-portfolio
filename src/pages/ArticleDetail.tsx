import { Link, useParams } from 'react-router-dom';

import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { Container } from '@/components/layout/Container';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { Badge } from '@/components/ui/Badge';
import { Tag } from '@/components/ui/Tag';
import { articles, getArticleBySlug, getArticleContent } from '@/data/articles';
import { formatDate } from '@/utils/formatDate';
import { formatReadingTime, getReadingTime } from '@/utils/readingTime';

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <main id="main-content" aria-label="Article not found">
        <Container className="py-xl text-center">
          <h1>Article not found</h1>
          <Link to="/articles" className="mt-md inline-block text-accent-dark">
            ← Back to articles
          </Link>
        </Container>
      </main>
    );
  }

  const readingTime = getReadingTime(getArticleContent(article));
  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  return (
    <main id="main-content" aria-label={`Article: ${article.title}`}>
      <Container className="py-xl">
        <Link
          to="/articles"
          className="text-small text-accent-dark no-underline hover:underline dark:text-accent"
        >
          ← All articles
        </Link>

        <div className="mt-lg grid gap-12 lg:grid-cols-[1fr_240px]">
          <article>
            <header>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <Badge variant="category">{article.category}</Badge>
                <span className="text-tiny text-tertiary">
                  {formatDate(article.publishedAt)}
                </span>
                <span className="text-tiny text-tertiary">
                  {formatReadingTime(readingTime)}
                </span>
              </div>
              <h1>{article.title}</h1>
              <p className="mt-md text-lg">{article.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </header>

            <div className="mt-xl space-y-8">
              {article.sections.map((section) => (
                <FadeInOnScroll key={section.id}>
                  <section id={section.id}>
                    {section.level === 2 ? (
                      <h2>{section.heading}</h2>
                    ) : (
                      <h3>{section.heading}</h3>
                    )}
                    <p className="mt-3">{section.content}</p>
                  </section>
                </FadeInOnScroll>
              ))}
            </div>
          </article>

          <aside aria-label="Table of contents" className="hidden lg:block">
            <nav className="sticky top-24">
              <p className="mb-3 text-small font-medium text-primary dark:text-[var(--color-text)]">
                On this page
              </p>
              <ul className="space-y-2 border-l border-primary/10 pl-4 dark:border-[var(--color-border)]">
                {article.sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-small text-secondary no-underline hover:text-accent-dark dark:text-[var(--color-text-muted)] dark:hover:text-accent"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>

        {relatedArticles.length > 0 && (
          <section aria-labelledby="related-articles" className="mt-xl">
            <h2 id="related-articles">Related Articles</h2>
            <div className="mt-lg grid gap-6 md:grid-cols-2">
              {relatedArticles.map((related) => (
                <ArticleCard key={related.slug} article={related} variant="compact" />
              ))}
            </div>
          </section>
        )}
      </Container>
    </main>
  );
}
