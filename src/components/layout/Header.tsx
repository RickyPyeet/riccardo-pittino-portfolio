import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

import { useNavigation } from '@/context/NavigationContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { siteMeta } from '@/data/social';
import { cn } from '@/utils/classNames';

import { MobileMenu } from './MobileMenu';
import { Navigation } from './Navigation';

export function Header() {
  const { isMobileMenuOpen, openMobileMenu } = useNavigation();
  const scrollDirection = useScrollDirection();

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-30 border-b border-primary/5 bg-white/90 backdrop-blur-md transition-transform duration-300 dark:border-[var(--color-border)] dark:bg-[var(--color-bg)]/90',
          scrollDirection === 'down' && 'md:-translate-y-full',
        )}
      >
        <div className="container-app flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-lg font-medium"
            aria-label={`${siteMeta.name} home`}
          >
            {siteMeta.name}
          </Link>

          <Navigation className="hidden lg:block" />

          <button
            type="button"
            className="rounded-md p-2 text-secondary transition-colors hover:text-accent-dark dark:hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
            onClick={openMobileMenu}
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <HiMenu size={24} aria-hidden="true" />
          </button>
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
