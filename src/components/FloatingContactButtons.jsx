"use client";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-28 right-3 z-50 flex flex-col gap-3 md:bottom-8 md:right-5">
      <a
        href="tel:+916366699888"
        aria-label="Call Vinra Estates"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3D34] text-white shadow-lg transition hover:scale-105 md:h-14 md:w-14"
      >
        <FaPhoneAlt className="text-lg md:text-xl" />
      </a>
      <a
        href="https://wa.me/916366699888"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 md:h-14 md:w-14"
      >
        <FaWhatsapp className="text-3xl md:text-4xl" />
      </a>
    </div>
  );
}
