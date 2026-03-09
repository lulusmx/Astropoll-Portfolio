import './Page.css'

function Artefacts({ onBack, onNavigate }) {
  return (
    <div className="page page--artefacts">
      <button type="button" className="page__back page__back--title" onClick={onBack}>
        Artefacts
      </button>
      <div className="page__content page__content--center">
        <img
          src="/images/artefact-tableau.webp"
          alt="Lou & Paul — Less morose more present"
          className="page__artefact-img"
          draggable={false}
        />
      </div>
      <button type="button" className="page__next" onClick={() => onNavigate?.('clothes')}>
        Next →
      </button>
    </div>
  )
}

export default Artefacts
