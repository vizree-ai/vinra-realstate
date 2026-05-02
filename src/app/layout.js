import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navbar";

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
    default: "Vinra Group | Properties in Bangalore",
    template: "%s | Vinra Group",
  },
  description:
    "Explore affordable homes, apartments, plots, and real estate projects in Bangalore with Vinra Group.",
  keywords: [
    "Vinra Group",
    "properties in Bangalore",
    "homes in Bangalore",
    "Bangalore real estate",
    "apartments in Bangalore",
    "Hoskote apartments",
  ],
  openGraph: {
    title: "Vinra Group | Properties in Bangalore",
    description:
      "Explore affordable homes, apartments, plots, and real estate projects in Bangalore with Vinra Group.",
    siteName: "Vinra Group",
    images: [
      {
        url: "/hd (1).webp",
        width: 1200,
        height: 630,
        alt: "Vinra Group properties in Bangalore",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinra Group | Properties in Bangalore",
    description:
      "Explore affordable homes, apartments, plots, and real estate projects in Bangalore with Vinra Group.",
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
      <head>
        <link
          rel="preload"
          as="image"
          href="/hd (1).webp"
          fetchPriority="high"
        />
      </head>
      {/* <Navbar /> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar`}
      >
        {children}
      </body>
    </html>
  );
}
