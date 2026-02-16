import './Overview.css'

const logos = [
  { src: '/images/logo-b1.png', label: 'B1 — 1:1' },
  { src: '/images/logo-b2.png', label: 'B2 — 1:1' },
  { src: '/images/logo-b4.png', label: 'B4 — 1:1' },
  { src: '/images/logo-b3.png', label: 'B3 — 1:1' },
]

function Overview({ onBack }) {
  return (
    <div className="ov">
      <button type="button" className="ov__back" onClick={onBack}>
        OVERVIEW
      </button>

      <div className="ov__carousel">
        <div className="ov__track">
          {logos.map(({ src, label }) => (
            <div className="ov__slide" key={label}>
              <div className="ov__slide-img">
                <img src={src} alt={label} draggable={false} />
              </div>
              <span className="ov__slide-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Overview
