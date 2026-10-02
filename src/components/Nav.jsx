import { useState, useEffect } from 'react'
import { List, X, ArrowUpRight } from '@phosphor-icons/react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`nav-appear fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? 'nav-glass shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between h-20 px-5 sm:px-8">
        {/* Logo / Brand Name (like Buildora in the image) */}
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-[var(--color-ink)] hover:opacity-90 transition-opacity"
        >
          Neel Moradiya
        </a>

        {/* Center Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setActive(l.label)}
              className={`text-sm font-medium transition-colors relative py-1 ${
                active === l.label
                  ? 'text-[var(--color-ink)] font-semibold after:absolute after:bottom-0 after:inset-x-0 after:h-[2px] after:bg-[var(--color-ink)] after:rounded-full'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right CTA Button (like "Start a project →" in Buildora) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume/Neel_Moradiya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold px-5 py-2.5 rounded-full
                       bg-[var(--color-surface)] border border-[var(--color-line)] text-[var(--color-ink)]
                       hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                       transition-all active:scale-[0.98] shadow-sm flex items-center gap-1.5"
          >
            <span>Resume</span>
            <ArrowUpRight size={14} weight="bold" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="size-10 flex items-center justify-center rounded-full
                       border border-[var(--color-line)] bg-[var(--color-surface)]
                       hover:bg-[var(--color-line)] transition-colors cursor-pointer"
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-[var(--color-surface)] border-b border-[var(--color-line)] px-6 py-6 space-y-4 shadow-2xl">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => {
                setActive(l.label)
                setOpen(false)
              }}
              className="block text-base font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[var(--color-line)] flex items-center justify-between">
            <span className="text-xs text-[var(--color-muted)]">Data Science & ML</span>
            <a
              href="/resume/Neel_Moradiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold px-4 py-2 rounded-full bg-[var(--color-accent)] text-[#101319]"
            >
              Resume →
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
