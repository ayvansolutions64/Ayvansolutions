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

export default function App() {
  return (
    <div className="bg-black min-h-screen">
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
    </div>
  );
}
