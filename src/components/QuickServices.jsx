"use client";

import { availableServices } from "../data/Data";
import Link from "next/link";

export default function QuickServices() {
  const services = [
    { name: "AC Repair", icon: "🔧", link: "/services", color: "from-orange-400 to-red-500" },
    { name: "AC Service", icon: "🛠️", link: "/services", color: "from-blue-400 to-cyan-500" },
    { name: "Installation", icon: "📦", link: "/services", color: "from-green-400 to-emerald-500" },
    { name: "Gas Refill", icon: "❄️", link: "/services", color: "from-cyan-400 to-blue-500" },
    { name: "AMC", icon: "📋", link: "/services", color: "from-purple-400 to-pink-500" },
    { name: "Cleaning", icon: "🧹", link: "/services", color: "from-yellow-400 to-orange-500" },
    { name: "Uninstallation", icon: "🔓", link: "/services", color: "from-indigo-400 to-purple-500" },
    { name: "Maintenance", icon: "⚙️", link: "/services", color: "from-gray-400 to-slate-600" },
  ];

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Quick Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Get instant solutions for all your AC needs with our quick and reliable services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group relative bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="relative z-10">
                <div className={`w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <span className="text-2xl md:text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-sm md:text-base font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
