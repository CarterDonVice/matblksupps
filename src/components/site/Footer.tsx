import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Shop', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const legalLinks = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund' },
];

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-ink-600 pt-14 pb-10 overflow-hidden">
      <div className="absolute inset-0 texture-wordmark opacity-40 pointer-events-none" aria-hidden />
      <div className="container relative">
        <div className="flex flex-col items-center text-center gap-5 mb-10">
          <Image
            src="/images/FullLogo.png"
            alt="MAT BLK Supplements"
            width={200}
            height={56}
            className="h-9 sm:h-10 w-auto object-contain opacity-95"
          />
          <p className="text-bone-600 text-sm max-w-xs">
            Elevating performance with premium supplements.
          </p>
          <a
            href="https://www.instagram.com/matblksupps/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram @matblksupps"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-600 text-bone hover:text-white hover:border-bone-500 transition-colors"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-y-3 gap-x-10 max-w-xl mx-auto mb-10">
          <nav aria-label="Quick links" className="flex flex-wrap items-center justify-center sm:justify-end gap-x-5 gap-y-2">
            {quickLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-bone-600 hover:text-bone transition-colors text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Legal" className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-bone-600 hover:text-bone transition-colors text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-ink-600 pt-6 flex flex-col items-center gap-1 text-center">
          <p className="text-bone-500 text-[11px] tracking-[0.12em] uppercase">
            © 2026 MAT BLK Supplements. All rights reserved.
          </p>
          <p className="text-bone-500 text-[10px] max-w-md leading-relaxed">
            These statements have not been evaluated by the FDA. This product is
            not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
