import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';
import { featuredProjects } from '@/data/projects';

export function FeaturedProjects() {
  return (
    <section aria-labelledby="featured-projects-heading" className="py-xl">
      <Container>
        <div className="mb-lg flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 id="featured-projects-heading">Featured Projects</h2>
            <p className="mt-2 max-w-xl text-small">
              Selected work with the full problem → decision → outcome narrative.
            </p>
          </div>
          <Button to="/projects" variant="link">
            View all projects →
          </Button>
        </div>

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
