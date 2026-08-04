import { Link, useParams } from 'react-router-dom';
import { HiExternalLink } from 'react-icons/hi';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/layout/Container';
import { projects } from '@/data/projects';
import type { CaseStudyKey, ProjectVisual } from '@/types/project';

const sectionOrder: CaseStudyKey[] = [
  'overview',
  'architecture',
  'dataset',
  'training',
  'results',
  'challenges',
  'lessons',
  'failures',
];

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  const projectIndex = projects.findIndex(
    (project) => project.slug === slug,
  );

  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : null;

  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  if (!project) {
    return (
      <main>
        <Container className="py-xl">
          <h1>Project not found</h1>

          <p className="mt-md text-secondary">
            The project you are looking for does not exist.
          </p>

          <Link
            className="mt-lg inline-block text-accent-dark"
            to="/projects"
          >
            Back to projects
          </Link>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container className="py-xl">
        <Link
          className="text-small text-accent-dark"
          to="/projects"
        >
          ← Back to projects
        </Link>

        <header className="mt-lg max-w-4xl">
          <p className="text-small font-medium uppercase tracking-wide text-tertiary">
            {project.dataset}
          </p>

          <h1 className="mt-sm">{project.title}</h1>

          <p className="mt-md text-lg text-secondary">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && (
              <Button
                href={project.githubUrl}
                external
                variant="secondary"
                ariaLabel={`View ${project.title} source code`}
              >
                <HiExternalLink size={16} aria-hidden="true" />
                View Source
              </Button>
            )}

            {project.liveUrl && project.liveUrl !== '#' && (
              <Button
                href={project.liveUrl}
                external
                variant="primary"
                ariaLabel={`Open ${project.title} live demo`}
              >
                Live Demo
              </Button>
            )}
          </div>
        </header>

        <div className="mt-xl grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InfoBlock
            label="Architecture"
            value={project.architecture}
          />

          <InfoBlock
            label="Framework"
            value={project.framework}
          />

          <InfoBlock
            label="Duration"
            value={project.duration}
          />

          <InfoBlock
            label="Status"
            value={project.status}
          />
        </div>

        <div className="mt-lg rounded-3xl border border-border bg-background-light p-6 dark:bg-[var(--color-bg-subtle)]">
          <p className="text-tiny font-medium uppercase tracking-wide text-tertiary">
            Key Result
          </p>

          <p className="mt-3 text-2xl font-semibold">
            {project.result}
          </p>
        </div>

        <div className="mt-xl flex justify-center">
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-background-light dark:bg-[var(--color-bg-subtle)]">
            <img
              src={project.image}
              alt={project.imageAlt}
              className="mx-auto block max-h-[440px] h-auto w-auto max-w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-xl grid gap-xl lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-3 text-small">
              {sectionOrder.map((key) => (
                <a
                  key={key}
                  href={`#${key}`}
                  className="block text-secondary transition-colors hover:text-accent-dark"
                >
                  {project.caseStudy[key].title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-lg">
            {sectionOrder.map((key) => {
              const section = project.caseStudy[key];

              const visuals =
                project.visuals?.items.filter(
                  (visual) => visual.section === key,
                ) ?? [];

              return (
                <section key={key} id={key}>
                  <h2>{section.title}</h2>

                  <p className="mt-md max-w-3xl text-secondary">
                    {section.body}
                  </p>

                  {visuals.length > 0 && (
                    <div className="mt-lg grid items-start gap-6 md:grid-cols-2">
                      {visuals.map((visual) => (
                        <ProjectFigure
                          key={visual.src}
                          visual={visual}
                        />
                      ))}
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        </div>

        <nav
          className="mt-xl grid gap-4 border-t border-border pt-lg md:grid-cols-2"
          aria-label="Project navigation"
        >
          {previousProject ? (
            <Link
              to={`/projects/${previousProject.slug}`}
              className="rounded-2xl border border-border p-5 transition-colors hover:border-accent"
            >
              <p className="text-small text-secondary">
                Previous Project
              </p>

              <p className="mt-2 font-semibold">
                ← {previousProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="rounded-2xl border border-border p-5 text-right transition-colors hover:border-accent"
            >
              <p className="text-small text-secondary">
                Next Project
              </p>

              <p className="mt-2 font-semibold">
                {nextProject.title} →
              </p>
            </Link>
          )}
        </nav>
      </Container>
    </main>
  );
}

function ProjectFigure({ visual }: { visual: ProjectVisual }) {
  const imageClassName =
    visual.display === 'compact'
      ? 'mx-auto block max-h-72 w-auto max-w-full'
      : visual.display === 'pixelated'
        ? 'mx-auto block w-48 max-w-full md:w-56'
        : 'block h-auto w-full';

  return (
    <figure className="self-start overflow-hidden rounded-2xl border border-border">
      <img
        src={visual.src}
        alt={visual.alt}
        className={imageClassName}
        style={
          visual.display === 'pixelated'
            ? { imageRendering: 'pixelated' }
            : undefined
        }
      />

      {visual.caption && (
        <figcaption className="p-3 text-xs italic leading-relaxed text-tertiary">
          {visual.caption}
        </figcaption>
      )}
    </figure>
  );
}

function InfoBlock({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-background-light p-5 dark:bg-[var(--color-bg-subtle)]">
      <p className="text-tiny font-medium uppercase tracking-wide text-tertiary">
        {label}
      </p>

      <p className="mt-3 text-base font-semibold">
        {value}
      </p>
    </div>
  );
}