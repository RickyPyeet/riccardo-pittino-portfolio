import { useMemo, useState } from 'react';
import type { ProjectCategory } from '@/types';

import { ProjectCardAlternating } from '@/components/cards/ProjectCardAlternating';
import { Container } from '@/components/layout/Container';
import { Divider } from '@/components/ui/Divider';
import { projects, projectCategories } from '@/data/projects';
import { cn } from '@/utils/classNames';

type ActiveCategory = ProjectCategory | 'all';

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>('all');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') {
      return projects;
    }

    return projects.filter(
      (project) => project.categories.includes(activeCategory),
    );
  }, [activeCategory]);

  return (
    <section aria-labelledby="projects-heading">
      <Container className="py-xl">
        <h1 id="projects-heading">Projects</h1>
        <p className="mt-md max-w-2xl">
          A collection of deep learning projects covering 
          computer vision, diffusion models, and text-to-image generation.
        </p>

        <div
          className="mt-lg flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => (
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

        <div className="mt-xl space-y-16">
          {filteredProjects.map((project, index) => (
            <div key={project.slug}>
              <ProjectCardAlternating project={project} index={index} />
              {index < filteredProjects.length - 1 && (
                <Divider className="mt-16" />
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-lg text-secondary">No projects in this category.</p>
        )}
      </Container>
    </section>
  );
}
