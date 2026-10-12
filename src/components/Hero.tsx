import { useEffect, useRef, useState } from "react"
import { useCounter } from "../hooks/useScrollReveal"
import heroPortrait from "../assets/pranjal-hero-portrait.png"

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number
  suffix: string
  label: string
}) {
  const ref = useCounter(value)
  return (
    <div className="text-center">
      <div className="flex items-end justify-center gap-0.5">
        <span
          ref={ref}
          className="text-3xl lg:text-4xl font-display gradient-text"
          style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800 }}
        >
          0
        </span>
        <span
          className="text-xl lg:text-2xl gradient-text mb-0.5"
          style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 800 }}
        >
          {suffix}
        </span>
      </div>
      <p
        className="text-xs mt-1"
        style={{
          color: "#A0AEC0",
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "0.1em",
        }}
      >
        {label}
      </p>
    </div>
  )
}

function Particle({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        background: "radial-gradient(circle, rgba(0,212,255,0.8), transparent)",
        animation: "particle-drift linear infinite",
        ...style,
      }}
    />
  )
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  width: Math.random() * 4 + 1,
  height: Math.random() * 4 + 1,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 8 + 6}s`,
  animationDelay: `${Math.random() * 8}s`,
  opacity: Math.random() * 0.6 + 0.1,
}))

const roles = [
  "Software Developer",
  "AI/ML Enthusiast",
  "Deep Learning Engineer",
  "Full Stack Builder",
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let i = 0
    setDisplayed("")
    setTyping(true)
    const typingInterval = setInterval(() => {
      i++
      setDisplayed(current.slice(0, i))
      if (i >= current.length) {
        clearInterval(typingInterval)
        setTimeout(() => {
          setTyping(false)
          let j = current.length
          const eraseInterval = setInterval(() => {
            j--
            setDisplayed(current.slice(0, j))
            if (j <= 0) {
              clearInterval(eraseInterval)
              setRoleIndex((prev) => (prev + 1) % roles.length)
            }
          }, 40)
        }, 2200)
      }
    }, 65)
    return () => clearInterval(typingInterval)
  }, [roleIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
      style={{ background: "#050B18" }}
    >
      {/* Animated grid overlay */}
      <div className="absolute inset-0 bg-grid" style={{ opacity: 0.6 }} />

      {/* Ambient glow blobs */}
      <div
        className="absolute top-1/4 right-1/4 rounded-full blur-[120px] pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: "rgba(40,120,255,0.12)",
          animation: "orb-pulse 6s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 rounded-full blur-[100px] pointer-events-none"
        style={{
          width: 350,
          height: 350,
          background: "rgba(0,212,255,0.08)",
          animation: "orb-pulse 8s ease-in-out infinite 2s",
        }}
      />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <Particle
            key={i}
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
              animationDuration: p.animationDuration,
              animationDelay: p.animationDelay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left — text content */}
          <div className="flex flex-col gap-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit"
              style={{
                background: "rgba(40,120,255,0.1)",
                border: "1px solid rgba(40,120,255,0.25)",
                animation: "fade-in-up 0.6s ease forwards",
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#00D4FF",
                  animation: "glow-pulse 2s ease-in-out infinite",
                }}
              />
              <span
                className="section-label text-xs"
                style={{ color: "#00D4FF" }}
              >
                Available for opportunities
              </span>
            </div>

            <div
              style={{
                animation: "text-reveal 0.8s ease forwards 0.2s",
                opacity: 0,
              }}
            >
              <h1
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] tracking-tight"
                style={{
                  fontFamily: "'Exo 2', sans-serif",
                  fontWeight: 900,
                  color: "#F5F7FF",
                }}
              >
                Pranjal
                <br />
                <span className="gradient-text">Singh</span>
              </h1>
            </div>

            <div
              className="flex items-center gap-3 h-10"
              style={{
                animation: "text-reveal 0.8s ease forwards 0.5s",
                opacity: 0,
              }}
            >
              <span
                className="text-lg sm:text-xl lg:text-2xl font-semibold"
                style={{ fontFamily: "'Exo 2', sans-serif", color: "#A0AEC0" }}
              >
                {displayed}
                <span
                  className="inline-block w-0.5 h-6 ml-0.5 align-middle"
                  style={{
                    background: "#00D4FF",
                    animation: "blink 1s step-end infinite",
                    verticalAlign: "middle",
                  }}
                />
              </span>
            </div>

            <p
              className="text-base lg:text-lg leading-relaxed max-w-xl"
              style={{
                color: "#A0AEC0",
                animation: "text-reveal 0.8s ease forwards 0.7s",
                opacity: 0,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Passionate about building intelligent systems and intuitive
              interfaces. I bridge the gap between machine learning research and
              production ready software engineering turning complex problems
              into elegant, scalable solutions.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                animation: "text-reveal 0.8s ease forwards 0.9s",
                opacity: 0,
              }}
            >
              <a
                href="#projects"
                className="btn-primary px-7 py-3.5 rounded-xl flex items-center gap-2 text-sm"
              >
                <span>View Projects</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            {/* Social links */}
            <div
              className="flex items-center gap-5"
              style={{
                animation: "text-reveal 0.8s ease forwards 1.1s",
                opacity: 0,
              }}
            >
              <span
                className="text-xs"
                style={{
                  color: "#A0AEC0",
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.1em",
                }}
              >
                Connect
              </span>
              <div
                className="flex-1 h-px"
                style={{ background: "rgba(40,120,255,0.2)" }}
              />
              {[
                {
                  href: "https://www.linkedin.com/in/techpranjal31/",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  href: "https://github.com/PranjalSingh31",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                },
                {
                  href: "mailto:pranjalsingh1824@gmail.com",
                  icon: (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg transition-all duration-300 group"
                  style={{
                    color: "#A0AEC0",
                    border: "1px solid rgba(40,120,255,0.15)",
                    background: "rgba(40,120,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = "#00D4FF"
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(0,212,255,0.4)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 16px rgba(0,212,255,0.2)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = "#A0AEC0"
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(40,120,255,0.15)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = "none"
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — orb + portrait */}
          <div
            className="flex justify-center lg:justify-end items-center"
            style={{
              animation: "fade-in-right 1s ease forwards 0.4s",
              opacity: 0,
            }}
          >
            <div className="relative">
              {/* Orbiting ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  width: 380,
                  height: 380,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  border: "1px dashed rgba(40,120,255,0.25)",
                  animation: "orb-rotate 20s linear infinite",
                  borderRadius: "50%",
                }}
              >
                <div
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: "linear-gradient(135deg,#2878FF,#00D4FF)",
                    top: 0,
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    boxShadow: "0 0 12px rgba(40,120,255,0.8)",
                  }}
                />
              </div>

              {/* Second orbiting ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 480,
                  height: 480,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  border: "1px dashed rgba(0,212,255,0.12)",
                  animation: "orb-rotate 35s linear infinite reverse",
                  borderRadius: "50%",
                }}
              >
                <div
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: "#00D4FF",
                    bottom: "15%",
                    right: "5%",
                    boxShadow: "0 0 10px rgba(0,212,255,0.8)",
                  }}
                />
              </div>

              {/* Central orb */}
              <div
                className="relative rounded-full overflow-hidden"
                style={{
                  width: 280,
                  height: 280,
                  background:
                    "radial-gradient(circle at 35% 35%, rgba(40,120,255,0.35) 0%, rgba(0,212,255,0.15) 40%, rgba(5,11,24,0.9) 75%)",
                  border: "2px solid rgba(40,120,255,0.35)",
                  boxShadow:
                    "0 0 60px rgba(40,120,255,0.3), 0 0 120px rgba(0,212,255,0.1), inset 0 0 40px rgba(40,120,255,0.1)",
                  animation: "float 7s ease-in-out infinite",
                }}
              >
                <img
                  src={heroPortrait}
                  alt="Portrait of Pranjal Singh"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Scan line */}
                <div
                  className="absolute left-0 right-0 h-px opacity-30 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, #00D4FF, transparent)",
                    animation: "scan-line 4s linear infinite",
                  }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute glass px-3 py-2 rounded-xl"
                style={{
                  bottom: "-10px",
                  right: "-20px",
                  animation: "float 5s ease-in-out infinite 1s",
                  boxShadow: "0 0 20px rgba(40,120,255,0.2)",
                }}
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "#00D4FF",
                      boxShadow: "0 0 8px #00D4FF",
                    }}
                  />
                  <span
                    className="text-xs font-mono-code"
                    style={{
                      color: "#F5F7FF",
                      fontFamily: "'JetBrains Mono',monospace",
                    }}
                  >
                    Open to work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 glass rounded-2xl p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x"
          style={{
            animation: "fade-in-up 0.8s ease forwards 1.3s",
            opacity: 0,
          }}
        >
          {[
            { value: 15, suffix: "+", label: "Projects Built" },
            { value: 1, suffix: "+", label: "Years Experience" },
            { value: 1, suffix: "", label: "Research Publication" },
            { value: 4, suffix: "+", label: "Certifications" },
          ].map((s, i) => (
            <div key={i} className="lg:px-8">
              <StatCounter {...s} />
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="flex justify-center mt-12">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 group"
            aria-label="Scroll down"
          >
            <span
              className="text-xs section-label"
              style={{ color: "rgba(160,174,192,0.5)" }}
            >
              scroll
            </span>
            <div
              className="w-5 h-9 rounded-full flex items-start justify-center pt-2 transition-all duration-300 group-hover:border-blue-500"
              style={{ border: "1px solid rgba(40,120,255,0.3)" }}
            >
              <div
                className="w-1 h-2.5 rounded-full"
                style={{
                  background: "linear-gradient(180deg,#2878FF,#00D4FF)",
                  animation: "float 1.5s ease-in-out infinite",
                }}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
