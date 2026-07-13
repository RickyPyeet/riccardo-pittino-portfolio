import { HiCode, HiLightningBolt, HiSparkles, HiAcademicCap } from 'react-icons/hi';

import { FeatureCard } from '@/components/cards/FeatureCard';
import { Container } from '@/components/layout/Container';
import { Tag } from '@/components/ui/Tag';
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer';

const features = [
  {
    icon: HiCode,
    title: 'Computer Vision',
    description:
      'Object detection, CNN architectures, evaluation metrics, and visual recognition systems.',
  },
  {
    icon: HiSparkles,
    title: 'Generative AI',
    description:
      'Diffusion models, image generation, latent representations, and modern generative architectures.',
  },
  {
    icon: HiLightningBolt,
    title: 'Deep Learning Systems',
    description:
      'From-scratch implementations, training pipelines, debugging, optimization, and experimentation.',
  },
  {
    icon: HiAcademicCap,
    title: 'Teaching & Knowledge Sharing',
    description:
      'Technical writing, mountaineering instruction, and making complex ideas easier to understand.',
  },
];

const skills = [
  'Python',
  'PyTorch',
  'OpenCV',
  'Transformers',
  'Diffusers',
  'Weights & Biases',
  'Gradio',
];

export function SkillsSection() {
  return (
    <section aria-labelledby="skills-heading" className="py-xl">
      <Container>
        <h2 id="skills-heading">Skills & Focus Areas</h2>
        <p className="mt-2 max-w-xl text-small">
          Focused on understanding and building modern AI systems from first principles.
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
