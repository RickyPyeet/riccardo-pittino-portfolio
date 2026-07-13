export type ArticleCategory =
  | 'computer-vision'
  | 'generative-ai'
  | 'diffusion-models'
  | 'learning-notes';

export interface ArticleSection {
  id: string;
  heading: string;
  level: 2 | 3;
  content: string;
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  sections: ArticleSection[];
  categories: ArticleCategory[];
  tags: string[];
  publishedAt: string;
  featured: boolean;
  image?: string;
  imageAlt?: string;
  author: string;
  articleUrl?: string;
  isPublished: boolean;
}

export interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact';
}
