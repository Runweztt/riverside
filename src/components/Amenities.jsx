/**
 * Amenities Section
 * Preview of hotel amenities with icons
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import bgImage from '../assets/26.jpg'
import imgRooftop from '../assets/57.jpg'
import imgGym from '../assets/38.jpg'
import imgKitchen from '../assets/23.jpg'
import imgSauna from '../assets/9.jpg'

const facilities = [
  {
    title: 'Rooftop & Pool',
    icon: PoolIcon,
    image: imgRooftop,
  },
  {
    title: 'Fitness Center',
    icon: GymIcon,
    image: imgGym,
  },
  {
    title: 'Gourmet Kitchens',
    icon: DiningIcon,
    image: imgKitchen,
  },
  {
    title: 'Sauna & Spa',
    icon: SpaIcon,
    image: imgSauna,
  },
  {
    title: 'High-Speed WiFi',
    icon: WifiIcon,
  },
  {
    title: 'Valet Parking',
    icon: ParkingIcon,
  },
  {
    title: '24/7 Security',
    icon: SecurityIcon,
  },
  {
    title: 'Concierge Service',
    icon: ConciergeIcon,
  },
]

const sliderImages = [
  { title: 'Rooftop & Pool', image: imgRooftop },
  { title: 'Fitness Center', image: imgGym },
  { title: 'Gourmet Kitchens', image: imgKitchen },
  { title: 'Sauna & Spa', image: imgSauna },
]

import patternBottom from '../assets/pattern-bottom.png'

export default function Amenities() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-24 bg-secondary-950">
      {/* Decorative Pattern Top */}
      <div className="absolute top-0 left-0 w-full -translate-y-full z-20 pointer-events-none">
        <img
          src={patternBottom}
          alt=""
          className="w-full h-auto rotate-180"
        />
      </div>

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={bgImage}
          alt="Amenities Background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-secondary-950/60" />
      </div>

      <div className="container-app relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4 block">
              World-Class Facilities
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-white mb-10">
              Premium <span className="text-gradient-primary">Amenities</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {facilities.map((item, index) => (
                <div
                  key={index}
                  className="group relative p-4 rounded-xl border bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-medium text-white group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </span>
                    <item.icon className="w-6 h-6 text-white/70 group-hover:text-primary-400 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Slider */}
          <div className="relative">
            {/* Gold Gradients */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-500/20 rounded-full blur-3xl z-0" />

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-secondary-900 border border-primary-500/20 z-10"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={sliderImages[activeIndex].image}
                  alt={sliderImages[activeIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay for Controls */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

              {/* Slider Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Featured Facility</p>
                  <p className="text-white font-display text-xl">{sliderImages[activeIndex].title}</p>
                </div>

                <div className="flex gap-2">
                  {sliderImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 bg-primary-500' : 'w-2 bg-white/30 hover:bg-white/50'
                        }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Icons
function PoolIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M2 12h20M2 12c0 4.418 4.477 8 10 8s10-3.582 10-8M2 12c0-4.418 4.477-8 10-8s10 3.582 10 8" />
      <circle cx="12" cy="8" r="2" fill="currentColor" stroke="none" />
    </svg>
  )
}

function SpaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5L12 22l8.662-5A9.953 9.953 0 0022 12c0-5.523-4.477-10-10-10z" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function DiningIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 17V7m4 10v-6m4 6V5m4 12v-4" />
    </svg>
  )
}

function GymIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M6.5 6.5L17.5 17.5M17.5 6.5L6.5 17.5" />
      <rect x="3" y="10" width="4" height="4" rx="1" />
      <rect x="17" y="10" width="4" height="4" rx="1" />
      <path d="M7 12h10" />
    </svg>
  )
}

function WifiIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M5 12.55a11 11 0 0114 0M8.53 16.11a6 6 0 016.95 0M12 20h.01" />
    </svg>
  )
}

function ParkingIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 010 6H9" />
    </svg>
  )
}

function SecurityIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function ConciergeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
