export type ArticleCategory =
  | 'tutorial'
  | 'research'
  | 'engineering'
  | 'opinion';

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
  category: ArticleCategory;
  tags: string[];
  publishedAt: string;
  featured: boolean;
  image?: string;
  imageAlt?: string;
  author: string;
}

export interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact';
}
