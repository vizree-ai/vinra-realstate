"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/CommonNavbar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  const isKBRPage = pathname.startsWith("/KBR_prime"); // adjust if needed

  // ❌ ONLY block home navbar on KBR page
  if (isKBRPage) {
    return <Navbar variant="project" />;
  }

  // ✅ Show home navbar everywhere else
  return <Navbar variant="home" />;
}
