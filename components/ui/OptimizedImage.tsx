"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

// Base path for GitHub Pages - matches next.config.js
const BASE_PATH = "/milk-honey";

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  objectFit = "cover",
}: OptimizedImageProps) {
  const imageClasses = cn("object-cover", className);
  
  // Handle basePath for GitHub Pages - prepend /milk-honey to local absolute paths
  // External URLs (http/https) don't need basePath
  const getImageSrc = () => {
    if (src.startsWith("http://") || src.startsWith("https://")) {
      return src; // External URLs don't need basePath
    }
    if (src.startsWith("/")) {
      // Prepend basePath for local absolute paths
      return `${BASE_PATH}${src}`;
    }
    return src; // Relative paths stay as-is
  };

  const imageSrc = getImageSrc();

  if (fill) {
    return (
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className={cn(imageClasses, `object-${objectFit}`)}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    );
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={imageClasses}
      priority={priority}
    />
  );
}
