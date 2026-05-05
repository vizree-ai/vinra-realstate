"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EnquiryForm from "../EnquiryForm";

const images = [
  "/1.webp",
  "/house.webp",
  "/home.webp",
  "/house.webp",
  "/1.webp",
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
            Visualize Your Future Home
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

          <button className="text-[#5b3d2e] mt-12 bg-amber-100 border-3 border-dashed border-[#5b3d2e] px-6 py-3 rounded-full hover:bg-[#5b3d2e] hover:text-white transition">
            📄 Download Broucher
          </button>
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
            src="/floor plan.jpg" // your image
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
            src="/floor plan.jpg" // your image
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
