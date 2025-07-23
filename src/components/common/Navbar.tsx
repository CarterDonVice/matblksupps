
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';

import { mainNavLinks } from '@/data/navigation';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';

export function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navLinkClasses = (href: string, isMobile = false) =>
    cn(
      'transition-colors text-outline-matblk',
      pathname === href
        ? 'text-primary font-semibold'
        : 'text-foreground/90 hover:text-primary',
      isMobile ? 'text-2xl py-3' : 'text-sm font-medium'
    );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Desktop Logo */}
        <div className="hidden md:flex">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/matblklogo.png"
              alt="MAT BLK Logo"
              width={50}
              height={50}
              className="text-outline-matblk"
            />
          </Link>
        </div>

        {/* Mobile Logo & Trigger */}
        <div className="flex items-center gap-4 md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-foreground/90" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background w-full max-w-sm p-6">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" onClick={() => setIsSheetOpen(false)}>
                     <Image
                        src="/images/matblklogo.png"
                        alt="MAT BLK Logo"
                        width={50}
                        height={50}
                      />
                  </Link>
                   <SheetClose asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-6 w-6 text-foreground/90" />
                         <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </div>

                <nav className="flex flex-col gap-4">
                  {mainNavLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={navLinkClasses(link.href, true)}
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
           <div className="md:hidden">
             <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/matblklogo.png"
                alt="MAT BLK Logo"
                width={40}
                height={40}
                className="text-outline-matblk"
              />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {mainNavLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClasses(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

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
