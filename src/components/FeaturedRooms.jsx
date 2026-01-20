import { motion } from 'framer-motion'
import { useRef } from 'react'
import RoomCard from './RoomCard'
import { rooms } from '../utils/roomsData'

export default function FeaturedRooms() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
    }
  }

  return (
    <section className="section-lg bg-surface-dim -mt-12 overflow-hidden">
      <div className="container-app">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <span className="display-none text-primary-500 text-sm font-medium uppercase tracking-wider mb-3 block">
              Accommodations
            </span>
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-display mb-2 font-w-400 suites-title">
              Our <span className="text-gradient-primary">Suites</span>
            </h2>
            <p className="text-text-secondary max-w-2xl ">
              Each suite is designed with futuristic elegance for an unforgettable stay.
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-3 rounded-full border border-border bg-white hover:bg-primary-50 hover:text-primary-600 transition-all shadow-sm text-secondary-900"
                aria-label="Previous rooms"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 rounded-full border border-border bg-white hover:bg-primary-50 hover:text-primary-600 transition-all shadow-sm text-secondary-900"
                aria-label="Next rooms"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="hidden md:block">
              <a href="#rooms">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn btn-secondary px-8"
                >
                  View All Rooms
                </motion.button>
              </a>
            </div>
          </div>
        </div>

        {/* Room Carousel Container */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {rooms.map((room) => (
              <div
                key={room.id}
                className="flex-none w-[85%] sm:w-[45%] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <RoomCard room={room} />
              </div>
            ))}
          </div>
        </div>

        {/* View All - Mobile Only */}
        <div className="text-center mt-10 md:hidden">
          <a href="#rooms">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary px-8"
            >
              View All Rooms
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  )
}

// Icons
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
