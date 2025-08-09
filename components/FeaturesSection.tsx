'use client'
import { motion } from 'framer-motion'
import { Shield, DollarSign, Smartphone, Globe, Zap, Lock, CheckCircle, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: "Verified Experts",
    description: "Every service provider on QuikFixr is trained and background-checked to ensure your safety and satisfaction."
  },
  {
    icon: Globe,
    title: "Local Language Support",
    description: "The app supports multiple languages including English and Hindi, so you feel right at home."
  },
  {
    icon: Zap,
    title: "Fast & Easy Booking",
    description: "No long forms or delays — just enter your phone number, choose your service, and get help quickly."
  },
  {
    icon: DollarSign,
    title: "Control Over Payments",
    description: "Only pay when your service is completed — by cash or online, as per your comfort."
  },
  {
    icon: Lock,
    title: "Secure Login",
    description: "Simple phone number OTP login for seamless access. No passwords, no worries."
  },
  {
    icon: Users,
    title: "Trusted by Families",
    description: "Designed to make service access effortless for people of all ages, especially in semi-urban areas."
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-gradient-to-r from-primary-50 to-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose QuikFixr?</h2>
          <p className="section-subtitle">
            Experience the difference with our customer-first approach to home services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 