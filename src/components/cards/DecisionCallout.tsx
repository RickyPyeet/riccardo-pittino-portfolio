import { cn } from '@/utils/classNames';

interface DecisionCalloutProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export function DecisionCallout({
  children,
  label = 'Decision',
  className,
}: DecisionCalloutProps) {
  return (
    <blockquote
      className={cn(
        'border-l-4 border-accent bg-accent-light/50 px-4 py-3 dark:border-accent dark:bg-accent-dark/10',
        className,
      )}
    >
      <p className="mb-1 text-tiny font-medium uppercase tracking-wide text-accent-dark dark:text-accent">
        {label}
      </p>
      <p className="text-small italic text-primary dark:text-[var(--color-text)]">
        {children}
      </p>
    </blockquote>
  );
}
