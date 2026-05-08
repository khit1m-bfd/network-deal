'use client';

import { useState } from 'react';
import { portfolio } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const categories = ['Tous', 'Web Development', 'Branding & Design', '3D Design', 'Marketing Digital', 'UI/UX Design'];

/* Decorative SVG visuals per project category */
function CardVisual({ category, color }: { category: string; color: string }) {
  if (category === '3D Visualization' || category === '3D Design') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`g3d-${color.replace('#','')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.25"/>
            <stop offset="100%" stopColor={color} stopOpacity="0.05"/>
          </linearGradient>
        </defs>
        <rect width="320" height="200" fill={`url(#g3d-${color.replace('#','')})`}/>
        {/* 3D cube wireframe */}
        <g stroke={color} strokeWidth="1.5" fill="none" strokeOpacity="0.7" transform="translate(90,20)">
          {/* Front face */}
          <rect x="40" y="60" width="80" height="80" strokeOpacity="0.9"/>
          {/* Top face */}
          <path d="M40 60 L70 30 L150 30 L120 60 Z" strokeOpacity="0.7"/>
          {/* Right face */}
          <path d="M120 60 L150 30 L150 110 L120 140 Z" strokeOpacity="0.5"/>
          {/* Inner lines */}
          <line x1="40" y1="140" x2="70" y2="110" strokeOpacity="0.3"/>
          <line x1="70" y1="30" x2="70" y2="110" strokeOpacity="0.3"/>
          <line x1="150" y1="110" x2="120" y2="140" strokeOpacity="0.3"/>
        </g>
        {/* Particles */}
        {[30,80,200,260,290].map((x,i) => (
          <circle key={i} cx={x} cy={[40,160,20,140,80][i]} r="2" fill={color} fillOpacity="0.5"/>
        ))}
      </svg>
    );
  }
  if (category === 'Web Development') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`gweb-${color.replace('#','')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.2"/>
            <stop offset="100%" stopColor={color} stopOpacity="0.04"/>
          </linearGradient>
        </defs>
        <rect width="320" height="200" fill={`url(#gweb-${color.replace('#','')})`}/>
        {/* Browser window mockup */}
        <g transform="translate(30,20)">
          <rect x="0" y="0" width="260" height="160" rx="8" stroke={color} strokeWidth="1.5" fill="none" strokeOpacity="0.5"/>
          <rect x="0" y="0" width="260" height="28" rx="8" fill={color} fillOpacity="0.12"/>
          <circle cx="16" cy="14" r="4" fill={color} fillOpacity="0.6"/>
          <circle cx="30" cy="14" r="4" fill={color} fillOpacity="0.4"/>
          <circle cx="44" cy="14" r="4" fill={color} fillOpacity="0.25"/>
          {/* Code lines */}
          {[50,65,80,95,110,125].map((y, i) => (
            <rect key={i} x="16" y={y} width={[120,80,140,60,100,90][i]} height="6" rx="3" fill={color} fillOpacity={[0.3,0.2,0.35,0.15,0.25,0.2][i]}/>
          ))}
        </g>
      </svg>
    );
  }
  if (category === 'Branding & Design') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`gbrand-${color.replace('#','')}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color} stopOpacity="0.2"/>
            <stop offset="100%" stopColor={color} stopOpacity="0.04"/>
          </linearGradient>
        </defs>
        <rect width="320" height="200" fill={`url(#gbrand-${color.replace('#','')})`}/>
        {/* Logo shapes */}
        <g transform="translate(60, 25)">
          <rect x="50" y="20" width="100" height="100" rx="20" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.08" strokeOpacity="0.6"/>
          <text x="100" y="82" textAnchor="middle" fontSize="36" fontWeight="900" fill={color} fillOpacity="0.7" fontFamily="Arial">ND</text>
          {/* Tagline bar */}
          <rect x="10" y="138" width="180" height="6" rx="3" fill={color} fillOpacity="0.3"/>
          <rect x="40" y="152" width="120" height="4" rx="2" fill={color} fillOpacity="0.15"/>
        </g>
        {/* Color swatches */}
        {['#10b981','#8b5cf6','#f59e0b','#ef4444'].map((c, i) => (
          <circle key={i} cx={240 + (i * 0)} cy={40 + i*28} r="10" fill={c} fillOpacity="0.7"/>
        ))}
      </svg>
    );
  }
  if (category === 'UI/UX Design') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`gui-${color.replace('#','')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.18"/>
            <stop offset="100%" stopColor={color} stopOpacity="0.03"/>
          </linearGradient>
        </defs>
        <rect width="320" height="200" fill={`url(#gui-${color.replace('#','')})`}/>
        {/* Dashboard mockup */}
        <g transform="translate(20,15)">
          <rect x="0" y="0" width="280" height="170" rx="10" stroke={color} strokeWidth="1" fill="none" strokeOpacity="0.3"/>
          {/* Sidebar */}
          <rect x="0" y="0" width="60" height="170" rx="10" fill={color} fillOpacity="0.08"/>
          {[20,45,70,95].map((y, i) => (
            <rect key={i} x="10" y={y} width="40" height="14" rx="7" fill={color} fillOpacity={i===0?0.4:0.15}/>
          ))}
          {/* Main content */}
          <rect x="75" y="15" width="90" height="55" rx="6" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="0.8" strokeOpacity="0.4"/>
          <rect x="175" y="15" width="90" height="55" rx="6" fill={color} fillOpacity="0.06" stroke={color} strokeWidth="0.8" strokeOpacity="0.25"/>
          {/* Chart */}
          <polyline points="75,130 105,105 135,118 165,90 195,100 225,80 255,95" stroke={color} strokeWidth="2" fill="none" strokeOpacity="0.8"/>
          <polyline points="75,130 105,105 135,118 165,90 195,100 225,80 255,95 255,130 75,130" fill={color} fillOpacity="0.08"/>
        </g>
      </svg>
    );
  }
  if (category === 'Marketing Digital') {
    return (
      <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`gmkt-${color.replace('#','')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.2"/>
            <stop offset="100%" stopColor={color} stopOpacity="0.03"/>
          </linearGradient>
        </defs>
        <rect width="320" height="200" fill={`url(#gmkt-${color.replace('#','')})`}/>
        {/* Analytics bars */}
        <g transform="translate(30, 20)">
          {[90,130,70,150,110,80,160].map((h, i) => (
            <g key={i}>
              <rect x={i*36} y={160-h} width="24" height={h} rx="4"
                fill={color} fillOpacity={i===6?0.7:0.25+(i*0.05)}/>
              <rect x={i*36} y={160-h} width="24" height="4" rx="2" fill={color} fillOpacity="0.8"/>
            </g>
          ))}
          {/* Trend line */}
          <polyline points="12,70 48,30 84,90 120,10 156,50 192,20 228,0" stroke={color} strokeWidth="2" fill="none" strokeOpacity="0.9" strokeDasharray="4,2"/>
        </g>
      </svg>
    );
  }
  // Default fallback
  return (
    <svg viewBox="0 0 320 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`gdef-${color.replace('#','')}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2"/>
          <stop offset="100%" stopColor={color} stopOpacity="0.04"/>
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#gdef-${color.replace('#','')})`}/>
      <circle cx="160" cy="100" r="60" stroke={color} strokeWidth="1.5" fill="none" strokeOpacity="0.4"/>
      <circle cx="160" cy="100" r="35" stroke={color} strokeWidth="1" fill={color} fillOpacity="0.08" strokeOpacity="0.3"/>
    </svg>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = activeCategory === 'Tous'
    ? portfolio
    : portfolio.filter(p => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030712, #050d1f)' }}
    >
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 100% 0%, rgba(99,102,241,0.05) 0%, transparent 70%)' }} />

      <div className="container-custom">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <SectionTitle
              eyebrow="Portfolio"
              title="Nos réalisations"
              highlight="récentes"
              description="Des projets qui parlent d'eux-mêmes. Chaque création est pensée pour impacter."
              center
            />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
                style={{
                  background: activeCategory === cat
                    ? 'linear-gradient(135deg, #00d4ff, #6366f1)'
                    : 'rgba(255,255,255,0.05)',
                  color: activeCategory === cat ? '#030712' : 'rgba(255,255,255,0.55)',
                  border: activeCategory === cat
                    ? '1px solid transparent'
                    : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: activeCategory === cat ? '0 0 20px rgba(0,212,255,0.25)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((item, i) => (
            <RevealOnScroll key={item.id} delay={i * 80}>
              <div
                className="group relative rounded-2xl overflow-hidden cursor-pointer flex flex-col"
                style={{
                  background: '#0a0f1e',
                  border: hovered === item.id
                    ? `1px solid ${item.color}50`
                    : '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  transform: hovered === item.id ? 'translateY(-6px)' : 'translateY(0)',
                  boxShadow: hovered === item.id
                    ? `0 24px 60px ${item.color}18, 0 0 0 1px ${item.color}20`
                    : '0 4px 20px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Visual zone — always visible */}
                <div
                  className="relative overflow-hidden flex-shrink-0"
                  style={{
                    height: '200px',
                    background: `linear-gradient(135deg, ${item.color}12 0%, #0a0f1e 100%)`,
                  }}
                >
                  <CardVisual category={item.category} color={item.color} />

                  {/* Year badge */}
                  <div
                    className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.5)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {item.year}
                  </div>

                  {/* Category badge */}
                  <div
                    className="absolute bottom-4 left-4 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
                    style={{
                      background: `${item.color}20`,
                      border: `1px solid ${item.color}50`,
                      color: item.color,
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    {item.category}
                  </div>

                  {/* Hover arrow */}
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                    style={{ opacity: hovered === item.id ? 1 : 0 }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold"
                      style={{
                        background: item.color,
                        color: '#030712',
                        boxShadow: `0 0 20px ${item.color}60`,
                      }}
                    >
                      →
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className="text-xl font-bold mb-2 transition-colors duration-300"
                    style={{ color: hovered === item.id ? 'white' : 'rgba(255,255,255,0.9)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md font-medium"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: 'rgba(255,255,255,0.5)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom border accent on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                    opacity: hovered === item.id ? 1 : 0,
                  }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* CTA */}
        <RevealOnScroll delay={200}>
          <div className="text-center mt-14">
            <button
              className="btn-ghost px-8 py-4 text-base"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discuter d&apos;un projet similaire →
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
