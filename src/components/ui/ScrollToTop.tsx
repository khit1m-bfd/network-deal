'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-24 right-6 z-[8999] w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
      style={{
        background: 'rgba(0,212,255,0.12)',
        border: '1px solid rgba(0,212,255,0.35)',
        color: '#00d4ff',
        boxShadow: '0 4px 20px rgba(0,212,255,0.2)',
        backdropFilter: 'blur(12px)',
      }}
      aria-label="Retour en haut"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
