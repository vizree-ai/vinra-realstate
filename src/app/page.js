import MainPage from "@/components/MainPage";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Vinra Group",
  description:
    "Real estate developer offering homes, apartments, plots, and property solutions in Bangalore.",
  areaServed: {
    "@type": "City",
    name: "Bangalore",
  },
  url: "/",
};

export const metadata = {
  title: "Affordable Homes and Properties in Bangalore",
  description:
    "Search affordable homes and premium properties in Bangalore from Vinra Group.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainPage />
    </div>
  );
}
