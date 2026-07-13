import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { restaurant } from '../data/restaurantData'
import './RestaurantGallery.css'

export default function RestaurantGallery() {
  const { t } = useLanguage()
  const [ref, isInView] = useInView({ threshold: 0.06 })
  const { showcase, heroImage, heroImagePosition } = restaurant.restaurant

  return (
    <section id="restaurant" className="restaurant" ref={ref}>
      <div className="container">
        <div className={`restaurant__intro reveal ${isInView ? 'is-visible' : ''}`}>
          <p className="label">{t.restaurant.title}</p>
          <div className="restaurant__lines">
            {t.restaurant.lines.map((line) => (
              <p key={line} className="restaurant__line">{line}</p>
            ))}
          </div>
          <p className="restaurant__description">{t.restaurant.description}</p>
        </div>
      </div>

      <figure className={`restaurant__feature reveal-image ${isInView ? 'is-visible' : ''}`}>
        <img
          src={heroImage}
          alt={t.restaurant.title}
          width={1170}
          height={1544}
          loading="lazy"
          style={{ objectPosition: heroImagePosition }}
        />
      </figure>

      <div className="container">
        <div className={`restaurant__showcase reveal ${isInView ? 'is-visible' : ''}`}>
          {showcase.map((img) => (
            <figure
              key={img.src}
              className={`restaurant__panel restaurant__panel--${img.layout}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1170}
                height={1562}
                loading="lazy"
                style={{ objectPosition: img.position }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
