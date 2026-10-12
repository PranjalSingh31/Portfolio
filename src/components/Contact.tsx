import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative"
      ref={ref}
      style={{ background: '#050B18' }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full blur-[120px]" style={{ background: 'rgba(40,120,255,0.08)' }} />
        <div className="absolute top-1/3 right-1/4 w-60 h-60 rounded-full blur-[100px]" style={{ background: 'rgba(0,212,255,0.06)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="section-label">// get in touch</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3 text-white">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ color: '#A0AEC0' }}>
            Whether it's a project collaboration, an opportunity, or just a conversation — I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div className="reveal-left">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  ),
                  label: 'Email',
                  value: 'pranjalsingh1824@gmail.com',
                  href: 'mailto:pranjalsingh1824@gmail.com',
                  color: 'rgba(40,120,255,0.15)',
                  border: 'rgba(40,120,255,0.3)',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/techpranjal31',
                  href: 'https://www.linkedin.com/in/techpranjal31/',
                  color: 'rgba(0,212,255,0.1)',
                  border: 'rgba(0,212,255,0.25)',
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                  ),
                  label: 'GitHub',
                  value: 'github.com/PranjalSingh31',
                  href: 'https://github.com/PranjalSingh31',
                  color: 'rgba(40,120,255,0.1)',
                  border: 'rgba(40,120,255,0.2)',
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl mb-4 transition-all duration-300 group"
                  style={{ background: item.color, border: `1px solid ${item.border}` }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateX(4px)'; (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${item.border}`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-cyan-300" style={{ background: 'rgba(5,11,24,0.5)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs section-label mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium text-white" style={{ fontFamily: "'Inter',sans-serif" }}>{item.value}</p>
                  </div>
                  <svg className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Availability card */}
            <div className="reveal-left delay-200 glass rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#00D4FF', animation: 'glow-pulse 2s ease-in-out infinite' }} />
                <p className="text-xs section-label">Current Status</p>
              </div>
              <p className="font-semibold text-white" style={{ fontFamily: "'Exo 2',sans-serif" }}>Open to Opportunities</p>
              <p className="text-sm mt-1" style={{ color: '#A0AEC0' }}>
                Looking for full-time roles, internships, or collaborative research projects in software development and AI/ML.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
