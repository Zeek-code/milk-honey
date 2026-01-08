/**
 * Payment System Integration
 * 
 * This file provides the structure and interfaces for payment processing.
 * Ready for integration with payment providers like:
 * - Stripe
 * - Square
 * - PayPal
 * - Toast
 * - Clover
 * 
 * To integrate:
 * 1. Install your chosen payment provider SDK
 * 2. Add API keys to environment variables
 * 3. Implement the PaymentProvider interface
 * 4. Update the checkout handler in app/menu/components/Cart.tsx
 */

import { CartItem } from "@/types";

export interface PaymentIntent {
  amount: number; // in cents
  currency: string;
  items: CartItem[];
  customerInfo?: CustomerInfo;
  metadata?: Record<string, string>;
}

export interface CustomerInfo {
  name?: string;
  email?: string;
  phone?: string;
  address?: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface PaymentResult {
  success: boolean;
  transactionId?: string;
  error?: string;
  redirectUrl?: string;
}

export interface PaymentProvider {
  /**
   * Create a payment intent/session
   */
  createPaymentIntent(intent: PaymentIntent): Promise<PaymentResult>;

  /**
   * Process a payment
   */
  processPayment(paymentData: PaymentIntent): Promise<PaymentResult>;

  /**
   * Verify a payment
   */
  verifyPayment(transactionId: string): Promise<boolean>;
}

/**
 * Example Stripe implementation structure
 * Uncomment and implement when ready:
 * 
 * import Stripe from 'stripe';
 * 
 * class StripeProvider implements PaymentProvider {
 *   private stripe: Stripe;
 * 
 *   constructor() {
 *     this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
 *   }
 * 
 *   async createPaymentIntent(intent: PaymentIntent): Promise<PaymentResult> {
 *     try {
 *       const paymentIntent = await this.stripe.paymentIntents.create({
 *         amount: intent.amount,
 *         currency: intent.currency,
 *         metadata: intent.metadata,
 *       });
 * 
 *       return {
 *         success: true,
 *         transactionId: paymentIntent.id,
 *         redirectUrl: `/checkout/${paymentIntent.client_secret}`,
 *       };
 *     } catch (error) {
 *       return {
 *         success: false,
 *         error: error instanceof Error ? error.message : 'Payment failed',
 *       };
 *     }
 *   }
 * 
 *   async processPayment(paymentData: PaymentIntent): Promise<PaymentResult> {
 *     // Implementation
 *   }
 * 
 *   async verifyPayment(transactionId: string): Promise<boolean> {
 *     // Implementation
 *   }
 * }
 */

/**
 * Payment utility functions
 */
export function calculateTotal(items: CartItem[]): number {
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

export function calculateTax(subtotal: number, taxRate: number = 0.09): number {
  return subtotal * taxRate;
}

export function formatPaymentAmount(amount: number): string {
  return (amount / 100).toFixed(2);
}

/**
 * Payment configuration
 * Update these values when integrating with your payment provider
 */
export const PAYMENT_CONFIG = {
  currency: "USD",
  taxRate: 0.09, // 9% - adjust based on your location
  supportedProviders: ["stripe", "square", "paypal", "toast", "clover"],
  defaultProvider: process.env.NEXT_PUBLIC_PAYMENT_PROVIDER || "stripe",
};
