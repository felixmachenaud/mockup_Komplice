import { restaurant } from '../data/restaurantData'
import LogoMark from './LogoMark'
import StarRating from './StarRating'
import { useLanguage } from '../context/LanguageContext'
import { ContainerScroll } from './ui/ContainerScrollAnimation'
import './Hero.css'

export default function Hero({ onOpenCarte, onOpenBooking }) {
  const { t } = useLanguage()

  return (
    <section className="hero hero--landing" aria-label="Accueil">
      <div className="hero__landing">
        <div className="hero__logo-wrap">
          <LogoMark variant="landing" animate />
        </div>

        <div className="hero__building">
          <ContainerScroll
          titleComponent={
            <h1 className="hero__title">Les Komplices</h1>
          }
          middleComponent={
            <div className="hero__cta-row">
              <button
                type="button"
                className="hero__cta hero__cta--dark"
                onClick={onOpenCarte}
              >
                {t.hero.ctaMenu}
              </button>
              <button
                type="button"
                className="hero__cta hero__cta--light"
                onClick={onOpenBooking}
              >
                {t.hero.ctaBook}
              </button>
            </div>
          }
          >
            <img
              src={restaurant.heroImage}
              alt="Façade du restaurant Les Komplices, 55 Rue des Mathurins, Paris 8e"
              width={1486}
              height={1059}
              fetchPriority="high"
              draggable={false}
            />
          </ContainerScroll>

          <p className="hero__address">
            55 Rue des Mathurins, Paris
            <span className="hero__address-sep" aria-hidden="true"> — </span>
            <a href="#avis" className="hero__reviews-link">
              <StarRating size="sm" />
              <span>{t.hero.reviewCount}</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
