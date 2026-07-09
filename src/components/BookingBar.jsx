import { useState } from 'react'
import { restaurant } from '../data/restaurantData'
import './BookingBar.css'

const GUESTS = [1, 2, 3, 4, 5, 6, 7, 8]
const TIMES = ['12h00', '12h30', '13h00', '19h00', '19h30', '20h00', '20h30', '21h00']

export default function BookingBar({ visible }) {
  const [guests, setGuests] = useState(2)
  const [date, setDate] = useState('2026-07-18')
  const [time, setTime] = useState('20h00')

  const handleReserve = () => {
    window.open(restaurant.bookingUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`booking-bar ${visible ? 'is-visible' : ''}`}>
      <div className="booking-bar__inner container">
        <p className="booking-bar__label label">Réserver une table</p>

        <div className="booking-bar__fields">
          <div className="booking-bar__field">
            <label htmlFor="guests" className="sr-only">Nombre de personnes</label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="booking-bar__select"
            >
              {GUESTS.map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'personne' : 'personnes'}
                </option>
              ))}
            </select>
          </div>

          <span className="booking-bar__divider" aria-hidden="true" />

          <div className="booking-bar__field">
            <label htmlFor="date" className="sr-only">Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="booking-bar__input"
            />
          </div>

          <span className="booking-bar__divider" aria-hidden="true" />

          <div className="booking-bar__field">
            <label htmlFor="time" className="sr-only">Horaire</label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="booking-bar__select"
            >
              {TIMES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <span className="booking-bar__divider booking-bar__divider--hide-mobile" aria-hidden="true" />

          <button type="button" className="booking-bar__btn" onClick={handleReserve}>
            Réserver
          </button>
        </div>
      </div>
    </div>
  )
}
