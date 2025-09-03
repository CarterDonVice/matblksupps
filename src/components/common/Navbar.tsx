
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { mainNavLinks, type NavLink } from '@/data/navigation';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { itemCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderNavLink = (link: NavLink, isMobile = false) => {
    if (link.children) {
      return (
        <DropdownMenu key={link.label}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={cn(
              "font-headline text-lg text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider hover:bg-transparent p-0",
              isMobile && "justify-start w-full text-xl"
            )}>
              {link.label}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-card border-border/70">
            {link.children.map((child) => (
              <DropdownMenuItem key={child.href} asChild>
                <Link href={child.href} className="font-headline text-base text-muted-foreground hover:text-primary">
                  {child.label}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => isMobile && setMobileMenuOpen(false)}
        className={cn(
            "font-headline text-lg text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wider",
            isMobile && "text-xl py-2"
        )}
      >
        {link.label}
      </Link>
    );
  };
  
  return (
    <header className="flex flex-col items-center py-2 px-4 md:px-6 bg-transparent">
      <div className="w-full flex justify-between items-center">
        <div className="flex-1 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
        <div className="flex-1 hidden md:block">
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
          <Link href="/" className="w-full max-w-xs md:max-w-sm transition-transform hover:scale-105 pt-2">
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
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center items-center gap-4 md:gap-8 mt-2 pb-2 border-b border-border/50 w-full max-w-3xl">
        {mainNavLinks.map((link) => renderNavLink(link))}
      </nav>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full bg-background mt-4 absolute top-20 left-0 z-50 shadow-lg">
             <nav className="flex flex-col items-start gap-4 p-6">
                {mainNavLinks.map((link) => renderNavLink(link, true))}
             </nav>
        </div>
      )}
    </header>
  );
}
