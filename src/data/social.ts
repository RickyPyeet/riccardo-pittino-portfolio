import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  username?: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/RickyPyeet',
    username: '@RickyPyeet',
    icon: FaGithub,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/riccardo-pittino-638a0ab9/',
    username: 'Riccardo Pittino',
    icon: FaLinkedin,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:riccardo.pittino16@gmail.com',
    username: '',
    icon: FaEnvelope,
  },
];

export const siteMeta = {
  name: 'Riccardo Pittino',
  title: 'Riccardo Pittino — Deep Learning Engineer',
  description:
    'Building deep learning systems, sharing what I learn, teaching people mountaineering and how to rock climb.',
  url: import.meta.env.VITE_SITE_URL ?? 'https://riccardopittino.dev',
  author: 'Riccardo Pittino',
  role: 'Deep Learning Engineer',
};
