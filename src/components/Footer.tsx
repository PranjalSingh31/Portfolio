const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#publications', label: 'Research' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer
      className="relative py-12 lg:py-16"
      style={{
        background: '#0B1426',
        borderTop: '1px solid rgba(40,120,255,0.12)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                style={{
                  background: 'linear-gradient(135deg,#2878FF,#00D4FF)',
                  color: '#050B18',
                  fontFamily: "'Exo 2',sans-serif",
                  fontWeight: 800,
                  boxShadow: '0 0 16px rgba(40,120,255,0.4)',
                }}
              >
                PS
              </div>
              <span className="font-bold text-lg text-white" style={{ fontFamily: "'Exo 2',sans-serif" }}>
                Pranjal Singh
              </span>
            </div>
            <p className="text-sm" style={{ color: '#A0AEC0', fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.05em' }}>
              Software Developer | AI/ML Enthusiast
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(160,174,192,0.6)', fontFamily: "'Inter',sans-serif" }}>
              Building intelligent systems and elegant interfaces — one commit at a time.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p className="text-xs section-label mb-5">Navigation</p>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: '#A0AEC0', fontFamily: "'Inter',sans-serif" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F5F7FF'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#A0AEC0'; }}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div>
            <p className="text-xs section-label mb-5">Connect</p>
            <div className="flex flex-col gap-3">
              {[
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/techpranjal31/', icon: '🔗' },
                { label: 'GitHub', href: 'https://github.com/PranjalSingh31', icon: '💻' },
                { label: 'Email', href: 'mailto:pranjalsingh1824@gmail.com', icon: '✉️' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-all duration-200"
                  style={{ color: '#A0AEC0' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00D4FF'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#A0AEC0'; }}
                >
                  <span>{s.icon}</span>
                  <span style={{ fontFamily: "'Inter',sans-serif" }}>{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="section-sep mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'rgba(160,174,192,0.4)', fontFamily: "'JetBrains Mono',monospace" }}>
            © {new Date().getFullYear()} Pranjal Singh. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(160,174,192,0.3)', fontFamily: "'JetBrains Mono',monospace" }}>
            // Designed & built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
