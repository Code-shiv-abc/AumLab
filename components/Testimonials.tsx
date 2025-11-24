'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';

export default function Testimonials() {
  return (
    <section className="py-24 bg-black border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-8 border border-white/5 rounded-xl bg-gradient-to-b from-white/[0.02] to-transparent relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-4xl text-white/5 font-serif">&quot;</div>

              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                &quot;{item.quote}&quot;
              </p>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-white mr-4 border border-white/10">
                  {item.avatarPlaceholder}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <span className="text-[var(--color-gold)] text-xs uppercase tracking-wide">{item.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
