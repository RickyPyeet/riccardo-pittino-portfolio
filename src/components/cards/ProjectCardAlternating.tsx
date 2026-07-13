import { HiExternalLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Image } from '@/components/ui/Image';
import { Tag } from '@/components/ui/Tag';
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
            width={720}
            height={480}
          />
        </div>

        <div className={cn(isReversed && 'lg:order-1')}>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="difficulty" difficulty={project.difficulty}>
              {project.difficulty}
            </Badge>
            {project.categories.map((category) => (
              <Badge key = {category} variant="category">{category.replace(/-/g, ' ')}</Badge>
            ))}
            
          </div>

          <h2 className="text-h3">{project.title}</h2>
          <p className="mt-3">{project.summary}</p>

          <div className="mt-4 space-y-3">
            <div>
              <p className="text-tiny font-medium uppercase tracking-wide text-tertiary">
                Dataset
              </p>
              <p className="mt-1 text-small">{project.dataset}</p>
            </div>
            <div>
              <p className="text-tiny font-medium uppercase tracking-wide text-tertiary">
                Architecture
              </p>
              <p className="mt-1 text-small">{project.architecture}</p>
            </div>
            <div>
              <p className="text-tiny font-medium uppercase tracking-wide text-tertiary">
                Framework
              </p>
              <p className="mt-1 text-small">{project.framework}</p>
            </div>
            <div>
              <p className="text-tiny font-medium uppercase tracking-wide text-tertiary">
                Key Result
              </p>
              <p className="mt-1 text-small">{project.result}</p>
            </div>
            <div>
              <p className="text-tiny font-medium uppercase tracking-wide text-tertiary">
                Main Challenge
              </p>
              <p className="mt-1 text-small">{project.challenge}</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-small font-medium text-white transition-colors hover:bg-accent-dark"
          >
            Read Case Study
          </Link>
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
