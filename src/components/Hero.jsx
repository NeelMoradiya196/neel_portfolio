import { useState } from 'react'
import { ArrowUpRight, Waveform, Cpu, Sparkle } from '@phosphor-icons/react'

export default function Hero() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Background Giant Watermark Typography (Vibram "COMFORT" style) */}
      <div className="absolute inset-x-0 top-16 md:top-20 flex justify-center items-center pointer-events-none select-none z-0 overflow-hidden">
        <h1
          className="vibram-hero-title text-[clamp(6rem,22vw,16rem)] text-[var(--color-ink)] opacity-[0.06] dark:opacity-[0.08] tracking-tighter whitespace-nowrap text-center"
        >
          NEEL MORADIYA
        </h1>
      </div>

      <div className="max-w-[1280px] mx-auto w-full px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Flagship Project Showcase Card (like the Vibram Shoe Showcase) */}
          <div className="lg:col-span-6 relative">
            <div className="dark-showcase-card p-6 sm:p-8 float-subtle">
              {/* Header badge */}
              <div className="flex items-center justify-between gap-3 mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium">
                  <span className="size-2 rounded-full bg-emerald-400 glow-pulse" />
                  <span>LIVE RESEARCH & MEDICAL COLLAB</span>
                </div>
                <span className="text-xs font-mono text-slate-400">KJ Somaiya Med</span>
              </div>

              {/* Card Title & Spec */}
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  REHABTRACK · WEARABLE DEVICE
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Integrating multi-axis IMU sensors with machine learning motion analysis for patient physiotherapy recovery tracking.
                </p>
              </div>

              {/* Simulated Sensor Graph / Telemetry Visual */}
              <div className="bg-black/40 rounded-xl p-4 border border-white/10 mb-6">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <Waveform size={15} weight="bold" />
                    <span>Real-Time Motion Waveform</span>
                  </span>
                  <span>98.4% Accuracy</span>
                </div>

                {/* SVG Visualizer */}
                <div className="h-20 w-full flex items-center">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 80" fill="none">
                    <path
                      d="M0 40 Q 40 10, 80 40 T 160 40 T 240 15 T 320 65 T 400 40"
                      stroke="#f59e0b"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0 40 Q 40 10, 80 40 T 160 40 T 240 15 T 320 65 T 400 40 L 400 80 L 0 80 Z"
                      fill="url(#grad)"
                      opacity="0.25"
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" y1="0" x2="0" y2="80" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#f59e0b" />
                        <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Tag Selector (Vibram "Select Size" Style) */}
              <div className="mb-6">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Core Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {['PyTorch', 'IoT Sensors', 'C++17', 'Signal ML'].map((tech, i) => (
                    <span
                      key={tech}
                      className={`text-xs font-mono px-3.5 py-1.5 rounded-lg border transition-all ${
                        i === 0
                          ? 'bg-[var(--color-accent)] text-black font-bold border-[var(--color-accent)]'
                          : 'bg-white/5 border-white/10 text-slate-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button (Vibram "ADD TO CART" Style) */}
              <a
                href="#projects"
                className="w-full py-3.5 rounded-xl bg-white text-black hover:bg-[var(--color-accent)] hover:text-black font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-lg"
              >
                <span>View Full Project Case Study</span>
                <ArrowUpRight size={18} weight="bold" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Text & Thumbnails (like Vibram Right Panel) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent)] font-semibold">
                <Cpu size={16} weight="bold" />
                <span>Information Technology · KJSIEIT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-normal leading-[1.1] text-[var(--color-ink)]">
                Building <span className="vibram-serif italic font-bold">intelligence</span> from real-world data.
              </h2>

              <p className="text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-[52ch]">
                Hi, I'm <strong className="text-[var(--color-ink)] font-bold">Neel Moradiya</strong>. I specialize in data science, exploratory data analysis, statistical mathematics, and training machine learning models to solve complex, tangible problems.
              </p>
            </div>

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['All', 'Machine Learning', 'Computer Vision', 'Deep Learning'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs font-medium px-4 py-2 rounded-full border transition-all cursor-pointer ${
                    activeFilter === cat
                      ? 'bg-[var(--color-ink)] text-[var(--color-paper)] border-[var(--color-ink)] shadow-sm'
                      : 'bg-[var(--color-surface)] text-[var(--color-muted)] border-[var(--color-line)] hover:border-[var(--color-accent)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-[var(--color-ink)] text-[var(--color-paper)] font-bold uppercase tracking-wider text-xs flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-md"
              >
                <span>Explore Projects</span>
                <ArrowUpRight size={16} weight="bold" />
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-full border-2 border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-ink)] font-bold uppercase tracking-wider text-xs hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] active:scale-95 transition-all"
              >
                Get In Touch
              </a>
            </div>

            {/* Two Thumbnail Cards (like Vibram product detail thumbnails at bottom right) */}
            <div className="pt-4 grid grid-cols-2 gap-3">
              <a
                href="#projects"
                className="glass-panel rounded-2xl p-4 flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                    Computer Vision
                  </span>
                  <ArrowUpRight size={14} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                    Deepfake Detector
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">
                    PyTorch · OpenCV
                  </p>
                </div>
              </a>

              <a
                href="#projects"
                className="glass-panel rounded-2xl p-4 flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-accent)] font-semibold">
                    Data Pipeline
                  </span>
                  <ArrowUpRight size={14} className="text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors">
                    Process Mining
                  </p>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">
                    PaddleOCR · scikit-learn
                  </p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
