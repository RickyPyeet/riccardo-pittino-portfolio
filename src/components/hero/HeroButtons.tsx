import { motion } from 'framer-motion';

import { Button } from '@/components/ui/Button';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function HeroButtons() {
  const prefersReducedMotion = usePrefersReducedMotion();

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3, delay: 0.2, ease: 'easeOut' },
      };

  return (
    <motion.div
      className="mt-lg flex flex-wrap gap-4"
      {...motionProps}
    >
      <Button to="/projects" size="lg">
        View Projects
      </Button>
      <Button to="/articles" variant="secondary" size="lg">
        Read Articles
      </Button>
    </motion.div>
  );
}
