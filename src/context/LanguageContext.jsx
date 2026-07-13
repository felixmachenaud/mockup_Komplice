import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations, defaultLang, languages } from '../i18n/translations'
import { getConversion } from '../i18n/conversion'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return defaultLang
    return localStorage.getItem('komplices-lang') || defaultLang
  })

  const setLang = (code) => {
    setLangState(code)
    localStorage.setItem('komplices-lang', code)
    document.documentElement.lang = code === 'zh' ? 'zh-Hans' : code
  }

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: {
        ...(translations[lang] || translations[defaultLang]),
        ...getConversion(lang),
      },
      languages,
    }),
    [lang],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
