import { useLanguage } from '../context/LanguageContext'
import { restaurant } from '../data/restaurantData'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <p className="footer__logo">{restaurant.name}</p>

          <div className="footer__info">
            <div className="footer__block">
              <p className="label">{t.labels.address}</p>
              <p>{restaurant.address}</p>
              <p>{restaurant.addressCity}</p>
            </div>
            <div className="footer__block">
              <p className="label">{t.labels.phone}</p>
              <p>
                <a href={restaurant.phoneHref} className="footer__tel">
                  {restaurant.phone}
                </a>
              </p>
            </div>
            <div className="footer__block">
              <p className="label">{t.labels.hours}</p>
              {t.openingHours.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>

          <div className="footer__links">
            <a
              href={restaurant.instagram}
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.labels.instagram}
            </a>
            <a href="#" className="nav-link">
              {t.labels.legal}
            </a>
          </div>
        </div>

        <p className="footer__copy">
          © 2026 {restaurant.name.toUpperCase()}
        </p>
      </div>
    </footer>
  )
}
