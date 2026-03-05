import { contactInfo } from "../../data/Data";
import Link from "next/link";

export const metadata = {
    title: "About Us - Platinum Group Pune",
    description: "Learn about Platinum Group - your trusted AC service partner in Pune with years of experience.",
};

export default function AboutPage() {
    const stats = [
        { number: "10+", label: "Years Experience" },
        { number: "5000+", label: "Happy Customers" },
        { number: "50+", label: "Expert Technicians" },
        { number: "100%", label: "Satisfaction" },
    ];

    const values = [
        {
            title: "Quality Service",
            description: "We prioritize quality in every service we provide, ensuring your AC runs optimally.",
            icon: "🎯",
        },
        {
            title: "Transparent Pricing",
            description: "No hidden charges. We believe in complete transparency in our pricing structure.",
            icon: "💰",
        },
        {
            title: "Expert Technicians",
            description: "Our team consists of certified and experienced professionals dedicated to their work.",
            icon: "👨‍🔧",
        },
        {
            title: "Customer Support",
            description: "24/7 customer support to address all your queries and concerns promptly.",
            icon: "🛟",
        },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                About Platinum Group
                            </h1>
                            <p className="text-blue-100 text-lg">
                                Your trusted partner for professional AC repair and maintenance services in Pune since 2015.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                                <div className="text-6xl font-bold text-white mb-2">10+</div>
                                <div className="text-blue-200">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Who We Are
                            </h2>
                            <div className="space-y-4 text-gray-600">
                                <p>
                                    Platinum Group is a leading AC service provider in Pune, dedicated to
                                    delivering top-quality heating and cooling solutions for residential and
                                    commercial clients.
                                </p>
                                <p>
                                    Founded with a mission to provide reliable, efficient, and affordable AC
                                    services, we have grown to become one of the most trusted names in the
                                    industry. Our team of certified technicians specializes in repair,
                                    installation, and maintenance of all major AC brands.
                                </p>
                                <p>
                                    We take pride in our commitment to customer satisfaction, transparent
                                    pricing, and professional service. Every job we undertake is backed by
                                    our satisfaction guarantee.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-blue-100 mb-6">
                                To provide world-class AC services that ensure comfort and peace of mind
                                for every customer.
                            </p>
                            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                            <p className="text-blue-100">
                                To be the most preferred AC service provider in Pune, known for quality,
                                reliability, and customer-centric approach.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            These values guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Contact us today for a free consultation and quote
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        Get in Touch
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </section>
        </div>
    );
}
