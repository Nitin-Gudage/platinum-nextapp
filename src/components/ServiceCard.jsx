"use client";

import { useState } from "react";
import Link from "next/link";
import BookServiceModal from "./BookServiceModal";

// Skeleton loader component for single service card
export function ServiceCardSkeleton() {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
            <div className="flex flex-col lg:flex-row">
                {/* Content skeleton */}
                <div className="flex-1 p-6 order-2 lg:order-1">
                    <div className="h-6 bg-gray-200 rounded w-1/2 mb-3"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="border-t border-gray-100 pt-4 mt-4">
                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                        <div className="space-y-2">
                            <div className="flex items-start gap-2">
                                <div className="w-5 h-5 bg-gray-200 rounded-full flex-shrink-0 mt-0.5"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>
                            <div className="flex items-start gap-2">
                                <div className="w-5 h-5 bg-gray-200 rounded-full flex-shrink-0 mt-0.5"></div>
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Image and price skeleton */}
                <div className="lg:w-80 shrink-0 order-1 lg:order-2">
                    <div className="w-full aspect-video bg-gray-200"></div>
                    <div className="p-4 border-t border-gray-100 flex gap-10">
                        <div className="h-8 bg-gray-200 rounded w-24"></div>
                        <div className="h-12 bg-gray-200 rounded-lg flex-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Skeleton for service group
export function ServiceGroupSkeleton() {
    return (
        <div className="mb-12">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
            <div className="space-y-6">
                <ServiceCardSkeleton />
                <ServiceCardSkeleton />
            </div>
        </div>
    );
}

// Mobile AC Selector Component
export function ACSelectorMobile({ acTypes, selectedAc, onSelect }) {
    const handleAcChange = (ac) => {
        const acSlug = ac.name.toLowerCase().replace(/\s+/g, "-");
        onSelect?.(ac);
    };

    return (
        <div className="md:hidden mb-4">
            <div className="bg-white rounded-2xl shadow-sm p-4">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Select AC Type
                </h3>
                <div className="flex gap-2 overflow-x-auto pb-2 -mx-2 px-2">
                    {acTypes.map((ac) => (
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
    );
}

// Desktop AC Selector Component
export function ACSelectorDesktop({ acTypes, selectedAc, onSelect }) {
    const handleAcChange = (ac) => {
        onSelect?.(ac);
    };

    return (
        <div className="hidden md:block mb-8">
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    Select AC Type
                </h3>
                <div className="flex justify-between gap-2 py-2">
                    {acTypes.map((ac) => (
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
                            <div
                                className={`absolute bottom-0 left-0 right-0 p-2 ${selectedAc.ac_id === ac.ac_id
                                    ? "bg-blue-600"
                                    : "bg-gradient-to-t from-black/70 to-transparent"
                                    }`}
                            >
                                <span className="text-sm font-medium text-white block text-center">
                                    {ac.name}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Mobile Service Selector Dropdown
export function ServiceSelectorMobile({ selectedAc, serviceTypes, filteredServices, selectedService, onSelect }) {
    const handleServiceSelect = (serviceTypeId) => {
        onSelect?.(serviceTypeId);
    };

    return (
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
                    {serviceTypes.map((serviceType) => {
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
    );
}

// Desktop Service Selector Sidebar
export function ServiceSelectorDesktop({ selectedAc, serviceTypes, filteredServices, selectedService, onSelect }) {
    const handleServiceSelect = (serviceTypeId) => {
        onSelect?.(serviceTypeId);
    };

    return (
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
                        {serviceTypes.map((serviceType) => {
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
    );
}

// Single Service Card
export function ServiceCard({ service, features }) {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleBookClick = (e) => {
        e.preventDefault();
        setIsBookingModalOpen(true);
    };

    return (
        <>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-center px-2">
                    {/* Content - Second on mobile, first on desktop */}
                    <div className="flex-1 p-6 order-2 lg:order-1">
                        {/* Name - Hidden on mobile, shown on desktop */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 hidden lg:block">
                            {service.name}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-4">
                            {service.description}
                        </p>

                        {/* Service Features - Show on both mobile and desktop */}
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
                                                    <p className="text-gray-500 text-xs mt-0.5">
                                                        {feature.subtext}
                                                    </p>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Price and Book Button - Below features on mobile */}
                        <div className="py-4 w-full border-t border-gray-100 flex gap-5 justify-between lg:hidden mt-4">
                            {service.price ? (
                                <div className="text-center mb-3">
                                    <span className="text-2xl font-bold text-blue-600">
                                        ₹{service.price}
                                    </span>
                                </div>
                            ) : (
                                <div className="text-center mb-3">
                                    <span className="text-sm font-semibold text-gray-600">
                                        Contact for Price
                                    </span>
                                </div>
                            )}
                            <button
                                onClick={handleBookClick}
                                className="btn-primary text-center"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>

                    {/* Image and Price/Button - First on mobile, second on desktop */}
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

                        {/* Price and Book Button Below Image - Only visible on desktop */}
                        <div className="hidden lg:flex py-4 w-full border-t border-gray-100 flex gap-5 justify-around">
                            {service.price ? (
                                <div className="text-center mb-3">
                                    <span className="text-2xl font-bold text-blue-600">
                                        ₹{service.price}
                                    </span>
                                </div>
                            ) : (
                                <div className="text-center mb-3">
                                    <span className="text-sm font-semibold text-gray-600">
                                        Contact for Price
                                    </span>
                                </div>
                            )}
                            <button
                                onClick={handleBookClick}
                                className="btn-primary text-center"
                            >
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            <BookServiceModal
                service={service}
                serviceFeatures={features}
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
            />
        </>
    );
}

// Service Group Component
export function ServiceGroup({ serviceGroup, serviceRefs, getServiceFeatures }) {
    return (
        <div
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
                        <ServiceCard
                            key={service.service_id}
                            service={service}
                            features={features}
                        />
                    );
                })}
            </div>
        </div>
    );
}

// Empty State Component
export function EmptyState({ acName }) {
    return (
        <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
                No services available for {acName} yet.
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
    );
}

// Loading Overlay Component
export function LoadingOverlay({ isPending }) {
    if (!isPending) return null;

    return (
        <div className="fixed inset-0 bg-white/50 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
    );
}
