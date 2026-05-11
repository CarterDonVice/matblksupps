'use client';

import * as React from 'react';
import { ShieldCheck, ArrowDown, ArrowRight, Check } from 'lucide-react';
import { scrollToId } from '@/lib/scroll';

/**
 * Combined banner — Satisfaction Guarantee + Blacklist newsletter.
 * Mobile: stacked, two visually distinct panels.
 * Desktop (lg+): side-by-side, single banner with vertical divider.
 */
export function GuaranteeAndBlacklist() {
  return (
    <section
      aria-label="Guarantee and newsletter"
      className="relative bg-ink-800 border-y border-ink-600 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 texture-wordmark opacity-30 pointer-events-none"
      />
      <div className="container relative">
        <div className="lg:grid lg:grid-cols-2">
          <GuaranteePanel />
          <BlacklistPanel />
        </div>
      </div>
    </section>
  );
}

function GuaranteePanel() {
  return (
    <div className="py-14 sm:py-20 lg:py-16 lg:pr-10 xl:pr-14 border-b border-ink-600 lg:border-b-0 lg:border-r">
      <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left space-y-5">
        <span className="inline-flex h-14 w-14 lg:h-12 lg:w-12 items-center justify-center rounded-full border border-bone-500/40 bg-ink/40">
          <ShieldCheck
            className="h-7 w-7 lg:h-6 lg:w-6 text-white"
            strokeWidth={1.5}
          />
        </span>

        <h2
          id="guarantee"
          className="font-display text-3xl sm:text-5xl lg:text-4xl xl:text-5xl text-white tracking-[0.01em] leading-[0.95]"
        >
          100% Satisfaction
          <br />
          Guaranteed
        </h2>

        <p className="text-bone text-[15px] sm:text-base lg:text-[15px] max-w-md leading-relaxed">
          Try TENET. If you don't feel the difference, we'll refund you. No
          hoops. No questions.
        </p>

        <p className="text-bone-600 text-[13px] sm:text-sm max-w-md leading-relaxed">
          We back every tub with a 30-day satisfaction guarantee. If TENET
          doesn't perform like we say it does, contact us for a full refund —
          even if the tub is empty.
        </p>

        <div className="pt-1 flex justify-center lg:justify-start">
          <button
            type="button"
            onClick={() => scrollToId('purchase')}
            className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 focus-visible:ring-bone shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
          >
            Shop TENET Risk-Free
            <ArrowDown className="h-4 w-4" strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </div>
  );
}

function BlacklistPanel() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const inputId = React.useId();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubmitted(true);
  };

  return (
    <div className="py-14 sm:py-20 lg:py-16 lg:pl-10 xl:pl-14">
      <div className="max-w-md mx-auto lg:mx-0 text-center lg:text-left space-y-5">
        <p className="label-eyebrow">Members Only</p>
        <h2
          id="newsletter"
          className="font-display text-3xl sm:text-5xl lg:text-4xl xl:text-5xl text-white tracking-[0.01em] leading-[0.95]"
        >
          The Blacklist
        </h2>
        <p className="text-bone-600 text-[15px] max-w-md leading-relaxed">
          First access to drops, restocks, and exclusive offers. Members only.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 mt-2 text-bone">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-success/15 text-success">
              <Check className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="font-medium">You're on the list.</span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto lg:mx-0"
            noValidate
          >
            <label htmlFor={inputId} className="sr-only">
              Email address
            </label>
            <input
              id={inputId}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              autoComplete="email"
              required
              className="flex-1 h-12 rounded-xl bg-ink border border-ink-600 px-4 text-bone placeholder:text-bone-500 outline-none transition-colors focus:border-bone-500 focus-visible:ring-2 focus-visible:ring-bone/20"
            />
            <button
              type="submit"
              disabled={!email.includes('@')}
              className="h-12 px-5 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase inline-flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 focus-visible:ring-bone"
            >
              Join the Blacklist
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </button>
          </form>
        )}

        <p className="text-bone-500 text-[10px] max-w-md leading-relaxed">
          By signing up you agree to receive marketing emails. Unsubscribe
          anytime.
        </p>
      </div>
    </div>
  );
}
