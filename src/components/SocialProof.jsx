import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import { conversionContent } from '../data/conversionContent'
import './SocialProof.css'

export default function SocialProof() {
  const { t } = useLanguage()
  const [ref, isInView] = useInView({ threshold: 0.15 })
  const { ratings } = conversionContent

  return (
    <section className="social-proof" ref={ref} aria-labelledby="social-proof-title">
      <div className="container">
        <div className={`social-proof__header reveal ${isInView ? 'is-visible' : ''}`}>
          <p className="label">{t.socialProof.label}</p>
          <h2 id="social-proof-title" className="social-proof__title">{t.socialProof.title}</h2>
        </div>

        {ratings.verified && (
          <div className={`social-proof__ratings reveal ${isInView ? 'is-visible' : ''}`}>
            {ratings.items
              .filter((item) => item.score)
              .map((item) => (
                <span key={item.platform} className="social-proof__rating">
                  <strong>{item.score}</strong> {item.platform}
                </span>
              ))}
          </div>
        )}

        <div className="social-proof__quotes">
          {t.socialProof.testimonials.map((item, index) => (
            <blockquote
              key={item.text.slice(0, 24)}
              className={`social-proof__quote reveal ${isInView ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <p>« {item.text} »</p>
              <cite>{item.source}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
