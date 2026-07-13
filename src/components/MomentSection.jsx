import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { conversionContent } from '../data/conversionContent'
import './MomentSection.css'

function ImageScrollStrip({ images, lang }) {
  const track = [...images, ...images]

  return (
    <div className="moment__gallery" aria-hidden="true">
      <div className="moment__gallery-track">
        {track.map((img, index) => (
          <figure key={`${img.src}-${index}`} className="moment__gallery-item">
            <img
              src={img.src}
              alt={img.alt[lang] || img.alt.fr}
              width={520}
              height={400}
              loading="lazy"
              draggable={false}
            />
          </figure>
        ))}
      </div>
    </div>
  )
}

export default function MomentSection({ variant, onOpenMenu }) {
  const { t, lang } = useLanguage()
  const [ref, isInView] = useInView({ threshold: 0.12 })
  const content = variant === 'lunch' ? t.lunchMoment : t.eveningMoment
  const media = variant === 'lunch' ? conversionContent.lunch : conversionContent.evening
  const menuId = variant === 'lunch' ? 'lunch' : 'dinner'
  const galleryImages = [
    { src: media.image, alt: media.imageAlt },
    ...media.detailImages,
  ]

  return (
    <section
      id={variant === 'lunch' ? 'concept' : 'soir'}
      className={`moment moment--${variant} ${isInView ? 'is-visible' : ''}`}
      ref={ref}
      aria-labelledby={`moment-${variant}-label`}
    >
      <div className="moment__inner container moment__inner--centered">
        <div className={`moment__content reveal ${isInView ? 'is-visible' : ''}`}>
          <h2 id={`moment-${variant}-label`} className="moment__label">{content.label}</h2>
          <p className="moment__title">{content.title}</p>
          <p className="moment__text">{content.text}</p>

          <ul className="moment__highlights">
            {content.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="moment__actions">
            <button type="button" className="moment__cta" onClick={() => onOpenMenu(menuId)}>
              {content.cta}
            </button>
          </div>
        </div>

        <div className={`moment__visual reveal-image ${isInView ? 'is-visible' : ''}`}>
          <ImageScrollStrip images={galleryImages} lang={lang} />
        </div>
      </div>
    </section>
  )
}
