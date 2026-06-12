import { Link } from 'react-router-dom';

import { footerNavigation } from '@/data/navigation';
import { siteMeta, socialLinks } from '@/data/social';

import { Container } from './Container';
import { Divider } from '../ui/Divider';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-primary/5 bg-background-light dark:border-[var(--color-border)] dark:bg-[var(--color-bg-subtle)]">
      <Container className="py-xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-medium text-primary dark:text-[var(--color-text)]">
              {siteMeta.name}
            </p>
            <p className="mt-2 text-small text-secondary dark:text-[var(--color-text-muted)]">
              {siteMeta.description}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-3 text-small font-medium text-primary dark:text-[var(--color-text)]">
              Pages
            </p>
            <ul className="space-y-2">
              {footerNavigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-small text-secondary transition-colors hover:text-accent-dark dark:text-[var(--color-text-muted)] dark:hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-small font-medium text-primary dark:text-[var(--color-text)]">
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-small text-secondary transition-colors hover:text-accent-dark dark:text-[var(--color-text-muted)] dark:hover:text-accent"
                    target={link.id !== 'email' ? '_blank' : undefined}
                    rel={link.id !== 'email' ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider className="my-lg" />

        <p className="text-tiny text-tertiary">
          © {currentYear} {siteMeta.author}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
