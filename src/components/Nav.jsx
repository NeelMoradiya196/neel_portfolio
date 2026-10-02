import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react'
import ThemeToggle from './ThemeToggle'

const leftLinks = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
]

const rightLinks = [
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass shadow-sm' : ''
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 h-16 flex items-center">
        {/* Mobile: Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden size-10 flex items-center justify-center rounded-full
                     bg-[var(--color-accent)] text-white cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
        </button>

        {/* Desktop: Left links */}
        <div className="hidden md:flex items-center gap-8 flex-1">
          {leftLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--color-muted)]
                         hover:text-[var(--color-ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Center: Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold tracking-tight text-[var(--color-ink)] mx-auto md:mx-0"
          style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
        >
          NM
        </a>

        {/* Desktop: Right links + actions */}
        <div className="hidden md:flex items-center gap-8 flex-1 justify-end">
          {rightLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--color-muted)]
                         hover:text-[var(--color-ink)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="/resume/Neel_Moradiya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="size-10 flex items-center justify-center rounded-full
                       bg-[var(--color-accent)] text-white text-sm font-bold
                       hover:opacity-90 transition-opacity"
            aria-label="Resume"
            title="Download Resume"
          >
            R
          </a>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--color-paper)] px-5 py-5 space-y-4 border-t border-[var(--color-line)]">
          {[...leftLinks, ...rightLinks].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-[var(--color-muted)]
                         hover:text-[var(--color-ink)] transition-colors capitalize"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-3 border-t border-[var(--color-line)]">
            <ThemeToggle />
            <a
              href="/resume/Neel_Moradiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold px-5 py-2.5 rounded-full
                         bg-[var(--color-ink)] text-[var(--color-paper)]
                         hover:opacity-90 transition-opacity uppercase tracking-wider"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
