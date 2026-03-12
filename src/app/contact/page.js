"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";

import WhyChoose from "../../components/WhyChoose";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaClock, FaTools, FaCheckCircle } from "react-icons/fa";

import { contactInfo, cities } from "../../data/Data";

/* ================= Styles ================= */

const inputStyle = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-300 text-gray-700 placeholder-gray-400";
const error_style = "text-red-500 text-xs mt-1";

/* ================= Field ================= */

const Field = ({ error, children }) => (
  <div>
    {children}
    {error && <p className={error_style}>{error}</p>}
  </div>
);

/* ================= Main ================= */

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  /* ================= SUBMIT ================= */

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    // Here you would typically send data to your backend
    alert("Thank you! We have received your message and will contact you shortly.");
    reset();
  };

  /* ================= ADDRESS ================= */

  const fullAddress = `${contactInfo.address.street}, ${contactInfo.address.area}, ${contactInfo.address.city}, ${contactInfo.address.state} - ${contactInfo.address.pincode}`;

  const services = [
    "AC Repair",
    "AC Installation",
    "AC Servicing",
    "Gas Refilling",
    "AMC Maintenance",
    "Duct Cleaning",
  ];

  return (
    <div className="md:pt-20 pt-[68px]">

      {/* ================= HERO ================= */}

      <section className="relative h-[320px] md:h-[420px] grid grid-cols-12 items-center">

        <Image
          src="/images/contactpage/contact-hero.webp"
          alt="Contact Platinum Group HVAC Services"
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="container col-span-7 col-start-5 relative z-10 text-left text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact Us
          </h1>

          <p className="text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed">
            Get in touch with our HVAC experts for professional AC repair, installation, and maintenance services across India
          </p>
        </div>

      </section>

      <div className="container">

        {/* ================= QUICK CONTACT CARDS ================= */}

        <section className="py-10 -mt-16 relative z-20">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Phone */}
            <a href={`tel:${contactInfo.mobile1}`} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-blue-500 flex items-center justify-center text-white text-xl shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Call Us</p>
                <p className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{contactInfo.mobile1}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hii, I want to know about your services.")}`} target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-green-500 flex items-center justify-center text-white text-xl shadow-lg shadow-green-500/25 group-hover:scale-110 transition-transform">
                <FaWhatsapp />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">WhatsApp</p>
                <p className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors">Chat Now</p>
              </div>
            </a>

            {/* Email */}
            <a href={`mailto:${contactInfo.email}`} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center text-white text-xl shadow-lg shadow-amber-500/25 group-hover:scale-110 transition-transform">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Email</p>
                <p className="text-lg font-bold text-gray-800 group-hover:text-amber-600 transition-colors text-sm">platinumgroup311@gmail.com</p>
              </div>
            </a>

            {/* Working Hours */}
            <div className="bg-white rounded-xl p-5 shadow-lg flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-purple-500 flex items-center justify-center text-white text-xl shadow-lg shadow-purple-500/25">
                <FaClock />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Working Hours</p>
                <p className="text-lg font-bold text-gray-800">24/7 Available</p>
              </div>
            </div>

          </div>

        </section>

        {/* ================= MAIN CONTACT SECTION ================= */}

        <section className="py-10">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* ================= LEFT COLUMN ================= */}

            <div className="space-y-6">

              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Get In Touch
                </h2>
                <p className="text-gray-600 mb-6">
                  Have questions about AC repair or need immediate assistance? Our team is here to help you with all your HVAC needs.
                </p>

                {/* Address */}
                <div className="flex gap-4 items-start p-4 rounded-xl bg-red-50 mb-4">
                  <span className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center text-white flex-shrink-0">
                    <FaMapMarkerAlt />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Visit Us</p>
                    <p className="text-gray-700 font-medium">{fullAddress}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start p-4 rounded-xl bg-blue-50 mb-4">
                  <span className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white flex-shrink-0">
                    <FaPhoneAlt />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Phone</p>
                    <a href={`tel:${contactInfo.mobile1}`} className="text-gray-700 font-medium hover:text-blue-600">{contactInfo.mobile1}</a>
                    <span className="text-gray-400 mx-2">|</span>
                    <a href={`tel:${contactInfo.mobile2}`} className="text-gray-700 font-medium hover:text-blue-600">{contactInfo.mobile2}</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start p-4 rounded-xl bg-amber-50">
                  <span className="w-12 h-12 rounded-xl bg-amber-500 flex items-center justify-center text-white flex-shrink-0">
                    <FaEnvelope />
                  </span>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-700 font-medium hover:text-amber-600">{contactInfo.email}</a>
                  </div>
                </div>

              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4681421343485!2d73.8763177!3d18.5077353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c041fca35a4d%3A0xbd31aa31bd87b266!2sPLATINUM%20ENTERPRISES!5e0!3m2!1sen!2sin!4v1770799700265!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Platinum Enterprises Location"
                />
              </div>

            </div>

            {/* ================= RIGHT COLUMN - FORM ================= */}

            <div id="contact-form" className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg">

              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Send Us a Message
              </h2>

              <p className="text-gray-600 mb-6">
                Fill out the form below and our team will get back to you within 24 hours
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-5"
              >

                <div className="grid md:grid-cols-2 gap-4">
                  <Field error={errors.name?.message}>
                    <input
                      placeholder="Full Name *"
                      {...register("name", {
                        required: "Name is required",
                        minLength: { value: 2, message: "Minimum 2 characters" },
                      })}
                      className={inputStyle}
                    />
                  </Field>

                  <Field error={errors.phone?.message}>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter 10 digit number",
                        },
                      })}
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\D/g, ""))
                      }
                      className={inputStyle}
                    />
                  </Field>
                </div>

                <Field error={errors.email?.message}>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    {...register("email", { required: "Email is required" })}
                    className={inputStyle}
                  />
                </Field>

                <Field error={errors.service?.message}>
                  <select
                    {...register("service", { required: "Please select a service" })}
                    className={inputStyle}
                  >
                    <option value="">Select Service *</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </Field>

                <Field error={errors.city?.message}>
                  <select
                    {...register("city")}
                    className={inputStyle}
                  >
                    <option value="">Select City (Optional)</option>
                    {cities.map((city) => (
                      <option key={city.slug} value={city.name}>{city.name}</option>
                    ))}
                  </select>
                </Field>

                <Field error={errors.message?.message}>
                  <textarea
                    rows="4"
                    placeholder="Describe your AC issue or requirement..."
                    {...register("message", {
                      minLength: { value: 10, message: "Minimum 10 characters" },
                    })}
                    className={`${inputStyle} resize-none`}
                  />
                </Field>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                <p className="text-center text-gray-500 text-sm">
                  By submitting, you agree to our privacy policy and terms of service
                </p>

              </form>

            </div>

          </div>

        </section>

        {/* ================= SERVICES WE OFFER ================= */}

        <section className="py-12 bg-gray-50 rounded-2xl mb-10">

          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Services We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional AC solutions for residential and commercial properties
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-5 rounded-xl shadow-md flex items-center gap-3 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <FaTools />
                </div>
                <span className="font-medium text-gray-700">{service}</span>
              </div>
            ))}
          </div>

        </section>

        {/* ================= WHY CHOOSE ================= */}

        <section className="py-10">
          <WhyChoose />
        </section>

        {/* ================= CTA SECTION ================= */}

        <section className="pb-16">

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 md:p-12 text-center">

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Need Immediate Assistance?
              </h2>

              <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-6">
                Our expert technicians are available 24/7 for emergency AC repair and installation services across India
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.mobile1}`}
                  className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent("Hii, I want to know about your services.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white font-semibold py-3 px-8 rounded-xl hover:bg-green-600 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>

          </div>

        </section>

      </div>

    </div>
  );
};

export default ContactPage;
