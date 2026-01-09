"use client";

import { content } from "@/data/content";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyAumLab() {
  return (
    <section id="why-aumlab" className="py-24 bg-black relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--color-cosmic-purple)] opacity-10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why AumLab?</h2>
          <p className="text-gray-400">
            I don't just write code. I build digital assets that are robust, scalable, and designed to perform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.whyAumLab.map((item, index) => {
             const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[item.icon];

             return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[var(--color-cosmic-purple)] shadow-[0_0_30px_rgba(90,26,255,0.1)]">
                  {IconComponent ? <IconComponent className="w-8 h-8" /> : <LucideIcons.Star className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
