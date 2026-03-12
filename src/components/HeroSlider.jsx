"use client";

import { useState, useEffect } from "react";
import { hero_swiper_data } from "../data/HeroData";
import Link from "next/link";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hero_swiper_data.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative lg:h-[75vh] h-[45vh] sm:h-[75vh] overflow-hidden">
      {/* Background Slides */}
      {hero_swiper_data.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ${index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/60 to-transparent" />

            {/* Decorative Elements */}
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full grid grid-cols-12 items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl col-span-12 md:col-span-7 lg:col-span-6 col-start-6 md:col-start-2 lg:col-start-6">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/40 backdrop-blur-sm border border-blue-400/40 rounded-full mb-4 md:mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
            <span className="text-blue-200 text-sm font-medium">
              {hero_swiper_data[currentSlide]?.subtitle}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {hero_swiper_data[currentSlide]?.title}
          </h1>

          {/* Rating & Info */}
          <div className="flex flex-wrap items-center sm:gap-4 gap-1 md:gap-6 mb-6 md:mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 md:w-5 md:h-5 ${i < Math.floor(hero_swiper_data[currentSlide]?.rating || 4) ? "text-yellow-400" : "text-gray-500"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-white ml-2 font-medium text-sm md:text-base">{hero_swiper_data[currentSlide]?.rating}</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/20" />
            <p className="text-gray-300 text-sm md:text-base">
              {hero_swiper_data[currentSlide]?.subtext}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link
              href="/contact"
              className="btn-primary hidden md:inline-flex items-center justify-center gap-2"
            >
              <span>Get Free Quote</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={hero_swiper_data[currentSlide]?.ac_types ? `/services/${hero_swiper_data[currentSlide].ac_types.name.toLowerCase().replace(/\s+/g, "-")}` : "/services"}
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              <span>Explore Services</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-3 sm:bottom-8 right-0 -translate-x-7 flex space-x-2">
        {hero_swiper_data.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-blue-500" : "w-2 bg-white/40 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
