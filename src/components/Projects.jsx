"use client";
import React from "react";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import {
  MapPin,
  BedDouble,
  Ruler,
  Building2,
  Home,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";

export default function projects() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (!window.location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, []);

  useEffect(() => {
    const fetchListings = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("display_order", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setListings(data);
      }
    };

    fetchListings();
  }, []);

  const filteredListings = useMemo(() => {
    const searchTerm = search.toLowerCase().trim();

    return listings.filter((item) =>
      Object.values(item).join(" ").toLowerCase().includes(searchTerm),
    );
  }, [listings, search]);

  const orderedListings = useMemo(
    () => [
      ...filteredListings,
      ...listings.filter(
        (item) => !filteredListings.some((f) => f.id === item.id),
      ),
    ],
    [filteredListings, listings],
  );
  return (
    <div>
      <section
        id="projects"
        className="w-full bg-[url('/bg.webp')] bg-cover bg-center bg-no-repeat py-20 px-4 md:px-10"
      >
        <div className="text-center max-w-3xl mx-auto">
          {/* TOP SMALL TAG */}
          <p className="text-[#c9a14a] tracking-[3px] text-xs md:text-sm text font-bold font-lg mb-3">
            DISCOVER PREMIUM LIVING
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-[#1E3D34] leading-tight flex items-center justify-center gap-3">
            Properties in Bangalore
          </h2>
          {/* GOLD DIVIDER */}
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-[1px] bg-[#c9a14a]"></span>
            <span className="text-[#c9a14a] text-lg">✦</span>
            <span className="w-10 h-[1px] bg-[#c9a14a]"></span>
          </div>
          {/* SUBTEXT */}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Thousands of luxury home enthusiasts just like you visit our
            website.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {orderedListings.map((item) => {
              const isMatched = filteredListings.some((f) => f.id === item.id);

              return (
                <Link key={item.id} href={item.link || "#"}>
                  <div
                    className={`bg-white rounded-2xl overflow-hidden transition cursor-pointer ${
                      search && isMatched
                        ? "shadow-[0_0_20px_rgba(185,119,21,0.45)] border border-[#B97715]"
                        : "shadow-sm hover:shadow-md"
                    }`}
                  >
                    <div className="relative h-56">
                      <Image
                        src={item.img || item.image || "/house.webp"}
                        alt={item.title}
                        fill
                        unoptimized
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />

                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-[#B97715] text-white text-xs px-3 py-1 rounded-full font-semibold">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-gray-800">
                        {item.title}
                      </h3>

                      <div className="flex items-center text-black text-sm mt-1 gap-1">
                        <MapPin className="text-[#A46A12]" size={17} />
                        {item.location}
                      </div>

                      <div className="flex items-center gap-6 mt-2 text-sm text-black">
                        {item.category?.toLowerCase() !== "plots" && (
                          <>
                            <div className="flex items-center gap-2">
                              <BedDouble className="text-[#A46A12]" size={18} />
                              <span className="font-medium">
                                {item.bhk} BHK
                              </span>
                            </div>

                            <div className="w-[1px] h-4 bg-gray-300"></div>
                          </>
                        )}

                        <div className="flex items-center gap-2">
                          <Ruler className="text-[#A46A12]" size={18} />
                          <span className="font-medium">
                            {item.area} Sq.ft.
                          </span>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[#B97715] font-bold text-lg">
                          ₹{item.price}
                        </p>

                        <div className="flex gap-2">
                          <button className="border border-[#B97715] text-[#B97715] px-3 py-1.5 rounded-lg text-sm hover:bg-[#B97715] hover:text-white transition">
                            Details
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              e.preventDefault();
                              setOpen(true);
                            }}
                            className="bg-[#A46A12] text-white px-3 py-1.5 rounded-lg text-sm hover:bg-yellow-600 transition"
                          >
                            Send Enquiry
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      <EnquiryForm open={open} setOpen={setOpen} />
    </div>
  );
}
