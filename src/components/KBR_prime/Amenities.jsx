"use client";
import { useState } from "react";
import EnquiryForm from "../EnquiryForm";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Waves,
  Gamepad2,
  Trees,
  Building2,
  PartyPopper,
  Volleyball,
  Tent,
  Flame,
  Users,
  Bike,
  Baby,
  Cctv,
  ArrowUpDown,
  Zap,
  Car,
  Footprints,
  Wifi,
  Sparkles,
} from "lucide-react";

const amenities = [
  { icon: Waves, title: "Swimming Pool" },
  { icon: Building2, title: "Club House" },
  { icon: Tent, title: "Indoor Games" },
  { icon: Cctv, title: "24/7 Security" },
  { icon: Dumbbell, title: "Gymnasium" },
  { icon: Volleyball, title: "Basketball Court" },
  { icon: Gamepad2, title: "Pickleball Court" },
  { icon: Baby, title: "Children’s Play Area" },
  { icon: PartyPopper, title: "Party Hall" },
  { icon: ArrowUpDown, title: "High-Speed Elevators" },
  { icon: Trees, title: "Lawn Area" },
  { icon: Flame, title: "Barbecue Area" },
  { icon: Users, title: "Reception and Lobby" },
  { icon: Bike, title: "Skating Rink" },
  { icon: Trees, title: "Landscaped Gardens" },
  { icon: Footprints, title: "Walking/Jogging Track" },
  { icon: Zap, title: "Power Backup" },
  { icon: Car, title: "Covered CarParking" },
  { icon: Wifi, title: "Wi-Fi Enabled Zones" },
  { icon: Sparkles, title: "Premium Entrance Lobby" },
];

export default function Amenities() {
  const [open, setOpen] = useState(false);
  return (
    <section id="amenities" className="bg-[#f4f4f4] py-10 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-[#5b3d2e] mb-10"
        >
          Amenities
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8">
          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                {/* ICON BOX */}
                <div
                  className="bg-white p-5 rounded-lg shadow-md 
                            transition-all duration-300 
                            group-hover:scale-110 group-hover:shadow-xl"
                >
                  <Icon size={48} className="text-[#5b3d2e]" />
                </div>

                {/* TEXT */}
                <p
                  className="mt-3 text-[#5b3d2e] text-sm font-medium 
                          transition-all duration-300 
                          group-hover:scale-110"
                >
                  {item.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    <div className="flex justify-center mt-12 py-5">
  <button
    onClick={() => setOpen(true)}
    className="text-[#5b3d2e] flex items-center gap-2 bg-amber-100 border-2 border-dashed border-[#5b3d2e] px-6 py-3 rounded-full hover:bg-[#5b3d2e] hover:text-white transition"
  >
    📄 Download Brochure
  </button>
</div>
      <EnquiryForm
        heading="Get the brochure on your whatsapp"
        description="Fill your details to receive the complete brochure, pricing & availability on your WhatsApp."
        buttonText="Get Brochure"
        open={open}
        setOpen={setOpen}
      />
    </section>
  );
}
