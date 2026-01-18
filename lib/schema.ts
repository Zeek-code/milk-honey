import { businessInfo } from "@/data/images";
import { location } from "@/data/locations";
import { reviews } from "@/data/reviews";
import { Review } from "@/types";

/**
 * Generate LocalBusiness schema for SEO
 */
export function generateLocalBusinessSchema() {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: businessInfo.name,
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey"}/Images/inside1.jpg`,
    "@id": `${process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey"}#organization`,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey",
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.zip,
      addressCountry: "US",
    },
    ...(location.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
    }),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "06:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "13:00",
      },
    ],
    priceRange: "$$",
    servesCuisine: "Coffee, Breakfast, Lunch",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: reviews.length,
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: [
      businessInfo.socialMedia?.facebook,
      businessInfo.socialMedia?.instagram,
      businessInfo.socialMedia?.twitter,
    ].filter(Boolean) as string[],
  };
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessInfo.name,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey",
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey"}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessInfo.phone,
      contactType: "customer service",
      areaServed: "US",
      availableLanguage: "English",
    },
    sameAs: [
      businessInfo.socialMedia?.facebook,
      businessInfo.socialMedia?.instagram,
      businessInfo.socialMedia?.twitter,
    ].filter(Boolean) as string[],
  };
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${process.env.NEXT_PUBLIC_SITE_URL || "https://zeek-code.github.io/milk-honey"}${item.url}`,
    })),
  };
}

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema() {
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    ratingValue: averageRating.toFixed(1),
    reviewCount: reviews.length,
    bestRating: "5",
    worstRating: "1",
  };
}

/**
 * Generate Review schema for individual reviews
 */
export function generateReviewSchema(review: Review) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.author,
    },
    datePublished: review.date,
    reviewBody: review.text,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    itemReviewed: {
      "@type": "LocalBusiness",
      name: businessInfo.name,
    },
  };
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Menu schema (simplified - expand based on menu structure)
 */
export function generateMenuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${businessInfo.name} Menu`,
    description: "Full menu featuring locally roasted coffee, breakfast, and lunch items",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Hot - Iced - Blended",
        description: "Coffee drinks available hot, iced, or blended",
      },
      {
        "@type": "MenuSection",
        name: "Breakfast",
        description: "All-day breakfast items including burritos and parfaits",
      },
      {
        "@type": "MenuSection",
        name: "Lunch",
        description: "Sandwiches, salads, and lunch specials",
      },
    ],
  };
}
