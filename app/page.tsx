"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Coffee, Users, Heart } from "lucide-react";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { heroImages, businessInfo } from "@/data/images";
import { cn } from "@/lib/utils";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Slideshow */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/80 to-coffee-900/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 text-honey-50">
                  {image.title}
                </h1>
                <p className="text-xl md:text-2xl text-honey-100 mb-8">
                  {image.subtitle}
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center px-8 py-3 bg-honey-500 text-coffee-900 rounded-lg font-semibold hover:bg-honey-400 transition-colors"
                >
                  View Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentSlide
                  ? "bg-honey-400 w-8"
                  : "bg-coffee-300/50 hover:bg-coffee-300"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-coffee-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-coffee-900">
              Welcome to {businessInfo.name}
            </h2>
            <p className="text-lg text-coffee-700 mb-8 leading-relaxed">
              {businessInfo.description}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <Link
                href="/menu"
                className="px-6 py-3 bg-coffee-800 text-honey-50 rounded-lg font-semibold hover:bg-coffee-700 transition-colors"
              >
                Explore Our Menu
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 border-2 border-coffee-800 text-coffee-800 rounded-lg font-semibold hover:bg-coffee-800 hover:text-honey-50 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-honey-100 rounded-full mb-4">
                <Coffee className="h-8 w-8 text-honey-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                Fresh Coffee Daily
              </h3>
              <p className="text-coffee-600">
                Locally roasted coffee from Blue Jazz Coffee Roasters, served fresh every day.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-honey-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-honey-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                Community Focused
              </h3>
              <p className="text-coffee-600">
                Supporting local students, artists, and the East Topeka community since 2020.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-honey-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-honey-600" />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2 text-coffee-900">
                Made with Love
              </h3>
              <p className="text-coffee-600">
                Every cup and every meal is prepared with care and attention to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-coffee-800 text-honey-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-xl text-honey-100 mb-8">
            {businessInfo.address}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/locations"
              className="px-6 py-3 bg-honey-500 text-coffee-900 rounded-lg font-semibold hover:bg-honey-400 transition-colors"
            >
              Hours & Directions
            </Link>
            <Link
              href="/reviews"
              className="px-6 py-3 border-2 border-honey-400 text-honey-50 rounded-lg font-semibold hover:bg-honey-400 hover:text-coffee-900 transition-colors"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
