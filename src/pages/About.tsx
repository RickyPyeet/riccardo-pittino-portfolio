import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { Container } from '@/components/layout/Container';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { Image } from '@/components/ui/Image';
import { siteMeta } from '@/data/social';

const timeline = [
  {
    year: '2024 – Present',
    title: 'Senior ML Engineer',
    org: 'AI Research Lab',
    description:
      'Leading computer vision and NLP projects from prototype to production deployment.',
  },
  {
    year: '2021 – 2024',
    title: 'ML Engineer',
    org: 'Tech Startup',
    description:
      'Built RAG systems, model serving infrastructure, and MLOps pipelines for a 50-person engineering team.',
  },
  {
    year: '2019 – 2021',
    title: 'Research Assistant',
    org: 'University',
    description:
      'Published work on transformer attention mechanisms and sim-to-real robot learning.',
  },
];

export default function About() {
  return (
    <main id="main-content" aria-label="About">
      <Container className="py-xl">
        <div className="grid items-start gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <FadeInOnScroll>
            <Image
              src="/images/about/profile.webp"
              alt={`Portrait of ${siteMeta.author}`}
              width={400}
              height={400}
              className="mx-auto max-w-[300px]"
            />
          </FadeInOnScroll>

          <div>
            <h1>About {siteMeta.author}</h1>
            <p className="mt-md text-lg">{siteMeta.role}</p>
            <div className="mt-md space-y-4">
              <p>
                I build machine learning systems end-to-end — from research
                prototypes to production deployments. My work focuses on
                computer vision, NLP, and the MLOps infrastructure that keeps
                models reliable at scale.
              </p>
              <p>
                This portfolio follows a problem → decision → outcome narrative
                because hiring managers and collaborators care about how you
                think, not just what you built.
              </p>
              <p>
                When I&apos;m not training models, I write about architectural
                trade-offs and lessons learned from shipping AI in production.
              </p>
            </div>
          </div>
        </div>

        <section aria-labelledby="timeline-heading" className="mt-xl">
          <h2 id="timeline-heading">Timeline</h2>
          <ol className="mt-lg space-y-8 border-l border-primary/10 pl-6 dark:border-[var(--color-border)]">
            {timeline.map((item) => (
              <FadeInOnScroll key={item.year}>
                <li className="relative">
                  <span className="absolute -left-[25px] top-1.5 h-3 w-3 rounded-full bg-accent" />
                  <p className="text-tiny font-medium text-accent-dark dark:text-accent">
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-xl">
                    {item.title} — {item.org}
                  </h3>
                  <p className="mt-2 text-small">{item.description}</p>
                </li>
              </FadeInOnScroll>
            ))}
          </ol>
        </section>
      </Container>

      <SkillsSection />
    </main>
  );
}
