import { Code, Brain, RocketLaunch } from '@phosphor-icons/react'
import { skillCategories } from '../data/skills'
import ScrollReveal from './ScrollReveal'
import { PageHead } from './ui'

const icons = [Code, Brain, RocketLaunch]

export default function Skills() {
  return (
    <div className="top-pad">
      <PageHead n="01" label="The toolbox" a="Sharp tools." b="Used on real projects." sub="Every skill here is tied to something I actually built." />
      <div className="wrap" style={{ paddingTop: 20 }}>
        {skillCategories.map((c, i) => {
          const Icon = icons[i]
          return (
            <ScrollReveal key={c.title} delay={i}>
              <section className="row">
                <span className="lbl">0{i + 1}</span><Icon size={26} aria-hidden="true" /><h3>{c.title}</h3>
                <ul className="skl">
                  {c.skills.map((s) => <li key={s.name}><b>{s.name}</b>{s.projects.map((p) => <em key={p}>{p}</em>)}</li>)}
                </ul>
              </section>
            </ScrollReveal>
          )
        })}
      </div>
    </div>
  )
}
