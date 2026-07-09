import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Marquee from './components/Marquee'
import MapSection from './components/MapSection'
import SignatureDish from './components/SignatureDish'
import MenuCTA from './components/MenuCTA'
import RestaurantGallery from './components/RestaurantGallery'
import ReservationSection from './components/ReservationSection'
import Footer from './components/Footer'
import MenuPanel from './components/MenuPanel'
import PageBackground from './components/PageBackground'
import { useScrollProgress } from './hooks/useInView'
import { useScrollY } from './hooks/useScrollEffects'
import { restaurant } from './data/restaurantData'
import './App.css'

export default function App() {
  const scrollProgress = useScrollProgress()
  const scrollY = useScrollY()
  const bgOpacity = Math.min(Math.max((scrollProgress - 0.35) / 0.45, 0), 1)
  const [carteOpen, setCarteOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  const handleCarteToggle = () => {
    setBookingOpen(false)
    setCarteOpen((open) => !open)
  }

  const handleCarteClose = () => setCarteOpen(false)

  const handleBookingToggle = () => {
    setCarteOpen(false)
    setBookingOpen((open) => !open)
  }

  const handleBookingClose = () => setBookingOpen(false)

  const handleMenuSelect = (menuId) => {
    setCarteOpen(false)
    setActiveMenu(menuId)
  }

  const handleMenuClose = () => setActiveMenu(null)
  const handleOpenCarte = () => {
    setBookingOpen(false)
    setCarteOpen(true)
  }

  return (
    <>
      <PageBackground opacity={bgOpacity} scrollY={scrollY} />

      <Header
        scrollProgress={scrollProgress}
        carteOpen={carteOpen}
        bookingOpen={bookingOpen}
        onCarteToggle={handleCarteToggle}
        onCarteClose={handleCarteClose}
        onBookingToggle={handleBookingToggle}
        onBookingClose={handleBookingClose}
        onMenuSelect={handleMenuSelect}
      />

      <MenuPanel activeMenu={activeMenu} onClose={handleMenuClose} />

      <main>
        <Hero scrollProgress={scrollProgress} />
        <div className="main-content">
          <Intro />
          <section className="dishes" aria-label="Plats signatures">
            {restaurant.dishes.map((dish, index) => (
              <SignatureDish key={dish.id} dish={dish} index={index} />
            ))}
          </section>
          <Marquee />
          <MapSection />
          <MenuCTA onOpenCarte={handleOpenCarte} />
          <RestaurantGallery />
          <ReservationSection />
        </div>
      </main>

      <Footer />
    </>
  )
}
