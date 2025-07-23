"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export function Navbar() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/matblklogo.png"
            alt="MAT BLK Logo"
            width={50}
            height={50}
            className="text-outline-matblk"
          />
        </Link>

        {/* Cart Icon */}
        <div className="flex items-center">
          <Link href="/cart" className="relative p-2">
            <ShoppingCart className="h-6 w-6 text-foreground/90 transition-colors hover:text-primary" />
            {itemCount > 0 && (
              <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {itemCount}
              </span>
            )}
            <span className="sr-only">Shopping Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
