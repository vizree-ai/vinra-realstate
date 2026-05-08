"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import EnquiryForm from "../EnquiryForm";

const ConfigCard = ({ item, scrollYProgress }) => {
  const [open, setOpen] = useState(false);

  const cardOpacity = useTransform(scrollYProgress, [0, 0.4], [0.3, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.4], [50, 0]);

  return (
    <>
      <motion.div
        style={{ opacity: cardOpacity, y: cardY }}
        className="bg-white text-[#5b3d2e] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >
        <div className="p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">{item.title}</h3>

          <div className="w-10 md:w-12 h-[2px] bg-[#5b3d2e] mx-auto my-3 md:my-4"></div>

          <p className="text-lg md:text-xl font-medium">{item.size}</p>
        </div>

        <div className="px-14 bg-[#5b3d2e] p-4 md:p-6 flex justify-center">
          <button
            onClick={() => setOpen(true)}
            className="w-full md:w-auto border border-white text-white px-6 py-2.5 md:py-3 rounded-full text-sm md:text-base font-medium hover:bg-white hover:text-[#5b3d2e] transition-all duration-300"
          >
            UNLOCK PRICE
          </button>
        </div>
      </motion.div>

      <EnquiryForm
        open={open}
        setOpen={setOpen}
        heading={`Unlock ${item.title} Price`}
        description={`Fill your details to receive pricing, floor plans & offers for ${item.title}.`}
        buttonText="Request Pricing"
      />
    </>
  );
};

export default function Configurations() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mainOpacity = useTransform(scrollYProgress, [0, 0.2, 1], [0.5, 1, 1]);

  const mainScale = useTransform(scrollYProgress, [0, 0.2, 1], [0.98, 1, 1]);

  const items = [
    { title: "2 BHK", size: "905-1045 SQ.FT" },
    { title: "3 BHK", size: "1076-1190 SQ.FT" },
  ];

  return (
    <section
      ref={ref}
      className="relative h-auto md:h-[80vh] px-6 md:px-11 py-16 md:py-0 overflow-hidden"
    >
      <div className="fixed inset-0 -z-10 w-full h-full">
        <Image
          src="/hand.jpeg"
          alt="Background"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <motion.div
        style={{ opacity: mainOpacity, scale: mainScale }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-white max-w-6xl mx-auto px-6"
      >
        <h2 className="text-2xl md:text-4xl font-semibold text-center">
          Project Configurations
        </h2>

        <div className="w-16 md:w-40 h-[3px] md:h-[5px] bg-white mt-3 mb-8 md:mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
          {items.map((item, i) => (
            <ConfigCard key={i} item={item} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
