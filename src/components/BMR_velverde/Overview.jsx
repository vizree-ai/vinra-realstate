"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle2,
  Factory,
  Home,
  MapPinned,
  Plane,
  Route,
  ShieldCheck,
  TrendingUp,
  User,
  Phone,
  Building,
  CalendarDays,
  PhoneCall,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import EnquiryForm from "../EnquiryForm";

const highlights = [
  "9 acres of premium planned plots in fast-growing North Bengaluru",
  "129 residential and commercial sites",
  "CUDA and RERA approved plotted development",
  "80 feet road access with organized internal roads",
  "Planned underground utility cabling and street lighting",
  "Landscaped parks, clubhouse, pool, wellness, and family spaces",
];

const stats = [
  ["9 Acres", "Premium planned plots"],
  ["129 Sites", "Residential and commercial mix"],
  ["80 Ft", "Main road access"],
  ["CUDA + RERA", "Approved project"],
];

const investmentReasons = [
  {
    icon: Route,
    title: "Strategic Connectivity",
    text: "Positioned around the Chikkaballapur-Nandi growth corridor with access to NH-44 and Bengaluru's northern expansion.",
  },
  {
    icon: Plane,
    title: "Airport Advantage",
    text: "Kempegowda International Airport is listed around 30 km away, supporting business, travel, and investment demand.",
  },
  {
    icon: Building2,
    title: "Planned Urban Growth",
    text: "The brochure highlights CUDA 2031 planning, residential zoning, wider roads, and future-ready infrastructure.",
  },
  {
    icon: Factory,
    title: "Employment Pull",
    text: "North Bengaluru's office, aerospace SEZ, and industrial growth are expected to strengthen surrounding real-estate demand.",
  },
];

const valuePoints = [
  {
    icon: TrendingUp,
    title: "Northward Urban Spill",
    text: "A chance to secure land before density reaches mature Bengaluru levels.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated Zoning",
    text: "Project positioning references CUDA, DTCP planning, and residential focus.",
  },
  {
    icon: MapPinned,
    title: "Natural Destination Pull",
    text: "Nandi Hills and Chikkaballapura's tourism appeal support the location story.",
  },
];

