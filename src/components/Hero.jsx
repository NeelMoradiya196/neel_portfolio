export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden organic-bg">
      <div className="max-w-[1240px] mx-auto w-full px-5 sm:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-0">
        {/* Left - Text */}
        <div className="flex-1 order-2 md:order-1 z-10">
          {/* Eyebrow */}
          <p className="appear text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[var(--color-muted)] mb-5">
            B.Tech IT &mdash; KJ Somaiya Institute of Technology
          </p>

          {/* Headline */}
          <h1 className="text-[clamp(3.5rem,11vw,9rem)] font-semibold tracking-[-0.04em] leading-[0.88] flex flex-wrap gap-x-[0.22em]" style={{ fontFamily: 'var(--font-display)' }}>
            <span className="mask-word">
              <span className="hero-word" style={{ '--w': 0 }}>Neel</span>
            </span>
            <span className="mask-word">
              <span className="hero-word" style={{ '--w': 1 }}>Moradiya</span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="rise mt-6 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-[52ch]"
            style={{ '--i': 2 }}
          >
            Data science explorer building ML models,
            mining real-world datasets, and shipping software.
          </p>

          {/* CTAs */}
          <div className="rise flex flex-wrap gap-3 mt-8" style={{ '--i': 3 }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         bg-[var(--color-ink)] text-[var(--color-paper)] font-medium
                         hover:opacity-90 transition-opacity active:scale-[0.98]"
            >
              Explore the work
            </a>
            <a
              href="/resume/Neel_Moradiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                         border border-[var(--color-line)] text-[var(--color-ink)] font-medium
                         hover:border-[var(--color-accent)] transition-colors active:scale-[0.98]"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right - Floating Cards */}
        <div className="flex-1 order-1 md:order-2 relative h-[340px] sm:h-[420px] md:h-[520px] w-full">
          {/* Card 1: Code */}
          <div
            className="float-card absolute rounded-2xl p-4 w-[220px] sm:w-[260px] top-[8%] left-[5%] md:left-[10%] float"
            style={{ transform: 'rotate(-3deg)' }}
          >
            <div className="flex items-center gap-1.5 mb-3">
              <span className="size-2.5 rounded-full bg-red-400/70" />
              <span className="size-2.5 rounded-full bg-yellow-400/70" />
              <span className="size-2.5 rounded-full bg-green-400/70" />
            </div>
            <pre className="text-[10px] sm:text-xs font-mono text-[var(--color-muted)] leading-relaxed overflow-hidden">
{`import torch
model = Net()
optimizer = Adam(model)

for epoch in range(100):
  loss = train(model)
  print(f"Loss: {loss:.4f}")`}
            </pre>
          </div>

          {/* Card 2: Stats */}
          <div
            className="float-card absolute rounded-2xl p-4 w-[180px] sm:w-[200px] top-[5%] right-[2%] md:right-[5%] float-slow"
            style={{ transform: 'rotate(4deg)', animationDelay: '1.5s' }}
          >
            <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-accent)] mb-2">Projects shipped</p>
            <p className="text-3xl sm:text-4xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>9+</p>
            <p className="text-xs text-[var(--color-muted)] mt-1">across ML, web, mobile</p>
          </div>

          {/* Card 3: RehabTrack */}
          <div
            className="float-card absolute rounded-2xl p-4 w-[200px] sm:w-[240px] bottom-[8%] right-[0%] md:right-[8%] float"
            style={{ transform: 'rotate(2deg)', animationDelay: '3s' }}
          >
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 mb-2">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              Live
            </span>
            <p className="text-base font-semibold" style={{ fontFamily: 'var(--font-display)' }}>RehabTrack</p>
            <p className="text-xs text-[var(--color-muted)] mt-1 leading-relaxed">
              Wearable rehab device with KJ Somaiya Medical College
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 motion-reduce:hidden">
        <div className="w-px h-8 overflow-hidden">
          <div className="w-px h-3 bg-[var(--color-accent)] scroll-line" />
        </div>
      </div>
    </section>
  )
}
