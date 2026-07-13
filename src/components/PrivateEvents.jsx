import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import './PrivateEvents.css'

export default function PrivateEvents({ onOpenBooking }) {
  const { t } = useLanguage()
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <section id="evenements" className="private-events" ref={ref} aria-labelledby="private-events-title">
      <div className="container">
        <div className={`private-events__inner reveal ${isInView ? 'is-visible' : ''}`}>
          <div className="private-events__content">
            <p className="label">{t.privateEvents.label}</p>
            <h2 id="private-events-title" className="private-events__title">{t.privateEvents.title}</h2>
            <p className="private-events__text">{t.privateEvents.text}</p>

            <p className="private-events__capacity">{t.privateEvents.capacity}</p>

            <ul className="private-events__formats">
              {t.privateEvents.formats.map((format) => (
                <li key={format}>{format}</li>
              ))}
            </ul>

            <button type="button" className="btn btn--accent private-events__cta" onClick={onOpenBooking}>
              {t.privateEvents.cta}
              <span className="btn__arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
