'use client';

import * as React from 'react';
import { X, Check, Gift } from 'lucide-react';

const STORAGE_SEEN = 'tenet:discount:seen';
const STORAGE_CLAIMED = 'tenet:discount:claimed';
const STORAGE_STICKY_HIDDEN = 'tenet:discount:sticky-hidden';
const AUTO_DELAY_MS = 10000;

interface CouponState {
  isPopupOpen: boolean;
  /** True if the user has actually claimed (submitted email). */
  claimed: boolean;
  /** True after the popup has been shown at least once. */
  seen: boolean;
  /** True if the user explicitly dismissed the sticky button. */
  stickyHidden: boolean;
  openPopup: () => void;
  closePopup: () => void;
  /** Permanently hide the sticky button. */
  dismissSticky: () => void;
}

const CouponContext = React.createContext<CouponState | null>(null);

function readFlag(key: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(key) === '1';
  } catch {
    return false;
  }
}

function writeFlag(key: string, value: boolean) {
  if (typeof window === 'undefined') return;
  try {
    if (value) localStorage.setItem(key, '1');
    else localStorage.removeItem(key);
  } catch {
    /* noop */
  }
}

export function CouponProvider({ children }: { children: React.ReactNode }) {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [seen, setSeen] = React.useState(false);
  const [claimed, setClaimed] = React.useState(false);
  const [stickyHidden, setStickyHidden] = React.useState(false);
  const [hydrated, setHydrated] = React.useState(false);

  // Hydrate flags
  React.useEffect(() => {
    setSeen(readFlag(STORAGE_SEEN));
    setClaimed(readFlag(STORAGE_CLAIMED));
    setStickyHidden(readFlag(STORAGE_STICKY_HIDDEN));
    setHydrated(true);
  }, []);

  // Auto-trigger 10s after page load if never seen
  React.useEffect(() => {
    if (!hydrated || seen || claimed) return;
    const t = window.setTimeout(() => {
      writeFlag(STORAGE_SEEN, true);
      setSeen(true);
      setIsPopupOpen(true);
    }, AUTO_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [hydrated, seen, claimed]);

  const openPopup = React.useCallback(() => {
    if (!seen) {
      writeFlag(STORAGE_SEEN, true);
      setSeen(true);
    }
    setIsPopupOpen(true);
  }, [seen]);

  const closePopup = React.useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  const dismissSticky = React.useCallback(() => {
    writeFlag(STORAGE_STICKY_HIDDEN, true);
    setStickyHidden(true);
  }, []);

  const handleClaim = React.useCallback(() => {
    writeFlag(STORAGE_CLAIMED, true);
    setClaimed(true);
  }, []);

  // Imperative open via custom event (kept for backward compat)
  React.useEffect(() => {
    const onOpen = () => openPopup();
    window.addEventListener('tenet:coupon:open', onOpen);
    return () => window.removeEventListener('tenet:coupon:open', onOpen);
  }, [openPopup]);

  const value: CouponState = {
    isPopupOpen,
    claimed,
    seen,
    stickyHidden,
    openPopup,
    closePopup,
    dismissSticky,
  };

  return (
    <CouponContext.Provider value={value}>
      {children}
      <CouponDialog onClaim={handleClaim} />
    </CouponContext.Provider>
  );
}

export function useCoupon() {
  const ctx = React.useContext(CouponContext);
  if (!ctx) throw new Error('useCoupon must be used inside CouponProvider');
  return ctx;
}

/** Programmatic open helper for non-React code. */
export function openCouponPopup() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('tenet:coupon:open'));
}

