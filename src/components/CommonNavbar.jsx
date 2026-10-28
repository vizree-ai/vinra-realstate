"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Home,
  Building2,
  ImageIcon,
  MapPin,
  Mail,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import EnquiryForm from "./EnquiryForm";

const projectNavItems = [
  { id: "hero", label: "Home", href: "#hero", icon: Home },
  { id: "amenities", label: "Amenities", href: "#amenities", icon: Building2 },
  { id: "gallery", label: "Gallery", href: "#gallery", icon: ImageIcon },
  { id: "location", label: "Location", href: "#location", icon: MapPin },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar({ variant = "home" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const isHome = variant === "home";

  // Track active section and scroll state for project pages
  useEffect(() => {
    if (isHome) return;

    const sectionIds = ["hero", "amenities", "gallery", "location", "contact"];
    let ticking = false;

    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          ticking = false;
          return;
        }
      }
      setActiveSection("hero");
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollState();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Smooth scroll handler for anchor links
  const handleScrollTo = useCallback((e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
      }
      setIsOpen(false);
    }
  }, []);

  const handleNavigation = useCallback(
    (href) => {
      setIsOpen(false);
      requestAnimationFrame(() => {
        router.push(href);
      });
    },
    [router],
  );

  const handleMobileMenuToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      {/* ================= PROJECT NAVBAR (KBR & BMR) ================= */}
      {!isHome ? (
        <header
          className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled
              ? "bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#e5dcce] shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
              : ""
            }`}
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex items-center justify-between gap-3 sm:gap-6">
            {/* BRAND LOGO & FIRST DIVIDER */}
            <div className="flex items-center gap-4 sm:gap-6 shrink-0">
              <Link
                href="/"
                className="flex items-center hover:opacity-95 transition-opacity"
              >
                <Image
                  src="/logo.webp"
                  alt="Vinra - Complete Living Solutions"
                  width={110}
                  height={60}
                  priority
                  className="w-[85px] sm:w-[95px] md:w-[110px] h-auto object-contain"
                />
              </Link>

              {/* Vertical divider between Logo and Center Capsule */}
              <div className="hidden lg:block h-8 w-[1px] bg-stone-300/80" />
            </div>

            {/* DESKTOP CENTER NAVIGATION CAPSULE */}
            <nav
              aria-label="Project Navigation"
              className="hidden lg:flex items-center bg-white rounded-full p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-stone-200/60 gap-1 xl:gap-2"
            >
              {projectNavItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`flex items-center gap-2 px-4 xl:px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 select-none ${isActive
                        ? "bg-gradient-to-b from-[#a47437] to-[#8d5e26] border-2 border-[#dfbe72] text-white shadow-[0_2px_8px_rgba(163,118,55,0.3)] font-semibold"
                        : "text-[#3c2213] hover:text-[#9e6f33] hover:bg-stone-50"
                      }`}
                  >
                    <Icon
                      size={16}
                      className={`stroke-[2.2] ${isActive ? "text-white" : "text-[#3c2213]"
                        }`}
                    />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* SECOND DIVIDER & RIGHT CALL BUTTON */}
            <div className="hidden lg:flex items-center gap-4 sm:gap-6 shrink-0">
              {/* Vertical divider between Capsule and Phone Button */}
              <div className="h-8 w-[1px] bg-stone-300/80" />

              {/* Dark green phone button with gold metallic border */}
              <a
                href="tel:+916366699888"
                className="inline-flex items-center gap-2.5 bg-[#102a22] hover:bg-[#0b1f19] text-white px-5 xl:px-6 py-2.5 rounded-full font-bold text-sm tracking-wide border-2 border-[#dfbe72] shadow-[0_3px_12px_rgba(16,42,34,0.25)] transition-all hover:scale-105 active:scale-95"
                title="Direct Call 6366699888"
              >
                <Phone
                  size={15}
                  className="text-[#dfbe72] fill-[#dfbe72] stroke-[#dfbe72]"
                />
                <span>6366699888</span>
              </a>
            </div>

            {/* MOBILE QUICK CALL & MENU TRIGGER */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+916366699888"
                className="flex items-center gap-1.5 bg-[#102a22] text-white px-3.5 py-1.5 rounded-full text-xs font-bold border-[1.5px] border-[#dfbe72] shadow-sm active:scale-95 transition"
                title="Direct Call 6366699888"
              >
                <Phone
                  size={12}
                  className="text-[#dfbe72] fill-[#dfbe72] stroke-[#dfbe72]"
                />
                <span>6366699888</span>
              </a>

              <button
                suppressHydrationWarning
                onClick={handleMobileMenuToggle}
                aria-label="Toggle navigation menu"
                className="cursor-pointer flex items-center justify-center w-9 h-9 rounded-full bg-white border border-stone-200/80 text-[#102a22] shadow-sm active:scale-95 transition hover:bg-stone-50"
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </header>
      ) : (
        /* ================= HOME NAVBAR ================= */
        <div className="absolute top-0 left-0 w-full px-4 md:px-10 pt-4 bg-transparent z-[100]">
          <div className="flex items-center justify-between h-[78px]">
            {/* LOGO */}
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="Logo"
                width={110}
                height={60}
                priority
                className="w-[90px] md:w-[110px] object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
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
                <button
                  suppressHydrationWarning
                  className="flex items-center gap-2 border-2 border-[#D8A33B] font-bold text-[#f0b53d] px-5 py-2.5 rounded-xl bg-white/30 backdrop-blur-md hover:bg-white/20 transition-all duration-300"
                >
                  <FaWhatsapp size={20} />
                  Connect with us
                </button>
              </a>
            </div>

            {/* MOBILE MENU TOGGLE */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                suppressHydrationWarning
                onClick={handleMobileMenuToggle}
                aria-label="Toggle navigation menu"
                className="cursor-pointer flex items-center justify-center bg-[#0c241c]/90 border border-[#d5ad65]/50 rounded-full px-3.5 py-1.5 text-[#d5ad65] text-xl backdrop-blur-md shadow-lg active:scale-95 transition"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MOBILE MODAL / OVERLAY ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[120] bg-black/40 backdrop-blur-md flex flex-col justify-start pt-16 sm:pt-20 px-4 pb-6 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-[#FAF7F2] rounded-3xl p-5 sm:p-6 shadow-2xl border border-stone-200/80 max-w-sm mx-auto w-full flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <Image
                src="/logo.webp"
                alt="Vinra Logo"
                width={90}
                height={50}
                className="h-auto w-[85px] object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-700 hover:bg-stone-200 transition"
              >
                <X size={18} />
              </button>
            </div>

            {/* LINKS */}
            <div className="flex flex-col gap-1.5 py-2">
              {isHome ? (
                <>
                  <button
                    suppressHydrationWarning
                    onClick={() => handleNavigation("/")}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-left font-semibold text-[#1E3D34] hover:bg-[#a37637]/10 transition"
                  >
                    <Home size={18} className="text-[#a37637]" />
                    <span>Home</span>
                  </button>
                  <button
                    suppressHydrationWarning
                    onClick={() => handleNavigation("/aboutmain")}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-left font-semibold text-[#1E3D34] hover:bg-[#a37637]/10 transition"
                  >
                    <span>About Us</span>
                  </button>
                  <button
                    suppressHydrationWarning
                    onClick={() => handleNavigation("/projects")}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-left font-semibold text-[#1E3D34] hover:bg-[#a37637]/10 transition"
                  >
                    <span>Projects</span>
                  </button>
                  <button
                    suppressHydrationWarning
                    onClick={() => handleNavigation("/emicalculator")}
                    className="flex items-center gap-3 px-4 py-2.5 rounded-2xl text-left font-semibold text-[#1E3D34] hover:bg-[#a37637]/10 transition"
                  >
                    <span>EMI Calculator</span>
                  </button>
                </>
              ) : (
                projectNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl font-medium text-sm transition ${isActive
                          ? "bg-gradient-to-b from-[#a47437] to-[#8d5e26] border-2 border-[#dfbe72] text-white font-semibold shadow-sm"
                          : "text-[#3c2213] hover:bg-stone-100"
                        }`}
                    >
                      <Icon
                        size={18}
                        className={isActive ? "text-white" : "text-[#3c2213]"}
                      />
                      <span>{item.label}</span>
                    </a>
                  );
                })
              )}
            </div>

            {/* CALL BUTTON ON MOBILE */}
            <a
              href="tel:+916366699888"
              className="mt-2 flex items-center justify-center gap-2.5 bg-[#102a22] hover:bg-[#0b1f19] text-white py-3 rounded-full font-bold text-sm tracking-wide border-2 border-[#dfbe72] shadow-md transition active:scale-95"
            >
              <Phone
                size={16}
                className="text-[#dfbe72] fill-[#dfbe72] stroke-[#dfbe72]"
              />
              <span>Call 6366699888</span>
            </a>
          </div>
        </div>
      )}

      {/* POPUP ENQUIRY FORM */}
      {!isHome && (
        <EnquiryForm
          open={open}
          setOpen={setOpen}
          variant="popup"
          tableName={variant === "project" ? "bmr_enquiries" : "kbr-enquiries"}
        />
      )}
    </>
  );
}
