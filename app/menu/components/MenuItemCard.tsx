"use client";

import { useState } from "react";
import { Plus, Coffee, Snowflake, Zap } from "lucide-react";
import { MenuItem, CartItem } from "@/types";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart?: (item: CartItem) => void;
}

export default function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      const cartItem: CartItem = {
        ...item,
        quantity: 1,
      };
      onAddToCart(cartItem);
      setIsAdding(true);
      setTimeout(() => setIsAdding(false), 500);
    }
  };

  const hasMultipleSizes =
    typeof item.price === "object" &&
    (item.price.medium || item.price.large || item.price.small);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 md:p-6 border border-coffee-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg md:text-xl font-bold text-coffee-900 mb-1">
            {item.name}
          </h3>
          {item.description && (
            <p className="text-sm md:text-base text-coffee-700 mb-2 leading-relaxed">{item.description}</p>
          )}
        </div>
        {item.availableHot || item.availableIced || item.availableBlended ? (
          <div className="flex gap-1 ml-2 flex-shrink-0">
            {item.availableHot && (
              <Coffee className="h-4 w-4 text-coffee-600" title="Available hot" />
            )}
            {item.availableIced && (
              <Snowflake className="h-4 w-4 text-blue-500" title="Available iced" />
            )}
            {item.availableBlended && (
              <Zap className="h-4 w-4 text-purple-500" title="Available blended" />
            )}
          </div>
        ) : null}
      </div>

      {item.notes && (
        <p className="text-xs md:text-sm text-coffee-600 italic mb-2 bg-coffee-50 p-2 rounded">{item.notes}</p>
      )}

      {item.timeRestriction && (
        <p className="text-xs md:text-sm text-coffee-600 mb-2">
          <span className="font-semibold">Available:</span> {item.timeRestriction}
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 pt-4 border-t border-coffee-200">
        <div className="flex flex-col">
          <span className="text-2xl md:text-3xl font-bold text-coffee-900">
            {formatPrice(item.price)}
          </span>
          <span className="text-xs text-coffee-500">Prices before tax</span>
        </div>
        {onAddToCart && (
          <button
            onClick={handleAddToCart}
            className={cn(
              "flex items-center gap-2 px-4 py-2.5 bg-honey-500 text-coffee-900 rounded-lg font-semibold hover:bg-honey-400 transition-all w-full sm:w-auto justify-center",
              isAdding && "scale-95"
            )}
          >
            <Plus className="h-4 w-4" />
            <span className="text-sm md:text-base">Add to Cart</span>
          </button>
        )}
      </div>
    </div>
  );
}
