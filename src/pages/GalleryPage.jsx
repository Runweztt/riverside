/**
 * Gallery Page
 * Masonry grid with lightbox modal
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import heroBg from '../assets/35.jpg'
import img2 from '../assets/2.jpg'
import img12 from '../assets/12.jpg'
import img17 from '../assets/17.jpg'
import img19 from '../assets/19.jpg'
import img29 from '../assets/29.jpg'
import img35 from '../assets/35.jpg'
import img52 from '../assets/52.jpg'
import img54 from '../assets/54.jpg'
import img58 from '../assets/58.jpg'
import imgBuilding from '../assets/hotel-building.jpg'
import imgRoom from '../assets/hotel-room.jpg'
import MainLayout from '../layouts/MainLayout'

const galleryImages = [
  {
    id: 1,
    src: imgBuilding,
    alt: 'Hotel exterior at sunset',
    category: 'exterior',
    span: 'tall',
  },
  {
    id: 2,
    src: imgRoom,
    alt: 'Luxury suite bedroom',
    category: 'rooms',
    span: 'normal',
  },
  {
    id: 3,
    src: img12,
    alt: 'Presidential suite living area',
    category: 'rooms',
    span: 'wide',
  },
  {
    id: 4,
    src: img29,
    alt: 'Infinity pool view',
    category: 'amenities',
    span: 'normal',
  },
  {
    id: 5,
    src: img19,
    alt: 'Penthouse terrace',
    category: 'rooms',
    span: 'tall',
  },
  {
    id: 6,
    src: img17,
    alt: 'Spa treatment room',
    category: 'amenities',
    span: 'normal',
  },
  {
    id: 7,
    src: img35,
    alt: 'Fine dining restaurant',
    category: 'dining',
    span: 'wide',
  },
  {
    id: 8,
    src: img52,
    alt: 'Executive room',
    category: 'rooms',
    span: 'normal',
  },
  {
    id: 9,
    src: img54,
    alt: 'Hotel lobby',
    category: 'exterior',
    span: 'normal',
  },
  {
    id: 10,
    src: img2,
    alt: 'Bathroom with skylight',
    category: 'rooms',
    span: 'tall',
  },
  {
    id: 11,
    src: img58,
    alt: 'Bar and lounge',
    category: 'dining',
    span: 'normal',
  },
  {
    id: 12,
    src: img17,
    alt: 'River view from balcony',
    category: 'exterior',
    span: 'wide',
  },
]

const categories = [
  { id: 'all', label: 'All' },
  { id: 'rooms', label: 'Rooms & Suites' },
  { id: 'amenities', label: 'Amenities' },
  { id: 'dining', label: 'Dining' },
  { id: 'exterior', label: 'Exterior' },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index) => {
    setActiveImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % filteredImages.length)
  }

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  return (
    <MainLayout pageKey="gallery">
      {/* Hero */}
      <section className="relative py-20 bg-secondary-950 overflow-hidden" style={{ paddingTop: '110px' }}>
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Our Gallery"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/80 via-secondary-950/50 to-secondary-950" />
        </div>
        <div className="container-app relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-4 block display-none">
              Visual Journey
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-w-400 text-white mb-6" style={{ paddingTop: '50px' }}>
              Our <span className="text-gradient-primary">Gallery</span>
            </h1>
            <p className="text-secondary-300 text-lg hero-description">
              Explore the elegance and beauty of Riverside Suites through our curated collection of photographs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 md:top-20 z-20 bg-surface border-b border-border ">
        <div className="container-app py-4">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeCategory === cat.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-surface-dim text-text-secondary hover:bg-primary-50 hover:text-primary-600'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-md bg-surface-dim">
        <div className="container-app">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openLightbox(index)}
                    className={`relative overflow-hidden rounded-xl cursor-pointer group ${image.span === 'tall' ? 'aspect-[3/4]' :
                      image.span === 'wide' ? 'aspect-[4/3]' :
                        'aspect-square'
                      }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-white text-sm font-medium">{image.alt}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ZoomIcon className="w-5 h-5 text-white" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-secondary-950/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <CloseIcon className="w-6 h-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={activeImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={filteredImages[activeImage]?.src}
              alt={filteredImages[activeImage]?.alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Caption & Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-white font-medium mb-2">
                {filteredImages[activeImage]?.alt}
              </p>
              <p className="text-white/60 text-sm">
                {activeImage + 1} / {filteredImages.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  )
}

// Icons
function ZoomIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M5 8a1 1 0 011-1h1V6a1 1 0 012 0v1h1a1 1 0 110 2H9v1a1 1 0 11-2 0V9H6a1 1 0 01-1-1z" />
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  )
}
