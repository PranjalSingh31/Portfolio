import { useScrollReveal } from '../hooks/useScrollReveal';

const certs = [
  {
    title: 'Data Engineering Basics',
    org: '[Issuing Organization]',
    date: '[Date]',
    icon: '🏗️',
    color: 'rgba(40,120,255,0.12)',
    border: 'rgba(40,120,255,0.25)',
  },
  {
    title: 'Hands-on with AWS',
    org: 'Amazon Web Services',
    date: '[Date]',
    icon: '☁️',
    color: 'rgba(0,212,255,0.1)',
    border: 'rgba(0,212,255,0.25)',
  },
  {
    title: 'AWS Academy Graduate',
    org: 'Amazon Web Services',
    date: '[Date]',
    icon: '🎓',
    color: 'rgba(40,120,255,0.1)',
    border: 'rgba(40,120,255,0.2)',
  },
  {
    title: 'Meta CraftLab Internship',
    org: 'Meta',
    date: '[Date]',
    icon: '🔵',
    color: 'rgba(0,212,255,0.08)',
    border: 'rgba(0,212,255,0.2)',
  },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section
      id="certifications"
      className="py-24 lg:py-32 relative"
      ref={ref}
      style={{ background: '#050B18' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="section-label">// credentials</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3 text-white">
            <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <div
              key={cert.title}
              className={`reveal delay-${(i % 4 + 1) * 100} glass rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300`}
              style={{ border: `1px solid ${cert.border}` }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 30px ${cert.border}`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'none';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: cert.color, border: `1px solid ${cert.border}` }}
              >
                {cert.icon}
              </div>

              {/* Title */}
              <div className="flex-1">
                <h3 className="font-bold text-sm leading-tight text-white mb-1" style={{ fontFamily: "'Exo 2',sans-serif" }}>
                  {cert.title}
                </h3>
                <p className="text-xs" style={{ color: '#A0AEC0', fontFamily: "'Inter',sans-serif" }}>{cert.org}</p>
                <p className="text-xs mt-1" style={{ color: 'rgba(160,174,192,0.5)', fontFamily: "'JetBrains Mono',monospace" }}>
                  {cert.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
