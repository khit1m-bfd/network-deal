'use client';

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const servicesList = [
  'Site Vitrine', 'Application Web', 'E-commerce', 'SEO',
  'Marketing Digital', 'Design 3D', 'Branding', 'UI/UX Design',
];

const contactItems = [
  { icon: '✉', label: 'Email', value: 'networkdealltd21@gmail.com', href: 'mailto:networkdealltd21@gmail.com', color: '#00d4ff' },
  { icon: '📱', label: 'WhatsApp', value: '+212 665-158540', href: 'https://wa.me/212665158540', color: '#10b981' },
  { icon: '📍', label: 'Adresse', value: 'Tanger, Maroc', href: '#', color: '#8b5cf6' },
  { icon: '🌐', label: 'Site web', value: 'networkdeal.ma', href: 'https://networkdeal.ma', color: '#f59e0b' },
];

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });

  const toggleService = (s: string) =>
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050d1f 0%, #030712 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 65%)' }}
      />

      <div className="container-custom relative">

        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <SectionTitle
              eyebrow="Contactez-nous"
              title="Démarrons votre"
              highlight="projet"
              description="Partagez votre vision avec nous. Nous vous répondons sous 24h avec une stratégie personnalisée."
              center
            />
          </div>
        </RevealOnScroll>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* ── LEFT: Contact info ── */}
          <RevealOnScroll direction="left">
            <div className="flex flex-col gap-4 h-full">

              {/* Info cards */}
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 p-5 rounded-2xl group transition-all duration-300 hover:scale-[1.02]"
                  style={{
                    background: `${item.color}08`,
                    border: `1px solid ${item.color}20`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-medium text-white/40 mb-0.5 uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div
                      className="text-sm font-semibold truncate group-hover:brightness-125 transition-all"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </div>
                  </div>
                  <div
                    className="ml-auto text-sm opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    style={{ color: item.color }}
                  >
                    →
                  </div>
                </a>
              ))}

              {/* Availability */}
              <div
                className="p-5 rounded-2xl mt-2"
                style={{
                  background: 'rgba(16,185,129,0.06)',
                  border: '1px solid rgba(16,185,129,0.2)',
                }}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{
                      background: '#10b981',
                      boxShadow: '0 0 8px #10b981',
                      animation: 'pulse 2s infinite',
                    }}
                  />
                  <span className="text-sm font-bold text-green-400">Disponible maintenant</span>
                </div>
                <p className="text-sm text-white/50 leading-relaxed">
                  Réponse garantie sous 24h. Consultation gratuite offerte.
                </p>
              </div>

              {/* Decorative quote */}
              <div
                className="p-6 rounded-2xl mt-auto"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(99,102,241,0.05))',
                  border: '1px solid rgba(0,212,255,0.1)',
                }}
              >
                <p className="text-white/50 text-sm leading-relaxed italic">
                  "Chaque projet est une opportunité de créer quelque chose d'exceptionnel."
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'rgba(0,212,255,0.2)', color: '#00d4ff' }}
                  >
                    ND
                  </div>
                  <span className="text-xs text-white/30">Network Deal Team</span>
                </div>
              </div>

            </div>
          </RevealOnScroll>

          {/* ── RIGHT: Form ── */}
          <RevealOnScroll direction="right">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center p-16 rounded-3xl h-full min-h-[500px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(16,185,129,0.05))',
                  border: '1px solid rgba(0,212,255,0.15)',
                }}
              >
                <div className="text-6xl mb-5">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-3">Message envoyé !</h3>
                <p className="text-white/50 max-w-xs leading-relaxed">
                  Merci ! Notre équipe vous contactera dans les 24h avec une proposition sur mesure.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl overflow-hidden"
                style={{
                  background: '#0a0f1e',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="p-8 space-y-6">

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Votre nom', type: 'text', placeholder: 'Ahmed Benjelloun' },
                      { name: 'email', label: 'Email', type: 'email', placeholder: 'ahmed@example.com' },
                    ].map((f) => (
                      <div key={f.name}>
                        <label className="block text-xs font-bold text-white/40 mb-2 uppercase tracking-widest">
                          {f.label} <span style={{ color: '#00d4ff' }}>*</span>
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          required
                          value={form[f.name as keyof typeof form]}
                          onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                          className="w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all duration-200 placeholder:text-white/20"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                          }}
                          onFocus={e => {
                            e.target.style.borderColor = 'rgba(0,212,255,0.5)';
                            e.target.style.background = 'rgba(0,212,255,0.04)';
                          }}
                          onBlur={e => {
                            e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                            e.target.style.background = 'rgba(255,255,255,0.04)';
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-xs font-bold text-white/40 mb-3 uppercase tracking-widest">
                      Services souhaités
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {servicesList.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200"
                          style={{
                            background: selected.includes(s) ? 'rgba(0,212,255,0.15)' : 'rgba(255,255,255,0.04)',
                            border: selected.includes(s) ? '1px solid rgba(0,212,255,0.5)' : '1px solid rgba(255,255,255,0.1)',
                            color: selected.includes(s) ? '#00d4ff' : 'rgba(255,255,255,0.45)',
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-bold text-white/40 mb-2 uppercase tracking-widest">
                      Budget estimé
                    </label>
                    <select
                      value={form.budget}
                      onChange={e => setForm(p => ({ ...p, budget: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none transition-all appearance-none"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: form.budget ? 'white' : 'rgba(255,255,255,0.3)',
                      }}
                    >
                      <option value="" style={{ background: '#0a0f1e' }}>Sélectionner un budget</option>
                      {['Moins de 1 000€', '1 000 – 3 000€', '3 000 – 10 000€', '10 000 – 30 000€', 'Plus de 30 000€'].map(b => (
                        <option key={b} value={b} style={{ background: '#0a0f1e' }}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-white/40 mb-2 uppercase tracking-widest">
                      Décrivez votre projet <span style={{ color: '#00d4ff' }}>*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Parlez-nous de votre projet, vos objectifs et vos délais..."
                      required
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl text-white text-sm outline-none transition-all resize-none placeholder:text-white/20"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}
                      onFocus={e => {
                        e.target.style.borderColor = 'rgba(0,212,255,0.5)';
                        e.target.style.background = 'rgba(0,212,255,0.04)';
                      }}
                      onBlur={e => {
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                        e.target.style.background = 'rgba(255,255,255,0.04)';
                      }}
                    />
                  </div>
                </div>

                {/* Submit footer */}
                <div
                  className="px-8 py-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <button
                    type="submit"
                    className="btn-primary w-full text-base font-bold py-4"
                  >
                    <span>Envoyer le message →</span>
                  </button>
                  <p className="text-xs text-center text-white/25 mt-4">
                    Consultation gratuite · Réponse sous 24h · Sans engagement
                  </p>
                </div>
              </form>
            )}
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
}
