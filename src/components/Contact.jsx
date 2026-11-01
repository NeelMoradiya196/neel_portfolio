import { useState } from 'react'
import { Terminal, Copy, Check, EnvelopeSimple, GithubLogo, LinkedinLogo, FilePdf } from '@phosphor-icons/react'
import ScrollReveal from './ScrollReveal'
import { Arrow, PageHead } from './ui'
import { GITHUB } from '../data/projects'

const EMAIL = 'contact@neelmoradiya.dev'
const RESUME = '/resume/Neel_Moradiya_Resume.pdf'
const socials = [
  [EnvelopeSimple, 'Email', `mailto:${EMAIL}`, EMAIL],
  [GithubLogo, 'GitHub', GITHUB, 'github.com/NeelMoradiya196'],
  [LinkedinLogo, 'LinkedIn', 'https://linkedin.com', 'linkedin.com'],
  [FilePdf, 'Resume', RESUME, 'Download PDF'],
]

export function Cta() {
  const [ok, setOk] = useState(false)
  const copy = () => navigator.clipboard?.writeText(EMAIL).then(() => { setOk(true); setTimeout(() => setOk(false), 1800) })
  return (
    <ScrollReveal as="section" className="cta wrap">
      <div className="ico"><Terminal size={22} aria-hidden="true" /></div>
      <p className="lbl">Open for conversation</p>
      <h2 className="h1">Got data?<i>Let's talk.</i></h2>
      <p className="p">Data science research, machine learning projects, or software engineering opportunities.<br />Feel free to reach out.</p>
      <div className="mail">
        <span>&gt;</span>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <button className="btn p1" onClick={copy} aria-live="polite">{ok ? 'Copied' : 'Copy email'} {ok ? <Check size={14} weight="bold" /> : <Copy size={14} />}</button>
      </div>
      <p className="fine">Prefer a quick look first? <a href={RESUME} target="_blank" rel="noopener noreferrer">Download my resume</a>.</p>
    </ScrollReveal>
  )
}

export default function Contact() {
  return (
    <div className="top-pad">
      <PageHead n="05" label="Let's connect" a="Say hello." b="Share an idea." sub="Always open to discussing data science research, machine learning projects, or software engineering opportunities." />
      <div className="wrap">
        {socials.map(([Icon, label, href, text], i) => (
          <ScrollReveal key={label} delay={i}>
            <a className="soc" href={href} {...(href.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}>
              <Icon size={24} aria-hidden="true" /><h3>{label}</h3><span>{text} <Arrow /></span>
            </a>
          </ScrollReveal>
        ))}
      </div>
      <Cta />
    </div>
  )
}
