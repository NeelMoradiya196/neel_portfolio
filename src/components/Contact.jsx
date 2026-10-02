import ScrollReveal from './ScrollReveal'
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

const socials = [
  {
    icon: EnvelopeSimple,
    label: 'Email',
    href: 'mailto:contact@neelmoradiya.dev',
    display: 'Get in touch via email',
  },
  {
    icon: GithubLogo,
    label: 'GitHub',
    href: 'https://github.com',
    display: 'github.com',
  },
  {
    icon: LinkedinLogo,
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    display: 'linkedin.com',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-12">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <ScrollReveal className="md:col-span-6">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-accent)] mb-3">Contact</p>
            <h2
              className="text-5xl md:text-7xl uppercase tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Let's Talk
            </h2>
            <h3
              className="text-xl md:text-2xl italic mt-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Always open to new opportunities
            </h3>
            <p className="mt-3 text-base text-[var(--color-muted)] leading-relaxed max-w-[48ch]">
              Interested in data science research, machine learning projects,
              or software engineering roles? Let's connect.
            </p>
            <div className="mt-8">
              <a
                href="/resume/Neel_Moradiya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                           bg-[var(--color-ink)] text-[var(--color-paper)] font-bold
                           uppercase tracking-wider text-sm
                           hover:opacity-90 transition-opacity active:scale-[0.97]"
              >
                Download Resume
              </a>
            </div>
          </ScrollReveal>

          <div className="md:col-span-6 space-y-3">
            {socials.map((s, i) => (
              <ScrollReveal key={s.label} delay={i + 1}>
                <a
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="glass-panel rounded-2xl p-5 flex items-center justify-between
                             hover:shadow-lg transition-shadow group block"
                >
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                      <s.icon size={20} weight="bold" className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{s.label}</p>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">{s.display}</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
                    &#8599;
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
