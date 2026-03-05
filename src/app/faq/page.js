"use client";

import { useState } from "react";
import Link from "next/link";

export default function FAQPage() {
    const faqs = [
        {
            question: "How often should I service my AC?",
            answer: "We recommend servicing your AC at least once a year for optimal performance. For heavy usage or in dusty environments, bi-annual servicing is advisable. Regular maintenance helps prevent major breakdowns and extends the life of your AC.",
        },
        {
            question: "What are your service hours?",
            answer: "We provide services from 9 AM to 8 PM, Monday through Saturday. Emergency services are available for urgent repairs outside these hours.",
        },
        {
            question: "Do you offer warranty on repairs?",
            answer: "Yes, we offer a 30-day warranty on all our repair services. We also provide up to 1 year warranty on AMC (Annual Maintenance Contract) services.",
        },
        {
            question: "How long does an AC service take?",
            answer: "A standard AC service typically takes 45-60 minutes. Complex repairs may take longer depending on the issue. We'll give you an estimated time when you book the service.",
        },
        {
            question: "What brands do you service?",
            answer: "We service all major brands including LG, Samsung, Daikin, Hitachi, Voltas, Carrier, Blue Star, Whirlpool, and many more. Our technicians are certified to work on all AC brands.",
        },
        {
            question: "Do you provide AMC (Annual Maintenance Contract)?",
            answer: "Yes, we offer comprehensive AMC plans that include regular servicing, priority support, and discounted repairs. Contact us for more details on our AMC packages.",
        },
        {
            question: "How do I know if my AC needs repair?",
            answer: "Signs that your AC needs repair include: unusual noises, poor cooling, water leakage, foul odor, increased electricity bills, and frequent on/off cycles. If you notice any of these, contact us for a diagnosis.",
        },
        {
            question: "What is included in AC servicing?",
            answer: "Our AC service includes: filter cleaning/replacement, coil cleaning, refrigerant level check, drainage cleaning, thermostat calibration, and overall performance testing.",
        },
        {
            question: "Do you offer emergency services?",
            answer: "Yes, we understand that AC breakdowns can happen anytime. We offer emergency repair services outside our regular business hours.",
        },
        {
            question: "How can I book a service?",
            answer: "You can book a service by calling us directly, sending a WhatsApp message, or filling out the contact form on our website. We'll confirm your appointment within 24 hours.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-blue-100 text-lg">
                        Find answers to the most common questions about our AC services
                    </p>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                                >
                                    <span className="font-semibold text-gray-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-48" : "max-h-0"
                                        }`}
                                >
                                    <div className="px-6 pb-4 text-gray-600">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Can't find the answer you're looking for? Please contact us.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Contact Us
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
}
