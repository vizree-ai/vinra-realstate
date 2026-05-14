"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
const EnquiryForm = dynamic(() => import("../EnquiryForm"), { ssr: false });

const images = [
  "/kbr1.webp",
  "/kbr2.webp",
  "/kbr3.webp",
  "/kbr4.webp",
  "/house.webp",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section id="gallery" className="bg-[#f4f4f4] py-16 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* TITLE */}
          <h2 className="text-3xl font-semibold text-[#5b3d2e] mb-10">
            Visualize Your Future Home
          </h2>

          {/* SLIDER */}
          <div className="relative flex items-center justify-center gap-6">
            {/* LEFT ARROW */}
            <button
              suppressHydrationWarning
              onClick={prevSlide}
              className="absolute left-2 md:left-0 z-10 bg-white/80 hover:bg-white p-1 md:p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="text-[#5b3d2e] w-4 h-4 md:w-6 md:h-6" />
            </button>

            {/* IMAGES */}
            <div className="flex gap-2 md:gap-6 overflow-hidden">
              {/* LEFT SIDE SMALL */}
              <div className="w-[80px] md:w-[120px] h-[200px] md:h-[300px] relative hidden md:block">
                <Image
                  src={images[(index - 1 + images.length) % images.length]}
                  alt=""
                  fill
                  className="object-cover rounded-md opacity-70"
                />
              </div>

              {/* MAIN IMAGE (SLIDE VERSION) */}
              <div className="w-[300px] md:w-[500px] h-[200px] md:h-[300px] relative overflow-hidden">
                <motion.div
                  animate={{ x: `-${index * 100}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex w-full h-full"
                >
                  {images.map((img, i) => (
                    <div key={i} className="min-w-full h-full relative">
                      <Image
                        src={img}
                        alt=""
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* RIGHT SIDE IMAGE */}
              <div className="w-[80px] md:w-[120px] h-[200px] md:h-[300px] relative hidden md:block">
                <Image
                  src={images[(index + 1) % images.length]}
                  alt=""
                  fill
                  className="object-cover rounded-md opacity-90"
                />
              </div>
            </div>

            {/* RIGHT ARROW */}
            <button
              suppressHydrationWarning
              onClick={nextSlide}
              className="absolute right-2 md:right-0 z-10 bg-white/80 hover:bg-white p-1 md:p-2 rounded-full shadow-md"
            >
              <ChevronRight className="text-[#5b3d2e] w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center mt-6 gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 rounded-full cursor-pointer transition ${
                  i === index ? "bg-black w-3" : "bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* DOWNLOAD */}

          <button
            suppressHydrationWarning
            onClick={() => setOpen(true)}
            className="text-[#5b3d2e] mt-12 bg-amber-100 border-3 border-dashed border-[#5b3d2e] px-6 py-3 rounded-full hover:bg-[#5b3d2e] hover:text-white transition"
          >
            📄 Download Broucher
          </button>
        </div>
      </section> 
      <section id="location" className="bg-[#5b3d2e] py-20 text-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* MAP */}
          <div className="border-10 border border-white w-full h-[450px] rounded overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4942786703705!2d77.82032769999999!3d13.067830299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f001629b9a3%3A0x4ae927a47d558812!2sVinra%20KBR%20Prime!5e0!3m2!1sen!2sin!4v1778146622983!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

          {/* PROXIMITIES */}
          <div className="px-6">
            <h2 className="text-3xl font-semibold mb-6">Proximities</h2>

            <ul className="space-y-2 text-lg">
              <li>1. Whitefield – 20-25 Mins</li>
              <li>2. ITPL Tech Park – 25-30 Mins</li>
              <li>3. Old Madras Road – 5 Mins</li>
              <li>4. Hoskote Town – 5 Mins</li>
              <li>5. MVJ Medical College – 5 Mins</li>
              <li>6. Nexus Shantiniketan Mall – 25 Mins</li>
              <li>7. KR Puram Railway Station – 25-30 Mins</li>
              <li>8. Upcoming Metro Connectivity – Nearby</li>
              <li>9. International Schools – 10-15 Mins</li>
              <li>10. Hospitals & Daily Essentials – Nearby</li>
              <li>11. Bangalore International Airport – 40-45 Mins</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-b from-[#f8f5f0] to-[#efe7dd] py-20 px-6 overflow-hidden">
        {/* TOP CONTENT */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-[#c09b64] uppercase tracking-[5px] text-xs md:text-sm font-semibold mb-4">
            Crafted for Modern Families
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-[#5b3d2e] leading-tight mb-6">
            Floor Plans <span className="text-[#c09b64]">&</span> Master Plan
          </h2>

          <p className="text-[#6b625d] text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Every home at{" "}
            <span className="font-semibold text-[#5b3d2e]">
              Vinra KBR Prime
            </span>{" "}
            is thoughtfully designed to deliver the perfect balance of comfort,
            functionality, and elegance. Spacious layouts, smart space planning,
            natural ventilation, and premium architectural detailing ensure a
            refined living experience for modern families.
          </p>

          {/* TRUST TAGS */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              "Premium Planning",
              "Vastu Inspired Layouts",
              "Trusted Construction",
              "Spacious Interiors",
            ].map((tag, i) => (
              <span
                key={i}
                className="bg-white border border-[#d9c7ae] text-[#5b3d2e] px-4 py-2 rounded-full text-sm shadow-sm"
              >
                ✦ {tag}
              </span>
            ))}
          </div>
        </div>

        {/* MASTER PLAN PREVIEW */}
        <div className="relative max-w-6xl mx-auto rounded-b-[36px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.18)] mb-24 group border border-white/10">
          {/* TOP TITLE */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 px-2">
            {/* LEFT */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#5b3d2e] leading-tight">
                Master Plan
              </h2>
            </div>

            {/* RIGHT BADGE */}
            <div className="flex items-center gap-2 bg-white px-4 md:px-5 py-2 rounded-full shadow-md w-fit">
              <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-green-500"></span>

              <p className="text-xs sm:text-sm font-medium text-[#5b3d2e] whitespace-nowrap">
                Smartly Designed Layout
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden group">
            {/* IMAGE */}
            <Image
              src="/master-plan.jpg"
              alt="Masterplan"
              width={1400}
              height={700}
              className="w-full h-[260px] sm:h-[340px] md:h-[600px] object-cover md:object-contain scale-100 group-hover:scale-105 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>

            {/* GOLD GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,180,131,0.25),transparent_35%)]"></div>

            {/* CONTENT */}
            <div className="absolute inset-0 flex flex-col justify-end items-start p-4 sm:p-6 md:p-14">
              {/* TITLE */}
              <h2 className="text-white text-xl sm:text-3xl md:text-5xl font-bold leading-tight mb-3 md:mb-5 max-w-3xl">
                Thoughtfully Crafted
                <br />
                Premium Community Living
              </h2>

              {/* DESCRIPTION */}
              <p className="text-white/90 text-xs sm:text-sm md:text-lg leading-relaxed max-w-2xl">
                Wide internal roads, lush landscaped gardens, premium amenities,
                recreational zones, and intelligently planned residences come
                together to create an elevated lifestyle experience for modern
                families.
              </p>

              {/* LABEL */}
              <div className="mt-4 md:mt-6">
                <p className="uppercase tracking-[3px] md:tracking-[4px] text-[#d4b483] text-[10px] sm:text-xs md:text-sm font-medium">
                  Community Master Layout
                </p>

                <div className="h-[2px] mt-2 w-14 md:w-20 bg-[#d4b483]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* FLOOR PLAN CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* G+1 CARD */}
          <div className="group relative rounded-[30px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
            <Image
              src="/floor-plan.webp"
              alt="Floor Plan Ground Plus 1"
              width={1200}
              height={700}
              className="w-full h-[340px] md:h-[460px] object-cover blur-[5px] group-hover:blur-0 scale-105 group-hover:scale-110 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p className="text-[#d4b483] uppercase tracking-[4px] text-xs md:text-sm mb-3">
                Elegant Residences
              </p>

              <h3 className="text-white text-3xl md:text-5xl font-bold mb-4">
                2 BHK floor plan
              </h3>

              <p className="text-white/85 text-sm md:text-base max-w-md mb-7 leading-relaxed">
                Spaciously crafted floor plans offering seamless layouts,
                natural lighting, privacy, and modern functionality for
                contemporary family living.
              </p>

              <button
                suppressHydrationWarning
                onClick={() => setOpen(true)}
                className="bg-[#b88a44] hover:bg-[#3f2a1f] text-white px-8 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Download Floor Plans
              </button>
            </div>
          </div>

          {/* G+2 CARD */}
          <div className="group relative rounded-[30px] overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.12)]">
            <Image
              src="/floor2.jpg"
              alt="Floor Plan Ground Plus 2"
              width={1200}
              height={700}
              className="w-full h-[340px] md:h-[460px] object-cover blur-[5px] group-hover:blur-0 scale-105 group-hover:scale-110 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <p className="text-[#d4b483] uppercase tracking-[4px] text-xs md:text-sm mb-3">
                Premium Smart Layouts
              </p>

              <h3 className="text-white text-3xl md:text-5xl font-bold mb-4">
                3 BHK floor plan
              </h3>

              <p className="text-white/85 text-sm md:text-base max-w-md mb-7 leading-relaxed">
                Experience intelligently planned residences with optimized
                spaces, elegant interiors, enhanced comfort, and premium
                lifestyle features.
              </p>

              <button
                suppressHydrationWarning
                onClick={() => setOpen(true)}
                className="bg-[#b88a44] hover:bg-[#3f2a1f] text-white px-8 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Download Floor Plans
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full">
        <EnquiryForm variant="visit" />

        <div className="bg-[#5b3d2e] text-white text-center py-8 md:py-14 px-6">
          <h3 className="text-base md:text-xl font-medium mb-4 md:mb-6">
            RERA NO : PRM/KA/RERA/1251/309/AG/180430/000888
          </h3>

          {/* DISCLAIMER TITLE */}
          <p className="font-semibold mb-2 md:mb-4 text-sm md:text-base">
            Disclaimer:
          </p>

          {/* TEXT: Reduced from text-sm to text-xs on very small screens to save space */}
          <p className="max-w-4xl mx-auto text-xs md:text-base leading-relaxed text-white/80">
            Disclaimer: The information provided on this website is for general
            informational purposes only and should not be considered as an
            offer, invitation, or commitment for any service or property.
            Prices, specifications, availability, and other project details are
            subject to change without prior notice. All images, visuals, and
            renderings used are for illustrative and representation purposes
            only. This is the official website of Vinra KBR Prime. By submitting
            your details, you authorize us and our RERA registered
            associates/partners to contact you via call, SMS, WhatsApp, or email
            regarding project updates and related information. We are committed
            to maintaining transparency and providing accurate information to
            our customers. All Rights Reserved.
          </p>
        </div>
      </section>
      {open && (
        <EnquiryForm
          heading="Get floor plans on your whatsapp"
          description="Fill your details to receive complete floor plans, pricing & availability on your WhatsApp."
          buttonText="Get Floor Plan"
          open={open}
          setOpen={setOpen}
        />
      )}

    </>
  );
}
