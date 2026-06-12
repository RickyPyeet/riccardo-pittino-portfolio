import type { IconType } from 'react-icons';

import { FadeInOnScroll } from '@/components/animations/FadeInOnScroll';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/utils/classNames';

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <FadeInOnScroll>
      <div
        className={cn(
          'rounded-lg border border-primary/10 bg-white p-6 dark:border-[var(--color-border)] dark:bg-[var(--color-bg)]',
          className,
        )}
      >
        <Icon
          icon={icon}
          size={28}
          className="text-accent-dark dark:text-accent"
          decorative
        />
        <h3 className="mt-4">{title}</h3>
        <p className="mt-2 text-small">{description}</p>
      </div>
    </FadeInOnScroll>
  );
}
