import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { restaurant } from '../data/restaurantData'
import './MenuPanel.css'

export default function MenuPanel({ activeMenu, onClose }) {
  const { t } = useLanguage()
  const menu = activeMenu ? t.menus[activeMenu] : null
  const pdf = activeMenu ? restaurant.menus[activeMenu]?.pdf : null
  const isOpen = Boolean(menu)

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

  return (
    <div
      className={`menu-panel ${isOpen ? 'is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-label={menu?.label}
    >
      <button
        type="button"
        className="menu-panel__overlay"
        aria-label={t.menuPanel.close}
        onClick={onClose}
        tabIndex={isOpen ? 0 : -1}
      />

      <div className="menu-panel__page">
        {menu && (
          <>
            <header className="menu-panel__header">
              <div className="menu-panel__header-text">
                <p className="label menu-panel__eyebrow">{t.menuPanel.eyebrow}</p>
                <h2 className="menu-panel__title">{menu.label}</h2>
                <p className="menu-panel__subtitle">{menu.subtitle}</p>
              </div>
              <button
                type="button"
                className="menu-panel__close"
                aria-label={t.menuPanel.close}
                onClick={onClose}
              >
                {t.menuPanel.close}
              </button>
            </header>

            <div className="menu-panel__body">
              {menu.sections.map((section) => (
                <section key={section.title} className="menu-panel__section">
                  <h3 className="menu-panel__section-title">{section.title}</h3>
                  <ul className="menu-panel__list">
                    {section.items.map((item) => (
                      <li key={item.name} className="menu-panel__item">
                        <span className="menu-panel__item-name">{item.name}</span>
                        <span className="menu-panel__item-line" aria-hidden="true" />
                        <span className="menu-panel__item-price">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>

            <footer className="menu-panel__footer">
              <p>{menu.footer}</p>
              {pdf && (
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-panel__pdf-link"
                >
                  {t.menuPanel.download}
                </a>
              )}
            </footer>
          </>
        )}
      </div>
    </div>
  )
}
