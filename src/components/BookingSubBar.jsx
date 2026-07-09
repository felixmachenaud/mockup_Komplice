import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { restaurant } from '../data/restaurantData'
import './BookingSubBar.css'

const GUESTS = [1, 2, 3, 4, 5, 6, 7, 8]
const TIMES = ['12h00', '12h30', '13h00', '19h00', '19h30', '20h00', '20h30', '21h00']

export default function BookingSubBar({ isOpen, onClose }) {
  const { t } = useLanguage()
  const [guests, setGuests] = useState(2)
  const [date, setDate] = useState('2026-07-18')
  const [time, setTime] = useState('20h00')

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const handleReserve = () => {
    window.open(restaurant.bookingUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="booking-subbar__backdrop"
          aria-label={t.menuPanel.close}
          onClick={onClose}
        />
      )}

      <div
        className={`booking-subbar ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="booking-subbar__inner container">
          <p className="booking-subbar__label label">{t.booking.title}</p>

          <div className="booking-subbar__fields">
            <div className="booking-subbar__field">
              <label htmlFor="booking-guests" className="sr-only">{t.booking.guestsLabel}</label>
              <select
                id="booking-guests"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="booking-subbar__select"
              >
                {GUESTS.map((n) => (
                  <option key={n} value={n}>
                    {t.booking.guests(n)}
                  </option>
                ))}
              </select>
            </div>

            <span className="booking-subbar__divider" aria-hidden="true" />

            <div className="booking-subbar__field">
              <label htmlFor="booking-date" className="sr-only">{t.booking.date}</label>
              <input
                id="booking-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="booking-subbar__input"
              />
            </div>

            <span className="booking-subbar__divider" aria-hidden="true" />

            <div className="booking-subbar__field">
              <label htmlFor="booking-time" className="sr-only">{t.booking.time}</label>
              <select
                id="booking-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="booking-subbar__select"
              >
                {TIMES.map((slot) => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
            </div>

            <button type="button" className="booking-subbar__btn" onClick={handleReserve}>
              {t.booking.reserve}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
