import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { restaurant } from '../data/restaurantData'
import './PracticalInfo.css'

export default function PracticalInfo({ onOpenBooking }) {
  const { t } = useLanguage()
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="infos" className="practical" ref={ref} aria-labelledby="practical-title">
      <div className="container">
        <div className={`practical__header reveal ${isInView ? 'is-visible' : ''}`}>
          <p className="label">{t.practical.label}</p>
          <h2 id="practical-title" className="practical__title">{t.practical.title}</h2>
          <p className="practical__area">{t.practical.area}</p>
        </div>

        <div className={`practical__grid reveal ${isInView ? 'is-visible' : ''}`}>
          <div className="practical__block">
            <p className="label">{t.labels.address}</p>
            <p>{restaurant.address}</p>
            <p>{restaurant.addressCity}</p>
          </div>

          <div className="practical__block">
            <p className="label">{t.labels.hours}</p>
            <p>{t.practical.lunchHours}</p>
            <p>{t.practical.eveningHours}</p>
          </div>

          <div className="practical__block">
            <p className="label">{t.practical.metroLabel}</p>
            <p>{t.practical.metroText}</p>
          </div>

          <div className="practical__block">
            <p className="label">{t.labels.phone}</p>
            <p>
              <a href={restaurant.phoneHref} className="practical__tel">
                {restaurant.phone}
              </a>
            </p>
          </div>
        </div>

        <div className={`practical__cta reveal ${isInView ? 'is-visible' : ''}`}>
          <button type="button" className="btn btn--accent" onClick={onOpenBooking}>
            {t.practical.bookCta}
            <span className="btn__arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
