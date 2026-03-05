"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { menu, contactInfo,logo } from "../data/Data";

/* ---------------- Icons ---------------- */

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

/* ---------------- Navbar ---------------- */

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const mobileRef = useRef(null);
  const router = useRouter();

  /* -------- Scroll Optimization -------- */

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* -------- Click Outside Close -------- */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  /* -------- Search -------- */

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    router.push(`/search?q=${encodeURIComponent(searchQuery)}`);

    setShowSearch(false);
    setSearchQuery("");
    setIsOpen(false);
  };

  /* -------- Menu Links -------- */

  const Links = ({ onClick }) => (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-1">
      {menu.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          onClick={onClick}
          className="px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 text-center"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );

  return (
    <header
      className={"fixed top-0 w-full z-[999] transition-all duration-300 will-change-transform bg-white/10 backdrop-blur-md shadow-lg p-3"}
    >
      {/* Top Bar */}

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}

          <Link href="/" onClick={closeMenu} className="relative z-10">
            <img src={logo.icon} alt={logo.altName} className="h-10" />
          </Link>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center gap-4 lg:gap-6 px-5 py-2 bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-sm transition-all duration-300">
            <Links onClick={closeMenu} />

            {/* Search */}

            <form onSubmit={handleSearch} className="flex items-center gap-2" role="search">
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  showSearch ? "w-44 lg:w-52 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  aria-label="Search"
                  className="w-full px-3 py-2 text-sm bg-gray-50 rounded-xl outline-none border border-transparent focus:bg-white focus:border-blue-200 transition-all duration-200"
                />
              </div>

              <button
                type="button"
                onClick={() => setShowSearch((p) => !p)}
                aria-label="Toggle search"
                className="text-lg p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
              >
                {showSearch ? <XIcon /> : <SearchIcon />}
              </button>
            </form>

            {/* Call Button */}

            <a
              href={`tel:${contactInfo.mobile1.replace(/\s+/g, "")}`}
              itemProp="telephone"
              className="flex gap-2 justify-center items-center px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-200 text-sm font-semibold shadow-md shadow-blue-500/20"
            >
              <PhoneIcon />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            className="md:hidden text-3xl p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}

      <nav
        aria-label="Main Navigation"
        className={`md:hidden fixed inset-0 z-[1001] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={mobileRef}
          className={`absolute top-3 left-1/2 -translate-x-1/2 w-[90%] max-w-sm flex flex-col gap-4 items-center p-6 bg-white/95 backdrop-blur-xl border border-gray-100 shadow-2xl rounded-3xl transition-all duration-300 ease-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
          }`}
        >
          {/* Close */}

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="absolute top-4 right-4 text-2xl p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-200"
          >
            <XIcon />
          </button>

          {/* Logo */}

          <div className="mt-2 flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">PG</span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold text-blue-600 leading-none">
                Platinum
              </span>
              <span className="text-lg font-bold text-gray-800 leading-none">
                Group
              </span>
            </div>
          </div>

          <Links onClick={closeMenu} />

          {/* Mobile Search */}

          <form onSubmit={handleSearch} className="flex w-full gap-2">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className="w-full px-4 py-3 text-sm bg-gray-50 rounded-xl outline-none border border-transparent focus:bg-white focus:border-blue-200"
            />

            <button className="text-xl p-3 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-all duration-200">
              <SearchIcon />
            </button>
          </form>

          {/* Call */}

          <a
            href={`tel:${contactInfo.mobile1.replace(/\s+/g, "")}`}
            onClick={closeMenu}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold transition-all duration-200"
          >
            <PhoneIcon />
            Call Now
          </a>
        </div>
      </nav>
    </header>
  );
}