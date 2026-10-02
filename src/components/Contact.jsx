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
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight uppercase">Let's Connect</h2>
            <p className="mt-4 text-base md:text-lg text-[var(--color-muted)] leading-relaxed max-w-[48ch]">
              Always open to discussing data science research, machine learning projects,
              or software engineering opportunities.
            </p>
            <div className="mt-8">
              <a
                href="/resume/Neel_Moradiya_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full
                           bg-[var(--color-accent)] text-[#0a0a0f] font-semibold
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
                  className="dash-card rounded-2xl p-5 flex items-center justify-between
                             hover:border-[var(--color-accent)] transition-colors group block"
                >
                  <div className="flex items-center gap-4">
                    <s.icon
                      size={24}
                      weight="duotone"
                      className="text-[var(--color-accent)] group-hover:scale-110 transition-transform"
                    />
                    <div>
                      <p className="text-sm font-bold">{s.label}</p>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5">{s.display}</p>
                    </div>
                  </div>
                  <span className="text-sm text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors">
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
