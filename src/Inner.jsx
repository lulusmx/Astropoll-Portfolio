import { useState } from 'react'
import './Page.css'

// Positions calées sur la disposition de l'image d'origine (boulons-vis.png)
const BOLTS = [
  { img: '/images/boulon-0-ecrou.png',     size: '5vw',  top: '5vw',   left: '-2.5vw', dur: '0.9s'  },
  { img: '/images/boulon-1-vis-croix.png', size: '6.5vw',top: '4vw',   left: '7vw',    dur: '2.2s'  },
  { img: '/images/boulon-2-vis-plate.png', size: '7vw',  top: '11vw',  left: '8vw',    dur: '1.6s'  },
  { img: '/images/boulon-3-hex.png',       size: '6.5vw',top: '14vw',  left: '-7vw',   dur: '3s'    },
  { img: '/images/boulon-4-scie.png',      size: '9.5vw',top: '12.5vw',left: '17vw',   dur: '1.2s'  },
  { img: '/images/boulon-5-petite-vis.png',size: '4vw',  top: '22vw',  left: '-5.5vw', dur: '0.7s'  },
]

function Inner({ onBack, navLinks = [], onNavigate, formattedTime }) {
  const [isSpinning, setIsSpinning] = useState(false)
  const [boltSpin, setBoltSpin] = useState(() => BOLTS.map(() => false))

  const toggleBolt = (i) =>
    setBoltSpin(prev => prev.map((v, idx) => idx === i ? !v : v))

  return (
    <div className="page page--inner">
      <div className="page__inner-boulons">
        {BOLTS.map((b, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Faire tourner la pièce ${i + 1}`}
            className={`page__inner-boulon${boltSpin[i] ? ' page__inner-boulon--spinning' : ''}`}
            style={{ top: b.top, left: b.left, width: b.size, '--spin-dur': b.dur }}
            onClick={() => toggleBolt(i)}
          >
            <img src={b.img} alt="" draggable={false} />
          </button>
        ))}
      </div>
      <button
        type="button"
        className={`page__inner-embleme ${isSpinning ? 'page__inner-embleme--spinning' : ''}`}
        onClick={() => setIsSpinning((s) => !s)}
        aria-label={isSpinning ? 'Arrêter la rotation' : 'Faire tourner le médaillon'}
      >
        <img src="/images/embleme-inner.png" alt="" draggable={false} />
      </button>
      <img src="/images/ancre.png" alt="" className="page__inner-ancre" draggable={false} />
      <div className="page__content page__content--inner">
        {/* Gauche : catégories */}
        <nav className="page__inner-nav">
          {navLinks.map(({ label, page: p }) => (
            <button
              key={p}
              type="button"
              className="page__inner-nav-link"
              onClick={() => onNavigate?.(p)}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Droite : heure + titre plus petit + retour */}
        <div className="page__inner-right">
          {formattedTime != null && (
            <span className="page__inner-time">{formattedTime}</span>
          )}
          <button
            type="button"
            className="page__inner-title"
            onClick={onBack}
            aria-label="Retour à l'accueil"
          >
            Inner
          </button>
        </div>
      </div>
    </div>
  )
}

export default Inner
