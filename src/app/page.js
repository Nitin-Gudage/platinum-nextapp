import HeroSlider from "../components/HeroSlider";
import QuickServices from "../components/QuickServices";
import TypesOfAC from "../components/TypesOfAC";
import OurServices from "../components/OurServices";
import BrandsSwiper from "../components/BrandsSwiper";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import Link from "next/link";

export default function Home() {
  return (<div className="mt-20">
    {/* Hero Slider */}
    <HeroSlider />
    <div className="container max-w-7xl ">

      {/* Quick Services */}
      <QuickServices />

      {/* Types of AC */}
      <TypesOfAC />

      {/* Our Services */}
      <OurServices />

      {/* Brands Swiper */}
      <BrandsSwiper />
    </div>


    {/* Why Choose */}
    <WhyChoose />
    <div className="container max-w-7xl ">
      {/* Testimonials */}
      <Testimonials />

      {/* How It Works */}
      <HowItWorks />

      {/* FAQ */}
      <FAQ />
      <section className="py-16 md:py-24 ">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-10">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white rounded-full" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-white rounded-full" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Get Started?
              </h2>
              <p className="text-blue-100 text-base">
                Book your AC service today and experience comfort like
                never before
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/services" className="btn-primary">
                Book Now
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}

