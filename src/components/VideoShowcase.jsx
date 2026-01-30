/**
 * Video Showcase Component
 * Display videos for Riverside Suites - highlight, amenities
 */

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Video data - Cloudinary hosted videos
const videos = [
  {
    id: 1,
    title: 'Bar & Lounge',
    description: 'Unwind in our premium bar',
    category: 'amenities',
    src: 'https://res.cloudinary.com/ddlggvxue/video/upload/bar_kpbrn7.mp4',
    thumbnail: '/videos/bar-thumb.jpg',
    featured: true,
  },
]

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null)
  const [filter, setFilter] = useState('all')

  const filteredVideos = filter === 'all' 
    ? videos 
    : videos.filter(v => v.category === filter)

  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'amenities', label: 'Amenities' },
  ]

  return (
    <section className="section-lg bg-surface-dim">
      <div className="container-app">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-500 text-sm font-medium uppercase tracking-wider mb-2 block">
            Media Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-secondary-900 mb-4">
            Experience <span className="text-gradient-primary">Riverside</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Take a virtual tour of our premium facilities and discover what makes Riverside Suites extraordinary.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-surface text-text-secondary hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-xl bg-secondary-900 cursor-pointer ${
                  video.featured ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setActiveVideo(video)}
              >
                {/* Video Thumbnail / Preview */}
                <div className={`relative ${video.featured ? 'aspect-video' : 'aspect-video'}`}>
                  {/* Placeholder - replace with actual thumbnail */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary-800 to-secondary-950 flex items-center justify-center">
                    <div className="text-center p-6">
                      <VideoIcon className="w-16 h-16 text-primary-400 mx-auto mb-4 opacity-50" />
                      <p className="text-white/60 text-sm">
                        Add video: {video.src}
                      </p>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/90 via-secondary-950/20 to-transparent" />

                  {/* Play Button */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-primary-500 group-hover:border-primary-400 transition-all">
                      <PlayIcon className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium uppercase tracking-wide bg-primary-500/90 text-white rounded-full">
                      {video.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-display font-semibold text-white mb-1">
                      {video.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {video.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary-950/95 backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
                >
                  <CloseIcon className="w-8 h-8" />
                </button>

                {/* Video Player */}
                <div className="relative aspect-video bg-secondary-900 rounded-xl overflow-hidden">
                  <video
                    src={activeVideo.src}
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Video Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-2xl font-display font-semibold text-white">
                    {activeVideo.title}
                  </h3>
                  <p className="text-white/60 mt-1">
                    {activeVideo.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// Icons
function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5.14v14l11-7-11-7z" />
    </svg>
  )
}

function VideoIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
    </svg>
  )
}

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}
