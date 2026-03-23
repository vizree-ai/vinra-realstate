"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BedDouble, MapPin, IndianRupee } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Configurations from "./Configurations";
import Amenities from "./Amenities";
import Gallery from "./Gallery";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Work", href: "#" },
    { name: "About", href: "#" },
    { name: "Playground", href: "#" },
    { name: "Resource", href: "#" },
  ];

  return (
    <>
      <section className="w-full flex justify-center items-center relative no-scrollbar">
        <div className="absolute top-1 left-0 w-full px-4 z-50">
          <Link href="/Home1">
            <Image
              src="/logo.png"
              alt="Logo"
              width={110}
              height={60}
              className="object-contain w-[90px] lg:w-[110px]"
            />
          </Link>
        </div>
        <div className="absolute top-6 lg:left-1/2 right-4 lg:-translate-x-1/2 lg:right-auto w-fit z-[100]">
          <div className="flex items-center w-full bg-[#6b4a34]/90 backdrop-blur-md rounded-full px-3 py-1 shadow-lg">
            {/* DESKTOP VIEW */}
            <div className="hidden lg:flex w-10 h-10 items-center justify-center bg-white rounded-full">
              <div className="w-2.5 h-2.5 bg-[#6b4a34] rounded-full"></div>
            </div>

            <div className="hidden lg:flex items-center gap-6 text-white text-sm font-medium px-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white/70 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <div className="bg-white text-black px-4 py-1.5 rounded-full text-sm font-medium m-1">
                ihyaet@gmail.com
              </div>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <div
              className="lg:hidden text-white text-3xl cursor-pointer p-1"
              onClick={toggleMenu}
            >
              {isOpen ? "✕" : "☰"}
            </div>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-[90] lg:hidden bg-[#6b4a34]/95 backdrop-blur-xl flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center gap-8 text-white text-2xl font-semibold">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Close on click
                    className="hover:text-white/60 transition-all"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 bg-white text-black px-6 py-3 rounded-full text-base font-medium"
                >
                  ihyaet@gmail.com
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="w-full max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] h-auto lg:h-[730px] overflow-hidden shadow-2xl">
          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-full hidden lg:block"
          >
            <Image
              src="/banner.jpeg"
              alt="Building"
              fill
              className="object-cover object-center"
            />
            {/* <div className="absolute inset-0 bg-black/30"></div> */}
            {/* CALL BUTTON */}
            <div className="absolute bottom-6 right-6">
              <button
                className="bg-[#6b4a34] text-white px-6 py-2 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-out
                                     hover:scale-110 
                                     cursor-pointer"
              >
                <span className="text-lg font-semibold tracking-widest">
                  7026003069
                </span>
              </button>
            </div>
          </motion.div>

          {/* LEFT PANEL */}
          <div
            className="bg-[#f5f3ef] lg:bg-[#5b3d2e] 
                pt-16 lg:pt-0
                text-[#5b3d2e] lg:text-white 
                p-6 lg:p-10 flex flex-col justify-between relative"
          >
            {/* CONTENT */}
            <div className="mt-7 lg:mt-16 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-2xl lg:text-4xl font-bold md:font-bold lg:font-bold leading-tight lg:pt-20 tracking-tight"
              >
                “From Land to Lifestyle <br />
                Your Complete Home Solution.”
              </motion.h1>

              <div className="block lg:hidden mt-4 -mx-6">
                <div className="relative w-full h-[45vh] overflow-hidden shadow-4xl">
                  <Image
                    src="/banner.jpeg"
                    alt="Building"
                    fill
                    className="object-cover shadow-2xl"
                  />

                  {/* TOP SHADOW (Spreading towards Navbar) */}
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent z-10"></div>

                  {/* BOTTOM SHADOW (Spreading towards Content) */}
                  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f3ef] via-[#f5f3ef]/40 to-transparent z-10"></div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                /* space-y-2 on mobile, space-y-6 on desktop */
                /* text-2xl on mobile, text-4xl on desktop */
                className="mt-0 lg:mt-12 space-y-2 lg:space-y-6 text-2xl lg:text-2xl font-semibold px-6 lg:px-4"
              >
                <div className="flex items-center gap-3 lg:gap-6">
                  <BedDouble
                    /* size 18 on mobile, size 32 on desktop */
                    className="text-[#5b3d2e] lg:text-white/80 w-[18px] h-[18px] lg:w-[32px] lg:h-[32px]"
                  />
                  <p>3 BHK villament</p>
                </div>

                <div className="flex items-center gap-3 lg:gap-5">
                  <IndianRupee className="text-[#5b3d2e] lg:text-white/80 w-[18px] h-[18px] lg:w-[32px] lg:h-[32px]" />
                  <p>1.47 Cr* Onwards</p>
                </div>

                <div className="flex items-center gap-3 lg:gap-5">
                  <MapPin className="text-[#5b3d2e] lg:text-white/80 w-[18px] h-[18px] lg:w-[32px] lg:h-[32px]" />
                  <p>Sarjapur Road</p>
                </div>
              </motion.div>
            </div>

            {/* FEATURES */}
            <div className="mt-4">
              {/* Increased top margin slightly */}
              <div className="bg-white/50 lg:bg-[#f3f1ed] text-[#5b3d2e] grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center rounded-2xl shadow-xl font-bold border border-white/30">
                {/* Increased py-3 to py-5 for mobile, and rounded-xl to rounded-2xl */}
                <div className="text-center py-5 lg:py-6">
                  {/* Increased text-base to text-xl for mobile */}
                  <p className="text-xl lg:text-2xl">Expansive</p>
                  {/* Increased text-[10px] to text-[12px] */}
                  <p className="text-[12px] lg:text-lg opacity-70">Balconies</p>
                </div>

                {/* Increased divider height from h-8 to h-12 */}
                <div
                  className="h-12
                 w-[1px] bg-[#5b3d2e]/20"
                ></div>

                <div className="text-center py-5 lg:py-6">
                  <p className="text-xl lg:text-2xl">25+</p>
                  <p className="text-[12px] lg:text-lg opacity-70">Amenities</p>
                </div>

                <div className="h-12 w-[1px] bg-[#5b3d2e]/20"></div>

                <div className="text-center py-5 lg:py-6">
                  <p className="text-xl lg:text-2xl">Exclusive</p>
                  <p className="text-[12px] lg:text-lg opacity-70">
                    Lawn & Terrace
                  </p>
                </div>
              </div>
              {/* Slightly larger disclaimer text */}
              <p className="mt-3 text-[12px] text-center opacity-60">
                T & C Apply | CGI Artist Impression
              </p>
            </div>
          </div>

          <div
            className="fixed bottom-18 right-0 flex flex-row-reverse items-center gap-1 p-3 rounded-md w-fit 
               hover:scale-105 transition-all duration-300 z-50"
          >
            {/* WHATSAPP */}
            <a
              href="https://wa.me/917026003069?text=Hi%20I%20am%20interested%20in%20your%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 flex items-center justify-center rounded-full 
           bg-[#25D366] shadow-md"
            >
              <FaWhatsapp className="text-white text-4xl" />
            </a>

            {/* BUTTON */}
            <button
              className="bg-gray-200 text-black px-2.5 py-1 rounded-md 
           text-sm font-medium shadow-sm"
            >
              Get Brochure
            </button>
          </div>

          <div className="fixed top-85 -translate-y-1/2 z-50 flex flex-col gap-2">
            {/* CALL BUTTON */}
            <a
              href="tel:+917026003069"
              className="w-10 h-14 flex items-center justify-center 
               bg-[#5a3e2b] text-white 
               rounded-r-2xl 
               shadow-lg hover:scale-105 transition"
            >
              <FaPhoneAlt className="text-white text-lg" />
            </a>

            {/* ENQUIRY BUTTON */}
            <button
              className="w-10 flex items-center justify-center 
               bg-[#5a3e2b] text-white 
               rounded-l-2xl 
               shadow-lg hover:scale-105 transition"
              style={{
                height: "140px",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
              }}
            >
              <span className="text-sm font-semibold tracking-wide">
                ENQUIRE NOW
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f3f1ed] pt-12 px-11">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div>
            {/* Reduced text size and leading for mobile */}
            <h2 className="text-2xl md:text-4xl font-semibold text-[#5b3d2e] leading-tight md:leading-snug">
              Project <br className="hidden md:block" /> Highlights
            </h2>

            {/* Reduced top margin and vertical spacing between items */}
            <div className="mt-5 md:mt-8 space-y-2 md:space-y-4">
              {[
                "Only East And North Facing",
                "All Ground Floors : Exclusive Usage Area of Lawn",
                "All Top Floors : Exclusive Usage Area of Terrace",
                "Balcony in Living + All Bedrooms",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 md:gap-4 bg-[#5b3d2e] text-white px-4 py-2.5 md:px-5 md:py-3.5"
                >
                  {/* Slightly smaller check icon container on mobile */}
                  <div className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 flex items-center justify-center bg-white text-[#5b3d2e] rounded text-xs md:text-base">
                    ✓
                  </div>

                  {/* Font size is already responsive (text-sm md:text-base), 
                   but ensured flex-shrink-0 on the icon so text has more room */}
                  <p className="text-sm md:text-base leading-tight md:leading-normal">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          {/* RIGHT SIDE */}
          <div className="relative px-4 sm:px-0">
            {/* Added horizontal padding for mobile edges */}
            {/* VERTICAL DIVIDER */}
            <div className="hidden lg:block absolute -left-6 top-0 h-full w-[1px] bg-[#5b3d2e]/40"></div>
            {/* Smaller font on mobile (text-2xl vs text-4xl) */}
            <h2 className="text-2xl md:text-4xl font-semibold text-[#5b3d2e] leading-tight md:leading-snug">
              Register For <br className="hidden md:block" /> Latest Offers
            </h2>
            {/* Reduced top margin and vertical gap on mobile */}
            <form className="mt-5 md:mt-8 space-y-3 md:space-y-4">
              {/* Reduced vertical padding on inputs for mobile */}
              <input
                type="text"
                placeholder="Name*"
                className="w-full px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-transparent outline-none focus:ring-2 focus:ring-[#5b3d2e]"
              />

              <input
                type="tel"
                placeholder="Phone no*"
                className="w-full px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-transparent outline-none focus:ring-2 focus:ring-[#5b3d2e]"
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-transparent outline-none focus:ring-2 focus:ring-[#5b3d2e]"
              />

              {/* Slimmer button for mobile */}
              <button
                type="submit"
                className="w-full bg-[#5b3d2e] text-white py-3 md:py-4 rounded-xl 
                    font-semibold tracking-wide 
                    active:scale-95 md:hover:scale-105 hover:shadow-lg 
                    transition-all duration-300"
              >
                ENQUIRE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ABOUT PROJECT */}
      <section className="w-full bg-[#f3f1ed] py-16 px-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* HEADING */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5b3d2e] tracking-wide">
            INSPIRA WINDS OF LIFE
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 text-[#5b3d2e]/80 leading-relaxed text-sm md:text-base">
            Experience the elegance of Inspira Winds of Life, consisting of 224
            spacious 3BHK villaments on Sarjapur Road over 5 acres of high-end
            land. With B+G+4 floors planning, the villaments range from 1,753 to
            2,552 sq. ft., ensuring an ideal blend of room and refinement.
            Ground floor villaments enjoy special access to private lawns, while
            top floor villaments feature spacious private terraces, where
            homeowners can connect with nature in their own style. With 64% of
            the community amidst a peaceful blend of rich greenery and
            beautifully landscaped open areas, this community brings nature’s
            essence to your doorstep. A grand 10,000 sq. ft. clubhouse and over
            25+ world-class amenities for all ages make alive a vibrant
            lifestyle that’s both luxurious, comfortable, and
            community-oriented. For all those who have been searching for
            spacious 3BHK apartments on Sarjapur Road, Inspira Winds of Life
            offers an experience of living that is simply unparalleled.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#5b3d2e] py-12">
        {/* Changed to flex-col-reverse for mobile, lg:grid for desktop */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[55%_45%] items-center gap-8 lg:gap-0">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            /* 1. h-[300px] makes it smaller on mobile, lg:h-[520px] keeps desktop size
               2. w-[95%] on mobile vs w-[88%] on desktop
            */
            className="relative w-[95%] lg:w-[88%] h-[300px] lg:h-[520px] overflow-hidden 
             rounded-r-[200px] lg:rounded-r-[300px]"
          >
            <Image src="/1.jpeg" alt="Project" fill className="object-cover" />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white px-6 lg:px-11" // Adjusted padding for mobile
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Project Features
            </h2>

            <ul className="space-y-4 text-sm md:text-base text-white/90">
              {[
                "Location – Sarjapur Road, Bangalore",
                "RERA, BMRDA Approved",
                "Structure – B+G+4 Floors",
                "Total Units – 224 Units",
                "Unit Sizes Ranging – 1753 – 2552 sq.ft.",
                "25+ World-Class Amenities",
                "10,000+ Sqft Clubhouse",
                "Expansive balconies in every unit for open-air living",
                "Low-Density Living – Only 2 units per floor for maximum privacy",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 text-white/70">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
      <Configurations />
      <Amenities />
      <Gallery />
    </>
  );
}
