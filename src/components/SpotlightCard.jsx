import { useCallback } from 'react'

export default function SpotlightCard({ children, className = '', ...props }) {
  const handleMouse = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <div
      onMouseMove={handleMouse}
      className={`spotlight glass-panel rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
