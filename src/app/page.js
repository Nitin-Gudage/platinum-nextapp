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
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Quick Services */}
      <QuickServices />

      {/* Types of AC */}
      <TypesOfAC />

      {/* Our Services */}
      <OurServices />

      {/* Brands Swiper */}
      <BrandsSwiper />

      {/* Why Choose */}
      <WhyChoose />

      {/* Testimonials */}
      <Testimonials />

      {/* How It Works */}
      <HowItWorks />

      {/* FAQ */}
      <FAQ />
    </div>
  );
}
