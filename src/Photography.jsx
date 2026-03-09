import { useState, useEffect } from 'react'
import './Page.css'

function flattenCameraPhotos(sections) {
  const flat = []
  sections.forEach((section) => {
    section.photos.forEach((item) => {
      if (item.row) item.row.forEach((p) => flat.push(p))
      else flat.push({ src: item.src, alt: item.alt })
    })
  })
  return flat
}

function Photography({ onBack, onNavigate }) {
  const [view, setView] = useState('main')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const [poiscailleGreen, setPoiscailleGreen] = useState(false)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex])

  if (view === 'phone') {
    const phonePhotos = [
      { src: '/images/phone-11.webp', alt: 'Palmiers tropical' },
      { src: '/images/phone-12.webp', alt: 'Mobylette' },
      { src: '/images/phone-14.webp', alt: 'Salle de bain vue jardin' },
      { src: '/images/phone-6.webp', alt: 'Photo 6' },
      { src: '/images/phone-10.webp', alt: 'Photo 10' },
      { src: '/images/phone-8.webp', alt: 'Photo 8' },
      { src: '/images/phone-9.webp', alt: 'Photo 9' },
      { src: '/images/phone-7.webp', alt: 'Photo 7' },
      { src: '/images/phone-13.webp', alt: 'Poubelles plage' },
      { src: '/images/phone-2.webp', alt: 'Photo 2' },
      { src: '/images/phone-3.webp', alt: 'Photo 3' },
      { src: '/images/phone-5.webp', alt: 'Photo 5' },
      { src: '/images/phone-4.webp', alt: 'Photo 4' },
      { src: '/images/phone-1.webp', alt: 'Photo 1' },
      { src: '/images/phone-16.webp', alt: 'Deux chats' },
      { src: '/images/phone-17.webp', alt: 'Street art timbres' },
      { src: '/images/phone-18.webp', alt: 'Cour carrelage' },
      { src: '/images/phone-19.webp', alt: 'Passage végétation' },
      { src: '/images/phone-20.webp', alt: 'Arbre ciel bleu' },
      { src: '/images/phone-21.webp', alt: 'Fenêtre à lamelles' },
      { src: '/images/phone-22.webp', alt: 'Mur jaune graffiti' },
      { src: '/images/phone-23.webp', alt: 'Vache et palmiers' },
      { src: '/images/phone-24.webp', alt: 'Plage personne dos' },
      { src: '/images/phone-25.webp', alt: 'Éclipse palmiers' },
      { src: '/images/phone-26.webp', alt: 'Coucher de soleil végétation' },
      { src: '/images/phone-27.webp', alt: 'Soleil horizon' },
      { src: '/images/phone-28.webp', alt: 'Structure verte échelle' },
      { src: '/images/phone-29.webp', alt: 'Côte mât turquoise' },
      { src: '/images/phone-30.webp', alt: 'Rue grille colonial' },
      { src: '/images/phone-31.webp', alt: 'Toit coucher de soleil' },
      { src: '/images/phone-32.webp', alt: 'Arbre palmier mer' },
      { src: '/images/phone-33.webp', alt: 'Marché fruits' },
      { src: '/images/phone-34.webp', alt: 'Coucher de soleil toit palmiers' },
    ]
    return (
      <div className="page page--scrollable page--phone">
        <button type="button" className="page__back page__back--title" onClick={() => setView('main')}>
          IPHONE
        </button>
        <button
          type="button"
          className="page__phone-decor-wrap"
          onClick={() => setPoiscailleGreen((v) => !v)}
          aria-label="Changer la couleur du poisson"
        >
          <img
            src="/images/poiscaille.webp"
            alt=""
            className={`page__phone-decor${poiscailleGreen ? ' page__phone-decor--green' : ''}`}
            aria-hidden="true"
            draggable={false}
          />
        </button>
        <div className="page__content page__content--phone-gallery">
          <div className="page__phone-grid">
            {phonePhotos.map(({ src, alt }, i) => (
              <div key={src + i} className="page__phone-grid-item">
                <img src={src} alt={alt} draggable={false} />
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="page__next" onClick={() => setView('camera')}>
          Next →
        </button>
      </div>
    )
  }

  if (view === 'camera') {
    const cameraSections = [
      {
        title: 'MANO. 2026 FEB',
        photos: [
          { src: '/images/camera-1-white-wall.webp', alt: 'Sur mur blanc' },
          { src: '/images/camera-2-brick.webp', alt: 'Mur brique' },
        ],
      },
      {
        title: 'MARVEL. 2026 JAN',
        photos: [
          { src: '/images/camera-3-marvel.webp', alt: 'MARVEL' },
          {
            row: [
              { src: '/images/camera-marvel2.webp', alt: 'MARVEL 2' },
              { src: '/images/camera-marvel3.webp', alt: 'MARVEL 3' },
            ],
          },
        ],
      },
      {
        title: 'PAPA. 2025 NOV',
        photos: [
          { src: '/images/camera-papa.webp', alt: 'PAPA' },
          {
            row: [
              { src: '/images/camera-papa2.webp', alt: 'PAPA 2' },
              { src: '/images/camera-papa3.webp', alt: 'PAPA 3' },
            ],
          },
          {
            row: [
              { src: '/images/camera-papa4.webp', alt: 'PAPA 4' },
              { src: '/images/camera-papa5.webp', alt: 'PAPA 5' },
            ],
          },
        ],
      },
      {
        title: 'FUEGO. 2025 NOV',
        photos: [
          { src: '/images/camera-fuego.webp', alt: 'FUEGO' },
          {
            row: [
              { src: '/images/camera-fuego2.webp', alt: 'FUEGO 2' },
              { src: '/images/camera-fuego3.webp', alt: 'FUEGO 3' },
            ],
          },
        ],
      },
      {
        title: 'MANO. 2025 OCT',
        photos: [
          { src: '/images/camera-mano-oct.webp', alt: 'MANO OCT' },
          {
            row: [
              { src: '/images/camera-mano-oct2.webp', alt: 'MANO OCT 2' },
              { src: '/images/camera-mano-oct3.webp', alt: 'MANO OCT 3' },
            ],
          },
          {
            row: [
              { src: '/images/camera-mano-oct4.webp', alt: 'MANO OCT 4' },
              { src: '/images/camera-mano-oct5.webp', alt: 'MANO OCT 5' },
            ],
          },
        ],
      },
      {
        title: 'ZAK. 2025 OCT',
        photos: [
          { src: '/images/camera-zak.webp', alt: 'ZAK' },
          { src: '/images/camera-zak2.webp', alt: 'ZAK 2' },
          {
            row: [
              { src: '/images/camera-zak3.webp', alt: 'ZAK 3' },
              { src: '/images/camera-zak4.webp', alt: 'ZAK 4' },
            ],
          },
          { src: '/images/camera-zak5.webp', alt: 'ZAK 5' },
          { src: '/images/camera-zak6.webp', alt: 'ZAK 6' },
        ],
      },
    ]
    const flatPhotos = flattenCameraPhotos(cameraSections)
    let photoIndex = 0
    return (
      <div className="page page--scrollable">
        <button type="button" className="page__back page__back--title" onClick={() => { setView('main'); setLightboxIndex(null) }}>
          le machin
        </button>
        <div className="page__content page__content--gallery">
          <div className="page__gallery">
            {cameraSections.map(({ title, photos }, sectionIndex) => (
              <div key={title} className={`page__gallery-section${sectionIndex > 0 ? ' page__gallery-section--spaced' : ''}`}>
                <p className="page__gallery-title">{title}</p>
                {photos.map((item, i) => {
                  if (item.row) {
                    const startIdx = photoIndex
                    photoIndex += item.row.length
                    return (
                      <div key={`row-${i}`} className="page__gallery-row">
                        {item.row.map(({ src, alt }, j) => (
                          <div
                            key={src + j}
                            className="page__gallery-item page__gallery-item--half page__gallery-item--clickable"
                            onClick={() => setLightboxIndex(startIdx + j)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxIndex(startIdx + j) } }}
                            aria-label="Agrandir la photo"
                          >
                            <img src={src} alt={alt} draggable={false} />
                          </div>
                        ))}
                      </div>
                    )
                  }
                  const currentIdx = photoIndex
                  photoIndex += 1
                  return (
                    <div
                      key={item.src + i}
                      className="page__gallery-item page__gallery-item--clickable"
                      onClick={() => setLightboxIndex(currentIdx)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setLightboxIndex(currentIdx) } }}
                      aria-label="Agrandir la photo"
                    >
                      <img src={item.src} alt={item.alt} draggable={false} />
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="page__next" onClick={() => onNavigate?.('clothes')}>
          Next →
        </button>
        {lightboxIndex !== null && flatPhotos.length > 0 && (
          <div
            className="page__lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo en grand"
            onClick={(e) => { if (e.target === e.currentTarget) setLightboxIndex(null) }}
          >
            <button type="button" className="page__lightbox-close" onClick={() => setLightboxIndex(null)} aria-label="Fermer" />
            <button type="button" className="page__lightbox-arrow page__lightbox-arrow--left" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + flatPhotos.length) % flatPhotos.length) }} aria-label="Photo précédente" />
            <div className="page__lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
              <img src={flatPhotos[lightboxIndex].src} alt={flatPhotos[lightboxIndex].alt} draggable={false} className="page__lightbox-img" />
            </div>
            <button type="button" className="page__lightbox-arrow page__lightbox-arrow--right" onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % flatPhotos.length) }} aria-label="Photo suivante" />
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="page page--scrollable">
      <button type="button" className="page__back page__back--title" onClick={onBack}>
        PHOTOGRAPHY
      </button>
      <div className="page__content page__content--center">
        <div className="page__photo-wrap">
          <button type="button" className="page__photo-zone page__photo-zone--left" aria-label="Ouvrir la page Smartphone" onClick={() => setView('phone')}>
            <img src="/images/photography-menu.webp" alt="" className="page__photo-half page__photo-half--left" draggable={false} />
          </button>
          <button type="button" className="page__photo-zone page__photo-zone--right" aria-label="Ouvrir la page Appareil photo" onClick={() => setView('camera')}>
            <img src="/images/appareil-photo.webp" alt="Appareil photo" className="page__photo-half page__photo-half--right page__photo-half--icon" draggable={false} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Photography
