import './Page.css'

function Contact({ onBack }) {
  return (
    <div className="page">
      <button type="button" className="page__back page__back--title" onClick={onBack}>
        CV + CONTACT
      </button>
      <div className="page__content">
        <p className="page__intro">Curriculum vitae et coordonnées.</p>
      </div>
    </div>
  )
}

export default Contact
