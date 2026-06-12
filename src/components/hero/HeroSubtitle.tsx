import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { siteMeta } from '@/data/social';

export function HeroSubtitle() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.2, delay: 0.1, ease: 'easeOut' },
      };

  return (
    <motion.p
      className="mt-md max-w-xl text-lg text-secondary dark:text-[var(--color-text-muted)]"
      {...motionProps}
    >
      {siteMeta.role}. I ship deep learning projects and write about the
      decisions behind them — problem, decision, outcome.
    </motion.p>
  );
}
