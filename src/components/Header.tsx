'use client'

import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 text-white">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
        }}
      />
      
      {/* Navigation */}
      <nav className="relative z-20 px-6 py-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-white">
            <span className="text-green-400">ais</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#services" className="hover:text-green-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
            <a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-4 pb-4 border-t border-white/20"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#services" className="hover:text-green-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-green-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
              <a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a>
            </div>
          </motion.div>
        )}
      </nav>
      
      {/* Hero Section */}
      <div className="relative z-20 px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Modernize Your{' '}
            <span className="text-green-400">Visual FoxPro & X-Based Programs</span>{' '}
            With A Team You Can Trust
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl"
          >
            With Modern VFP, SQL and PHP Code in Modern VFP, SQL and PHP Code with code - VFP, SQL, and PHP Code with functions are now real-time.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
          >
            <span>Schedule a Free Analysis</span>
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </div>
    </header>
  )
}
