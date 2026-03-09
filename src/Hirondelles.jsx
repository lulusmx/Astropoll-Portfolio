import { useState } from 'react'
import './Page.css'

const rawDelays = [0, 0.08, 0.22, 0.45, 0.6, 0.13, 0.85, 0.35, 1.1, 0.05, 0.75, 1.4, 0.5, 0.18, 0.95, 1.25, 0.3, 1.6]
const rawLefts = [9, 18, 31, 42, 55, 67, 78, 24, 48, 63, 14, 72, 38, 85, 6, 52, 29, 44]
const rawRotates = [-10, 8, -5, 11, -14, 3, 9, -8, 14, -3, 7, -11, 5, -7, 12, -2, 6, -9]
const rawDrifts = [-3, 2, -5, 4, 1, -2, 5, -4, 3, -1, 4, -3, 2, -5, 1, 3, -2, 4]
const rawSizes = [30, 26, 34, 28, 32, 24, 36, 30, 28, 34, 26, 32, 30, 28, 36, 24, 34, 30]

const BIRDS_COUNT = rawDelays.length

const birdProps = Array.from({ length: BIRDS_COUNT }, (_, i) => ({
  left: `${rawLefts[i]}%`,
  delay: `${rawDelays[i]}s`,
  rotate: `${rawRotates[i]}deg`,
  drift: `${rawDrifts[i]}vw`,
  size: `${rawSizes[i]}px`,
}))

const hirondellesText = `Hirondelles was born in my mind before anything else.
It is a perception of beauty, a message of freedom. I wanted it to feel the way a scent feels, something invisible yet powerful, something that reaches you before you can name it.
It is like waking before everyone else, on a day when the sun is just beginning to rise.
Like the trembling anticipation you feel before seeing someone you cherish.
Like stretching your arms out of a moving car and feeling the air rush through your hands.
It is the relief of drinking a glass of water after long exertion.
It is the same intensity as making love to the one you love
and at the same time, the instinctive surge that saves you from a fatal fall.
Hirondelles is all of this at once:
a breath of freedom,
a fragile and powerful reminder
that to feel deeply is to be alive.`

function Hirondelles({ onBack, onNavigate }) {
  const [showBirds, setShowBirds] = useState(false)

  const handleLogoClick = () => {
    setShowBirds(true)
    setTimeout(() => setShowBirds(false), 3800)
  }

  return (
    <div className="page page--scrollable page--hirondelles">
      <button type="button" className="page__back page__back--logo page__back--logo-hirondelles" onClick={handleLogoClick} aria-label="Faire apparaître les hirondelles">
        <img src="/images/logo-hirondelles-text.webp" alt="Hirondelles" draggable={false} />
      </button>
      {showBirds && (
        <div className="page__hirondelles-birds" aria-hidden="true">
          {birdProps.map((bird, i) => (
            <div
              key={i}
              className="page__hirondelles-bird"
              style={{
                left: bird.left,
                animationDelay: bird.delay,
                '--drift': bird.drift,
                '--rotate': bird.rotate,
                '--bird-size': bird.size,
              }}
            >
              <img src="/images/hirondelle-silhouette.webp" alt="" draggable={false} className="page__hirondelles-bird-img" />
            </div>
          ))}
        </div>
      )}
      <div className="page__content">
        <blockquote className="page__hirondelles-text">
          {hirondellesText}
        </blockquote>
        <img
          src="/images/logo-hirondelles-emblem.webp"
          alt=""
          className="page__hirondelles-logo"
          draggable={false}
        />
      </div>
      <button type="button" className="page__next" onClick={() => onNavigate?.('clothes')}>
        Next →
      </button>
    </div>
  )
}

export default Hirondelles
