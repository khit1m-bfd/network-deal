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
      <div className="absolute inset-0 grid-lines opacity-10 pointer-events-none" />
      <div
        className="absolute top-0 left-0 w-[800px] h-[800px] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 0% 0%, rgba(0,212,255,0.03) 0%, transparent 60%)' }}
      />

      <div className="container-custom relative">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <SectionTitle
              eyebrow="Nos services"
              title="Ce que nous"
              highlight="faisons"
              description="Une offre complète pour transformer votre présence digitale et propulser votre croissance."
            />
            <div className="flex-shrink-0">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost text-sm whitespace-nowrap"
              >
                Voir tous les services →
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => (
            <RevealOnScroll key={service.id} delay={i * 80}>
              <div
                className="group relative p-8 rounded-2xl cursor-pointer service-card h-full"
                style={{
                  background: hovered === service.id
                    ? `linear-gradient(135deg, ${service.color}12, #0d1526)`
                    : '#0a0f1e',
                  border: hovered === service.id
                    ? `1px solid ${service.color}50`
                    : '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: hovered === service.id
                    ? `0 20px 50px ${service.color}15`
                    : '0 4px 20px rgba(0,0,0,0.25)',
                }}
                onMouseEnter={() => setHovered(service.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Top icon */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{
                      background: `${service.color}15`,
                      border: `1px solid ${service.color}30`,
                      boxShadow: hovered === service.id ? `0 0 20px ${service.color}20` : 'none',
                      transition: 'all 0.4s ease',
                    }}
                  >
                    {service.icon}
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: `${service.color}20`, color: service.color }}
                  >
                    →
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: `${service.color}10`,
                        border: `1px solid ${service.color}20`,
                        color: service.color,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom glow on hover */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                    opacity: hovered === service.id ? 0.6 : 0,
                  }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealOnScroll delay={300}>
          <div
            className="mt-16 p-10 rounded-3xl text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(99,102,241,0.05))',
              border: '1px solid rgba(0,212,255,0.1)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center top, rgba(0,212,255,0.08), transparent 60%)' }}
            />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative">
              Prêt à lancer votre projet ?
            </h3>
            <p className="text-white/50 mb-6 relative">
              Obtenez un devis gratuit en 24h. Consultation offerte.
            </p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary relative"
            >
              <span>Discutons de votre projet →</span>
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
