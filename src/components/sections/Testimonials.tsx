'use client';

import { useState } from 'react';
import { testimonials } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array(count).fill(0).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="#f59e0b">
          <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5L7 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #030712 0%, #050d1f 50%, #030712 100%)' }}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.05) 0%, transparent 55%)' }}
      />
      <div
        className="absolute top-1/3 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative">

        {/* ── Header ── */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <SectionTitle
              eyebrow="Témoignages"
              title="Ce que disent"
              highlight="nos clients"
              description="Des résultats concrets, des partenariats durables. Découvrez ce que nos clients pensent de notre travail."
              center
            />
          </div>
        </RevealOnScroll>

        {/* ── Main testimonial card ── */}
        <RevealOnScroll>
          <div className="max-w-4xl mx-auto mb-10">
            <div
              className="relative p-10 md:p-14 lg:p-16 rounded-3xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(0,212,255,0.04), rgba(99,102,241,0.03))',
                border: '1px solid rgba(0,212,255,0.12)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
              }}
            >
              {/* Giant quote mark */}
              <div
                className="absolute top-4 left-8 text-[120px] font-black leading-none pointer-events-none select-none"
                style={{ color: 'rgba(0,212,255,0.05)', fontFamily: 'Georgia, serif' }}
              >
                "
              </div>

              {/* Glow top */}
              <div
                className="absolute inset-x-0 top-0 h-px pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }}
              />

              <div className="relative z-10">
                {/* Stars */}
                <div className="mb-8">
                  <Stars count={testimonials[active].rating} />
                </div>

                {/* Quote */}
                <p
                  className="text-xl md:text-2xl lg:text-[26px] text-white/85 leading-[1.65] mb-10 font-light italic"
                >
                  &ldquo;{testimonials[active].content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-5 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${testimonials[active].color}35, ${testimonials[active].color}15)`,
                      border: `2px solid ${testimonials[active].color}35`,
                      color: testimonials[active].color,
                      boxShadow: `0 4px 20px ${testimonials[active].color}20`,
                    }}
                  >
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonials[active].name}</div>
                    <div className="text-sm text-white/40 mt-0.5">{testimonials[active].role}</div>
                  </div>
                  {/* Active indicator */}
                  <div className="ml-auto hidden md:flex items-center gap-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="rounded-full transition-all duration-300"
                        style={{
                          width: active === i ? '24px' : '8px',
                          height: '8px',
                          background: active === i ? '#00d4ff' : 'rgba(255,255,255,0.2)',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* ── Navigation cards ── */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center items-stretch max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.id} delay={i * 80}>
              <button
                onClick={() => setActive(i)}
                className="flex-1 p-6 lg:p-8 rounded-2xl text-left transition-all duration-400 group"
                style={{
                  background: active === i
                    ? `linear-gradient(145deg, ${t.color}10, ${t.color}04)`
                    : 'rgba(255,255,255,0.02)',
                  border: active === i
                    ? `1px solid ${t.color}38`
                    : '1px solid rgba(255,255,255,0.06)',
                  transform: active === i ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: active === i ? `0 16px 40px rgba(0,0,0,0.3)` : 'none',
                  transition: 'all 0.35s cubic-bezier(0.16,1,0.3,1)',
                }}
              >
                {/* Avatar + info */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-300"
                    style={{
                      background: active === i ? `${t.color}25` : `${t.color}15`,
                      color: t.color,
                      border: `1px solid ${t.color}30`,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-white leading-tight truncate">{t.name}</div>
                    <div className="text-xs text-white/38 mt-0.5 truncate">{t.role}</div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
