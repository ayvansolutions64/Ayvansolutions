import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const nodes = [
  { x: 15, y: 30, label: 'CRM', delay: 0 },
  { x: 50, y: 15, label: 'Email', delay: 0.1 },
  { x: 85, y: 30, label: 'Reports', delay: 0.2 },
  { x: 20, y: 65, label: 'Data Entry', delay: 0.3 },
  { x: 50, y: 50, label: 'Core', delay: 0.4, core: true },
  { x: 80, y: 65, label: 'Leads', delay: 0.5 },
  { x: 35, y: 82, label: 'Tasks', delay: 0.6 },
  { x: 65, y: 82, label: 'Analytics', delay: 0.7 },
];

const connections = [
  [0, 4], [1, 4], [2, 4], [3, 4], [4, 5], [4, 6], [4, 7],
];

function WorkflowViz() {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        {connections.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 + i * 0.1, ease: 'easeInOut' }}
          />
        ))}
        {nodes.map((node, i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6 + node.delay, ease: [0.34, 1.56, 0.64, 1] }}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.core ? 3.5 : 2}
              fill={node.core ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.15)'}
              stroke={node.core ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.2)'}
              strokeWidth="0.3"
            />
            {node.core && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r={5}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="0.3"
                animate={{ r: [5, 7, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}
          </motion.g>
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 + node.delay }}
        >
          <span className={`text-[9px] tracking-widest uppercase font-sans ${node.core ? 'text-white font-medium mt-5 block' : 'text-gray-500 mt-4 block'}`}>
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
  };

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.02)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(255,255,255,0.015)_0%,transparent_60%)]" />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col gap-8">
            <motion.div variants={item}>
              <span className="text-xs tracking-[0.35em] uppercase text-gray-500 font-sans border border-white/10 px-3 py-1.5 inline-block">
                Intelligent Automation Agency
              </span>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                className="font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] font-light text-white tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.01 }}
              >
                {['Own', 'Your', 'Time.'].map((word, i) => (
                  <motion.span
                    key={word}
                    className="block overflow-hidden"
                    initial={{ y: '100%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.85, delay: 0.4 + i * 0.15, ease: [0.76, 0, 0.24, 1] }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            <motion.p
              variants={item}
              className="font-serif text-[clamp(1.1rem,2vw,1.5rem)] text-gray-400 font-light italic leading-relaxed max-w-md"
            >
              Let Automation Handle the Rest.
            </motion.p>

            <motion.p variants={item} className="font-sans text-sm text-gray-500 leading-relaxed max-w-md">
              Ayvan Solutions builds intelligent automation systems that eliminate repetitive workflows, reduce operational bottlenecks, and help businesses focus on growth instead of routine tasks.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-4 text-xs tracking-[0.2em] uppercase font-medium font-sans hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Discovery Call
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="group flex items-center justify-center gap-3 border border-white/20 hover:border-white/50 text-white/70 hover:text-white px-8 py-4 text-xs tracking-[0.2em] uppercase font-sans transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[420px] lg:h-[520px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 border border-white/5 bg-white/[0.01]">
              <WorkflowViz />
            </div>
            <div className="absolute -inset-px bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-xs tracking-[0.25em] uppercase text-gray-600 font-sans">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
            <ArrowDown size={14} className="text-gray-600" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
