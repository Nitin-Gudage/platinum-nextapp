"use client";

import { useState, useEffect, useRef } from "react";
import { ac_types } from "../data/AcData";

export default function BookServiceModal({ service, serviceFeatures, isOpen, onClose }) {
    const [showForm, setShowForm] = useState(false);
    const [openSection, setOpenSection] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        address: ""
    });
    const modalContentRef = useRef(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    // Get AC type name from ac_id
    const acType = ac_types.find(ac => ac.ac_id === service?.ac_id);
    const acTypeName = acType?.name || "Unknown AC Type";

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

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setShowForm(false);
            setFormData({ name: "", mobile: "", email: "", address: "" });
        }
    }, [isOpen]);

    // Scroll to top when form opens on mobile
    useEffect(() => {
        if (showForm && modalContentRef.current) {
            // Small delay to allow DOM to update
            const timer = setTimeout(() => {
                modalContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [showForm]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Log the booking details
        console.log("Booking Details:", {
            service: {
                id: service.service_id,
                name: service.name,
                price: service.price,
                image: service.image,
                acType: acTypeName
            },
            customer: formData,
            timestamp: new Date().toISOString()
        });
        alert("Booking details submitted! Check console for details.");
        onClose();
    };

    const handleWhatsAppClick = () => {
        // Prepare WhatsApp message
        const message = `*New Service Booking Request*\n\n` +
            `*Service Details:*\n` +
            `• AC Type: ${acTypeName}\n` +
            `• Service: ${service.name}\n` +
            `• Price: ₹${service.price || "Contact for Price"}\n` +
            `• Service ID: ${service.service_id}\n\n` +
            `Please confirm my booking.`;

        // Encode message for WhatsApp
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp API URL (using web.whatsapp.com for direct link)
        const whatsappUrl = `https://wa.me/918308338496?text=${encodedMessage}`;

        // Open WhatsApp in new tab
        window.open(whatsappUrl, "_blank");
    };

    if (!isOpen || !service) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div ref={modalContentRef} className="mt-6 relative w-full max-w-[90vw] max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[80vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white z-10">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2
                                id="booking-modal-title"
                                className="text-2xl md:text-3xl font-bold mb-2"
                            >
                                Book Service
                            </h2>
                            <p className="text-blue-100 text-sm md:text-base">
                                {acTypeName} - {service.name}
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

                {/* Body */}
                <div className="p-6">
                    {showForm ? (
                        // Booking Form
                        <form onSubmit={handleFormSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Service Details - Right Side on desktop */}
                                <div className="order-2 md:order-1 space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                        Service Details
                                    </h3>

                                    <div className="space-y-3">
                                        <div className="aspect-video md:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[3/2] rounded-lg overflow-hidden bg-gray-100">
                                            <img
                                                src={`/${service.image}`}
                                                alt={service.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = "/images/ac-technician.png";
                                                }}
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <p className="text-sm text-gray-600">
                                                <span className="font-medium">AC Type:</span> {acTypeName}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-medium">Service:</span> {service.name}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                <span className="font-medium">Service ID:</span> {service.service_id}
                                            </p>
                                            <p className="text-lg font-bold text-blue-600">
                                                {service.price ? `₹${service.price}` : "Contact for Price"}
                                            </p>
                                        </div>

                                        {/* Features Section */}
                                        {serviceFeatures && serviceFeatures.length > 0 && (
                                            <div className="pt-4 border-t border-gray-200">
                                                <h4 className="text-md font-semibold text-gray-800 mb-3">
                                                    What's Included:
                                                </h4>
                                                <ul className="space-y-2">
                                                    {serviceFeatures.map((feature) => (
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
                                    </div>
                                </div>

                                {/* Customer Form - Left Side on desktop */}
                                <div className="order-1 md:order-2 space-y-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                        Your Details
                                    </h3>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Mobile Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                            placeholder="Enter mobile number"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                            placeholder="Enter email (optional)"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Address *
                                        </label>
                                        <textarea
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                            rows={3}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                                            placeholder="Enter your address"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                                    >
                                        Submit Booking
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setShowForm(false)}
                                        className="w-full text-gray-600 hover:text-gray-800 py-2 text-sm"
                                    >
                                        ← Back to options
                                    </button>
                                </div>
                            </div>
                        </form>
                    ) : (
                        // Initial View - Two Options
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Left Side - Service Details */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                    Service Details                       </h3>

                                {/* Default Visible Details */}
                                <div className="space-y-3 ">
                                    <div className="aspect-video md:aspect-[3/2] lg:aspect-[4/3] xl:aspect-[2/1] rounded-lg overflow-hidden bg-gray-100">
                                        <img
                                            src={`/${service.image}`}
                                            alt={service.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.src = "/images/ac-technician.png";
                                            }}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">AC Type:</span> {acTypeName}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-medium">Service:</span> {service.name}
                                        </p>

                                        <p className="text-lg font-bold text-blue-600">
                                            {service.price ? `₹${service.price}` : "Contact for Price"}
                                        </p>
                                    </div>
                                </div>

                                {/* Accordion for Description and Features */}
                                {(service.description || (serviceFeatures && serviceFeatures.length > 0)) && (
                                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                                        <button
                                            onClick={() => toggleSection('details')}
                                            className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <span className="font-medium text-gray-700">
                                                More Details
                                                {serviceFeatures && serviceFeatures.length > 0 && ` (${serviceFeatures.length} items)`}
                                            </span>
                                            <svg
                                                className={`w-5 h-5 text-gray-500 transition-transform ${openSection === 'details' ? 'rotate-180' : ''}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openSection === 'details' && (
                                            <div className="p-3 bg-white space-y-4">
                                                {service.description && (
                                                    <div>
                                                        <h5 className="font-medium text-gray-800 mb-1">Description</h5>
                                                        <p className="text-sm text-gray-600">{service.description}</p>
                                                    </div>
                                                )}
                                                {serviceFeatures && serviceFeatures.length > 0 && (
                                                    <div>
                                                        <h5 className="font-medium text-gray-800 mb-2">What's Included</h5>
                                                        <ul className="space-y-2">
                                                            {serviceFeatures.map((feature) => (
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
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Right Side - Options */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                    Choose Booking Method
                                </h3>

                                {/* Option 1: Submit Details */}
                                <button
                                    onClick={() => setShowForm(true)}
                                    className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all text-left group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover:text-blue-700">
                                                Submit Booking Details
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Fill form with your details (Response may slow)
                                            </p>
                                        </div>
                                    </div>
                                </button>

                                {/* Option 2: WhatsApp */}
                                <button
                                    onClick={handleWhatsAppClick}
                                    className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all text-left group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900 group-hover:text-green-700">
                                                Send to WhatsApp
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-1">
                                                Quick response (For faster response)
                                            </p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
