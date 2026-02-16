import { useState, useEffect } from 'react'
import './App.css'
import Overview from './Overview.jsx'

const navLinks = [
  { label: 'Overview', page: 'overview' },
  { label: 'Photography', page: 'photography' },
  { label: 'Clothes', page: 'clothes' },
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

  if (page === 'overview') {
    return <Overview onBack={() => setPage('home')} />
  }

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
          <div className="homepage__title-block">
            <span className="homepage__date">{formattedDate}</span>
            <h1 className="homepage__title" data-text="Inner">Inner</h1>
          </div>

          {/* Right — Name + Navigation */}
          <div className="homepage__right">
            <div className="homepage__name-row">
              <span className="homepage__subtitle">{formattedTime}</span>
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
