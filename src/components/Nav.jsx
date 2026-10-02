import { useState, useEffect } from 'react'
import { List, X, FileText, Sparkle } from '@phosphor-icons/react'
import ThemeToggle from './ThemeToggle'

const leftLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
]

const rightLinks = [
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Left item: Amber badge icon (like Vibram logo badge) */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="size-11 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
            aria-label="Home"
          >
            <Sparkle size={20} weight="fill" />
          </a>

          {/* Left links (Desktop) */}
          <div className="hidden lg:flex items-center gap-7">
            {leftLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold tracking-wide text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors lowercase"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Brand Name (Vibram style) */}
        <a
          href="#"
          className="text-3xl sm:text-4xl font-extrabold tracking-wider text-[var(--color-ink)]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          NEEL MORADIYA
        </a>

        {/* Right item: Links + Actions */}
        <div className="flex items-center gap-6">
          {/* Right links (Desktop) */}
          <div className="hidden lg:flex items-center gap-7">
            {rightLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold tracking-wide text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors lowercase"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Amber Resume Pill Button (like Vibram cart button) */}
            <a
              href="/resume/Neel_Moradiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="size-10 sm:w-auto sm:px-5 sm:py-2.5 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:opacity-95 active:scale-95 transition-all"
              title="Download Resume"
            >
              <FileText size={16} weight="bold" />
              <span className="hidden sm:inline">Resume</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden size-10 rounded-full border border-[var(--color-line)] bg-[var(--color-surface)] flex items-center justify-center cursor-pointer"
              aria-label="Toggle navigation"
            >
              {open ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-[var(--color-surface)] border-b border-[var(--color-line)] px-6 py-6 space-y-4 shadow-xl">
          {[...leftLinks, ...rightLinks].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-bold tracking-wide text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-4 border-t border-[var(--color-line)] flex items-center justify-between">
            <span className="text-sm text-[var(--color-muted)]">Data Science & ML</span>
            <a
              href="/resume/Neel_Moradiya_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold uppercase tracking-wider"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
