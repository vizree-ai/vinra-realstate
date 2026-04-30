"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function EnquiryForm({ open, setOpen, variant = "popup" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bhk, setBhk] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("enquiries")
      .insert([{ name, phone, bhk }]);

    if (error) {
      alert("Error submitting ❌");
      console.log(error);
    } else {
      alert("Submitted Successfully ✅");

      setName("");
      setPhone("");
      setBhk("");

      if (setOpen) setOpen(false);
    }
  };

  // popup closed
  if (variant === "popup" && !open) return null;

  if (variant === "visit") {
    return (
      <div className="bg-[#9c8c7f] py-8 md:py-10 text-center px-5">
        <h2 className="text-2xl md:text-4xl text-white mb-6 md:mb-10 font-medium px-4">
          Request For Site Visit
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row gap-3 md:gap-6 justify-center items-center">
            <input
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full lg:w-1/3 px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-white outline-none text-sm md:text-base text-black"
              required
            />

            <input
              type="tel"
              placeholder="Phone no*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full lg:w-1/3 px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-white outline-none text-sm md:text-base text-black"
              required
            />

            <div className="w-full lg:w-1/3 relative">
              <select
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className={`w-full px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-white outline-none text-sm md:text-base appearance-none ${
                  bhk ? "text-black" : "text-gray-500"
                }`}
                required
              >
                <option value="" disabled hidden>
                  Select BHK*
                </option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
              </select>

              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#5b3d2e]">
                ▼
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 md:mt-8 bg-[#5b3d2e] text-white px-8 md:px-10 py-2.5 md:py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition text-sm md:text-base font-semibold"
          >
            ENQUIRE
          </button>
        </form>
      </div>
    );
  }

  // SECTION FORM
  if (variant === "section") {
    return (
      <div className="relative px-4 sm:px-0">
        <div className="hidden lg:block absolute -left-6 top-0 h-full w-[1px] bg-[#5b3d2e]/40"></div>

        <h2 className="text-2xl md:text-4xl font-semibold text-[#1E3D34] leading-tight md:leading-snug">
          Interested? Let's talk!
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-5 md:mt-8 space-y-3 md:space-y-4"
        >
          <input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] text-[#5b3d2e] bg-transparent placeholder-[#5b3d2e]/60 outline-none focus:ring-1 focus:ring-[#5b3d2e]"
            required
          />

          <input
            type="tel"
            placeholder="Phone no*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-5 py-2.5 md:py-3 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] text-[#5b3d2e] bg-transparent placeholder-[#5b3d2e]/60 outline-none focus:ring-1 focus:ring-[#5b3d2e]"
            required
          />

          <div className="relative">
            <select
              value={bhk}
              onChange={(e) => setBhk(e.target.value)}
              className="block w-full px-4 py-3 rounded-xl border-2 border-[#5b3d2e] bg-transparent text-[#5b3d2e]/60 outline-none focus:ring-1 focus:ring-[#5b3d2e] appearance-none cursor-pointer"
              required
            >
              <option value="" disabled hidden>
                Select BHK*
              </option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#5b3d2e]">
              ▼
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5b3d2e] text-white py-3 md:py-4 rounded-xl font-semibold tracking-wide active:scale-95 md:hover:scale-105 hover:shadow-lg "
          >
            ENQUIRE
          </button>
        </form>
      </div>
    );
  }

  // POPUP FORM
  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 backdrop-blur-md z-[999] flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md rounded-3xl shadow-xl relative p-7 border border-[#e7d8c8]"
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 bg-[#5b3d2e] text-white w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          ✕
        </button>

        <p className="text-center text-sm font-semibold tracking-[3px] text-[#a06a44] uppercase">
          Vinra KBR Prime
        </p>

        <h2 className="text-center text-2xl font-bold text-[#5b3d2e] mt-2">
          Connect with property expert
        </h2>

        <p className="text-center text-[#7a5a45] mt-2 mb-6 text-sm">
          Fill your details to receive latest price sheet, <br /> floor plans &
          special discounts.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-[#d6b89f] text-black bg-[#faf7f4] placeholder-gray-500 outline-none focus:ring-1 focus:ring-[#5b3d2e]"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number*"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl border border-[#d6b89f] text-black bg-[#faf7f4] placeholder-gray-500 outline-none focus:ring-1 focus:ring-[#5b3d2e]"
            required
          />

          <div className="relative">
            <select
              value={bhk}
              onChange={(e) => setBhk(e.target.value)}
              className="block w-full px-4 py-3 rounded-xl border border-[#d6b89f] bg-[#faf7f4] text-gray-500 outline-none focus:ring-1 focus:ring-[#5b3d2e] appearance-none cursor-pointer"
              required
            >
              <option value="" disabled hidden>
                Select BHK*
              </option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#5b3d2e]">
              ▼
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#5b3d2e] to-[#7a5239] hover:opacity-95 transition shadow-md"
          >
            Get Free Callback
          </button>
        </form>
      </div>
    </div>
  );
}
