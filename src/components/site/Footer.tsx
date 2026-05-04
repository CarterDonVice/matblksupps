import Image from 'next/image';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

const links = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund' },
  { label: 'Contact Us', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-ink border-t border-ink-600 pt-14 pb-32 sm:pb-14">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-5 mb-10">
          <Image
            src="/images/lowreslogo.png"
            alt="MAT BLK"
            width={48}
            height={48}
            className="h-12 w-12 object-contain opacity-90"
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

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8"
        >
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-bone-600 hover:text-bone transition-colors text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase"
            >
              {l.label}
            </Link>
          ))}
        </nav>

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
