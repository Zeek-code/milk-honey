"use client";

import { generateAggregateRatingSchema, generateReviewSchema } from "@/lib/schema";
import { reviews } from "@/data/reviews";

/**
 * Structured Data component for reviews page
 * Adds AggregateRating and individual Review schemas
 */
export function ReviewStructuredData() {
  const aggregateRatingSchema = generateAggregateRatingSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      {reviews.map((review) => (
        <script
          key={review.id}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateReviewSchema(review)) }}
        />
      ))}
    </>
  );
}
