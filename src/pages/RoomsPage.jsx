/**
 * Rooms Page
 * Simplified room listing
 */

import { motion } from 'framer-motion'
import heroBg from '../assets/19.jpg'
import MainLayout from '../layouts/MainLayout'
import RoomCard from '../components/RoomCard'
import { rooms } from '../utils/roomsData'

export default function RoomsPage({ onNavigateToRoom }) {
  const handleViewDetails = (room) => {
    if (onNavigateToRoom) {
      onNavigateToRoom(room.slug)
    }
  }

  return (
    <MainLayout pageKey="rooms">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary-950" style={{ paddingTop: '150px' }}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroBg}
            alt="Luxury Rooms"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/80 via-secondary-950/50 to-secondary-950" />
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-primary-500/20 rounded-full blur-[100px]" />
        </div>
        <div className="container-app relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-w-400 text-white mb-4">
              Rooms & <span className="text-gradient-primary">Suites</span>
            </h1>
            <p className="text-secondary-300 text-lg hero-description">
              Discover our collection of meticulously designed accommodations,
              each offering a unique blend of comfort and futuristic luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="section-lg bg-surface-dim">
        <div className="container-app">
          {/* Room Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {rooms.map((room) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <RoomCard
                  room={room}
                  onViewDetails={handleViewDetails}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface">
        <div className="container-app">
          <div className="bg-gradient-to-r from-primary-700 via-primary-600/90 to-primary-700/80 rounded-2xl p-8 md:p-12 text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src={new URL('../assets/hotel-building.jpg', import.meta.url).href}
                alt=""
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-secondary-950/20" />
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display text-white mb-4">
                Need Help Choosing?
              </h2>
              <p className="text-primary-50 mb-6 max-w-xl mx-auto hero-description">
                Our concierge team is available 24/7 to help you find the perfect room for your stay.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn bg-white text-primary-600 hover:bg-primary-50 px-8 py-3"
                >
                  Contact Concierge
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}
