import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Publications() {
  const ref = useScrollReveal();

  return (
    <section
      id="publications"
      className="py-24 lg:py-32 relative"
      ref={ref}
      style={{ background: 'linear-gradient(180deg, #050B18 0%, #0B1426 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] pointer-events-none"
        style={{ width: 500, height: 300, background: 'rgba(0,212,255,0.06)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal text-center mb-16">
          <span className="section-label">// research & publications</span>
          <h2 className="section-title text-4xl lg:text-5xl mt-3 text-white">
            Research <span className="gradient-text">Work</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Featured publication */}
          <div
            className="reveal glass rounded-2xl overflow-hidden relative"
            style={{ border: '1px solid rgba(0,212,255,0.25)' }}
          >
            {/* Top accent strip */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #2878FF, #00D4FF)' }} />

            <div className="p-8 lg:p-10">
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                  style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)' }}
                >
                  📄
                </div>

                <div className="flex-1 min-w-0">
                  {/* Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: 'rgba(0,212,255,0.1)',
                        border: '1px solid rgba(0,212,255,0.3)',
                        color: '#00D4FF',
                        fontFamily: "'JetBrains Mono',monospace",
                      }}
                    >
                      IEEE Conference
                    </span>
                    <span
                      className="px-2 py-1 rounded-full text-xs"
                      style={{
                        background: 'rgba(40,120,255,0.1)',
                        border: '1px solid rgba(40,120,255,0.2)',
                        color: '#2878FF',
                        fontFamily: "'JetBrains Mono',monospace",
                      }}
                    >
                      Published
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Exo 2',sans-serif", lineHeight: 1.25 }}>
                    Power Demand Forecasting using SARIMAX Model
                  </h3>

                  {/* Conference details */}
                  <p className="text-sm mb-5" style={{ color: '#A0AEC0', fontFamily: "'Inter',sans-serif" }}>
                    Published in <span className="text-white font-medium">IEEE Conference</span>
                  </p>

                  {/* Abstract */}
                  <div className="glass-light rounded-xl p-4 mb-6">
                    <p className="text-xs section-label mb-2">Abstract</p>
                    <p className="text-sm leading-relaxed" style={{ color: '#A0AEC0' }}>
                      This research presents a time-series forecasting approach for power demand prediction using the Seasonal Autoregressive Integrated Moving Average with Exogenous variables (SARIMAX) model. The study addresses the critical challenge of accurate electricity demand forecasting, which is essential for efficient power grid management, resource planning, and energy policy decisions. The model incorporates seasonal patterns, historical consumption trends, and external factors to deliver reliable short-term and medium-term power demand forecasts.
                    </p>
                  </div>

                  {/* Publication ID */}
                  <div
                    className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm"
                    style={{
                      background: 'rgba(40,120,255,0.1)',
                      border: '1px solid rgba(40,120,255,0.25)',
                      color: '#F5F7FF',
                      fontFamily: "'JetBrains Mono',monospace",
                    }}
                  >
                    ID: 11496332
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More research hint */}
          <div className="reveal delay-200 mt-6 text-center">
            <p className="text-sm" style={{ color: 'rgba(160,174,192,0.4)', fontFamily: "'JetBrains Mono',monospace" }}>
              // more research in progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
