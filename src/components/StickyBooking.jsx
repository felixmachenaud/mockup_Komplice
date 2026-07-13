import { useLanguage } from '../context/LanguageContext'
import './StickyBooking.css'

export default function StickyBooking({ onOpenBooking, hidden }) {
  const { t } = useLanguage()

  if (hidden) return null

  return (
    <div className="sticky-booking" aria-hidden={false}>
      <button type="button" className="sticky-booking__btn" onClick={onOpenBooking}>
        {t.stickyBook}
      </button>
    </div>
  )
}
