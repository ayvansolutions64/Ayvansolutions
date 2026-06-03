import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 2400, suffix: '+', label: 'Hours Saved', desc: 'Across all client operations' },
  { value: 180, suffix: '+', label: 'Processes Automated', desc: 'End-to-end workflows deployed' },
  { value: 95, suffix: '+', label: 'Workflows Built', desc: 'Custom automation systems' },
  { value: 40, suffix: '+', label: 'Businesses Supported', desc: 'Across multiple industries' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const duration = 2000;

    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-gray-600 font-sans">
            07 — Impact
          </span>
        </motion.div>

        <motion.h2
          className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-[0.9] mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          Measured Results
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-black p-8 md:p-12 group hover:bg-white/[0.015] transition-colors duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <div className="font-serif text-[clamp(2.5rem,5vw,4rem)] text-white font-light mb-2 leading-none">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-sans text-sm font-medium text-white/70 mb-2 tracking-wide">
                {stat.label}
              </div>
              <div className="font-sans text-xs text-gray-600 leading-relaxed">
                {stat.desc}
              </div>
              <div className="mt-6 h-px bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
