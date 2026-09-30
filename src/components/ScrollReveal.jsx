import { useInView } from '../hooks/useInView'

export default function ScrollReveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, isInView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`reveal ${isInView ? 'is-shown' : ''} ${className}`}
      style={{ '--d': delay }}
    >
      {children}
    </Tag>
  )
}
