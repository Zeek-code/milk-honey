import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number | { small?: number; medium?: number; large?: number }): string {
  if (typeof price === "number") {
    return `$${price.toFixed(2)}`;
  }
  
  const prices: string[] = [];
  if (price.small) prices.push(`Small: $${price.small.toFixed(2)}`);
  if (price.medium) prices.push(`Medium: $${price.medium.toFixed(2)}`);
  if (price.large) prices.push(`Large: $${price.large.toFixed(2)}`);
  
  return prices.join(" / ");
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
