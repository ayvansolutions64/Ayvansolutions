import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const visionItems = [
  { num: '01', text: 'Eliminate repetitive manual workflows that drain your team\'s capacity.' },
  { num: '02', text: 'Build intelligent systems that work while your team focuses on strategy.' },
  { num: '03', text: 'Scale operations without scaling headcount through smart automation.' },
];

function VisionItem({ item, index }: { item: typeof visionItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'start 0.5'] });
  const x = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const op = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ x, opacity: op }}
      className="flex gap-6 items-start border-l border-white/10 pl-6 py-4 hover:border-white/30 transition-colors duration-300"
    >
      <span className="font-serif text-gray-700 text-sm shrink-0">{item.num}</span>
      <p className="font-sans text-sm text-gray-500 leading-relaxed">{item.text}</p>
    </motion.div>
  );
}

export default function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section id="vision" ref={ref} className="relative min-h-screen flex items-center py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div style={{ opacity }} className="mb-16">
          <span className="text-xs tracking-[0.35em] uppercase text-gray-600 font-sans">
            02 — The Vision
          </span>
          <motion.div
            className="h-px bg-white/20 mt-4"
            style={{ width: lineWidth }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.h2
              className="font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.9] font-light text-white mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            >
              The Vision
            </motion.h2>

            <motion.p
              className="font-sans text-base text-gray-400 leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
            >
              Businesses should spend less time managing repetitive work and more time creating value.
            </motion.p>

            <motion.p
              className="font-sans text-sm text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
            >
              Through intelligent automation, streamlined systems, and modern workflows, Ayvan Solutions helps organizations reclaim their time and operate more efficiently.
            </motion.p>
          </div>

          <div className="space-y-6">
            {visionItems.map((item, i) => (
              <VisionItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        <div className="mt-24 relative overflow-hidden">
          <motion.div
            className="border border-white/5 p-12 md:p-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="font-serif text-[clamp(1.5rem,4vw,3rem)] text-white/90 font-light leading-relaxed text-center italic">
              &ldquo;Time is the only asset you can never earn back.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
