import { useLanguage } from '../context/LanguageContext'
import './Marquee.css'

export default function Marquee() {
  const { t } = useLanguage()
  const content = t.marquee.map((item) => `${item}  •  `).join('')

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <span className="marquee__text">{content}</span>
        <span className="marquee__text">{content}</span>
      </div>
    </div>
  )
}
