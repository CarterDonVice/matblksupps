
"use client";

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export function Navbar() {
  const { itemCount } = useCart();

  return (
    <div className="fixed top-6 right-6 z-50">
      <Link href="/cart" className="relative block text-foreground transition-transform hover:scale-110">
        <ShoppingCart className="h-8 w-8" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold ring-2 ring-background">
            {itemCount}
          </span>
        )}
        <span className="sr-only">Shopping Cart</span>
      </Link>
    </div>
  );
}
