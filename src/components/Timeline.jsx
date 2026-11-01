import ScrollReveal from './ScrollReveal'
import { Arrow, PageHead } from './ui'
import { events } from '../data/experience'

export function Notes() {
  return (
    <div className="notes">
      {events.map((e, i) => (
        <ScrollReveal key={e.title} delay={i}>
          <article className="note">
            <span className="lbl">0{i + 1}</span>
            <div>
              <span className="tag g">{e.tags[0]}</span> <span className="tag">{e.tags[1]}</span>
              <h3>{e.title}</h3>
              <p>{e.description}</p>
            </div>
            <div className="r">{e.period}<br />{e.org}<br /><Arrow size={16} /></div>
          </article>
        </ScrollReveal>
      ))}
    </div>
  )
}

export default function Timeline() {
  return (
    <div className="top-pad">
      <PageHead n="03" label="Where I've been" a="Learning by building." b="Always in motion." sub="Research, collaboration, and coursework that shaped how I work with data." />
      <div className="wrap"><Notes /></div>
    </div>
  )
}
