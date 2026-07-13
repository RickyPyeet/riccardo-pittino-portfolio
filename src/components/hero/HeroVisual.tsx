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
        src="/images/hero/yolo-detection.webp"
        alt="Collage showing various models output"
        width={720}
        height={520}
        priority
        className="h-full w-full rounded-3x1 object-cover"
      />
    </motion.div>
  );
}
