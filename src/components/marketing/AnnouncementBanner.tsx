'use client';

import * as React from 'react';
import { X } from 'lucide-react';
import { useCoupon } from '@/components/marketing/CouponPopup';

const STORAGE_BANNER_HIDDEN = 'tenet:banner:hidden';
const CYCLE_MS = 5000;

const messages = [
  'Get 20% off your first order.',
  'Free shipping on 2 or more tubs.',
  '100% satisfaction guarantee.',
];

/**
 * Slim announcement bar above the header. Statically rendered with the first
 * message so it occupies its height on first paint (no layout shift), then
 * cycles messages with a gentle fade. Clicking the message opens the coupon
 * popup via the existing custom event listener. Not sticky.
 */
export function AnnouncementBanner() {
  const { claimed } = useCoupon();
  const [index, setIndex] = React.useState(0);
  const [fading, setFading] = React.useState(false);
  const [dismissed, setDismissed] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    try {
      setDismissed(localStorage.getItem(STORAGE_BANNER_HIDDEN) === '1');
    } catch {
      /* noop */
    }
    setHydrated(true);
  }, []);

  // Cycle messages unless the visitor prefers reduced motion.
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const interval = window.setInterval(() => {
      setFading(true);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % messages.length);
        setFading(false);
      }, 250);
    }, CYCLE_MS);
    return () => window.clearInterval(interval);
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_BANNER_HIDDEN, '1');
    } catch {
      /* noop */
    }
    setDismissed(true);
  };

  if (hydrated && (dismissed || claimed)) return null;

  return (
    <div className="relative w-full h-11 sm:h-9 bg-ink-800 border-b border-ink-600">
      <button
        type="button"
        onClick={() =>
          window.dispatchEvent(new CustomEvent('tenet:coupon:open'))
        }
        className="absolute inset-0 w-full h-full flex items-center justify-center px-12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bone"
      >
        {/* Mobile: static first-order offer, identical to the popup headline */}
        <span className="sm:hidden text-[13px] font-semibold uppercase tracking-wide text-bone truncate">
          {messages[0]}
        </span>
        {/* Desktop: cycling messages, unchanged */}
        <span
          className={`hidden sm:inline text-xs uppercase tracking-wide text-bone-600 truncate transition-opacity duration-200 ${
            fading ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {messages[index]}
        </span>
      </button>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full text-bone-500 hover:text-bone hover:bg-ink-700 transition-colors after:absolute after:-inset-2 after:content-['']"
      >
        <X className="h-3.5 w-3.5" strokeWidth={2} />
      </button>
    </div>
  );
}
