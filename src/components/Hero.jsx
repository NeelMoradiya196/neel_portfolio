export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <div className="max-w-[1240px] mx-auto w-full px-5 sm:px-8 pt-24 pb-12">
        <div className="grid md:grid-cols-12 gap-6 items-center">
          {/* Left: Massive condensed text + overlapping cards */}
          <div className="md:col-span-7 relative">
            {/* Massive headline */}
            <h1 className="hero-massive text-[clamp(6rem,20vw,14rem)]">
              <span className="mask-word">
                <span className="hero-word" style={{ '--w': 0 }}>Neel</span>
              </span>
              <span className="mask-word">
                <span className="hero-word" style={{ '--w': 1 }}>Moradiya</span>
              </span>
            </h1>

            {/* Overlapping dashboard card */}
            <div
              className="rise editorial-card absolute -right-4 top-[18%] md:top-[22%] w-[220px] sm:w-[260px] p-4 z-10 float"
              style={{ '--i': 3 }}
            >
              <div className="flex items-center gap-1.5 mb-3">
                <span className="size-2 rounded-full bg-red-400" />
                <span className="size-2 rounded-full bg-yellow-400" />
                <span className="size-2 rounded-full bg-green-400" />
              </div>
              <pre className="text-[10px] sm:text-xs font-mono leading-relaxed opacity-70 overflow-hidden">
{`import torch
model = Net()
optim = Adam(model.parameters())

for epoch in range(100):
  loss = train(model, data)
  print(f"Loss: {loss:.4f}")`}
              </pre>
            </div>

            {/* Stats card */}
            <div
              className="rise editorial-card absolute -right-8 md:right-4 bottom-[5%] md:bottom-[10%] w-[160px] p-4 z-10 float-slow"
              style={{ '--i': 4, animationDelay: '2s' }}
            >
              <p className="text-3xl font-extrabold text-[var(--color-accent)]">9+</p>
              <p className="text-xs opacity-60 mt-0.5 uppercase tracking-wider">Projects Shipped</p>
            </div>
          </div>

          {/* Right: Serif subheading + description + CTA */}
          <div className="md:col-span-5 z-10">
            <p
              className="rise text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-accent)] mb-4"
              style={{ '--i': 0 }}
            >
              Data Science · ML · Software
            </p>

            <h2
              className="rise text-2xl sm:text-3xl md:text-4xl italic leading-tight"
              style={{ fontFamily: 'var(--font-serif)', '--i': 1 }}
            >
              Building Intelligence from Data
            </h2>

            <p
              className="rise mt-4 text-sm sm:text-base text-[var(--color-muted)] leading-relaxed max-w-[44ch]"
              style={{ '--i': 2 }}
            >
              B.Tech IT at KJ Somaiya Institute of Technology.
              Exploring datasets, training ML models, and shipping
              software that turns raw data into meaningful insight.
            </p>

            {/* Skill pills */}
            <div className="rise flex flex-wrap gap-2 mt-5" style={{ '--i': 3 }}>
              {['Machine Learning', 'Data Mining', 'Python', 'PyTorch'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-3 py-1 rounded-full
                             bg-[var(--color-sky)] text-[var(--color-accent)]
                             border border-[var(--color-accent)]/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ '--i': 4 }}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                           bg-[var(--color-ink)] text-[var(--color-paper)] font-bold
                           uppercase tracking-wider text-sm
                           hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                           border-2 border-[var(--color-ink)] text-[var(--color-ink)] font-bold
                           uppercase tracking-wider text-sm
                           hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]
                           transition-all active:scale-[0.97]"
              >
                Contact Me
              </a>
            </div>

            {/* Thumbnail cards */}
            <div className="rise grid grid-cols-2 gap-3 mt-8" style={{ '--i': 5 }}>
              <div className="editorial-card rounded-xl p-3.5">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span className="text-emerald-400">Live</span>
                </span>
                <p className="text-sm font-bold mt-1">RehabTrack</p>
                <p className="text-xs opacity-50 mt-0.5">Wearable · ML · IoT</p>
              </div>
              <div className="editorial-card rounded-xl p-3.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-accent)]">Featured</span>
                <p className="text-sm font-bold mt-1">Deepfake Detector</p>
                <p className="text-xs opacity-50 mt-0.5">PyTorch · OpenCV</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 motion-reduce:hidden">
        <div className="w-px h-8 overflow-hidden">
          <div className="w-px h-3 bg-[var(--color-ink)] scroll-line" />
        </div>
      </div>
    </section>
  )
}
