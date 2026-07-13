import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section aria-labelledby="cta-heading" className="py-xl">
      <Container>
        <FadeInOnScroll>
          <div className="rounded-2xl border border-primary/10 bg-accent-light/30 px-6 py-12 text-center dark:border-[var(--color-border)] dark:bg-accent-dark/10 md:px-12">
            <h2 id="cta-heading">Interested in machine learning systems?</h2>
            <p className="mx-auto mt-3 max-w-lg text-small">
              I'm exploring computer vision, diffusion models, and generative AI through 
              implementation-focused projects and technical writing. 
              If you'd like to discuss machine learning, research engineering, or potential opportunities, 
              I'd be happy to connect.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button to="/contact" size="lg">
                Get in Touch
              </Button>
              <Button
                href="https://github.com/builder-portfolio"
                external
                variant="secondary"
                size="lg"
              >
                View GitHub
              </Button>
            </div>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
}
