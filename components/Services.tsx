"use client";

import { content } from "@/data/content";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
          <div className="w-20 h-1 bg-[var(--color-cosmic-purple)] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.services.map((service, index) => {
             // Dynamically access the icon component
             const IconComponent = (LucideIcons as unknown as Record<string, LucideIcon>)[service.icon];

             return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[var(--color-cosmic-purple)]/50 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[var(--color-cosmic-purple)]/20 transition-colors">
                   {IconComponent ? (
                      <IconComponent className="w-6 h-6 text-gray-300 group-hover:text-[var(--color-cosmic-purple)] transition-colors" />
                    ) : (
                      <LucideIcons.Box className="w-6 h-6 text-gray-300" />
                    )}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
