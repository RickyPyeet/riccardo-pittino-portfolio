export type ProjectDifficulty = 
  |'beginner' 
  | 'intermediate' 
  | 'advanced' 
  | 'research-level';

export type ProjectCategory =
  | 'computer-vision'
  | 'generative-ai'
  | 'research';

export type CaseStudyKey =
  | 'overview'
  | 'architecture'
  | 'dataset'
  | 'training'
  | 'results'
  | 'challenges'
  | 'lessons'
  | 'failures';

export interface CaseStudySection {
  title: string;
  body: string;
}

export interface ProjectVisual {
  src: string;
  alt: string;
  caption?: string;
  section: CaseStudyKey;
  display?: 'standard' | 'compact' | 'pixelated';
}

export interface ProjectVisuals {
  items: ProjectVisual[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;

  dataset: string;
  architecture: string;
  framework: string;
  duration: string;
  status: string;

  result: string;
  challenge: string;

  problem: string;
  decision: string;
  outcome: string;

  tags: string[];
  categories: ProjectCategory[];
  difficulty: ProjectDifficulty;

  featured: boolean;

  image: string;
  imageAlt: string;

  githubUrl?: string;
  liveUrl?: string;

  publishedAt: string;

  caseStudy: Record<CaseStudyKey, CaseStudySection>;
  
  visuals?: ProjectVisuals;
}

export interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'compact' | 'expanded';
  index?: number;
}
