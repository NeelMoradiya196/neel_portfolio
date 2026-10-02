import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`nav-appear fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between h-16 px-5 sm:px-8">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-lg font-semibold tracking-tight text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
        >
          NM
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="/resume/Neel_Moradiya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-4 py-2 rounded-full
                       bg-[var(--color-accent)] text-[var(--color-paper)]
                       hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden size-9 flex items-center justify-center cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <List size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-glass border-t border-[var(--color-line)] px-5 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <ThemeToggle />
            <a
              href="/resume/Neel_Moradiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-full
                         bg-[var(--color-accent)] text-[var(--color-paper)]
                         hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
