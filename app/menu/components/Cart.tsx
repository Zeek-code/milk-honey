"use client";

import { useState } from "react";
import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import { CartItem } from "@/types";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  isOpen,
  onClose,
}: CartProps) {
  const calculateTotal = () => {
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
  };

  const total = calculateTotal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-coffee-200">
          <h2 className="text-2xl font-serif font-bold text-coffee-900">
            Your Order
          </h2>
          <button
            onClick={onClose}
            className="text-coffee-600 hover:text-coffee-900 transition-colors"
            aria-label="Close cart"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCart className="h-16 w-16 text-coffee-300 mb-4" />
              <p className="text-coffee-600">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => {
                const price =
                  typeof item.price === "number"
                    ? item.price
                    : item.selectedSize === "large"
                    ? item.price.large || 0
                    : item.selectedSize === "small"
                    ? item.price.small || 0
                    : item.price.medium || 0;

                return (
                  <div
                    key={item.id}
                    className="bg-coffee-50 rounded-lg p-4 border border-coffee-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-coffee-900">
                          {item.name}
                        </h3>
                        {item.selectedSize && (
                          <p className="text-sm text-coffee-600 capitalize">
                            Size: {item.selectedSize}
                          </p>
                        )}
                        <p className="text-sm font-semibold text-coffee-700 mt-1">
                          {formatPrice(price)}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-coffee-400 hover:text-red-600 transition-colors ml-2"
                        aria-label="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))
                          }
                          className="p-1 rounded hover:bg-coffee-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold text-coffee-900 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded hover:bg-coffee-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="font-bold text-coffee-900">
                        {formatPrice(price * item.quantity)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-coffee-200 p-6 space-y-4">
            <div className="flex items-center justify-between text-lg font-bold text-coffee-900">
              <span>Total:</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3 bg-honey-500 text-coffee-900 rounded-lg font-semibold hover:bg-honey-400 transition-colors"
            >
              Proceed to Checkout
            </button>
            <p className="text-xs text-coffee-500 text-center">
              Payment integration ready for backend connection
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
