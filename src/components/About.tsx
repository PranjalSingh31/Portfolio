import { useScrollReveal } from '../hooks/useScrollReveal';
import aboutPortrait from '../assets/pranjal-about-portrait.png';

const interestGroups = [
  {
    index: '01',
    title: 'AI & Machine Learning',
    items: ['Deep Learning', 'Computer Vision', 'NLP', 'Generative AI'],
    accent: '#2878FF',
    delay: 'delay-100',
  },
  {
    index: '02',
    title: 'Software Engineering',
    items: ['Full-Stack Development', 'Backend Engineering', 'APIs', 'System Design'],
    accent: '#00D4FF',
    delay: 'delay-200',
  },
  {
    index: '03',
    title: 'Data & Infrastructure',
    items: ['Data Engineering', 'MLOps', 'Databases', 'Cloud Technologies'],
    accent: '#6C63FF',
    delay: 'delay-300',
  },
];

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #050B18 0%, #0B1426 50%, #050B18 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="section-label">// who I am</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3 text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Left — portrait */}
          <div className="reveal-left flex justify-center lg:justify-start lg:sticky lg:top-28">
            <div className="relative">
              <div
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[26rem] lg:h-[26rem] rounded-full overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, rgba(40,120,255,0.15), rgba(0,212,255,0.08))',
                  border: '1px solid rgba(40,120,255,0.25)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 48px rgba(40,120,255,0.18)',
                }}
              >
                <img
                  src={aboutPortrait}
                  alt="Portrait of Pranjal Singh"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="flex flex-col gap-5">
            <div className="reveal delay-100">
              <p className="text-lg leading-relaxed" style={{ color: '#A0AEC0' }}>
                Hi, I’m <span className="gradient-text font-semibold">Pranjal Singh</span>  a Software Developer and AI/ML enthusiast who enjoys turning ideas into technology that actually works.
              </p>
            </div>

            <div className="reveal delay-200">
              <p className="text-base leading-relaxed" style={{ color: '#A0AEC0' }}>
                My interests sit at the intersection of <span className="font-semibold" style={{ color: '#F5F7FF' }}>software engineering and artificial intelligence</span>. I enjoy building full stack applications, experimenting with machine learning models, solving technical problems, and taking projects from an initial idea to a working product. What excites me most is the process of learning something new, experimenting with it, and finding a practical way to apply it.
              </p>
            </div>

            <div className="reveal delay-300">
              <p className="text-base leading-relaxed" style={{ color: '#A0AEC0' }}>
                My journey in technology has taken me across <span className="font-semibold" style={{ color: '#F5F7FF' }}>full-stack development, machine learning, computer vision, data engineering, and backend systems</span>. Through my projects and professional experience, I’ve worked on everything from web applications to AI-driven systems designed to solve real-world problems.
              </p>
            </div>

            <div className="reveal delay-400">
              <p className="text-base leading-relaxed" style={{ color: '#A0AEC0' }}>
                I’m naturally <span className="font-semibold" style={{ color: '#F5F7FF' }}>curious, excited to explore new technologies, and persistent when solving difficult problems</span>. I don’t want to limit myself to a single area of engineering  I’m interested in growing wherever software, AI, and innovative problem solving come together.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="reveal text-center mb-8">
            <span className="section-label">// what I’m interested in</span>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {interestGroups.map((group) => (
              <div
                key={group.title}
                className={`reveal ${group.delay} glass rounded-2xl p-6 relative overflow-hidden`}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${group.accent}, transparent)` }}
                />
                <div className="flex items-center justify-between gap-4 mb-5">
                  <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "'Exo 2',sans-serif" }}>
                    {group.title}
                  </h3>
                  <span className="text-xs" style={{ color: group.accent, fontFamily: "'JetBrains Mono',monospace" }}>
                    {group.index}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-badge">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="reveal delay-200 glass rounded-2xl mt-8 p-6 lg:p-8 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(40,120,255,0.1), rgba(0,212,255,0.04))' }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(180deg,#2878FF,#00D4FF)' }} />
          <span className="section-label">// what I’m working toward</span>
          <p className="text-lg leading-relaxed mt-4" style={{ color: '#A0AEC0' }}>
            My long term goal is to become an engineer capable of <span className="gradient-text font-semibold">building intelligent systems from the ground up</span> combining strong software engineering fundamentals with AI research and practical applications.
          </p>
          <p className="text-base leading-relaxed mt-4" style={{ color: '#F5F7FF' }}>
            I’m always learning, building, experimenting, and looking for the next problem worth solving.
          </p>
        </div>
      </div>
    </section>
  );
}
