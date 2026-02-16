import './Page.css'

function Project({ onBack }) {
  return (
    <div className="page">
      <button type="button" className="page__back page__back--title" onClick={onBack}>
        PROJECT
      </button>
      <div className="page__content">
        <p className="page__intro">Section projets et réalisations.</p>
      </div>
    </div>
  )
}

export default Project
