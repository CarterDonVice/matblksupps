
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { mainNavLinks } from '@/data/navigation';
import { useCart } from '@/contexts/CartContext';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const { itemCount } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Image
            src="/images/MAT BLK logo.jpg"
            alt="MAT BLK Logo"
            width={120} 
            height={40} 
            className="object-contain"
            priority
            data-ai-hint="company logo"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-headline text-lg transition-colors hover:text-primary ${
                pathname === link.href ? 'text-primary font-semibold' : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative transition-transform hover:scale-110">
            <ShoppingCart className="h-7 w-7 text-foreground/80 hover:text-primary" />
            {isMounted && itemCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {itemCount}
              </span>
            )}
          </Link>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-7 w-7 text-foreground/80" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                     <Link href="/" className="flex items-center gap-2">
                       <Image
                          src="/images/MAT BLK logo.jpg"
                          alt="MAT BLK Logo"
                          width={100}
                          height={35}
                          className="object-contain"
                          data-ai-hint="company logo"
                       />
                    </Link>
                    <SheetClose asChild>
                       <Button variant="ghost" size="icon"><X className="h-7 w-7 text-foreground/80" /></Button>
                    </SheetClose>
                  </div>
                  <nav className="flex flex-col gap-6">
                    {mainNavLinks.map((link) => (
                      <SheetClose asChild key={link.label}>
                        <Link
                          href={link.href}
                          className={`font-headline text-xl transition-colors hover:text-primary ${
                            pathname === link.href ? 'text-primary font-semibold' : 'text-foreground'
                          }`}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
