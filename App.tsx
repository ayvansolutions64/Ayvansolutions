import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Vision from './components/Vision';
import WhyAutomation from './components/WhyAutomation';
import BeforeAfter from './components/BeforeAfter';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Impact from './components/Impact';
import Quote from './components/Quote';
import Contact from './components/Contact';
import Footer from './components/Footer';

function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      setProgress(Math.round(eased * 100));
      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(onComplete, 400);
      }
    };
    requestAnimationFrame(animate);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        className="flex flex-col items-center gap-8"
      >
        <img
          src="/AYVAN_1.png"
          alt="Ayvan Solutions"
          className="w-24 h-24 object-contain invert"
        />
        <div className="w-48 h-px bg-gray-800 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-white"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: 'linear' }}
          />
        </div>
        <span className="font-sans text-gray-600 text-xs tracking-[0.3em] uppercase">
          {progress}
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Navigation />
          <main>
            <Hero />
            <Vision />
            <WhyAutomation />
            <BeforeAfter />
            <Services />
            <Portfolio />
            <Impact />
            <Quote />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
