import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
          We build <span className="text-[var(--color-accent)]">digital excellence</span> for visionaries.
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
          Elite engineering. Minimalist design. High-performance web experiences that convert.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
          >
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#work"
            className="px-8 py-4 text-white border border-white/20 rounded-full hover:bg-white/5 transition-colors"
          >
            View Selected Work
          </Link>
        </div>
      </div>
    </section>
  );
}
