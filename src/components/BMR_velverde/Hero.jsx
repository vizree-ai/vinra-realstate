"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  MapPin,
  Ruler,
  ShieldCheck,
  SquareCheck,
  Trees,
  Download,
  ArrowRight,
} from "lucide-react";
import MobileStickyContact from "../MobileStickyContact";
import FloatingContactButtons from "../FloatingContactButtons";

const EnquiryForm = dynamic(() => import("../EnquiryForm"), { ssr: false });

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden scroll-mt-28 bg-[#0a1d17] text-white flex items-center"
    >
      {/* Background Hero Image - Desktop */}
      <Image
        src="/vinra-bmr-velverde-hero.webp"
        alt="Vinra BMR Velverde premium plotted development"
        fill
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
        className="hidden md:block object-cover object-center scale-105 transition-transform duration-10000 ease-out"
      />

      {/* Background Hero Image - Mobile Portrait View */}
      <Image
        src="/bmr-mobile.jpg"
        alt="Vinra BMR Velverde premium plotted development mobile"
        fill
        priority
        fetchPriority="high"
        quality={90}
        sizes="100vw"
        className="block md:hidden object-cover object-center scale-105 transition-transform duration-10000 ease-out"
      />

      {/* Deep Forest Emerald Greenish Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#071812]/85 via-[#071812]/70 to-[#071812]/40 md:bg-gradient-to-r md:from-[#071812]/95 md:via-[#071812]/60 md:via-50% md:lg:via-45% md:to-[#071812]/25 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-500/15 via-emerald-600/15 to-transparent pointer-events-none" />


      {/* Main Content Container - Fits perfectly within 100vh */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:pl-10 md:pr-6 lg:pl-16 lg:pr-8 pt-24 pb-4 sm:pt-28 sm:pb-6 md:pt-28 md:pb-8 lg:pt-28 lg:pb-8">
        <div className="max-w-3xl">

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-2 sm:mt-3 text-3xl font-serif font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            Vinra BMR{" "}
            <span className="bg-gradient-to-r from-[#fceabb] via-[#d5ad65] to-[#f8b500] bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Velverde
            </span>
          </motion.h1>

          {/* Location Line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-2 flex items-start gap-2 text-xs font-semibold text-[#f0e2ca] sm:text-sm md:text-base drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <MapPin className="h-4 w-4 text-[#d5ad65] shrink-0 mt-0.5" />
            <span className="leading-snug">Anakanuru Village, Kasaba Hobli, Chikkaballapura • North Bengaluru</span>
          </motion.div>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-2.5 sm:mt-3.5 max-w-2xl text-xs sm:text-sm leading-relaxed text-white/95 md:text-base lg:text-lg font-light drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            A benchmark address for high-appreciation land investments. Discover 9 acres of premium planned residential & commercial plots designed with 80 ft wide access roads and complete underground infrastructure.
          </motion.p>

          {/* Key Specs Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-3.5 sm:mt-5 grid grid-cols-3 gap-2 sm:gap-3 md:gap-3.5 max-w-2xl"
          >
            {[
              { icon: Trees, value: "9 Acres", label: "Sanctuary", detail: "Spacious Layout" },
              { icon: Ruler, value: "129 Sites", label: "Resi & Retail", detail: "Optimized Plots" },
              { icon: Compass, value: "80 Ft Road", label: "Main Access", detail: "Wide Avenues" },
            ].map((item) => (
              <div
                key={item.value}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#d5ad65]/30 bg-[#0c241c]/85 p-2 sm:p-3 backdrop-blur-md shadow-xl shadow-[#071812]/60 transition-all duration-300 hover:border-[#d5ad65]/70 hover:bg-[#133529]/95"
              >
                <div className="mb-1 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#d5ad65]/35 to-[#8f6932]/35 border border-[#d5ad65]/50 text-[#f5d796]">
                  <item.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <p className="text-xs sm:text-lg font-bold font-serif text-white tracking-tight">{item.value}</p>
                <p className="mt-0.5 text-[10px] sm:text-xs font-semibold text-[#f0e2ca] leading-tight truncate">{item.label}</p>
                <p className="text-[9px] sm:text-[11px] text-white/70 leading-tight hidden sm:block">{item.detail}</p>
              </div>
            ))}
          </motion.div>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-3.5 sm:mt-4 grid grid-cols-2 gap-x-2 gap-y-2 sm:flex sm:flex-wrap sm:gap-2.5 max-w-full"
          >
            {[
              [ShieldCheck, "CUDA & RERA Approved"],
              [Compass, "Chikkaballapur Corridor"],
              [Trees, "Landscaped Community"],
              [SquareCheck, "Gated Community"],
            ].map(([Icon, text]) => (
              <div
                key={text}
                className="flex items-center gap-1.5 rounded-full border border-[#d5ad65]/45 bg-[#0c241c]/90 px-2.5 py-1.5 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs font-semibold text-[#f0e2ca] shadow-lg shadow-[#071812]/60 backdrop-blur-md transition-all duration-300 hover:bg-[#133529]/95 hover:border-[#d5ad65]/70"
              >
                <Icon className="h-3.5 w-3.5 text-[#d5ad65] shrink-0" />
                <span className="truncate">{text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-4 sm:mt-6 flex flex-row items-center gap-2.5 sm:gap-4 w-full max-w-lg"
          >
            <button
              suppressHydrationWarning
              onClick={() => setOpen(true)}
              className="group relative inline-flex flex-1 items-center justify-center gap-1.5 sm:gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#c4934a] via-[#d5ad65] to-[#b88a44] px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#d5ad65]/30 active:scale-[0.98] sm:flex-none sm:px-6"
            >
              <span>Enquire Now</span>
              <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              suppressHydrationWarning
              onClick={() => setBrochureOpen(true)}
              className="inline-flex flex-1 items-center justify-center gap-1.5 sm:gap-2 rounded-xl border border-[#d5ad65]/40 bg-[#0c241c]/90 px-3.5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-xl shadow-[#071812]/50 backdrop-blur-md transition-all duration-300 hover:border-[#d5ad65] hover:bg-[#133529]/95 hover:text-[#f7e0ab] sm:flex-none sm:px-6"
            >
              <Download className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#d5ad65] shrink-0" />
              <span>Brochure</span>
            </button>
          </motion.div>

        </div>
      </div>

      <FloatingContactButtons />

      {open && <EnquiryForm open={open} setOpen={setOpen} />}
      {brochureOpen && (
        <EnquiryForm
          heading="Request Official Project Brochure"
          description="Please submit your details below. Our dedicated sales executive will connect with you shortly to provide the official BMR Velverde brochure, plot layout, and current pricing."
          buttonText="Request Brochure"
          open={brochureOpen}
          setOpen={setBrochureOpen}
        />
      )}
      <MobileStickyContact setOpen={setOpen} />
    </section>
  );
}
