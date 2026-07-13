import { Link } from 'react-router-dom';
import { HiArrowRight, HiExternalLink } from 'react-icons/hi';

import { Badge } from '@/components/ui/Badge';
import { Image } from '@/components/ui/Image';
import { Tag } from '@/components/ui/Tag';
import type { Project } from '@/types';
import { formatDateShort } from '@/utils/formatDate';
import { cn } from '@/utils/classNames';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'compact';
  className?: string;
}

export function ProjectCard({
  project,
  variant = 'default',
  className,
}: ProjectCardProps) {
  const isCompact = variant === 'compact';

  return (
    <article
      className={cn(
        'group flex flex-col overflow-hidden rounded-lg border border-primary/10 bg-white dark:border-[var(--color-border)] dark:bg-[var(--color-bg)]',
        className,
      )}
    >
      {!isCompact && (
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={600}
          height={400}
          className="rounded-none"
        />
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <Badge variant="difficulty" difficulty={project.difficulty}>
            {project.difficulty}
          </Badge>
          <span className="text-tiny text-tertiary">
            {formatDateShort(project.publishedAt)}
          </span>
        </div>

        <h3 className="text-xl">
          <Link
            to={`/projects#${project.slug}`}
            className="text-primary no-underline transition-colors hover:text-accent-dark dark:text-[var(--color-text)] dark:hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-small">{project.summary}</p>

        <div className="mt-4 grid gap-3 text-small">
          <div>
            <span className="font-medium text-[var(--color-text)]">Dataset:</span>{' '}
            {project.dataset}
          </div>

          <div>
            <span className="font-medium text-[var(--color-text)]">Architecture:</span>{' '}
            {project.architecture}
          </div>

          <div>
            <span className="font-medium text-[var(--color-text)]">Key Result:</span>{' '}
            {project.result}
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-small font-medium text-accent-dark no-underline hover:underline dark:text-accent"
          >
            Read case study
            <HiArrowRight size={14} aria-hidden="true" />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-small text-secondary no-underline hover:text-accent-dark dark:hover:text-accent"
              aria-label={`View ${project.title} on GitHub`}
            >
              <HiExternalLink size={14} aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
