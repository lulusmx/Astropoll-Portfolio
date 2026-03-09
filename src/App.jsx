import { useState, useEffect } from 'react'
import './App.css'
import Overview from './Overview.jsx'
import Photography from './Photography.jsx'
import Clothes from './Clothes.jsx'
import Hirondelles from './Hirondelles.jsx'
import Artefacts from './Furnitures.jsx'
import Project from './Project.jsx'
import FutureProject from './FutureProject.jsx'
import Contact from './Contact.jsx'
import Inner from './Inner.jsx'

const navLinks = [
  { label: 'Overview', page: 'overview' },
  { label: 'Photography', page: 'photography' },
  { label: 'Collectible', page: 'clothes' },
  { label: 'Project', page: 'project' },
  { label: 'CV + Contact', page: 'contact' },
]

const navLinksInner = [
  { label: 'Overview', page: 'overview' },
  { label: 'Photography', page: 'photography' },
  { label: 'Hirondelles', page: 'hirondelles' },
  { label: 'Artefacts', page: 'artefacts' },
  { label: 'Collectible', page: 'clothes' },
  { label: 'Project', page: 'project' },
  { label: 'CV + Contact', page: 'contact' },
]

function App() {
  const [page, setPage] = useState('home')
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const formattedDate = now.toLocaleDateString('fr-FR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).replaceAll('/', '.')

  const formattedTime = now.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  const goHome = () => setPage('home')
  const goBackRandom = () => setPage(Math.random() < 0.5 ? 'home' : 'inner')

  if (page === 'inner') return <Inner onBack={goHome} navLinks={navLinksInner} onNavigate={setPage} formattedTime={formattedTime} />
  if (page === 'overview') return <Overview onBack={goBackRandom} onNavigate={setPage} />
  if (page === 'photography') return <Photography onBack={goBackRandom} onNavigate={setPage} />
  if (page === 'hirondelles') return <Hirondelles onBack={goBackRandom} onNavigate={setPage} />
  if (page === 'artefacts') return <Artefacts onBack={goBackRandom} onNavigate={setPage} />
  if (page === 'clothes') return <Clothes onBack={goBackRandom} onNavigate={setPage} />
  if (page === 'project') return <Project onBack={goBackRandom} onNavigate={setPage} />
  if (page === 'future-project') return <FutureProject onBack={() => setPage('project')} onNavigate={setPage} />
  if (page === 'contact') return <Contact onBack={goBackRandom} onNavigate={setPage} />

  return (
    <main className="homepage">
      {/* Background photo */}
      <div className="homepage__bg">
        <img src="/images/font.jpeg" alt="" loading="eager" draggable={false} />
      </div>

      {/* Overlay content */}
      <div className="homepage__overlay">
        {/* Top section */}
        <header className="homepage__top">
          {/* Left — Title */}
          <button
            type="button"
            className="homepage__title-block"
            onClick={() => setPage('inner')}
            aria-label="Ouvrir Inner"
          >
            <span className="homepage__date">{formattedDate}</span>
            <h1 className="homepage__title" data-text="Inner">Inner</h1>
          </button>

          {/* Right — Name + Navigation */}
          <div className="homepage__right">
            <div className="homepage__name-row">
              <h2 className="homepage__name">Paul Thomas</h2>
            </div>
            <nav className="homepage__nav">
              {navLinks.map(({ label, page: p }) => (
                <a
                  key={p}
                  href={`#${p}`}
                  onClick={(e) => {
                    e.preventDefault()
                    setPage(p)
                  }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Bottom section */}
        <footer className="homepage__bottom">
          <a className="homepage__shop" href="https://hirondelles.online/" target="_blank" rel="noopener noreferrer">
            Shop
          </a>

        </footer>
      </div>

      {/* Reticule logo */}
      <div className="homepage__logo">
        <img src="/images/Reticule@3x.png" alt="Reticule" draggable={false} />
      </div>
    </main>
  )
}

export default App
