"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { User, Phone, Building, CalendarDays } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function EnquiryForm({
  open,
  setOpen,
  variant = "popup",
  heading,
  description,
  buttonText,
  tableName = "kbr-enquiries",
  defaultBhk = "",
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bhk, setBhk] = useState(defaultBhk);
  const [visitDate, setVisitDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Synchronous lock refs to block rapid multi-clicks / double submissions
  const submittingRef = useRef(false);
  const submittedRef = useRef(false);
  const lastSubmissionKeyRef = useRef("");

  const isBmr = tableName === "bmr_enquiries";
  const isKbr = tableName === "kbr-enquiries" || tableName === "kbr_enquiries";

  useEffect(() => {
    if (defaultBhk) {
      setBhk(defaultBhk);
    }
  }, [defaultBhk, open]);

  // Prefetch thank-you page for instant routing on submit
  useEffect(() => {
    if (isKbr) {
      router.prefetch("/kbr-prime/thank-you");
    }
  }, [isKbr, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Synchronous immediate block against double-click / rapid tapping
    if (submittingRef.current || submittedRef.current) {
      return;
    }

    const cleanPhone = phone.trim();
    const submissionKey = `${cleanPhone}_${tableName}`;

    // Session duplicate guard: block repeated submission of same phone
    if (lastSubmissionKeyRef.current === submissionKey) {
      if (isKbr) {
        router.push("/kbr-prime/thank-you");
      }
      return;
    }

    submittingRef.current = true;
    setLoading(true);

    const payload = {};
    if (name.trim()) payload.name = name.trim();
    if (cleanPhone) payload.phone = cleanPhone;

    if (bhk) {
      if (isBmr) payload.dimensions = bhk;
      else payload.bhk = bhk;
    }

    if (visitDate) {
      if (isBmr) {
        payload.want_to_visit = visitDate;
      } else if (isKbr) {
        payload.bhk = payload.bhk ? `${payload.bhk} (Visit: ${visitDate})` : `Site Visit: ${visitDate}`;
      } else {
        payload.date = visitDate;
      }
    }

    if (isKbr) {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = String(now.getFullYear()).slice(-2);
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12;
      const strHours = String(hours).padStart(2, "0");

      payload.local_time = `${day}-${month}-${year}, ${strHours}:${minutes} ${ampm}`;
    }

    try {
      const { error } = await supabase.from(tableName).insert([payload]);

      if (error) {
        throw error;
      }

      // Mark as permanently submitted for this action
      submittedRef.current = true;
      lastSubmissionKeyRef.current = submissionKey;
      setIsSuccess(true);

      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          event_category: "form",
          event_label: "KBR Prime Lead",
        });
      }

      setName("");
      setPhone("");
      setBhk("");
      setVisitDate("");
      if (setOpen) setOpen(false);

      if (isKbr) {
        // Fast instant client-side transition
        router.push("/kbr-prime/thank-you");
      } else {
        alert("Submitted Successfully ✅ Our sales executive will connect with you shortly!");
        submittingRef.current = false;
        setLoading(false);
      }
    } catch (error) {
      // Re-enable only upon actual error
      submittingRef.current = false;
      setLoading(false);
      alert(`Error submitting ❌: ${error?.message || "Please try again"}`);
      console.error("Supabase submission error:", error);
    }
  };

  // popup closed
  if (variant === "popup" && !open) return null;

  if (variant === "visit") {
    const visitHeading = heading || "Schedule a Site Visit";
    const visitDescription =
      description ||
      (isKbr
        ? "Visit Vinra KBR Prime to explore 2 & 3 BHK luxury model homes."
        : "Visit the project site, explore floor plans & premium spaces.");

    return (
      <div className="bg-[#9c8c7f] py-8 md:py-10 text-center px-5">
        <h2 className="text-2xl md:text-4xl text-white font-bold px-4">
          {visitHeading}
        </h2>
        <p className="text-white/90 text-sm md:text-base py-3 md:py-4 px-4 max-w-2xl mx-auto">
          {visitDescription}
        </p>

          <form onSubmit={handleSubmit} className={loading ? "pointer-events-none opacity-85" : ""}>
            <div className="max-w-5xl mx-auto px-6 flex flex-col lg:flex-row gap-3 md:gap-6 justify-center items-center">
              {/* NAME */}
              <input
                suppressHydrationWarning
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 w-full px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-white outline-none text-sm md:text-base text-black"
                required
              />

              {/* PHONE */}
              <input
                suppressHydrationWarning
                type="tel"
                placeholder="Whatsapp No.*"
                value={phone}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  setPhone(value);
                }}
                pattern="[6-9]{1}[0-9]{9}"
                maxLength={10}
                minLength={10}
                title="Enter a valid 10-digit mobile number."
                className="flex-1 w-full px-6 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-white outline-none text-sm md:text-base text-black"
                required
              />

              {/* DATE */}
              <div className="relative flex-1 w-full">
                <input
                  suppressHydrationWarning
                  type="date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-6 pr-12 py-3 md:py-4 rounded-xl md:rounded-2xl border-2 border-[#5b3d2e] bg-white outline-none text-sm md:text-base text-black appearance-none"
                  required
                />

                <CalendarDays
                  size={20}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5b3d2e] pointer-events-none"
                />

                <style jsx>{`
                input[type="date"]::-webkit-calendar-picker-indicator {
                  opacity: 0;
                  position: absolute;
                  right: 0;
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                }
              `}</style>
              </div>
            </div>

            {/* BUTTON */}
            <button
              suppressHydrationWarning
              type="submit"
              disabled={loading}
              className={`mt-6 md:mt-8 px-8 md:px-10 py-2.5 md:py-3 rounded-lg shadow-md transition text-sm md:text-base font-semibold text-white ${loading
                  ? "bg-gray-400 cursor-not-allowed pointer-events-none"
                  : "bg-[#5b3d2e] hover:shadow-xl hover:scale-105 cursor-pointer"
              }`}
            >
              {isSuccess ? "Redirecting..." : loading ? "Submitting..." : "Schedule Visit"}
            </button>
          </form>
      </div>
    );
  }

  // SECTION FORM
  if (variant === "section") {
    const sectionHeading =
      heading ||
      (isKbr
        ? "Enquire for 2 & 3 BHK Homes"
        : isBmr
          ? "Enquire for Villa Plots"
          : "Interested? Let's talk!");
    const sectionDescription =
      description ||
      (isKbr
        ? "Get pricing, floor plans & brochure on WhatsApp."
        : isBmr
          ? "Get plot layout, price sheet & site visit details."
          : "Connect with our property experts for quick assistance.");

    return (
      <div className="relative px-4 sm:px-0">
        <div className="hidden lg:block absolute -left-6 top-0 h-full w-[1px] bg-[#5b3d2e]/40"></div>

        <h2 className="text-2xl md:text-3xl font-bold text-[#1E3D34] leading-tight md:leading-snug">
          {sectionHeading}
        </h2>
        <div className="w-16 md:w-20 h-[3px] bg-[#b78a31] rounded-full mt-2"></div>
        {sectionDescription && (
          <p className="mt-2 text-sm text-[#1E3D34]/80">
            {sectionDescription}
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className={`mt-4 md:mt-6 space-y-3 md:space-y-4 ${loading ? "pointer-events-none opacity-85" : ""}`}
        >
          {/* NAME */}
          <div className="relative">
            <User
              size={20}
              strokeWidth={1.5}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b78a31] z-10 pointer-events-none"
            />
            <input
              suppressHydrationWarning
              type="text"
              placeholder="Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-12 pr-5 py-3.5 md:py-3.5 rounded-xl md:rounded-2xl 
                 border border-[#1E3D34]
                    text-[#1E3D34] placeholder-[#1E3D34]/70 
                    outline-none 
                    focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/30 
                    transition-all"
              required
            />
          </div>

          {/* PHONE */}
          <div className="relative">
            <Phone
              size={20}
              strokeWidth={1.5}
              className="absolute left-4 top-1/2 -translate-y-1/2 
                 text-[#b78a31] z-10 pointer-events-none"
            />
            <input
              suppressHydrationWarning
              type="tel"
              placeholder="Phone no*"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setPhone(value);
              }}
              pattern="[6-9]{1}[0-9]{9}"
              maxLength={10}
              minLength={10}
              title="Enter a valid 10-digit mobile number."
              className="w-full pl-12 pr-5 py-3.5 md:py-3.5 rounded-xl md:rounded-2xl 
              border border-[#1E3D34] 
              text-[#1E3D34] placeholder-[#1E3D34]/70 
              outline-none 
              focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/30 
              transition-all"
              required
            />
          </div>

          {/* SELECT BHK / CONFIGURATION */}
          <div className="relative">
            <Building
              size={20}
              strokeWidth={1.5}
              className="absolute left-4 top-1/2 -translate-y-1/2 
          text-[#b78a31] z-10 pointer-events-none"
            />

            <select
              suppressHydrationWarning
              value={bhk}
              onChange={(e) => setBhk(e.target.value)}
              className={`block w-full pl-12 pr-10 py-3.5 md:py-3.5 rounded-xl 
                border border-[#1E3D34]
                ${!bhk ? "text-[#1E3D34]/70" : "text-[#1E3D34] font-medium"} 
                outline-none 
                focus:border-[#C8A96A] focus:ring-2 focus:ring-[#C8A96A]/30 
                appearance-none cursor-pointer transition-all`}
              required
            >
              {isBmr ? (
                <>
                  <option value="" disabled hidden>
                    Select Plot Dimensions*
                  </option>
                  <option value="30x40 Plot">30 x 40 Villa Plot (1,200 Sq Ft)</option>
                  <option value="30x50 Plot">30 x 50 Villa Plot (1,500 Sq Ft)</option>
                  <option value="Custom Plot">Custom / Odd Size Plot</option>
                </>
              ) : (
                <>
                  <option value="" disabled hidden>
                    Select Configuration*
                  </option>
                  <option value="2 BHK">2 BHK Apartment</option>
                  <option value="3 BHK">3 BHK Apartment</option>
                  <option value="2 & 3 BHK">2 & 3 BHK (Both)</option>
                </>
              )}
            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#1E3D34]">
              ▼
            </span>
          </div>

          {/* BUTTON */}
          <button
            suppressHydrationWarning
            type="submit"
            disabled={loading}
            className={`w-full 
                   bg-gradient-to-r from-[#b07a1d] to-[#c69636] 
                   text-white py-3 md:py-4 
                   rounded-xl font-semibold tracking-wide 
                   shadow-md 
                   hover:shadow-lg 
                   active:scale-95 md:hover:scale-[1.02] 
                   transition-all 
            relative overflow-hidden ${loading ? "opacity-75 cursor-not-allowed pointer-events-none" : "cursor-pointer"}`}
          >
            {isSuccess ? "Redirecting..." : loading ? "Submitting..." : (buttonText || "ENQUIRE NOW")}
          </button>
        </form>
      </div>
    );
  }

  // POPUP FORM
  const popupHeading =
    heading ||
    (isKbr
      ? "Enquire for 2 & 3 BHK Homes"
      : isBmr
      ? "Enquire for Villa Plots"
      : "Discover Your Dream Property");

  const popupDescription =
    description ||
    (isKbr
      ? "Get instant pricing, floor plans & brochure."
      : isBmr
      ? "Get plot layout, price sheet & site visit details."
      : "Connect with our sales expert for quick assistance.");

  const brandTag = isKbr ? "Vinra KBR Prime" : isBmr ? "Vinra BMR Velverde" : "Vinra Real Estate";

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 backdrop-blur-md z-[999] flex items-center justify-center p-4 bg-black/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-md rounded-3xl shadow-xl relative p-6 sm:p-7 border border-[#e7d8c8]"
      >
        <button
          suppressHydrationWarning
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 bg-[#5b3d2e] text-white w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition"
        >
          ✕
        </button>

        <p className="text-center text-xs font-semibold tracking-[2.5px] text-[#a06a44] uppercase">
          {brandTag}
        </p>

        <h2 className="text-center text-xl sm:text-2xl font-bold text-[#5b3d2e] mt-1.5 leading-snug">
          {popupHeading}
        </h2>

        <p className="text-center text-[#7a5a45] mt-1.5 mb-5 text-xs sm:text-sm">
          {popupDescription}
        </p>

        <form onSubmit={handleSubmit} className={`space-y-3.5 ${loading ? "pointer-events-none opacity-85" : ""}`}>
            <input
              suppressHydrationWarning
              type="text"
              placeholder="Full Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-[#d6b89f] text-black bg-[#faf7f4] placeholder-gray-500 outline-none focus:ring-1 focus:ring-[#5b3d2e] text-sm sm:text-base"
              required
            />

            <input
              suppressHydrationWarning
              type="tel"
              placeholder="Whatsapp No.*"
              value={phone}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");
                setPhone(value);
              }}
              pattern="[6-9]{1}[0-9]{9}"
              maxLength={10}
              minLength={10}
              title="Enter a valid 10-digit mobile number."
              className="w-full px-4 py-3 rounded-xl border border-[#d6b89f] text-black bg-[#faf7f4] placeholder-gray-500 outline-none focus:ring-1 focus:ring-[#5b3d2e] text-sm sm:text-base"
              required
            />

            <div className="relative">
              <select
                suppressHydrationWarning
                value={bhk}
                onChange={(e) => setBhk(e.target.value)}
                className={`block w-full px-4 py-3 rounded-xl border border-[#d6b89f] bg-[#faf7f4] ${!bhk ? "text-gray-500" : "text-[#5b3d2e] font-medium"} outline-none focus:ring-1 focus:ring-[#5b3d2e] appearance-none cursor-pointer text-sm sm:text-base`}
                required
              >
                {isBmr ? (
                  <>
                    <option value="" disabled hidden>
                      Select Plot Dimensions*
                    </option>
                    <option value="30x40 Plot">30 x 40 Villa Plot (1,200 Sq Ft)</option>
                    <option value="30x50 Plot">30 x 50 Villa Plot (1,500 Sq Ft)</option>
                    <option value="Custom Plot">Custom / Odd Size Plot</option>
                  </>
                ) : (
                  <>
                    <option value="" disabled hidden>
                      Select Configuration*
                    </option>
                    <option value="2 BHK">2 BHK Apartment</option>
                    <option value="3 BHK">3 BHK Apartment</option>
                    <option value="2 & 3 BHK">2 & 3 BHK (Both)</option>
                  </>
                )}
              </select>

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#5b3d2e]">
                ▼
              </span>
            </div>

            <button
              suppressHydrationWarning
              type="submit"
              disabled={loading}
              className={`w-full py-3.5 rounded-xl text-white font-semibold bg-gradient-to-r from-[#5b3d2e] to-[#7a5239] hover:opacity-95 transition shadow-md ${loading ? "opacity-75 cursor-not-allowed pointer-events-none" : "cursor-pointer"}`}
            >
              {isSuccess ? "Redirecting..." : loading ? "Submitting..." : (buttonText || "ENQUIRE NOW")}
            </button>

            <p className="mt-2 text-center text-[11px] leading-relaxed text-[#7a5a45]">
              {isKbr
                ? "🔒 100% Privacy. Instant response with price sheet & floor plans."
                : isBmr
                  ? "🔒 100% Privacy. Instant response with official brochure & plot layout."
                  : "🔒 100% Privacy. Instant response from our sales team."}
            </p>
          </form>
      </div>
    </div>
  );
}
