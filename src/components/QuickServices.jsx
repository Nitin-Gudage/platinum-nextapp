"use client";

import { availableServices } from "../data/Data";
import Link from "next/link";

export default function QuickServices() {
  const services = [
    { name: "AC Repair", icon: "🔧", link: "/services" },
    { name: "AC Service", icon: "🛠️", link: "/services" },
    { name: "Installation", icon: "📦", link: "/services" },
    { name: "Gas Refill", icon: "❄️", link: "/services" },
    { name: "AMC", icon: "📋", link: "/services" },
    { name: "Cleaning", icon: "🧹", link: "/services" },
    { name: "Uninstallation", icon: "🔓", link: "/services" },
    { name: "Maintenance", icon: "⚙️", link: "/services" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get instant solutions for all your AC needs with our quick and reliable services
          </p>
        </div>

        {/* Services Grid - 4 columns, 2 rows */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-gray-800 font-semibold group-hover:text-blue-600 transition-colors">
                {service.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
