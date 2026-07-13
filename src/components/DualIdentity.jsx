import { useLanguage } from '../context/LanguageContext'
import './DualIdentity.css'

export default function DualIdentity() {
  const { t } = useLanguage()

  return (
    <section id="concept" className="dual-identity" aria-labelledby="dual-identity-title">
      <div className="container">
        <p className="label dual-identity__label">{t.dualIdentity.label}</p>
        <h2 id="dual-identity-title" className="sr-only">{t.dualIdentity.label}</h2>

        <div className="dual-identity__grid">
          <article className="dual-identity__card dual-identity__card--lunch">
            <span className="dual-identity__time" aria-hidden="true">☀</span>
            <h3 className="dual-identity__title">{t.dualIdentity.lunchTitle}</h3>
            <p className="dual-identity__text">{t.dualIdentity.lunchText}</p>
          </article>

          <div className="dual-identity__divider" aria-hidden="true" />

          <article className="dual-identity__card dual-identity__card--evening">
            <span className="dual-identity__time" aria-hidden="true">☾</span>
            <h3 className="dual-identity__title">{t.dualIdentity.eveningTitle}</h3>
            <p className="dual-identity__text">{t.dualIdentity.eveningText}</p>
          </article>
        </div>
      </div>
    </section>
  )
}
