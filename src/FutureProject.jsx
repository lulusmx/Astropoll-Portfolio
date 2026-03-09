import './Page.css'

function FutureProject({ onBack, onNavigate }) {
  return (
    <div className="page page--future-project">
      <button type="button" className="page__back page__back--title" onClick={onBack}>
        Future project
      </button>
      <div className="page__content page__content--center">
        <img
          src="/images/future-project-colis.png"
          alt=""
          className="page__future-project-img"
          draggable={false}
        />
        <p className="page__future-project-subtitle">RACING CHAIR  -  2026</p>
      </div>
      <button type="button" className="page__next" onClick={() => onNavigate?.('contact')}>
        Next →
      </button>
    </div>
  )
}

export default FutureProject
