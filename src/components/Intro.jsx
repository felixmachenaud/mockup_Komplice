import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import './Intro.css'

export default function Intro() {
  const { t } = useLanguage()
  const [ref, isInView] = useInView()

  return (
    <section id="intro" className="intro" ref={ref}>
      <div className="container">
        <div className={`intro__content ${isInView ? 'is-visible' : ''}`}>
          <p className="label intro__label">{t.intro.label}</p>

          <div className="intro__lines">
            {t.intro.lines.map((line) => (
              <p key={line} className="intro__line reveal">
                {line}
              </p>
            ))}
          </div>

          <p className="intro__description reveal">
            {t.intro.description}
          </p>
        </div>
      </div>
    </section>
  )
}
