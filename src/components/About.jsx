import { GraduationCap, Brain, Flask, ChartLineUp } from '@phosphor-icons/react'
import ScrollReveal from './ScrollReveal'
import { Arrow, PageHead } from './ui'

const highlights = [
  [GraduationCap, 'B.Tech IT', 'KJ Somaiya Institute of Technology'],
  [Brain, 'Data Science & ML', 'Mining, Statistical Math, Modeling'],
  [Flask, 'RehabTrack', 'Live project with Medical College'],
  [ChartLineUp, 'Real Datasets', 'Exploration & Pattern Discovery'],
]

export default function About() {
  return (
    <div className="top-pad">
      <PageHead n="04" label="A little about me" a="Student by trade." b="Curious by default." sub="Behind every model is a person. Here's a little about what I care about, why I build, and what keeps me asking questions." />
      <div className="wrap">
        <div className="about">
          <ScrollReveal as="figure">
            <img src="/neel.jpg" width="800" height="1200" alt="Portrait of Neel Moradiya smiling in a black t-shirt" loading="lazy" />
            <figcaption><span>Neel Moradiya</span><span>Usually thinking about data.</span></figcaption>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="lbl">The human behind the models</p>
            <h2 className="h1">Hi, I'm Neel<span className="dot">.</span></h2>
            <p className="lead">An IT undergraduate who cares as much about understanding the data as building the model.</p>
            <p className="p">I am an Information Technology undergraduate at KJ Somaiya Institute of Technology with a keen interest in data science, exploring and working with real-life datasets, data mining, statistical mathematics, and machine learning models.</p>
            <p className="p">I love turning raw, complex data into meaningful insights and practical tools. Currently, I am working on RehabTrack, a live wearable rehabilitation device project in collaboration with my HOD and KJ Somaiya Medical College, integrating IoT sensors with ML-driven motion tracking to support physiotherapy recovery.</p>
            <a className="lnk" href="#/contact" style={{ marginTop: 10 }}>Say hello <Arrow size={16} /></a>
          </ScrollReveal>
        </div>
        <div className="head nb" style={{ borderTop: '1px solid var(--line)', paddingTop: 56, display: 'block' }}>
          <p className="lbl">A few things I come back to</p>
          <h2 className="h2" style={{ marginTop: 14 }}>At a glance<span className="dot">.</span></h2>
        </div>
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {highlights.map(([Icon, t, d], i) => (
            <ScrollReveal key={t} delay={i}>
              <div className="row">
                <span className="lbl">0{i + 1}</span><Icon size={26} aria-hidden="true" /><h3>{t}</h3><p>{d}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  )
}
