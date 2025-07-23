
"use client";

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export function Navbar() {
  const { itemCount } = useCart();

  return (
    <div className="fixed top-4 right-4 z-50">
      <Link href="/cart" className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-110">
        <ShoppingCart className="h-7 w-7" />
        {itemCount > 0 && (
          <span className="absolute top-0 right-0 flex h-6 w-6 items-center justify-center rounded-full bg-background text-xs font-bold text-foreground ring-2 ring-primary">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Shopping Cart</span>
      </Link>
    </div>
  );
}
