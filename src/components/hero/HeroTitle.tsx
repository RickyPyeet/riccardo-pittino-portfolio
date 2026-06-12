import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function HeroTitle() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.2, ease: 'easeOut' },
      };

  return (
    <motion.h1 {...motionProps}>
      Building systems that
      <span className="text-accent-dark dark:text-accent"> learn</span> and
      scale
    </motion.h1>
  );
}
