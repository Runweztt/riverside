import { motion } from 'framer-motion'

export default function RoomCard({ room, variant = 'default', onViewDetails }) {
  const handleClick = () => {
    if (onViewDetails) {
      onViewDetails(room)
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

  // Common card wrapper classes
  const cardClasses = "group bg-surface overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300"

  if (variant === 'compact') {
    return (
      <motion.article
        whileHover={{ y: -4 }}
        className={`${cardClasses} rounded-xl`}
      >
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
            <img
              src={getImageUrl(room.images[0])}
              alt={room.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {!room.available && (
              <div className="absolute inset-0 bg-secondary-900/70 flex items-center justify-center">
                <span className="text-white font-medium">Fully Booked</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 p-4">
            <div className="flex justify-between items-start gap-2 mb-2">
              <h3 className="font-display font-semibold group-hover:text-primary-500 transition-colors">
                {room.name}
              </h3>
              <div className="text-right flex-shrink-0">
                <span className="text-lg font-bold text-secondary-900">{formatPrice(room.price)}</span>
                <span className="text-text-muted text-xs block uppercase">/night</span>
              </div>
            </div>
            <p className="text-text-secondary text-sm mb-3 line-clamp-2">
              {room.shortDescription}
            </p>
            <div className="flex items-center gap-4 text-xs text-text-muted">
              <span className="flex items-center gap-1.5">
                <BedIcon className="w-3.5 h-3.5" />
                {room.beds}
              </span>
              <span className="flex items-center gap-1.5">
                <GuestIcon className="w-3.5 h-3.5" />
                {room.maxGuests} Guests
              </span>
            </div>
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.article
      whileHover={{ y: -8 }}
      className={cardClasses}
    >
      {/* Image Link */}
      <a href={`#room/${room.slug}`} className="block relative h-56 overflow-hidden">
        <img
          src={getImageUrl(room.images[0])}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/60 to-transparent" />

        {/* Status Badge */}
        {!room.available && (
          <div className="absolute inset-0 bg-secondary-900/80 flex items-center justify-center">
            <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white font-medium border border-white/20">
              Fully Booked
            </span>
          </div>
        )}
      </a>

      {/* Content */}
      <div className="p-6">
        {/* Category & Title */}
        <span className="text-primary-500 text-xs font-medium uppercase tracking-wide mb-1 block">
          {room.category}
        </span>
        <a href={`#room/${room.slug}`} className="block">
          <h3 className="text-xl room-card-title font-display font-semibold mb-2 group-hover:text-primary-500 transition-colors">
            {room.name}
          </h3>
        </a>

        {/* Description */}
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {room.shortDescription}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-text-muted mb-6">
          <span className="flex items-center gap-1.5">
            <BedIcon className="w-4 h-4" />
            {room.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <GuestIcon className="w-4 h-4" />
            {room.maxGuests} Guests
          </span>
        </div>

        {/* Price & CTA Row */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-secondary-900">{formatPrice(room.price)}</span>
            <span className="text-xs text-text-muted uppercase tracking-wider">per night</span>
          </div>

          <a href={`#room/${room.slug}`}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={!room.available}
              className="btn btn-secondary py-2 px-6 text-sm disabled:opacity-50"
            >
              {room.available ? 'View ' : 'Unavailable'}
            </motion.button>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

// Icons
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
