import { ArrowUpRight, ArrowLeft } from '@phosphor-icons/react'
import ScrollReveal from './ScrollReveal'

export const Arrow = ({ size = 14 }) => <ArrowUpRight size={size} weight="bold" aria-hidden="true" />

export function PageHead({ n, label, a, b, sub }) {
  return (
    <header className="ph wrap">
      <div className="head" style={{ border: 0, padding: 0 }}>
        <p className="lbl"><b>{n}</b> / {label}</p>
        <a className="back" href="#/"><ArrowLeft size={12} /> BACK TO INTRO</a>
      </div>
      <h1 className="h1">{a}<i>{b}</i></h1>
      {sub && <p className="p">{sub}</p>}
    </header>
  )
}

export function SecHead({ n, label, title, to, cta }) {
  return (
    <ScrollReveal className="head nb">
      <div>
        <p className="lbl"><b>{n}</b> / {label}</p>
        <h2 className="h2" style={{ marginTop: 14 }}>{title}<span className="dot">.</span></h2>
      </div>
      <a className="lnk" href={to}>{cta} <Arrow size={16} /></a>
    </ScrollReveal>
  )
}
