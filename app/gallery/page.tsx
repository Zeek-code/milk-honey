"use client";

import { useState } from "react";
import { Palette, User, Calendar } from "lucide-react";
import ImageGallery from "@/components/ui/ImageGallery";
import OptimizedImage from "@/components/ui/OptimizedImage";

// Placeholder data - replace with actual student artwork
const studentArtwork = [
  {
    id: "1",
    title: "Coffee Dreams",
    artist: "Sarah Martinez",
    student: true,
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
    description: "A vibrant acrylic painting celebrating our coffee culture.",
  },
  {
    id: "2",
    title: "Community Gathering",
    artist: "Michael Chen",
    student: true,
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop",
    description: "Digital illustration capturing the warmth of our space.",
  },
  {
    id: "3",
    title: "Morning Light",
    artist: "Emily Rodriguez",
    student: true,
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    description: "Watercolor piece inspired by early morning coffee rituals.",
  },
  {
    id: "4",
    title: "Local Flavors",
    artist: "James Wilson",
    student: true,
    date: "2024-02-28",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
    description: "Mixed media collage featuring local ingredients.",
  },
  {
    id: "5",
    title: "East Topeka Vibes",
    artist: "Jessica Brown",
    student: true,
    date: "2024-02-20",
    image: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=800&h=600&fit=crop",
    description: "Photography series showcasing our neighborhood.",
  },
  {
    id: "6",
    title: "Coffee & Conversation",
    artist: "David Lee",
    student: true,
    date: "2024-02-15",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=600&fit=crop",
    description: "Pen and ink drawing of daily interactions.",
  },
];

export default function GalleryPage() {
  const [selectedArt, setSelectedArt] = useState<string | null>(null);

  const galleryImages = studentArtwork.map((art) => ({
    src: art.image,
    alt: `${art.title} by ${art.artist}`,
  }));

  return (
    <div className="min-h-screen bg-coffee-50">
      {/* Header */}
      <section className="bg-coffee-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Palette className="h-12 w-12 text-honey-400 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Student Art Gallery
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Showcasing the creative talent of our local student artists
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-coffee-800 leading-relaxed">
              At Milk & Honey Coffee Co., we're proud to support local student artists
              by displaying their work throughout our space. Each piece tells a story
              and adds to the warm, community-focused atmosphere we've created.
            </p>
            <p className="text-base text-coffee-700 mt-4">
              Interested in displaying your artwork? Contact us to learn more about
              our student artist program.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {studentArtwork.map((art) => (
              <div
                key={art.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedArt(art.id)}
              >
                <div className="relative h-64">
                  <OptimizedImage
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-serif font-bold text-coffee-900 mb-2">
                    {art.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-coffee-600 mb-2">
                    <User className="h-4 w-4" />
                    <span className="font-semibold">{art.artist}</span>
                    {art.student && (
                      <span className="px-2 py-0.5 bg-honey-100 text-honey-700 rounded-full text-xs font-semibold">
                        Student Artist
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-coffee-500 mb-2">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(art.date).toLocaleDateString("en-US", { month: "long", year: "numeric" })}</span>
                  </div>
                  <p className="text-sm text-coffee-700 line-clamp-2">
                    {art.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Gallery Component */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-6 text-center">
              Browse All Artwork
            </h2>
            <ImageGallery images={galleryImages} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-coffee-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Want to Display Your Art?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for new student artists to feature. If you're a
            student artist interested in displaying your work, we'd love to hear from you!
          </p>
          <a
            href="/careers"
            className="inline-block px-8 py-3 bg-honey-500 text-coffee-900 rounded-lg font-semibold hover:bg-honey-400 transition-colors"
          >
            Learn More About Our Programs
          </a>
        </div>
      </section>

      {/* Art Detail Modal */}
      {selectedArt && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedArt(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const art = studentArtwork.find((a) => a.id === selectedArt);
              if (!art) return null;
              return (
                <>
                  <div className="relative h-64 md:h-96">
                    <OptimizedImage
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-4">
                      {art.title}
                    </h2>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-coffee-600" />
                        <span className="font-semibold text-coffee-800">{art.artist}</span>
                      </div>
                      {art.student && (
                        <span className="px-3 py-1 bg-honey-100 text-honey-700 rounded-full text-sm font-semibold">
                          Student Artist
                        </span>
                      )}
                    </div>
                    <p className="text-coffee-700 leading-relaxed mb-4">
                      {art.description}
                    </p>
                    <p className="text-sm text-coffee-500">
                      Displayed: {new Date(art.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </p>
                    <button
                      onClick={() => setSelectedArt(null)}
                      className="mt-6 w-full py-2 bg-coffee-800 text-white rounded-lg font-semibold hover:bg-coffee-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