function VipEnquiryCard() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    bhk: "",
    visitDate: "",
    loading: false,
    submitted: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formState.loading) return;

    setFormState((prev) => ({ ...prev, loading: true }));

    let { error } = await supabase.from("bmr_enquiries").insert([
      {
        name: formState.name,
        phone: formState.phone,
        bhk: formState.bhk || "Plot Enquiry",
        dimensions: formState.bhk || "Plot Enquiry",
        date: formState.visitDate || null,
        want_to_visit: formState.visitDate || null,
      },
    ]);

    if (error && (error.code === "PGRST204" || (error.message && error.message.toLowerCase().includes("column")))) {
      const { error: err2 } = await supabase.from("bmr_enquiries").insert([
        {
          name: formState.name || "Anonymous",
          phone: formState.phone || "",
          dimensions: formState.bhk || "Plot Enquiry",
          want_to_visit: formState.visitDate || null,
        },
      ]);
      error = err2;
    }

    if (error) {
      alert(`Error submitting ❌: ${error.message || "Please check Supabase settings"}`);
      console.error(error);
      setFormState((prev) => ({ ...prev, loading: false }));
    } else {
      setFormState({
        name: "",
        phone: "",
        bhk: "",
        visitDate: "",
        loading: false,
        submitted: true,
      });
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, submitted: false }));
      }, 5000);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#d5ad65]/50 bg-gradient-to-b from-[#112d24] to-[#0a1e18] p-6 sm:p-8 text-white shadow-2xl">
      {/* Ambient Glow */}
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#d5ad65]/20 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#d5ad65]/15 border border-[#d5ad65]/40 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-[#f5d796] uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            SITE VISITS OPEN
          </span>

        </div>

        <h3 className="mt-4 text-2xl font-serif font-bold text-white leading-snug">
          Book a VIP Site Visit
        </h3>
        <p className="mt-1 text-xs text-[#e0cfab]/80 leading-relaxed">
          Get full plot layout map, instant pricing & WhatsApp brochure delivered directly to you.
        </p>

        {formState.submitted ? (
          <div className="mt-6 rounded-2xl border border-emerald-500/40 bg-emerald-950/60 p-6 text-center backdrop-blur-md">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400 mb-3" />
            <h4 className="text-lg font-bold text-white">Thank You!</h4>
            <p className="mt-1 text-xs text-emerald-200">
              Our property expert will contact you shortly with complete details and plot availability.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#d5ad65]" />
              <input
                suppressHydrationWarning
                type="text"
                placeholder="Your Full Name *"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full rounded-xl border border-white/20 bg-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder-white/50 outline-none transition-all duration-300 focus:border-[#d5ad65] focus:bg-white/15 focus:ring-1 focus:ring-[#d5ad65]"
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#d5ad65]" />
              <input
                suppressHydrationWarning
                type="tel"
                placeholder="WhatsApp / Phone Number *"
                value={formState.phone}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  setFormState({ ...formState, phone: val });
                }}
                pattern="[6-9]{1}[0-9]{9}"
                maxLength={10}
                minLength={10}
                required
                className="w-full rounded-xl border border-white/20 bg-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder-white/50 outline-none transition-all duration-300 focus:border-[#d5ad65] focus:bg-white/15 focus:ring-1 focus:ring-[#d5ad65]"
              />
            </div>

            {/* Interest Select */}
            <div className="relative">
              <Building className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#d5ad65]" />
              <select
                suppressHydrationWarning
                value={formState.bhk}
                onChange={(e) => setFormState({ ...formState, bhk: e.target.value })}
                className="w-full rounded-xl border border-white/20 bg-[#122e25] pl-11 pr-8 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-[#d5ad65] focus:ring-1 focus:ring-[#d5ad65] appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#122e25] text-white">Select Plot Requirement</option>
                <option value="Residential Plot" className="bg-[#122e25] text-white">Residential Plot</option>
                <option value="Commercial Plot" className="bg-[#122e25] text-white">Commercial Plot</option>
                <option value="General Enquiry" className="bg-[#122e25] text-white">General Enquiry / Price Sheet</option>
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#d5ad65] text-xs">▼</span>
            </div>

            {/* Visit Date Input (Optional) */}
            <div className="relative">
              <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#d5ad65]" />
              <input
                suppressHydrationWarning
                type="date"
                value={formState.visitDate}
                onChange={(e) => setFormState({ ...formState, visitDate: e.target.value })}
                className="w-full rounded-xl border border-white/20 bg-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder-white/50 outline-none transition-all duration-300 focus:border-[#d5ad65] focus:bg-white/15 focus:ring-1 focus:ring-[#d5ad65] appearance-none"
              />
            </div>

            {/* Submit Button */}
            <button
              suppressHydrationWarning
              type="submit"
              disabled={formState.loading}
              className="mt-2 w-full rounded-xl bg-gradient-to-r from-[#c4934a] via-[#d5ad65] to-[#b88a44] py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#d5ad65]/20 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
            >
              {formState.loading ? "Processing..." : "GET INSTANT PRICING & BROCHURE"}
            </button>
          </form>
        )}


      </div>
    </div>
  );
}

