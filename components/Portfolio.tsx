'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Works</h2>
            <p className="text-gray-400">Explorations in code, design, and intelligence.</p>
          </div>
          <div className="hidden md:block w-24 h-px bg-white/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.portfolio.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative cursor-pointer"
            >
              {/* Image / Placeholder Area */}
              <div className={clsx(
                "w-full aspect-[4/3] rounded-lg overflow-hidden relative mb-4",
                project.imagePlaceholder
              )}>
                {/* Overlay Effect */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

                {/* Zoom Effect Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex justify-between items-center mb-2">
                   <span className="text-xs font-mono text-[var(--color-gold)] uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[var(--color-cosmic-purple-light)] transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
             <button className="text-sm uppercase tracking-widest text-gray-400 hover:text-white border-b border-transparent hover:border-white transition-all pb-1">
                 View All Projects
             </button>
        </div>
      </div>
    </section>
  );
}
