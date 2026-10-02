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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass' : ''
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Monogram */}
        <a href="#" className="text-lg font-extrabold tracking-tight text-[var(--color-accent)]">
          NM
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[var(--color-muted)]
                         hover:text-[var(--color-ink)] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume/Neel_Moradiya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2 rounded-full
                       bg-[var(--color-accent)] text-[#0a0a0f]
                       hover:opacity-90 transition-opacity active:scale-[0.97]"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden size-9 flex items-center justify-center rounded-lg
                     hover:bg-[var(--color-surface)] transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <List size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-glass px-5 py-5 space-y-4 border-t border-[var(--color-line)]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-[var(--color-muted)]
                         hover:text-[var(--color-ink)] transition-colors"
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
              className="text-sm font-semibold px-5 py-2 rounded-full
                         bg-[var(--color-accent)] text-[#0a0a0f]
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
