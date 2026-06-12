import type { IconType } from 'react-icons';

import { cn } from '@/utils/classNames';

interface IconProps {
  icon: IconType;
  size?: number;
  className?: string;
  label?: string;
  decorative?: boolean;
}

export function Icon({
  icon: IconComponent,
  size = 20,
  className,
  label,
  decorative = true,
}: IconProps) {
  return (
    <IconComponent
      size={size}
      className={cn('shrink-0', className)}
      aria-hidden={decorative}
      aria-label={decorative ? undefined : label}
      role={decorative ? undefined : 'img'}
    />
  );
}
