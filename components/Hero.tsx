'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--color-deep-black)]">

      {/* Background: Sacred Geometry Pulse (CSS/SVG) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] border border-white/5 rounded-full animate-pulse opacity-30 absolute"></div>
        <div className="w-[450px] h-[450px] border border-[var(--color-cosmic-purple)]/20 rounded-full animate-[spin_20s_linear_infinite] absolute"></div>
        <div className="w-[300px] h-[300px] border border-[var(--color-gold)]/10 rounded-full absolute rotate-45"></div>

        {/* Gradient Mesh Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-cosmic-purple)] opacity-10 blur-[100px] rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">

        {/* Logo Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
            {/* Simple geometric logo placeholder */}
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto text-[var(--color-gold)]">
                <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="1" fill="none" className="animate-[pulse_3s_infinite]"/>
                <circle cx="12" cy="14" r="3" fill="currentColor" className="opacity-50"/>
            </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500"
        >
          {content.hero.headline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10 text-sm md:text-base text-[var(--color-cosmic-purple-light)] font-medium uppercase tracking-widest"
        >
          {content.hero.subHeadline.map((role, index) => (
            <span key={role} className="flex items-center">
              {role}
              {index !== content.hero.subHeadline.length - 1 && (
                <span className="ml-3 md:ml-6 w-1 h-1 bg-gray-700 rounded-full"></span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="#portfolio"
            className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-[var(--color-gold)] transition-colors duration-300"
          >
            {content.hero.cta.primary}
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            {content.hero.cta.secondary}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </motion.div>
    </section>
  );
}
