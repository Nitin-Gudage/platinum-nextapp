import HeroSlider from "../components/HeroSlider";
import QuickServices from "../components/QuickServices";
import TypesOfAC from "../components/TypesOfAC";
import OurServices from "../components/OurServices";
import BrandsSwiper from "../components/BrandsSwiper";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";

export default function Home() {
  return (<div className="mt-20">
    {/* Hero Slider */}
    <HeroSlider />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 bg-gray-400">

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 bg-gray-400">

      {/* Testimonials */}
      <Testimonials />

      {/* How It Works */}
      <HowItWorks />

      {/* FAQ */}
      <FAQ />
    </div>
  </div>
  );
}

