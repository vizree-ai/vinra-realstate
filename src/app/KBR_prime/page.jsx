import KBR_prime from "@/components/KBR_prime";
import CommonNavbar from "@/components/CommonNavbar";

export const metadata = {
  title: "Vinra KBR Prime Apartments in Hoskote",
  description:
    "Own 2 and 3 BHK apartments at Vinra KBR Prime in Hoskote, Bangalore with premium amenities and connectivity.",
  alternates: {
    canonical: "/KBR_prime",
  },
  openGraph: {
    title: "Vinra KBR Prime Apartments in Hoskote",
    description:
      "Explore Vinra KBR Prime 2 and 3 BHK apartments in Hoskote, Bangalore.",
    images: [
      {
        url: "/Vinra KBR Prime.webp",
        width: 1200,
        height: 630,
        alt: "Vinra KBR Prime apartments in Hoskote",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      {/* <CommonNavbar variant="project" /> */}
      <KBR_prime />
    </>
  );
}
