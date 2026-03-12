"use client";

import { useState, useMemo, useCallback, memo } from "react";
import Link from "next/link";
import { faqs } from "../../data/Data";
import { HiSearch, HiPlus, HiMinus, HiQuestionMarkCircle, HiPhone, HiMail } from "react-icons/hi";

/* ================= ACCORDION ITEM ================= */

const AccordionItem = memo(({ item, isOpen, onClick, index }) => {
    return (
        <div
            className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            <button
                onClick={onClick}
                aria-expanded={isOpen}
                aria-label={isOpen ? `Collapse: ${item.q}` : `Expand: ${item.q}`}
                className="w-full flex justify-between items-center p-5 md:p-6 font-medium text-left hover:bg-blue-50/50 transition-all duration-300 text-secondary"
            >
                <span className="pr-4 text-sm md:text-base">{item.q}</span>

                <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${isOpen ? "bg-blue-600 text-white rotate-180" : "bg-gray-100 text-gray-500 hover:bg-blue-100 hover:text-blue-600"
                        }`}
                >
                    <HiMinus className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-5 pb-6 md:px-6 md:pb-6 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100 pt-4 bg-gray-50/50">
                    {item.a}
                </div>
            </div>
        </div>
    );
});

const FaqPage = () => {
    const [active, setActive] = useState(null);
    const [search, setSearch] = useState("");

    /* ================= FILTER ================= */

    const filteredFaqs = useMemo(() => {
        let data = faqs;

        if (search.trim()) {
            const q = search.toLowerCase();

            data = faqs.map((group) => ({
                ...group,
                items: group.items.filter(
                    (item) =>
                        item.q.toLowerCase().includes(q) ||
                        item.a.toLowerCase().includes(q),
                ),
            })).filter(group => group.items.length > 0);
        }

        return data;
    }, [search]);

    const toggle = useCallback((key) => {
        setActive((p) => (p === key ? null : key));
    }, []);

    return (
        <section className="w-full  md:pt-20 pt-[68px]">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16 md:py-20 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
                </div>

                <div className="container relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                            <HiQuestionMarkCircle className="w-8 h-8 text-white" />
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
                            Frequently Asked Questions
                        </h1>

                        <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto">
                            Find answers to common questions about AC repair, installation, maintenance, and HVAC services in India.
                        </p>
                    </div>

                    {/* Search Box */}
                    <div className="max-w-2xl mx-auto mt-10">
                        <div className="relative">
                            <HiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search for answers..."
                                aria-label="Search FAQ answers"
                                className="w-full px-5 py-4 pl-14 pr-4 rounded-2xl shadow-2xl border-2 border-white/30 focus:border-white focus:ring-4 focus:ring-white/20 outline-none transition-all text-base bg-white text-gray-800 placeholder-gray-400"
                            />
                        </div>

                        {search.trim() && (
                            <p className="text-center text-blue-100 mt-3 text-sm">
                                Found {filteredFaqs.reduce((acc, g) => acc + g.items.length, 0)} results
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* FAQ Content */}
            <div className="container py-12 md:py-16">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* FAQ List */}
                    <div className="lg:col-span-2 space-y-10">
                        {filteredFaqs.map((group, groupIndex) => (
                            <div
                                key={group.section}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${groupIndex * 100}ms` }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
                                    <h2 className="text-xl md:text-2xl font-bold text-secondary">
                                        {group.section}
                                    </h2>
                                </div>

                                <div className="flex flex-col gap-4">
                                    {group.items.map((item, index) => {
                                        const key = `${group.section}-${index}`;

                                        return (
                                            <AccordionItem
                                                key={key}
                                                item={item}
                                                isOpen={active === key}
                                                onClick={() => toggle(key)}
                                                index={index}
                                            />
                                        );
                                    })}
                                </div>

                                {group.items.length === 0 && (
                                    <div className="text-center py-8 bg-gray-50 rounded-2xl">
                                        <p className="text-gray-500">No questions found in this section.</p>
                                    </div>
                                )}
                            </div>
                        ))}

                        {filteredFaqs.length === 0 && (
                            <div className="text-center py-12 bg-gray-50 rounded-2xl">
                                <HiQuestionMarkCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                                <p className="text-gray-500 text-lg">No questions found matching your search.</p>
                                <button
                                    onClick={() => setSearch("")}
                                    aria-label="Clear search and show all questions"
                                    className="btn-primary mt-4"
                                >
                                    Clear Search
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 sticky top-24">
                            <h3 className="text-xl font-bold text-secondary mb-3">
                                Still Have Questions?
                            </h3>

                            <p className="text-gray-600 mb-6 text-sm">
                                Our HVAC experts are available 24/7 to help you with any queries.
                            </p>

                            {/* Contact Options */}
                            <div className="space-y-3 mb-6">
                                <Link
                                    href="/contact"
                                    className="btn-primary"
                                >
                                    <HiQuestionMarkCircle className="w-5 h-5" />
                                    Get Expert Help
                                </Link>

                                <a
                                    href="tel:+919876543210"
                                    className="btn-outline"
                                >
                                    <HiPhone className="w-5 h-5" />
                                    Call Now
                                </a>
                            </div>

                            <div className="border-t border-gray-100 pt-4">
                                <p className="text-xs text-gray-500 text-center">
                                    Average response time: Under 1 hour
                                </p>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-blue-600">10+</div>
                                <div className="text-xs text-blue-800">Years Experience</div>
                            </div>
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center">
                                <div className="text-2xl font-bold text-green-600">50K+</div>
                                <div className="text-xs text-green-800">Happy Customers</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
};

export default FaqPage;
