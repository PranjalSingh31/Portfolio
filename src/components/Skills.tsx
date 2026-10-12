import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
  {
    label: 'Programming Languages',
    icon: '⌨️',
    color: 'rgba(40,120,255,0.15)',
    borderColor: 'rgba(40,120,255,0.3)',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'C++', icon: '⚙️' },
    ],
  },
  {
    label: 'Frontend',
    icon: '🎨',
    color: 'rgba(0,212,255,0.1)',
    borderColor: 'rgba(0,212,255,0.25)',
    skills: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'React', icon: '⚛️' },
    ],
  },
  {
    label: 'Backend',
    icon: '🔧',
    color: 'rgba(40,120,255,0.12)',
    borderColor: 'rgba(40,120,255,0.25)',
    skills: [
      { name: 'Django', icon: '🦄' },
      { name: 'Flask', icon: '🧪' },
    ],
  },
  {
    label: 'AI / ML',
    icon: '🤖',
    color: 'rgba(0,212,255,0.12)',
    borderColor: 'rgba(0,212,255,0.3)',
    skills: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'Keras', icon: '🔬' },
      { name: 'Scikit-learn', icon: '📐' },
      { name: 'OpenCV', icon: '👁️' },
    ],
  },
  {
    label: 'Databases',
    icon: '🗄️',
    color: 'rgba(40,120,255,0.1)',
    borderColor: 'rgba(40,120,255,0.2)',
    skills: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
    ],
  },
  {
    label: 'Tools & DevOps',
    icon: '🛠️',
    color: 'rgba(0,212,255,0.08)',
    borderColor: 'rgba(0,212,255,0.2)',
    skills: [
      { name: 'Git', icon: '🌿' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Docker', icon: '🐳' },
    ],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section
      id="skills"
      className="py-24 lg:py-32 relative"
      ref={ref}
      style={{ background: '#050B18' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px] pointer-events-none"
        style={{ width: 700, height: 400, background: 'rgba(40,120,255,0.06)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="section-label">// my toolkit</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3 text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto text-base" style={{ color: '#A0AEC0' }}>
            A broad stack spanning intelligent systems, scalable backends, and expressive frontends.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`reveal delay-${Math.min((ci % 3 + 1) * 100, 300)} glass rounded-2xl p-6 transition-all duration-400`}
              style={{ border: `1px solid ${cat.borderColor}` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px rgba(0,0,0,0.3), 0 0 30px ${cat.borderColor}`; (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: cat.color, border: `1px solid ${cat.borderColor}` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-sm" style={{ fontFamily: "'Exo 2',sans-serif", color: '#F5F7FF', letterSpacing: '0.05em' }}>
                    {cat.label}
                  </h3>
                  <p className="text-xs" style={{ color: '#A0AEC0', fontFamily: "'JetBrains Mono',monospace" }}>
                    {cat.skills.length} skill{cat.skills.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Separator */}
              <div className="section-sep mb-5" />

              {/* Skill pills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all duration-200 cursor-default"
                    style={{
                      background: cat.color,
                      border: `1px solid ${cat.borderColor}`,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = cat.color.replace('0.1', '0.25').replace('0.12', '0.28').replace('0.08', '0.2').replace('0.15', '0.3');
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 0 12px ${cat.borderColor}`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = cat.color;
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span className="text-xs font-medium" style={{ fontFamily: "'Inter',sans-serif", color: '#F5F7FF' }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="reveal delay-300 mt-12 text-center">
          <p className="text-sm" style={{ color: 'rgba(160,174,192,0.5)', fontFamily: "'JetBrains Mono',monospace" }}>
            // continuously expanding — always learning
          </p>
        </div>
      </div>
    </section>
  );
}
