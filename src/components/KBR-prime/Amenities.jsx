"use client";
import { useState } from "react";
import EnquiryForm from "../EnquiryForm";
import {
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
  Phone,
} from "lucide-react";

const amenities = [
  { icon: Waves, title: "Swimming Pool" },
  { icon: Tent, title: "Indoor Games" },
  { icon: Cctv, title: "24/7 Security" },
  { icon: Baby, title: "Children’s Play Area" },
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
        <h2 className="text-3xl md:text-4xl font-semibold text-[#5b3d2e] mb-10">
          Amenities
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8">
          {amenities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-1"
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
              </div>
            );
          })}
        </div>
      </div>

      {/* BROCHURE & CALL ACTION BUTTONS */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-12 py-5 px-4">
        <button
          suppressHydrationWarning
          onClick={() => setOpen(true)}
          className="text-[#5b3d2e] flex items-center gap-2 bg-amber-100 border-2 border-dashed border-[#5b3d2e] px-6 py-3 rounded-full hover:bg-[#5b3d2e] hover:text-white transition cursor-pointer"
        >
          📄 Download Brochure
        </button>

        <a
          href="tel:+916366699888"
          className="inline-flex items-center gap-2 bg-[#5b3d2e] hover:bg-[#432c21] text-[#f4edd9] px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 active:scale-95 transition"
          title="Direct Call 6366699888"
        >
          <Phone size={18} />
          <span>Call: 6366699888</span>
        </a>
      </div>

      {open && (
        <EnquiryForm
          heading="Get the brochure on your whatsapp"
          description="Fill your details to receive the complete brochure, pricing & availability on your ."
          buttonText="Get Brochure"
          open={open}
          setOpen={setOpen}
        />
      )}
    </section>
  );
}
