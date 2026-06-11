import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, AlertCircle, TrendingUp, Zap, CheckCircle2 } from 'lucide-react';
import { cardReveal, groupReveal, sectionReveal, softViewport } from '../lib/motion';

const cards = [
  {
    icon: Clock,
    title: 'Save Time',
    desc: 'Automate hours of manual work daily. Reclaim productive capacity for high-value strategic work.',
    stat: '40%',
    statLabel: 'avg. time saved',
  },
  {
    icon: AlertCircle,
    title: 'Reduce Human Error',
    desc: 'Eliminate costly mistakes from repetitive manual data entry and processing tasks.',
    stat: '99.8%',
    statLabel: 'accuracy rate',
  },
  {
    icon: TrendingUp,
    title: 'Increase Productivity',
    desc: 'Your team focuses on creative, strategic work while automation handles the routine.',
    stat: '3x',
    statLabel: 'output increase',
  },
  {
    icon: Zap,
    title: 'Scale Faster',
    desc: 'Grow your operations without proportionally increasing headcount or overhead costs.',
    stat: '10x',
    statLabel: 'faster scaling',
  },
  {
    icon: CheckCircle2,
    title: 'Improve Consistency',
    desc: 'Every process runs identically, every time. Consistent quality at any volume.',
    stat: '100%',
    statLabel: 'process consistency',
  },
];

export default function WhyAutomation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const labelOpacity = useTransform(scrollYProgress, [0, 0.12], [0, 1]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.16, 0.86, 1], [0, 1, 1, 0.16]);
  const sectionY = useTransform(scrollYProgress, [0, 0.22, 0.82, 1], [56, 0, 0, -34]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.015)_0%,transparent_60%)]" />

      <motion.div style={{ opacity: sectionOpacity, y: sectionY }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          style={{ opacity: labelOpacity }}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-gray-600 font-sans">
            03 — Why Automation
          </span>
        </motion.div>

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="show"
          viewport={softViewport}
          className="mb-20"
        >
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-[0.9] mb-4">
            Why It Matters
          </h2>
          <p className="font-sans text-sm text-gray-500 max-w-md leading-relaxed">
            Automation is no longer a luxury — it's the foundation of efficient, scalable businesses.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
          variants={groupReveal}
          initial="hidden"
          whileInView="show"
          viewport={softViewport}
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                className="group bg-black p-8 hover:bg-white/[0.02] transition-colors duration-500 cursor-default"
                variants={cardReveal}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="p-2 border border-white/10 group-hover:border-white/20 transition-colors">
                    <Icon size={16} className="text-gray-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-2xl text-white/90">{card.stat}</div>
                    <div className="font-sans text-xs text-gray-600 tracking-widest uppercase">{card.statLabel}</div>
                  </div>
                </div>

                <h3 className="font-sans text-sm font-medium text-white mb-3 tracking-wide">
                  {card.title}
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">
                  {card.desc}
                </p>

                <div className="mt-6 h-px bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
              </motion.div>
            );
          })}

          <motion.div
            className="md:col-span-2 bg-black p-8 flex items-center justify-center border-t border-white/5"
            variants={cardReveal}
          >
            <p className="font-serif text-[clamp(1.3rem,3vw,2rem)] text-white/70 text-center font-light italic leading-relaxed">
              Time is the only asset<br />you can never earn back.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
