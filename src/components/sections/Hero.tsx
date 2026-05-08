'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.5 ? '#00d4ff' : '#6366f1',
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = '#00d4ff';
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #030712 0%, #050d1f 50%, #0a0518 100%)' }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Grid lines */}
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      {/* Ambient glows */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Eyebrow badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-8"
            style={{
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.2)',
              color: '#00d4ff',
              animation: 'fadeInDown 0.8s ease 0.2s both',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#00d4ff', boxShadow: '0 0 8px #00d4ff' }}
            />
            Agence Digitale Premium — Tanger, Maroc
          </div>

          {/* Main headline */}
          <h1
            className="text-6xl md:text-7xl lg:text-8xl xl:text-[100px] font-black leading-[0.95] tracking-tight mb-8"
            style={{ animation: 'fadeInUp 0.8s ease 0.4s both' }}
          >
            <span className="block text-white">Nous créons</span>
            <span
              className="block"
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #38bdf8 40%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              l&apos;avenir
            </span>
            <span className="block text-white">digital</span>
          </h1>

          {/* Description */}
          <p
            className="text-xl md:text-2xl text-white/50 max-w-2xl leading-relaxed mb-12"
            style={{ animation: 'fadeInUp 0.8s ease 0.6s both' }}
          >
            Sites web ultra-modernes, marketing digital, branding et visualisation 3D.
            Nous transformons vos idées en expériences numériques exceptionnelles.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeInUp 0.8s ease 0.8s both' }}
          >
            <button
              onClick={scrollToContact}
              className="btn-primary text-base px-8 py-4"
            >
              <span>Démarrer un projet →</span>
            </button>
            <button
              onClick={scrollToServices}
              className="btn-ghost text-base px-8 py-4"
            >
              Voir nos services
            </button>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 mt-16 pt-16"
            style={{
              animation: 'fadeInUp 0.8s ease 1s both',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {[
              { value: '150+', label: 'Projets livrés' },
              { value: '98%', label: 'Clients satisfaits' },
              { value: '5 ans', label: 'D\'expertise' },
              { value: '15+', label: 'Pays clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-black mb-1"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #6366f1)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <div
          className="w-px h-12 relative overflow-hidden"
          style={{ background: 'rgba(255,255,255,0.1)' }}
        >
          <div
            className="absolute top-0 w-full"
            style={{
              height: '40%',
              background: 'linear-gradient(to bottom, #00d4ff, transparent)',
              animation: 'scrollLine 1.5s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
