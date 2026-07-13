import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { restaurant } from '../data/restaurantData'
import { conversionContent } from '../data/conversionContent'

export default function SeoHead() {
  const { t, lang } = useLanguage()

  useEffect(() => {
    document.title = t.seo.title

    const setMeta = (name, content, property = false) => {
      const attr = property ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMeta('description', t.seo.description)
    setMeta('og:title', t.seo.title, true)
    setMeta('og:description', t.seo.description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:image', `${window.location.origin}${restaurant.heroImage}`, true)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', t.seo.title)
    setMeta('twitter:description', t.seo.description)

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: restaurant.name,
      image: `${window.location.origin}${restaurant.heroImage}`,
      telephone: restaurant.phone,
      priceRange: conversionContent.priceRange,
      servesCuisine: conversionContent.servesCuisine,
      acceptsReservations: true,
      address: {
        '@type': 'PostalAddress',
        streetAddress: restaurant.address,
        addressLocality: 'Paris',
        postalCode: '75008',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: conversionContent.geo.latitude,
        longitude: conversionContent.geo.longitude,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '12:00',
          closes: '14:30',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '19:00',
          closes: '22:30',
        },
      ],
      menu: `${window.location.origin}/#carte`,
      hasMenu: [
        {
          '@type': 'Menu',
          name: lang === 'en' ? 'Lunch menu' : 'Menu du déjeuner',
          url: `${window.location.origin}/#dejeuner`,
        },
        {
          '@type': 'Menu',
          name: lang === 'en' ? 'Evening menu' : 'Menu du soir',
          url: `${window.location.origin}/#soir`,
        },
      ],
    }

    let script = document.getElementById('restaurant-schema')
    if (!script) {
      script = document.createElement('script')
      script.id = 'restaurant-schema'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(schema)
  }, [t, lang])

  return null
}
