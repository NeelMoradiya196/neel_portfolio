export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Glow */}
      <div className="hero-glow" />

      <div className="max-w-[1240px] mx-auto w-full px-5 sm:px-8 pt-20 pb-10 flex flex-col md:flex-row items-center gap-8 md:gap-0">
        {/* Left - Massive Text */}
        <div className="flex-1 order-2 md:order-1 z-10">
          {/* Eyebrow */}
          <p className="appear text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[var(--color-muted)] mb-6">
            Data Science · ML · Software
          </p>

          {/* Massive Name */}
          <h1 className="hero-massive text-[clamp(4rem,13vw,10rem)]">
            <span className="mask-word">
              <span className="hero-word" style={{ '--w': 0 }}>Neel</span>
            </span>
            <span className="mask-word">
              <span className="hero-word" style={{ '--w': 1 }}>Moradiya</span>
            </span>
          </h1>

          {/* Statement */}
          <p
            className="rise mt-6 text-lg sm:text-xl md:text-2xl font-semibold text-[var(--color-accent)] tracking-tight"
            style={{ '--i': 2 }}
          >
            Building Intelligence from Data
          </p>

          {/* Sub-description */}
          <p
            className="rise mt-3 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed max-w-[50ch]"
            style={{ '--i': 3 }}
          >
            Exploring datasets, training ML models, and shipping
            software that turns raw data into meaningful insight.
          </p>

          {/* CTAs */}
          <div className="rise flex flex-wrap gap-3 mt-8" style={{ '--i': 4 }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full
                         bg-[var(--color-accent)] text-[#0a0a0f] font-semibold
                         hover:opacity-90 transition-opacity active:scale-[0.97]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full
                         border border-[var(--color-line)] text-[var(--color-ink)] font-medium
                         hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                         transition-colors active:scale-[0.97]"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Right - Dashboard Cards */}
        <div className="flex-1 order-1 md:order-2 relative h-[300px] sm:h-[380px] md:h-[480px] w-full">
          {/* Card 1: Projects count */}
          <div
            className="dash-card absolute rounded-2xl p-5 w-[150px] sm:w-[170px] top-[5%] right-[5%] md:right-[10%] float text-center"
          >
            <p className="text-4xl sm:text-5xl font-extrabold text-[var(--color-accent)]">9+</p>
            <p className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] mt-1">Projects</p>
          </div>

          {/* Card 2: Skills dashboard */}
          <div
            className="dash-card absolute rounded-2xl p-4 w-[240px] sm:w-[280px] top-[28%] left-[0%] md:left-[5%] float-slow"
            style={{ animationDelay: '1.5s' }}
          >
            <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-accent)] mb-3">Tech Stack</p>
            <div className="space-y-2.5">
              {[{ name: 'Python', w: '85%' }, { name: 'PyTorch', w: '70%' }, { name: 'React', w: '65%' }].map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[var(--color-ink)] font-medium">{s.name}</span>
                    <span className="text-[var(--color-muted)]">{s.w}</span>
                  </div>
                  <div className="h-1 rounded-full bg-[var(--color-surface)]">
                    <div className="h-full rounded-full bg-[var(--color-accent)]" style={{ width: s.w, opacity: 0.7 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: RehabTrack Live */}
          <div
            className="dash-card absolute rounded-2xl p-4 w-[210px] sm:w-[240px] bottom-[8%] right-[0%] md:right-[8%] float"
            style={{ animationDelay: '3s' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="size-2 rounded-full bg-emerald-400 glow-pulse" />
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400">Live Project</span>
            </div>
            <p className="text-base font-bold">RehabTrack</p>
            <p className="text-xs text-[var(--color-muted)] mt-1 leading-relaxed">
              Wearable rehab device · KJ Somaiya Medical
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 motion-reduce:hidden">
        <div className="w-px h-8 overflow-hidden">
          <div className="w-px h-3 bg-[var(--color-accent)] scroll-line" />
        </div>
      </div>
    </section>
  )
}
