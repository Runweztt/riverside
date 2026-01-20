/**
 * Testimonials Section
 * Guest reviews in a clean grid layout
 */

import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Grace Nakato',
    role: 'Business Traveler',
    avatar: UserIcon,
    quote: "Absolutely stunning property! The attention to detail is remarkable. The futuristic design paired with warm hospitality is a rare combination.",
  },
  {
    id: 2,
    name: 'David Ochieng',
    role: 'Honeymoon Guest',
    avatar: UserIcon,
    quote: "We celebrated our honeymoon here and it exceeded every expectation. The staff made us feel like royalty. The Presidential Suite is pure luxury.",
  },
  {
    id: 3,
    name: 'Esther Uwera',
    role: 'Luxury Traveler',
    avatar: UserIcon,
    quote: "I've stayed at hotels worldwide, and Riverside Suites stands out. The infinity pool at sunset is something you'll never forget.",
  },
]

export default function Testimonials() {
  return (
    <section className="section-lg bg-surface-dim" style={{ marginTop: "-10rem", backgroundColor: "#e0e0e0ff" }}>
      <div className="container-app">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-500 text-sm font-medium uppercase tracking-wider mb-3 block">
            What Our Guests Say
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-w-400 text-secondary-900 mb-4">
            Guest <span className="text-gradient-primary">Reviews</span>
          </h2>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-surface-dim border border-border/50 hover:shadow-xl transition-shadow"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-100 flex items-center justify-center border-4 border-white shadow-sm">
                <testimonial.avatar className="w-10 h-10 text-primary-500" />
              </div>

              {/* Quote */}
              <div className="mb-6 relative">
                <QuoteIcon className="w-8 h-8 text-primary-500/10 absolute -top-4 -left-2" />
                <p className="text-text-secondary font-w-400 leading-relaxed italic relative z-10">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author */}
              <div>
                <h3 className="font-display font-semibold text-lg text-secondary-900">
                  {testimonial.name}
                </h3>
                <p className="text-primary-600 text-sm font-medium">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function QuoteIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
