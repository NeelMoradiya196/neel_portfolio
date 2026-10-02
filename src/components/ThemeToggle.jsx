import { useState, useEffect } from 'react'
import { Sun, Moon } from '@phosphor-icons/react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') {
      setDark(false)
      document.documentElement.classList.add('tone-light')
    } else if (!saved) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDark(prefersDark)
      if (!prefersDark) document.documentElement.classList.add('tone-light')
    }
  }, [])

  const toggle = () => {
    setDark((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.remove('tone-light')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.add('tone-light')
        localStorage.setItem('theme', 'light')
      }
      return next
    })
  }

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative size-9 flex items-center justify-center rounded-full
                 border border-[var(--color-line)] hover:border-[var(--color-accent)]
                 transition-colors duration-300 cursor-pointer"
    >
      {dark ? <Sun size={18} weight="bold" /> : <Moon size={18} weight="bold" />}
    </button>
  )
}
