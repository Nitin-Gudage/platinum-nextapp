"use client";

import { ac_types, all_services, service_features } from "../data/AcData";
import Link from "next/link";

export default function QuickServices() {
  // Get first AC type
  const firstAc = ac_types[0];

  // Get services for first AC type (limit to 4)
  const services = all_services
    .filter((service) => service.ac_id === firstAc.ac_id)
    .slice(0, 4);

  // Get features for a service
  const getServiceFeatures = (serviceId) =>
    service_features.filter((feature) => feature.service_id === serviceId);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {firstAc.name} Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Get instant solutions for all your {firstAc.name} needs with our quick and reliable services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const features = getServiceFeatures(service.service_id);

            return (
              <Link
                key={service.service_id}
                href={`/services/${firstAc.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    src={`/${service.image}`}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = "/images/ac-technician.png";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  {features.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-gray-500 mb-1">What's Included:</p>
                      <ul className="space-y-1">
                        {features.map((feature) => (
                          <li key={feature.id} className="flex items-start gap-1 text-xs text-gray-600">
                            <svg className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="line-clamp-1">{feature.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Price and Book Button */}
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                    {service.price ? (
                      <span className="text-lg font-bold text-blue-600">
                        ₹{service.price}
                      </span>
                    ) : (
                      <span className="text-sm font-semibold text-gray-600">
                        Contact for Price
                      </span>
                    )}
                    <Link
                      href="/contact"
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            href={`/services/${firstAc.name.toLowerCase().replace(/\s+/g, "-")}`}
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
