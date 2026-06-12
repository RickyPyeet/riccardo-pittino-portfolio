import type { AriaRole, ReactNode } from 'react';

export type ComponentVariant = 'default' | 'compact' | 'expanded';

export type ButtonVariant = 'primary' | 'secondary' | 'link';

export type ButtonSize = 'sm' | 'md' | 'lg';

export interface BaseComponentProps {
  className?: string;
  id?: string;
  children?: ReactNode;
  ariaLabel?: string;
  role?: AriaRole;
}

export interface LinkProps {
  href: string;
  external?: boolean;
}
