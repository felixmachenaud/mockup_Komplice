import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import './ConceptSection.css'

export default function ConceptSection() {
  const { t } = useLanguage()
  const [ref, isInView] = useInView({ threshold: 0.15 })

  return (
    <section
      id="concept"
      className={`concept ${isInView ? 'is-visible' : ''}`}
      ref={ref}
      aria-labelledby="concept-title"
    >
      <div className="container">
        <div className={`concept__inner reveal ${isInView ? 'is-visible' : ''}`}>
          <h2 id="concept-title" className="concept__title">{t.concept.title}</h2>
          <p className="concept__body">{t.concept.body}</p>
        </div>
      </div>
    </section>
  )
}
