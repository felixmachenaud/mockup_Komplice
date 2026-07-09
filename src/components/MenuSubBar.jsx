import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import './MenuSubBar.css'

export default function MenuSubBar({ isOpen, onSelect, onClose }) {
  const { t } = useLanguage()

  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  const menus = [t.menus.lunch, t.menus.dinner]

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="menu-subbar__backdrop"
          aria-label={t.menuPanel.close}
          onClick={onClose}
        />
      )}

      <div
        className={`menu-subbar ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="menu-subbar__inner">
          <div className="menu-subbar__options">
            {menus.map((menu) => (
              <button
                key={menu.shortLabel}
                type="button"
                className="menu-subbar__option"
                onClick={() => onSelect(menu.id)}
              >
                {menu.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
