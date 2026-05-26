'use client';

import { useState } from 'react';
import { services } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden"
      style={{ background: '#030712' }}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-[0.07] pointer-events-none" />
      <div
        className="absolute top-0 left-0 w-[900px] h-[900px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 0% 0%, rgba(0,212,255,0.04) 0%, transparent 55%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 100% 100%, rgba(99,102,241,0.04) 0%, transparent 55%)' }}
      />

      <div className="container-custom relative">

        {/* ── Header ── */}
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-24">
            <div className="max-w-2xl">
              <SectionTitle
                eyebrow="Nos services"
                title="Ce que nous"
                highlight="faisons"
                description="Une offre complète pour transformer votre présence digitale et propulser votre croissance vers de nouveaux sommets."
              />
            </div>
            <div className="flex-shrink-0 pb-1">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost text-sm whitespace-nowrap"
              >
                Voir tous les services →
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* ── Services grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <RevealOnScroll key={service.id} delay={i * 80}>
              <div
                className="group relative p-9 lg:p-10 rounded-3xl cursor-pointer service-card h-full flex flex-col"
                style={{
                  background: hovered === service.id
                    ? `linear-gradient(145deg, ${service.color}10, #0d1526 60%)`
                    : '#0a0f1e',
                  border: hovered === service.id
                    ? `1px solid ${service.color}45`
                    : '1px solid rgba(255,255,255,0.07)',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: hovered === service.id
                    ? `0 24px 60px ${service.color}12, 0 8px 24px rgba(0,0,0,0.4)`
                    : '0 4px 24px rgba(0,0,0,0.3)',
                }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Top: icon + arrow */}
                <div className="flex items-start justify-between mb-9">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{
                      background: `${service.color}12`,
                      border: `1px solid ${service.color}28`,
                      boxShadow: hovered === service.id ? `0 0 24px ${service.color}18` : 'none',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {service.icon}
                  </div>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                    style={{ background: `${service.color}18`, color: service.color }}
                  >
                    →
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-snug">
                  {service.title}
                </h3>
                <p className="text-white/55 text-sm lg:text-base leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full text-xs font-semibold"
                      style={{
                        background: `${service.color}0d`,
                        border: `1px solid ${service.color}22`,
                        color: service.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom glow line */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                    opacity: hovered === service.id ? 0.7 : 0,
                  }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <RevealOnScroll delay={300}>
          <div
            className="mt-24 px-10 py-16 md:px-16 md:py-20 rounded-3xl text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.04) 0%, rgba(99,102,241,0.04) 100%)',
              border: '1px solid rgba(0,212,255,0.1)',
            }}
          >
            {/* Glow backdrop */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07), transparent 65%)' }}
            />
            {/* Decorative dots */}
            <div className="absolute top-6 left-6 w-2 h-2 rounded-full opacity-30" style={{ background: '#00d4ff' }} />
            <div className="absolute top-6 right-6 w-2 h-2 rounded-full opacity-30" style={{ background: '#6366f1' }} />
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full opacity-20" style={{ background: '#00d4ff' }} />

            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 relative">
              Prêt à lancer votre projet ?
            </h3>
            <p className="text-white/45 mb-9 relative text-base md:text-lg max-w-lg mx-auto leading-relaxed">
              Obtenez un devis gratuit en 24h. Consultation offerte, sans engagement.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary relative text-base px-8 py-4"
            >
              <span>Discutons de votre projet →</span>
            </button>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
