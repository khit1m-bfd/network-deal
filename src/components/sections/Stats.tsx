import AnimatedCounter from '@/components/ui/AnimatedCounter';
import RevealOnScroll from '@/components/ui/RevealOnScroll';
import { stats } from '@/data';

export default function Stats() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(0,212,255,0.03) 0%, #030712 50%, rgba(99,102,241,0.03) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        borderBottom: '1px solid rgba(255,255,255,0.04)',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.04) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <RevealOnScroll key={stat.label} delay={i * 100}>
              <div className="text-center group">
                {/* Number */}
                <div
                  className="text-5xl md:text-6xl lg:text-7xl font-black mb-2 transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #6366f1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    filter: 'drop-shadow(0 0 20px rgba(0,212,255,0.3))',
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Divider */}
                <div
                  className="h-px w-12 mx-auto mb-3 transition-all duration-300 group-hover:w-24"
                  style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }}
                />

                {/* Label */}
                <div className="font-semibold text-white text-base mb-1">{stat.label}</div>
                <div className="text-sm text-white/40">{stat.description}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-20 overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: '20px' }}>
          <div className="marquee-track flex gap-12 text-white/15 text-sm font-semibold tracking-widest uppercase select-none">
            {Array(4).fill([
              'Web Development', '★', 'SEO', '★', 'Marketing Digital', '★', 'Design 3D', '★',
              'Branding', '★', 'UI/UX', '★', 'Architecture 3D', '★', 'Transformation Digitale', '★',
            ]).flat().map((item, i) => (
              <span key={i} style={{ color: item === '★' ? '#00d4ff40' : undefined }}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
