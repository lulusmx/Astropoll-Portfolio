import './Page.css'

const clothesPhotos = [
  { src: '/images/clothes-purple-tee.png', alt: 'Tee-shirt violet Hirondelles' },
  { src: '/images/clothes-orange-tee.png', alt: 'Tee-shirt orange Hirondelles' },
  { src: '/images/clothes-yellow-tee.png', alt: 'Tee-shirt jaune Hirondelles' },
  { src: '/images/clothes-scarf.png', alt: 'Écharpe Hirondelles' },
  { src: '/images/clothes-crazy-tee.png', alt: 'Tee-shirt blanc graphique' },
  { src: '/images/clothes-raglan-26.png', alt: 'Tee-shirt raglan 26 Rondelles', whiteBg: true },
  { src: '/images/clothes-staff-longsleeve.png', alt: 'Tee-shirt manches longues STAFF Hirondelles', whiteBg: true },
  { src: '/images/clothes-cap.png', alt: 'Casquette Hirondelles', whiteBg: true },
  { src: '/images/clothes-rugby.png', alt: 'Rugby Hirondelles', whiteBg: true },
  { src: '/images/clothes-polo-black.png', alt: 'Polo noir Hirondelles', whiteBg: true },
  { src: '/images/clothes-jeans.png', alt: 'Jeans délavés Hirondelles' },
]

function Clothes({ onBack, onNavigate }) {
  return (
    <div className="page page--clothes page--scrollable">
      <button type="button" className="page__back page__back--logo" onClick={onBack} aria-label="Retour à l'accueil">
        <img src="/images/logo-hirondelles.png" alt="Hirondelles" draggable={false} />
      </button>
      <div className="page__content page__content--clothes">
        <div className="page__clothes-col">
          {clothesPhotos.map(({ src, alt, whiteBg }, i) => (
            <div key={src + i} className={`page__clothes-item${whiteBg ? ' page__clothes-item--white-bg' : ''}`}>
              <img src={src} alt={alt} draggable={false} />
            </div>
          ))}
        </div>
      </div>
      <button type="button" className="page__next" onClick={() => onNavigate?.('project')}>
        Next →
      </button>
    </div>
  )
}

export default Clothes
