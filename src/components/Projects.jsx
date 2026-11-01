import { useState } from 'react'
import { Copy, Check, GitBranch } from '@phosphor-icons/react'
import { projects, repoUrl, GITHUB } from '../data/projects'
import { Arrow, PageHead } from './ui'

const filters = ['All', 'Python', 'TypeScript', 'Kotlin', 'C++17', 'SQL']
const tok = /("[^"]*"|\b\d+\b|\b(?:const|val|if|else|for|in|new|auto|import|return|SELECT|FROM|GROUP|BY|ORDER|DESC|SUM)\b)/g
const hl = (l) => l.split(tok).map((t, i) => (i % 2 ? <span key={i} className={t[0] === '"' ? 's' : /\d/.test(t[0]) ? 'n' : 'k'}>{t}</span> : t))
const slug = (t) => t.toLowerCase().replace(/\s+/g, '-')

function Pane({ p }) {
  const [ok, setOk] = useState(false)
  const copy = () => navigator.clipboard?.writeText(p.code.join('\n')).then(() => { setOk(true); setTimeout(() => setOk(false), 1600) })
  return (
    <div className="pane">
      <header><i /><i /><i /><b>{slug(p.title)} / quick look</b>
        <button onClick={copy} aria-label="Copy snippet">{ok ? <Check size={12} /> : <Copy size={12} />}{ok ? 'Copied' : 'Copy'}</button>
      </header>
      <pre><code>{p.code.map((l, i) => <div key={i}><em>{i + 1}</em><span>{hl(l)}</span></div>)}</code></pre>
    </div>
  )
}

export default function Projects() {
  const [f, setF] = useState('All')
  const list = projects.filter((p) => f === 'All' || p.stack.includes(f))
  return (
    <div className="top-pad">
      <PageHead n="02" label="Built in the open" a="The workbench." b="Always in progress." sub="Models, tools, and experiments turned into code. Built to solve a problem, understand a system, or learn something new." />
      <div className="wrap">
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((x) => <button key={x} className={`fbtn ${f === x ? 'on' : ''}`} aria-pressed={f === x} onClick={() => setF(x)}>{x}</button>)}
          <span className="sp" /><span className="lbl" style={{ fontSize: 10, letterSpacing: '.05em' }}>{list.length} projects / Built to learn</span>
        </div>
        <div key={f}>
          {list.map((p, i) => (
            <article className="proj" key={p.title} style={{ animationDelay: `${i * 70}ms` }}>
              <div>
                <p className="lbl"><b>{String(i + 1).padStart(2, '0')}</b> / {p.kind}</p>
                <h2 className="pn2">{slug(p.title)}<u>_</u></h2>
                <h4>{p.tagline}</h4>
                <p className="p">{p.description}</p>
                <div className="tags">{p.stack.map((t, j) => <span key={t} className={`tag ${j ? '' : 'g'}`}>{t}</span>)}</div>
                <div className="links">
                  <a className="lnk" href={repoUrl(p.title)} target="_blank" rel="noopener noreferrer">Explore the project <Arrow size={14} /></a>
                  <a className="lnk" href={GITHUB} target="_blank" rel="noopener noreferrer"><GitBranch size={15} /> Find on GitHub <Arrow size={12} /></a>
                </div>
              </div>
              <Pane p={p} />
            </article>
          ))}
        </div>
        <p className="fine" style={{ padding: '30px 0', borderTop: '1px solid var(--line)' }}>Code snippets are illustrative. GitHub links open repository searches on my profile.</p>
      </div>
    </div>
  )
}
