export default function About() {
  return (
    <section id="about" className="py-32 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto space-y-12">
        <span className="text-sm font-mono text-[var(--color-accent)] uppercase tracking-widest">
          Philosophy
        </span>
        <h2 className="text-3xl md:text-5xl font-medium leading-tight text-white">
          In a world of noise, we choose clarity. We believe that great software should be invisible, intuitive, and incredibly fast.
        </h2>
        <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
          <p>
            We don't just write code; we architect solutions. Our approach removes the unnecessary to reveal the essential, ensuring that every pixel and every line of code serves a distinct purpose.
          </p>
          <p>
            By combining aesthetic precision with engineering rigor, we help founders and brands launch products that feel inevitable.
          </p>
        </div>
      </div>
    </section>
  );
}
