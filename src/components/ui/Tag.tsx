import { cn } from '@/utils/classNames';

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-primary/10 bg-white px-2 py-1 text-tiny text-secondary dark:border-[var(--color-border)] dark:bg-[var(--color-bg-subtle)] dark:text-[var(--color-text-muted)]',
        className,
      )}
    >
      {children}
    </span>
  );
}
