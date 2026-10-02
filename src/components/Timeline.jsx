import ScrollReveal from './ScrollReveal'
import { useInView } from '../hooks/useInView'

const events = [
  {
    period: 'Present',
    title: 'RehabTrack - Wearable Rehabilitation Device',
    org: 'KJ Somaiya Medical College (Collaboration)',
    description:
      'Building a wearable device for physiotherapy rehabilitation in collaboration with HOD. Combining IMU sensors, real-time motion tracking, and ML-based progress analysis.',
  },
  {
    period: 'Present',
    title: 'Data Science & Machine Learning Research',
    org: 'Independent & Academic Projects',
    description:
      'Developing computer vision and deep learning pipelines, exploring real-world datasets with statistical methods, and building intelligent predictive systems.',
  },
  {
    period: 'Ongoing',
    title: 'B.Tech Information Technology',
    org: 'KJ Somaiya Institute of Technology',
    description:
      'Focused coursework in data structures, algorithms, machine learning, database systems, and statistical mathematics.',
  },
]

function TimelineItem({ event, index }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-[2rem_1fr] gap-4 pb-10 last:pb-0 ${isInView ? 'is-shown' : ''}`}
    >
      {/* Dot + Line */}
      <div className="flex flex-col items-center">
        <div className="timeline-dot size-3.5 rounded-full border-2 border-[var(--color-line)] bg-[var(--color-paper)] mt-1.5 shrink-0" />
        <div className="w-px flex-1 bg-[var(--color-line)] mt-2" />
      </div>

      {/* Content */}
      <div>
        <span className="text-xs font-mono uppercase tracking-wide text-[var(--color-accent)]">
          {event.period}
        </span>
        <h3 className="text-base font-semibold mt-1">{event.title}</h3>
        <p className="text-sm text-[var(--color-muted)] mt-0.5">{event.org}</p>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mt-2">
          {event.description}
        </p>
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="experience" className="py-10 md:py-12">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Experience</h2>
        </ScrollReveal>

        <div className="mt-10 max-w-xl">
          {events.map((event, i) => (
            <TimelineItem key={event.title} event={event} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
