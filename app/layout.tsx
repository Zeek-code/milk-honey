import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { businessInfo, heroImages } from "@/data/images";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${businessInfo.name} | ${businessInfo.tagline}`,
    template: `%s | ${businessInfo.name}`,
  },
  description: businessInfo.description,
  openGraph: {
    title: businessInfo.name,
    description: businessInfo.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey",
    siteName: businessInfo.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey"}${heroImages[0].src}`,
        width: 1200,
        height: 630,
        alt: heroImages[0].alt,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: businessInfo.name,
    description: businessInfo.description,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey"}${heroImages[0].src}`],
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
