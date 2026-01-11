"use client";

import { generateLocalBusinessSchema } from "@/lib/schema";

/**
 * Structured Data component for locations page
 * Adds LocalBusiness schema with location details
 */
export function LocationStructuredData() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
