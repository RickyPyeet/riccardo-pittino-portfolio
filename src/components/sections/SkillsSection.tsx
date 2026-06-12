import { HiCode, HiDatabase, HiLightningBolt, HiServer } from 'react-icons/hi';

import { FeatureCard } from '@/components/cards/FeatureCard';
import { Container } from '@/components/layout/Container';
import { Tag } from '@/components/ui/Tag';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const features = [
  {
    icon: HiCode,
    title: 'Deep Learning',
    description:
      'PyTorch, transformers, computer vision, and NLP — from research prototypes to production models.',
  },
  {
    icon: HiServer,
    title: 'MLOps',
    description:
      'Model serving, experiment tracking, CI/CD for ML, and observability at scale.',
  },
  {
    icon: HiDatabase,
    title: 'Data Engineering',
    description:
      'Pipelines for labeling, feature stores, and reproducible dataset versioning.',
  },
  {
    icon: HiLightningBolt,
    title: 'Technical Writing',
    description:
      'Clear documentation of architectural decisions, trade-offs, and lessons learned.',
  },
];

const skills = [
  'Python',
  'PyTorch',
  'TypeScript',
  'React',
  'Kubernetes',
  'FastAPI',
  'LangChain',
  'Weights & Biases',
  'Docker',
  'SQL',
];

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading" className="py-xl">
      <Container>
        <h2 id="skills-heading">Skills & Focus Areas</h2>
        <p className="mt-2 max-w-xl text-small">
          Core competencies across the ML stack, from model development to
          deployment.
        </p>

        <StaggerContainer className="mt-lg grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <FeatureCard {...feature} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-lg flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </Container>
    </section>
  );
}
