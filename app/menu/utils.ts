import { MenuItem, CartItem } from "@/types";

export function filterMenuByCategory(
  items: MenuItem[],
  category: string
): MenuItem[] {
  return items.filter((item) => item.category === category);
}

export function searchMenuItems(
  items: MenuItem[],
  searchTerm: string
): MenuItem[] {
  const term = searchTerm.toLowerCase();
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(term) ||
      item.description?.toLowerCase().includes(term)
  );
}

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => {
    const price =
      typeof item.price === "number"
        ? item.price
        : item.selectedSize === "large"
        ? item.price.large || 0
        : item.selectedSize === "small"
        ? item.price.small || 0
        : item.price.medium || 0;
    return total + price * item.quantity;
  }, 0);
}
