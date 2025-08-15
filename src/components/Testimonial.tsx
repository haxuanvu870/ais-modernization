'use client'

import { motion } from 'framer-motion'

export default function Testimonial() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-8">
            <svg className="w-16 h-16 mx-auto text-blue-300 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
          
          <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
            "We went from a 50 million to over 100 million dollar shop in a matter of years, and it wouldn't have been possible without Mark & AIS and their expertise."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-semibold text-lg">FM</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg">Fred Myers</div>
              <div className="text-blue-200">CEO, Myers Group</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
