"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Download, Sparkles, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const EnquiryForm = dynamic(() => import("../EnquiryForm"), { ssr: false });

const images = [
  {
    src: "/vinra-bmr-velverde-hero.webp",
    title: "Grand Entrance Gate",
    desc: "80ft Wide Main Entrance with Avenue Plantation",
  },
  {
    src: "/bmr3.png",
    title: "CUDA Approved Master Layout",
    desc: "129 Premium Villa Plots spread across 9 Acres",
  },
  {
    src: "/bmr2.png",
    title: "Modern Villa Architecture",
    desc: "Sample Luxury Villa Design Concept",
  },
  {
    src: "/bg.webp",
    title: "Landscaped Gardens & Park",
    desc: "Underground Utilities & Solar Street Lights",
  },
];

const locationAdvantages = [
  ["DC Office", "2 km"],
  ["Chikkaballapur Railway Station", "3 km"],
  ["Chikkaballapur KSRTC Bus Stand", "4 km"],
  ["District Hospital", "4 km"],
  ["Nandi Hills", "12 km"],
  ["Isha Foundation (Adiyogi)", "12 km"],
  ["Chikkaballapura Inst. of Medical Sciences", "15 km"],
  ["Devanahalli Town", "20 km"],
  ["KIADB Industrial Area", "29 km"],
  ["Kempegowda Int'l Airport (KIA)", "30 km"],
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* GALLERY CAROUSEL SECTION */}
      <section id="gallery" className="scroll-mt-28 bg-gradient-to-b from-[#faf8f5] via-white to-[#f4f1ea] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d5ad65]/40 bg-[#d5ad65]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#b88a44]">
            <Sparkles className="h-3.5 w-3.5 text-[#d5ad65]" />
            Visual Tour
          </div>

          <h2 className="mb-3 text-3xl font-bold tracking-tight text-[#1E3D34] md:text-4xl lg:text-5xl font-serif">
            Visualize Your Future Plot
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
            Explore our CUDA 2031 approved 9-acre gated enclave featuring wide 80ft asphalt roads, underground cabling, and lush greenery.
          </p>

          {/* MAIN CAROUSEL SLIDER */}
          <div className="relative mx-auto flex max-w-5xl items-center justify-center gap-3 sm:gap-6">
            {/* Left Control Arrow */}
            <button
              suppressHydrationWarning
              onClick={prevSlide}
              className="absolute left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/80 text-[#1E3D34] shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-[#1E3D34] hover:text-white sm:h-12 sm:w-12 sm:left-4"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Carousel Frame */}
            <div className="flex w-full items-center justify-center gap-4 overflow-hidden py-2">
              {/* Left Preview Image (Desktop Only) */}
              <div
                onClick={() => setIndex((index - 1 + images.length) % images.length)}
                className="relative hidden h-[280px] w-[140px] cursor-pointer overflow-hidden rounded-2xl border border-gray-200 shadow-md transition duration-300 hover:opacity-90 lg:block opacity-60 hover:scale-105"
              >
                <Image
                  src={images[(index - 1 + images.length) % images.length].src}
                  alt="Previous preview"
                  fill
                  sizes="140px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Main Featured Image Card */}
              <div className="relative h-[250px] w-full max-w-[720px] overflow-hidden rounded-2xl shadow-xl sm:h-[340px] md:h-[420px]">
                <Image
                  src={images[index].src}
                  alt={images[index].title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 720px, 95vw"
                  className="object-cover transition-all duration-700 hover:scale-105"
                />
                {/* Gradient Overlay & Caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Bottom Title & Subtitle */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white sm:p-7">
                  <h3 className="text-lg font-bold text-[#f8f6f0] sm:text-2xl font-serif">
                    {images[index].title}
                  </h3>
                  <p className="mt-1 text-xs text-white/80 sm:text-sm">
                    {images[index].desc}
                  </p>
                </div>
              </div>

              {/* Right Preview Image (Desktop Only) */}
              <div
                onClick={() => setIndex((index + 1) % images.length)}
                className="relative hidden h-[280px] w-[140px] cursor-pointer overflow-hidden rounded-2xl border border-gray-200 shadow-md transition duration-300 hover:opacity-90 lg:block opacity-60 hover:scale-105"
              >
                <Image
                  src={images[(index + 1) % images.length].src}
                  alt="Next preview"
                  fill
                  sizes="140px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            {/* Right Control Arrow */}
            <button
              suppressHydrationWarning
              onClick={nextSlide}
              className="absolute right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/80 text-[#1E3D34] shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-[#1E3D34] hover:text-white sm:h-12 sm:w-12 sm:right-4"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* DOTS PAGINATION */}
          <div className="mt-6 flex justify-center gap-2">
            {images.map((img, i) => (
              <button
                key={img.src}
                suppressHydrationWarning
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${i === index
                  ? "w-8 bg-gradient-to-r from-[#1E3D34] to-[#d5ad65]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                aria-label={`Open gallery slide ${i + 1}`}
              />
            ))}
          </div>

          {/* DOWNLOAD BROCHURE LUXURY BUTTON */}
          <div className="mt-10 sm:mt-12">
            <button
              suppressHydrationWarning
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-3.5 rounded-full bg-gradient-to-r from-[#1E3D34] via-[#2A5246] to-[#1E3D34] px-7 py-4 text-xs font-bold tracking-widest text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:brightness-110 border border-[#d5ad65]/40 sm:text-sm"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d5ad65] text-[#1E3D34] transition-transform group-hover:scale-110">
                <Download className="h-4 w-4" />
              </span>
              <span className="uppercase text-[#f8f6f0]">Request Project Brochure</span>
            </button>
          </div>
        </div>
      </section>

      {/* LOCATION ADVANTAGES SECTION */}
      <section
        id="location"
        className="relative scroll-mt-16 bg-[#0c241c] py-20 text-white overflow-hidden"
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 rounded-full bg-[#d5ad65]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-96 w-96 rounded-full bg-[#1E3D34]/50 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 md:px-6">
          {/* Centered Section Header */}
          <div className="mb-12 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d5ad65]/30 bg-[#d5ad65]/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-[#d5ad65]">
              <MapPin className="h-3.5 w-3.5" />
              Strategic Connectivity
            </div>

            <h2 className="mb-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl font-serif">
              Location Advantages
            </h2>
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              Conveniently positioned in Anakanuru Village, Kasaba Hobli, Chikkaballapura — moments away from NH-44, upcoming CUDA growth corridors, and key institutional hubs.
            </p>
          </div>

          <div className="grid gap-10 text-left lg:grid-cols-12 lg:items-center">
            {/* Map Column */}
            <div className="lg:col-span-5">
              <div className="relative h-[340px] w-full overflow-hidden rounded-2xl border border-white/15 shadow-2xl md:h-[460px] group">
                <iframe
                  title="Vinra BMR Velverde location map"
                  src="https://www.google.com/maps?q=Anakanuru%20Village%20Kasaba%20Hobli%20Chikkaballapura&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="grayscale-[20%] contrast-[105%] transition duration-500 group-hover:grayscale-0"
                />
                <div className="absolute top-4 left-4 rounded-xl border border-white/20 bg-[#071812]/90 px-4 py-2.5 text-xs backdrop-blur-md shadow-lg">
                  <p className="font-bold text-[#d5ad65]">BMR Velverde Enclave</p>
                  <p className="text-white/70">Anakanuru Village, Chikkaballapura</p>
                </div>
              </div>
            </div>

            {/* Location Advantages Column */}
            <div className="lg:col-span-7">
              <ul className="grid gap-2.5 text-xs sm:text-sm md:grid-cols-2">
                {locationAdvantages.map(([place, distance]) => (
                  <li
                    key={place}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-sm transition duration-300 hover:border-[#d5ad65]/40 hover:bg-white/[0.1] hover:shadow-lg"
                  >
                    <span className="flex min-w-0 items-center gap-2.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#d5ad65]/15 text-[#d5ad65] transition-transform group-hover:scale-110">
                        <MapPin className="h-3.5 w-3.5" />
                      </span>
                      <span className="truncate font-medium text-white/90 group-hover:text-white">
                        {place}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-md border border-[#d5ad65]/30 bg-[#d5ad65]/15 px-2 py-0.5 text-xs font-bold text-[#d5ad65]">
                      {distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CONVERSION & FOOTER DISCLAIMER */}
      <section className="w-full bg-[#071812]">
        <EnquiryForm variant="visit" tableName="bmr_enquiries" />

        <div className="border-t border-white/10 bg-[#071812] px-6 py-10 text-center text-white md:py-14">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#d5ad65] md:text-sm">
            Legal Disclaimer
          </p>
          <p className="mx-auto max-w-4xl text-xs leading-relaxed text-white/70 md:text-sm">
            The information provided on this website is for general
            informational purposes only and should not be considered as an
            offer, invitation, or commitment for any service or property.
            Prices, specifications, availability, and other project details are
            subject to change without prior notice. All images and visuals are
            for illustrative and representation purposes only. This page is for
            Vinra BMR Velverde. By submitting your details, you authorize us to
            contact you via call, SMS, WhatsApp, or email regarding project
            updates and related information.
          </p>

          {/* Social Links */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-[#d5ad65] font-semibold mr-2">Connect With Us:</span>
            <a
              href="https://www.instagram.com/vinragroupofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 border border-white/20 transition duration-300 hover:bg-[#d5ad65] hover:text-[#071812] hover:border-[#d5ad65]"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/Vinragroupofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 border border-white/20 transition duration-300 hover:bg-[#d5ad65] hover:text-[#071812] hover:border-[#d5ad65]"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCtYIR-Fm-DBCeKLeEw-SWdA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 border border-white/20 transition duration-300 hover:bg-[#d5ad65] hover:text-[#071812] hover:border-[#d5ad65]"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/vinragroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 border border-white/20 transition duration-300 hover:bg-[#d5ad65] hover:text-[#071812] hover:border-[#d5ad65]"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ENQUIRY MODAL */}
      {open && (
        <EnquiryForm
          heading="Request Official Project Brochure"
          description="Please fill out your contact details below. Our dedicated sales executive will contact you shortly to provide the official BMR Velverde brochure, plot layout, and current pricing."
          buttonText="Request Brochure"
          open={open}
          setOpen={setOpen}
          tableName="bmr_enquiries"
        />
      )}
    </>
  );
}

