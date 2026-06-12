import { HiExternalLink } from 'react-icons/hi';

import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Image } from '@/components/ui/Image';
import { Tag } from '@/components/ui/Tag';
import { DecisionCallout } from '@/components/cards/DecisionCallout';
import type { Project } from '@/types';
import { cn } from '@/utils/classNames';

interface ProjectCardAlternatingProps {
  project: Project;
  index: number;
}

export function ProjectCardAlternating({
  project,
  index,
}: ProjectCardAlternatingProps) {
  const isReversed = index % 2 === 1;

  return (
    <FadeInOnScroll>
      <article
        id={project.slug}
        className="scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-12"
      >
        <div className={cn(isReversed && 'lg:order-2')}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={600}
            height={400}
          />
        </div>

        <div className={cn(isReversed && 'lg:order-1')}>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="difficulty" difficulty={project.difficulty}>
              {project.difficulty}
            </Badge>
            <Badge variant="category">{project.category.replace(/-/g, ' ')}</Badge>
          </div>

          <h2 className="text-h3">{project.title}</h2>
          <p className="mt-3">{project.summary}</p>

          <div className="mt-4 space-y-3">
            <div>
              <p className="text-tiny font-medium uppercase tracking-wide text-tertiary">
                Problem
              </p>
              <p className="mt-1 text-small">{project.problem}</p>
            </div>
            <DecisionCallout>{project.decision}</DecisionCallout>
            <div>
              <p className="text-tiny font-medium uppercase tracking-wide text-tertiary">
                Outcome
              </p>
              <p className="mt-1 text-small">{project.outcome}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                external
                variant="secondary"
                ariaLabel={`View ${project.title} source code`}
              >
                <HiExternalLink size={16} aria-hidden="true" />
                View Code
              </Button>
            )}
            {project.liveUrl && (
              <Button href={project.liveUrl} external variant="primary">
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </article>
    </FadeInOnScroll>
  );
}
