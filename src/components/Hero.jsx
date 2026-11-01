import { GithubLogo, Pulse, Scan } from '@phosphor-icons/react'
import ScrollReveal from './ScrollReveal'
import { Arrow, SecHead } from './ui'
import { Notes } from './Timeline'
import { Cta } from './Contact'
import { GITHUB, projects } from '../data/projects'

const pts = Array.from({ length: 28 }, (_, i) => {
  const a = i * 2.399, r = Math.sqrt((i + 1) / 28)
  return [50 + Math.cos(a) * r * 46, 50 + Math.sin(a) * r * 44]
})
const edges = pts.flatMap((p, i) => pts.slice(i + 1).map((q) => [p, q]).filter(([a, b]) => Math.hypot(a[0] - b[0], a[1] - b[1]) < 20))

const tools = [['Python', '#e5c07b'], ['PyTorch', '#7aa2f7'], ['OpenCV', '#3ddc97'], ['scikit-learn', '#7ec4e0'], ['FastAPI', '#c4a7e7'], ['SQL', '#e5c07b']]

export default function Intro() {
  return (
    <>
      <section className="hero" aria-label="Introduction">
        <div className="frame">
          <div className="bg" aria-hidden="true">
            <svg className="net" viewBox="0 0 100 100">
              {edges.map(([a, b], i) => <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke="#3ddc97" strokeOpacity=".45" strokeWidth=".35" />)}
              {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={1.1 + (i % 3) * 0.45} fill="#9fe3c4" style={{ animationDelay: `${(i % 7) * -1}s` }} />)}
            </svg>
            <img className="hero-img" src="/neel.jpg" width="800" height="1200" alt="" fetchpriority="high" />
          </div>
          <p className="cr tl"><i /> Building in the open</p>
          <p className="cr tr">Data / ML / Systems</p>
          <div className="hero-c">
            <p className="lbl eyebrow">Data science &amp; ML explorer</p>
            <h1 className="name" aria-label="Neel Moradiya">Neel<span>Moradiya<b className="dot">.</b></span></h1>
            <p className="sub">I turn raw data into working models, explore real-world datasets, and ship software that makes sense of them.</p>
            <div className="cta-row">
              <a className="btn p1" href="#/projects">Explore my work <Arrow size={16} /></a>
              <a className="btn p2" href="/resume/Neel_Moradiya_Resume.pdf" target="_blank" rel="noopener noreferrer">Read the resume <Arrow size={16} /></a>
            </div>
          </div>
          <div className="cr bl"><span>Connect</span>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer"><GithubLogo size={14} /> GitHub <Arrow size={11} /></a>
            <a href="#/contact">Let's talk <Arrow size={11} /></a>
          </div>
          <div className="cr br"><span style={{ letterSpacing: '.16em', textTransform: 'uppercase' }}>Currently into</span>
            <span>Computer vision</span><span>RAG &amp; LLMs</span><span>Wearable ML</span>
          </div>
        </div>
      </section>

      <section className="wrap sec" id="approach">
        <div className="head"><p className="lbl"><b>01</b> / The approach</p><span className="dot" aria-hidden="true">+</span></div>
        <div className="two">
          <ScrollReveal><h2 className="h1">Raw data.<i>Real insight.</i></h2></ScrollReveal>
          <ScrollReveal delay={1}>
            <p className="p">I'm Neel, an Information Technology undergraduate at KJ Somaiya Institute of Technology, curious about data mining, statistical mathematics, and machine learning models.</p>
            <p className="p">I love turning raw, complex data into meaningful insights and practical tools, and I learn best by building them.</p>
            <div className="code"><small>// the short version</small><span className="k">while</span> (curious) {'{'} <span className="c">explore</span>(); <span className="c">model</span>(); <span className="c">ship</span>(); {'}'}</div>
            <a className="lnk" href="#/about">A little more about me <Arrow size={16} /></a>
          </ScrollReveal>
        </div>
        <div className="tools"><span className="lbl" style={{ color: '#5d78a8' }}>My everyday toolkit</span>
          <div>{tools.map(([t, c]) => <span key={t} style={{ color: c }}>{t}</span>)}</div>
        </div>
      </section>

      <section className="wrap sec" id="experience-preview">
        <SecHead n="02" label="Where I've been" title="Learning by building" to="#/experience" cta="All experience" />
        <Notes />
        <ScrollReveal><a className="lnk" href="#/skills" style={{ margin: '28px 0 0', color: '#b89b6a' }}>More from the toolbox <Arrow size={16} /></a></ScrollReveal>
      </section>

      <section className="wrap sec" id="work">
        <SecHead n="03" label="Built in the open" title="Less talk. More models" to="#/projects" cta="All projects" />
        <div className="cards">
          {projects.slice(0, 2).map((p, i) => {
            const Icon = i ? Scan : Pulse
            return (
              <ScrollReveal key={p.title} delay={i}>
                <a className="card" href="#/projects">
                  <div className="art"><span className="lbl">0{i + 1} / {p.kind}</span><Icon size={72} weight="light" aria-hidden="true" /><small>{p.tagline}</small></div>
                  <div className="cb">
                    <div className="top"><h3 className="pn">{p.title.toLowerCase().replace(/\s+/g, '-')}<u>_</u></h3><Arrow size={16} /></div>
                    <p>{p.description}</p>
                    <div className="ft"><span><i />{p.stack[1]}</span><span>Project notes <Arrow size={11} /></span></div>
                  </div>
                </a>
              </ScrollReveal>
            )
          })}
        </div>
      </section>
      <Cta />
    </>
  )
}
