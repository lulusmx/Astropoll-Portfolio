import { useState, useEffect } from 'react'
import './Page.css'

function Contact({ onBack, onNavigate }) {
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    if (!expanded) return
    const onEscape = (e) => e.key === 'Escape' && setExpanded(false)
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [expanded])

  return (
    <div className="page page--scrollable page--contact">
      <button type="button" className="page__back page__back--title" onClick={onBack}>
        CV + CONTACT
      </button>
      <div className="page__content page__content--contact">
        <img
          src="/images/cv-paul-thomas.webp"
          alt="CV Paul Thomas"
          className="page__cv-img"
          draggable={false}
          onClick={() => setExpanded(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setExpanded(true)}
        />
      </div>
      <button type="button" className="page__next" onClick={() => onNavigate?.('overview')}>
        Next →
      </button>

      {expanded && (
        <div
          className="page__cv-overlay"
          onClick={() => setExpanded(false)}
          onKeyDown={(e) => e.key === 'Escape' && setExpanded(false)}
          role="button"
          tabIndex={0}
          aria-label="Fermer"
        >
          <img
            src="/images/cv-paul-thomas.webp"
            alt="CV Paul Thomas - vue agrandie"
            className="page__cv-img-expanded"
            onClick={(e) => e.stopPropagation()}
            draggable={false}
          />
        </div>
      )}
    </div>
  )
}

export default Contact
