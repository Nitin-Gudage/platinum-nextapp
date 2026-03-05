"use client";

import { useState, useEffect } from "react";

export default function BrandsSwiper() {
  const brands = [
    { name: "LG", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/LG_logo_%282015%29.svg" },
    { name: "Samsung", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { name: "Daikin", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Daikin_Logo.svg" },
    { name: "Hitachi", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Hitachi_Logo.svg" },
    { name: "Voltas", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Voltas_logo.svg" },
    { name: "Carrier", logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Carrier_Global_Corporation_Logo.svg" },
    { name: "Blue Star", logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Blue_Star_Limited_Logo.svg" },
    { name: "Whirlpool", logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Whirlpool_Logo.svg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % brands.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [brands.length]);

  const getVisibleBrands = () => {
    const visible = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % brands.length;
      visible.push(brands[index]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Brands We Service
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert technicians certified to work with all major AC brands
          </p>
        </div>

        {/* Brands Swiper */}
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
            {brands.map((brand, index) => (
              <div
                key={index}
                className="w-1/5 flex-shrink-0 px-4"
              >
                <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center h-24 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-700">{brand.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {brands.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
