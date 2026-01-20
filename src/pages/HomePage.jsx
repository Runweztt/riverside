/**
 * Home Page
 * Complete landing page for Riverside Suites
 */

import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Hero'
import BookingWidget from '../components/BookingWidget'
import FeaturedRooms from '../components/FeaturedRooms'
import Amenities from '../components/Amenities'
import Testimonials from '../components/Testimonials'
import SpecialOffers from '../components/SpecialOffers'
import CTASection from '../components/CTASection'

export default function HomePage() {
  return (
    <MainLayout pageKey="home">
      <Hero />
      <div className="hidden md:block">
        <BookingWidget />
      </div>
      <FeaturedRooms />
      <Amenities />
      <SpecialOffers />
      <Testimonials />
      <CTASection />
    </MainLayout>
  )
}
