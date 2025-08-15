'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: 'Security',
    answer: 'Our modernization approach ensures your data remains secure throughout the entire process. We implement industry-standard security protocols and maintain strict confidentiality agreements.'
  },
  {
    question: 'Experience',
    answer: 'With over 35 years in the industry, our team has successfully modernized thousands of systems across various business sectors, giving us unparalleled expertise in legacy system transformation.'
  },
  {
    question: 'Expertize',
    answer: 'Our specialists are certified professionals with deep knowledge of Visual FoxPro, SQL, and modern development technologies. We stay current with the latest industry trends and best practices.'
  },
  {
    question: 'Why Updating Your Old System is The Best Way To Maximize Your Return On Investment (ROI)',
    answer: 'Modernizing legacy systems typically provides 200-400% ROI within 2-3 years through improved efficiency, reduced maintenance costs, enhanced user experience, and better integration capabilities.'
  },
  {
    question: 'What Modernization Approaches Can We Do To Your Software',
    answer: 'We offer multiple approaches: complete rewrite, incremental modernization, cloud migration, API integration, and hybrid solutions. Each approach is tailored to your specific business needs and budget constraints.'
  },
  {
    question: 'Why Have Successful Businesses Used AIS For Over 35 Years?',
    answer: 'Our proven track record, customer-centric approach, and ability to deliver on promises have made us the trusted partner for businesses looking to modernize their legacy systems.'
  },
  {
    question: 'Why Is A Custom Fit So Important?',
    answer: 'Every business has unique processes and requirements. A custom-fit solution ensures that the modernized system perfectly aligns with your business needs, maximizing efficiency and user adoption.'
  },
  {
    question: 'Why Preserve Embedded Business Logic And Knowledge?',
    answer: 'Your existing system contains valuable business rules and processes developed over years. Preserving this logic ensures continuity while modernizing the technology stack.'
  },
  {
    question: 'Why Is It More Cost And Resource Efficient To Keep Older Software?',
    answer: 'While older software may seem cost-effective initially, the hidden costs of maintenance, security risks, and lost opportunities often exceed the investment in modernization.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            The Questions We Get Most Often
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get answers to the most frequently asked questions about our modernization services
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-blue-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-blue-600 transition-colors"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronUp 
                  size={24} 
                  className={`transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-blue-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
