'use client';

import { useState } from 'react';
import { testimonials } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array(count).fill(0).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
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
      style={{ background: 'linear-gradient(180deg, #030712, #050d1f)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <SectionTitle
              eyebrow="Témoignages"
              title="Ce que disent"
              highlight="nos clients"
              center
            />
          </div>
        </RevealOnScroll>

        {/* Main testimonial */}
        <RevealOnScroll>
          <div
            className="max-w-4xl mx-auto mb-12 p-10 md:p-16 rounded-3xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.04), rgba(99,102,241,0.04))',
              border: '1px solid rgba(0,212,255,0.1)',
            }}
          >
            {/* Quote mark */}
            <div
              className="absolute top-6 left-8 text-8xl font-black leading-none pointer-events-none"
              style={{ color: 'rgba(0,212,255,0.06)' }}
            >
              "
            </div>

            <div className="relative z-10">
              {/* Stars */}
              <div className="mb-6">
                <Stars count={testimonials[active].rating} />
              </div>

              {/* Quote */}
              <p
                className="text-xl md:text-2xl text-white/80 leading-relaxed mb-8 italic"
                style={{ fontStyle: 'italic' }}
              >
                "{testimonials[active].content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${testimonials[active].color}30, ${testimonials[active].color}15)`,
                    border: `1px solid ${testimonials[active].color}40`,
                    color: testimonials[active].color,
                  }}
                >
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonials[active].name}</div>
                  <div className="text-sm text-white/40">{testimonials[active].role}</div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Navigation dots + cards */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <RevealOnScroll key={t.id} delay={i * 80}>
              <button
                onClick={() => setActive(i)}
                className="flex-1 p-6 rounded-2xl text-left transition-all duration-300 group"
                style={{
                  background: active === i
                    ? `linear-gradient(135deg, ${t.color}10, ${t.color}05)`
                    : 'rgba(255,255,255,0.02)',
                  border: active === i
                    ? `1px solid ${t.color}40`
                    : '1px solid rgba(255,255,255,0.06)',
                  transform: active === i ? 'translateY(-4px)' : 'translateY(0)',
                }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: `${t.color}20`,
                      color: t.color,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/40">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <span key={j} className="text-yellow-400 text-xs">★</span>
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
