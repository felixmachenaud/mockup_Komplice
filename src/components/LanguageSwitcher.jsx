import { useLanguage } from '../context/LanguageContext'
import './LanguageSwitcher.css'

export default function LanguageSwitcher({ variant = 'desktop' }) {
  const { lang, setLang, languages } = useLanguage()

  return (
    <div className={`lang-switcher lang-switcher--${variant}`} role="group" aria-label="Language">
      {languages.map((item) => (
        <button
          key={item.code}
          type="button"
          className={`lang-switcher__btn ${lang === item.code ? 'is-active' : ''}`}
          onClick={() => setLang(item.code)}
          aria-pressed={lang === item.code}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}
