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
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
    label: 'Email',
    value: 'networkdealltd21@gmail.com',
    href: 'mailto:networkdealltd21@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    label: 'WhatsApp',
    value: '0539945243',
    href: `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Bonjour Network Deal ! Je vous contacte depuis votre site web.')}`,
    color: '#25D366',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Adresse',
    value: 'Tanger, Maroc',
    href: 'https://maps.google.com/?q=Tanger,Maroc',
    color: '#8b5cf6',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
      </svg>
    ),
    label: 'Site web',
    value: 'networkdeal.ma',
    href: 'https://networkdeal.ma',
    color: '#f59e0b',
  },
];

const inputBase: React.CSSProperties = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '14px',
  color: 'white',
  width: '100%',
  outline: 'none',
  fontSize: '15px',
  padding: '14px 18px',
  transition: 'all 0.2s ease',
};

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', budget: '', message: '' });

  const toggleService = (s: string) =>
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(0,212,255,0.5)';
    e.target.style.background = 'rgba(0,212,255,0.04)';
    e.target.style.boxShadow = '0 0 0 3px rgba(0,212,255,0.06)';
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.target.style.borderColor = 'rgba(255,255,255,0.1)';
    e.target.style.background = 'rgba(255,255,255,0.04)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050d1f 0%, #030712 100%)' }}
    >
      {/* Background glows */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 60%)' }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 55%)' }}
      />

      <div className="container-custom relative">

        {/* ── Header ── */}
        <RevealOnScroll>
          <div className="text-center mb-20">
            <SectionTitle
              eyebrow="Contactez-nous"
              title="Démarrons votre"
              highlight="projet"
              description="Partagez votre vision avec nous. Nous vous répondons sous 24h avec une stratégie sur mesure."
              center
            />
          </div>
        </RevealOnScroll>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 xl:gap-20 max-w-6xl mx-auto items-start">

          {/* ── LEFT: Contact info ── */}
          <RevealOnScroll direction="left">
            <div className="flex flex-col gap-4">

              {/* Info cards */}
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-5 lg:p-6 rounded-2xl group transition-all duration-300 hover:scale-[1.015]"
                  style={{
                    background: `${item.color}07`,
                    border: `1px solid ${item.color}18`,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${item.color}15`,
                      border: `1px solid ${item.color}28`,
                      color: item.color,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-semibold text-white/35 mb-1 uppercase tracking-[0.12em]">
                      {item.label}
                    </div>
                    <div
                      className="text-sm font-semibold truncate transition-all group-hover:brightness-125"
                      style={{ color: item.color }}
                    >
                      {item.value}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div
                    className="ml-auto text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                    style={{ color: item.color }}
                  >
                    →
                  </div>
                </a>
              ))}

              {/* Availability badge */}
              <div
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(16,185,129,0.05)',
                  border: '1px solid rgba(16,185,129,0.18)',
                }}
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{
                      background: '#10b981',
                      boxShadow: '0 0 10px #10b981',
                      animation: 'pulse 2s infinite',
                    }}
                  />
                  <span className="text-sm font-bold text-emerald-400">Disponible maintenant</span>
                </div>
                <p className="text-sm text-white/45 leading-relaxed">
                  Réponse garantie sous 24h. Consultation gratuite offerte.
                </p>
              </div>

              {/* Quote */}
              <div
                className="p-7 rounded-2xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(0,212,255,0.04), rgba(99,102,241,0.04))',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="text-4xl font-black leading-none mb-3 select-none"
                  style={{ color: 'rgba(0,212,255,0.15)', fontFamily: 'Georgia, serif' }}
                >
                  "
                </div>
                <p className="text-white/45 text-sm leading-relaxed italic">
                  Chaque projet est une opportunité de créer quelque chose d'exceptionnel.
                </p>
                <div className="flex items-center gap-2.5 mt-5">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: 'rgba(0,212,255,0.18)', color: '#00d4ff' }}
                  >
                    ND
                  </div>
                  <span className="text-xs text-white/28 font-medium">Network Deal Team</span>
                </div>
              </div>

            </div>
          </RevealOnScroll>

          {/* ── RIGHT: Form ── */}
          <RevealOnScroll direction="right">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center p-16 rounded-3xl min-h-[560px]"
                style={{
                  background: 'linear-gradient(145deg, rgba(37,211,102,0.05), rgba(18,140,126,0.04))',
                  border: '1px solid rgba(37,211,102,0.18)',
                }}
              >
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-8"
                  style={{
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    boxShadow: '0 12px 40px rgba(37,211,102,0.45)',
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message envoyé sur WhatsApp !</h3>
                <p className="text-white/45 max-w-xs leading-relaxed mb-8">
                  Votre demande a été transmise. Notre équipe vous répondra en moins d'1h sur WhatsApp.
                </p>
                <div
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold"
                  style={{
                    background: 'rgba(37,211,102,0.1)',
                    border: '1px solid rgba(37,211,102,0.28)',
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
                  background: 'linear-gradient(145deg, #0c1120, #0a0f1e)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.4)',
                }}
              >
                <div className="p-8 lg:p-11 space-y-8">

                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name', label: 'Votre nom', type: 'text', placeholder: 'Ahmed Benjelloun', required: true },
                      { name: 'email', label: 'Email', type: 'email', placeholder: 'ahmed@example.com', required: true },
                    ].map((f) => (
                      <div key={f.name} className="flex flex-col gap-2.5">
                        <label className="text-[11px] font-bold text-white/40 uppercase tracking-[0.12em]">
                          {f.label} {f.required && <span style={{ color: '#00d4ff' }}>*</span>}
                        </label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          required={f.required}
                          value={form[f.name as keyof typeof form]}
                          onChange={e => setForm(p => ({ ...p, [f.name]: e.target.value }))}
                          style={inputBase}
                          onFocus={handleFocus}
                          onBlur={handleBlur}
                          className="placeholder:text-white/20"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Services */}
                  <div className="flex flex-col gap-3">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-[0.12em]">
                      Services souhaités
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {servicesList.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => toggleService(s)}
                          className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105"
                          style={{
                            background: selected.includes(s) ? 'rgba(0,212,255,0.14)' : 'rgba(255,255,255,0.04)',
                            border: selected.includes(s) ? '1px solid rgba(0,212,255,0.45)' : '1px solid rgba(255,255,255,0.1)',
                            color: selected.includes(s) ? '#00d4ff' : 'rgba(255,255,255,0.42)',
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-[0.12em]">
                      Budget estimé
                    </label>
                    <select
                      value={form.budget}
                      onChange={e => setForm(p => ({ ...p, budget: e.target.value }))}
                      style={{
                        ...inputBase,
                        color: form.budget ? 'white' : 'rgba(255,255,255,0.28)',
                        appearance: 'none',
                        cursor: 'pointer',
                      }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    >
                      <option value="" style={{ background: '#0a0f1e' }}>Sélectionner un budget</option>
                      {['Moins de 1 000€', '1 000 – 3 000€', '3 000 – 10 000€', '10 000 – 30 000€', 'Plus de 30 000€'].map(b => (
                        <option key={b} value={b} style={{ background: '#0a0f1e' }}>{b}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-[11px] font-bold text-white/40 uppercase tracking-[0.12em]">
                      Décrivez votre projet <span style={{ color: '#00d4ff' }}>*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Parlez-nous de votre projet, vos objectifs et vos délais..."
                      required
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      style={{ ...inputBase, resize: 'none' }}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                      className="placeholder:text-white/20"
                    />
                  </div>
                </div>

                {/* ── Submit footer ── */}
                <div
                  className="px-8 lg:px-11 py-8 space-y-4"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-4.5 rounded-2xl font-bold text-base text-white transition-all duration-300 hover:scale-[1.015] hover:opacity-92 active:scale-[0.99]"
                    style={{
                      background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                      boxShadow: '0 6px 28px rgba(37,211,102,0.35)',
                      padding: '16px 24px',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Envoyer via WhatsApp
                  </button>
                  <p className="text-[11px] text-center text-white/22 tracking-wide">
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
