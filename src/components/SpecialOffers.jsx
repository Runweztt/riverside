/**
 * Special Offers Section
 * Auto-sliding posters of current deals
 */

import { motion } from 'framer-motion'
import { useRef } from 'react'
import post1 from '../assets/POST-1.webp'
import post5 from '../assets/POST-5.jpg'
import post14 from '../assets/POST-14.jpg'
import post15 from '../assets/POST-15.webp'
import post6 from '../assets/POST-6.webp'
import post7 from '../assets/POST-7.webp'

const offers = [
    { id: 1, image: post1, title: 'Summer Escape' },
    { id: 2, image: post5, title: 'Weekend Special' },
    { id: 3, image: post14, title: 'Business Pack' },
    { id: 4, image: post15, title: 'Family Fun' },
    { id: 5, image: post6, title: 'Romantic Getaway' },
    { id: 6, image: post7, title: 'Last Minute' },
]



export default function SpecialOffers() {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth
                : scrollLeft + clientWidth

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <section className="py-20 bg-surface">
            <div className="container-app mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-left"
                >
                    <span className="text-primary-500 text-sm font-medium uppercase tracking-wider mb-3 block">
                        Exclusive Deals
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-4xl font-w-400 text-secondary-900">
                        Special <span className="text-gradient-primary">Offers</span>
                    </h2>
                </motion.div>

                {/* Navigation Buttons */}
                <div className="flex gap-3">
                    <button
                        onClick={() => scroll('left')}
                        className="p-3 rounded-full border border-border hover:bg-primary-50 hover:text-primary-600 transition-all shadow-sm"
                        aria-label="Previous offers"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-3 rounded-full border border-border hover:bg-primary-50 hover:text-primary-600 transition-all shadow-sm"
                        aria-label="Next offers"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="container-app">
                <div
                    ref={scrollRef}
                    className="flex gap-4 md:gap-6 overflow-x-auto hide-scrollbar pb-8 snap-x snap-mandatory"
                >
                    {offers.map((offer) => (
                        <a
                            href="#rooms"
                            key={offer.id}
                            className="flex-shrink-0 w-[85%] sm:w-[45%] lg:w-[calc(25%-18px)] aspect-square rounded-2xl overflow-hidden shadow-lg border border-border snap-center group"
                        >
                            <img
                                src={offer.image}
                                alt={offer.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

function ChevronLeftIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polyline points="15 18 9 12 15 6" />
        </svg>
    )
}

function ChevronRightIcon(props) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <polyline points="9 18 15 12 9 6" />
        </svg>
    )
}
