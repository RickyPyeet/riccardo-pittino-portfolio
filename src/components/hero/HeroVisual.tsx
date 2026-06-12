import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Image } from '@/components/ui/Image';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -30]);

  return (
    <motion.div ref={ref} style={{ y }} className="relative">
      <div
        className="absolute -inset-4 rounded-2xl bg-accent/10 blur-2xl"
        aria-hidden="true"
      />
      <Image
        src="/images/hero/hero.webp"
        alt="Abstract neural network visualization with teal accent nodes"
        width={600}
        height={400}
        priority
        className="relative shadow-lg"
      />
    </motion.div>
  );
}
