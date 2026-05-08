"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Projects from "./Projects";
import {
  MapPin,
  BedDouble,
  Ruler,
  Building2,
  Home,
  Handshake,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { getProperties } from "@/lib/supabase";

import EnquiryForm from "./EnquiryForm";
import MobileStickyContact from "./MobileStickyContact";
import DeferredSection from "./DeferredSection";

export default function MainPage() {
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
      try {
        const data = await getProperties();
        setListings(data || []);
      } catch (error) {
        console.error(error);
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
    <>
      <section className="relative w-full h-[85vh] md:h-[99vh] flex items-center justify-center overflow-visible">
        {/* Top smooth overlay */}
        <div className="absolute top-0 left-0 w-full h-36 md:h-44 bg-gradient-to-b from-yellow/85 via-yellow/45 to-transparent z-20" />

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/hd (1).webp"
            alt="hero"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-[54%_center]"
          />

          {/* Main cinematic smooth overlay */}
          <div
            className="absolute inset-0 
                     bg-gradient-to-r 
                     from-[#04120f]/95 
                     via-[#0a1d18]/15 
                     via-[20%] 
                     md:via-[60%] 
                     to-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow/55 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-4 md:px-0 pt-16 md:pt-10 lg:pt-28">
          <div className="max-w-3xl text-left [filter:drop-shadow(0_0_8px_rgba(0,0,0,0.9))_drop-shadow(0_0_18px_rgba(0,0,0,0.75))_drop-shadow(0_0_30px_rgba(0,0,0,0.6))]">
            <span className=" text-[26px] sm:text-[40px] md:text-[25px] font-semibold relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-[#fff6cf] via-[#e0b347] to-[#9a6815] ">
              Find. Choose. Own.
            </span>

            {/* Heading */}
            <h1 className="mt-3 leading-[1.12] font-semibold">
              {/* Search Luxury */}
              <span className="mb-1 block text-[30px] sm:text-[48px] md:text-[62px] font-serif text-[#F7F3EC] ">
                Search Affordable
                <br className="block md:hidden" />
                <span className="block mt-2 mb-2 md:mt-0 md:mb-0">
                  Homes in Bangalore
                </span>
              </span>
            </h1>

            {/* Gold line */}
            <div className="w-26 md:w-20 h-[3px] bg-[#D8A33B] rounded-full mt-5"></div>

            {/* Paragraph */}
            <p className="text-white/90 mt-8 text-lg md:text-xl leading-relaxed max-w-xl">
              Thousands of people are already exploring homes{" "}
              <br className="hidden md:block" />
              with us — join them.
            </p>

            <div className="mt-6 w-full flex justify-left">
              <div className="w-full max-w-md bg-white rounded-full text-black shadow-lg flex flex-row items-center overflow-hidden border border-orange-300">
                <div className="relative flex items-center w-full">
                  {/* ICON */}
                  <MapPin
                    size={18}
                    className="absolute left-3 text-gray-500"
                    strokeWidth={1.5} // 👈 makes it thinner (important)
                  />

                  {/* INPUT */}
                  <input
                    type="text"
                    placeholder="Search by location eg. Hoskote"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 pl-10 pr-4 py-3 outline-none text-black text-sm rounded-full"
                  />
                </div>

                <button className="bg-[#B97715] hover:bg-orange-600 text-white p-4 mr-1 my-1 rounded-full flex items-center justify-center shrink-0 transition-colors">
                  <Search size={18} />
                </button>
              </div>

              {search && (
                <div className="absolute top-full mt-2 w-full max-w-md bg-amber-50 text-gray-900 rounded-2xl rounded-2xl shadow-lg border z-50">
                  {filteredListings.length > 0 ? (
                    filteredListings.map((item) => (
                      <Link
                        key={item.id}
                        href={item.link || "/KBR_prime"}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-200 cursor-pointer hover:rounded-2xl"
                      >
                        <div className="relative w-12 h-12 shrink-0 overflow-hidden rounded-md">
                          <Image
                            src={item.image || item.img || "/house.webp"}
                            alt={item.title}
                            fill
                            unoptimized
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <p className="text-sm font-semibold">{item.title}</p>
                          <p className="text-sm text-gray-700">
                            {item.location || "Bangalore"}
                          </p>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="p-3 text-sm text-gray-500">
                      No results found
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <DeferredSection>
        <Projects />
      </DeferredSection>

      <MobileStickyContact setOpen={setOpen} />
      <EnquiryForm open={open} setOpen={setOpen} />
    </>
  );
}
