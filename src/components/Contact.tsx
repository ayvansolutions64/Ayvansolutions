import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Instagram, Linkedin, Globe, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@ayvansolutions.com', href: 'mailto:hello@ayvansolutions.com' },
    { icon: Instagram, label: 'Instagram', value: '@ayvansolutions', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'Ayvan Solutions', href: '#' },
    { icon: Globe, label: 'Website', value: 'ayvansolutions.com', href: '#' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.015)_0%,transparent_60%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <span className="text-xs tracking-[0.35em] uppercase text-gray-600 font-sans">
            09 — Contact
          </span>
        </motion.div>

        <motion.h2
          className="font-serif text-[clamp(2.5rem,7vw,6rem)] font-light text-white leading-[0.9] mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          Let's Build<br />Smarter Systems
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="font-sans text-sm text-gray-400 leading-relaxed mb-12 max-w-sm">
              Ready to reclaim your time? Tell us about your business and we'll design an automation strategy tailored to your needs.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="p-2 border border-white/10 group-hover:border-white/30 transition-colors">
                      <Icon size={14} className="text-gray-500 group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-xs tracking-widest uppercase text-gray-600 font-sans block">{item.label}</span>
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-sans">{item.value}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            {submitted ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center gap-6 border border-white/10 p-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                  <ArrowRight size={18} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl text-white font-light">Message Received</h3>
                <p className="font-sans text-sm text-gray-500">We'll be in touch within 24 hours to discuss your automation needs.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                  { name: 'company', label: 'Company', type: 'text', placeholder: 'Company name' },
                  { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  { name: 'phone', label: 'Phone', type: 'tel', placeholder: '+1 (000) 000-0000' },
                ].map((field) => (
                  <div key={field.name} className="group">
                    <label className="text-xs tracking-widest uppercase text-gray-600 font-sans block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-transparent border border-white/10 focus:border-white/40 text-white placeholder:text-gray-700 font-sans text-sm px-4 py-3 outline-none transition-colors duration-300"
                    />
                  </div>
                ))}

                <div>
                  <label className="text-xs tracking-widest uppercase text-gray-600 font-sans block mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Tell us about your business and what you'd like to automate..."
                    rows={4}
                    required
                    className="w-full bg-transparent border border-white/10 focus:border-white/40 text-white placeholder:text-gray-700 font-sans text-sm px-4 py-3 outline-none transition-colors duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="group w-full flex items-center justify-center gap-3 bg-white text-black py-4 text-xs tracking-[0.2em] uppercase font-medium font-sans hover:bg-gray-100 transition-colors duration-300 disabled:opacity-60 mt-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {loading ? (
                    <motion.div
                      className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                    />
                  ) : (
                    <>
                      Start Automating
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
