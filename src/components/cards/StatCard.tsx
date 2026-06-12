import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { cn } from '@/utils/classNames';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className }: StatCardProps) {
  return (
    <FadeInOnScroll>
      <div
        className={cn(
          'rounded-lg border border-primary/10 bg-white p-6 text-center dark:border-[var(--color-border)] dark:bg-[var(--color-bg)]',
          className,
        )}
      >
        <p className="text-h2 font-medium text-accent-dark dark:text-accent">
          {value}
        </p>
        <p className="mt-2 text-small text-secondary dark:text-[var(--color-text-muted)]">
          {label}
        </p>
      </div>
    </FadeInOnScroll>
  );
}
