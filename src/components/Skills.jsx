import { skillCategories } from '../data/skills'
import SpotlightCard from './SpotlightCard'
import ScrollReveal from './ScrollReveal'

export default function Skills() {
  return (
    <section id="skills" className="py-10 md:py-12">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Skills</p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">Tech Stack</h2>
        </ScrollReveal>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {skillCategories.map((cat, catIdx) => (
            <ScrollReveal key={cat.title} delay={catIdx + 1}>
              <SpotlightCard className="p-6 h-full">
                <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-accent)] mb-5">
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="group">
                      <p className="text-sm font-semibold text-[var(--color-ink)]">
                        {skill.name}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-1.5">
                        {skill.projects.map((proj) => (
                          <span
                            key={proj}
                            className="text-xs font-mono px-2 py-0.5 rounded-full
                                       bg-[var(--color-sky)] text-[var(--color-muted)]
                                       border border-[var(--color-line)]"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
