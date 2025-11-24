'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';
import { Code, Sparkles, Palette, Zap, Terminal, Bot } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code,
  Sparkles,
  Palette,
  Zap,
  Terminal,
  Bot,
};

export default function Expertise() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="expertise" className="py-24 bg-[var(--color-deep-black)] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Expertise</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A multidisciplinary approach to digital creation.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {content.expertise.map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Zap;

            return (
              <motion.div
                key={idx}
                variants={item}
                className="group p-8 border border-white/5 hover:border-[var(--color-gold)]/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 rounded-xl relative overflow-hidden"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-cosmic-purple)]/0 to-[var(--color-gold)]/0 group-hover:from-[var(--color-cosmic-purple)]/10 group-hover:to-[var(--color-gold)]/5 transition-all duration-500"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 text-[var(--color-gold)] group-hover:text-white transition-colors duration-300">
                    <IconComponent strokeWidth={1.5} size={40} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[var(--color-gold)] transition-colors">{skill.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">{skill.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
