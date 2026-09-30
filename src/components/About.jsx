import ScrollReveal from './ScrollReveal'
import { GraduationCap, Users, Flask, ChartLineUp } from '@phosphor-icons/react'

const highlights = [
  { icon: GraduationCap, label: 'B.Tech IT', detail: 'KJ Somaiya Institute of Technology' },
  { icon: Users, label: 'IEEE', detail: 'Organizing Admin' },
  { icon: Flask, label: 'RehabTrack', detail: 'Live project with Medical College' },
  { icon: ChartLineUp, label: 'Data Science', detail: 'ML, Mining, Statistical Math' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">About</h2>
        </ScrollReveal>

        <div className="mt-10 grid md:grid-cols-12 gap-10 md:gap-14">
          {/* Bio */}
          <ScrollReveal delay={1} className="md:col-span-7">
            <p className="text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-[62ch]">
              I'm a B.Tech Information Technology student at KJ Somaiya Institute of
              Technology with a deep fascination for uncovering patterns in data. My work
              spans building ML models, exploring real-world datasets through statistical
              analysis, and shipping full-stack applications.
            </p>
            <p className="mt-4 text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-[62ch]">
              As an Organizing Admin at IEEE, I coordinate technical events and workshops.
              Currently, I'm working on RehabTrack, a live wearable rehabilitation device
              project in collaboration with my HOD and KJ Somaiya Medical College, combining
              IoT sensors with ML-based motion analysis for physiotherapy patients.
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
