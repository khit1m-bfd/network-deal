import { technologies } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const categoryColors: Record<string, string> = {
  Frontend: '#00d4ff',
  Backend: '#10b981',
  Language: '#6366f1',
  '3D': '#8b5cf6',
  Animation: '#f59e0b',
  Styling: '#ec4899',
  Database: '#06b6d4',
  Design: '#f97316',
  Cloud: '#3b82f6',
  Deploy: '#00d4ff',
  DevOps: '#84cc16',
};

export default function Technologies() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: '#030712' }}
    >
      <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />

      <div className="container-custom relative">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <SectionTitle
              eyebrow="Stack technique"
              title="Technologies"
              highlight="maîtrisées"
              description="Nous utilisons les meilleures technologies pour des résultats optimaux."
              center
            />
          </div>
        </RevealOnScroll>

        {/* Tech grid */}
        <RevealOnScroll delay={100}>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech) => {
              const color = categoryColors[tech.category] || '#00d4ff';
              return (
                <div
                  key={tech.name}
                  className="tech-badge group transition-all duration-300 hover:scale-105"
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: color,
                      boxShadow: `0 0 6px ${color}`,
                    }}
                  />
                  <span className="font-medium text-white/80 group-hover:text-white">{tech.name}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: `${color}15`,
                      color: color,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    {tech.category}
                  </span>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* Category legend */}
        <RevealOnScroll delay={200}>
          <div className="flex flex-wrap gap-3 justify-center mt-10">
            {Object.entries(categoryColors).slice(0, 8).map(([cat, color]) => (
              <div key={cat} className="flex items-center gap-1.5 text-xs text-white/40">
                <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                {cat}
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Bottom feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              icon: '⚡',
              title: 'Performance 95+',
              desc: 'Lighthouse Score optimal sur tous nos projets',
              color: '#f59e0b',
            },
            {
              icon: '🔒',
              title: 'Sécurité maximale',
              desc: 'HTTPS, headers de sécurité, protection OWASP',
              color: '#10b981',
            },
            {
              icon: '📱',
              title: '100% Responsive',
              desc: 'Mobile-first design pour tous les appareils',
              color: '#00d4ff',
            },
          ].map((feature) => (
            <RevealOnScroll key={feature.title}>
              <div
                className="p-6 rounded-2xl text-center group hover:scale-105 transition-transform duration-300"
                style={{
                  background: `${feature.color}06`,
                  border: `1px solid ${feature.color}20`,
                }}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <div className="font-bold text-white mb-1">{feature.title}</div>
                <div className="text-sm text-white/40">{feature.desc}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
