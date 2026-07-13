import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { Container } from '@/components/layout/Container';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { Image } from '@/components/ui/Image';
import { siteMeta } from '@/data/social';

const timeline = [
  {
    year: '2025',
    title: 'Machine Learning Foundations',
    org: 'Stanford ML Specialization',
    description:
      'Built foundations in supervised learning, model evaluation, optimization, and classical machine learning.',
  },
  {
    year: '2025',
    title: 'Deep Learning Foundations',
    org: 'Deep Learning Specialization',
    description:
      'Studied neural networks, CNNs, sequence models, optimization techniques, and modern deep learning workflows.',
  },
  {
    year: '2026',
    title: 'YOLOv1',
    org: 'Object Detection',
    description:
      'Implemented a complete object detection pipeline including custom loss functions, mAP evaluation, NMS, and deployment.',
  },
  {
    year: '2026',
    title: 'DDPM',
    org: 'Generative Modeling',
    description:
      'Implemented diffusion models, DDIM sampling, EMA, classifier-free guidance, and class conditioning.',
  },
  {
    year: '2026',
    title: 'Latent Diffusion',
    org: 'Text-to-Image Systems',
    description:
      'Implemented CLIP conditioning, cross-attention, VAEs, and latent-space diffusion training.',
  },
];

export default function About() {
  return (
    <main id="main-content" aria-label="About">
      <Container className="py-xl">
        <div className="grid items-start gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
          <FadeInOnScroll>
            <Image
              src="/images/about/profile.jpg"
              alt={`Portrait of ${siteMeta.author}`}
              width={400}
              height={400}
              className="mx-auto max-w-[300px]"
            />
          </FadeInOnScroll>

          <div>
            <h1>About <span className="text-accent-dark dark:text-accent">Me</span></h1>
            <p className="mt-md text-lg">{siteMeta.role}</p>
            <div className="mt-md space-y-4 text-secondary">
            <p>
              I&apos;m someone who enjoys understanding how things work. Whether it is a
              deep learning model, a mountain route, a new language, or a Rubik&apos;s
              cube, I&apos;m naturally drawn to challenges that require curiosity,
              patience, and continuous learning.
            </p>

            <p>
              My path into machine learning started with an interest in mathematics and programming,
              but what kept me engaged was the complexity of some systems,
              breaking them up and rebuilding them piece by piece until they made sense.
            </p>
            </div>
          </div>
        </div>
        <section aria-labelledby="timeline-heading" className="mt-xl">
          <h2 id="timeline-heading">Learning Journey</h2>
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
        <section className="mt-xl rounded-3x1 border border-border bg-background-dark p-8 dark:bg[var(--color-bg-subtle)]">
          <p className="text-small font-medium uppercase tracking-wide text-accent-dark dark:text-accent">
            Outside of ML
          </p>
          <section className="mt-sm">
            <h2>Mountains and Teaching</h2>

            <div className="mt-md space-y-4 text-secondary">
              <p>
                For more than ten years, mountaineering has been a major part of my life.
                I began as a student and, four years ago, became a mountaineering
                instructor at my local section of the Italian Alpine Club (CAI), where I
                teach rock climbing, alpine climbing and mountaineering techniques.
              </p>

              <p>
                What I enjoy most is helping students become independent. Seeing someone
                gain confidence, develop technical skills, and discover a genuine passion
                for the mountains is one of the most rewarding parts of teaching. My goal
                is not simply to teach climbing techniques, but to help people move
                safely, responsibly, and thoughtfully in mountain environments.
              </p>

              <p>
                Teaching mountaineering also carries a unique sense of responsibility.
                When climbing, the students tied to my rope place their trust in my
                judgment, preparation, and ability to remain calm. That responsibility
                has reinforced the importance of patience, clear communication, and
                careful decision making.
              </p>

              <p>
                The mountains have also taught me lessons that extend far beyond
                climbing. When conditions become difficult, panic rarely helps: clarity
                of mind does. Whether standing on a mountain face or facing a difficult
                problem, I have learned that staying calm, assessing the situation
                carefully, and acting deliberately often matters more than reacting
                quickly.
              </p>
              <p>
                This is the same attitude I try to use in engineering: stay curious, 
                calm and share what I learn with others.
              </p>
            </div>
          </section>
        </section>
      </Container>
      <SkillsSection />
    </main>
  );
}
