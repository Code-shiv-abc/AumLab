'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-cosmic-purple)]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/3 aspect-[3/4] relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cosmic-purple)] to-[var(--color-deep-black)] opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-lg border border-white/10"></div>

            {/* Geometric Shape / Placeholder for Image */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-32 h-32 border border-[var(--color-gold)]/30 rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
               <div className="absolute w-28 h-28 border border-white/10 -rotate-12"></div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--color-gold)]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--color-gold)]"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-2/3"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
              <span className="text-[var(--color-gold)]">Mission</span> & Vision
            </h2>

            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
              &quot;{content.about.mission}&quot;
            </p>

            <div className="space-y-6 text-gray-400 leading-loose text-sm md:text-base">
              <p>{content.about.bio}</p>
              <p>
                In a world saturated with noise, I focus on signal. By combining the precision of code with the intuition of design, I help creators and businesses build digital assets that are not only functional but meaningful.
              </p>
            </div>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-[var(--color-gold)]/50 to-transparent"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
