"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ShieldCheck,
  Building2,
  Compass,
  TrendingUp,
  IndianRupee,
  Home,
  MapPin,
  Phone,
} from "lucide-react";
import EnquiryForm from "../EnquiryForm";
import MobileStickyContact from "../MobileStickyContact";
import FloatingContactButtons from "../FloatingContactButtons";

function HeroImage({ className = "", priority = true }) {
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
        alt="Vinra KBR Prime Luxury Apartments in Hoskote Bangalore"
        fill
        priority={priority}
        quality={75}
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 60vw"
      />
    </div>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="hero"
      className="w-full flex justify-center items-stretch relative overflow-hidden scroll-mt-24"
    >
      <div className="w-full max-w-8xl mx-auto grid grid-cols-1 lg:grid-cols-[60%_40%] h-auto lg:min-h-screen overflow-hidden">
        {/* RIGHT IMAGE DESKTOP */}
        <div className="hidden lg:block relative h-full">
          <HeroImage className="h-full w-full" priority={true} />

          <div className="absolute bottom-6 right-6 z-10">
            <a
              href="tel:+916366699888"
              className="inline-flex items-center gap-2 bg-[#9f773c] hover:bg-[#85612c] text-white px-6 py-2.5 rounded-xl shadow-lg hover:scale-105 active:scale-95 transition font-semibold text-lg tracking-wider"
              title="Click to Call 6366699888"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: 6366699888</span>
            </a>
          </div>
        </div>

        {/* LEFT PANEL */}
        <div className="bg-[#F7F3EC] text-[#5b3d2e] p-5 sm:p-7 lg:p-8 pt-24 sm:pt-28 lg:pt-28 xl:pt-32 pb-8 sm:pb-10 flex flex-col justify-start relative">
          <div className="mt-2 text-center lg:text-left">
            <h1 className="animate-fadeInUp text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-[#1E3D34]">
              Own Your Dream Home <br /> at Vinra KBR Prime
            </h1>

            <p className="animate-fadeInUp-delay-1 mt-4 text-base sm:text-lg md:text-lg lg:text-xl text-[#1E3D34] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Spacious 2 & 3 BHK Apartments with Premium Amenities, Excellent
              Connectivity & Smart Investment Potential in
              <br />
              <span className="text-[#9f773c] font-bold">
                Hoskote, Bangalore.
              </span>
            </p>

            {/* SAME IMAGE MOBILE */}
            <HeroImage
              priority={false}
              className="block lg:hidden mt-5 w-full h-[34vh] sm:h-[38vh] md:h-[42vh] rounded-xl overflow-hidden shadow-2xl"
            />

            {/* BADGES */}
            <div className="animate-fadeInUp-delay-2 mt-5 sm:mt-6 md:mt-7 lg:mt-8 flex flex-col gap-2 sm:gap-3 w-fit mx-auto lg:w-full lg:mx-0">
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
            </div>
          </div>

          {/* FEATURES */}
          <div className="mt-5 sm:mt-6 md:mt-7 lg:mt-8 border border-[#C89A45] rounded-3xl overflow-hidden">
            <div className="bg-[#1E3D34] shadow-md text-[#F7F3EC] grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center rounded-3xl font-bold overflow-hidden">
              <div className="text-center py-2.5 px-1 sm:px-2 xl:py-3 flex flex-col items-center gap-1">
                <IndianRupee className="w-6 h-6 p-1 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-[#c4934A] rounded-full" />
                <p className="text-sm lg:text-lg xl:text-2xl">59 Lakhs</p>
                <p className="text-[10px] lg:text-sm xl:text-lg opacity-70">
                  Starting Price
                </p>
              </div>

              <div className="h-10 w-[1px] bg-[#5b3d2e]/20"></div>

              <div className="text-center py-2.5 px-1 sm:px-2 xl:py-3 flex flex-col items-center gap-1">
                <Home className="w-6 h-6 p-1 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-[#c4934A] rounded-full" />
                <p className="text-sm lg:text-lg xl:text-2xl">2 & 3 BHK</p>
                <p className="text-[10px] lg:text-sm xl:text-lg opacity-70">
                  Premium Homes
                </p>
              </div>

              <div className="h-10 w-[1px] bg-[#5b3d2e]/20"></div>

              <div className="text-center py-2.5 px-1 sm:px-2 xl:py-3 flex flex-col items-center gap-1">
                <MapPin className="w-6 h-6 p-1 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-[#c4934A] rounded-full" />
                <p className="text-sm lg:text-lg xl:text-2xl">Hoskote</p>
                <p className="text-[10px] lg:text-sm xl:text-lg opacity-70">
                  Bangalore
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>

      <FloatingContactButtons />

      {open && <EnquiryForm open={open} setOpen={setOpen} />}
      <MobileStickyContact setOpen={setOpen} />
    </section>
  );
}
