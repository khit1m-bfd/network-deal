import Logo from '@/components/ui/Logo';

const footerLinks = {
  Services: ['Développement Web', 'SEO & Référencement', 'Marketing Digital', 'Design 3D', 'Branding & UI/UX'],
  Agence: ['À propos', 'Portfolio', 'Notre Process', 'Carrières', 'Blog'],
  Contact: ['networkdealltd21@gmail.com', '+212 665-158540', 'Tanger, Maroc', 'networkdeal.ma'],
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-20 pb-8"
      style={{
        background: 'linear-gradient(to bottom, #030712, #050d1f)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Background glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, #00d4ff 0%, transparent 70%)',
        }}
      />

      <div className="container-custom relative">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo size={44} showText={true} textSize="text-xl" />
            </div>

            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Agence digitale créative spécialisée dans la création de sites web premium,
              le marketing digital et la visualisation 3D architecturale.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: 'FB', href: '#' },
                { label: 'IN', href: '#' },
                { label: 'TW', href: '#' },
                { label: 'YT', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-xs font-bold text-white/50 hover:text-white transition-all"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/40 text-sm hover:text-white/80 transition-colors hover:translate-x-1 inline-block transition-transform"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.3), transparent)' }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © 2024 Network Deal. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-white/30 text-sm hover:text-white/60 transition-colors">
              Mentions légales
            </a>
          </div>
          <div
            className="text-xs font-medium px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.15)',
              color: '#00d4ff',
            }}
          >
            Tanger, Maroc 🇲🇦
          </div>
        </div>
      </div>
    </footer>
  );
}
