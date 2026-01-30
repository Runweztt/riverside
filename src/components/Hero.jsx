/**
 * Hero Section
 * Video background for desktop, image fallback for mobile
 */

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import hotelBuilding from '../assets/hotel-building.jpg'
import hotelRoom from '../assets/hotel-room.jpg'

const images = [hotelBuilding, hotelRoom]

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0, 0, 0.2, 1],
    },
  }),
}

// Floating particles for mobile
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
}))

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef(null)

  // Image slider for fallback
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-[68vh] md:h-[78vh] flex items-center justify-center overflow-hidden bg-secondary-950">
      {/* ============ VIDEO BACKGROUND (Desktop) ============ */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Video - Commercial (muted, autoplay, loop) */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="hidden md:block absolute inset-0 w-full h-full object-cover"
          poster={hotelBuilding}
        >
          {/* Cloudinary hosted commercial video */}
          <source src="https://res.cloudinary.com/ddlggvxue/video/upload/commercial_qbjo23.mp4" type="video/mp4" />
        </video>

        {/* Image Fallback (Mobile or when video not loaded) */}
        <div className={`md:hidden absolute inset-0 ${videoLoaded ? 'md:opacity-0' : ''}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <motion.img
                src={images[currentIndex]}
                alt={`Riverside Suites Background ${currentIndex + 1}`}
                className="w-full h-full object-cover object-center"
                animate={{
                  scale: [1, 1.05],
                  x: [0, -10],
                  y: [0, -5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/70 via-secondary-950/40 to-secondary-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-950/60 via-transparent to-secondary-950/60" />

        {/* Mobile Specific Effects (Particles/Grid) */}
        <div className="md:hidden">
          {/* Animated Grid Lines */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <motion.div
              animate={{ y: [0, -50] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(4, 200, 176, 0.3) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(4, 200, 176, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          {/* Floating Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-primary-400 pointer-events-none"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* ============ DECORATIVE ELEMENTS ============ */}
      {/* Animated Geometric Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-20 -right-20 w-80 h-80 border border-primary-500/20 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-10 -right-10 w-60 h-60 border border-primary-400/30 rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-32 -left-32 w-96 h-96 border border-accent-500/20 rounded-full pointer-events-none"
      />

      {/* Pulsing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/30 rounded-full blur-[60px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent-500/20 rounded-full blur-[50px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary-400/25 rounded-full blur-[40px] pointer-events-none"
      />

      {/* Ambient Glow Orbs (Desktop) */}
      <div className="absolute inset-0 hidden md:block pointer-events-none">
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-500/20 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-500/15 rounded-full blur-[80px]"
        />
      </div>

      {/* ============ CONTENT ============ */}
      <div className="container-app relative z-10 pt-24 pb-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h1
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl hero-title text-white mb-4 md:mb-6 leading-[1.1] drop-shadow-lg"
          >
            Luxury Living{' '}
            <br />
            Elegantly
            <span className="relative inline-block ml-2">
              <span className="text-gradient-primary">Redefined</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-primary-400 to-primary-600 origin-left rounded-full"
              />
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-base hero-description md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          >
            Experience the future of hospitality at Riverside Suites.
            Premium accommodations and world-class amenities await.
          </motion.p>

          <motion.div
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
          >
            <motion.a
              href="#booking"
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(4, 200, 176, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className=" btn btn-primary text-base px-6 md:px-8 py-3 md:py-4 touch-target"
            >
              Book Your Stay
            </motion.a>
            <motion.a
              href="#rooms"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn text-white border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-primary-500/50 text-base px-6 md:px-8 py-3 md:py-4 touch-target"
            >
              Explore Suites
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator (Desktop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2 backdrop-blur-sm"
        >
          <motion.div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
