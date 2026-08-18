"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

// Staggered page-load reveal for the hero: eyebrow, headline, copy and
// actions cascade in on mount instead of appearing all at once. This is the
// one deliberate load animation on the page — everything below the fold
// uses the scroll-triggered reveal in `reveal.tsx` instead. Respects
// prefers-reduced-motion by rendering already-settled, with no transform.
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HeroReveal({ className, children }: { className?: string; children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={containerVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}

export function HeroRevealItem({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <>{children}</>;
  }

  return <motion.div variants={itemVariants}>{children}</motion.div>;
}
