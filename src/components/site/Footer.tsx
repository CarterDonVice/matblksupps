'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Instagram, ChevronDown } from 'lucide-react';

interface FooterLink {
  label: string;
  href: string;
  /** External or mailto (renders as <a> instead of <Link>) */
  external?: boolean;
}

const shopLinks: FooterLink[] = [
  { label: 'All Products', href: '/' },
  { label: 'Subscribe & Save', href: '/' },
  { label: 'The Blacklist', href: '/#newsletter' },
];

const supportLinks: FooterLink[] = [
  { label: 'Contact', href: '/contact' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Shipping & Returns', href: '/refund' },
  { label: 'support@matblksupps.com', href: 'mailto:support@matblksupps.com', external: true },
];

const aboutLinks: FooterLink[] = [
  { label: 'Our Story', href: '/about' },
  { label: 'The Science', href: '/science' },
  { label: 'Manufacturing', href: '/about' },
];

const legalLinks: FooterLink[] = [
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund' },
  { label: 'Accessibility', href: '/accessibility' },
];

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-ink-600 pt-14 pb-10 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 texture-wordmark opacity-40 pointer-events-none"
      />
      <div className="container relative">
        {/* Desktop 4-col grid / mobile accordion */}
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand column — always visible */}
          <div className="text-center lg:text-left space-y-4">
            <Image
              src="/images/FullLogo.png"
              alt="MAT BLK Supplements"
              width={200}
              height={56}
              className="h-9 sm:h-10 w-auto object-contain opacity-95 mx-auto lg:mx-0"
            />
            <p className="text-bone-600 text-sm max-w-xs mx-auto lg:mx-0">
              The daily tenet of serious training.
            </p>
            <div className="flex justify-center lg:justify-start">
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
          </div>

          <FooterColumn title="Shop" links={shopLinks} />
          <FooterColumn title="Support" links={supportLinks} />
          <FooterColumn title="About" links={aboutLinks} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-600 pt-6 flex flex-col-reverse sm:flex-row items-center sm:justify-between gap-4 text-center sm:text-left">
          <p className="text-bone-500 text-[11px] tracking-[0.12em] uppercase">
            © 2026 MAT BLK Supplements LLC. All rights reserved.
          </p>
          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
          >
            {legalLinks.map((l, i) => (
              <React.Fragment key={l.label}>
                <Link
                  href={l.href}
                  className="text-bone-600 hover:text-bone transition-colors text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] uppercase"
                >
                  {l.label}
                </Link>
                {i < legalLinks.length - 1 && (
                  <span aria-hidden className="text-bone-500 text-xs">·</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        <div className="max-w-md mx-auto text-center mt-6 space-y-2">
          <p className="text-bone-500 text-[10px] leading-relaxed">
            These statements have not been evaluated by the FDA. This product is
            not intended to diagnose, treat, cure, or prevent any disease.
          </p>
          <p className="text-bone-500 text-[10px] leading-relaxed">
            HydroPrime® is a registered trademark of Pinnacle Ingredients, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}

/** Column — renders as a clickable accordion section on mobile, static list on desktop. */
function FooterColumn({ title, links }: { title: string; links: FooterLink[] }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="border-b border-ink-600 lg:border-b-0">
      {/* Mobile: clickable accordion header */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="lg:hidden w-full flex items-center justify-between py-4 text-left"
      >
        <span className="label-eyebrow">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-bone-500 transition-transform duration-300 ${
            open ? 'rotate-180 text-white' : ''
          }`}
          strokeWidth={1.75}
        />
      </button>

      {/* Desktop: static label */}
      <p className="hidden lg:block label-eyebrow mb-4">{title}</p>

      <div
        className={`grid transition-all duration-300 ease-out lg:!grid-rows-[1fr] lg:!opacity-100 ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <ul className="overflow-hidden lg:overflow-visible space-y-2.5 pb-4 lg:pb-0">
          {links.map((l) => (
            <li key={l.label}>
              {l.external ? (
                <a
                  href={l.href}
                  className="text-bone-600 hover:text-bone transition-colors text-sm break-all"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  href={l.href}
                  className="text-bone-600 hover:text-bone transition-colors text-sm"
                >
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
