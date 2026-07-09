import { restaurant } from '../data/restaurantData'
import './MapSection.css'

export default function MapSection() {
  return (
    <section className="map-section" aria-label="Localisation du restaurant">
      <iframe
        src={restaurant.mapEmbedUrl}
        title={`Carte — ${restaurant.name}, ${restaurant.address}`}
        className="map-section__iframe"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  )
}
