import { useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { appleEase, cardReveal, groupReveal, itemReveal, sectionReveal, softViewport } from '../lib/motion';

const projects = [
  {
    num: '01',
    title: 'E-Commerce Order Fulfillment',
    category: 'Workflow Automation',
    challenge: 'A growing e-commerce brand was manually processing 500+ orders daily, leading to delays, fulfillment errors, and overwhelmed staff.',
    solution: 'Built an end-to-end automated order management system integrating their Shopify store, warehouse management, and shipping carriers.',
    stack: ['Make.com', 'Shopify API', 'Google Sheets', 'Slack'],
    results: ['82% reduction in processing time', '99.6% order accuracy', '3 staff hours saved daily'],
  },
  {
    num: '02',
    title: 'Real Estate Lead Pipeline',
    category: 'CRM & Lead Automation',
    challenge: 'A real estate agency was losing qualified leads due to slow follow-up and manual CRM data entry from multiple lead sources.',
    solution: 'Designed an intelligent lead routing system that captures leads from all sources, scores them automatically, and triggers personalized outreach sequences.',
    stack: ['Zapier', 'HubSpot CRM', 'Twilio SMS', 'OpenAI'],
    results: ['67% improvement in lead response time', '40% increase in conversion rate', '100% lead capture rate'],
  },
  {
    num: '03',
    title: 'Financial Reporting Dashboard',
    category: 'Reporting Automation',
    challenge: 'A financial services firm was spending 12+ hours weekly manually compiling data from 6 different systems for executive reporting.',
    solution: 'Automated the entire data collection, consolidation, and report generation pipeline with scheduled delivery to stakeholders.',
    stack: ['n8n', 'QuickBooks API', 'Google Data Studio', 'Notion'],
    results: ['12 hours saved weekly', 'Real-time dashboard available', 'Zero manual compilation needed'],
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.16, 0.88, 1], [0, 1, 1, 0.18]);
  const sectionY = useTransform(scrollYProgress, [0, 0.22, 0.84, 1], [56, 0, 0, -34]);

  return (
    <section id="portfolio" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_bottom,rgba(255,255,255,0.015)_0%,transparent_70%)]" />

      <motion.div style={{ opacity: sectionOpacity, y: sectionY }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={itemReveal}
          initial="hidden"
          whileInView="show"
          viewport={softViewport}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-gray-600 font-sans">
            06 — Portfolio
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.h2
            className="font-serif text-[clamp(2.5rem,6vw,5rem)] font-light text-white leading-[0.9]"
            variants={sectionReveal}
            initial="hidden"
            whileInView="show"
            viewport={softViewport}
          >
            Selected<br />Work
          </motion.h2>
        </div>

        <motion.div
          className="space-y-px"
          variants={groupReveal}
          initial="hidden"
          whileInView="show"
          viewport={softViewport}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="group border border-white/5 hover:border-white/15 transition-colors duration-500"
              variants={cardReveal}
            >
              <button
                className="w-full text-left p-8 md:p-10"
                onClick={() => setActive(active === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="font-serif text-gray-700 text-sm">{project.num}</span>
                    <div>
                      <span className="font-sans text-xs tracking-widest uppercase text-gray-500 block mb-2">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-white font-light group-hover:text-white/90">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: active === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-2 border border-white/10 group-hover:border-white/30 transition-colors hidden sm:flex"
                  >
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-colors" />
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.55, ease: appleEase }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-10 pb-10 border-t border-white/5">
                      <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                          <span className="text-xs tracking-widest uppercase text-gray-600 font-sans block mb-3">Challenge</span>
                          <p className="font-sans text-sm text-gray-400 leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                          <span className="text-xs tracking-widest uppercase text-gray-600 font-sans block mb-3">Solution</span>
                          <p className="font-sans text-sm text-gray-400 leading-relaxed">{project.solution}</p>
                        </div>
                        <div>
                          <span className="text-xs tracking-widest uppercase text-gray-600 font-sans block mb-3">Stack</span>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.stack.map((s) => (
                              <span key={s} className="text-xs border border-white/10 px-2 py-1 text-gray-400 font-sans">
                                {s}
                              </span>
                            ))}
                          </div>
                          <span className="text-xs tracking-widest uppercase text-gray-600 font-sans block mb-3">Results</span>
                          <ul className="space-y-2">
                            {project.results.map((r) => (
                              <li key={r} className="flex items-center gap-2 text-xs text-white/70 font-sans">
                                <span className="w-1 h-1 bg-white/40 rounded-full shrink-0" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
