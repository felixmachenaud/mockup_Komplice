import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { restaurant } from '../data/restaurantData'
import './RestaurantGallery.css'

export default function RestaurantGallery() {
  const { t } = useLanguage()
  const [ref, isInView] = useInView({ threshold: 0.08 })

  return (
    <section id="restaurant" className="restaurant" ref={ref}>
      <div className="container">
        <div className={`restaurant__hero reveal ${isInView ? 'is-visible' : ''}`}>
          <div className="restaurant__hero-image">
            <img
              src={restaurant.restaurant.heroImage}
              alt={t.restaurant.title}
              width={1400}
              height={800}
              loading="lazy"
            />
          </div>

          <div className="restaurant__hero-text">
            <p className="label">{t.restaurant.title}</p>
            <div className="restaurant__lines">
              {t.restaurant.lines.map((line) => (
                <p key={line} className="restaurant__line">{line}</p>
              ))}
            </div>
            <p className="restaurant__description">{t.restaurant.description}</p>
          </div>
        </div>
      </div>

      <div className={`restaurant__gallery reveal ${isInView ? 'is-visible' : ''}`}>
        <div className="restaurant__gallery-track">
          {restaurant.restaurant.gallery.map((img, i) => (
            <figure
              key={img.src}
              className={`restaurant__gallery-item restaurant__gallery-item--${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={600}
                height={750}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
