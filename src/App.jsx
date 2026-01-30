/**
 * App Entry Point - Riverside Suites
 * Hash-based routing for all pages
 */

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import HomePage from './pages/HomePage'
import RoomsPage from './pages/RoomsPage'
import RoomDetailsPage from './pages/RoomDetailsPage'
import BookingPage from './pages/BookingPage'
import AmenitiesPage from './pages/AmenitiesPage'
import GalleryPage from './pages/GalleryPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import GymPage from './pages/GymPage'
import LoadingSkeleton from './components/LoadingSkeleton'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')
  const [roomSlug, setRoomSlug] = useState(null)

  // Show loading skeleton on initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000) // Show loading skeleton for 2 seconds
    return () => clearTimeout(timer)
  }, [])

  // Hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home'
      
      if (hash.startsWith('room/')) {
        setCurrentPage('room-details')
        setRoomSlug(hash.replace('room/', ''))
      } else {
        setCurrentPage(hash)
        setRoomSlug(null)
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (page) => {
    window.location.hash = page
  }

  const navigateToRoom = (slug) => {
    window.location.hash = `room/${slug}`
  }

  const goBack = () => {
    navigate('rooms')
  }

  const goHome = () => {
    navigate('home')
  }

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage, roomSlug])

  // Determine which page to render
  const renderPage = () => {
    switch (currentPage) {
      case 'rooms':
        return <RoomsPage onNavigateToRoom={navigateToRoom} />
      case 'room-details':
        return <RoomDetailsPage slug={roomSlug} onBack={goBack} />
      case 'booking':
        return <BookingPage onBack={goHome} />
      case 'amenities':
        return <AmenitiesPage />
      case 'gallery':
        return <GalleryPage />
      case 'about':
        return <AboutPage />
      case 'contact':
        return <ContactPage />
      case 'gym':
        return <GymPage />
      default:
        return <HomePage />
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingSkeleton key="loader" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {renderPage()}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
