"use client";

import { generateMenuSchema } from "@/lib/schema";

/**
 * Structured Data component for menu page
 * Adds Menu schema
 */
export function MenuStructuredData() {
  const menuSchema = generateMenuSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
    />
  );
}
