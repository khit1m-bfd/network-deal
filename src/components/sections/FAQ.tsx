'use client';

import { useState } from 'react';
import { faqs } from '@/data';
import SectionTitle from '@/components/ui/SectionTitle';
import RevealOnScroll from '@/components/ui/RevealOnScroll';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: '#030712' }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <RevealOnScroll direction="left">
            <div className="lg:sticky lg:top-32">
              <SectionTitle
                eyebrow="FAQ"
                title="Questions"
                highlight="fréquentes"
                description="Tout ce que vous devez savoir sur notre agence et nos services."
              />

              <div
                className="mt-8 p-6 rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(99,102,241,0.05))',
                  border: '1px solid rgba(0,212,255,0.1)',
                }}
              >
                <p className="text-white/60 text-sm mb-4">
                  Vous ne trouvez pas votre réponse ? Contactez-nous directement.
                </p>
                <a
                  href="mailto:networkdealltd21@gmail.com"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                  style={{ color: '#00d4ff' }}
                >
                  networkdealltd21@gmail.com
                  <span>→</span>
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: FAQ items */}
          <RevealOnScroll direction="right">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-all duration-300"
                  style={{
                    background: openIndex === i
                      ? 'rgba(0,212,255,0.04)'
                      : 'rgba(255,255,255,0.02)',
                    border: openIndex === i
                      ? '1px solid rgba(0,212,255,0.2)'
                      : '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className="font-semibold text-white pr-4">{faq.question}</span>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg transition-all duration-300"
                      style={{
                        background: openIndex === i ? 'rgba(0,212,255,0.15)' : 'rgba(255,255,255,0.05)',
                        color: openIndex === i ? '#00d4ff' : 'rgba(255,255,255,0.4)',
                        transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                      }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: openIndex === i ? '200px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
