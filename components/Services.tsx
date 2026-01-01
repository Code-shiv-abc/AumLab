import { Code2, PenTool, LayoutTemplate, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    desc: 'Performant, scalable React & Next.js applications.',
    icon: Code2,
  },
  {
    title: 'UI/UX Design',
    desc: 'Minimalist interfaces focused on conversion and clarity.',
    icon: PenTool,
  },
  {
    title: 'Design Systems',
    desc: 'Scalable component libraries for consistent branding.',
    icon: LayoutTemplate,
  },
  {
    title: 'Technical Strategy',
    desc: 'Architecture planning for long-term growth.',
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-sm font-mono text-[var(--color-accent)] uppercase tracking-widest">
            Expertise
          </span>
          <h2 className="mt-4 text-4xl font-bold text-white">How we help.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-8 border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/[0.02] transition-colors"
            >
              <service.icon className="w-8 h-8 text-[var(--color-accent)] mb-6" />
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