export default function Overview() {
  return (
    <>
      {/* SECTION 1: Project Highlights + VIP Site Visit Card */}
      <section className="w-full bg-[#f3f1ed] px-5 py-14 md:px-11">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-center">

          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b88a2a]">
              Exclusive Master Planned Community
            </p>
            <h2 className="mt-2 text-2xl font-semibold leading-snug text-[#1E3D34] md:text-4xl">
              Project Highlights
            </h2>
            <div className="mt-3 h-[3px] w-24 rounded-full bg-[#b78a31]" />

            <div className="mt-7 space-y-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-[#1E3D34]/20 bg-white p-4 shadow-sm transition hover:border-[#b78a31]"
                >
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-[#b88a2a]" />
                  <p className="font-semibold leading-tight text-[#1E3D34]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <VipEnquiryCard />
          </div>

        </div>
      </section>

      {/* SECTION 2: Build Your Future Overview + Stats */}
      <section className="relative w-full overflow-hidden bg-[#f3f1ed] px-5 pb-20 pt-8 md:px-6 md:pb-28">
        <div className="mb-6 flex items-center justify-center gap-4">
          <div className="h-[1px] w-16 bg-[#c8a96a]" />
          <Home size={26} className="text-[#c8a96a]" />
          <div className="h-[1px] w-16 bg-[#c8a96a]" />
        </div>

        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold leading-snug md:text-4xl">
            <span className="text-[#1E3D34]">Build Your Future at</span>
            <br />
            <span className="font-bold text-[#b88a2a]">
              Vinra BMR Velverde
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#5b3d2e]/80">
            Vinra BMR Velverde brings 9 acres of CUDA & RERA approved premium residential plots to Anakanuru
            Village, Kasaba Hobli, Chikkaballapura. Planned strictly under CUDA Master Plan 2031, over 55% of the zone is earmarked for disciplined residential growth with valid e-Khata, wider roads, and future-ready infrastructure.
          </p>

          <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
            {stats.map(([value, label]) => (
              <div
                key={value}
                className="rounded-xl sm:rounded-2xl border border-[#d8c6ad] bg-white p-3.5 sm:px-5 sm:py-5 text-left shadow-sm transition hover:shadow-md"
              >
                <p className="text-xl sm:text-3xl font-bold font-serif text-[#1E3D34]">{value}</p>
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm leading-snug text-[#5b3d2e]/80 font-medium">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2.5: Plot Configurations & Master Plan Dimensions (From PDF Brochure Page 7) */}
      <section className="w-full bg-[#1E3D34] px-5 py-16 text-white md:px-11">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#d5ad65]/20 border border-[#d5ad65]/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#f5d796]">
              Master Plan Breakdown
            </span>
            <h2 className="mt-4 text-3xl font-serif font-bold text-white md:text-4xl">
              Planned Plot Configurations & Dimensions
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed">
              Meticulously demarcated plots offering high flexibility for custom villa design, commercial retail spaces, and high-ROI land holdings.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                size: "30 × 40 Ft",
                metric: "9.14m × 12.19m",
                count: "25 Sites",
                type: "Residential Plot",
                desc: "Ideal size for standard 3-4 BHK modern luxury villas with parking.",
              },
              {
                size: "30 × 50 Ft",
                metric: "9.14m × 15.24m",
                count: "37 Sites",
                type: "Executive Villa Plot",
                desc: "Spacious layout with room for private garden & dual parking.",
              },
              {
                size: "9.14m × Odd",
                metric: "Varied Dimensions",
                count: "24 Sites",
                type: "Corner & Unique Plots",
                desc: "Enhanced frontage and dual-road access points for custom builds.",
              },
              {
                size: "Custom Sizes",
                metric: "Resi & Commercial Mix",
                count: "43 Sites",
                type: "Commercial + Resi Mix",
                desc: "Strategic frontage plots along the 80 Ft main access avenue.",
              },
            ].map((item) => (
              <div
                key={item.size}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#d5ad65] hover:bg-white/15"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#d5ad65]/20 px-3 py-1 text-xs font-bold text-[#f5d796]">
                    {item.count}
                  </span>
                  <span className="text-[11px] text-white/60 font-mono">{item.metric}</span>
                </div>
                <h3 className="mt-4 text-2xl font-serif font-bold text-white group-hover:text-[#f7e0ab] transition">
                  {item.size}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#d5ad65]">
                  {item.type}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/75">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Investment Logic (Enriched with PDF Brochure facts) */}
      <section className="bg-white px-5 py-16 md:px-11">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#b88a2a]">
              Built For Value | CUDA 2031 Master Plan
            </p>
            <h2 className="mt-3 text-2xl font-semibold leading-snug text-[#1E3D34] md:text-4xl">
              Why Invest in Chikkaballapur & North Bengaluru?
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Route,
                title: "Strategic Highway Connectivity",
                text: "Positioned directly along NH-44 (Bangalore-Hyderabad Highway) with seamless access to Satellite Town Ring Road (STRR) and under-construction Bengaluru-Vijayawada Expressway.",
              },
              {
                icon: Plane,
                title: "Airport Effect (35 km)",
                text: "Kempegowda International Airport is just 35 km away, driving continuous demand from aviation, business, and logistics hubs.",
              },
              {
                icon: Building2,
                title: "CUDA Master Plan 2031",
                text: "Chikkaballapur Urban Development Authority has allocated >55% specifically for residential zoning with clear e-Khata titles & wider roads.",
              },
              {
                icon: Factory,
                title: "Aerospace & Industrial Hubs",
                text: "Neighboring massive employment zones including Aerospace SEZ and KIDPA industrial parks, expanding high-income rental & resale demand.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#e1d4c1] bg-[#fbfaf8] p-6 shadow-sm transition hover:shadow-md hover:border-[#b88a2a]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E3D34]/10 text-[#b88a2a]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#1E3D34]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5b3d2e]/80">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Northward Urban Spill",
                text: "Real estate demand in Bengaluru is moving organically along the northern axis. Chikkaballapur represents early entry with maximum ROI headroom.",
              },
              {
                icon: ShieldCheck,
                title: "Regulated Zoning & e-Khata",
                text: "Unlike haphazard expansion, CUDA and DTCP strict oversight guarantees clear legal titles, approved layouts, and hassle-free bank loan approvals.",
              },
              {
                icon: MapPinned,
                title: "Weekend & Spiritual Tourism",
                text: "Anchored by Nandi Hills, Skandagiri trekking, and the 112-foot Adiyogi Shiva Statue (Isha Foundation Chikkaballapur).",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl border-l-4 border-[#1E3D34] bg-[#f3f1ed] p-5 shadow-sm"
              >
                <Icon className="mt-1 h-6 w-6 shrink-0 text-[#1E3D34]" />
                <div>
                  <h3 className="font-bold text-[#1E3D34]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b3d2e]/80">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Project Features */}
      <section className="w-full bg-[#1E3D34] py-16">
        <div className="flex flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-[55%_45%] lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] w-[95%] overflow-hidden rounded-r-[120px] sm:rounded-r-[160px] lg:h-[520px] lg:w-[88%] lg:rounded-r-[260px]"
          >
            <Image
              src="/vinra-bmr-velverde-hero.webp"
              // src="/bmr2.png"
              alt="Vinra BMR Velverde plotted community"
              fill
              sizes="(min-width: 1024px) 55vw, 95vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="px-6 text-white lg:px-11"
          >
            <h2 className="mb-6 text-3xl font-serif font-bold text-white sm:text-4xl lg:text-4xl tracking-tight leading-snug">
              Project Features
            </h2>

            <ul className="space-y-4 text-base sm:text-lg md:text-lg text-white/95 font-medium leading-relaxed">
              {[
                "Premium plotted layout for custom home planning",
                "Residential and commercial plot mix for everyday convenience",
                "Gated and secure community with CCTV surveillance",
                "Internal roads, paved walkways, and street lighting",
                "Underground cables for a cleaner streetscape",
                "Piped drinking water planned for daily needs",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 sm:gap-3.5">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-[#fceabb] to-[#d5ad65] shadow-sm" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: "Interested? Let's talk!" - WISELY POSITIONED CONVERSION SECTION */}
      <section className="w-full bg-[#f7f3ec] px-5 py-16 md:px-11 md:py-20 border-t border-[#e2d6c3]">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#c8a96a]/40 bg-white p-6 sm:p-10 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

            {/* Left Side: Callout & Direct Actions */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#1E3D34]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#b78a31]">
                <Sparkles className="h-4 w-4 text-[#b78a31]" />
                Direct Consultant Assistance
              </div>

              <h2 className="mt-4 text-3xl font-serif font-bold text-[#1E3D34] md:text-5xl leading-tight">
                Interested? <br />
                <span className="text-[#b88a2a]">Let&apos;s talk!</span>
              </h2>

              <p className="mt-4 text-base leading-relaxed text-[#5b3d2e]/80">
                Connect with our senior property advisor to receive personalized plot recommendations, pricing sheets, site visit arrangements, and launch discounts for Vinra BMR Velverde.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+916366699888"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-[#1E3D34] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-[#122a23]"
                >
                  <PhoneCall className="h-4 w-4 text-[#d5ad65]" />
                  <span>Call +91 63666 99888</span>
                </a>

                <a
                  href="https://wa.me/916366699888?text=Hi,%20I%20am%20interested%20in%20Vinra%20BMR%20Velverde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-[#25D366] bg-[#25D366]/10 px-6 py-3.5 text-sm font-semibold text-[#125c2c] transition hover:bg-[#25D366] hover:text-white"
                >
                  <MessageSquare className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>

            {/* Right Side: Interactive Enquiry Form */}
            <div className="lg:col-span-6 border-t border-gray-100 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <EnquiryForm variant="section" tableName="bmr_enquiries" />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

