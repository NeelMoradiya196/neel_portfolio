export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-10">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-mono text-[var(--color-muted)]">
          Designed and built by Neel Moradiya · 2026
        </p>
        <div className="flex items-center gap-6">
          {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-xs font-mono text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
