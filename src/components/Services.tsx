import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';
import { Workflow, Brain, Users, Mail, Target, BarChart2, Settings, Layers } from 'lucide-react';
import { cardReveal, groupReveal, itemReveal, sectionReveal, softViewport } from '../lib/motion';

const services = [
  { icon: Workflow, title: 'Workflow Automation', desc: 'Design and deploy end-to-end automated workflows that replace manual, multi-step processes.' },
  { icon: Brain, title: 'AI Integrations', desc: 'Embed AI capabilities into your operations for intelligent decision-making and processing.' },
  { icon: Users, title: 'CRM Automation', desc: 'Automate your customer relationship management — from onboarding to follow-ups.' },
  { icon: Mail, title: 'Email Automation', desc: 'Build sophisticated email sequences that nurture leads and customers automatically.' },
  { icon: Target, title: 'Lead Management', desc: 'Capture, qualify, and route leads automatically to the right team member instantly.' },
  { icon: BarChart2, title: 'Reporting Automation', desc: 'Generate and distribute accurate reports automatically on any schedule you need.' },
  { icon: Settings, title: 'Business Process Optimization', desc: 'Analyze, redesign, and automate your core business processes for maximum efficiency.' },
  { icon: Layers, title: 'Internal Operations Automation', desc: 'Streamline internal ops — from HR workflows to finance processes and beyond.' },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.16, 0.86, 1], [0, 1, 1, 0.16]);
  const sectionY = useTransform(scrollYProgress, [0, 0.22, 0.82, 1], [56, 0, 0, -34]);

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.015)_0%,transparent_60%)]" />

      <motion.div style={{ opacity: sectionOpacity, y: sectionY }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={itemReveal}
          initial="hidden"
          whileInView="show"
          viewport={softViewport}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-gray-600 font-sans">
            05 — Services
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
            What We<br />Automate
          </motion.h2>
          <motion.p
            className="font-sans text-sm text-gray-500 max-w-xs leading-relaxed"
            variants={itemReveal}
            initial="hidden"
            whileInView="show"
            viewport={softViewport}
          >
            From a single workflow to a fully automated operation — we build systems that work around the clock.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
          variants={groupReveal}
          initial="hidden"
          whileInView="show"
          viewport={softViewport}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="group bg-black p-7 hover:bg-white/[0.025] transition-all duration-500 cursor-default relative overflow-hidden"
                variants={cardReveal}
              >
                <div className="absolute top-0 left-0 w-0 h-px bg-white/30 group-hover:w-full transition-all duration-500" />

                <div className="mb-5 p-2 border border-white/8 inline-flex group-hover:border-white/20 transition-colors">
                  <Icon size={15} className="text-gray-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>

                <h3 className="font-sans text-sm font-medium text-white/80 group-hover:text-white mb-3 tracking-wide transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-xs text-gray-600 group-hover:text-gray-400 leading-relaxed transition-colors">
                  {service.desc}
                </p>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-gray-500 tracking-widest uppercase font-sans">Learn more →</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
