import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'vision-transformer-finetuning',
    title: 'Vision Transformer Fine-Tuning Pipeline',
    summary:
      'End-to-end pipeline for adapting ViT models to domain-specific image classification with reproducible experiments.',
    problem:
      'A research team needed to fine-tune vision transformers on proprietary medical imaging data without leaking labels across train/val splits.',
    decision:
      'Built a stratified k-fold pipeline with deterministic seeding, mixed-precision training, and Weights & Biases experiment tracking instead of ad-hoc notebooks.',
    outcome:
      'Achieved 94.2% top-1 accuracy (up from 87.1% baseline) with 3× faster iteration cycles and full experiment reproducibility.',
    tags: ['PyTorch', 'ViT', 'MLOps', 'W&B'],
    category: 'computer-vision',
    difficulty: 'advanced',
    featured: true,
    image: '/images/projects/vision-transformer.webp',
    imageAlt: 'Neural network architecture diagram for vision transformer fine-tuning',
    githubUrl: 'https://github.com/builder-portfolio/vit-finetuning',
    publishedAt: '2025-11-15',
  },
  {
    slug: 'rag-document-qa',
    title: 'RAG Document Q&A System',
    summary:
      'Retrieval-augmented generation system for querying internal technical documentation with citation-backed answers.',
    problem:
      'Engineers spent hours searching fragmented Confluence pages and PDFs to answer recurring infrastructure questions.',
    decision:
      'Implemented hybrid search (dense + BM25) with chunk-level citations and a confidence threshold that falls back to "I don\'t know" rather than hallucinating.',
    outcome:
      'Reduced median lookup time from 18 minutes to 45 seconds with 89% user satisfaction in a 4-week pilot.',
    tags: ['LangChain', 'OpenAI', 'FAISS', 'FastAPI'],
    category: 'nlp',
    difficulty: 'intermediate',
    featured: true,
    image: '/images/projects/rag-qa.webp',
    imageAlt: 'Diagram showing retrieval-augmented generation pipeline',
    githubUrl: 'https://github.com/builder-portfolio/rag-qa',
    liveUrl: 'https://docs-qa.builder-portfolio.dev',
    publishedAt: '2025-09-02',
  },
  {
    slug: 'rl-robotics-sim',
    title: 'RL Robotics Simulation Environment',
    summary:
      'Custom Gymnasium environment for training manipulation policies in simulated warehouse pick-and-place tasks.',
    problem:
      'Physical robot trials were expensive and slow, limiting policy iteration to one experiment per week.',
    decision:
      'Built a MuJoCo-based sim with domain randomization and sim-to-real calibration using system identification on joint friction parameters.',
    outcome:
      'Increased training throughput to 200 episodes/hour and transferred a grasping policy to hardware with 72% success rate.',
    tags: ['RL', 'MuJoCo', 'Gymnasium', 'Python'],
    category: 'reinforcement-learning',
    difficulty: 'advanced',
    featured: true,
    image: '/images/projects/rl-robotics.webp',
    imageAlt: 'Simulated robotic arm performing pick and place in warehouse environment',
    githubUrl: 'https://github.com/builder-portfolio/rl-robotics',
    publishedAt: '2025-06-20',
  },
  {
    slug: 'model-serving-platform',
    title: 'Model Serving Platform',
    summary:
      'Kubernetes-native inference platform with autoscaling, A/B routing, and latency SLO monitoring.',
    problem:
      'Multiple teams deployed models as one-off Flask apps with no shared observability or versioning strategy.',
    decision:
      'Standardized on TorchServe behind an Istio gateway with Prometheus metrics, canary deployments, and a shared model registry.',
    outcome:
      'Cut p99 inference latency by 40% and enabled 12 models to share one platform with unified dashboards.',
    tags: ['Kubernetes', 'TorchServe', 'Istio', 'Prometheus'],
    category: 'mlops',
    difficulty: 'intermediate',
    featured: false,
    image: '/images/projects/model-serving.webp',
    imageAlt: 'Architecture diagram of Kubernetes model serving platform',
    githubUrl: 'https://github.com/builder-portfolio/model-serving',
    publishedAt: '2025-03-10',
  },
  {
    slug: 'attention-visualization',
    title: 'Attention Visualization Toolkit',
    summary:
      'Interactive tool for visualizing transformer attention heads across layers and input tokens.',
    problem:
      'Researchers struggled to debug model behavior because attention maps were scattered across Jupyter notebooks.',
    decision:
      'Created a lightweight React + D3 dashboard that hooks into PyTorch forward hooks and exports shareable HTML reports.',
    outcome:
      'Adopted by 3 research teams; identified a spurious attention pattern that improved model robustness after retraining.',
    tags: ['Transformers', 'D3.js', 'React', 'Research'],
    category: 'research',
    difficulty: 'beginner',
    featured: false,
    image: '/images/projects/attention-viz.webp',
    imageAlt: 'Heatmap visualization of transformer attention weights',
    githubUrl: 'https://github.com/builder-portfolio/attention-viz',
    publishedAt: '2024-12-01',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export const projectCategories = [
  { value: 'all', label: 'All' },
  { value: 'computer-vision', label: 'Computer Vision' },
  { value: 'nlp', label: 'NLP' },
  { value: 'reinforcement-learning', label: 'Reinforcement Learning' },
  { value: 'mlops', label: 'MLOps' },
  { value: 'research', label: 'Research' },
] as const;
