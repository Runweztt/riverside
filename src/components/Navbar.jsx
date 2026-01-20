/**
 * Navbar Component
 * Futuristic sticky navigation with mobile menu
 */

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logoSvg from '../assets/logo.png'
import logoMobile from '../assets/logo-mobile.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Suites', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
        className={`fixed top-0 inset-x-0 z-[999] transition-all duration-500 ${isScrolled ? 'bg-secondary-500/80 backdrop-blur-xl shadow-lg border-b border-white/10' : 'bg-transparent'
          }`}
      >
        <nav
          className="container-app flex items-center justify-between h-16 md:h-20"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Desktop Navigation - Split Layout */}
          <div className="hidden lg:grid grid-cols-3 items-center w-full gap-8">
            {/* Left Nav */}
            <div className="flex items-center justify-start gap-8">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-200 hover:text-primary-500 ${isScrolled ? 'text-white' : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Centered Logo */}
            <div className="flex justify-center">
              <a
                href="#home"
                className="flex items-center z-10"
                aria-label="Riverside Suites - Home"
              >
                <motion.img
                  src={logoSvg}
                  alt="Riverside Suites"
                  className="h-16 md:h-24 w-auto drop-shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              </a>
            </div>

            {/* Right Nav + CTA */}
            <div className="flex items-center justify-end gap-8">
              {navLinks.slice(4).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-200 hover:text-primary-500 ${isScrolled ? 'text-white' : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.label}
                </a>
              ))}
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`btn ${isScrolled ? 'btn-primary' : 'bg-white text-secondary-900 hover:bg-white/90'}`}
              >
                Book Now
              </motion.a>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[1002] w-11 h-11 flex items-center justify-center touch-target"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={{
                  rotate: isOpen ? 45 : 0,
                  y: isOpen ? 8 : 0,
                }}
                transition={{ duration: 0.2 }}
                className={`block h-0.5 rounded-full origin-center transition-colors ${isOpen ? 'bg-text' : (isScrolled ? 'bg-white' : 'bg-white')
                  }`}
              />
              <motion.span
                animate={{
                  opacity: isOpen ? 0 : 1,
                  scaleX: isOpen ? 0 : 1,
                }}
                transition={{ duration: 0.1 }}
                className={`block h-0.5 rounded-full ${isOpen ? 'bg-text' : (isScrolled ? 'bg-white' : 'bg-white')
                  }`}
              />
              <motion.span
                animate={{
                  rotate: isOpen ? -45 : 0,
                  y: isOpen ? -8 : 0,
                }}
                transition={{ duration: 0.2 }}
                className={`block h-0.5 rounded-full origin-center transition-colors ${isOpen ? 'bg-text' : (isScrolled ? 'bg-white' : 'bg-white')
                  }`}
              />
            </div>
          </button>

          {/* Mobile Logo (Visible only on mobile) */}
          <div className="flex lg:hidden flex-1 justify-center pr-11">
            <img src={logoMobile} alt="Riverside Suites" className="h-10 w-auto" />
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[1000] bg-secondary-500/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-[1001] w-80 max-w-[85vw] bg-surface shadow-2xl lg:hidden overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-secondary-100 hover:bg-secondary-200 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5 text-secondary-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              {/* Nav Links */}
              <nav className="flex-1" aria-label="Mobile navigation">
                <ul className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 + 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center py-3 px-4 text-lg font-medium text-text hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-6 border-t border-border"
              >
                <button className="btn btn-primary w-full justify-center">
                  Book Now
                </button>
                <p className="mt-4 text-center text-sm text-text-muted">
                  Najjerra's Premier Destination
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
