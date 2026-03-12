"use client";

import Link from "next/link";
import Image from "next/image";

import { contactInfo, cities, whyToChoose } from "../../data/Data";

import { FaAward, FaTools, FaThumbsUp, FaClock, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

/* ================= MISSIONS ================= */

const missions = [
    {
        title: "Quality Service",
        desc: "We deliver high-standard HVAC solutions with attention to detail.",
        icon: <FaCheckCircle className="text-2xl" />,
    },
    {
        title: "Clean & Healthy Air",
        desc: "We ensure clean airflow and healthy indoor environments.",
        icon: <FaTools className="text-2xl" />,
    },
    {
        title: "Safety First",
        desc: "Our technicians follow strict safety and compliance protocols.",
        icon: <FaShieldAlt className="text-2xl" />,
    },
    {
        title: "Fast Support",
        desc: "Quick, efficient service without compromising quality.",
        icon: <FaClock className="text-2xl" />,
    },
];

/* ================= STATS ================= */

const stats = [
    { number: "5+", label: "Years Experience", icon: <FaAward /> },
    { number: "1000+", label: "AC Services Done", icon: <FaTools /> },
    { number: "24/7", label: "Emergency Support", icon: <FaClock /> },
    { number: "98%", label: "Satisfaction Rate", icon: <FaThumbsUp /> },
];

/* ================= SERVICES ================= */

const services = [
    { name: "AC Repair", desc: "Professional repair for all AC brands" },
    { name: "AC Installation", desc: "Expert installation services" },
    { name: "AMC Services", desc: "Annual maintenance contracts" },
    { name: "Gas Refilling", desc: "Leak detection & gas refill" },
    { name: "Duct Cleaning", desc: "Complete duct sanitization" },
    { name: "Ducted Systems", desc: "Commercial HVAC solutions" },
];

/* ================= COMPONENT ================= */

export default function AboutPage() {
    return (
        <div className="md:pt-20 pt-[68px]">

            {/* ================= HERO ================= */}

            <section className="relative h-[320px] md:h-[420px] grid grid-cols-12 items-center">

                <Image
                    src="/images/aboutpage/about.webp"
                    alt="HVAC technicians servicing air conditioner units"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="container col-span-7 col-start-5 relative z-10 text-left text-white">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Leading AC & HVAC Service Provider in India
                    </h1>

                    <p className="text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
                        Platinum Group is a trusted, GST-registered HVAC service provider
                        delivering reliable AC repair, installation, and maintenance
                        solutions for homes and businesses across India.
                    </p>
                </div>

            </section>

            <div className="container">

                {/* ================= STATS SECTION ================= */}

                <section className="py-10 -mt-16 relative z-20">

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all text-center">
                                <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center text-white text-2xl mx-auto mb-3 shadow-lg shadow-blue-500/25">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{stat.number}</h3>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </div>
                        ))}

                    </div>

                </section>

                {/* ================= MISSION ================= */}

                <section className="py-16">

                    <div className="flex flex-col gap-12">

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                                Our Mission & Values
                            </h2>

                            <p className="text-blue-600 text-center max-w-2xl mx-auto mb-10">
                                Committed to professional HVAC solutions with honesty,
                                transparency, and long-term customer satisfaction.
                            </p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                {missions.map((item, index) => (
                                    <div
                                        key={index}
                                        className="text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-4">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* ================= IMAGES ================= */}

                        <div className="grid md:grid-cols-2 gap-6">

                            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="/images/aboutpage/about-left.webp"
                                    alt="Professional AC repair technicians servicing cassette AC"
                                    width={800}
                                    height={500}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src="/images/aboutpage/about-right.webp"
                                    alt="Expert HVAC technician installing window AC unit"
                                    width={800}
                                    height={500}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                        </div>

                    </div>

                </section>

                {/* ================= TRUST SECTION ================= */}

                <section className="py-16 bg-blue-50 rounded-2xl mb-16">

                    <div className="max-w-5xl mx-auto text-center px-6">

                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Trusted & Registered HVAC Company
                        </h2>

                        <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                            Platinum Group is a legally registered and GST-compliant HVAC
                            service provider with over a decade of industry experience. We
                            focus on transparent pricing, skilled workmanship, and reliable
                            customer support.
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                                    5+ Years
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Serving customers since 2020
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                                    GST Registered
                                </h3>
                                <p className="text-gray-600 text-xs break-all">
                                    GST No: {contactInfo.gstNumber}
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                                    Quality Standards
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Genuine parts & certified tools
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-1">
                                    Customer Support
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Fast response & dependable service
                                </p>
                            </div>

                        </div>

                    </div>

                </section>

                {/* ================= WHY CHOOSE SECTION ================= */}

                <section className="py-16 mb-16">

                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Why Choose Platinum Group?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We are committed to providing the best HVAC services with a focus on quality and customer satisfaction
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {whyToChoose.map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                                <div className="flex gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <Image src={item.icon} alt={item.title} width={28} height={28} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>

                {/* ================= SERVICES SECTION ================= */}

                <section className="py-16 bg-gray-50 rounded-2xl mb-16">

                    <div className="max-w-5xl mx-auto text-center px-4">

                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Our AC Services
                        </h2>

                        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                            Comprehensive HVAC solutions for residential and commercial properties
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            {services.map((service, index) => (
                                <div key={index} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{service.name}</h3>
                                    <p className="text-gray-600 text-sm">{service.desc}</p>
                                </div>
                            ))}

                        </div>

                        <div className="mt-8">
                            <Link href="/services" className="btn-primary w-max mx-auto">
                                View All Services
                            </Link>
                        </div>

                    </div>

                </section>

                {/* ================= SERVICE COVERAGE ================= */}

                <section className="py-16 bg-white rounded-2xl mb-16 border border-gray-100">

                    <div className="max-w-5xl mx-auto text-center px-4">

                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            AC & HVAC Services Across India
                        </h2>

                        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                            We provide professional AC repair, installation, servicing, and
                            HVAC maintenance across major cities in India.
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 text-sm">

                            {cities.map((city) => (
                                <span
                                    key={city.slug}
                                    className="bg-gray-50 cursor-pointer border border-gray-200 rounded-lg py-2 px-3 shadow-sm hover:shadow-md transition hover:text-blue-600 hover:border-blue-300"
                                >
                                    AC Service in {city.name}
                                </span>
                            ))}

                        </div>

                    </div>

                </section>

                {/* ================= CTA ================= */}

                <section className="pb-16">

                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12">

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                                    Get a Free Quote Today
                                </h3>

                                <p className="text-blue-100 text-base">
                                    Speak with our HVAC experts for personalized solutions.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/contact#contact-form"
                                    className="btn-primary whitespace-nowrap"
                                >
                                    Contact Us
                                </Link>
                                <a
                                    href={`tel:${contactInfo.mobile1}`}
                                    className="btn-outline whitespace-nowrap"
                                >
                                    Call Now
                                </a>
                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </div>
    );
}
