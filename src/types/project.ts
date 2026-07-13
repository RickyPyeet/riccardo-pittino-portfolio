export type ProjectDifficulty = 
  |'beginner' 
  | 'intermediate' 
  | 'advanced' 
  | 'research-level';

export type ProjectCategory =
  | 'computer-vision'
  | 'generative-ai'
  | 'research';

export interface CaseStudySection {
  title: string;
  body: string;
}

export interface ProjectVisuals {
  trainingLoss?: string;
  validationLoss?: string;
  metricPlot?: string;
  resultImage?: string;
  gif?: string;
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

  caseStudy: {
  overview: CaseStudySection;
  architecture: CaseStudySection;
  dataset: CaseStudySection;
  training: CaseStudySection;
  results: CaseStudySection;
  challenges: CaseStudySection;
  lessons: CaseStudySection;
};
  visuals?: ProjectVisuals;
}

export interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'compact' | 'expanded';
  index?: number;
}
