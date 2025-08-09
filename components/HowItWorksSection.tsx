'use client'
import { motion } from 'framer-motion'
import { QrCode, Search, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: QrCode,
    title: "Scan QR or Download App",
    description: "Get started instantly by scanning our QR code or downloading the QuikFikr app from your app store."
  },
  {
    icon: Search,
    title: "Choose Your Service",
    description: "Browse through our wide range of home services and select the one that matches your needs."
  },
  {
    icon: CheckCircle,
    title: "Get Instant Help",
    description: "Connect with verified local experts and get your problem solved quickly and efficiently."
  }
]

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">How QuikFikr Works</h2>
          <p className="section-subtitle">
            Getting help for your home has never been this simple
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-20 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-primary-200 via-primary-300 to-primary-200"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative text-center group"
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {index + 1}
              </div>
              
              <div className="card p-8 pt-12">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-400 to-primary-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white p-8 rounded-2xl shadow-lg border-2 border-primary-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Scan to Get Started</h3>
            <div className="w-32 h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-sm text-gray-500">
              Scan this QR code with your phone camera
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 