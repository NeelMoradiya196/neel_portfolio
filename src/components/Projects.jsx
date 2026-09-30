import { projects } from '../data/projects'
import SpotlightCard from './SpotlightCard'
import ScrollReveal from './ScrollReveal'
import { ArrowUpRight, CircleNotch } from '@phosphor-icons/react'

export default function Projects() {
  return (
    <section id="projects" className="py-10 md:py-12">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Projects</h2>
        </ScrollReveal>

        {/* Featured projects */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <ScrollReveal key={project.title} delay={i + 1}>
                <SpotlightCard className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                    <div className="flex items-center gap-2">
                      {project.status === 'live' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border border-emerald-500/40 text-emerald-400">
                          <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" />
                          <span className="size-1.5 rounded-full bg-emerald-500 absolute" />
                          Live
                        </span>
                      )}
                      <a
                        href="#"
                        className="size-8 flex items-center justify-center rounded-full
                                   border border-[var(--color-line)]
                                   hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                                   transition-colors"
                        aria-label={`View ${project.title}`}
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-full
                                   bg-[var(--color-sky)] text-[var(--color-muted)]
                                   border border-[var(--color-line)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
        </div>

        {/* Other projects */}
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <ScrollReveal key={project.title} delay={i + 1}>
                <SpotlightCard className="p-5 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-tight">{project.title}</h3>
                    <a
                      href="#"
                      className="size-7 shrink-0 flex items-center justify-center rounded-full
                                 border border-[var(--color-line)]
                                 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                                 transition-colors"
                      aria-label={`View ${project.title}`}
                    >
                      <ArrowUpRight size={14} />
                    </a>
                  </div>

                  <p className="mt-2 text-xs text-[var(--color-muted)] leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mt-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-0.5 rounded-full
                                   bg-[var(--color-sky)] text-[var(--color-muted)]
                                   border border-[var(--color-line)]"
                      >
                        {tech}
                      </span>
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
