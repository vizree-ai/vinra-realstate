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
  Home,
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
            <div className="w-26 md:w-20 h-[3px] bg-[#b78a31] rounded-full mt-2"></div>

            <div className="mt-5 md:mt-8 space-y-2 md:space-y-4">
              {[
                " Spacious 2 & 3 BHK Apartments",
                " Vastu Compliant Homes",
                " Modern Amenities for All Ages",
                "Great Connectivity to Whitefield & Bangalore",
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-1 border-[#1E3D34] flex items-center gap-3 md:gap-4 rounded-xl text-white px-4 py-2.5 md:px-5 md:py-3.5"
                >
                  <div className="w-6 h-6 md:w-6 md:h-6 flex-shrink-0 flex items-center justify-center bg-[#1E3D34] text-[#c09b64] font-extrabold rounded text-medium md:text-base">
                    ✓
                  </div>

                  <p className="text-sm md:text-base text-[#1E3D34] font-bold leading-tight md:leading-normal">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <EnquiryForm variant="section" />
        </div>
      </section>
      <section className="relative w-full bg-[#f3f1ed] pt-16 pb-32 px-6 overflow-hidden">
        {/* TOP ICON + LINES */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-16 bg-[#c8a96a]"></div>

          {/* ICON */}

          <Home size={26} className="text-[#c8a96a]" />

          <div className="h-[1px] w-16 bg-[#c8a96a]"></div>
        </div>

        {/* TEXT CONTENT */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-semibold leading-snug">
            <span className="text-[#1E3D34]">
              Experience a Better Lifestyle at
            </span>
            <br />
            <span className="text-[#b88a2a] font-bold">Vinra KBR Prime</span>
          </h2>

          <p className="mt-6 text-[#5b3d2e]/80 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
            VINRA KBR PRIME brings thoughtfully designed homes crafted for
            families who seek comfort, convenience, and future value. Spacious
            layouts, quality construction, premium amenities, and peaceful
            surroundings make it the perfect address for modern living. Lorem
            ipsum, dolor sit amet consectetur adipisicing elit. Porro delectus
            nobis aliquid ratione quos sed, ipsam eaque voluptatem laborum,
            assumenda suscipit ad! Cupiditate, dolorum assumenda reiciendis cum
            vero sit quas quidem, corrupti quibusdam quam pariatur fugiat
            obcaecati. Corporis iusto dolorum sequi culpa. Eligendi sapiente
            veritatis nulla ex quasi delectus illo amet ipsa sunt quis aperiam
            facere ducimus repellendus modi, corrupti hic fugiat molestiae ab
            aliquam saepe accusamus ipsum omnis? Quibusdam tempore rerum, esse
            maxime minima magni eum ipsum iste animi qui? Amet provident
            quisquam minima quis adipisci vero ipsa, autem esse alias in quam
            excepturi dicta quos earum accusamus inventore.
          </p>
        </div>

        {/* CURVED GREEN BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 200"
            className="w-full h-[140px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,80 C300,200 1100,0 1440,120 L1440,200 L0,200 Z"
              fill="#1E3D34"
            />
          </svg>
        </div>

        {/* GOLD BORDER LINE */}
        <svg
          viewBox="0 0 1440 200"
          className="absolute bottom-[4px] left-0 w-full h-[140px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C300,200 1100,0 1440,120"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="6"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#b88a2a" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#b88a2a" />
            </linearGradient>
          </defs>
        </svg>
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
