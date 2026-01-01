import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-40 px-6 text-center">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Ready to build something <span className="text-[var(--color-accent)]">legendary</span>?
        </h2>
        <p className="text-xl text-gray-400">
          No forms. No spam. Just direct communication.
        </p>
        <div className="pt-8">
          <a
            href="mailto:hello@aumlabs.com"
            className="inline-block px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all"
          >
            hello@aumlabs.com
          </a>
        </div>
      </div>
    </section>
  );
}
