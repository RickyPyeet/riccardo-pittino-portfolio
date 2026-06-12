export type ProjectDifficulty = 'beginner' | 'intermediate' | 'advanced';

export type ProjectCategory =
  | 'computer-vision'
  | 'nlp'
  | 'reinforcement-learning'
  | 'mlops'
  | 'research';

export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  decision: string;
  outcome: string;
  tags: string[];
  category: ProjectCategory;
  difficulty: ProjectDifficulty;
  featured: boolean;
  image: string;
  imageAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  publishedAt: string;
}

export interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'compact' | 'expanded';
  index?: number;
}
