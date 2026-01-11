import { Metadata } from "next";

export const menuMetadata: Metadata = {
  title: "Menu | Milk & Honey Coffee Co. | Topeka Coffee Shop Menu",
  description:
    "Explore our full menu featuring locally roasted coffee from Blue Jazz Coffee Roasters, breakfast burritos served all day, sandwiches, salads, and more. Order online or visit us in East Topeka.",
  keywords: [
    "coffee menu Topeka",
    "breakfast menu Topeka",
    "lunch menu Topeka",
    "Milk & Honey menu",
    "Topeka coffee shop menu",
    "East Topeka cafe menu",
  ],
  openGraph: {
    title: "Menu | Milk & Honey Coffee Co.",
    description:
      "Explore our full menu featuring locally roasted coffee, breakfast, and lunch items.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.milkandhoneycoffee.com"}/menu`,
    siteName: "Milk & Honey Coffee Co.",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.milkandhoneycoffee.com"}/og-menu.jpg`,
        width: 1200,
        height: 630,
        alt: "Milk & Honey Coffee Co. Menu",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | Milk & Honey Coffee Co.",
    description: "Explore our full menu featuring locally roasted coffee, breakfast, and lunch.",
    images: [
      `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.milkandhoneycoffee.com"}/og-menu.jpg`,
    ],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.milkandhoneycoffee.com"}/menu`,
  },
};
