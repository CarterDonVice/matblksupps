import { ShoppingCartClient } from '@/components/cart/ShoppingCartClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopping Cart | MAT BLK Supplements',
  description: 'Review your items and proceed to checkout.',
};

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Your Shopping Cart
        </h1>
      </div>
      <ShoppingCartClient />
    </div>
  );
}
