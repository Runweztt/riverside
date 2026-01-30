/**
 * ZENRGY Gym & Sauna Page
 * Premium fitness facility at Riverside Suites
 */

import { motion } from 'framer-motion'
import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'

// Gym features/services
const gymFeatures = [
  {
    icon: 'dumbbell',
    title: 'State-of-the-Art Equipment',
    description: 'Premium cardio machines, free weights, and resistance training equipment from top brands.',
  },
  {
    icon: 'heart',
    title: 'Personal Training',
    description: 'Expert trainers available for personalized workout plans and one-on-one sessions.',
  },
  {
    icon: 'users',
    title: 'Group Classes',
    description: 'Join energizing group fitness classes including yoga, HIIT, and strength training.',
  },
  {
    icon: 'clock',
    title: '24/7 Access',
    description: 'Train on your schedule with round-the-clock access for hotel guests.',
  },
]

// Sauna & Wellness features
const saunaFeatures = [
  {
    icon: 'flame',
    title: 'Finnish Sauna',
    description: 'Traditional dry sauna experience for deep relaxation and detoxification.',
  },
  {
    icon: 'droplet',
    title: 'Steam Room',
    description: 'Rejuvenating steam therapy to cleanse pores and improve circulation.',
  },
  {
    icon: 'snowflake',
    title: 'Cold Plunge',
    description: 'Invigorating cold therapy to boost recovery and mental clarity.',
  },
  {
    icon: 'spa',
    title: 'Relaxation Lounge',
    description: 'Tranquil space to unwind before or after your wellness session.',
  },
]

// Membership plans
const membershipPlans = [
  {
    name: 'Day Pass',
    price: '50,000',
    period: 'per day',
    features: ['Full gym access', 'Sauna & steam room', 'Towel service', 'Locker access'],
    popular: false,
  },
  {
    name: 'Monthly',
    price: '350,000',
    period: 'per month',
    features: ['Unlimited gym access', 'Sauna & steam room', 'Personal trainer (2 sessions)', 'Group classes', 'Locker access'],
    popular: true,
  },
  {
    name: 'Annual',
    price: '3,500,000',
    period: 'per year',
    features: ['Unlimited gym access', 'Sauna & steam room', 'Personal trainer (monthly)', 'All group classes', 'Priority booking', 'Guest passes (4)'],
    popular: false,
  },
]

