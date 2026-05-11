import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.vinragroup.com",
  ),
  title: {
    default: "Vinra Estate | Properties in Bangalore",
    template: "%s | Vinra Estate",
  },
  description:
    "Explore affordable homes, apartments, plots, and real estate projects in Bangalore with Vinra Estate.",
  keywords: [
    "Vinra Estate",
    "properties in Bangalore",
    "homes in Bangalore",
    "Bangalore real estate",
    "apartments in Bangalore",
    "Hoskote apartments",
  ],
  openGraph: {
    title: "Vinra Estate | Properties in Bangalore",
    description:
      "Explore affordable homes, apartments, plots, and real estate projects in Bangalore with Vinra Estate.",
    siteName: "Vinra Estate",
    images: [
      {
        url: "/hd (1).webp",
        width: 1200,
        height: 630,
        alt: "Vinra Estate properties in Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinra Estate | Properties in Bangalore",
    description:
      "Explore affordable homes, apartments, plots, and real estate projects in Bangalore with Vinra Estate.",
    images: ["/hd (1).webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar`}
      >
        <NavbarWrapper />
        {children}
        <Footer />
      </body>
    </html>
  );
}
