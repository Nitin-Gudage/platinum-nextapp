"use client";

import { brands } from "@/data/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function BrandsSwiper() {
  return (
    <section className="px-7 py-16 md:py-24 " >

      {/* Header */}
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Trusted Brands We Service
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Expert technicians certified to work with all major AC brands
        </p>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="my-4"
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center h-20 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 group">
              <img
                src={brand.image}
                alt={brand.name}
                className="max-h-10 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}