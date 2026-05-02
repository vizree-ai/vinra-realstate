"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Compass,
  TrendingUp,
  IndianRupee,
  Home,
  MapPin,
} from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import EnquiryForm from "../EnquiryForm";
import MobileStickyContact from "../MobileStickyContact";

function HeroImage({ className = "" }) {
  return (
    <div
      className={`relative overflow-hidden w-full
    h-[30vh]
    sm:h-[38vh]
    md:h-[34vh]
    lg:h-full
    ${className}`}
    >
      <Image
        src="/Vinra KBR Prime.webp"
        alt="House construction services in Bangalore by Vinra Construction"
        fill
        priority
        fetchPriority="high"
        quality={75}
        className="
      object-cover
      object-center
      sm:object-cover
      sm:object-[center]
    "
        sizes="100vw"
      />
    </div>
  );
}

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Amenities", href: "#amenities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Location", href: "#location" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section className="w-full flex justify-center items-center relative overflow-hidden">
      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] lg:hidden bg-[#6b4a34]/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-white text-2xl font-semibold">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN GRID */}
      <div className="w-full max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] min-h-screen lg:h-[730px] overflow-hidden">
        {/* RIGHT IMAGE DESKTOP */}
        <div className="hidden lg:block relative h-full">
          <HeroImage className="h-full w-full" />

          <div className="absolute bottom-6 right-6 z-10">
            <button className="bg-[#9f773c] text-white px-6 py-2 rounded-xl shadow-md hover:scale-105 transition">
              <span className="cursor-pointer text-lg font-semibold tracking-widest">
                7026003069
              </span>
            </button>
          </div>
        </div>

        {/* LEFT PANEL */}
        <div className="bg-[#F7F3EC] text-[#5b3d2e] p-4 lg:p-8 lg:pt-28 flex flex-col justify-start relative">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E3D34]"
            >
              Own Your Dream Home <br /> at Vinra KBR Prime
            </motion.h1>

            <p className="mt-4 text-base sm:text-lg md:text-lg lg:text-xl text-[#1E3D34] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Spacious 2 & 3 BHK Apartments with Premium Amenities, Excellent
              Connectivity & Smart Investment Potential in
              <br />
              <span className="text-[#9f773c] font-bold">
                Hoskote, Bangalore.
              </span>
            </p>

            {/* SAME IMAGE MOBILE */}
            <HeroImage className="block lg:hidden mt-5 w-full h-[34vh] sm:h-[38vh] md:h-[42vh] rounded-xl overflow-hidden shadow-2xl" />
            {/* BADGES */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 flex flex-col gap-2 sm:gap-3 w-fit mx-auto lg:w-full lg:mx-0"
            >
              {[
                ["RERA Approved Project", ShieldCheck],
                ["CC / OC Approved", Building2],
                ["Vastu Compliant", Compass],
                ["Prime Growth Location", TrendingUp],
              ].map(([text, Icon], i) => (
                <div
                  key={i}
                  className="grid grid-cols-[auto_1fr] items-center gap-3"
                >
                  <div className="flex justify-end">
                    <Icon className="text-[#2d1d11] w-5 h-5 lg:w-6 lg:h-6 shrink-0" />
                  </div>

                  <p className="text-base sm:text-sm md:text-base lg:text-lg font-semibold text-[#1E3D34] leading-snug text-left">
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* FEATURES */}
          <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 border border-[#C89A45] rounded-3xl overflow-hidden">
            <div className="bg-[#1E3D34] shadow-md text-[#F7F3EC] grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center rounded-3xl font-bold overflow-hidden">
              <div className="text-center py-3 px-1 sm:px-2 flex flex-col items-center gap-1">
                <IndianRupee className="w-6 h-6 p-1 lg:w-6 lg:h-6 bg-[#c4934A] rounded-full" />
                <p className="text-sm lg:text-2xl">55 Lakhs</p>
                <p className="text-[10px] lg:text-lg opacity-70">
                  Starting Price
                </p>
              </div>

              <div className="h-10 w-[1px] bg-[#5b3d2e]/20"></div>

              <div className="text-center py-3 px-1 sm:px-2 flex flex-col items-center gap-1">
                <Home className="w-6 h-6 p-1 lg:w-6 lg:h-6 bg-[#c4934A] rounded-full" />
                <p className="text-sm lg:text-2xl">2 & 3 BHK</p>
                <p className="text-[10px] lg:text-lg opacity-70">
                  Premium Homes
                </p>
              </div>

              <div className="h-10 w-[1px] bg-[#5b3d2e]/20"></div>

              <div className="text-center py-3 px-1 sm:px-2 flex flex-col items-center gap-1">
                <MapPin className="w-6 h-6 p-1 lg:w-6 lg:h-6 bg-[#c4934A] rounded-full" />
                <p className="text-sm lg:text-2xl">Hoskote</p>
                <p className="text-[10px] lg:text-lg opacity-70">Bangalore</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FLOATING BUTTONS */}
      <a
        href="https://wa.me/917026003069"
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"
      >
        <FaWhatsapp className="text-white text-3xl" />
      </a>

      <div className="fixed top-145 left-0 -translate-y-1/2 z-50 flex flex-col gap-2">
        <a
          href="tel:+917026003069"
          className="w-10 h-14 bg-[#1E3D34] text-white rounded-r-2xl flex items-center justify-center"
        >
          <FaPhoneAlt />
        </a>
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer text-sm font-semibold tracking-wide w-10 bg-[#1E3D34] text-white rounded-l-2xl"
          style={{
            height: "140px",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Send Enquiry
        </button>
      </div>

      <EnquiryForm open={open} setOpen={setOpen} />
      <MobileStickyContact setOpen={setOpen} />
    </section>
  );
}
