import { restaurant } from '../data/restaurantData'
import LogoMark from './LogoMark'
import './Hero.css'

export default function Hero({ scrollProgress }) {
  const imageScale = 1 + scrollProgress * 0.08
  const titleOpacity = 1 - scrollProgress * 1.4
  const titleY = scrollProgress * -60
  const overlayOpacity = 0.44 + scrollProgress * 0.35

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
          <div
            className="hero__brand"
            style={{
              opacity: Math.max(titleOpacity, 0),
              transform: `translateY(calc(-6vh + ${titleY}px))`,
            }}
          >
            <h1 className="hero__title">Les Komplices</h1>
            <LogoMark variant="hero" />
          </div>
        </div>
      </div>

      <div className="hero__spacer" aria-hidden="true" />
    </section>
  )
}
