"use client";

import { useState } from "react";
import Link from "next/link";
import { footerLinks, contactInfo, logo } from "../data/Data";

export default function Footer() {
  const [active, setActive] = useState(null);

  const toggle = (id) => setActive(active === id ? null : id);

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logo.icon}
                alt="Platinum Group Logo"
                className="h-16"
                loading="lazy"
              />
            </div>

            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Your trusted partner for professional AC repair and maintenance
              services in Pune.
            </p>

            <p className="text-gray-400 mb-6 text-sm">
              GST No: {contactInfo.gstNumber}
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
                >
                  {social.name === "Facebook" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z" />
                    </svg>
                  )}

                  {social.name === "Instagram" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16Z" />
                    </svg>
                  )}

                  {social.name === "Twitter" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.68l7.73-8.75H1.835L1.254 2.25H8.08l4.713 6.231z" />
                    </svg>
                  )}

                  {social.name === "LinkedIn" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinks title="Quick Links" items={footerLinks.quickLinks} />

          {/* Services */}
          <FooterLinks title="Our Services" items={footerLinks.services} />

          {/* Contact */}
          <ContactSection />
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden space-y-3">

          <div className="text-center mb-6">
            <img
              src={logo.icon}
              alt="Platinum Group Logo"
              className="h-14 mx-auto mb-4"
            />

            <p className="text-gray-400 text-sm mb-2">
              GST No: {contactInfo.gstNumber}
            </p>
          </div>

          <Accordion title="Quick Links" id="links" active={active} toggle={toggle}>
            {footerLinks.quickLinks.map((link, i) => (
              <Link key={i} href={link.link} className="block text-gray-400 text-sm">
                {link.title}
              </Link>
            ))}
          </Accordion>

          <Accordion title="Services" id="services" active={active} toggle={toggle}>
            {footerLinks.services.map((service, i) => (
              <Link key={i} href={service.link} className="block text-gray-400 text-sm">
                {service.title}
              </Link>
            ))}
          </Accordion>

          <Accordion title="Contact" id="contact" active={active} toggle={toggle}>
            <a href={`tel:${contactInfo.mobile1}`} className="block text-gray-400 text-sm">
              {contactInfo.mobile1}
            </a>
            <a href={`tel:${contactInfo.mobile2}`} className="block text-gray-400 text-sm">
              {contactInfo.mobile2}
            </a>
            <a href={`mailto:${contactInfo.email}`} className="block text-gray-400 text-sm">
              {contactInfo.email}
            </a>
          </Accordion>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Platinum Group. All rights reserved.
          </p>

          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 text-sm hover:text-blue-400">
              Privacy Policy
            </Link>

            <Link href="/terms" className="text-gray-500 text-sm hover:text-blue-400">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}


/* Accordion */

function Accordion({ title, id, active, toggle, children }) {
  const open = active === id;

  return (
    <div className="border-b border-gray-800 pb-3">
      <button
        onClick={() => toggle(id)}
        className="w-full flex justify-between items-center py-3 font-semibold"
      >
        {title}

        <svg
          className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100 mt-3 pb-3" : "max-h-0 opacity-0"
          }`}
      >
        <div className="space-y-3">{children}</div>
      </div>
    </div>
  );
}


/* Quick links component */

function FooterLinks({ title, items }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">{title}</h3>

      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i}>
            <Link
              href={item.link}
              className="text-gray-400 hover:text-blue-400 flex items-center gap-2 text-sm"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


/* Contact */

function ContactSection() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">Contact Us</h3>

      <ul className="space-y-4 text-gray-400 text-sm">

        <li>
          <a
            href={`tel:${contactInfo.mobile1.replace(/\s+/g, "")}`}
            className="flex items-center gap-3"
          >
            <IconPhone />
            <span>{contactInfo.mobile1}</span>
          </a>
        </li>

        <li>
          <a
            href={`tel:${contactInfo.mobile2.replace(/\s+/g, "")}`}
            className="flex items-center gap-3"
          >
            <IconPhone />
            <span>{contactInfo.mobile2}</span>
          </a>
        </li>

        <li>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3"
          >
            <IconMail />
            <span>{contactInfo.email}</span>
          </a>
        </li>

        <li>
          <a
            href="https://maps.app.goo.gl/s3DojJi1Q5WEtruB9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3"
          >
            <IconLocation />
            <span>
              {contactInfo.address.street}, {contactInfo.address.area}
              <br />
              {contactInfo.address.city}, {contactInfo.address.state} -
              {contactInfo.address.pincode}
            </span>
          </a>
        </li>

      </ul>
    </div>
  );
}


/* Icons */

function IconPhone() {
  return (
    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    </div>
  );
}

function IconMail() {
  return (
    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </div>
  );
}

function IconLocation() {
  return (
    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
  );
}
