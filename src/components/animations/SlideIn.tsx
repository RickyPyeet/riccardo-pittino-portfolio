import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/utils/classNames';

interface SlideInProps {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'up';
  className?: string;
  delay?: number;
}

const directionOffset = {
  left: { x: -24, y: 0 },
  right: { x: 24, y: 0 },
  up: { x: 0, y: 24 },
};

export function SlideIn({
  children,
  direction = 'up',
  className,
  delay = 0,
}: SlideInProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const offset = directionOffset[direction];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.3, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
