/**
 * Room Details Page
 * Modern redesigned room information layout
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MainLayout from '../layouts/MainLayout'
import { getRoomBySlug } from '../utils/roomsData'

export default function RoomDetailsPage({ slug, onBack, onBook }) {
  const room = getRoomBySlug(slug)
  const [activeImage, setActiveImage] = useState(0)
  const [showGallery, setShowGallery] = useState(false)
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  // Dynamic image resolution for Vite
  const getImageUrl = (name) => {
    if (!name) return ''
    if (name.startsWith('http')) return name
    if (name.startsWith('/')) return name
    try {
      return new URL(`../assets/${name}`, import.meta.url).href
    } catch (e) {
      return name
    }
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-UG', {
      style: 'currency',
      currency: 'UGX',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price).replace('UGX', 'UGX ')
  }

  // Effect to scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!room) {
    return (
      <MainLayout pageKey="room-not-found">
        <div className="min-h-[60vh] flex flex-col items-center justify-center bg-secondary-950 text-white pt-32">
          <div className="text-center">
            <h1 className="text-3xl font-display mb-6">Suite Not Found</h1>
            <a href="#rooms">
              <button className="btn btn-primary px-8">
                Back to Suites
              </button>
            </a>
          </div>
        </div>
      </MainLayout>
    )
  }

  const discount = room.originalPrice
    ? Math.round((1 - room.price / room.originalPrice) * 100)
    : 0

  return (
    <MainLayout pageKey={`room-${room.id}`}>
      {/* Hero / Header with Main Image */}
      <section className="relative min-h-[70vh] flex items-end bg-secondary-950 pt-32">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: 'easeOut' }}
            src={getImageUrl(room.images[activeImage])}
            alt={room.name}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-secondary-950/20 to-transparent" />
        </div>

        <div className="container-app relative pb-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary-500/20 backdrop-blur-md border border-primary-500/30 text-primary-400 text-xs font-semibold rounded-full uppercase tracking-widest">
                  {room.category}
                </span>
                {room.featured && (
                  <span className="px-3 py-1 bg-accent-500/20 backdrop-blur-md border border-accent-500/30 text-accent-400 text-xs font-semibold rounded-full uppercase tracking-widest">
                    Signature Suite
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display text-white mb-6 leading-tight">
                {room.name}
              </h1>
              <div className="flex flex-wrap items-center gap-8 text-secondary-200">
                <div className="flex items-center gap-2">
                  <SizeIcon className="w-5 h-5 text-primary-500" />
                  <span className="text-sm uppercase tracking-wider font-medium">{room.size} m²</span>
                </div>
                <div className="flex items-center gap-2">
                  <GuestIcon className="w-5 h-5 text-primary-500" />
                  <span className="text-sm uppercase tracking-wider font-medium">Up to {room.maxGuests} Guests</span>
                </div>
                <div className="flex items-center gap-2">
                  <BedIcon className="w-5 h-5 text-primary-500" />
                  <span className="text-sm uppercase tracking-wider font-medium">{room.beds}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-lg bg-surface-dim">
        <div className="container-app">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Details & Gallery */}
            <div className="lg:col-span-8 space-y-16">
              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary-500"></span>
                  Overview
                </h2>
                <p className="text-text-secondary leading-relaxed text-lg">
                  {room.description}
                </p>
              </div>

              {/* Enhanced Gallery Grid */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary-500"></span>
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.images.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-lg"
                      onClick={() => {
                        setActiveImage(i)
                        setShowGallery(true)
                      }}
                    >
                      <img
                        src={getImageUrl(img)}
                        alt={`${room.name} view ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-secondary-950/20 group-hover:bg-transparent transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="space-y-8">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary-500"></span>
                  Suite Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {room.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-sm border border-border group hover:border-primary-500/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                        <CheckIcon className="w-6 h-6 text-primary-600 group-hover:text-white" />
                      </div>
                      <span className="text-sm md:text-base font-medium text-text-secondary capitalize">
                        {amenity.replace('_', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* House Rules */}
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-primary-500"></span>
                  House Rules
                </h2>
                <div className="bg-white p-8 rounded-2xl border border-border shadow-sm grid sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-4 text-secondary-900">Check-in / Check-out</h4>
                    <ul className="space-y-3 text-text-secondary">
                      <li className="flex justify-between items-center pb-2 border-b border-border">
                        <span className="text-sm">Check-in from</span>
                        <span className="font-semibold text-secondary-900">3:00 PM</span>
                      </li>
                      <li className="flex justify-between items-center">
                        <span className="text-sm">Check-out by</span>
                        <span className="font-semibold text-secondary-900">11:00 AM</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-lg mb-4 text-secondary-900">Policies</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Please note that all rooms are non-smoking. Pets are not allowed. Free cancellation is available up to 48 hours before check-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Booking Widget */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl border border-border shadow-2xl overflow-hidden"
                >
                  {/* Price Header */}
                  <div className="bg-secondary-950 p-8 text-white">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-display font-bold text-primary-400">{formatPrice(room.price)}</span>
                      <span className="text-secondary-400 text-sm uppercase tracking-widest">/ night</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex items-center gap-3">
                        <span className="text-secondary-500 line-through text-lg">{formatPrice(room.originalPrice)}</span>
                        <span className="px-2 py-1 bg-primary-500 text-white text-[10px] font-bold rounded uppercase tracking-tighter">
                          Save {discount}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Form */}
                  <div className="p-8 space-y-6">
                    <div>
                      <label className="block text-xs font-bold text-secondary-900 uppercase tracking-widest mb-3">Check-in</label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full px-5 py-4 bg-surface-dim border border-border rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-secondary-900 uppercase tracking-widest mb-3">Check-out</label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full px-5 py-4 bg-surface-dim border border-border rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-secondary-900 uppercase tracking-widest mb-3">Guests</label>
                      <div className="relative">
                        <select
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value))}
                          className="w-full px-5 py-4 bg-surface-dim border border-border rounded-xl focus:border-primary-500 focus:outline-none appearance-none transition-colors"
                        >
                          {[...Array(room.maxGuests)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ChevronDownIcon className="w-5 h-5 text-secondary-400" />
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!room.available}
                      className="w-full btn btn-primary py-5 text-base font-bold uppercase tracking-widest disabled:opacity-50 shadow-lg shadow-primary-500/20"
                    >
                      {room.available ? 'Reserve Suite' : 'Fully Booked'}
                    </motion.button>

                    <p className="text-center text-xs text-text-muted">
                      No payment required today
                    </p>
                  </div>

                  {/* Trust Badges */}
                  <div className="bg-surface-dim p-6 border-t border-border flex flex-col gap-4">
                    <div className="flex items-center gap-3 text-xs text-text-secondary font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                        <CheckIcon className="w-3 h-3 text-primary-600" />
                      </div>
                      Best Price Guaranteed
                    </div>
                    <div className="flex items-center gap-3 text-xs text-text-secondary font-medium">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                        <CheckIcon className="w-3 h-3 text-primary-600" />
                      </div>
                      Free Cancellation Facility
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Gallery Modal */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-secondary-950/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <CloseIcon className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-6xl w-full h-full flex items-center justify-center"
            >
              <button
                onClick={() => setActiveImage((prev) => (prev - 1 + room.images.length) % room.images.length)}
                className="absolute left-0 p-4 text-white/50 hover:text-white transition-colors"
              >
                <ChevronLeftIcon className="w-12 h-12" />
              </button>

              <img
                src={getImageUrl(room.images[activeImage])}
                alt={room.name}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />

              <button
                onClick={() => setActiveImage((prev) => (prev + 1) % room.images.length)}
                className="absolute right-0 p-4 text-white/50 hover:text-white transition-colors"
              >
                <ChevronRightIcon className="w-12 h-12" />
              </button>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3 pb-8">
                {room.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-2 h-2 rounded-full transition-all ${activeImage === i ? 'bg-primary-500 w-8' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  )
}

// Icons
function ChevronLeftIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function SizeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
    </svg>
  )
}

function GuestIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function BedIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M3 7v11M21 7v11M3 11h18M5 11v-4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
    </svg>
  )
}
