/**
 * Featured Rooms Section
 * Showcase of room types with hover effects
 */

import { motion } from 'framer-motion'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    description: 'Spacious suite with panoramic river views ',
    price: '150,000',
    size: '2',
    guests: 2,
    features: ['River View', 'King Bed', 'Smart TV', 'Mini Bar'],
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
  },
  {
    id: 2,
    name: 'Executive Room',
    description: 'Modern comfort with dedicated workspace',
    price: '300,000',
    size: '1',
    guests: 2,
    features: ['City View', 'Work Desk', 'Queen Bed', 'Coffee Machine'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80',
  },
  {
    id: 3,
    name: 'Presidential Suite',
    description: 'Ultimate luxury with private terrace',
    price: '450,000',
    size: '4',
    guests: 4,
    features: ['Private Terrace', 'Butler Service', 'Jacuzzi', 'Living Room'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] },
  },
}

export default function FeaturedRooms() {
  return (
    <section className="section-lg bg-surface-dim -mt-12">
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
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-display mb-2 font-w-400">
              Featured <span className="text-gradient-primary">Suites</span>
            </h2>
            <p className="text-text-secondary max-w-2xl ">
              Each suite is designed with futuristic elegance for an unforgettable stay.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="hidden md:block -mt-3"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-secondary px-8 "
            >
              View All Rooms
            </motion.button>
          </motion.div>
        </div>

        {/* Room Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {rooms.map((room) => (
            <motion.article
              key={room.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-surface -overflow-hidden border border-border shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl room-card-title font-display font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {room.name}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {room.description}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                  <span className="flex items-center gap-1">
                    <BedIcon className="w-4 h-4" />
                    {room.size} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <GuestIcon className="w-4 h-4" />
                    {room.guests} Guests
                  </span>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4 display-none">
                  {room.features.slice(0, 3).map((feature, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price & CTA Row */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-secondary-900">UGX {room.price}</span>
                    <span className="text-xs text-text-muted uppercase tracking-wider">per night</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-secondary py-2 px-6 text-sm"
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View All - Mobile Only */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10 md:hidden"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-primary px-8"
          >
            View All Rooms
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function BedIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.25 4.5A2.25 2.25 0 0 0 3 6.75V18a.75.75 0 0 0 1.5 0v-1.5h15V18a.75.75 0 0 0 1.5 0V6.75a2.25 2.25 0 0 0-2.25-2.25H5.25ZM6 7.5h4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-3A.75.75 0 0 1 6 7.5Zm7.5.75a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3.75a.75.75 0 0 1-.75-.75v-3ZM4.5 15v-2.25h15V15h-15Z" />
    </svg>
  )
}

function GuestIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
    </svg>
  )
}
