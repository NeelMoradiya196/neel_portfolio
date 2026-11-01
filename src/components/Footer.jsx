import { ArrowUp } from '@phosphor-icons/react'
import { Arrow } from './ui'
import { GITHUB } from '../data/projects'

export default function Footer() {
  return (
    <footer className="foot wrap">
      <p className="stay">// stay curious</p>
      <div className="r1">
        <div><a className="logo" href="#/">nm<span>_</span></a><span>Learn deeply. Build openly.</span></div>
        <a className="lnk" href={GITHUB} target="_blank" rel="noopener noreferrer">Find me on GitHub <Arrow /></a>
      </div>
      <div className="r2">
        <span>© 2026 Neel Moradiya</span>
        <div><a href="#/about">About</a><a href="#/contact">Get in touch</a><a href="/resume/Neel_Moradiya_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></div>
        <a href="#/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top <ArrowUp size={12} style={{ verticalAlign: -2 }} /></a>
      </div>
    </footer>
  )
}
