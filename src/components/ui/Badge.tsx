import type { ProjectDifficulty } from '@/types';
import { cn } from '@/utils/classNames';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'difficulty' | 'category';
  difficulty?: ProjectDifficulty;
  className?: string;
}

const difficultyStyles: Record<ProjectDifficulty, string> = {
  beginner: 'bg-accent-light text-accent-dark',
  intermediate: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
  advanced: 'bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300',
};

export function Badge({
  children,
  variant = 'default',
  difficulty,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-tiny font-medium capitalize',
        variant === 'difficulty' && difficulty
          ? difficultyStyles[difficulty]
          : 'bg-background-light text-secondary dark:bg-[var(--color-bg-subtle)] dark:text-[var(--color-text-muted)]',
        className,
      )}
    >
      {children}
    </span>
  );
}
