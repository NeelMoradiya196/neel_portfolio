import { ArrowRight } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-between overflow-hidden pt-28 sm:pt-36">
      <div className="max-w-[1240px] mx-auto w-full px-5 sm:px-8 text-center relative z-10">
        {/* Top Pill Badge (like Buildora "Premium Architecture Studio") */}
        <div className="appear inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-accent)]/30 text-[var(--color-accent)] text-xs font-medium mb-6 shadow-sm">
          <span className="size-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span>Data Science & Machine Learning Explorer</span>
        </div>

        {/* Main Headline (like Buildora "Building exceptional spaces that stand the test of time.") */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.08] max-w-[20ch] mx-auto">
          Building intelligent models that stand the test of time.
        </h1>

        {/* Subtitle */}
        <p
          className="rise mt-5 text-base sm:text-lg text-[var(--color-muted)] max-w-[56ch] mx-auto leading-relaxed"
          style={{ '--i': 1 }}
        >
          B.Tech IT undergraduate at KJ Somaiya Institute of Technology. Exploring real-life datasets, training machine learning models, and engineering software with enduring impact.
        </p>

        {/* CTA Buttons (like Buildora "Explore Our Projects →" & "Start a Conversation") */}
        <div
          className="rise mt-8 flex flex-wrap items-center justify-center gap-3.5"
          style={{ '--i': 2 }}
        >
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-full bg-[var(--color-accent)] text-[#101319] hover:opacity-90 font-semibold text-sm flex items-center gap-2 transition-all active:scale-[0.98] shadow-lg"
          >
            <span>Explore Our Projects</span>
            <ArrowRight size={16} weight="bold" />
          </a>
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-full bg-[var(--color-surface)] text-[var(--color-ink)] border border-[var(--color-line)] hover:border-[var(--color-accent)] font-semibold text-sm transition-all active:scale-[0.98]"
          >
            <span>Start a Conversation</span>
          </a>
        </div>
      </div>

      {/* Signature 3D Undulating Iridescent Wave Visual (The bottom half from the reference image) */}
      <div className="relative w-full max-w-[1280px] mx-auto mt-10 sm:mt-12 px-4 sm:px-8">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--color-line)] shadow-2xl">
          <img
            src="/images/hero-wave.jpg"
            alt="3D Iridescent Liquid Wave Landscape"
            className="w-full h-[260px] sm:h-[380px] md:h-[480px] object-cover object-bottom"
          />
          {/* Subtle blend gradient at the top edge */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[var(--color-paper)]/60 pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
