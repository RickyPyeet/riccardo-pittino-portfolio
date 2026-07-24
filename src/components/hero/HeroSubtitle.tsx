import { motion } from 'framer-motion';

import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

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
      Self-taught developer exploring Computer Vision and generative AI through implementation, research and technical writing.
    </motion.p>
  );
}
