"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/CommonNavbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  const isProjectPage =
    pathname.startsWith("/KBR_prime") || pathname.startsWith("/BMR_velverde");

  // ❌ ONLY block home navbar on KBR page
  if (isProjectPage) {
    return <Navbar variant="project" />;
  }

  // ✅ Show home navbar everywhere else
  return <Navbar variant="home" />;
}
