import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MomentSection from './components/MomentSection'
import Marquee from './components/Marquee'
import MapSection from './components/MapSection'
import SignatureDish from './components/SignatureDish'
import TeamSection from './components/TeamSection'
import CellarSection from './components/CellarSection'
import SocialProof from './components/SocialProof'
import RestaurantGallery from './components/RestaurantGallery'
import PrivateEvents from './components/PrivateEvents'
import PracticalInfo from './components/PracticalInfo'
import ReservationSection from './components/ReservationSection'
import Footer from './components/Footer'
import MenuPanel from './components/MenuPanel'
import CarteModal from './components/CarteModal'
import PageBackground from './components/PageBackground'
import StickyBooking from './components/StickyBooking'
import SeoHead from './components/SeoHead'
import { useScrollMotion } from './hooks/useScrollEffects'
import { restaurant } from './data/restaurantData'
import './App.css'

export default function App() {
  const { progress: scrollProgress } = useScrollMotion()
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
    setActiveMenu(null)
    setCarteOpen(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleOpenMenu = (menuId) => {
    setCarteOpen(false)
    setBookingOpen(false)
    setActiveMenu(menuId)
  }

  const handleOpenBooking = () => {
    setCarteOpen(false)
    setActiveMenu(null)
    setBookingOpen(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <SeoHead />
      <PageBackground />

      <Header
        scrollProgress={scrollProgress}
        carteOpen={carteOpen}
        bookingOpen={bookingOpen}
        onCarteToggle={handleCarteToggle}
        onBookingToggle={handleBookingToggle}
        onBookingClose={handleBookingClose}
      />

      <CarteModal isOpen={carteOpen} onClose={handleCarteClose} />

      <MenuPanel activeMenu={activeMenu} onClose={handleMenuClose} />

      <main>
        <Hero
          onOpenCarte={handleOpenCarte}
          onOpenBooking={handleOpenBooking}
        />
        <div className="main-content">
          <MomentSection variant="lunch" onOpenMenu={handleOpenMenu} />
          <section className="dishes" aria-label="Plats signatures">
            {restaurant.dishes.slice(0, 2).map((dish, index) => (
              <SignatureDish key={dish.id} dish={dish} index={index} />
            ))}
          </section>
          <MomentSection variant="evening" onOpenMenu={handleOpenMenu} />
          <MapSection />
          <TeamSection />
          <CellarSection onOpenCarte={handleOpenCarte} />
          <SocialProof />
          <Marquee />
          <RestaurantGallery />
          <PrivateEvents onOpenBooking={handleOpenBooking} />
          <PracticalInfo onOpenBooking={handleOpenBooking} />
          <ReservationSection onOpenBooking={handleOpenBooking} />
        </div>
      </main>

      <Footer />

      <StickyBooking
        onOpenBooking={handleOpenBooking}
        hidden={bookingOpen || carteOpen || Boolean(activeMenu)}
      />
    </>
  )
}
