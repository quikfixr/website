'use client'
import { motion } from 'framer-motion'
import { Bell, ArrowRight, Smartphone, Users, Globe } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-20 right-0 w-32 h-32 bg-white opacity-10 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-24 h-24 bg-white opacity-10 rounded-full animate-float" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6">
            <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              Coming Soon
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Be the First to Experience
            <span className="block text-primary-200">QuikFixr</span>
          </h2>
          
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            QuikFixr aims to simplify access to everyday home services for individuals and families across India. 
            With a strong focus on trust, transparency, and convenience, we connect users with verified local professionals — fast, safe, and at fair prices.
          </p>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-primary-100">
              <Smartphone className="w-6 h-6" />
              <span className="text-sm">Mobile-First Platform</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-100">
              <Users className="w-6 h-6" />
              <span className="text-sm">Verified Professionals</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-primary-100">
              <Globe className="w-6 h-6" />
              <span className="text-sm">Local Language Support</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-full flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Bell className="w-5 h-5" />
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <div className="text-primary-200 text-sm">
              Track our journey and be part of the early users
            </div>
          </div>

          {/* Progress Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-20 rounded-2xl p-6 max-w-md mx-auto"
          >
            <div className="text-white text-sm mb-2">Development Progress</div>
            <div className="w-full bg-white bg-opacity-30 rounded-full h-3 mb-2">
              <motion.div 
                initial={{ width: '0%' }}
                whileInView={{ width: '85%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white h-3 rounded-full relative"
              >
                <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full animate-pulse"></div>
              </motion.div>
            </div>
            <div className="text-primary-100 text-xs">85% Complete • Launching Soon</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 