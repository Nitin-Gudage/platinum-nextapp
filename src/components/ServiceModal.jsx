"use client";

import { useEffect } from "react";
import { our_service_steps, our_services } from "../data/HeroData";

export default function ServiceModal({ serviceId, isOpen, onClose }) {

    // Get the service details
    const service = our_services.find((s) => s.id === serviceId);

    // Get all steps for this service
    const serviceSteps = our_service_steps.filter(
        (step) => step.our_service_id === serviceId
    );

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
        }

        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !service) return null;

    return (
        <div
            className="fixed inset-0 z-50  flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full mt-6  max-w-[90vw] max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-scaleIn">

                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white z-10">
                    <div className="flex items-start justify-between">
                        <div className="pr-8">
                            <h2
                                id="modal-title"
                                className="text-2xl md:text-3xl font-bold mb-2"
                            >
                                {service.title}
                            </h2>
                            <p className="text-blue-100 text-sm md:text-base">
                                {service.description}
                            </p>
                        </div>

                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                            aria-label="Close modal"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Body - Scrollable */}
                <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">

                    {/* Service Steps */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-gray-800 pb-2 border-b border-gray-200">
                            Service Process
                        </h3>

                        {serviceSteps.length > 0 ? (
                            <div className="grid gap-6">
                                {serviceSteps.map((step, index) => (
                                    <div
                                        key={step.id}
                                        className="flex flex-col md:flex-row gap-4 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        {/* Step Image */}
                                        <div className="md:w-32 w-full shrink-0">
                                            <div className="aspect-video rounded-lg overflow-hidden bg-gray-200">
                                                <img
                                                    src={`/${step.image}`}
                                                    alt={step.title}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.src = "/images/ac-technician.png";
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        {/* Step Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white text-sm font-bold">
                                                    {index + 1}
                                                </span>
                                                <h4 className="text-lg font-semibold text-gray-900">
                                                    {step.title}
                                                </h4>
                                            </div>

                                            <p className="text-gray-600 text-sm mb-3">
                                                {step.description}
                                            </p>

                                            {/* Checkpoints */}
                                            {step.checkpoints && step.checkpoints.length > 0 && (
                                                <div className="flex flex-wrap gap-2">
                                                    {step.checkpoints.map((checkpoint, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700"
                                                        >
                                                            <svg
                                                                className="w-3 h-3 mr-1"
                                                                fill="currentColor"
                                                                viewBox="0 0 20 20"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            {checkpoint}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-8 text-gray-500">
                                <svg
                                    className="w-16 h-16 mx-auto mb-4 text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                    />
                                </svg>
                                <p>Service details coming soon</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
        </div>
    );
}
