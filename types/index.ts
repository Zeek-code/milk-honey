export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number | { medium?: number; large?: number; small?: number };
  category: string;
  availableHot?: boolean;
  availableIced?: boolean;
  availableBlended?: boolean;
  servedAllDay?: boolean;
  timeRestriction?: string;
  notes?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  items: MenuItem[];
  description?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: "google" | "yelp" | "facebook" | "other";
}

export interface Location {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email?: string;
  hours: {
    [key: string]: string;
  };
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface CartItem extends MenuItem {
  quantity: number;
  selectedSize?: "small" | "medium" | "large";
  selectedModifications?: string[];
}

export interface BusinessInfo {
  name: string;
  tagline?: string;
  description: string;
  address: string;
  phone: string;
  email?: string;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    yelp?: string;
  };
}
