'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is a Market Map',
    answer: 'A market map is a visual representation or diagram that organizes the players, products, and trends within a specific industry or market segment. It helps companies and investors quickly grasp who the key players are, what products or services they offer, and where potential gaps or opportunities might exist in the market. Market maps often show competitors across different categories, such as by business model, target customer segments, price range, or geographic presence.'
  },
  {
    question: 'What is a Market Map',
    answer: 'This is a placeholder answer for the second question. Replace with actual content.'
  },
  {
    question: 'What is a Market Map',
    answer: 'This is a placeholder answer for the third question. Replace with actual content.'
  },
  {
    question: 'What is a Market Map',
    answer: 'This is a placeholder answer for the fourth question. Replace with actual content.'
  },
  {
    question: 'What is a Market Map',
    answer: 'This is a placeholder answer for the fifth question. Replace with actual content.'
  }
]

export default function FAQComponent() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#464646]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 bg-white">
              <button
                className="flex justify-between items-center w-full py-4 text-left bg-white hover:bg-gray-50"
                onClick={() => toggleQuestion(index)}
              >
                <span className="text-lg font-medium text-[#464646]">
                  {faq.question}
                </span>
                {expandedIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-[#464646]" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#464646]" />
                )}
              </button>
              {expandedIndex === index && (
                <div className="pb-4 px-4 bg-white rounded-b-lg">
                  <p className="text-[#464646]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-[#464646]">
          Got more questions? We are an email away.
        </p>
      </div>
    </div>
  )
}