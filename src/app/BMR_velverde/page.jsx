import BMRVelverde from "@/components/BMR_velverde";

export const metadata = {
  title: "Vinra BMR Velverde | CUDA Approved Villa Plots in Chikkaballapura",
  description:
    "Discover Vinra BMR Velverde: CUDA 2031 approved 9-acre premium villa plot development in Chikkaballapura. 129 plots (30x40, 30x50), 80ft wide access roads, underground utilities, 12km to Isha Foundation & Nandi Hills.",
  keywords: [
    "Vinra BMR Velverde",
    "BMR Velverde Chikkaballapura",
    "CUDA approved plots Chikkaballapur",
    "Villa plots near Isha Foundation Bangalore",
    "Plots near Nandi Hills",
    "Plots near Kempegowda International Airport",
    "Vinra Group plots Chikkaballapura",
    "30x40 plots Chikkaballapura",
    "30x50 plots Chikkaballapura",
    "North Bangalore land investment",
  ],
  alternates: {
    canonical: "https://www.vinragroup.com/BMR_velverde",
  },
  openGraph: {
    title: "Vinra BMR Velverde | CUDA Approved Villa Plots in Chikkaballapura",
    description:
      "Explore CUDA 2031 approved 9-acre gated enclave with 129 villa plots, 80ft main road, underground cabling, and strategic connectivity to Isha Foundation & Airport.",
    url: "https://www.vinragroup.com/BMR_velverde",
    siteName: "Vinra Group",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.vinragroup.com/vinra-bmr-velverde-hero.webp",
        width: 1600,
        height: 900,
        alt: "Vinra BMR Velverde premium plotted development entrance gate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinra BMR Velverde | Premium Villa Plots in Chikkaballapura",
    description:
      "CUDA 2031 approved 9-acre gated enclave near Isha Foundation & Nandi Hills. 129 plots with 80ft access roads.",
    images: ["https://www.vinragroup.com/vinra-bmr-velverde-hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdRealEstate = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": "Vinra BMR Velverde",
  "description": "9 Acres CUDA 2031 approved premium planned residential and commercial plot enclave with 129 sites, 80ft wide access roads, and underground cabling.",
  "url": "https://www.vinragroup.com/BMR_velverde",
  "image": "https://www.vinragroup.com/vinra-bmr-velverde-hero.webp",
  "offeredBy": {
    "@type": "RealEstateAgent",
    "name": "Vinra Group",
    "url": "https://www.vinragroup.com",
    "telephone": "+91-6366699888"
  },
  "location": {
    "@type": "Place",
    "name": "Vinra BMR Velverde Enclave",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Anakanuru Village, Kasaba Hobli",
      "addressLocality": "Chikkaballapura",
      "addressRegion": "Karnataka",
      "postalCode": "562101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.4355",
      "longitude": "77.7275"
    }
  },
  "about": [
    {
      "@type": "Thing",
      "name": "CUDA 2031 Approval"
    },
    {
      "@type": "Place",
      "name": "Isha Foundation Adiyogi Chikkaballapura",
      "distance": "12 km"
    },
    {
      "@type": "Place",
      "name": "Nandi Hills",
      "distance": "12 km"
    },
    {
      "@type": "Place",
      "name": "Kempegowda International Airport",
      "distance": "30 km"
    }
  ]
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Vinra BMR Velverde?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vinra BMR Velverde is a premium 9-acre CUDA 2031 approved gated plotted development featuring 129 residential and commercial plots, 80ft wide main access roads, and underground utility infrastructure in Chikkaballapura, North Bangalore."
      }
    },
    {
      "@type": "Question",
      "name": "Is Vinra BMR Velverde CUDA and RERA approved?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Vinra BMR Velverde is fully approved under the Chikkaballapura Urban Development Authority (CUDA 2031 Master Plan) with complete legal compliance and clear titles."
      }
    },
    {
      "@type": "Question",
      "name": "What plot dimensions are available at BMR Velverde?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The project offers 30x40 ft (1,200 sq. ft.) villa plots, 30x50 ft (1,500 sq. ft.) villa plots, odd dimension plots (such as 9.14m width), and custom commercial plot sizes."
      }
    },
    {
      "@type": "Question",
      "name": "How far is Vinra BMR Velverde from Isha Foundation and Airport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vinra BMR Velverde is located just 12 km from Isha Foundation (Adiyogi), 12 km from Nandi Hills, and 30 km from Kempegowda International Airport (KIA) via NH-44."
      }
    },
    {
      "@type": "Question",
      "name": "How can I request a brochure or schedule a site visit for BMR Velverde?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can fill out the contact form on our website or call +91-6366699888. Our sales executive will connect with you promptly to share the brochure, plot layout map, and arrange a VIP site visit."
      }
    }
  ]
};

export default function BMRVelverdePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdRealEstate) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <BMRVelverde />
    </>
  );
}
