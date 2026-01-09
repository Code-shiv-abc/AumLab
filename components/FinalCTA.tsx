"use client";

import { content } from "@/data/content";
import { Button } from "./ui/Button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-cosmic-purple)]/10 to-[var(--color-cosmic-purple)]/5 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tight"
        >
            Let’s build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-gold)] to-white">
                impactful together.
            </span>
        </motion.h2>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            href={`mailto:${content.contact.email}`}
            variant="primary"
            className="w-full sm:w-auto px-8 py-4 text-lg"
            icon={<ArrowRight />}
            external
          >
            Contact Me
          </Button>
          <Button
            href={content.contact.bookCallUrl}
            variant="secondary"
            className="w-full sm:w-auto px-8 py-4 text-lg"
            icon={<ArrowUpRight />}
            external
          >
            Book a Call
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
