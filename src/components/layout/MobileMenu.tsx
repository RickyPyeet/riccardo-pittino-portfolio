import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { HiX } from 'react-icons/hi';

import { mainNavigation } from '@/data/navigation';
import { useNavigation } from '@/context/NavigationContext';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { trapFocus } from '@/utils/accessibility';
import { cn } from '@/utils/classNames';

export function MobileMenu() {
  const { isMobileMenuOpen, closeMobileMenu } = useNavigation();
  const prefersReducedMotion = usePrefersReducedMotion();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    const releaseFocus = menuRef.current
      ? trapFocus(menuRef.current)
      : undefined;

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
      releaseFocus?.();
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-primary/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 shadow-xl dark:bg-[var(--color-bg)] lg:hidden"
            initial={prefersReducedMotion ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={prefersReducedMotion ? undefined : { x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-h3 font-medium text-primary dark:text-[var(--color-text)]">
                Menu
              </span>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="rounded-md p-2 text-secondary hover:text-accent-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label="Close menu"
              >
                <HiX size={24} aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col gap-4">
                {mainNavigation.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === '/'}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        cn(
                          'block py-2 text-lg font-medium text-secondary transition-colors hover:text-accent-dark dark:text-[var(--color-text-muted)]',
                          isActive && 'text-accent-dark dark:text-accent',
                        )
                      }
                    >
                      {({ isActive }) => (
                        <span aria-current={isActive ? 'page' : undefined}>
                          {item.label}
                        </span>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
