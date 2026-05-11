"use client";

import { useRef, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";

const EnquiryForm = dynamic(() => import("./EnquiryForm"), {
  ssr: false,
});

export default function Navbar({ variant = "home" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobileMenuNavbarHidden, setIsMobileMenuNavbarHidden] =
    useState(false);

  const lastMobileMenuScrollY = useRef(0);
  const router = useRouter();

  const isHome = variant === "home";

  // ================= FIX: INSTANT NAVIGATION =================
  const handleNavigation = useCallback(
    (href) => {
      setIsOpen(false); // close first
      setIsMobileMenuNavbarHidden(false);

      requestAnimationFrame(() => {
        router.push(href);
      });
    },
    [router],
  );

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuNavbarHidden(false);
    lastMobileMenuScrollY.current = 0;
    setIsOpen((prev) => !prev);
  }, []);

  const handleMobileMenuScroll = useCallback((event) => {
    const currentScrollY = event.currentTarget.scrollTop;

    if (currentScrollY <= 10) {
      setIsMobileMenuNavbarHidden(false);
    } else if (currentScrollY > lastMobileMenuScrollY.current + 6) {
      setIsMobileMenuNavbarHidden(true);
    } else if (currentScrollY < lastMobileMenuScrollY.current - 6) {
      setIsMobileMenuNavbarHidden(false);
    }

    lastMobileMenuScrollY.current = currentScrollY;
  }, []);

  const navbarPositionClass = isHome
    ? "absolute top-0 left-0 px-4 md:px-10 pt-4"
    : "relative lg:absolute lg:top-0 lg:left-0 px-3 lg:px-7 bg-[#F7F3EC] lg:bg-transparent";

  const navbarTransformClass =
    isOpen && isMobileMenuNavbarHidden ? "-translate-y-full" : "translate-y-0";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <div
        className={`top-0 left-0 w-full z-[100] transition-transform duration-300 ease-out ${navbarTransformClass} ${navbarPositionClass}`}
      >
        <div
          className={`flex items-center justify-between ${
            isHome ? "h-[78px]" : "lg:grid lg:grid-cols-[1fr_auto_1fr]"
          }`}
        >
          {/* LOGO */}
          <Link href="/">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={110}
              height={60}
              priority
              className={`object-contain ${
                isHome ? " w-[90px] md:w-[110px]" : "w-[85px] lg:w-[100px]"
              }`}
            />
          </Link>

          {/* ================= DESKTOP MENU ================= */}
          {isHome ? (
            <>
              <div className="hidden md:flex items-center gap-10 text-[17px] font-medium text-[#D8A33B]">
                <Link href="/" prefetch>
                  Home
                </Link>
                <Link href="/aboutmain" prefetch>
                  About Us
                </Link>
                <Link href="/projects" prefetch>
                  Projects
                </Link>
                <Link href="/emicalculator" prefetch>
                  EMI Calculator
                </Link>
              </div>

              <div className="hidden md:block">
                <a
                  href="https://wa.me/916366699888?text=Hi%2C%20I%27m%20looking%20for%20a%20flat."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex items-center gap-2 border-2 border-[#D8A33B] font-bold text-[#f0b53d] px-5 py-2.5 rounded-xl bg-white/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300">
                    <FaWhatsapp size={20} />
                    Connect with us
                  </button>
                </a>
              </div>
            </>
          ) : (
            <div className="hidden lg:flex items-center bg-[#9f773c] backdrop-blur-md rounded-full px-3 py-1 shadow-lg">
              <div className="hidden lg:flex w-10 h-10 items-center justify-center bg-[#F8EDD8] rounded-full">
                <div className="w-2.5 h-2.5 bg-[#704928] rounded-full"></div>
              </div>

              <div className="hidden lg:flex items-center gap-6 text-white text-sm font-medium px-4">
                <a href="#hero">Home</a>
                <a href="#amenities">Amenities</a>
                <a href="#gallery">Gallery</a>
                <a href="#location">Location</a>
                <a href="#contact">Contact</a>
              </div>

              <a
                href="tel:+917026003069"
                className="hidden lg:flex bg-[#F8EDD8] text-black px-4 py-1.5 rounded-full text-sm font-medium"
              >
                7026003069
              </a>
            </div>
          )}

          {/* MOBILE BUTTON */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden cursor-pointer lg:hidden z-[101] flex items-center bg-[#9f773c] rounded-full px-4 py-1 text-white text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {isOpen && (
        <div
          onScroll={handleMobileMenuScroll}
          className="fixed inset-0 z-[90] bg-[#F7F3EC]/95 backdrop-blur-xl animate-fadeIn"
        >
          <div className="flex items-center justify-center h-full w-full px-6">
            <div className="flex flex-col items-center gap-8 text-[#1E3D34] text-2xl md:text-3xl font-semibold">
              {/* MOBILE LINKS FIXED */}
              {isHome ? (
                <>
                  <button onClick={() => handleNavigation("/")}>Home</button>
                  <button onClick={() => handleNavigation("/aboutmain")}>
                    About Us
                  </button>
                  <button onClick={() => handleNavigation("/projects")}>
                    Projects
                  </button>
                  <button onClick={() => handleNavigation("/emicalculator")}>
                    EMI Calculator
                  </button>
                </>
              ) : (
                <>
                  <a href="#hero" onClick={() => setIsOpen(false)}>
                    Home
                  </a>
                  <a href="#amenities" onClick={() => setIsOpen(false)}>
                    Amenities
                  </a>
                  <a href="#gallery" onClick={() => setIsOpen(false)}>
                    Gallery
                  </a>
                  <a href="#location" onClick={() => setIsOpen(false)}>
                    Location
                  </a>
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ENQUIRY FORM */}
      {!isHome && <EnquiryForm open={open} setOpen={setOpen} variant="popup" />}
    </>
  );
}
