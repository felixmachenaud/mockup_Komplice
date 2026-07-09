import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { restaurant } from '../data/restaurantData'
import './ReservationSection.css'

export default function ReservationSection() {
  const { t } = useLanguage()
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <section id="reservation" className="reservation" ref={ref}>
      <div className="reservation__bg" aria-hidden="true">
        <img
          src={restaurant.heroImage}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
        />
        <div className="reservation__overlay" />
      </div>

      <div className={`reservation__content container reveal ${isInView ? 'is-visible' : ''}`}>
        <h2 className="reservation__title">
          {t.reservation.title.map((line) => (
            <span key={line} className="reservation__title-line">
              {line}
            </span>
          ))}
        </h2>

        <a href={restaurant.bookingUrl} className="btn btn--accent reservation__cta">
          {t.reservation.cta}
          <span className="btn__arrow" aria-hidden="true">→</span>
        </a>

        <div className="reservation__info">
          <p className="reservation__brand label">{restaurant.name}</p>

          <div className="reservation__details">
            <div className="reservation__detail">
              <p className="label">{t.labels.address}</p>
              <p>{restaurant.address}</p>
              <p>{restaurant.addressCity}</p>
            </div>
            <div className="reservation__detail">
              <p className="label">{t.labels.phone}</p>
              <p>
                <a href={restaurant.phoneHref} className="reservation__tel">
                  {restaurant.phone}
                </a>
              </p>
            </div>
            <div className="reservation__detail">
              <p className="label">{t.labels.hours}</p>
              {t.openingHours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
