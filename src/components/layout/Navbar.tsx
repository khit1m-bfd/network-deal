'use client';

import { useEffect, useState, useCallback } from 'react';
import Logo from '@/components/ui/Logo';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'À propos' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(3, 7, 18, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center group"
            >
              <Logo size={42} showText={true} textSize="text-lg" />
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative px-5 py-2.5 text-sm font-medium text-white/65 hover:text-white transition-all duration-300 group rounded-lg hover:bg-white/5"
                >
                  {link.label}
                  <span
                    className="absolute bottom-1.5 left-5 right-5 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                    style={{ background: 'linear-gradient(90deg, #00d4ff, #6366f1)' }}
                  />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary text-sm px-6 py-3"
              >
                <span>Démarrer un projet</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2"
              aria-label="Menu"
            >
              <span
                className="block w-6 h-0.5 bg-white transition-all duration-300"
                style={{
                  transform: menuOpen ? 'translateY(8px) rotate(45deg)' : '',
                }}
              />
              <span
                className="block w-4 h-0.5 bg-white/60 transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-6 h-0.5 bg-white transition-all duration-300"
                style={{
                  transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : '',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="mobile-menu lg:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-3xl font-bold text-white/70 hover:text-white transition-all hover:scale-105"
              style={{
                transitionDelay: `${i * 50}ms`,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-primary mt-4"
          >
            <span>Démarrer un projet</span>
          </button>
        </div>
      </div>
    </>
  );
}
