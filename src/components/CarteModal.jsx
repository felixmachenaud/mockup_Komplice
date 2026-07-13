import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { restaurant } from '../data/restaurantData'
import './CarteModal.css'

function MenuContent({ menu, pdf, downloadLabel }) {
  return (
    <div className="carte-modal__menu-block" id={`carte-${menu.id}`}>
      <header className="carte-modal__menu-header">
        <h2 className="carte-modal__menu-title">{menu.label}</h2>
        <p className="carte-modal__menu-subtitle">{menu.subtitle}</p>
      </header>

      {menu.sections.map((section) => (
        <section key={section.title} className="carte-modal__section">
          <h3 className="carte-modal__section-title">{section.title}</h3>
          <ul className="carte-modal__list">
            {section.items.map((item) => (
              <li key={item.name} className="carte-modal__item">
                <span className="carte-modal__item-name">{item.name}</span>
                <span className="carte-modal__item-line" aria-hidden="true" />
                <span className="carte-modal__item-price">{item.price}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <footer className="carte-modal__menu-footer">
        <p>{menu.footer}</p>
        {pdf && (
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="carte-modal__pdf-link"
          >
            {downloadLabel}
          </a>
        )}
      </footer>
    </div>
  )
}

export default function CarteModal({ isOpen, onClose }) {
  const { t } = useLanguage()
  const contentRef = useRef(null)
  const lunch = t.menus.lunch
  const dinner = t.menus.dinner

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleKey)
    }
  }, [isOpen, onClose])

  const scrollToMenu = (menuId) => {
    const target = contentRef.current?.querySelector(`#carte-${menuId}`)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div
      className={`carte-modal ${isOpen ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label={t.nav.carte}
    >
      <button
        type="button"
        className="carte-modal__backdrop"
        aria-label={t.menuPanel.close}
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
      />

      <div className="carte-modal__panel">
        <button
          type="button"
          className="carte-modal__close"
          aria-label={t.menuPanel.close}
          onClick={onClose}
        >
          {t.menuPanel.close}
        </button>

        <nav className="carte-modal__nav" aria-label={t.nav.carte}>
          <button
            type="button"
            className="carte-modal__nav-item"
            onClick={() => scrollToMenu('lunch')}
          >
            {lunch.label}
          </button>
          <button
            type="button"
            className="carte-modal__nav-item"
            onClick={() => scrollToMenu('dinner')}
          >
            {dinner.label}
          </button>
        </nav>

        <div className="carte-modal__content" ref={contentRef}>
          <MenuContent
            menu={lunch}
            pdf={restaurant.menus.lunch?.pdf}
            downloadLabel={t.menuPanel.download}
          />
          <MenuContent
            menu={dinner}
            pdf={restaurant.menus.dinner?.pdf}
            downloadLabel={t.menuPanel.download}
          />
        </div>
      </div>
    </div>
  )
}
