'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="text-3xl font-bold mb-4">
              <span className="text-green-400">ais</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              For over 35 years, AIS has been the trusted partner for businesses looking to modernize their legacy systems and achieve remarkable results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin size={20} />
              </a>
            </div>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">System Analysis</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Modernization</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Migration</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Integration</a></li>
            </ul>
          </motion.div>
          
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 AIS. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
