import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionTitle from '@/components/ui/SectionTitle';

const cases = [
  {
    client: 'Immo360',
    sector: 'Immobilier',
    challenge: 'Augmenter les ventes de biens de luxe grâce à la visualisation 3D',
    solution: 'Rendus photoréalistes 360° avec visite virtuelle interactive',
    results: ['+40% ventes', '-60% visites inutiles', 'ROI x4.5'],
    color: '#8b5cf6',
  },
  {
    client: 'TechMaroc',
    sector: 'Tech Startup',
    challenge: 'Lancer une présence digitale forte sur un marché compétitif',
    solution: 'Site Next.js premium + stratégie SEO + campagnes Google Ads',
    results: ['+320% trafic', '#1 Google', '+150% leads'],
    color: '#00d4ff',
  },
];

export default function CaseStudies() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050d1f, #030712)' }}
    >
      <div className="container-custom">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <SectionTitle
              eyebrow="Études de cas"
              title="Résultats"
              highlight="concrets"
              description="Des chiffres qui parlent. Voici comment nous transformons les défis en succès."
              center
            />
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((c, i) => (
            <RevealOnScroll key={c.client} delay={i * 100}>
              <div
                className="p-8 rounded-3xl relative overflow-hidden group hover:scale-[1.01] transition-transform duration-400"
                style={{
                  background: `linear-gradient(135deg, ${c.color}08, rgba(0,0,0,0.2))`,
                  border: `1px solid ${c.color}20`,
                }}
              >
                {/* Background glow */}
                <div
                  className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-20"
                  style={{ background: `radial-gradient(circle at 100% 0%, ${c.color}, transparent 60%)` }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span
                        className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full"
                        style={{ background: `${c.color}15`, color: c.color, border: `1px solid ${c.color}25` }}
                      >
                        {c.sector}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-2">{c.client}</h3>
                    </div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                      style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}
                    >
                      {i === 0 ? '🏢' : '🚀'}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Défi</div>
                      <p className="text-white/70 text-sm">{c.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-1">Solution</div>
                      <p className="text-white/70 text-sm">{c.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="flex gap-4">
                    {c.results.map((r) => (
                      <div
                        key={r}
                        className="flex-1 text-center py-3 rounded-xl"
                        style={{
                          background: `${c.color}10`,
                          border: `1px solid ${c.color}20`,
                        }}
                      >
                        <div
                          className="text-lg font-black"
                          style={{ color: c.color }}
                        >
                          {r}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
