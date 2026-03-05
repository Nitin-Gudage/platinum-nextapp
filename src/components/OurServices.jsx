"use client";

import { our_services } from "../data/HeroData";
import Link from "next/link";

export default function OurServices() {
  return (
    <section >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive AC solutions tailored to keep your cooling systems running at peak performance
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {our_services.map((service, index) => (
            <div
              key={index}
              className="custom-card flex flex-col items-center text-center p-6 bg-white group"
            >

              {/* Icon */}
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-blue-100 rounded-xl rotate-6 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                <div className="relative w-20 h-20 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 group-hover:border-blue-200 transition-all duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="max-h-14 object-contain transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                {service.description}
              </p>

              {/* Button */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1 px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
              >
                View Details
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}