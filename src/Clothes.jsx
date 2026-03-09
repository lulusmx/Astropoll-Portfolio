import { useState, useEffect, useCallback } from 'react'
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
  const [index, setIndex] = useState(0)

  const prev = useCallback(() => {
    setIndex(i => (i - 1 + clothesPhotos.length) % clothesPhotos.length)
  }, [])

  const next = useCallback(() => {
    setIndex(i => (i + 1) % clothesPhotos.length)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  const prevIndex = (index - 1 + clothesPhotos.length) % clothesPhotos.length
  const nextIndex = (index + 1) % clothesPhotos.length

  return (
    <div className="page page--clothes page--scrollable">
      <button type="button" className="page__back page__back--logo" onClick={onBack} aria-label="Retour à l'accueil">
        <img src="/images/logo-hirondelles.png" alt="Hirondelles" draggable={false} />
      </button>

      <div className="page__clothes-slider">
        {/* Item gauche — flou */}
        <div
          className={`page__clothes-slider-item page__clothes-slider-item--side page__clothes-slider-item--left${clothesPhotos[prevIndex].whiteBg ? ' page__clothes-slider-item--white' : ''}`}
          onClick={prev}
          role="button"
          tabIndex={0}
          aria-label="Vêtement précédent"
        >
          <img src={clothesPhotos[prevIndex].src} alt="" draggable={false} />
        </div>

        <div className="page__clothes-slider-center">
          <button
            type="button"
            className="page__clothes-slider-arrow page__clothes-slider-arrow--prev"
            onClick={prev}
            aria-label="Vêtement précédent"
          >←</button>

          <div
            key={index}
            className={`page__clothes-slider-item page__clothes-slider-item--active${clothesPhotos[index].whiteBg ? ' page__clothes-slider-item--white' : ''}`}
          >
            <img src={clothesPhotos[index].src} alt={clothesPhotos[index].alt} draggable={false} />
          </div>

          <button
            type="button"
            className="page__clothes-slider-arrow page__clothes-slider-arrow--next"
            onClick={next}
            aria-label="Vêtement suivant"
          >→</button>
        </div>

        {/* Item droite — flou */}
        <div
          className={`page__clothes-slider-item page__clothes-slider-item--side page__clothes-slider-item--right${clothesPhotos[nextIndex].whiteBg ? ' page__clothes-slider-item--white' : ''}`}
          onClick={next}
          role="button"
          tabIndex={0}
          aria-label="Vêtement suivant"
        >
          <img src={clothesPhotos[nextIndex].src} alt="" draggable={false} />
        </div>
      </div>

      <button type="button" className="page__next" onClick={() => onNavigate?.('project')}>
        Next →
      </button>
    </div>
  )
}

export default Clothes
