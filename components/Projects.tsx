"use client";

import { content } from "@/data/content";
import { Button } from "./ui/Button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="work" className="py-24 bg-[var(--color-deep-black)]">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
            <div className="w-20 h-1 bg-[var(--color-cosmic-purple)] rounded-full"></div>
          </div>
          <Button variant="ghost" href="#" className="hidden md:inline-flex" icon={<ArrowUpRight className="w-4 h-4" />}>
            View All Projects
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.portfolio.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className={`h-64 w-full ${project.imagePlaceholder} relative flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <span className="text-white/50 text-4xl font-bold tracking-widest uppercase opacity-30 select-none">
                  {project.title.split(" ")[0]}
                </span>
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[var(--color-cosmic-purple)] text-sm font-medium tracking-wide uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <a href={project.link} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
            <Button variant="ghost" href="#" icon={<ArrowUpRight className="w-4 h-4" />}>
                View All Projects
            </Button>
        </div>
      </div>
    </section>
  );
}
