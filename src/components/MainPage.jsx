"use client";
import { Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, BedDouble, Ruler, Building2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import Navbar from "./CommonNavbar";
import EnquiryForm from "./EnquiryForm";

export default function MainPage() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchListings = async () => {
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("id", { ascending: false });

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
    <>
      <section className="relative w-full h-[85vh] md:h-[99vh] flex items-center justify-center overflow-visible">
        {/* Top smooth overlay */}
        <div className="absolute top-0 left-0 w-full h-36 md:h-44 bg-gradient-to-b from-black/75 via-black/35 to-transparent z-20" />

        <Navbar variant="home" />

        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/hd (1).webp"
            alt="hero"
            fill
            priority
            fetchPriority="high"
            quality={80}
            sizes="100vw"
            className="w-full h-full object-cover object-[64%_center]"
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

          {/* Soft vignette */}
          {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_38%,rgba(255,200,120,0.16),transparent_34%),radial-gradient(circle_at_18%_45%,rgba(0,0,0,0.55),transparent_48%)]" /> */}

          {/* Bottom depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-4 md:px-0 pt-16 md:pt-10 lg:pt-28">
          <div className="max-w-3xl text-left [filter:drop-shadow(0_0_8px_rgba(0,0,0,0.9))_drop-shadow(0_0_18px_rgba(0,0,0,0.75))_drop-shadow(0_0_30px_rgba(0,0,0,0.6))]">
            {/* Top text */}
            {/* <p className="text-[#D8A33B] text-lg md:text-2xl font-medium tracking-wide ">
              Find. Choose. Own.
            </p> */}

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

              {/* Homes */}
              {/* <span className="mt-2 block text-[42px] sm:text-[60px] md:text-[62px] font-serif font-semibold relative whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-[#fff6cf] via-[#e0b347] to-[#9a6815] ">
                Homes in <br className="block md:hidden" />
                Bangalore
              </span> */}
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
                            src={item.image || item.img || "/house.jpeg"}
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

      <section
        id="projects"
        className="w-full bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat py-16 px-4 md:px-10"
      >
        <div className="text-center max-w-3xl mx-auto">
          {/* TOP SMALL TAG */}
          <p className="text-[#c9a14a] tracking-[3px] text-xs md:text-sm text font-bold font-lg mb-3">
            DISCOVER PREMIUM LIVING
          </p>

          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight flex items-center justify-center gap-3">
            Properties in Bangalore
            <Building2 className="w-7 h-7 text-[#ad8c43]" />
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
                        src={item.img || item.image || "/house.jpeg"}
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

      {/* <section className="w-full bg-[#f5f5f5] py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
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

          <div className="grid grid-cols-2 gap-8 relative">
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
      </section> */}
      <section className="w-full bg-[#f5f5f5] py-16 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-xs tracking-[3px] text-[#c9a14a] font-semibold mb-3">
              ABOUT VINRA GROUP
            </p>

            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-gray-900 leading-tight">
              Crafting Turnkey Real Estate Excellence
            </h2>

            <p className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
              With over 15+ years of experience, Vinra Group has grown into one
              of Bangalore’s most trusted real estate brands. From construction
              to interiors, we deliver complete property solutions tailored for
              modern living.
            </p>

            <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
              Our focus on quality, innovation, and customer satisfaction has
              made us a preferred choice for homebuyers and investors alike.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "3,000+", label: "Projects Completed" },
              { value: "1M+", label: "SqFt Built" },
              { value: "100+", label: "Ongoing Projects" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-[#c9a14a]">
                  {item.value}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 
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
      </section> */}
      <section className="w-full bg-[#e8ded8] py-14 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-6 text-gray-700">
          <p className="text-sm md:text-base leading-relaxed">
            Vinra Group offers end-to-end real estate solutions, from property
            investment to construction and interior design. We don’t just build
            structures — we create spaces that inspire and last.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            With a passion for quality and innovation, we continue to redefine
            modern living through thoughtfully designed residential and
            commercial projects.
          </p>

          <p className="text-sm md:text-base leading-relaxed">
            Our expert team ensures seamless execution and world-class standards
            in every project we deliver.
          </p>
        </div>
      </section>
      <footer className="w-full bg-[#1a1a1a] text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div>
            <h2 className="text-xl font-semibold text-[#c9a14a] mb-3">
              Vinra Group
            </h2>
            <p className="text-sm text-gray-400">
              Building trust through quality real estate and modern living
              solutions across Bangalore.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Property Investment</li>
              <li>Construction</li>
              <li>Interior Design</li>
              <li>Property Management</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Contact</h3>
            <p className="text-sm text-gray-400">Bangalore, India</p>
            <p className="text-sm text-gray-400 mt-1">+91 7026003069</p>
            <p className="text-sm text-gray-400 mt-1">info@vinragroup.com</p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Vinra Group. All rights reserved.
        </div>
      </footer>
      <EnquiryForm open={open} setOpen={setOpen} />
    </>
  );
}
