/**
 * Loading Skeleton Component
 * Displays a branded loading state while the app initializes
 */

import { motion } from 'framer-motion'

export default function LoadingSkeleton() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed inset-0 bg-secondary-950 flex items-center justify-center z-50"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-950 via-secondary-900 to-secondary-950" />
        
        {/* Animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-[80px]"
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
            <span className="text-2xl font-display font-bold text-white">R</span>
          </div>
          <h1 className="text-2xl font-display font-semibold text-white">
            Riverside Suites
          </h1>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          {/* Animated dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
                className="w-2 h-2 rounded-full bg-primary-400"
              />
            ))}
          </div>

          {/* Loading text */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm text-secondary-400 tracking-wide"
          >
            Loading your experience...
          </motion.p>
        </motion.div>

        {/* Skeleton Content Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 w-full max-w-md"
        >
          {/* Skeleton navbar */}
          <div className="flex justify-between items-center mb-8 px-4">
            <div className="w-24 h-8 skeleton rounded" />
            <div className="flex gap-4">
              <div className="w-16 h-4 skeleton rounded hidden md:block" />
              <div className="w-16 h-4 skeleton rounded hidden md:block" />
              <div className="w-20 h-8 skeleton rounded" />
            </div>
          </div>

          {/* Skeleton hero content */}
          <div className="space-y-4 px-4">
            <div className="w-3/4 mx-auto h-8 skeleton rounded" />
            <div className="w-1/2 mx-auto h-4 skeleton rounded" />
            <div className="flex justify-center gap-4 mt-6">
              <div className="w-28 h-10 skeleton rounded" />
              <div className="w-28 h-10 skeleton rounded" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
