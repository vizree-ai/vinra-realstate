"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import EnquiryForm from "./EnquiryForm";
import { Building2, Home, Ruler, Handshake } from "lucide-react";

export default function Navbar({ variant = "home" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = variant === "home";

  const handleExploreProjects = () => {
    setIsOpen(false);
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div
        className={`scroll-auto top-0 left-0 w-full z-[100] ${
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
              isHome ? "mt-6 w-[90px] md:w-[110px]" : "w-[85px] lg:w-[100px]"
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
                  <button className="flex items-center gap-2 border-2 border-[#D8A33B] text-[#D8A33B] px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
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
            onClick={() => setIsOpen(!isOpen)}
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
            className="fixed inset-0 z-[90] bg-[#deb06c] backdrop-blur-xl overflow-y-auto px-6 py-24"
          >
            <div className="flex flex-col gap-8 text-[#1E3D34] text-2xl font-semibold">
              {isHome ? (
                <>
                  <section
                    id="about"
                    className="w-full bg-[#deb06c] py-16 px-12"
                  >
                    <div className="max-w-7xl mx-auto">
                      {/* HEADING */}
                      <div className="text-center max-w-3xl mx-auto mb-12">
                        <p className="text-[#5b4922] tracking-[3px] text-xs md:text-sm font-bold mb-3">
                          ABOUT VINRA GROUP
                        </p>

                        <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
                          Building Trust Through Real Estate Excellence
                        </h2>

                        <div className="flex items-center justify-center gap-3 my-4">
                          <span className="w-10 h-[1px] bg-[#cd9316]"></span>
                          <span className="text-[#cd9316] text-lg">✦</span>
                          <span className="w-10 h-[1px] bg-[#cd9316]"></span>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          Vinra Group is a trusted name in Bangalore real
                          estate, delivering quality construction, premium
                          living spaces, and complete property solutions for
                          modern lifestyles.
                        </p>
                      </div>

                      {/* ICON CARDS */}
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* CARD 1 */}
                        <div className="group backdrop-blur-xl bg-white/10  border border-white/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#c9a14a]/20 mb-4 group-hover:scale-110 transition">
                            <Building2 className="w-6 h-6 text-[#c9a14a]" />
                          </div>

                          <h3 className="font-semibold text-lg text-gray-900">
                            15+ Years Experience
                          </h3>

                          <p className="text-sm text-gray-700 mt-2">
                            Proven expertise in construction and real estate
                            development.
                          </p>
                        </div>

                        {/* CARD 2 */}
                        <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#c9a14a]/20 mb-4 group-hover:scale-110 transition">
                            <Home className="w-6 h-6 text-[#c9a14a]" />
                          </div>

                          <h3 className="font-semibold text-lg text-gray-900">
                            3000+ Properties
                          </h3>

                          <p className="text-sm text-gray-700 mt-2">
                            Successfully delivered residential and commercial
                            projects.
                          </p>
                        </div>

                        {/* CARD 3 */}
                        <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#c9a14a]/20 mb-4 group-hover:scale-110 transition">
                            <Ruler className="w-6 h-6 text-[#c9a14a]" />
                          </div>

                          <h3 className="font-semibold text-lg text-gray-900">
                            1M+ Sq.ft Built
                          </h3>

                          <p className="text-sm text-gray-700 mt-2">
                            High-quality construction with modern architecture.
                          </p>
                        </div>

                        {/* CARD 4 */}
                        <div className="group backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">
                          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#c9a14a]/20 mb-4 group-hover:scale-110 transition">
                            <Handshake className="w-6 h-6 text-[#c9a14a]" />
                          </div>

                          <h3 className="font-semibold text-lg text-gray-900">
                            Customer First
                          </h3>

                          <p className="text-sm text-gray-700 mt-2">
                            Focused on trust, transparency, and long-term
                            relationships.
                          </p>
                        </div>
                      </div>
                      <div className="mt-16 text-center max-w-2xl mx-auto">
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                          Vinra Group is not just about building homes — it’s
                          about creating lifestyles. Every project reflects our
                          commitment to quality, innovation, and long-term value
                          for our customers.
                        </p>
                        {/* CTA */}

                        <button
                          onClick={handleExploreProjects}
                          className="mt-6 px-6 py-2 rounded-full bg-[#c9a14a] text-white font-medium hover:bg-[#b8933f] transition"
                        >
                          Explore Our Projects
                        </button>
                      </div>
                    </div>
                  </section>
                  {/* <a onClick={() => setIsOpen(false)}>Home</a>
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
                  </a> */}
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
