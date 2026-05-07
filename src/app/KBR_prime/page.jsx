import KBR_prime from "@/components/KBR_prime";

export const metadata = {
  title: "Vinra KBR Prime | Luxury Apartments in Bangalore",
  description:
    "Explore Vinra KBR Prime premium apartments with modern amenities, great connectivity, and luxury living in Bangalore.",

  keywords: [
    "Vinra KBR Prime",
    "Vinra apartments",
    "Vinra KBR Prime Bangalore",
    "Luxury apartments Bangalore",
    "2 BHK apartments Bangalore",
    "3 BHK apartments Bangalore",
  ],

  openGraph: {
    title: "Vinra KBR Prime",
    description: "Luxury apartments with premium amenities in Bangalore.",
    url: "https://vinraestates.com/KBR_prime",
    siteName: "Vinra KBR Prime",
    images: [
      {
        url: "/kbr1.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <KBR_prime />
    </>
  );
}
