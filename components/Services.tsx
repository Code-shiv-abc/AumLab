'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--color-deep-black)] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-cosmic-purple)]/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-400">Premium solutions for the digital age.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 md:p-10 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors rounded-2xl flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400 mb-8 flex-grow">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-gray-300">
                    <Check size={16} className="text-[var(--color-gold)] mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                 <span className="text-xs text-gray-500 uppercase tracking-widest">Starting from</span>
                 <button className="text-[var(--color-cosmic-purple-light)] hover:text-white transition-colors font-medium text-sm">
                   Inquire &rarr;
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
