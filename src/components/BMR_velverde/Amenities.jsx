"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Baby,
  Bike,
  Car,
  Cctv,
  Droplets,
  Footprints,
  Landmark,
  ShieldCheck,
  Sparkles,
  Trees,
  Users,
  Zap,
} from "lucide-react";
import EnquiryForm from "../EnquiryForm";

const amenities = [
  { icon: Landmark, title: "Grand Entrance" },
  { icon: ShieldCheck, title: "Gated Community" },
  { icon: Cctv, title: "CCTV Surveillance" },
  { icon: Trees, title: "Landscaped Parks" },
  { icon: Footprints, title: "Jogging Track" },
  { icon: Baby, title: "Children's Play Area" },
  { icon: Users, title: "Party Hall" },
  { icon: Users, title: "Clubhouse" },
  { icon: Sparkles, title: "Swimming Pool" },
  { icon: Bike, title: "Yoga & Meditation Zones" },
  { icon: Users, title: "Senior Citizens' Area" },
  { icon: Car, title: "Internal Roads & Lighting" },
  { icon: Zap, title: "Underground Cables" },
  { icon: Droplets, title: "Piped Drinking Water" },
  { icon: Footprints, title: "Paved Walkways" },
];

export default function Amenities() {
  const [open, setOpen] = useState(false);

  return (
    <section id="amenities" className="scroll-mt-28 bg-[#f4f4f4] py-10">
      <div className="mx-auto max-w-7xl px-5 text-center md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-3xl font-semibold text-[#5b3d2e] md:text-4xl"
        >
          Amenities
        </motion.h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-8 lg:grid-cols-4">
          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group flex cursor-pointer flex-col items-center"
              >
                <div className="flex h-20 w-20 items-center justify-center bg-white p-5 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl sm:h-24 sm:w-24">
                  <Icon className="h-10 w-10 text-[#5b3d2e] sm:h-12 sm:w-12" />
                </div>
                <p className="mt-3 max-w-32 text-sm font-medium leading-snug text-[#5b3d2e] transition-all duration-300 group-hover:scale-105">
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 flex justify-center py-5">
        <button
          suppressHydrationWarning
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#1E3D34] to-[#2A5246] px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 border border-[#d5ad65]/30"
        >
          Request Official Brochure
        </button>
      </div>

      <EnquiryForm
        heading="Request Official Project Brochure"
        description="Please fill out your contact details below. Our dedicated sales executive will contact you shortly to provide the official BMR Velverde brochure, plot layout, and current pricing."
        buttonText="Request Brochure"
        open={open}
        setOpen={setOpen}
        tableName="bmr_enquiries"
      />
    </section>
  );
}
