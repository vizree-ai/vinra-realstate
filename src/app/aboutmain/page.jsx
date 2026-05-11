"use client";
import React from "react";
import { Ruler, Building2, Home, Handshake } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
function AboutMain() {
  return (
    <>
      <section
        id="about"
        className="relative w-full overflow-hidden bg-[#f6f1e8] px-4 py-16 md:px-12 md:py-20"
      >
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(90deg,rgba(30,61,52,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(30,61,52,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full border border-[#c9a14a]/35" />
        <div className="absolute -left-20 bottom-12 h-52 w-52 rounded-full border border-[#1E3D34]/20" />

        <div className="relative mx-auto mt-20 max-w-7xl">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <p className=" text-xs font-bold tracking-[3px] text-[#9f773c]">
                ABOUT VINRA GROUP
              </p>

              <h2 className="max-w-3xl font-serif text-3xl font-semibold leading-tight text-gray-950 md:text-5xl">
                Crafting Turnkey Real Estate Excellence
              </h2>

              <div className="my-5 flex items-center gap-3">
                <span className="h-[2px] w-14 bg-[#c9a14a]" />
                <span className="h-2 w-2 rounded-full bg-[#1E3D34]" />
                <span className="h-[2px] w-8 bg-[#c9a14a]" />
              </div>

              <div className="max-w-2xl space-y-4 mt-10 text-sm leading-relaxed text-gray-700 md:text-base">
                <p>
                  With over 15+ years of experience, Vinra Group has grown into
                  one of Bangalore&apos;s most trusted real estate brands. From
                  construction to interiors, we deliver complete property
                  solutions tailored for modern living.
                </p>
                <p>
                  Our focus on quality, innovation, and customer satisfaction
                  has made us a preferred choice for homebuyers and investors
                  alike.
                </p>
              </div>

              <Link
                href="/projects"
                className="mt-6 inline-block rounded-full bg-[#1E3D34] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(30,61,52,0.22)] transition hover:bg-[#163027] hover:shadow-[0_18px_36px_rgba(30,61,52,0.28)]"
              >
                Explore Our Projects
              </Link>
            </div>

            <div className="relative pb-20 md:pb-24">
              <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-[0_24px_55px_rgba(30,61,52,0.22)] md:h-[430px]">
                <Image
                  src="/building.webp"
                  alt="Vinra Group real estate construction"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[65%_top]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3D34]/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
          <div className="relative  z-10 flex justify-center px-4">
            <div className="w-full max-w-6xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { value: "15+", label: "Years Experience", Icon: Building2 },
                  { value: "3,000+", label: "Projects Completed", Icon: Home },
                  { value: "1M+", label: "SqFt Built", Icon: Ruler },
                  { value: "100+", label: "Ongoing Projects", Icon: Handshake },
                ].map(({ value, label, Icon }) => (
                  <div
                    key={label}
                    className="group flex flex-col items-center text-center rounded-2xl border border-white/30 
          bg-white/60 backdrop-blur-xl 
          p-5 md:p-6 lg:p-8 
          shadow-[0_10px_40px_rgba(0,0,0,0.08)] 
          transition duration-300 
          hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                  >
                    <Icon className="mb-3 h-6 w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-[#c4934a]" />
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E3D34]">
                      {value}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm font-semibold text-[#9f773c] tracking-wide">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mt-20 mb-10">
          <h2 className="text-2xl md:text-4xl font-serif font-semibold text-[#1E3D34]">
            Built on Trust, Designed for Life
          </h2>

          <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
            From planning to possession, we deliver complete real estate
            solutions focused on quality, durability, and seamless execution.
          </p>
        </div>

        <div className=" grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Complete Solutions",
              text: "Vinra Group offers end-to-end real estate solutions, from property investment to construction and interior design.",
              Icon: Building2,
            },
            {
              title: "Spaces That Last",
              text: "We do not just build structures. We create spaces that inspire, perform, and stay valuable for years.",
              Icon: Home,
            },
            {
              title: "Seamless Execution",
              text: "Our expert team ensures smooth delivery and world-class standards in every project we take forward.",
              Icon: Handshake,
            },
          ].map(({ title, text, Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#e4d6bc] bg-white/80 p-6 shadow-[0_14px_34px_rgba(30,61,52,0.08)] backdrop-blur-md transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(30,61,52,0.12)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3D34] text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-950">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-700">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutMain;
