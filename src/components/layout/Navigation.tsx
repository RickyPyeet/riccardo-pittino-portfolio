import { NavLink } from 'react-router-dom';

import { mainNavigation } from '@/data/navigation';
import { cn } from '@/utils/classNames';

interface NavigationProps {
  className?: string;
  onNavigate?: () => void;
}

export function Navigation({ className, onNavigate }: NavigationProps) {
  return (
    <nav aria-label="Main navigation" className={className}>
      <ul className="flex items-center gap-6">
        {mainNavigation.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === '/'}
              aria-label={item.ariaLabel}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  'text-small font-medium text-secondary transition-colors hover:text-accent-dark dark:text-[var(--color-text-muted)] dark:hover:text-accent',
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
  );
}
