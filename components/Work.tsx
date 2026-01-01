import Link from 'next/link';

const projects = [
  {
    name: 'Vanguard',
    category: 'Fintech',
    outcome: 'Increased conversion by 40%',
    year: '2024',
  },
  {
    name: 'Lumina',
    category: 'SaaS',
    outcome: 'Reduced load time to 0.8s',
    year: '2024',
  },
  {
    name: 'Apex Arch',
    category: 'Architecture',
    outcome: 'Award-winning portfolio design',
    year: '2023',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-20">
          <div>
            <span className="text-sm font-mono text-[var(--color-accent)] uppercase tracking-widest">
              Selected Work
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white">Proven results.</h2>
          </div>
        </div>

        <div className="border-t border-white/10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group py-12 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/[0.02] transition-colors px-4"
            >
              <div className="md:w-1/3">
                <h3 className="text-2xl font-medium text-white group-hover:text-[var(--color-accent)] transition-colors">
                  {project.name}
                </h3>
                <span className="text-sm text-gray-500">{project.category}</span>
              </div>
              <div className="md:w-1/3">
                <p className="text-gray-400">{project.outcome}</p>
              </div>
              <div className="md:w-1/3 text-right">
                <span className="font-mono text-sm text-gray-600">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
