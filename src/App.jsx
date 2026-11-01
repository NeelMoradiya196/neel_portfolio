import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Intro from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

const pages = { intro: Intro, skills: Skills, projects: Projects, experience: Timeline, about: About, contact: Contact }
const getRoute = () => {
  const r = location.hash.replace(/^#\/?/, '')
  return r in pages ? r : 'intro'
}

export default function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute())
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    const name = route === 'intro' ? 'Data Science & ML' : route[0].toUpperCase() + route.slice(1)
    document.title = `Neel Moradiya - ${name}`
  }, [route])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    let id
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])

  const Page = pages[route]
  return (
    <>
      <Nav route={route} />
      <main key={route} className="page">
        <Page />
      </main>
      <Footer />
    </>
  )
}
