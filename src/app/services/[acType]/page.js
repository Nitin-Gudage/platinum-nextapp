"use client";

import { useState, useRef, useEffect, useTransition, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ac_types, service_types, all_services, service_features } from "../../../data/AcData";

export default function ServicesByTypePage() {
  const params = useParams();
  const acTypeParam = params?.acType;

  // Find AC type from URL - use memo to avoid recalculation
  const selectedAc = useMemo(() => {
    if (!acTypeParam) return ac_types[0];

    const found = ac_types.find(
      (ac) => ac.name.toLowerCase().replace(/\s+/g, "-") === acTypeParam.toString().toLowerCase()
    );
    return found || ac_types[0];
  }, [acTypeParam]);

  const [selectedService, setSelectedService] = useState(null);
  const [isPending, startTransition] = useTransition();
  const serviceRefs = useRef({});

  // Filter services for selected AC - memoized for performance
  const filteredServices = useMemo(() =>
    all_services.filter((service) => service.ac_id === selectedAc.ac_id),
    [selectedAc.ac_id]
  );

  // Group services by service_type_id - memoized
  const groupedServices = useMemo(() =>
    service_types
      .map((serviceType) => ({
        ...serviceType,
        services: filteredServices.filter(
          (service) => service.service_type_id === serviceType.service_type_id
        ),
      }))
      .filter((group) => group.services.length > 0),
    [filteredServices]
  );

  const handleServiceSelect = (serviceTypeId) => {
    setSelectedService(serviceTypeId);
    const element = serviceRefs.current[serviceTypeId];
    if (element) {
      const isMobile = window.innerWidth < 768;
      const navbarHeight = isMobile ? 180 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Get features for a specific service - memoized
  const getServiceFeatures = (serviceId) =>
    service_features.filter((feature) => feature.service_id === serviceId);

  // Handle AC type change with Link for better performance
  const handleAcChange = (ac) => {
    const acSlug = ac.name.toLowerCase().replace(/\s+/g, "-");
    setSelectedService(null);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-16 py-8">
        {/* Mobile: AC Selector */}
        <div className="md:hidden mb-4">
          <div className="bg-white rounded-2xl shadow-sm p-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Select AC Type
            </h3>
            <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
              {ac_types.map((ac) => (
                <Link
                  key={ac.ac_id}
                  href={`/services/${ac.name.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={() => handleAcChange(ac)}
                  className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${selectedAc.ac_id === ac.ac_id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                    }`}
                >
                  {ac.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Sticky Service Selector as Dropdown */}
        <div className="md:hidden sticky top-16 z-30 mb-4">
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              {selectedAc.name} - Select Service
            </h3>
            <select
              value={selectedService || ""}
              onChange={(e) => {
                const value = e.target.value;
                if (value) {
                  handleServiceSelect(parseInt(value));
                }
              }}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Choose a service</option>
              {service_types.map((serviceType) => {
                const hasServices = filteredServices.some(
                  (s) => s.service_type_id === serviceType.service_type_id
                );
                if (!hasServices) return null;

                return (
                  <option key={serviceType.service_type_id} value={serviceType.service_type_id}>
                    {serviceType.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar - Hidden on mobile */}
          <div className="hidden md:block md:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl shadow-lg p-6">
              {/* Current AC Type */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Selected AC Type
                </h3>
                <p className="text-xl font-bold text-blue-600">
                  {selectedAc.name}
                </p>
              </div>

              {/* Service Selector */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Select Service
                </h3>
                <div className="space-y-2">
                  {service_types.map((serviceType) => {
                    const hasServices = filteredServices.some(
                      (s) => s.service_type_id === serviceType.service_type_id
                    );
                    if (!hasServices) return null;

                    return (
                      <button
                        key={serviceType.service_type_id}
                        onClick={() => handleServiceSelect(serviceType.service_type_id)}
                        className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${selectedService === serviceType.service_type_id
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                          }`}
                      >
                        {serviceType.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Desktop: AC Selector - Hidden on mobile */}
            <div className="hidden md:block mb-8">
              <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Select AC Type
                </h3>
                <div className="flex justify-between gap-2 py-2">
                  {ac_types.map((ac) => (
                    <Link
                      key={ac.ac_id}
                      href={`/services/${ac.name.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => handleAcChange(ac)}
                      className={`group relative rounded-xl overflow-hidden transition-all duration-200 w-40 flex-shrink-0 ${selectedAc.ac_id === ac.ac_id
                        ? "ring-2 ring-blue-600 ring-offset-2"
                        : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2"
                        }`}
                    >
                      <div className="aspect-video bg-gray-100">
                        <img
                          src={`/${ac.image}`}
                          alt={ac.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = "/images/ac-technician.png";
                          }}
                        />
                      </div>
                      <div className={`absolute bottom-0 left-0 right-0 p-2 ${selectedAc.ac_id === ac.ac_id
                        ? "bg-blue-600"
                        : "bg-gradient-to-t from-black/70 to-transparent"
                        }`}>
                        <span className="text-sm font-medium text-white block text-center">
                          {ac.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {isPending && (
              <div className="fixed inset-0 bg-white/50 flex items-center justify-center z-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            )}

            {/* <h1 className="text-3xl font-bold text-gray-900 mb-8">
              {selectedAc.name} Services
            </h1> */}

            {groupedServices.map((serviceGroup) => (
              <div
                key={serviceGroup.service_type_id}
                ref={(el) => (serviceRefs.current[serviceGroup.service_type_id] = el)}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-600">
                  {serviceGroup.name}
                </h2>

                <div className="space-y-6">
                  {serviceGroup.services.map((service) => {
                    const features = getServiceFeatures(service.service_id);

                    return (
                      <div
                        key={service.service_id}
                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-center px-2">
                          {/* Content - Left Side */}
                          <div className="flex-1 p-6 order-2 lg:order-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {service.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                              {service.description}
                            </p>

                            {/* Service Features */}
                            {features.length > 0 && (
                              <div className="mt-4 pt-4 border-t border-gray-100">
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">
                                  What's Included:
                                </h4>
                                <ul className="space-y-2">
                                  {features.map((feature) => (
                                    <li key={feature.id} className="flex items-start gap-2 text-sm text-gray-600">
                                      <svg
                                        className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth={2}
                                          d="M5 13l4 4L19 7"
                                        />
                                      </svg>
                                      <div>
                                        <span className="font-medium text-gray-800">
                                          {feature.title}
                                        </span>
                                        {feature.subtext && (
                                          <p className="text-gray-500 text-xs mt-0.5 hidden md:block">
                                            {feature.subtext}
                                          </p>
                                        )}
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* Image and Price/Button - Right Side */}
                          <div className="lg:w-80 shrink-0 order-1 lg:order-2 flex flex-col">
                            {/* 16:9 Aspect Ratio Image Container */}
                            <div className="relative w-full aspect-video bg-gray-100 rounded-t-xl overflow-hidden flex items-center justify-center">
                              <img
                                src={`/${service.image}`}
                                alt={service.name}
                                className="w-full h-full object-cover object-center"
                                onError={(e) => {
                                  e.target.src = "/images/ac-technician.png";
                                }}
                              />
                            </div>

                            {/* Price and Book Button Below Image */}
                            <div className="p-4  border-t border-gray-100 flex gap-10">
                              {service.price ? (
                                <div className="text-center mb-3">
                                  <span className="text-2xl font-bold text-blue-600">
                                    ₹{service.price}
                                  </span>
                                </div>
                              ) : (
                                <div className="text-center mb-3">
                                  <span className="text-lg font-semibold text-gray-700">
                                    Contact for Price
                                  </span>
                                </div>
                              )}
                              <Link
                                href="/contact"
                                className="block w-full text-center px-4 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                              >
                                Book Now
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {groupedServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No services available for {selectedAc.name} yet.
                </p>
                <p className="text-gray-400 mt-2">
                  Contact us for custom services.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
