"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { MapPin } from "lucide-react";

export default function Hero1() {
  const listings = [
    {
      id: 1,
      img: "/1.jpeg",
      title: "HBR Layout",
    },
    {
      id: 2,
      img: "/banner.jpeg",
      title: "Elegant studio flat",
    },
    {
      id: 3,
      img: "/house.jpeg",
      title: "Elegant studio flat",
    },
  ];

  return (
    <>
      <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/banner.jpeg" // replace with your image
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="absolute top-1 left-0 w-full px-4 z-50">
          <Image
            src="/logo.png"
            alt="Logo"
            width={110}
            height={60}
            className="object-contain w-[90px] lg:w-[110px]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 w-full max-w-5xl">
          {/* Heading */}
          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-6xl">
            Search Luxury Homes
          </h1>

          {/* Subtitle */}
          <p className="text-white/90 mt-3 text-sm sm:text-base md:text-lg">
            Thousands of luxury home enthusiasts just like you visit our
            website.
          </p>

          {/* Search Bar */}
          <div className="mt-6 w-full flex justify-center px-2">
            <div className="w-full max-w-md bg-white rounded-full shadow-lg flex flex-row items-center overflow-hidden border border-gray-200">
              {/* Dropdown - Hidden or icon-only on very small screens to save space */}

              {/* Input - flex-1 takes up all remaining space */}
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 px-4 py-3 outline-none text-sm min-w-0"
              />

              {/* Search Button - Icon only on mobile to keep it on one line */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white p-4 mr-1 my-1 rounded-full flex items-center justify-center shrink-0 transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 py-12 px-4 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Today’s Luxury Listings
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Thousands of luxury home enthusiasts just like you visit our
            website.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {listings.map((item) => {
            const card = (
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-56 object-cover"
                  />

                  {/* Tags */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Ongoing
                    </span>
                    <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                      For Sale
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm mt-1 gap-1">
                    <MapPin size={14} />
                    Ingraham St, Brooklyn, NY 11237
                  </div>
                  {/* <p className="text-gray-600 text-sm mt-2">
                    Flats | 1,2 & 3 BHK
                    <span className="font-semibold text-gray-800">
                      3
                    </span> Beds{" "}
                    <span className="font-semibold text-gray-800">3</span> Baths{" "}
                    <span className="font-semibold text-gray-800">4,043</span>{" "}
                    Sqft
                  </p> */}
                  Flats | 1,2 & 3 BHK
                  <hr className="my-4" />
                  {/* Bottom */}
                  <div className="flex items-center justify-between">
                    <p className="text-orange-500 font-bold text-lg">
                      ₹70 Lakh
                    </p>

                    <div className="flex items-center gap-3">
                      <button className="border border-orange-500 text-orange-500 px-4 py-1.5 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition">
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );

            // ✅ Only HBR Layout goes to /hero
            return item.title === "HBR Layout" ? (
              <Link key={item.id} href="/hero" className="block">
                {card}
              </Link>
            ) : (
              <div key={item.id}>{card}</div>
            );
          })}
        </div>
      </section>
    </>
  );
}
