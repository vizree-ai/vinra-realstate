"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { MapPin, BedDouble, Ruler } from "lucide-react";

export default function Hero1() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const listings = [
    {
      id: 1,
      img: "/1.jpeg",
      title: "HBR Layout",
      location: "Bangalore",
      link: "/hero",
    },
    { id: 2, img: "/banner.jpeg", title: "Elegant studio flat" },
    { id: 3, img: "/house.jpeg", title: "Elegant studio flat" },
    { id: 4, img: "/1.jpeg", title: "Elegant studio flat" },
    { id: 5, img: "/house.jpeg", title: "Elegant studio flat" },
    { id: 6, img: "/banner.jpeg", title: "Elegant studio flat" },
    { id: 7, img: "/house.jpeg", title: "Elegant studio flat" },
    { id: 8, img: "/banner.jpeg", title: "Elegant studio flat" },
    { id: 9, img: "/house.jpeg", title: "Elegant studio flat" },
    { id: 10, img: "/1.jpeg", title: "Elegant studio flat" },
    { id: 11, img: "/house.jpeg", title: "Elegant studio flat" },
  ];

  const filteredListings = listings.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  const remainingListings = listings.filter(
    (item) => !item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center">
        {/* NAVBAR */}
        <div className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-4">
          <div className="flex items-center justify-between text-white">
            {/* LEFT: Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={110}
                height={60}
                className="object-contain w-[90px] md:w-[110px]"
              />
            </div>

            {/* CENTER: Menu */}
            <div className="text-[#B97715] hidden md:flex items-center gap-8 text-sm font-medium">
              <a href="#" className="hover:text-orange-400 transition">
                Home
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                About Us
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                Projects ▾
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                EMI Calculator
              </a>
              <a href="#" className="hover:text-orange-400 transition">
                Blogs
              </a>
            </div>

            {/* RIGHT: Contact Button */}
            <div className="mt-[-20] hidden md:block">
              <button className="border border-orange-400 text-[#B97715] px-5 py-2 rounded-lg hover:bg-[#B97715] hover:text-white transition">
                Contact Us
              </button>
            </div>

            {/* MOBILE MENU ICON */}
            <div className="mt-[-12] md:hidden text-3xl cursor-pointer">☰</div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/banner.jpeg" // replace with your image
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
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
                placeholder="Search by property, pincode, place"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 px-4 py-3 outline-none text-sm min-w-0"
              />
              {/* Search Button - Icon only on mobile to keep it on one line */}
              <button className="bg-[#B97715] hover:bg-orange-600 text-white p-4 mr-1 my-1 rounded-full flex items-center justify-center shrink-0 transition-colors">
                <Search size={18} />
              </button>
            </div>

            {search && (
              <div className="absolute top-full mt-2 w-full max-w-md bg-white rounded-2xl shadow-lg border z-50">
                {filteredListings.length > 0 ? (
                  filteredListings.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link || "#"}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-200 cursor-pointer hover:rounded-2xl"
                    >
                      <img
                        src={item.img}
                        className="w-12 h-12 rounded-md object-cover"
                      />
                      <div className="text-left">
                        <p className="text-sm font-semibold">{item.title}</p>
                        <p className="text-xs text-gray-500">
                          {item.location || "Bangalore"}
                        </p>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="p-3 text-sm text-gray-500">No results found</p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <div
        className="fixed bottom-28 right-0 flex flex-row-reverse items-center gap-1 p-3 rounded-md w-fit 
                     hover:scale-105 transition-all duration-300 z-50"
      >
        {/* WHATSAPP */}
        <a
          href="https://wa.me/917026003069?text=Hi%20I%20am%20interested%20in%20your%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 flex items-center justify-center rounded-full 
                 bg-[#25D366] shadow-md"
        >
          <FaWhatsapp className="text-white text-4xl" />
        </a>

        {/* BUTTON */}
        <button
          className="bg-gray-200 text-black px-2.5 py-1 rounded-md 
                 text-sm font-medium shadow-sm"
        >
          Get Brochure
        </button>
      </div>

      <section className="w-full bg-gray-100 py-12 px-4 md:px-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Properties in Banglore 🏡
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Thousands of luxury home enthusiasts just like you visit our
            website.
          </p>
        </div>

        {/* Cards */}

        <div className="max-w-7xl mx-auto space-y-6">
          {/* 🔍 SEARCH RESULTS (single row) */}
          {search && filteredListings.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((item) => {
                const card = (
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                    <div className="relative">
                      <img
                        src={item.img}
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-[#B97715] text-white text-xs px-3 py-1 rounded-full font-semibold">
                          Ongoing
                        </span>
                        <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                          Plots
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-semibold text-lg text-gray-800">
                        {item.title}
                      </h3>

                      <div className="flex items-center text-black text-sm mt-1 gap-1">
                        <MapPin className="text-[#A46A12]" size={17} />
                        HSR Layout, Bangalore
                      </div>

                      <div className="flex items-center gap-6 mt-2 text-sm text-black">
                        <div className="flex items-center gap-2">
                          <BedDouble className="text-[#A46A12]" size={18} />
                          <span className="font-medium">3 BHK</span>
                        </div>

                        <div className="w-[1px] h-4 bg-gray-300"></div>

                        <div className="flex items-center gap-2">
                          <Ruler className="text-[#A46A12]" size={18} />
                          <span className="font-medium">1280 Sq.ft.</span>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[#B97715] font-bold text-lg">
                          ₹70 Lakh
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
                );

                return item.title === "HBR Layout" ? (
                  <Link key={item.id} href="/hero">
                    {card}
                  </Link>
                ) : (
                  <div key={item.id}>{card}</div>
                );
              })}
            </div>
          )}

          {/* 🏠 ALL OTHER CARDS BELOW */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {(search ? remainingListings : listings).map((item) => {
              const card = (
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer">
                  {/* SAME CARD CODE (no change) */}
                  <div className="relative">
                    <img src={item.img} className="w-full h-56 object-cover" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-[#B97715] text-white text-xs px-3 py-1 rounded-full font-semibold">
                        Ongoing
                      </span>
                      <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full">
                        Plots
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </h3>

                    <div className="flex items-center text-black text-sm mt-1 gap-1">
                      <MapPin className="text-[#A46A12]" size={17} />
                      HSR Layout, Bangalore
                    </div>

                    <div className="flex items-center gap-6 mt-2 text-sm text-black">
                      <div className="flex items-center gap-2">
                        <BedDouble className="text-[#A46A12]" size={18} />
                        <span className="font-medium">3 BHK</span>
                      </div>

                      <div className="w-[1px] h-4 bg-gray-300"></div>

                      <div className="flex items-center gap-2">
                        <Ruler className="text-[#A46A12]" size={18} />
                        <span className="font-medium">1280 Sq.ft.</span>
                      </div>
                    </div>

                    <hr className="my-4" />

                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[#B97715] font-bold text-lg">
                        ₹70 Lakh
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
              );

              return item.title === "HBR Layout" ? (
                <Link key={item.id} href="/hero">
                  {card}
                </Link>
              ) : (
                <div key={item.id}>{card}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f5f5] py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm tracking-widest text-yellow-600 font-semibold mb-3">
              ABOUT VINRA GROUP
            </p>

            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
              Crafting Turnkey Real Estate Engineering
            </h2>

            <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed">
              With over 15+ years of industry experience, Vinra Group stands
              tall as one of the most reputable builders in Bangalore. What
              began as a small construction firm has now evolved into a leading
              force in real estate, construction, and interior design across
              Karnataka.
            </p>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              We are proud to be recognized among the trusted builders in
              Bangalore, known for our commitment to quality, customer
              satisfaction, and innovation.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-8 relative">
            {/* Divider */}
            <div className="hidden lg:block absolute left-0 top-0 h-full w-[1px] bg-yellow-600/40"></div>

            <div className="pl-0 lg:pl-8">
              <h3 className="text-4xl font-semibold text-gray-800">15+</h3>
              <p className="text-sm text-yellow-700 mt-1">
                Years of Excellence
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-gray-800">3,000+</h3>
              <p className="text-sm text-yellow-700 mt-1">Projects Completed</p>
            </div>

            <div className="pl-0 lg:pl-8">
              <h3 className="text-4xl font-semibold text-gray-800">1M+</h3>
              <p className="text-sm text-yellow-700 mt-1">SqFt Transacted</p>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-gray-800">100+</h3>
              <p className="text-sm text-yellow-700 mt-1">Ongoing Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM TEXT SECTION */}
      <section className="w-full bg-[#e8ded8] py-10 px-4 md:px-12">
        <div className="max-w-7xl mx-auto space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
          <p>
            Vinra Group is a full-service real estate development company
            offering a wide spectrum of services from property investment and
            building construction to premium interior design and property
            management. As one of the best construction firms in Bangalore, we
            deliver turnkey solutions for residential, commercial, and
            industrial projects. We don’t just build structures, we build trust,
            relationships, and lasting value.
          </p>

          <p>
            Our journey is rooted in a passion for building better spaces,
            whether it’s homes, offices, commercial spaces, or lifestyle
            communities. Today, Vinra Group continues to redefine excellence as
            one of the best real estate developers in Bangalore, with a growing
            presence outside Karnataka as well.
          </p>

          <p>
            Our dynamic team of experts is what sets us apart from other famous
            builders in Bangalore. With architects, engineers, interior
            designers, and project managers under one roof, we ensure seamless
            execution, creative design, and world-class quality in every
            project.
          </p>
        </div>
      </section>
      {open && (
        <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4">
          <div className="bg-[#f5f5f5] w-full max-w-sm rounded-lg shadow-xl relative p-6">
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-xl border border-gray-600 w-7 h-7 flex items-center justify-center rounded"
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 className="text-center text-xl font-semibold text-[#5b3d2e] mb-4">
              Schedule a Callback
            </h2>

            {/* PHONE */}
            <p className="text-center text-2xl font-bold text-[#5b3d2e] mb-6">
              +917026003069
            </p>

            {/* FORM */}
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Name*"
                className="w-full px-4 py-3 rounded-xl border-2 border-[#5b3d2e] bg-transparent outline-none"
              />

              <input
                type="tel"
                placeholder="Phone no*"
                className="w-full px-4 py-3 rounded-xl border-2 border-[#5b3d2e] bg-transparent outline-none"
              />

              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 rounded-xl border-2 border-[#5b3d2e] bg-transparent outline-none"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl text-white font-semibold 
                     bg-gradient-to-r from-[#5b3d2e] to-[#6b4a34]"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
