'use client'
import { motion } from 'framer-motion'
import { Smartphone, Star, Zap, Shield, CheckCircle, Globe, CreditCard, Lock } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-4">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                Coming Soon
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Trusted Local Services,
              <span className="text-primary-500 block">Just a Tap Away</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              QuikFixr simplifies access to everyday home services for individuals and families across India. 
              Connect with verified local professionals — fast, safe, and at fair prices.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">Verified Experts</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">Local Language</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">Fast Booking</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-gray-600">Secure Payments</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button className="btn-primary">
                Join Waitlist
                <Zap className="ml-2 w-5 h-5" />
              </button>
              <button className="btn-secondary">
                Get Notified
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="opacity-60">
              <p className="text-sm text-gray-500 mb-4">Trusted by early users</p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center">
                <div className="flex items-center gap-2 text-gray-400">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm">"Super fast service!" - Pooja S.</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span className="text-sm">"Trustworthy professionals" - Aditya K.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* App Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-72 h-[600px] bg-gray-900 rounded-[3rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-primary-500 h-8 flex items-center justify-between px-4">
                    <span className="text-white text-xs font-medium">QuikFixr</span>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* App Content - Home Screen */}
                  <div className="p-4 space-y-4">
                    <div className="text-center py-4">
                      <h3 className="font-bold text-primary-500 text-lg">Welcome to QuikFixr</h3>
                      <p className="text-xs text-gray-500">Choose your service</p>
                    </div>
                    
                    {/* Service Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center border border-blue-200">
                        <div className="w-10 h-10 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-lg">🔧</span>
                        </div>
                        <p className="text-xs font-medium text-gray-700">Plumbing</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center border border-green-200">
                        <div className="w-10 h-10 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-lg">⚡</span>
                        </div>
                        <p className="text-xs font-medium text-gray-700">Electrical</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center border border-purple-200">
                        <div className="w-10 h-10 bg-purple-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-lg">❄️</span>
                        </div>
                        <p className="text-xs font-medium text-gray-700">AC Repair</p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-xl text-center border border-orange-200">
                        <div className="w-10 h-10 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <span className="text-white text-lg">🧹</span>
                        </div>
                        <p className="text-xs font-medium text-gray-700">Cleaning</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">Quick Booking</span>
                          <Lock className="w-4 h-4 text-green-500" />
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">Verified Experts</span>
                          <Shield className="w-4 h-4 text-blue-500" />
                        </div>
                      </div>
                    </div>
                    
                    <button className="w-full bg-primary-500 text-white py-3 rounded-xl font-medium shadow-lg">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-lg border border-gray-200"
              >
                <Smartphone className="w-6 h-6 text-primary-500" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg border border-gray-200"
              >
                <Star className="w-6 h-6 text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 