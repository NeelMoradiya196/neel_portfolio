import GlassOrb from './GlassOrb'
import { ArrowDown } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16">
      {/* Stars */}
      <div className="stars absolute inset-0" />

      {/* Meteors */}
      <div className="meteor absolute top-[18%] right-[4%]" style={{ '--len': '120px', animationDelay: '1.2s' }} />
      <div className="meteor absolute top-[32%] right-[-8%]" style={{ '--len': '180px', animationDelay: '3.8s' }} />
      <div className="meteor absolute top-[12%] right-[20%]" style={{ '--len': '100px', animationDelay: '6.5s' }} />

      <div className="max-w-[1240px] mx-auto w-full px-5 sm:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-14">
        {/* Left - Text */}
        <div className="flex-1 order-2 md:order-1">
          {/* Eyebrow */}
          <p
            className="appear text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[var(--color-muted)] mb-5"
          >
            B.Tech IT - KJ Somaiya Institute of Technology
          </p>

          {/* Headline */}
          <h1 className="text-[clamp(3.25rem,10vw,8.5rem)] font-semibold tracking-[-0.05em] leading-[0.86]">
            <span className="mask-word">
              <span className="hero-word" style={{ '--w': 0 }}>Neel</span>
            </span>
            <span className="mask-word">
              <span className="hero-word" style={{ '--w': 1 }}>Moradiya</span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="rise mt-6 text-base sm:text-lg text-[var(--color-muted)] leading-relaxed max-w-[58ch]"
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
                         bg-[var(--color-accent)] text-[var(--color-paper)] font-medium
                         hover:opacity-90 transition-opacity active:scale-[0.98]"
            >
              View Projects
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

        {/* Right - Orb */}
        <div className="flex-shrink-0 order-1 md:order-2">
          <GlassOrb />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 motion-reduce:hidden">
        <div className="w-px h-8 overflow-hidden">
          <div className="w-px h-3 bg-[var(--color-accent)] scroll-line" />
        </div>
      </div>
    </section>
  )
}
