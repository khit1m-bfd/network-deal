import RevealOnScroll from '@/components/ui/RevealOnScroll';
import SectionTitle from '@/components/ui/SectionTitle';

const values = [
  { icon: '⚡', title: 'Performance', desc: 'Sites optimisés Lighthouse 95+' },
  { icon: '◈', title: 'Créativité', desc: 'Design unique et mémorable' },
  { icon: '⊕', title: 'Innovation', desc: 'Technologies de pointe' },
  { icon: '✦', title: 'Excellence', desc: 'Qualité premium garantie' },
];

const checkItems = [
  'Design UI/UX primé et innovant',
  'Technologies frontend et backend dernière génération',
  'Studio 3D professionnel avec rendus photoréalistes',
  'Stratégies SEO et marketing data-driven',
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #050d1f 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 100% 0%, rgba(99,102,241,0.05) 0%, transparent 60%)' }}
      />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── LEFT: Code card ── */}
          <RevealOnScroll direction="left">
            {/* Extra padding to prevent badges from clipping */}
            <div className="relative pt-6 pb-6 pl-0 pr-6">

              {/* Main card */}
              <div
                className="relative rounded-3xl p-8 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.07), rgba(99,102,241,0.07))',
                  border: '1px solid rgba(0,212,255,0.18)',
                }}
              >
                {/* Grid pattern */}
                <div className="grid-lines absolute inset-0 opacity-20 rounded-3xl" />

                {/* Code-style content */}
                <div className="relative z-10 font-mono text-sm space-y-3">
                  {/* Window chrome */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                    <span className="text-white/25 text-xs ml-3">network-deal.config.ts</span>
                  </div>

                  {[
                    { key: 'agency', value: '"Network Deal"', color: '#f59e0b' },
                    { key: 'founded', value: '2019', color: '#00d4ff' },
                    { key: 'location', value: '"Tanger, Morocco"', color: '#10b981' },
                    { key: 'expertise', value: '["Web", "3D", "SEO", "Branding"]', color: '#8b5cf6' },
                    { key: 'clients', value: '150+', color: '#00d4ff' },
                    { key: 'satisfaction', value: '"98%"', color: '#10b981' },
                  ].map((line) => (
                    <div key={line.key} className="flex flex-wrap gap-x-2 items-baseline">
                      <span style={{ color: 'rgba(255,255,255,0.3)' }}>const</span>
                      <span style={{ color: '#06b6d4' }}>{line.key}</span>
                      <span style={{ color: 'rgba(255,255,255,0.25)' }}>=</span>
                      <span style={{ color: line.color }}>{line.value}</span>
                    </div>
                  ))}
                </div>

                {/* Corner glow */}
                <div
                  className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 100% 0%, rgba(0,212,255,0.12), transparent 65%)' }}
                />
              </div>

              {/* Floating badge — top right */}
              <div
                className="absolute top-0 right-0 rounded-2xl px-4 py-3 text-center"
                style={{
                  background: 'rgba(10,15,30,0.95)',
                  border: '1px solid rgba(0,212,255,0.25)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="text-xl font-black" style={{ color: '#00d4ff' }}>5★</div>
                <div className="text-xs text-white/50 mt-0.5">Clients</div>
              </div>

              {/* Floating badge — bottom left */}
              <div
                className="absolute bottom-0 left-4 rounded-2xl px-4 py-3"
                style={{
                  background: 'rgba(10,15,30,0.95)',
                  border: '1px solid rgba(99,102,241,0.25)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div className="text-xl">🏆</div>
                <div className="text-xs text-white/50 mt-0.5">Top Agence</div>
              </div>
            </div>
          </RevealOnScroll>

          {/* ── RIGHT: Text content ── */}
          <RevealOnScroll direction="right">
            <SectionTitle
              eyebrow="À propos de nous"
              title="Une agence créative"
              highlight="passionnée"
              description="Fondée à Tanger en 2019, Network Deal est une équipe de passionnés qui créent des expériences digitales exceptionnelles. Nous combinons créativité, technologie et stratégie pour propulser vos projets."
            />

            {/* Checklist */}
            <div className="mt-8 space-y-3.5">
              {checkItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: 'rgba(0,212,255,0.12)',
                      border: '1px solid rgba(0,212,255,0.3)',
                    }}
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5L4 7L8 3" stroke="#00d4ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-white/65 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="p-5 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:border-white/10"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <div className="font-semibold text-white text-sm mb-1">{v.title}</div>
                  <div className="text-xs text-white/40">{v.desc}</div>
                </div>
              ))}
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
