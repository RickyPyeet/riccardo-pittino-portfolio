import { cn } from '@/utils/classNames';

interface DividerProps {
  className?: string;
  label?: string;
}

export function Divider({ className, label }: DividerProps) {
  if (label) {
    return (
      <div className={cn('flex items-center gap-4', className)} role="separator">
        <div className="h-px flex-1 bg-primary/10 dark:bg-[var(--color-border)]" />
        <span className="text-tiny text-tertiary">{label}</span>
        <div className="h-px flex-1 bg-primary/10 dark:bg-[var(--color-border)]" />
      </div>
    );
  }

  return (
    <hr
      className={cn(
        'border-0 border-t border-primary/10 dark:border-[var(--color-border)]',
        className,
      )}
    />
  );
}
