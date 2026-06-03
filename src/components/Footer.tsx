import { motion } from 'framer-motion';
import { Instagram, Linkedin, Globe, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Vision', href: '#vision' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Mail, href: 'mailto:hello@ayvansolutions.com', label: 'Email' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Globe, href: '#', label: 'Website' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/AYVAN_1.png"
                alt="Ayvan Solutions"
                className="h-10 w-10 object-contain invert opacity-80"
              />
              <div>
                <div className="font-serif text-white/80 text-sm tracking-[0.15em] uppercase">Ayvan Solutions</div>
                <div className="font-sans text-xs text-gray-600 tracking-[0.1em] mt-0.5">Own Your Time.</div>
              </div>
            </div>
            <p className="font-sans text-xs text-gray-600 leading-relaxed max-w-xs">
              Intelligent automation systems that eliminate repetitive workflows and help businesses reclaim their time.
            </p>
          </div>

          <div>
            <span className="text-xs tracking-widest uppercase text-gray-700 font-sans block mb-5">Navigation</span>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-xs text-gray-500 hover:text-white transition-colors font-sans tracking-wide text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs tracking-widest uppercase text-gray-700 font-sans block mb-5">Connect</span>
            <div className="flex flex-col gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center gap-3 group"
                  >
                    <Icon size={13} className="text-gray-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    <span className="text-xs text-gray-500 group-hover:text-white transition-colors font-sans">
                      {social.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-sans text-xs text-gray-700">
            &copy; {new Date().getFullYear()} Ayvan Solutions. All rights reserved.
          </span>
          <span className="font-serif text-xs text-gray-700 italic">
            Own Your Time. Let Automation Handle the Rest.
          </span>
        </div>
      </div>
    </footer>
  );
}
