'use client'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Pooja S.",
    location: "Early User",
    service: "Plumbing",
    rating: 5,
    review: "QuikFixr made it so easy to find a trustworthy plumber. Super fast!",
    avatar: "PS"
  },
  {
    name: "Aditya K.",
    location: "Early User",
    service: "AC Repair",
    rating: 5,
    review: "This app actually works where I live. Really impressed with the service quality.",
    avatar: "AK"
  },
  {
    name: "Priya Sharma",
    location: "Indore, MP",
    service: "Home Cleaning",
    rating: 5,
    review: "The cleaning service was professional and thorough. Love how I can book everything from one app. QuikFixr is a game-changer for busy families like ours!",
    avatar: "PS"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our Early Users Say</h2>
          <p className="section-subtitle">
            Real experiences from real customers across India
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-6 relative group"
            >
              {/* Quote Mark */}
              <div className="absolute -top-4 left-6 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">"</span>
              </div>

              {/* Review Text */}
              <div className="mt-6 mb-6">
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.avatar}
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <span className="inline-block bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full mt-1">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary-500 mb-2">Coming</div>
            <div className="text-gray-600">Soon</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-500 mb-2">Multiple</div>
            <div className="text-gray-600">Languages</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-500 mb-2">Verified</div>
            <div className="text-gray-600">Experts</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-500 mb-2">Secure</div>
            <div className="text-gray-600">Payments</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 