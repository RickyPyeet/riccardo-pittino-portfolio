import type { Article } from '@/types';

export const articles: Article[] = [
    {
    slug: 'ddpm-concepts-mathematics-and-implementation',
    title: 'DDPM - Concepts, Mathematics, and Implementation',
    excerpt:
      'An educational walkthrough of denoising diffusion probabilistic models covering the theory, mathematical foundations, training objective, and implementation details.',
    categories: ['diffusion-models', 'generative-ai'],
    publishedAt: '2026-06-23',
    author: 'Riccardo Pittino',
    tags: ['Diffusion Models', 'DDPM', 'PyTorch', 'Generative AI'],
    image: '/images/articles/ddpm/ddpm-concepts-mathematics-implementation.png',
    imageAlt: 'DDPM article cover showing a mountain being denoised',
    featured: true,
    sections: [],
    articleUrl: 'https://medium.com/@ricca.pit/ddpm-concepts-mathematics-and-implementation-cb2c5e596ead',
    isPublished: true
  },
  {
    slug: 'diffusion-unet-architecture-and-building-blocks',
    title: 'Diffusion U-Net: Architecture and Building Blocks',
    excerpt:
      'An educational overview with code of a Diffusion U-Net architecture. Covering the reason why that architecture was chosen and its main building blocks',
    categories: ['diffusion-models', 'generative-ai'],
    publishedAt: '2026-07-07',
    author: 'Riccardo Pittino',
    tags: ['Diffusion Models', 'DDPM', 'PyTorch', 'Generative AI'],
    image: '/images/articles/ddpm/u_net.png',
    imageAlt: 'Unet article cover showing an overview of a unet architecture',
    featured: true,
    sections: [],
    articleUrl: 'https://medium.com/@ricca.pit/diffusion-u-net-architecture-and-building-blocks-2875bb0deb16',
    isPublished: true
  },
  {
    slug: 'resnets-residual-blocks-for-diffusion-models',
    title: 'ResNets — Residual Blocks for Diffusion Models',
    excerpt:
      'An educational walkthrough of residual blocks used in modern diffusion models, such as U-Nets, covering design choices and FiLM conditioning for time or class',
    categories: ['diffusion-models', 'generative-ai'],
    publishedAt: '2026-07-24',
    author: 'Riccardo Pittino',
    tags: ['Diffusion Models', 'DDPM', 'PyTorch', 'Generative AI'],
    image: '/images/articles/ddpm/residual_block_article_cover.png',
    imageAlt: 'Unet article cover showing an overview of a unet architecture',
    featured: true,
    sections: [],
    articleUrl: 'https://medium.com/@ricca.pit/resnets-residual-blocks-for-diffusion-models-e5ac35677563',
    isPublished: true
  },


];

export const featuredArticles = articles.filter((article) => article.featured);

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticleContent(article: Article): string {
  return article.sections.map((section) => section.content).join(' ');
}

export const articleCategories = [
  { value: 'all', label: 'All' },
  { value: 'computer-vision', label: 'Computer Vision' },
  { value: 'generative-ai', label: 'Generative AI' },
  { value: 'diffusion-models', label: 'Diffusion Models' },
  { value: 'learning-notes', label: 'Learning Notes' },
] as const;
