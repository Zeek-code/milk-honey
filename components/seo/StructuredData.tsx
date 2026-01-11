"use client";

import { generateLocalBusinessSchema, generateOrganizationSchema } from "@/lib/schema";

/**
 * Structured Data component for homepage
 * Adds LocalBusiness and Organization schemas
 */
export function HomepageStructuredData() {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
