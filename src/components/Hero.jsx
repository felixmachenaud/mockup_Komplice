import { restaurant } from '../data/restaurantData'
import './Hero.css'

export default function Hero({ scrollProgress }) {
  const imageScale = 1 + scrollProgress * 0.08
  const titleOpacity = 1 - scrollProgress * 1.4
  const titleY = scrollProgress * -60
  const overlayOpacity = 0.25 + scrollProgress * 0.35

  return (
    <section className="hero" aria-label="Accueil">
      <div className="hero__sticky">
        <div
          className="hero__media"
          style={{ transform: `scale(${imageScale})` }}
        >
          <img
            src={restaurant.heroImage}
            alt="Intérieur du restaurant Les Komplices"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div
            className="hero__overlay"
            style={{ opacity: overlayOpacity }}
            aria-hidden="true"
          />
        </div>

        <div className="hero__content">
          <h1
            className="hero__title"
            style={{
              opacity: Math.max(titleOpacity, 0),
              transform: `translateY(${titleY}px)`,
            }}
          >
            Les Komplices
          </h1>
        </div>
      </div>

      <div className="hero__spacer" aria-hidden="true" />
    </section>
  )
}
