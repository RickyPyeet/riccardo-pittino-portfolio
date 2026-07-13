import { Link, useParams } from 'react-router-dom';

import { Container } from '@/components/layout/Container';
import { projects } from '@/data/projects';

const sectionOrder = [
  'overview',
  'architecture',
  'dataset',
  'training',
  'results',
  'challenges',
  'lessons',
] as const;

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  const projectIndex = projects.findIndex((project) => project.slug === slug);
  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  if (!project) {
    return (
      <main>
        <Container className="py-xl">
          <h1>Project not found</h1>
          <p className="mt-md text-secondary">
            The project you are looking for does not exist.
          </p>
          <Link className="mt-lg inline-block text-accent-dark" to="/projects">
            Back to projects
          </Link>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container className="py-xl">
        <Link className="text-small text-accent-dark" to="/projects">
          ← Back to projects
        </Link>

        <header className="mt-lg max-w-4xl">
          <p className="text-small font-medium uppercase tracking-wide text-tertiary">
            {project.dataset}
          </p>

          <h1 className="mt-sm">{project.title}</h1>

          <p className="mt-md text-lg text-secondary">{project.summary}</p>
        </header>

        <div className="mt-xl grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <InfoBlock label="Architecture" value={project.architecture} />
          <InfoBlock label="Framework" value={project.framework} />
          <InfoBlock label="Duration" value={project.duration} />
          <InfoBlock label="Status" value={project.status} />
        </div>
        <div className="mt-lg rounded-3xl border border-border bg-background-light p-6 dark:bg-[var(--color-bg-subtle)]">
          <p className="text-tiny font-medium uppercase tracking-wide text-tertiary">
            Key Result
          </p>
          <p className="mt-3 text-2xl font-semibold">
            {project.result}
          </p>
        </div>

        <div className="mt-xl overflow-hidden rounded-3xl border border-border bg-background-light dark:bg-[var(--color-bg-subtle)]">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover"
          />
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

              return (
                <section key={key} id={key}>
                  <h2>{section.title}</h2>
                  <p className="mt-md max-w-3xl text-secondary">
                    {section.body}
                  </p>
                  {key === 'training' && project.visuals && (
                    <div className="mt-lg grid gap-6 md:grid-cols-2">
                      {project.visuals.trainingLoss && (
                        <figure className="rounded-2xl border border-border overflow-hidden">
                          <img
                            src={project.visuals.trainingLoss}
                            alt="Training loss curve"
                            className="w-full"
                          />
                          <figcaption className="p-3 text-small text-secondary">
                            Training loss progression
                          </figcaption>
                        </figure>
                      )}

                      {project.visuals.validationLoss && (
                        <figure className="rounded-2xl border border-border overflow-hidden">
                          <img
                            src={project.visuals.validationLoss}
                            alt="Validation loss curve"
                            className="w-full"
                          />
                          <figcaption className="p-3 text-small text-secondary">
                            Validation loss progression
                          </figcaption>
                        </figure>
                      )}
                      {project.visuals?.gif && (
                        <figure className="mb-6 overflow-hidden rounded-2xl border border-border">
                          <img
                            src={project.visuals.gif}
                            alt={`${project.title} sampling process`}
                            className="mx-auto w-48 rounded-x1 border border-border"
                            style={{ imageRendering: 'pixelated' }}
                          />
                          <figcaption className="p-3 text-small text-secondary text-center">
                            DDPM denoising process from random noise to generated image
                          </figcaption>
                        </figure>
                      )}
                      {project.visuals.metricPlot && (
                        <figure className="rounded-2xl border border-border overflow-hidden">
                          <img
                            src={project.visuals.metricPlot}
                            alt="mAP progression"
                            className="w-full"
                          />
                          <figcaption className="p-3 text-small text-secondary">
                            mAP evaluation throughout training
                          </figcaption>
                        </figure>
                      )}
                    </div>
                  )}
                  {key === 'results' && (
                    <div className="mt-lg rounded-2xl border border-border bg-background-light p-6 dark:bg-[var(--color-bg-subtle)]">
                      <p className="text-tiny font-medium uppercase tracking-wide text-tertiary dark:text-[var(--color-text-muted)]">
                        Key Result
                      </p>
                      <p className="mt-3 text-lg font-semibold text-primary dark:text-[var(--color-text)]">
                        {project.result}
                      </p>
                    </div>
                  )}

                  {key === 'challenges' && (
                    <div className="mt-lg rounded-2xl border border-border bg-background-light p-6 dark:bg-[var(--color-bg-subtle)]">
                      <p className="text-tiny font-medium uppercase tracking-wide text-tertiary dark:text-[var(--color-text-muted)]">
                        Main Engineering Challenge
                      </p>
                      <p className="mt-3 text-base font-medium text-primary dark:text-[var(--color-text)]">
                        {project.challenge}
                      </p>
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
              <p className="text-small text-secondary">Previous Project</p>
              <p className="mt-2 font-semibold">← {previousProject.title}</p>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="rounded-2xl border border-border p-5 text-right transition-colors hover:border-accent"
            >
              <p className="text-small text-secondary">Next Project</p>
              <p className="mt-2 font-semibold">{nextProject.title} →</p>
            </Link>
          )}
        </nav>
      </Container>
    </main>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
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