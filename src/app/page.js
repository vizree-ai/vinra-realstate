import Image from "next/image";
import Configurations from "@/components/Configurations";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Hero1 from "@/components/Hero1";

export default function Home() {
  return (
    <div>
      <Hero1 />
      {/* <Hero />
      <Configurations />
      <Amenities />
      <Gallery /> */}
    </div>
  );
}

////////////////////////////
// "use client";
// import { useState } from "react";
// import { Search } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { FaWhatsapp } from "react-icons/fa";
// import { MapPin, BedDouble, Ruler } from "lucide-react";

// export default function Hero1() {
//   const [search, setSearch] = useState("");
//   const [open, setOpen] = useState(false);

//   const listings = [
//     {
//       id: 1,
//       img: "/1.jpeg",
//       title: "HBR Layout",
//       location: "Bangalore",
//       link: "/hero",
//     },
//     { id: 2, img: "/banner.jpeg", title: "Elegant studio flat" },
//     { id: 3, img: "/house.jpeg", title: "Elegant studio flat" },
//     { id: 4, img: "/1.jpeg", title: "Elegant studio flat" },
//     { id: 5, img: "/house.jpeg", title: "Elegant studio flat" },
//     { id: 6, img: "/banner.jpeg", title: "Elegant studio flat" },
//     { id: 7, img: "/house.jpeg", title: "Elegant studio flat" },
//     { id: 8, img: "/banner.jpeg", title: "Elegant studio flat" },
//     { id: 9, img: "/house.jpeg", title: "Elegant studio flat" },
//     { id: 10, img: "/1.jpeg", title: "Elegant studio flat" },
//     { id: 11, img: "/house.jpeg", title: "Elegant studio flat" },
//   ];

//   const filteredListings = listings.filter((item) =>
//     (item.title + (item.location || ""))
//       .toLowerCase()
//       .includes(search.toLowerCase()),
//   );

//   const remainingListings = listings.filter(
//     (item) =>
//       !(item.title + (item.location || ""))
//         .toLowerCase()
//         .includes(search.toLowerCase()),
//   );

//   return (
//     <>
//       <section className="relative w-full h-[85vh] md:h-[90vh] flex items-center justify-center">
//         {/* NAVBAR */}
//         <div className="absolute top-0 left-0 w-full z-50 px-4 md:px-10 py-4">
//           <div className="flex items-center justify-between text-white">
//             <div className="flex items-center gap-2">
//               <Image
//                 src="/logo.png"
//                 alt="Logo"
//                 width={110}
//                 height={60}
//                 className="object-contain w-[90px] md:w-[110px]"
//               />
//             </div>

//             <div className="hidden md:flex items-center gap-8 text-sm font-medium">
//               <a href="#" className="hover:text-orange-400">
//                 Home
//               </a>
//               <a href="#" className="hover:text-orange-400">
//                 About Us
//               </a>
//               <a href="#" className="hover:text-orange-400">
//                 Projects ▾
//               </a>
//               <a href="#" className="hover:text-orange-400">
//                 EMI Calculator
//               </a>
//               <a href="#" className="hover:text-orange-400">
//                 Blogs
//               </a>
//             </div>

//             <div className="hidden md:block">
//               <button className="border border-orange-400 text-orange-400 px-5 py-2 rounded-lg hover:bg-[#B97715] hover:text-white">
//                 Contact Us
//               </button>
//             </div>

//             <div className="md:hidden text-3xl">☰</div>
//           </div>
//         </div>

//         {/* BG */}
//         <div className="absolute inset-0">
//           <img src="/banner.jpeg" className="w-full h-full object-cover" />
//           <div className="absolute inset-0 bg-black/40" />
//         </div>

//         {/* CONTENT */}
//         <div className="relative z-10 text-center px-4 w-full max-w-5xl">
//           <h1 className="text-white font-bold text-3xl md:text-6xl">
//             Search Luxury Homes
//           </h1>

//           <p className="text-white/90 mt-3">
//             Thousands of luxury home enthusiasts just like you visit our
//             website.
//           </p>

//           {/* SEARCH */}
//           <div className="mt-6 w-full flex justify-center px-2 relative">
//             <div className="w-full max-w-md bg-white rounded-full shadow-lg flex items-center border">
//               <input
//                 type="text"
//                 placeholder="Search by property, pincode, place"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="flex-1 px-4 py-3 outline-none text-sm"
//               />
//               <button className="bg-[#B97715] text-white p-4 rounded-full m-1">
//                 <Search size={18} />
//               </button>
//             </div>

//             {/* 🔥 DROPDOWN */}
//             {search && (
//               <div className="absolute top-full mt-2 w-full max-w-md bg-white rounded-xl shadow-lg border z-50">
//                 {filteredListings.length > 0 ? (
//                   filteredListings.map((item) => (
//                     <Link
//                       key={item.id}
//                       href={item.link || "#"}
//                       className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
//                     >
//                       <img
//                         src={item.img}
//                         className="w-12 h-12 rounded-md object-cover"
//                       />
//                       <div className="text-left">
//                         <p className="text-sm font-semibold">{item.title}</p>
//                         <p className="text-xs text-gray-500">
//                           {item.location || "Bangalore"}
//                         </p>
//                       </div>
//                     </Link>
//                   ))
//                 ) : (
//                   <p className="p-3 text-sm text-gray-500">No results found</p>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </section>

//       {/* WHATSAPP */}
//       <div className="fixed bottom-28 right-0 flex items-center gap-1 p-3 z-50">
//         <a
//           href="https://wa.me/917026003069"
//           target="_blank"
//           className="w-13 h-13 flex items-center justify-center rounded-full bg-[#25D366]"
//         >
//           <FaWhatsapp className="text-white text-4xl" />
//         </a>

