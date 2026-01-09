"use client";

import { content } from "@/data/content";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted By</h2>
            <div className="w-20 h-1 bg-[var(--color-cosmic-purple)] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/5 relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-white/10" />

              <p className="text-gray-300 italic mb-8 leading-relaxed relative z-10">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-cosmic-purple)] to-black flex items-center justify-center text-xs font-bold text-white border border-white/20">
                    {item.avatarPlaceholder}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-[var(--color-gold)] uppercase tracking-wider font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
