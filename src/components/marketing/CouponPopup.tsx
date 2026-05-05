'use client';

import * as React from 'react';
import { X, Check } from 'lucide-react';

const STORAGE_DISMISSED = 'matblk_coupon_dismissed';
const STORAGE_CLAIMED = 'matblk_coupon_claimed';
const AUTO_DELAY_MS = 9000;

type Source = 'auto' | 'add-to-cart';

interface CouponContextValue {
  open: (src?: Source) => void;
  close: () => void;
  isClaimed: boolean;
}

const CouponPopupContext = React.createContext<CouponContextValue | null>(null);

export function useCouponPopup() {
  const ctx = React.useContext(CouponPopupContext);
  if (!ctx) throw new Error('useCouponPopup must be used inside CouponPopup');
  return ctx;
}

export function CouponPopup() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [source, setSource] = React.useState<Source>('auto');
  const [submitted, setSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [isClaimed, setIsClaimed] = React.useState(false);
  const dialogRef = React.useRef<HTMLDivElement>(null);

  // Init from storage
  React.useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_CLAIMED) === '1') setIsClaimed(true);
    } catch {/* noop */}
  }, []);

  // Auto-trigger
  React.useEffect(() => {
    let dismissed = false;
    try {
      dismissed =
        sessionStorage.getItem(STORAGE_DISMISSED) === '1' ||
        sessionStorage.getItem(STORAGE_CLAIMED) === '1';
    } catch {/* noop */}
    if (dismissed) return;

    const t = window.setTimeout(() => {
      setSource('auto');
      setIsOpen(true);
    }, AUTO_DELAY_MS);
    return () => window.clearTimeout(t);
  }, []);

  // Lock scroll & ESC handler
  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Provide imperative API via global custom event so
  // any client component (e.g. StickyAddToCart) can trigger.
  React.useEffect(() => {
    const onOpen = (e: Event) => {
      const ce = e as CustomEvent<{ source?: Source }>;
      setSource(ce.detail?.source ?? 'add-to-cart');
      setIsOpen(true);
    };
    window.addEventListener('matblk:coupon:open', onOpen as EventListener);
    return () =>
      window.removeEventListener('matblk:coupon:open', onOpen as EventListener);
  }, []);

  const close = React.useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_DISMISSED, '1');
    } catch {/* noop */}
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubmitted(true);
    setIsClaimed(true);
    try {
      sessionStorage.setItem(STORAGE_CLAIMED, '1');
    } catch {/* noop */}
    // TODO: wire to email marketing platform (Klaviyo)
    // TODO: redirect to Shopify checkout for `add-to-cart` source
  };

  return (
    <CouponPopupContext.Provider
      value={{
        open: (s) => {
          setSource(s ?? 'add-to-cart');
          setIsOpen(true);
        },
        close,
        isClaimed,
      }}
    >
      {/* No children needed; provider is rendered at root */}
      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={close}
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        />

        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="coupon-title"
          className={`relative w-full max-w-md rounded-2xl bg-ink-800 border border-ink-600 shadow-[0_30px_80px_rgba(0,0,0,0.6)] transition-all duration-300 ease-out ${
            isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-4 scale-[0.98] opacity-0'
          }`}
        >
          <button
            type="button"
            onClick={close}
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

                <form onSubmit={onSubmit} className="space-y-3" noValidate>
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
                    onClick={close}
                    className="w-full text-center text-bone-500 text-xs tracking-[0.16em] uppercase font-semibold hover:text-bone-600 transition-colors py-2"
                  >
                    No thanks
                  </button>
                </form>

                <p className="text-bone-500 text-[10px] mt-3 leading-relaxed">
                  By submitting, you agree to receive marketing emails. Unsubscribe
                  anytime.
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
                  Check your inbox for your <span className="text-white">20% off</span>{' '}
                  code.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    if (source === 'add-to-cart') {
                      // TODO: redirect to Shopify checkout once API keys are wired up.
                      // window.location.href = '/checkout';
                    }
                  }}
                  className="w-full h-12 rounded-xl bg-white text-ink font-condensed font-extrabold tracking-[0.16em] uppercase text-sm transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99]"
                >
                  {source === 'add-to-cart' ? 'Continue to Checkout' : 'Keep Browsing'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </CouponPopupContext.Provider>
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

/** Programmatic open from anywhere on the client. */
export function openCouponPopup(source: 'auto' | 'add-to-cart' = 'add-to-cart') {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent('matblk:coupon:open', { detail: { source } }),
  );
}
