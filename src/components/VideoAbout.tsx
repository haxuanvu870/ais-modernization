'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function VideoAbout() {
  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              See AIS in Action
            </h2>
            
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-90" />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-red-700 transition-colors cursor-pointer">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <p className="text-white text-lg font-medium">Watch Our Story</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Over 30 Years of Excellence
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              For 30+ years, AIS has aided companies in upgrading from legacy systems to modern solutions, 
              supporting VFP applications for mid- and large-sized businesses, valued by 5,000+ U.S. firms 
              for its efficiency.
            </p>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                <div className="text-gray-600">U.S. Firms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
