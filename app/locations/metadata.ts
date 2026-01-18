import { Metadata } from "next";

export const locationsMetadata: Metadata = {
  title: "Location & Hours | Milk & Honey Coffee Co. | Topeka, KS",
  description:
    "Visit Milk & Honey Coffee Co. at 2200 SE 29th St, Topeka, KS 66605. Open daily 6 AM - 7 PM (Mon-Fri), 6 AM - 2 PM (Sat), 8 AM - 1 PM (Sun). Get directions, view hours, and contact us.",
  keywords: [
    "Milk & Honey Coffee Co. location",
    "coffee shop Topeka address",
    "Topeka coffee shop hours",
    "East Topeka coffee shop",
    "2200 SE 29th St Topeka",
    "coffee shop near me Topeka",
  ],
  openGraph: {
    title: "Location & Hours | Milk & Honey Coffee Co.",
    description:
      "Visit us at 2200 SE 29th St, Topeka, KS. Open daily. Get directions and view our hours.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey"}/locations`,
    siteName: "Milk & Honey Coffee Co.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey"}/og-locations.jpg`,
        width: 1200,
        height: 630,
        alt: "Milk & Honey Coffee Co. Location",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Location & Hours | Milk & Honey Coffee Co.",
    description: "Visit us at 2200 SE 29th St, Topeka, KS. Open daily.",
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey"}/og-locations.jpg`,
    ],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey"}/locations`,
  },
};
