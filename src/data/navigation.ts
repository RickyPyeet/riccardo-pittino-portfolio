export interface NavItem {
  label: string;
  path: string;
  ariaLabel?: string;
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', path: '/', ariaLabel: 'Go to home page' },
  { label: 'Projects', path: '/projects', ariaLabel: 'View projects' },
  { label: 'Articles', path: '/articles', ariaLabel: 'Read articles' },
  { label: 'About', path: '/about', ariaLabel: 'Learn about me' },
  { label: 'Contact', path: '/contact', ariaLabel: 'Get in touch' },
];

export const footerNavigation: NavItem[] = [
  { label: 'Projects', path: '/projects' },
  { label: 'Articles', path: '/articles' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Privacy', path: '/privacy' },
];
