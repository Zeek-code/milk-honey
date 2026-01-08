"use client";

import { useState } from "react";
import { Star, Filter } from "lucide-react";
import { reviews } from "@/data/reviews";
import { Review } from "@/types";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<"newest" | "oldest" | "rating">("newest");

  const filteredAndSortedReviews = reviews
    .filter((review) => (filterRating ? review.rating === filterRating : true))
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === "oldest") {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else {
        return b.rating - a.rating;
      }
    });

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-coffee-50">
      {/* Header */}
      <section className="bg-coffee-900 text-honey-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
            Customer Reviews
          </h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-6 w-6",
                    i < Math.round(averageRating)
                      ? "fill-honey-400 text-honey-400"
                      : "text-coffee-400"
                  )}
                />
              ))}
            </div>
            <span className="text-xl font-semibold text-honey-100">
              {averageRating.toFixed(1)} ({reviews.length} reviews)
            </span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-coffee-600" />
              <span className="font-semibold text-coffee-900">Filter by Rating:</span>
              <div className="flex gap-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    onClick={() =>
                      setFilterRating(filterRating === rating ? null : rating)
                    }
                    className={cn(
                      "px-4 py-2 rounded-lg font-semibold transition-colors",
                      filterRating === rating
                        ? "bg-honey-500 text-coffee-900"
                        : "bg-coffee-100 text-coffee-700 hover:bg-coffee-200"
                    )}
                  >
                    {rating} Star{rating !== 1 ? "s" : ""}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-coffee-900">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value as "newest" | "oldest" | "rating")
                }
                className="px-4 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-honey-400 bg-white"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAndSortedReviews.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <p className="text-coffee-600 text-lg">
                No reviews found with the selected filter.
              </p>
            </div>
          ) : (
            filteredAndSortedReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-coffee-200">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-coffee-900">{review.author}</h3>
          <p className="text-sm text-coffee-500">{formatDate(review.date)}</p>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-5 w-5",
                i < review.rating
                  ? "fill-honey-400 text-honey-400"
                  : "text-coffee-300"
              )}
            />
          ))}
        </div>
      </div>
      <p className="text-coffee-700 leading-relaxed">{review.text}</p>
      <div className="mt-4 pt-4 border-t border-coffee-200">
        <span className="text-xs text-coffee-500 uppercase">
          {review.source}
        </span>
      </div>
    </div>
  );
}
