'use client';

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

const WA_NUMBER = '212539945243';

const servicesList = [
  'Site Vitrine', 'Application Web', 'E-commerce', 'SEO',
  'Marketing Digital', 'Design 3D', 'Branding', 'UI/UX Design',
];

const contactItems = [
  { icon: '✉', label: 'Email', value: 'networkdealltd21@gmail.com', href: 'mailto:networkdealltd21@gmail.com', color: '#00d4ff' },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp', value: '0539945243', href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Bonjour Network Deal ! Je vous contacte depuis votre site web.')}`, color: '#25D366',
  },
  { icon: '📍', label: 'Adresse', value: 'Tanger, Maroc', href: 'https://maps.google.com/?q=Tanger,Maroc', color: '#8b5cf6' },
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
    // Build WhatsApp message with form data
    const services = selected.length > 0 ? selected.join(', ') : 'Non spécifié';
    const waMessage = encodeURIComponent(
      `🚀 *Nouvelle demande via le site Network Deal*\n\n` +
      `👤 *Nom :* ${form.name}\n` +
      `📧 *Email :* ${form.email}\n` +
      `🛠️ *Services :* ${services}\n` +
      `💰 *Budget :* ${form.budget || 'Non spécifié'}\n` +
      `💬 *Message :*\n${form.message}`
    );
    window.open(`https://wa.me/${WA_NUMBER}?text=${waMessage}`, '_blank');
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
                    {typeof item.icon === 'string' ? item.icon : item.icon}
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
                  background: 'linear-gradient(135deg, rgba(37,211,102,0.05), rgba(18,140,126,0.05))',
                  border: '1px solid rgba(37,211,102,0.2)',
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 8px 32px rgba(37,211,102,0.4)',
                  }}
                >
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message envoyé sur WhatsApp !</h3>
                <p className="text-white/50 max-w-xs leading-relaxed mb-6">
                  Votre demande a été transmise. Notre équipe vous répondra en moins d'1h sur WhatsApp.
                </p>
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    background: 'rgba(37,211,102,0.12)',
                    border: '1px solid rgba(37,211,102,0.3)',
                    color: '#25D366',
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Réponse garantie sous 1h
                </div>
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
                  className="px-8 py-6 space-y-3"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {/* WhatsApp submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-full font-bold text-base text-white transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
                    style={{
                      background: 'linear-gradient(135deg, #25D366, #128C7E)',
                      boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Envoyer via WhatsApp
                  </button>
                  <p className="text-xs text-center text-white/25">
                    Consultation gratuite · Réponse sous 1h · Sans engagement
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
