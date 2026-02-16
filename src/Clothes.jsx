import './Page.css'

function Clothes({ onBack }) {
  return (
    <div className="page">
      <button type="button" className="page__back page__back--title" onClick={onBack}>
        CLOTHES
      </button>
      <div className="page__content">
        <p className="page__intro">Section vêtements et mode.</p>
      </div>
    </div>
  )
}

export default Clothes
