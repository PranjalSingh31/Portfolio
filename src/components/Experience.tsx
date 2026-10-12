import { useScrollReveal } from '../hooks/useScrollReveal';

const experiences = [
  {
    company: 'NPC Global',
    role: 'Software Development Engineer Intern',
    duration: 'Oct 2025 – Apr 2026',
    responsibilities: [
      'Developed website features and an Affiliate Marketing Admin Panel with functionality for user tracking, commission management, and real-time analytics.',
      'Implemented backend services for an e-commerce platform, including product management, user workflows, and payment processing.',
      'Integrated frontend components with backend APIs to enable reliable data flow across application modules.',
      'Debugged and resolved critical application issues, improving system stability and overall performance.',
    ],
    tech: ['Affiliate Admin Panel', 'Backend APIs', 'E-commerce', 'Payment Processing'],
    delay: 'delay-100',
  },
  {
    company: 'Bluestock Fintech',
    role: 'Software Development Engineer Intern',
    duration: 'Jul 2025 – Sep 2025',
    responsibilities: [
      'Developed a real-time stock insights web application using React.js and Python, from frontend interfaces to backend integration.',
      'Implemented automated data pipelines for collecting and processing stock information.',
      'Built alerting functionality to provide timely stock updates and reduce manual monitoring.',
      'Developed and integrated backend APIs with responsive React interfaces for real-time data delivery.',
    ],
    tech: ['React.js', 'Python', 'Data Pipelines', 'Backend APIs'],
    delay: 'delay-200',
  },
  {
    company: 'Meta CraftLab',
    role: 'Full Stack Developer Intern',
    duration: 'Jun 2024 – Jul 2024',
    responsibilities: [
      'Developed responsive web interfaces and application features using SvelteKit.',
      'Built reusable frontend components to improve development consistency and maintainability.',
      'Optimized page loading and frontend performance for a smoother user experience.',
      'Implemented responsive layouts compatible across desktop, tablet, and mobile devices.',
    ],
    tech: ['SvelteKit', 'Reusable Components', 'Performance Optimization', 'Responsive Design'],
    delay: 'delay-300',
  },
];

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="py-24 lg:py-32 relative" ref={ref} style={{ background: '#050B18' }}>
      {/* Background accent */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-px"
        style={{ height: '60%', background: 'linear-gradient(180deg, transparent, rgba(40,120,255,0.4), transparent)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="section-label">// career path</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3 text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical timeline line */}
          <div
            className="absolute left-6 lg:left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, rgba(40,120,255,0.6), rgba(0,212,255,0.3), transparent)' }}
          />

          {experiences.map((exp, i) => (
            <div key={exp.company} className={`reveal ${exp.delay} relative pl-16 lg:pl-20 pb-16 last:pb-0`}>
              {/* Timeline dot */}
              <div
                className="absolute left-4 lg:left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center"
                style={{
                  background: i === 0 ? 'linear-gradient(135deg,#2878FF,#00D4FF)' : 'rgba(40,120,255,0.3)',
                  border: '2px solid rgba(40,120,255,0.5)',
                  boxShadow: i === 0 ? '0 0 0 4px rgba(40,120,255,0.15), 0 0 16px rgba(40,120,255,0.4)' : 'none',
                  transform: 'translateX(-50%)',
                }}
              />

              {/* Card */}
              <div
                className="glass rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-blue-500/40"
                style={{ borderColor: i === 0 ? 'rgba(40,120,255,0.3)' : 'rgba(40,120,255,0.15)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 60px rgba(0,0,0,0.3), 0 0 30px rgba(40,120,255,0.1)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold" style={{ fontFamily: "'Exo 2',sans-serif", color: '#F5F7FF' }}>
                        {exp.company}
                      </h3>
                    </div>
                    <p className="gradient-text font-semibold" style={{ fontFamily: "'Exo 2',sans-serif" }}>
                      {exp.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm" style={{ color: '#A0AEC0', fontFamily: "'JetBrains Mono',monospace" }}>{exp.duration}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="section-sep mb-6" />

                {/* Responsibilities */}
                <ul className="flex flex-col gap-3 mb-6">
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: 'linear-gradient(135deg,#2878FF,#00D4FF)' }}
                      />
                      <p className="text-sm leading-relaxed" style={{ color: '#A0AEC0' }}>{r}</p>
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div>
                  <p className="text-xs mb-2 section-label" style={{ color: 'rgba(160,174,192,0.6)' }}>Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
