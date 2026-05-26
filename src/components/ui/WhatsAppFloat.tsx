'use client';

import { useState, useEffect } from 'react';

const WA_NUMBER = '212539945243';
const AUTO_MSG = encodeURIComponent(
  'Bonjour Network Deal ! 👋\nJe vous contacte depuis votre site web.\nJe suis intéressé(e) par vos services.\nPouvez-vous me donner plus d\'informations ?'
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${AUTO_MSG}`;

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Appear after 3 seconds
  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 3000);
    // Show popup chat bubble after 6 seconds
    const t2 = setTimeout(() => setShowPopup(true), 6000);
    // Auto-hide popup after 12 seconds
    const t3 = setTimeout(() => setShowPopup(false), 12000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[9000] flex flex-col items-end gap-3"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Chat bubble popup */}
      {showPopup && (
        <div
          className="relative max-w-[260px] rounded-2xl p-4 shadow-2xl"
          style={{
            background: '#fff',
            animation: 'waBubbleIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          {/* Close */}
          <button
            onClick={() => setShowPopup(false)}
            className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 text-xs"
            style={{ background: 'rgba(0,0,0,0.06)' }}
          >✕</button>

          {/* Agent avatar */}
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #00d4ff, #0277bd)' }}
            >ND</div>
            <div>
              <div className="text-xs font-bold text-gray-800">Network Deal</div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                <span className="text-[10px] text-green-600 font-medium">En ligne</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-700 leading-relaxed mb-3">
            👋 Bonjour ! Comment puis-je vous aider aujourd'hui ?<br />
            <span className="font-semibold text-gray-900">Réponse garantie en 1h !</span>
          </p>

          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-white text-xs font-bold transition-all hover:opacity-90"
            style={{ background: '#25D366' }}
            onClick={() => setShowPopup(false)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Démarrer la conversation
          </a>

          {/* Triangle pointer */}
          <div
            className="absolute -bottom-2 right-5 w-4 h-4 rotate-45"
            style={{ background: '#fff' }}
          />
        </div>
      )}

      {/* Main WhatsApp button */}
      <div className="relative">
        {/* Pulse rings */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'rgba(37,211,102,0.4)',
            animation: 'waPulse 2s ease-out infinite',
          }}
        />
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'rgba(37,211,102,0.2)',
            animation: 'waPulse 2s ease-out infinite 0.4s',
          }}
        />

        {/* Tooltip */}
        {showTooltip && !showPopup && (
          <div
            className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg text-white text-xs font-semibold shadow-lg"
            style={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            Contactez-nous sur WhatsApp
            <div
              className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rotate-45"
              style={{ background: '#1a1a2e', border: '1px solid rgba(255,255,255,0.1)', borderLeft: 'none', borderBottom: 'none' }}
            />
          </div>
        )}

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            boxShadow: '0 4px 24px rgba(37,211,102,0.5)',
          }}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onClick={() => setShowPopup(false)}
          aria-label="Contacter via WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes waPulse {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes waBubbleIn {
          from { opacity: 0; transform: scale(0.8) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
