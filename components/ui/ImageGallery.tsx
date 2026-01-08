"use client";

import { useState } from "react";
import OptimizedImage from "./OptimizedImage";
import { X } from "lucide-react";

interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
  }>;
  className?: string;
}

export default function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className="relative aspect-square overflow-hidden rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-honey-400"
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              objectFit="cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-honey-300 transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <div className="relative max-w-7xl max-h-full">
            <OptimizedImage
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto"
            />
          </div>
        </div>
      )}
    </>
  );
}
