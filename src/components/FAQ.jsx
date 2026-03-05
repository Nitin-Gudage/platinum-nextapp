"use client";

import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "How often should I service my AC?",
      answer: "We recommend servicing your AC at least once a year for optimal performance. For heavy usage or in dusty environments, bi-annual servicing is advisable.",
    },
    {
      question: "What are your service hours?",
      answer: "We provide services from 9 AM to 8 PM, Monday through Saturday. Emergency services are available for urgent repairs.",
    },
    {
      question: "Do you offer warranty on repairs?",
      answer: "Yes, we offer a 30-day warranty on all our repair services. We also provide up to 1 year warranty on AMC services.",
    },
    {
      question: "How long does an AC service take?",
      answer: "A standard AC service typically takes 45-60 minutes. Complex repairs may take longer depending on the issue.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Find answers to the most common questions about our AC services
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-5 md:px-6 py-4 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-gray-900 pr-3 text-sm md:text-base">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-32" : "max-h-0"
                  }`}
              >
                <div className="px-5 md:px-6 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-8 md:mt-10">
          <a
            href="/faq"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors text-sm md:text-base"
          >
            View All FAQs
            <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
