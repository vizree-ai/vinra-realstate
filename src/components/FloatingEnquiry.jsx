"use client";

import { FaPhoneAlt } from "react-icons/fa";

export default function FloatingEnquiry({ setOpen }) {
  return (
    <div className="fixed top-1/2 left-0 -translate-y-1/2 z-50 flex flex-col gap-2">
      <a
        href="tel:+917026003069"
        className="w-10 h-14 bg-[#1E3D34] text-white rounded-r-2xl flex items-center justify-center"
      >
        <FaPhoneAlt />
      </a>

      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer text-sm font-semibold tracking-wide w-10 bg-[#1E3D34] text-white rounded-r-2xl"
        style={{
          height: "140px",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
        }}
      >
        Send Enquiry
      </button>
    </div>
  );
}
