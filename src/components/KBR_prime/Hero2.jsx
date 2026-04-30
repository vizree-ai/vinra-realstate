"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BedDouble,
  IndianRupee,
  MapPin,
  ShieldCheck,
  Building2,
  Compass,
  TrendingUp,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import EnquiryForm from "../EnquiryForm";

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
      <section className="w-full bg-[#f3f1ed] pt-12 px-11">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-4xl font-semibold text-[#1E3D34] leading-tight md:leading-snug">
              Project Highlights
            </h2>

            <div className="mt-5 md:mt-8 space-y-2 md:space-y-4">
              {[
                " Spacious 2 & 3 BHK Apartments",
                " Vastu Compliant Homes",
                " Modern Amenities for All Ages",
                "Great Connectivity to Whitefield & Bangalore",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 md:gap-4 bg-[#825b47] text-white px-4 py-2.5 md:px-5 md:py-3.5"
                >
                  <div className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0 flex items-center justify-center bg-white text-[#402b21] rounded text-xs md:text-base">
                    ✓
                  </div>

                  <p className="text-sm md:text-base leading-tight md:leading-normal">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <EnquiryForm variant="section" />
        </div>
      </section>

      <section className="w-full bg-[#f3f1ed] py-16 px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#5b3d2e] tracking-wide">
            Experience a Better Lifestyle at Vinra KBR Prime
          </h2>

          <p className="mt-6 text-[#5b3d2e]/80 leading-relaxed text-sm md:text-base">
            VINRA KBR PRIME brings thoughtfully designed homes crafted for
            families who seek comfort, convenience, and future value. Spacious
            layouts, quality construction, premium amenities, and peaceful
            surroundings make it the perfect address for modern living.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#5b3d2e] py-12">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-[55%_45%] items-center gap-8 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-[95%] lg:w-[88%] h-[300px] lg:h-[520px] overflow-hidden 
             rounded-r-[200px] lg:rounded-r-[300px]"
          >
            <Image src="/1.jpeg" alt="Project" fill className="object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white px-6 lg:px-11"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Project Features
            </h2>

            <ul className="space-y-4 text-sm md:text-base text-white/90">
              {[
                "Location – Hoskote, Bangalore",
                "RERA, CC / OC Approved",
                "Structure – B+G+3 Floors",
                "Total Units – 72 Units",
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
    </>
  );
}
