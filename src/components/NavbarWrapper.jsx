"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/CommonNavbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/kbr-prime") || pathname.startsWith("/KBR_prime")) {
    return <Navbar variant="kbr" />;
  }

  if (pathname.startsWith("/BMR_velverde")) {
    return <Navbar variant="project" />;
  }

  return <Navbar variant="home" />;
}
