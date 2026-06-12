export interface SocialLink {
  id: string;
  label: string;
  href: string;
  username?: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/builder-portfolio',
    username: '@builder-portfolio',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/builder-portfolio',
    username: 'builder-portfolio',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:hello@builder-portfolio.dev',
    username: 'hello@builder-portfolio.dev',
  },
];

export const siteMeta = {
  name: 'Builder Portfolio',
  title: 'Builder Portfolio — Deep Learning & Technical Writing',
  description:
    'Portfolio showcasing deep learning projects and technical writing with a problem → decision → outcome narrative.',
  url: import.meta.env.VITE_SITE_URL ?? 'https://builder-portfolio.dev',
  author: 'Alex Builder',
  role: 'ML Engineer & Technical Writer',
};
