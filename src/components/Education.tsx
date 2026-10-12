import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section
      id="education"
      className="py-24 lg:py-32 relative"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #0B1426 0%, #050B18 100%)' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="section-label">// academic foundation</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3 text-white">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            className="reveal glass rounded-2xl p-8 lg:p-10 relative overflow-hidden"
            style={{ border: '1px solid rgba(40,120,255,0.25)' }}
          >
            {/* Background accent */}
            <div
              className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[60px] pointer-events-none"
              style={{ background: 'rgba(40,120,255,0.1)' }}
            />

            {/* Top bar */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: 'rgba(40,120,255,0.12)', border: '1px solid rgba(40,120,255,0.3)' }}
                >
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Exo 2',sans-serif" }}>
                    Dr. D. Y. Patil University
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: '#A0AEC0', fontFamily: "'JetBrains Mono',monospace" }}>
                    Ramrao Adik Institute of Technology
                  </p>
                </div>
              </div>
            </div>

            <div className="section-sep mb-6" />

            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <p className="text-xs section-label mb-1.5">Degree</p>
                <p className="font-semibold text-white" style={{ fontFamily: "'Exo 2',sans-serif" }}>B.Tech</p>
                <p className="text-sm" style={{ color: '#A0AEC0' }}>Information Technology</p>
              </div>
              <div>
                <p className="text-xs section-label mb-1.5">Graduation</p>
                <p className="font-semibold text-white" style={{ fontFamily: "'Exo 2',sans-serif" }}>
                  May 2026
                </p>
              </div>
              <div>
                <p className="text-xs section-label mb-1.5">CGPA</p>
                <p className="font-semibold gradient-text text-xl" style={{ fontFamily: "'Exo 2',sans-serif", fontWeight: 800 }}>
                  7.5
                </p>
              </div>
            </div>

            <div className="section-sep my-6" />

            <div>
              <p className="text-xs section-label mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Data Structures & Algorithms',
                  'Machine Learning',
                  'Database Management',
                  'Computer Networks',
                  'Software Engineering',
                  'Operating Systems',
                  'Web Technologies',
                  'Java',
                  'Python',
                  'CNN',
                  'Deep Learning',
                  'SQL',
                  'DBMS',
                  'MongoDB',
                ].map((course) => (
                  <span key={course} className="tech-badge" style={{ color: '#A0AEC0', borderColor: 'rgba(40,120,255,0.2)' }}>
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
