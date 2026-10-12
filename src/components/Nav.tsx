import { useState, useEffect } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#publications', label: 'Research' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(5,11,24,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(40,120,255,0.12)' : '1px solid transparent',
        animation: 'nav-slide 0.6s ease forwards',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-110"
            style={{
              background: 'linear-gradient(135deg, #2878FF, #00D4FF)',
              color: '#050B18',
              fontFamily: "'Exo 2', sans-serif",
              boxShadow: '0 0 16px rgba(40,120,255,0.4)',
            }}
          >
            PS
          </div>
          <span
            className="hidden sm:block font-display font-700 text-base tracking-wide"
            style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, color: '#F5F7FF' }}
          >
            Pranjal<span className="gradient-text">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`nav-link ${active === l.href ? 'active' : ''}`}>
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:block btn-primary text-xs font-semibold px-5 py-2 rounded-lg"
            style={{ fontFamily: "'Exo 2', sans-serif", letterSpacing: '0.08em' }}
          >
            <span>Hire Me</span>
          </a>
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: '#F5F7FF',
                transform: menuOpen ? 'rotate(45deg) translate(4px,4px)' : 'none',
              }}
            />
            <span
              className="block w-4 h-0.5 transition-all duration-300"
              style={{ background: '#F5F7FF', opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 transition-all duration-300"
              style={{
                background: '#F5F7FF',
                transform: menuOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none',
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden overflow-hidden transition-all duration-400"
        style={{ maxHeight: menuOpen ? '400px' : '0', opacity: menuOpen ? 1 : 0 }}
      >
        <div className="glass border-t px-6 py-6 flex flex-col gap-4" style={{ borderColor: 'rgba(40,120,255,0.12)' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link text-base py-1 ${active === l.href ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-center text-sm py-3 rounded-lg mt-2" onClick={() => setMenuOpen(false)}>
            <span>Hire Me</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
