import { process } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050d1f, #030712)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.05) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative">

        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <SectionTitle
              eyebrow="Notre process"
              title="Comment nous"
              highlight="travaillons"
              description="Une méthodologie éprouvée pour garantir des résultats exceptionnels à chaque projet."
              center
            />
          </div>
        </RevealOnScroll>

        {/* Timeline — centred on page */}
        <div className="relative max-w-4xl mx-auto">

          {/* Central vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.3) 6%, rgba(0,212,255,0.3) 94%, transparent)',
            }}
          />

          <div className="space-y-10">
            {process.map((step, i) => {
              const isLeft = i % 2 === 0; // card on left side
              return (
                <RevealOnScroll key={step.step} delay={i * 80}>

                  {/* ── DESKTOP: alternating ── */}
                  <div className="hidden md:flex items-center gap-0">

                    {/* Left half */}
                    <div className="flex-1 flex justify-end pr-8">
                      {isLeft ? (
                        <div
                          className="w-full max-w-xs p-6 rounded-2xl text-right transition-all duration-300 hover:scale-[1.02]"
                          style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.08)' }}
                        >
                          <div className="flex items-center justify-end gap-2.5 mb-2">
                            <h3 className="text-lg font-bold text-white">{step.title}</h3>
                            <span className="text-xl">{step.icon}</span>
                          </div>
                          <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      ) : (
                        <div className="w-full max-w-xs" /> /* empty spacer */
                      )}
                    </div>

                    {/* Centre node */}
                    <div
                      className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,212,255,0.22), rgba(99,102,241,0.22))',
                        border: '1px solid rgba(0,212,255,0.45)',
                        boxShadow: '0 0 28px rgba(0,212,255,0.14)',
                      }}
                    >
                      <span
                        className="text-base font-black"
                        style={{
                          background: 'linear-gradient(135deg, #00d4ff, #6366f1)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Right half */}
                    <div className="flex-1 flex justify-start pl-8">
                      {!isLeft ? (
                        <div
                          className="w-full max-w-xs p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                          style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.08)' }}
                        >
                          <div className="flex items-center gap-2.5 mb-2">
                            <span className="text-xl">{step.icon}</span>
                            <h3 className="text-lg font-bold text-white">{step.title}</h3>
                          </div>
                          <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      ) : (
                        <div className="w-full max-w-xs" /> /* empty spacer */
                      )}
                    </div>

                  </div>

                  {/* ── MOBILE: vertical timeline ── */}
                  <div className="flex items-start gap-5 md:hidden">
                    <div
                      className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, rgba(0,212,255,0.22), rgba(99,102,241,0.22))',
                        border: '1px solid rgba(0,212,255,0.45)',
                        boxShadow: '0 0 20px rgba(0,212,255,0.12)',
                      }}
                    >
                      <span
                        className="text-sm font-black"
                        style={{
                          background: 'linear-gradient(135deg, #00d4ff, #6366f1)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text',
                        }}
                      >
                        {step.step}
                      </span>
                    </div>
                    <div
                      className="flex-1 p-5 rounded-2xl"
                      style={{ background: '#0a0f1e', border: '1px solid rgba(255,255,255,0.08)' }}
                    >
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="text-xl">{step.icon}</span>
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                </RevealOnScroll>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
