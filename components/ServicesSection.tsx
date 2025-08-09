'use client'
import { motion } from 'framer-motion'
import { Wrench, Zap, Snowflake, Hammer, Sparkles, Settings, Scissors, Bug } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: "Electricians",
    description: "Professional electrical work and repairs",
    color: "from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600"
  },
  {
    icon: Zap,
    title: "Plumbers",
    description: "Expert plumbing services and repairs",
    color: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600"
  },
  {
    icon: Snowflake,
    title: "AC Repair",
    description: "Air conditioning installation and maintenance",
    color: "from-cyan-50 to-cyan-100",
    borderColor: "border-cyan-200",
    iconColor: "text-cyan-600"
  },
  {
    icon: Hammer,
    title: "Carpenters",
    description: "Custom woodwork and furniture repairs",
    color: "from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
    iconColor: "text-amber-600"
  },
  {
    icon: Sparkles,
    title: "Home Cleaning",
    description: "Professional home cleaning services",
    color: "from-green-50 to-green-100",
    borderColor: "border-green-200",
    iconColor: "text-green-600"
  },
  {
    icon: Settings,
    title: "Appliance Repair",
    description: "Repair and maintenance of home appliances",
    color: "from-purple-50 to-purple-100",
    borderColor: "border-purple-200",
    iconColor: "text-purple-600"
  },
  {
    icon: Scissors,
    title: "At-Home Salon",
    description: "Beauty services at your doorstep",
    color: "from-pink-50 to-pink-100",
    borderColor: "border-pink-200",
    iconColor: "text-pink-600"
  },
  {
    icon: Bug,
    title: "Pest Control",
    description: "Professional pest control and prevention",
    color: "from-red-50 to-red-100",
    borderColor: "border-red-200",
    iconColor: "text-red-600"
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Services We Offer</h2>
          <p className="section-subtitle">
            From essential repairs to beauty services — everything you need, just a tap away
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${service.color} p-6 rounded-xl border ${service.borderColor} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
            >
              <div className={`w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">
            And many more services coming soon!
          </p>
          <button className="btn-primary">
            Join Waitlist
            <Zap className="ml-2 w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
} 