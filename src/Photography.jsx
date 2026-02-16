import './Page.css'

function Photography({ onBack }) {
  return (
    <div className="page">
      <button type="button" className="page__back page__back--title" onClick={onBack}>
        PHOTOGRAPHY
      </button>
      <div className="page__content">
        <p className="page__intro">Section dédiée à la photographie.</p>
      </div>
    </div>
  )
}

export default Photography
