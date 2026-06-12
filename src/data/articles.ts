import type { Article } from '@/types';

export const articles: Article[] = [
  {
    slug: 'why-i-chose-hybrid-search-for-rag',
    title: 'Why I Chose Hybrid Search for RAG',
    excerpt:
      'Dense retrieval alone missed exact keyword matches. BM25 alone missed semantic similarity. Here is how hybrid search fixed both.',
    category: 'engineering',
    tags: ['RAG', 'Search', 'NLP'],
    publishedAt: '2025-10-18',
    featured: true,
    author: 'Alex Builder',
    image: '/images/articles/hybrid-search.webp',
    imageAlt: 'Venn diagram of dense and sparse retrieval methods',
    sections: [
      {
        id: 'the-problem',
        heading: 'The Problem',
        level: 2,
        content:
          'Pure dense retrieval excelled at paraphrased queries but failed on exact identifiers like API endpoint names and error codes. Pure BM25 found exact matches but missed semantically similar questions.',
      },
      {
        id: 'the-decision',
        heading: 'The Decision',
        level: 2,
        content:
          'I combined both approaches with reciprocal rank fusion, weighting dense retrieval at 0.6 and BM25 at 0.4 based on offline eval against 200 labeled query-document pairs.',
      },
      {
        id: 'the-outcome',
        heading: 'The Outcome',
        level: 2,
        content:
          'Hybrid search improved recall@5 from 0.71 to 0.89 and became the default retrieval mode in production. The key lesson: retrieval quality matters more than LLM prompt engineering for factual Q&A.',
      },
    ],
  },
  {
    slug: 'training-vit-on-small-datasets',
    title: 'Training ViTs on Small Datasets',
    excerpt:
      'Vision transformers are data-hungry. These regularization techniques helped me train effectively on just 8,000 labeled images.',
    category: 'tutorial',
    tags: ['ViT', 'Computer Vision', 'Regularization'],
    publishedAt: '2025-08-05',
    featured: true,
    author: 'Alex Builder',
    sections: [
      {
        id: 'data-constraints',
        heading: 'Data Constraints',
        level: 2,
        content:
          'With only 8,000 labeled medical images across 12 classes, a from-scratch ViT overfit within 5 epochs. Transfer learning from ImageNet-21k was necessary but not sufficient.',
      },
      {
        id: 'techniques',
        heading: 'Techniques That Worked',
        level: 2,
        content:
          'I applied RandAugment, MixUp (alpha=0.2), label smoothing (0.1), and progressive unfreezing of transformer blocks. Stochastic depth at 0.1 further reduced overfitting.',
      },
      {
        id: 'results',
        heading: 'Results',
        level: 2,
        content:
          'Validation accuracy improved from 78.3% to 91.7%. The model generalized to an external hospital dataset with only a 3.2% accuracy drop.',
      },
    ],
  },
  {
    slug: 'sim-to-real-lessons',
    title: 'Sim-to-Real: Five Lessons from Robot RL',
    excerpt:
      'Transferring RL policies from simulation to hardware is harder than papers suggest. Here are the pitfalls I hit and how I fixed them.',
    category: 'research',
    tags: ['RL', 'Robotics', 'Sim-to-Real'],
    publishedAt: '2025-05-22',
    featured: false,
    author: 'Alex Builder',
    sections: [
      {
        id: 'lesson-1',
        heading: 'Lesson 1: Randomize Everything',
        level: 2,
        content:
          'Domain randomization over mass, friction, and sensor noise was essential. Policies trained without randomization failed on the real robot within the first 10 trials.',
      },
      {
        id: 'lesson-2',
        heading: 'Lesson 2: Calibrate, Don\'t Guess',
        level: 2,
        content:
          'System identification on joint friction and backlash parameters closed half the sim-to-real gap. Guessing physics parameters from datasheets was consistently wrong.',
      },
    ],
  },
  {
    slug: 'mlops-without-overengineering',
    title: 'MLOps Without Overengineering',
    excerpt:
      'Not every team needs a feature store on day one. A pragmatic MLOps stack that scales with your team size.',
    category: 'opinion',
    tags: ['MLOps', 'Engineering', 'Process'],
    publishedAt: '2025-02-14',
    featured: false,
    author: 'Alex Builder',
    sections: [
      {
        id: 'start-simple',
        heading: 'Start Simple',
        level: 2,
        content:
          'Version your data, track experiments, and automate training. That trio solves 80% of reproducibility problems for teams under 10 people.',
      },
      {
        id: 'scale-later',
        heading: 'Scale Later',
        level: 2,
        content:
          'Add feature stores, model registries, and automated retraining only when manual processes become the bottleneck — not because a vendor demo looked impressive.',
      },
    ],
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
  { value: 'tutorial', label: 'Tutorials' },
  { value: 'research', label: 'Research' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'opinion', label: 'Opinion' },
] as const;
