"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/1.jpeg",
  "/banner.jpeg",
  "/home.jpg",
  "/house.jpeg",
  "/1.jpeg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <section className="bg-[#f4f4f4] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* TITLE */}
          <h2 className="text-3xl font-semibold text-[#5b3d2e] mb-10">
            Gallery
          </h2>

          {/* SLIDER */}
          <div className="relative flex items-center justify-center gap-6">
            {/* LEFT ARROW */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronLeft className="text-[#5b3d2e]" />
            </button>

            {/* IMAGES */}
            <div className="flex gap-6 overflow-hidden">
              {/* LEFT SIDE SMALL */}
              <div className="w-[120px] h-[300px] relative hidden md:block">
                <Image
                  src={images[(index - 1 + images.length) % images.length]}
                  alt=""
                  fill
                  className="object-cover rounded-md opacity-70"
                />
              </div>

              {/* MAIN IMAGE (SLIDE VERSION) */}
              <div className="w-[500px] h-[300px] relative overflow-hidden">
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
              <div className="w-[400px] h-[300px] relative hidden md:block">
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
              onClick={nextSlide}
              className="absolute right-0 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
            >
              <ChevronRight className="text-[#5b3d2e]" />
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
          <div className="mt-12">
            <h3 className="text-2xl text-[#5b3d2e] mb-4">Project Resources</h3>
            <div className="mt-4">
              <div className="bg-white/50 lg:bg-[#f3f1ed] text-[#5b3d2e] grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center rounded-xl shadow-lg font-bold border border-white/20">
                <div className="text-center py-3">
                  <p className="text-base lg:text-xl">Expansive</p>
                  <p className="text-[10px] lg:text-base opacity-70">
                    Balconies
                  </p>
                </div>
                <div className="h-8 w-[1px] bg-[#5b3d2e]/20"></div>
                <div className="text-center py-3">
                  <p className="text-base lg:text-xl">25+</p>
                  <p className="text-[10px] lg:text-base opacity-70">
                    Amenities
                  </p>
                </div>
                <div className="h-8 w-[1px] bg-[#5b3d2e]/20"></div>
                <div className="text-center py-3">
                  <p className="text-base lg:text-xl">Exclusive</p>
                  <p className="text-[10px] lg:text-base opacity-70">
                    Lawn & Terrace
                  </p>
                </div>
              </div>
              <p className="mt-2 text-[10px] text-center opacity-60">
                T & C Apply | CGI Artist Impression
              </p>
            </div>

            <button className="border-3 border-dashed border-[#5b3d2e] px-6 py-3 rounded-full hover:bg-[#5b3d2e] hover:text-white transition">
              📄 Download Broucher
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#5b3d2e] py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* MAP */}
          <div className="border-10 border border-white w-full h-[450px] rounded overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Sarjapur%20Road%20Bangalore&output=embed"
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
              <li>1. Infosys Headquarters – 5 Mins</li>
              <li>2. Azim Premji University – 4 Mins</li>
              <li>3. Forum Mall – 5-10 Mins</li>
              <li>4. Manipal Hospital – 15-20 Mins</li>
              <li>5. Oakridge International School – 10-12 Mins</li>
              <li>6. DMart – 2 Mins</li>
              <li>7. Decathlon – 15-20 Mins</li>
              <li>8. Oxygen Mall – 10-15 Mins</li>
              <li>9. Sarjapur Social – 15-20 Mins</li>
              <li>10. RGA Tech Park – 15-20 Mins</li>
              <li>11. Wipro – 20-25 Mins</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="bg-[#f5f3ef] py-16 px-6 text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#5b3d2e] mb-10">
          Floorplan
        </h2>

        {/* IMAGE CONTAINER */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          {/* BLURRED IMAGE */}
          <Image
            src="/masterplan.jpg" // your image
            alt="Masterplan"
            width={1200}
            height={600}
            className="w-full h-auto object-cover blur-md scale-105"
          />

          {/* DARK OVERLAY (optional but makes button pop) */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* CENTER BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-[#5b3d2e] text-white px-6 py-3 rounded-lg 
                             shadow-lg
                             hover:scale-105 transition-all duration-300"
            >
              View Floor Plans
            </button>
          </div>
        </div>
      </div>
      <div className="w-full my-1"></div>
      <div className="bg-[#f5f3ef] py-16 px-6 text-center">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#5b3d2e] mb-10">
          Masterplan
        </h2>

        {/* IMAGE CONTAINER */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          {/* BLURRED IMAGE */}
          <Image
            src="/masterplan.jpg" // your image
            alt="Masterplan"
            width={1200}
            height={600}
            className="w-full h-auto object-cover blur-md scale-105"
          />

          {/* DARK OVERLAY (optional but makes button pop) */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* CENTER BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              className="bg-[#5b3d2e] text-white px-6 py-3 rounded-lg 
                             shadow-lg
                             hover:scale-105 transition-all duration-300"
            >
              View Floor Plans
            </button>
          </div>
        </div>
      </div>
      <section className="w-full">
        {/* TOP FORM SECTION */}
        {/* Reduced py-10 to py-8 on mobile */}
        <div className="bg-[#9c8c7f] py-8 md:py-10 text-center px-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            /* Reduced text-3xl to text-2xl on mobile and lowered margin */
            className="text-2xl md:text-4xl text-white mb-6 md:mb-10 font-medium px-4"
          >
            Request For Site Visit
          </motion.h2>

          {/* Reduced gap from 6 to 3 for tighter stacking on mobile */}
          <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row gap-3 md:gap-6 justify-center items-center">
            {/* Reduced py-4 to py-3 for shorter input fields on mobile */}
            <input
              type="text"
              placeholder="Name*"
              className="w-full lg:w-1/3 px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-white outline-none text-sm md:text-base"
            />

            <input
              type="tel"
              placeholder="Phone no*"
              className="w-full lg:w-1/3 px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-white outline-none text-sm md:text-base"
            />

            <input
              type="email"
              placeholder="Email*"
              className="w-full lg:w-1/3 px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-white outline-none text-sm md:text-base"
            />
          </div>

          {/* BUTTON: Slightly smaller padding and margin for mobile */}
          <button className="mt-6 md:mt-8 bg-[#5b3d2e] text-white px-8 md:px-10 py-2.5 md:py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition text-sm md:text-base font-semibold">
            ENQUIRE
          </button>
        </div>

        {/* BOTTOM DISCLAIMER */}
        {/* Reduced py-14 to py-8 for a much shorter footer on mobile */}
        <div className="bg-[#5b3d2e] text-white text-center py-8 md:py-14 px-6">
          {/* RERA: Reduced font and margin */}
          <h3 className="text-base md:text-xl font-medium mb-4 md:mb-6">
            RERA NO : PRM/KA/RERA/1251/308/PR/170625/007842
          </h3>

          {/* DISCLAIMER TITLE */}
          <p className="font-semibold mb-2 md:mb-4 text-sm md:text-base">
            Disclaimer:
          </p>

          {/* TEXT: Reduced from text-sm to text-xs on very small screens to save space */}
          <p className="max-w-4xl mx-auto text-xs md:text-base leading-relaxed text-white/80">
            The content is for information purposes only and does not constitute
            an offer to avail of any service. Prices mentioned are subject to
            change without notice and properties mentioned are subject to
            availability. Images are for representation purposes only. This is
            the official website of{" "}
            <span className="font-semibold">Inspira Winds of Life</span>. We may
            share data with RERA registered brokers/companies for further
            processing. We may also send updates to the mobile number/email id
            registered with us. All Rights Reserved.
          </p>
        </div>
      </section>{" "}
    </>
  );
}
