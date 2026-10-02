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
    <nav className="nav-appear fixed top-4 inset-x-0 z-40 flex justify-center px-4">
      <div
        className={`nav-pill rounded-full px-2 py-1.5 flex items-center gap-1 transition-all duration-500 ${
          scrolled ? 'shadow-lg' : ''
        }`}
      >
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium px-4 py-2 rounded-full
                         text-[var(--color-muted)] hover:text-[var(--color-ink)]
                         hover:bg-[var(--color-surface)] transition-all duration-200"
            >
              {l.label}
            </a>
          ))}
          <div className="w-px h-5 bg-[var(--color-line)] mx-1.5" />
          <ThemeToggle />
          <a
            href="/resume/Neel_Moradiya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium ml-1 px-4 py-2 rounded-full
                       bg-[var(--color-accent)] text-white
                       hover:opacity-90 transition-opacity active:scale-[0.98]"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2 px-2">
          <span className="text-sm font-semibold font-[var(--font-display)] text-[var(--color-ink)]">NM</span>
          <button
            onClick={() => setOpen(!open)}
            className="size-8 flex items-center justify-center rounded-full hover:bg-[var(--color-surface)] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full mt-2 left-4 right-4 nav-pill rounded-2xl px-4 py-5 space-y-3">
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
          <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-line)]">
            <ThemeToggle />
            <a
              href="/resume/Neel_Moradiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-2 rounded-full
                         bg-[var(--color-accent)] text-white
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
