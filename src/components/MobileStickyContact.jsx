"use client";

import { MessageCircle } from "lucide-react";

export default function MobileStickyContact({ setOpen }) {
  return (
    <div className="fixed inset-x-0 bottom-2 z-[80] px-4 pb-4 pt-3 md:hidden pointer-events-none">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="pointer-events-auto mx-auto flex min-h-14 w-full max-w-md items-center justify-center gap-3 rounded-4xl border border-white/25 bg-gradient-to-r from-[#1E3D34] via-[#7b5b2d] to-[#c4934a] px-5 py-3 text-white shadow-[0_14px_34px_rgba(30,61,52,0.38)] backdrop-blur-md active:scale-[0.98] transition"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/18">
          <MessageCircle className="h-5 w-5" strokeWidth={2} />
        </span>
        <span className="min-w-0 text-left">
          <span className="block text-[15px] font-semibold leading-tight">
            Contact us for details
          </span>
          <span className="block text-[11px] font-medium leading-tight text-white/80">
            Get price, floor plan and callback
          </span>
        </span>
      </button>
    </div>
  );
}
