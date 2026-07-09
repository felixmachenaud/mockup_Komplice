import { useInView } from '../hooks/useInView'
import { useLanguage } from '../context/LanguageContext'
import './MenuCTA.css'

export default function MenuCTA({ onOpenCarte }) {
  const { t } = useLanguage()
  const [ref, isInView] = useInView()

  return (
    <section id="carte" className="menu-cta" ref={ref}>
      <div className={`menu-cta__inner container reveal ${isInView ? 'is-visible' : ''}`}>
        <p className="label menu-cta__label">{t.menuCta.title}</p>
        <h2 className="menu-cta__title">
          {t.menuCta.subtitle.split('\n').map((line, i) => (
            <span key={line}>
              {line}
              {i === 0 && <br />}
            </span>
          ))}
        </h2>
        <button type="button" className="btn menu-cta__btn" onClick={onOpenCarte}>
          {t.menuCta.cta}
          <span className="btn__arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  )
}
