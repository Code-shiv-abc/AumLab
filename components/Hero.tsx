"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { content } from "@/data/content";
import { Button } from "./ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[var(--color-cosmic-purple)] opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[var(--color-gold)] opacity-5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide text-gray-300 mb-8"
        >
          <Sparkles className="w-3 h-3 text-[var(--color-gold)]" />
          <span>Available for New Projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]"
        >
          <span className="sr-only">AumLab: </span>
          Transforming Ideas into{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Intelligent Digital Reality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {content.hero.subHeadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <Button href="#contact" variant="primary" icon={<ArrowRight />}>
            {content.hero.cta.primary}
          </Button>
          <Button href={content.contact.bookCallUrl} variant="secondary" external>
            {content.hero.cta.secondary}
          </Button>
        </motion.div>

        {/* Elevated Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
          <Image
            src="/brand-image.jpg"
            alt="AumLab Brand Identity"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
}
