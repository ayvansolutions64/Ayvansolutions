import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';

const before = [
  'Manual Tasks',
  'Repeated Data Entry',
  'Human Errors',
  'Slow Processes',
  'Lost Time',
];

const after = [
  'Automated Workflows',
  'Accurate Systems',
  'Faster Operations',
  'Scalable Processes',
  'More Time for Growth',
];

export default function BeforeAfter() {
  const [active, setActive] = useState<'before' | 'after'>('before');
  const ref = useRef<HTMLDivElement>(null);

  const items = active === 'before' ? before : after;
  const isAfter = active === 'after';

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-gray-600 font-sans">
            04 — Transformation
          </span>
        </motion.div>

        <motion.h2
          className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-[0.9] mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          Before vs After
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex border border-white/10 mb-10 max-w-xs">
              {(['before', 'after'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`flex-1 py-3 text-xs tracking-[0.2em] uppercase font-sans transition-all duration-300 ${
                    active === tab
                      ? 'bg-white text-black'
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: active === 'after' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: active === 'after' ? -20 : 20 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="space-y-4"
              >
                {items.map((item, i) => (
                  <motion.div
                    key={item}
                    className={`flex items-center gap-4 p-4 border transition-colors ${
                      isAfter
                        ? 'border-white/10 hover:border-white/20'
                        : 'border-white/5 hover:border-white/10'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                  >
                    <div className={`p-1 ${isAfter ? 'bg-white/10' : 'bg-white/5'}`}>
                      {isAfter ? (
                        <Check size={12} className="text-white" />
                      ) : (
                        <X size={12} className="text-gray-500" />
                      )}
                    </div>
                    <span className={`font-sans text-sm ${isAfter ? 'text-white' : 'text-gray-500'}`}>
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:block relative h-[420px]">
            <AnimatePresence mode="wait">
              {active === 'before' ? (
                <motion.div
                  key="before-viz"
                  className="absolute inset-0 flex flex-col items-center justify-center gap-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-full h-full border border-white/5 p-8 overflow-hidden">
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_30px,rgba(255,255,255,0.02)_30px,rgba(255,255,255,0.02)_31px)]" />
                    <div className="relative z-10 space-y-4">
                      {before.map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3"
                          animate={{ x: [0, i % 2 === 0 ? 3 : -3, 0] }}
                          transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <div className="w-2 h-2 bg-white/20 rounded-full" />
                          <div
                            className="h-px bg-white/10 flex-1"
                            style={{ width: `${40 + i * 12}%` }}
                          />
                          <span className="text-xs text-gray-700 font-sans tracking-widest uppercase shrink-0">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-700 tracking-widest uppercase font-sans">
                      Manual Operations
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after-viz"
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-full h-full border border-white/10 p-8 overflow-hidden relative">
                    <div className="absolute inset-0">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"
                          style={{ top: `${20 + i * 15}%` }}
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{
                            duration: 3 + i * 0.4,
                            delay: i * 0.6,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      ))}
                    </div>
                    <div className="relative z-10 space-y-4">
                      {after.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-white/60 rounded-full" />
                          <span className="text-xs text-gray-300 font-sans tracking-widest uppercase">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-4 right-4 text-xs text-gray-400 tracking-widest uppercase font-sans">
                      Automated Systems
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
