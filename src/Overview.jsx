import { useState, useEffect, useRef } from 'react'
import './Overview.css'

const overviewItems = [
  { src: '/images/overview-1-hirondelles-airport.webp', label: 'Hirondelles Airport' },
  { src: '/images/overview-we-our-children.webp', label: 'Ride Carefully' },
  { src: '/images/overview-fleches-direction.webp', label: 'Direction' },
  { src: '/images/overview-direction-fire.webp', label: 'Arrondeille Fire Dept' },
  { src: '/images/overview-hirondelles-fire.webp', label: 'Hirondelles Fire Dept' },
  { src: '/images/overview-main-st-hirondelles.webp', label: 'H Main St' },
  { src: '/images/overview-h-square.webp', label: 'H Square' },
  { src: '/images/overview-roue-moto.webp', label: 'Roue moto' },
  { src: '/images/overview-emblem-ailes.webp', label: 'Emblem ailes' },
  { src: '/images/overview-lirondelles.webp', label: 'Lirondelles' },
  { src: '/images/overview-a-stylise.webp', label: 'A stylisé' },
  { src: '/images/overview-avion.webp', label: 'Avion' },
  { src: '/images/overview-big-board.webp', label: 'The Big Board' },
  { src: '/images/overview-for-free-ppl.webp', label: 'For Free PPL' },
  { src: '/images/overview-avenue-hirondelles.webp', label: 'Avenue des Hirondelles' },
  { src: '/images/overview-roue-rotiform.webp', label: 'Roue Rotiform' },
]

// Dérive douce et désintégration légère par item
const flyProps = overviewItems.map(() => ({
  tx: `${(Math.random() - 0.5) * 28}vw`,
  ty: `${(Math.random() - 0.5) * 22}vh`,
  rot: `${(Math.random() - 0.5) * 30}deg`,
  dur: `${5 + Math.random() * 5}s`,
  delay: `${Math.random() * 3}s`,
}))

const IDLE_DELAY = 4000

function Overview({ onBack, onNavigate }) {
  const [idle, setIdle] = useState(false)
  const timerRef = useRef(null)

  const resetIdle = () => {
    setIdle(false)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setIdle(true), IDLE_DELAY)
  }

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'touchstart', 'scroll', 'click']
    events.forEach(e => window.addEventListener(e, resetIdle))
    timerRef.current = setTimeout(() => setIdle(true), IDLE_DELAY)
    return () => {
      events.forEach(e => window.removeEventListener(e, resetIdle))
      clearTimeout(timerRef.current)
    }
  }, [])

  return (
    <div className={`ov${idle ? ' ov--idle' : ''}`}>
      <button type="button" className="ov__back" onClick={onBack}>
        OVERVIEW
      </button>

      <div className="ov__carousel">
        <div className="ov__track">
          {overviewItems.map(({ src, label }, i) => (
            <div
              className="ov__slide"
              key={`${label}-${i}`}
              style={{
                '--tx': flyProps[i].tx,
                '--ty': flyProps[i].ty,
                '--rot': flyProps[i].rot,
                '--dur': flyProps[i].dur,
                '--delay': flyProps[i].delay,
              }}
            >
              <div className="ov__slide-img">
                <img src={src} alt={label} draggable={false} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="ov__next"
        onClick={() => onNavigate?.('photography')}
      >
        Next →
      </button>
    </div>
  )
}

export default Overview
