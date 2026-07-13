import { useMemo, useState } from 'react';

import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ArticleCard } from '@/components/cards/ArticleCard';
import { Container } from '@/components/layout/Container';
import { articles, articleCategories } from '@/data/articles';
import { cn } from '@/utils/classNames';
import type { ArticleCategory } from '@/types';

type ActiveCategory = ArticleCategory | 'all';

export function ArticlesGrid() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('all');

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') {
      return articles;
    }

    return articles.filter(
      (article) => article.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  return (
    <section aria-labelledby="articles-heading">
      <Container className="py-xl">
        <h1 id="articles-heading">Technical <span className="text-accent-dark dark:text-accent">Writing</span></h1>
        <p className="mt-md max-w-2xl">
          Notes, implementation reports, and educational articles documenting
          what I learn while building deep learning systems from scratch.
        </p>

        <div
          className="mt-lg flex flex-wrap gap-2"
          role="group"
          aria-label="Filter articles by category"
        >
          {articleCategories.map((category) => (
            <button
              key={category.value}
              type="button"
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                'rounded-full px-4 py-1.5 text-small font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                activeCategory === category.value
                  ? 'bg-accent text-primary'
                  : 'bg-background-light text-secondary hover:text-accent-dark dark:bg-[var(--color-bg-subtle)] dark:text-[var(--color-text-muted)]',
              )}
              aria-pressed={activeCategory === category.value}
            >
              {category.label}
            </button>
          ))}
        </div>

        <StaggerContainer className="mt-xl grid gap-6 md:grid-cols-2">
          {filteredArticles.map((article) => (
            <StaggerItem key={article.slug}>
              <ArticleCard article={article} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {filteredArticles.length === 0 && (
          <p className="mt-lg text-secondary">No articles in this category.</p>
        )}
      </Container>
    </section>
  );
}
