import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { conversionContent } from '../data/conversionContent'
import './CellarSection.css'

export default function CellarSection({ onOpenCarte }) {
  const { t, lang } = useLanguage()
  const [ref, isInView] = useInView({ threshold: 0.08 })

  return (
    <section id="cave" className="cellar" ref={ref} aria-labelledby="cellar-title">
      <div className="container">
        <div className={`cellar__header reveal ${isInView ? 'is-visible' : ''}`}>
          <p className="label">{t.cellar.label}</p>
          <h2 id="cellar-title" className="cellar__title">{t.cellar.title}</h2>
          <p className="cellar__intro">{t.cellar.intro}</p>
        </div>

        <div className="cellar__bottles">
          {t.cellar.bottles.map((bottle, index) => {
            const media = conversionContent.bottles[index]
            return (
              <article
                key={media?.id || index}
                className={`cellar__bottle reveal ${isInView ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <figure className="cellar__bottle-image">
                  <img
                    src={media?.image || '/fond3.jpeg'}
                    alt={media?.imageAlt[lang] || media?.imageAlt?.fr || ''}
                    width={400}
                    height={500}
                    loading="lazy"
                  />
                </figure>
                <div className="cellar__bottle-text">
                  <p className="cellar__domain">{bottle.domain}</p>
                  <p className="cellar__meta">
                    {bottle.winemaker} · {bottle.region}
                    {bottle.grape ? ` · ${bottle.grape}` : ''}
                  </p>
                  <p className="cellar__description">{bottle.description}</p>
                  <p className="cellar__pairing">{bottle.pairing}</p>
                </div>
              </article>
            )
          })}
        </div>

        <p className="cellar__note">{t.cellar.note}</p>

        <div className="cellar__cta">
          <button type="button" className="btn" onClick={onOpenCarte}>
            {t.cellar.cta}
            <span className="btn__arrow" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
