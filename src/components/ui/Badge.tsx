import type { ProjectDifficulty } from '@/types';
import { cn } from '@/utils/classNames';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'difficulty' | 'category';
  difficulty?: ProjectDifficulty;
  className?: string;
}

const difficultyStyles: Record<ProjectDifficulty, string> = {
  beginner: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  intermediate: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  advanced: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  "research-level": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
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