export default function GymPage() {
  const [activeTab, setActiveTab] = useState('gym')

  return (
    <MainLayout pageKey="gym">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-secondary-950">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950" />
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/30 rounded-full blur-[80px]" />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-950/50 via-transparent to-secondary-950" />
        </div>

        {/* Content */}
        <div className="container-app relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-300 text-sm font-medium mb-6">
              Premium Fitness & Wellness
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4">
              <span className="text-gradient-primary">ZENRGY</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light mb-2">
              Gym & Wellness Center
            </p>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
              Elevate your fitness journey with state-of-the-art equipment, 
              expert trainers, and premium wellness facilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#membership"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary text-base px-8 py-4"
              >
                Join Now
              </motion.a>
              <motion.a
                href="#facilities"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn text-white border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-base px-8 py-4"
              >
                Explore Facilities
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section id="facilities" className="bg-surface-dim py-8 sticky top-16 z-20 border-b border-border">
        <div className="container-app">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('gym')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'gym'
                  ? 'bg-primary-500 text-white'
                  : 'bg-surface text-text-secondary hover:bg-primary-50'
              }`}
            >
              <DumbbellIcon className="w-5 h-5 inline-block mr-2" />
              Gym
            </button>
            <button
              onClick={() => setActiveTab('sauna')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'sauna'
                  ? 'bg-primary-500 text-white'
                  : 'bg-surface text-text-secondary hover:bg-primary-50'
              }`}
            >
              <FlameIcon className="w-5 h-5 inline-block mr-2" />
              Sauna & Wellness
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-lg bg-surface">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-secondary-900 mb-4">
              {activeTab === 'gym' ? 'World-Class Gym Facilities' : 'Sauna & Wellness Retreat'}
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {activeTab === 'gym'
                ? 'Experience premium fitness with cutting-edge equipment and expert guidance.'
                : 'Rejuvenate your body and mind with our comprehensive wellness offerings.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === 'gym' ? gymFeatures : saunaFeatures).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-surface-dim p-6 rounded-xl border border-border hover:border-primary-300 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-500 transition-colors">
                  <FeatureIcon name={feature.icon} className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section id="membership" className="section-lg bg-secondary-950">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 text-sm font-medium uppercase tracking-wider mb-2 block">
              Membership Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
              Choose Your <span className="text-gradient-primary">Fitness Journey</span>
            </h2>
            <p className="text-secondary-400 max-w-2xl mx-auto">
              Select the plan that fits your lifestyle and start transforming today.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 rounded-2xl border ${
                  plan.popular
                    ? 'bg-gradient-to-b from-primary-900/50 to-secondary-900 border-primary-500'
                    : 'bg-secondary-900/50 border-secondary-700'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6 pt-2">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-secondary-400">UGX</span>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                  <span className="text-secondary-400 text-sm">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-secondary-300 text-sm">
                      <CheckIcon className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`block w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-primary-500 text-white hover:bg-primary-600'
                      : 'bg-secondary-800 text-white hover:bg-secondary-700 border border-secondary-600'
                  }`}
                >
                  Get Started
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Booking CTA */}
      <section id="contact" className="section-lg bg-surface">
        <div className="container-app">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '32px 32px'
                }} />
              </div>

              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
                  Ready to Transform Your Fitness?
                </h2>
                <p className="text-primary-100 mb-8 max-w-xl mx-auto">
                  Contact us to schedule a tour, book a trial session, or sign up for membership.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Email */}
                  <a
                    href="mailto:zenrgygym@gmail.com"
                    className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <EmailIcon className="w-6 h-6 text-white" />
                    <div className="text-left">
                      <p className="text-xs text-primary-200">Email Us</p>
                      <p className="text-white font-medium">zenrgygym@gmail.com</p>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/zenrgy_gym"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <InstagramIcon className="w-6 h-6 text-white" />
                    <div className="text-left">
                      <p className="text-xs text-primary-200">Follow Us</p>
                      <p className="text-white font-medium">@zenrgy_gym</p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+256700000000"
                    className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors"
                  >
                    <PhoneIcon className="w-6 h-6 text-white" />
                    <div className="text-left">
                      <p className="text-xs text-primary-200">Call Us</p>
                      <p className="text-white font-medium">+256 700 000 000</p>
                    </div>
                  </a>
                </div>

                <motion.a
                  href="mailto:zenrgygym@gmail.com?subject=Gym Membership Inquiry"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                >
                  Book a Free Trial
                  <ArrowRightIcon className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

// Feature Icon Component
function FeatureIcon({ name, className }) {
  const icons = {
    dumbbell: <DumbbellIcon className={className} />,
    heart: <HeartIcon className={className} />,
    users: <UsersIcon className={className} />,
    clock: <ClockIcon className={className} />,
    flame: <FlameIcon className={className} />,
    droplet: <DropletIcon className={className} />,
    snowflake: <SnowflakeIcon className={className} />,
    spa: <SpaIcon className={className} />,
  }
  return icons[name] || null
}

// Icons
function DumbbellIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11M3 9h3.5M3 15h3.5M17.5 9H21M17.5 15H21" />
    </svg>
  )
}

function HeartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  )
}

function UsersIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  )
}

function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function FlameIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
    </svg>
  )
}

function DropletIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8 8 0 01-8-8c0-4.5 8-11 8-11s8 6.5 8 11a8 8 0 01-8 8z" />
    </svg>
  )
}

function SnowflakeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
    </svg>
  )
}

function SpaIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 007.92 12.446A9 9 0 1112 3z" />
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function EmailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}