//         <button className="bg-gray-200 px-2 py-1 rounded text-sm">
//           Get Brochure
//         </button>
//       </div>

//       {/* CARDS */}
//       <section className="w-full bg-gray-100 py-12 px-4 md:px-10">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-5xl font-bold">
//             Properties in Banglore 🏡
//           </h2>
//         </div>

//         <div className="max-w-7xl mx-auto space-y-6">
//           {/* SEARCH RESULT FIRST */}
//           {search && filteredListings.length > 0 && (
//             <div className="grid md:grid-cols-3 gap-6">
//               {filteredListings.map((item) => (
//                 <div key={item.id} className="bg-white p-5 rounded-xl shadow">
//                   {item.title}
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* ALL */}
//           <div className="grid md:grid-cols-3 gap-6">
//             {(search ? remainingListings : listings).map((item) => (
//               <div key={item.id} className="bg-white p-5 rounded-xl shadow">
//                 {item.title}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="w-full bg-[#f5f5f5] py-12 px-4 md:px-12">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
//           {/* LEFT CONTENT */}
//           <div>
//             <p className="text-sm tracking-widest text-yellow-600 font-semibold mb-3">
//               ABOUT VINRA GROUP
//             </p>

//             <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
//               Crafting Turnkey Real Estate Engineering
//             </h2>

//             <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed">
//               With over 15+ years of industry experience, Vinra Group stands
//               tall as one of the most reputable builders in Bangalore. What
//               began as a small construction firm has now evolved into a leading
//               force in real estate, construction, and interior design across
//               Karnataka.
//             </p>

//             <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
//               We are proud to be recognized among the trusted builders in
//               Bangalore, known for our commitment to quality, customer
//               satisfaction, and innovation.
//             </p>
//           </div>

//           {/* RIGHT STATS */}
//           <div className="grid grid-cols-2 gap-8 relative">
//             {/* Divider */}
//             <div className="hidden lg:block absolute left-0 top-0 h-full w-[1px] bg-yellow-600/40"></div>

//             <div className="pl-0 lg:pl-8">
//               <h3 className="text-4xl font-semibold text-gray-800">15+</h3>
//               <p className="text-sm text-yellow-700 mt-1">
//                 Years of Excellence
//               </p>
//             </div>

//             <div>
//               <h3 className="text-4xl font-semibold text-gray-800">3,000+</h3>
//               <p className="text-sm text-yellow-700 mt-1">Projects Completed</p>
//             </div>

//             <div className="pl-0 lg:pl-8">
//               <h3 className="text-4xl font-semibold text-gray-800">1M+</h3>
//               <p className="text-sm text-yellow-700 mt-1">SqFt Transacted</p>
//             </div>

//             <div>
//               <h3 className="text-4xl font-semibold text-gray-800">100+</h3>
//               <p className="text-sm text-yellow-700 mt-1">Ongoing Projects</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* BOTTOM TEXT SECTION */}
//       <section className="w-full bg-[#e8ded8] py-10 px-4 md:px-12">
//         <div className="max-w-7xl mx-auto space-y-6 text-gray-700 text-sm md:text-base leading-relaxed">
//           <p>
//             Vinra Group is a full-service real estate development company
//             offering a wide spectrum of services from property investment and
//             building construction to premium interior design and property
//             management. As one of the best construction firms in Bangalore, we
//             deliver turnkey solutions for residential, commercial, and
//             industrial projects. We don’t just build structures, we build trust,
//             relationships, and lasting value.
//           </p>

//           <p>
//             Our journey is rooted in a passion for building better spaces,
//             whether it’s homes, offices, commercial spaces, or lifestyle
//             communities. Today, Vinra Group continues to redefine excellence as
//             one of the best real estate developers in Bangalore, with a growing
//             presence outside Karnataka as well.
//           </p>

//           <p>
//             Our dynamic team of experts is what sets us apart from other famous
//             builders in Bangalore. With architects, engineers, interior
//             designers, and project managers under one roof, we ensure seamless
//             execution, creative design, and world-class quality in every
//             project.
//           </p>
//         </div>
//       </section>
//       {open && (
//         <div className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4">
//           <div className="bg-[#f5f5f5] w-full max-w-sm rounded-lg shadow-xl relative p-6">
//             {/* CLOSE */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-3 right-3 text-xl border border-gray-600 w-7 h-7 flex items-center justify-center rounded"
//             >
//               ✕
//             </button>

//             {/* TITLE */}
//             <h2 className="text-center text-xl font-semibold text-[#5b3d2e] mb-4">
//               Schedule a Callback
//             </h2>

//             {/* PHONE */}
//             <p className="text-center text-2xl font-bold text-[#5b3d2e] mb-6">
//               +917026003069
//             </p>

//             {/* FORM */}
//             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
//               <input
//                 type="text"
//                 placeholder="Name*"
//                 className="w-full px-4 py-3 rounded-xl border-2 border-[#5b3d2e] bg-transparent outline-none"
//               />

//               <input
//                 type="tel"
//                 placeholder="Phone no*"
//                 className="w-full px-4 py-3 rounded-xl border-2 border-[#5b3d2e] bg-transparent outline-none"
//               />

//               <input
//                 type="email"
//                 placeholder="Email*"
//                 className="w-full px-4 py-3 rounded-xl border-2 border-[#5b3d2e] bg-transparent outline-none"
//               />

//               <button
//                 type="submit"
//                 className="w-full py-3 rounded-xl text-white font-semibold
//                      bg-gradient-to-r from-[#5b3d2e] to-[#6b4a34]"
//               >
//                 SUBMIT
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
