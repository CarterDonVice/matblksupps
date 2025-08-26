
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export function Navbar() {
  const { itemCount } = useCart();

  return (
    <header className="top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 bg-transparent">
      <div className="flex-1">
        <Link href="/" className="transition-transform hover:scale-110 block w-fit">
          <Image
            src="/images/matblklogo.png"
            alt="MAT BLK Logo"
            width={72}
            height={72}
            className="h-12 w-12 md:h-16 md:w-16"
          />
          <span className="sr-only">Home</span>
        </Link>
      </div>

      <div className="flex-1 flex justify-center">
        <Link href="/" className="transition-transform hover:scale-105">
          <Image
            src="/images/MATBLKfulllogo.png"
            alt="MAT BLK Banner Logo"
            width={600}
            height={120}
            className="object-contain h-auto"
            priority
          />
        </Link>
      </div>

      <div className="flex-1 flex justify-end">
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
    </header>
  );
}