function CouponDialog({ onClaim }: { onClaim: () => void }) {
  const { isPopupOpen, closePopup } = useCoupon();
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (isPopupOpen) setSubmitted(false);
  }, [isPopupOpen]);

  // Lock scroll + ESC handler
  React.useEffect(() => {
    if (!isPopupOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closePopup();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [isPopupOpen, closePopup]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubmitted(true);
    onClaim();
    // TODO: wire to email marketing platform (Klaviyo)
  };

  return (
    <div
      aria-hidden={!isPopupOpen}
      className={`fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
        isPopupOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={closePopup}
        className="absolute inset-0 bg-black/85 backdrop-blur-sm"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="coupon-title"
        className={`relative w-full max-w-md rounded-2xl bg-ink-800 border border-ink-600 shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out ${
          isPopupOpen
            ? 'translate-y-0 scale-100 opacity-100'
            : 'translate-y-4 scale-[0.98] opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close"
          className="absolute top-3 right-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-bone-600 hover:text-white hover:bg-ink/60 transition-colors"
        >
          <X className="h-4 w-4" strokeWidth={1.75} />
        </button>

        <div className="px-6 pt-9 pb-7 sm:px-8 sm:pt-10 sm:pb-8">
          {!submitted ? (
            <>
              <p className="label-eyebrow mb-3">A note from us</p>
              <h3
                id="coupon-title"
                className="font-display text-4xl sm:text-5xl text-white tracking-[0.01em] leading-[0.95] mb-3"
              >
                Let Us
                <br />
                <span className="text-bone">Earn Your Trust</span>
              </h3>
              <p className="text-bone text-[15px] mb-1.5 font-medium">
                Get 20% off your first order.
              </p>
              <p className="text-bone-600 text-[13px] mb-6">
                Enter your email below — we'll send your code instantly.
              </p>

              <form onSubmit={onSubmit} noValidate className="space-y-3">
                <Field
                  label="Email"
                  type="email"
                  required
                  value={email}
                  onChange={setEmail}
                  placeholder="you@email.com"
                  autoComplete="email"
                />
                <Field
                  label="Phone (optional)"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  placeholder="(555) 123-4567"
                  autoComplete="tel"
                />
                <button
                  type="submit"
                  disabled={!email.includes('@')}
                  className="w-full h-12 rounded-xl bg-white text-ink font-condensed font-extrabold tracking-[0.16em] uppercase text-sm transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 focus-visible:ring-bone"
                >
                  Claim 20% Off
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="w-full text-center text-bone-500 text-xs tracking-[0.16em] uppercase font-semibold hover:text-bone-600 transition-colors py-2"
                >
                  No thanks
                </button>
              </form>

              <p className="text-bone-500 text-[10px] mt-3 leading-relaxed">
                By submitting, you agree to receive marketing emails.
                Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-success/15 text-success mb-4">
                <Check className="h-6 w-6" strokeWidth={2.5} />
              </span>
              <h3 className="font-display text-3xl text-white tracking-[0.01em] mb-2">
                Code on the way
              </h3>
              <p className="text-bone-600 text-sm mb-6">
                Check your inbox for your{' '}
                <span className="text-white">20% off</span> code.
              </p>
              <button
                type="button"
                onClick={closePopup}
                className="w-full h-12 rounded-xl bg-white text-ink font-condensed font-extrabold tracking-[0.16em] uppercase text-sm transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99]"
              >
                Keep Browsing
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  type,
  required,
  value,
  onChange,
  placeholder,
  autoComplete,
}: {
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  autoComplete?: string;
}) {
  const id = React.useId();
  return (
    <div>
      <label htmlFor={id} className="block label-eyebrow mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full h-12 rounded-lg bg-ink-700 border border-ink-600 px-4 text-bone placeholder:text-bone-500 outline-none transition-colors focus:border-bone-500 focus-visible:ring-2 focus-visible:ring-bone/20"
      />
    </div>
  );
}

/**
 * Sticky "FIRST TIME 20% OFF" button — appears after popup dismissal
 * (until user claims OR explicitly dismisses the button itself).
 */
export function StickyDiscountButton() {
  const { seen, claimed, stickyHidden, openPopup, dismissSticky } = useCoupon();
  const [mounted, setMounted] = React.useState(false);

  // Hydration safety
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const show = mounted && seen && !claimed && !stickyHidden;

  return (
    <div
      aria-hidden={!show}
      className={`fixed bottom-6 right-6 z-40 transition-all duration-500 ease-out ${
        show
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="relative">
        <button
          type="button"
          onClick={openPopup}
          className="inline-flex items-center gap-2 h-12 pl-4 pr-10 rounded-full bg-white text-ink font-condensed text-xs font-extrabold tracking-[0.14em] uppercase transition-all duration-200 hover:scale-[1.03] hover:bg-bone active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        >
          <Gift className="h-4 w-4" strokeWidth={2.25} />
          First Time 20% Off
        </button>
        <button
          type="button"
          onClick={dismissSticky}
          aria-label="Dismiss offer"
          className="absolute top-1/2 right-1.5 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full text-ink/60 hover:text-ink hover:bg-ink/10 transition-colors"
        >
          <X className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
