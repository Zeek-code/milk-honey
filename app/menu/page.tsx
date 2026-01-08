"use client";

import { useState } from "react";
import { ShoppingCart, Search } from "lucide-react";
import { menuSections } from "@/data/menu";
import MenuSection from "./components/MenuSection";
import Cart from "./components/Cart";
import { CartItem } from "@/types";

export default function MenuPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    // TODO: Integrate with payment backend
    console.log("Checkout items:", cartItems);
    alert("Checkout functionality ready for backend integration!");
  };

  const filteredSections = menuSections.map((section) => ({
    ...section,
    items: searchTerm
      ? section.items.filter(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : section.items,
  })).filter((section) => section.items.length > 0);

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-coffee-50">
      {/* Header */}
      <div className="bg-coffee-900 text-honey-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-center">
            Our Menu
          </h1>
          <p className="text-center text-honey-100 max-w-2xl mx-auto">
            Be sure to ask about our seasonal specials!
          </p>
        </div>
      </div>

      {/* Search and Cart Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-400" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-coffee-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-honey-400 bg-white"
            />
          </div>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-6 py-2 bg-honey-500 text-coffee-900 rounded-lg font-semibold hover:bg-honey-400 transition-colors flex items-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-coffee-900 text-honey-50 rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>

        {/* Menu Sections */}
        <div className="max-w-7xl mx-auto">
          {filteredSections.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-coffee-600 text-lg">
                No items found matching "{searchTerm}"
              </p>
            </div>
          ) : (
            filteredSections.map((section) => (
              <MenuSection
                key={section.id}
                section={section}
                onAddToCart={handleAddToCart}
              />
            ))
          )}
        </div>

        {/* Note */}
        <div className="mt-12 p-4 bg-coffee-100 rounded-lg text-center text-sm text-coffee-700">
          <p>Prices before taxes. Thank you for your support!</p>
        </div>
      </div>

      {/* Cart */}
      <Cart
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </div>
  );
}
