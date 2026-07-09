import { useEffect, useRef } from 'react'
import { useInView } from '../hooks/useInView'
import { useImageReveal } from '../hooks/useScrollEffects'
import { useLanguage } from '../context/LanguageContext'
import './SignatureDish.css'

export default function SignatureDish({ dish, index }) {
  const { t } = useLanguage()
  const dishText = t.dishes[index]
  const [ref, isInView] = useInView({ threshold: 0.12 })
  const imageWrapRef = useRef(null)
  const parallaxRef = useRef(null)
  const reveal = useImageReveal(imageWrapRef)
  const isReversed = index % 2 === 1
  const number = String(dish.id).padStart(2, '0')
  const brightness = 0.68 + reveal * 0.32
  const overlayOpacity = (1 - reveal) * 0.32

  useEffect(() => {
    if (!parallaxRef.current) return

    const onScroll = () => {
      const el = parallaxRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      const center = rect.top + rect.height / 2
      const offset = (center - windowH / 2) / windowH
      const parallax = Math.max(Math.min(offset * 20, 20), -20)
      el.style.transform = `translateY(${parallax}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <article
      className={`dish ${isReversed ? 'dish--reversed' : ''}`}
      ref={ref}
    >
      <div className="dish__inner container">
        <div className={`dish__text reveal ${isInView ? 'is-visible' : ''}`}>
          <p className="dish__number label">
            N° {number} / {dishText.category}
          </p>

          <h2 className="dish__name">
            {dishText.name}
            {dishText.subtitle && (
              <em className="dish__subtitle">{dishText.subtitle}</em>
            )}
          </h2>

          <p className="dish__description">{dishText.description}</p>

          <div className="dish__meta">
            <div className="dish__meta-block">
              <p className="label dish__meta-label">{t.dish.ingredients}</p>
              <ul className="dish__ingredients">
                {dishText.ingredients.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>

            {dishText.allergens && (
              <div className="dish__meta-block">
                <p className="label dish__meta-label">{t.dish.allergens}</p>
                <p className="dish__allergens">{dishText.allergens}</p>
              </div>
            )}
          </div>

          <p className="dish__price">{dish.price}</p>
        </div>

        <div
          className={`dish__image-wrap reveal-image ${isInView ? 'is-visible' : ''}`}
          ref={parallaxRef}
        >
          <div className="dish__image-circle" ref={imageWrapRef}>
            <img
              src={dish.image}
              alt={`${dishText.name} ${dishText.subtitle || ''}`}
              width={900}
              height={900}
              loading="lazy"
              className="dish__image"
              style={{
                filter: `brightness(${brightness})`,
                objectPosition: dish.imagePosition || '50% 55%',
              }}
            />
            <div
              className="dish__image-veil"
              style={{ opacity: overlayOpacity }}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </article>
  )
}
