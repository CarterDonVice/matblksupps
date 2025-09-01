
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export function Navbar() {
  const { itemCount } = useCart();

  const navLinks = [
    { href: '/shop', label: 'Shop' },
    { href: '/science', label: 'Science' },
    { href: '/about', label: 'About' },
    { href: '/ambassador', label: 'Become an Ambassador' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="flex flex-col items-center py-2 px-4 md:px-6 bg-transparent">
      <div className="w-full flex justify-between items-center">
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

        <div className="flex-[2] flex justify-center px-4">
          <Link href="/" className="w-full max-w-sm transition-transform hover:scale-105">
            <Image
              src="/images/MATBLKfulllogo.png"
              alt="MAT BLK Banner Logo"
              width={800}
              height={160}
              className="object-contain h-auto w-full"
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
      </div>
      <nav className="flex justify-center items-center gap-4 md:gap-8 mt-2 pb-2 border-b border-border/50 w-full max-w-2xl">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-headline text-lg text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
