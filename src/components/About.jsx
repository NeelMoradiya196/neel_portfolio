import ScrollReveal from './ScrollReveal'
import { GraduationCap, Brain, Flask, ChartLineUp } from '@phosphor-icons/react'

const highlights = [
  { icon: GraduationCap, label: 'B.Tech IT', detail: 'KJ Somaiya Institute of Technology' },
  { icon: Brain, label: 'Data Science & ML', detail: 'Mining, Statistical Math, Modeling' },
  { icon: Flask, label: 'RehabTrack', detail: 'Live project with Medical College' },
  { icon: ChartLineUp, label: 'Real Datasets', detail: 'Exploration & Pattern Discovery' },
]

export default function About() {
  return (
    <section id="about" className="py-10 md:py-12">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>About</h2>
        </ScrollReveal>

        <div className="mt-8 grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Bio */}
          <ScrollReveal delay={1} className="md:col-span-7">
            <p className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-[62ch]">
              I am an Information Technology undergraduate at KJ Somaiya Institute of
              Technology with a keen interest in data science, exploring and working with real-life
              datasets, data mining, statistical mathematics, and machine learning models.
            </p>
            <p className="mt-4 text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-[62ch]">
              I love turning raw, complex data into meaningful insights and practical tools.
              Currently, I am working on RehabTrack, a live wearable rehabilitation device project in
              collaboration with my HOD and KJ Somaiya Medical College, integrating IoT sensors with
              ML-driven motion tracking to support physiotherapy recovery.
            </p>
          </ScrollReveal>

          {/* Highlight cards */}
          <div className="md:col-span-5 grid grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <ScrollReveal
                key={h.label}
                delay={i + 2}
                className="glass-panel rounded-2xl p-5 flex flex-col gap-3"
              >
                <h.icon size={24} weight="duotone" className="text-[var(--color-accent)]" />
                <div>
                  <p className="text-sm font-semibold">{h.label}</p>
                  <p className="text-xs text-[var(--color-muted)] mt-0.5">{h.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
