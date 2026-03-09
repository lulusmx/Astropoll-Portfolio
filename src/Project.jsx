import { useState } from 'react'
import './Page.css'

function Project({ onBack, onNavigate }) {
  const [transitionToCollectible, setTransitionToCollectible] = useState(false)

  const handleCreationClick = () => {
    setTransitionToCollectible(true)
    setTimeout(() => {
      onNavigate?.('clothes')
      setTransitionToCollectible(false)
    }, 900)
  }

  return (
    <div className="page">
      <button type="button" className="page__back page__back--title" onClick={onBack}>
        PROJECT
      </button>
      <div className="page__content page__content--center">
        <div className="page__project-icons">
          <button
            type="button"
            className="page__project-icon-wrap"
            onClick={handleCreationClick}
          >
            <img src="/images/icon-creation.webp" alt="" className="page__project-icon" draggable={false} />
          </button>
          <button
            type="button"
            className="page__project-icon-wrap"
            onClick={() => onNavigate?.('future-project')}
          >
            <img src="/images/icon-recyclage.webp" alt="" className="page__project-icon" draggable={false} />
          </button>
        </div>
      </div>

      {transitionToCollectible && (
        <div className="page__transition-overlay">
          <img
            src="/images/icon-creation.webp"
            alt=""
            className="page__transition-icon"
            draggable={false}
          />
        </div>
      )}
    </div>
  )
}

export default Project
