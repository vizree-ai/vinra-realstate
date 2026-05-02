"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import EnquiryForm from "./EnquiryForm";

export default function Navbar({ variant = "home" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobileMenuNavbarHidden, setIsMobileMenuNavbarHidden] =
    useState(false);
  const lastMobileMenuScrollY = useRef(0);

  const isHome = variant === "home";

  const handleExploreProjects = () => {
    setIsOpen(false);
    setIsMobileMenuNavbarHidden(false);
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuNavbarHidden(false);
    lastMobileMenuScrollY.current = 0;
    setIsOpen((current) => !current);
  };

  const handleMobileMenuScroll = (event) => {
    const currentScrollY = event.currentTarget.scrollTop;

    if (currentScrollY <= 10) {
      setIsMobileMenuNavbarHidden(false);
    } else if (currentScrollY > lastMobileMenuScrollY.current + 6) {
      setIsMobileMenuNavbarHidden(true);
    } else if (currentScrollY < lastMobileMenuScrollY.current - 6) {
      setIsMobileMenuNavbarHidden(false);
    }

    lastMobileMenuScrollY.current = currentScrollY;
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div
        className={`top-0 left-0 w-full z-[100] transition-transform duration-300 ease-out ${
          isOpen && isMobileMenuNavbarHidden
            ? "-translate-y-full"
            : "translate-y-0"
        } ${
          isHome
            ? "absolute top-0 left-0 px-4 md:px-10 pt-4"
            : "relative lg:absolute lg:top-0 lg:left-0 px-3 lg:px-7 bg-[#F7F3EC] lg:bg-transparent"
        }`}
      >
        <div
          className={`flex items-center justify-between ${
            isHome ? "h-[78px]" : "lg:grid lg:grid-cols-[1fr_auto_1fr]"
          }`}
        >
          {/* ================= LOGO ================= */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={110}
            height={60}
            className={`object-contain ${
              isHome ? " w-[90px] md:w-[110px]" : "w-[85px] lg:w-[100px]"
            }`}
          />

          {/* ================= DESKTOP MENU ================= */}
          {isHome ? (
            <>
              <div className="hidden md:flex items-center gap-10 text-[17px] font-medium text-white group">
                {/* HOME */}
                <a
                  href="#"
                  className="relative pb-2 text-[#D8A33B] transition group-hover:text-white"
                >
                  Home
                  <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-[#D8A33B] rounded-full transition-all duration-300 group-hover:w-0"></span>
                </a>

                {/* ABOUT */}
                <a
                  href="#about"
                  className="relative pb-2 hover:text-[#D8A33B] transition group/item"
                >
                  About Us
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#D8A33B] rounded-full transition-all duration-300 group-hover/item:w-full"></span>
                </a>

                {/* PROJECTS */}
                <a
                  href="#projects"
                  className="relative pb-2 hover:text-[#D8A33B] transition group/item"
                >
                  Projects
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#D8A33B] rounded-full transition-all duration-300 group-hover/item:w-full"></span>
                </a>

                {/* EMI */}
                <a
                  href="#emi"
                  className="relative pb-2 hover:text-[#D8A33B] transition group/item"
                >
                  EMI Calculator
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#D8A33B] rounded-full transition-all duration-300 group-hover/item:w-full"></span>
                </a>

                {/* BLOGS */}
                <a
                  href="#blogs"
                  className="relative pb-2 hover:text-[#D8A33B] transition group/item"
                >
                  Blogs
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#D8A33B] rounded-full transition-all duration-300 group-hover/item:w-full"></span>
                </a>
              </div>
              <div className="hidden md:block">
                <a
                  href="https://wa.me/916366699888?text=Hi%2C%20I%27m%20looking%20for%20a%20flat."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 border-2 border-[#D8A33B] font-bold text-[#f0b53d] px-5 py-2.5 rounded-xl bg-white/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                    <FaWhatsapp size={20} />
                    Connect with us
                  </button>
                </a>
              </div>
            </>
          ) : (
            <div className="hidden lg:flex items-center bg-[#9f773c] backdrop-blur-md rounded-full px-3 py-1 shadow-lg">
              <div className="hidden lg:flex w-10 h-10 items-center justify-center bg-[#F8EDD8] rounded-full">
                <div className="w-2.5 h-2.5 bg-[#704928] rounded-full"></div>
              </div>

              <div className="hidden lg:flex items-center gap-6 text-white text-sm font-medium px-4">
                <a href="#">Home</a>
                <a href="#amenities">Amenities</a>
                <a href="#gallery">Gallery</a>
                <a href="#location">Location</a>
                <a href="#contact">Contact</a>
              </div>

              {/* RIGHT NUMBER */}
              <div className="hidden lg:flex bg-[#F8EDD8] text-black px-4 py-1.5 rounded-full text-sm font-medium">
                7026003069
              </div>
            </div>
          )}

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden cursor-pointer lg:hidden z-[101] flex items-center bg-[#9f773c] rounded-full px-4 py-1 text-white text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU (COMMON) ================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            onScroll={handleMobileMenuScroll}
            className="fixed inset-0 z-[90] bg-[#deb06c] backdrop-blur-xl overflow-y-auto px-6 py-24"
          >
            <div className="flex flex-col gap-8 text-[#1E3D34] text-2xl font-semibold">
              {isHome ? (
                <>
                  <a onClick={() => setIsOpen(false)}>Home</a>
                  <a href="#about" onClick={() => setIsOpen(false)}>
                    About Us
                  </a>
                  <a href="#projects" onClick={() => setIsOpen(false)}>
                    Projects
                  </a>
                  <a href="#emi" onClick={() => setIsOpen(false)}>
                    EMI Calculator
                  </a>
                  <a href="#blogs" onClick={() => setIsOpen(false)}>
                    Blogs
                  </a>
                </>
              ) : (
                <>
                  <a onClick={() => setIsOpen(false)}>Home</a>
                  <a href="#amenities" onClick={() => setIsOpen(false)}>
                    Amenities
                  </a>
                  <a href="#gallery" onClick={() => setIsOpen(false)}>
                    Gallery
                  </a>
                  <a href="#location" onClick={() => setIsOpen(false)}>
                    Location
                  </a>
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </a>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= ENQUIRY FORM ================= */}
      {!isHome && <EnquiryForm open={open} setOpen={setOpen} variant="popup" />}
    </>
  );
}
