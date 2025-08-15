'use client'

import { motion } from 'framer-motion'

const clients = [
  { name: 'TRI-STATE', logo: 'TRI-STATE' },
  { name: 'whamd', logo: 'whamd' },
  { name: 'KBC', logo: 'KBC' },
  { name: 'RHYNO', logo: 'RHYNO' },
  { name: 'silver-top', logo: 'silver-top' },
]

export default function ClientLogos() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've helped businesses across various industries modernize their systems and achieve remarkable results.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="bg-gray-100 rounded-lg px-6 py-4 min-h-[80px] flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-700">{client.logo}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
