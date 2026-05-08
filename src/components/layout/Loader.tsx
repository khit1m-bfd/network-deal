'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let start: number;
    const duration = 2200;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(step);
      } else {
        setTimeout(() => setDone(true), 400);
      }
    };
    requestAnimationFrame(step);
  }, []);

  if (done) return null;

  return (
    <div
      className="loader-overlay"
      style={{
        opacity: progress === 100 ? 0 : 1,
        transition: 'opacity 0.4s ease',
        pointerEvents: progress === 100 ? 'none' : 'all',
      }}
    >
      {/* Grid lines background */}
      <div className="absolute inset-0 grid-lines opacity-30" />

      {/* Logo */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated logo mark */}
        <div className="relative w-20 h-20">
          <div
            className="absolute inset-0 rounded-2xl border border-cyan-400/30 pulse-glow"
            style={{ transform: 'rotate(45deg)' }}
          />
          <div
            className="absolute inset-2 rounded-xl border border-cyan-400/60"
            style={{ transform: 'rotate(45deg)', animation: 'spin 4s linear infinite' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className="text-2xl font-black"
              style={{
                background: 'linear-gradient(135deg, #00d4ff, #6366f1)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              ND
            </span>
          </div>
        </div>

        {/* Brand name */}
        <div className="text-center">
          <div className="text-xl font-bold tracking-[0.3em] text-white/80 uppercase mb-1">
            Network Deal
          </div>
          <div className="text-xs tracking-[0.5em] text-cyan-400/60 uppercase">
            Digital Agency
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-px bg-white/10 relative overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 transition-all"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00d4ff, #6366f1)',
              boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)',
              transition: 'width 0.05s linear',
            }}
          />
        </div>

        {/* Counter */}
        <div
          className="text-4xl font-black tabular-nums"
          style={{
            background: 'linear-gradient(135deg, #00d4ff, #6366f1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {String(progress).padStart(2, '0')}
          <span className="text-xl">%</span>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
      `}</style>
    </div>
  );
}
