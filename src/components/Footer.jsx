export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-12">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-[var(--color-muted)]">
          Designed and built by Neel Patel. 2026.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-xs font-mono text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-xs font-mono text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-xs font-mono text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="text-xs font-mono text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="text-xs font-mono text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
