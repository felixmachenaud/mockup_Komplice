import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import BookingSubBar from './BookingSubBar'
import LogoMark from './LogoMark'
import './Header.css'

export default function Header({
  scrollProgress,
  carteOpen,
  bookingOpen,
  onCarteToggle,
  onBookingToggle,
  onBookingClose,
}) {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 60)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const panelOpen = carteOpen || bookingOpen
  const isHero = scrollProgress < 0.4 && !isScrolled && !panelOpen
  const headerClass = [
    'header',
    isScrolled || panelOpen ? 'header--scrolled' : '',
    isHero ? 'header--hero' : '',
    mobileOpen ? 'header--menu-open' : '',
    carteOpen ? 'header--carte-open' : '',
    bookingOpen ? 'header--booking-open' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="site-header">
      <header className={headerClass}>
        <div className="header__inner container">
          <a href="#" className="header__logo" aria-label="Les Komplices — Accueil">
            <span className="header__logo-text">Les Komplices</span>
            <LogoMark variant="header" />
          </a>

          <nav className="header__nav" aria-label="Navigation principale">
            <button
              type="button"
              className={`nav-link header__nav-btn ${carteOpen ? 'is-active' : ''}`}
              onClick={onCarteToggle}
              aria-expanded={carteOpen}
            >
              {t.nav.carte}
            </button>
            <a href="#concept" className="nav-link">
              {t.nav.about}
            </a>
            <a href="#restaurant" className="nav-link">
              {t.nav.restaurant}
            </a>
          </nav>

          <div className="header__actions">
            <button
              type="button"
              className={`header__cta nav-link header__cta-btn ${bookingOpen ? 'is-active' : ''}`}
              onClick={onBookingToggle}
              aria-expanded={bookingOpen}
            >
              {t.nav.reserve}
            </button>
            <LanguageSwitcher variant="desktop" />
          </div>

          <button
            type="button"
            className="header__burger"
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <BookingSubBar
        isOpen={bookingOpen}
        onClose={onBookingClose}
      />

      <div className={`header__mobile ${mobileOpen ? 'is-open' : ''}`} aria-hidden={!mobileOpen}>
        <nav aria-label="Navigation mobile">
          <button
            type="button"
            className="header__mobile-link"
            onClick={() => {
              setMobileOpen(false)
              onCarteToggle()
            }}
          >
            {t.nav.carte}
          </button>
          <a
            href="#restaurant"
            className="header__mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.restaurant}
          </a>
          <a
            href="#concept"
            className="header__mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {t.nav.about}
          </a>
          <button
            type="button"
            className="header__mobile-link header__mobile-link--cta"
            onClick={() => {
              setMobileOpen(false)
              onBookingToggle()
            }}
          >
            {t.nav.reserve}
          </button>
          <LanguageSwitcher variant="mobile" />
        </nav>
      </div>
    </div>
  )
}
