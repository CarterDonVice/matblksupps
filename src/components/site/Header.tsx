'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, ShoppingBag, X, Instagram } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [bumping, setBumping] = React.useState(false);
  const { itemCount, openCart } = useCart();
  const previousCount = React.useRef(itemCount);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Bounce cart icon when count goes up
  React.useEffect(() => {
    if (itemCount > previousCount.current) {
      setBumping(true);
      const t = window.setTimeout(() => setBumping(false), 450);
      previousCount.current = itemCount;
      return () => window.clearTimeout(t);
    }
    previousCount.current = itemCount;
  }, [itemCount]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
          scrolled
            ? 'bg-ink/95 backdrop-blur-md border-b border-ink-600'
            : 'bg-transparent'
        }`}
      >
        <div className="container h-14 sm:h-16 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu"
            className="-ml-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-bone hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone"
          >
            <Menu className="h-6 w-6" strokeWidth={1.75} />
          </button>

          <Link
            href="/"
            aria-label="MAT BLK Supplements home"
            className="flex items-center justify-center h-9 sm:h-10 select-none"
          >
            <Image
              src="/images/FullLogo.png"
              alt="MAT BLK Supplements"
              width={180}
              height={48}
              priority
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={openCart}
            aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? '' : 's'}`}
            className={`relative -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-bone hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone ${
              bumping ? 'scale-110' : 'scale-100'
            }`}
            style={{ transitionDuration: '350ms' }}
          >
            <ShoppingBag className="h-[22px] w-[22px]" strokeWidth={1.75} />
            {itemCount > 0 && (
              <span className="absolute top-1.5 right-1.5 inline-flex min-w-[18px] h-[18px] items-center justify-center rounded-full bg-white text-ink text-[10px] font-semibold px-1 tabular-nums">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      <NavDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function NavDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        aria-hidden
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={`fixed inset-y-0 left-0 z-50 w-[88%] max-w-sm flex flex-col bg-ink text-bone border-r border-ink-600 shadow-[8px_0_40px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="px-5 h-14 sm:h-16 flex items-center justify-between border-b border-ink-600">
          <Image
            src="/images/AbrevLogoMini.png"
            alt="MAT BLK"
            width={32}
            height={32}
            className="h-7 w-7 object-contain"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md hover:text-white"
          >
            <X className="h-6 w-6" strokeWidth={1.75} />
          </button>
        </div>

        <nav className="flex-1 px-5 py-8 flex flex-col gap-2">
          {navItems.map((item, i) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="group flex items-baseline justify-between border-b border-ink-600 py-5 transition-colors hover:text-white"
              style={{
                animation: open ? `fade-in-up 0.5s ease-out ${i * 0.06}s both` : undefined,
              }}
            >
              <span className="font-display text-4xl tracking-[0.04em]">
                {item.label.toUpperCase()}
              </span>
              <span className="label-eyebrow text-bone-500 group-hover:text-bone transition-colors">
                0{i + 1}
              </span>
            </Link>
          ))}
        </nav>

        <div className="px-5 py-6 border-t border-ink-600 flex items-center justify-between">
          <span className="label-eyebrow">Follow</span>
          <a
            href="https://www.instagram.com/matblksupps/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="MAT BLK on Instagram"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md hover:text-white transition-colors"
          >
            <Instagram className="h-5 w-5" strokeWidth={1.75} />
          </a>
        </div>
      </aside>
    </>
  );
}
