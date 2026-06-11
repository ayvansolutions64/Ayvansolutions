import type { Variants } from 'framer-motion';

export const appleEase = [0.22, 1, 0.36, 1];

export const softViewport = {
  once: false,
  amount: 0.24,
};

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 44,
    filter: 'blur(14px)',
  },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.05,
      ease: appleEase,
    },
  },
};

export const groupReveal: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const itemReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
    filter: 'blur(10px)',
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.9,
      ease: appleEase,
    },
  },
};

export const cardReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.975,
    filter: 'blur(12px)',
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.85,
      ease: appleEase,
    },
  },
};
