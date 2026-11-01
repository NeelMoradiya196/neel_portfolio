import { Terminal, Stack, GitBranch, Briefcase, User, EnvelopeSimple } from '@phosphor-icons/react'
import { Arrow } from './ui'

const links = [
  ['intro', 'Intro', Terminal], ['skills', 'Skills', Stack], ['projects', 'Projects', GitBranch],
  ['experience', 'Experience', Briefcase], ['about', 'About', User],
]

export default function Nav({ route }) {
  const item = ([id, label, Icon]) => (
    <a key={id} href={id === 'intro' ? '#/' : `#/${id}`} className={route === id ? 'on' : ''}
       aria-current={route === id ? 'page' : undefined} aria-label={label}>
      <Icon size={15} aria-hidden="true" /><span>{label}</span>
    </a>
  )
  return (
    <>
      <a className="logo" href="#/" aria-label="Neel Moradiya, home">nm<span>_</span></a>
      <a className="avail" href="#/contact"><i /> Open to opportunities <Arrow size={11} /></a>
      <nav className="nav" aria-label="Primary">
        <div className="pill">
          {links.map(item)}
          <hr />
          {item(['contact', 'Contact', EnvelopeSimple])}
        </div>
      </nav>
    </>
  )
}
