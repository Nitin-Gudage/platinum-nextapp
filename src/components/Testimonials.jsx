"use client";

import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      location: "Pune",
      rating: 5,
      comment: "Excellent service! The technician arrived on time and fixed my AC within an hour. Very professional and affordable prices. Highly recommended!",
      avatar: "RS",
    },
    {
      id: 2,
      name: "Priya Desai",
      location: "Khadki",
      rating: 5,
      comment: "Best AC service in Pune. They did a thorough cleaning and the cooling is much better now. Great customer service.",
      avatar: "PD",
    },
    {
      id: 3,
      name: "Amit Kumar",
      location: "Camp",
      rating: 4,
      comment: "Very satisfied with the AMC service. They provide timely maintenance and always professional. Worth every penny.",
      avatar: "AK",
    },
    {
      id: 4,
      name: "Sneha Patel",
      location: "Viman Nagar",
      rating: 5,
      comment: "Quick response and efficient service. My AC was not cooling properly and they fixed it the same day. Great experience!",
      avatar: "SP",
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Koregaon Park",
      rating: 5,
      comment: "Professional technicians with proper equipment. They explained the issue clearly and provided fair pricing. Will definitely use again.",
      avatar: "VS",
    },
  ];

  // Even rows: 3 columns, Odd rows: 2 columns
  const getGridClass = (index) => {
    const row = Math.floor(index / 3);
    if (row % 2 === 0) {
      // Even row (0, 2, 4...) - 3 columns
      if (index % 3 === 0) return "md:col-span-1";
      if (index % 3 === 1) return "md:col-span-1";
      if (index % 3 === 2) return "md:col-span-1";
    } else {
      // Odd row (1, 3, 5...) - 2 columns centered
      if (index % 3 === 0) return "md:col-start-2 md:col-span-1";
      if (index % 3 === 1) return "md:col-span-1";
      if (index % 3 === 2) return "md:col-start-2 md:col-span-1";
    }
    return "md:col-span-1";
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${getGridClass(index)}`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-600 mb-6 flex-grow">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
