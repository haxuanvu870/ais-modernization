'use client'

import { motion } from 'framer-motion'
import { Search, FileText, Settings, CheckCircle, Target } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Analysis',
    description: 'We start with a thorough analysis of your current system, identifying pain points, opportunities, and creating a comprehensive modernization roadmap.',
    number: 1
  },
  {
    icon: FileText,
    title: 'Design',
    description: 'Based on our analysis, we design a modern solution that preserves your business logic while leveraging cutting-edge technologies.',
    number: 2
  },
  {
    icon: Settings,
    title: 'Enforcement',
    description: 'Once the design is approved, we begin implementation using modern development practices and agile methodologies.',
    number: 3
  },
  {
    icon: CheckCircle,
    title: 'Validation',
    description: 'We complete a thorough validation process, testing all functionality and ensuring the system meets your business requirements.',
    number: 4
  },
  {
    icon: Target,
    title: 'Refinement',
    description: 'After validating, we refine the system based on feedback and optimize performance for maximum efficiency.',
    number: 5
  }
]

export default function ProcessSteps() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            5 Steps To Successfully Updating Your System
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures a smooth transition from legacy systems to modern solutions
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          {/* Connection Line */}
          <div className="hidden lg:block relative mb-12">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-blue-300">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-blue-600" style={{ width: '100%' }} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-lg p-6 shadow-lg min-h-[200px] flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
