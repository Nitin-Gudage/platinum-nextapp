"use client";

import { whyToChoose } from "@/data/Data";

export default function WhyChoose() {

  return (
    <section className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            Why Choose Platinum Group?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Experience excellence in AC services with our commitment to quality and customer satisfaction
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyToChoose.map((feature, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center hover:bg-gray-800 transition-all duration-500 h-full border border-gray-700/50 hover:border-gray-600">
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <img src={feature.icon} alt="" />
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
