import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { appleEase, itemReveal, softViewport } from '../lib/motion';

export default function Quote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.34, 0.72, 1], [0.92, 1, 1, 0.965]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.78, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.35, 0.78, 1], [72, 0, 0, -44]);
  const filter = useTransform(scrollYProgress, [0, 0.25, 0.82, 1], ['blur(18px)', 'blur(0px)', 'blur(0px)', 'blur(12px)']);

  const line1Progress = useTransform(scrollYProgress, [0.16, 0.42, 0.82, 1], [0, 1, 1, 0.2]);
  const line2Progress = useTransform(scrollYProgress, [0.28, 0.54, 0.82, 1], [0, 1, 1, 0.1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_65%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" />

      <motion.div
        style={{ scale, opacity, y, filter }}
        className="relative z-10 text-center max-w-5xl mx-auto px-6"
      >
        <motion.div
          variants={itemReveal}
          initial="hidden"
          whileInView="show"
          viewport={softViewport}
          className="mb-12"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-gray-600 font-sans">
            08 — Manifesto
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h2
            className="font-serif text-[clamp(3rem,9vw,8rem)] font-light text-white leading-[0.9] tracking-tight mb-4"
            style={{ opacity: line1Progress }}
          >
            Own Your Time.
          </motion.h2>
        </div>

        <div className="overflow-hidden">
          <motion.p
            className="font-serif text-[clamp(1.5rem,4vw,3.5rem)] font-light text-gray-500 leading-tight italic"
            style={{ opacity: line2Progress }}
          >
            Let Automation Handle the Rest.
          </motion.p>
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={softViewport}
          transition={{ duration: 0.9, delay: 0.25, ease: appleEase }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
