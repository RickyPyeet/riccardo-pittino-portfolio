import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import type { ButtonSize, ButtonVariant } from '@/types';
import { cn } from '@/utils/classNames';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  to?: string;
  external?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  isLoading?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-primary hover:bg-accent-dark hover:text-white dark:text-primary',
  secondary:
    'border border-primary/20 bg-transparent text-primary hover:border-accent hover:text-accent-dark dark:text-[var(--color-text)] dark:hover:text-accent',
  link: 'bg-transparent text-accent-dark underline-offset-4 hover:underline p-0',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-small',
  md: 'px-5 py-2.5 text-body',
  lg: 'px-6 py-3 text-body',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  href,
  to,
  external = false,
  type = 'button',
  disabled = false,
  isLoading = false,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50',
    variant !== 'link' && sizeStyles[size],
    variantStyles[variant],
    className,
  );

  const motionProps = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: variant === 'link' ? 1 : 1.02 },
        whileTap: { scale: variant === 'link' ? 1 : 0.98 },
        transition: { duration: 0.1 },
      };

  const content = isLoading ? (
    <>
      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      <span>Sending…</span>
    </>
  ) : (
    children
  );

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={to} className={classes} aria-label={ariaLabel}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-flex">
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled || isLoading}
      aria-label={ariaLabel}
      aria-busy={isLoading}
      onClick={onClick}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
