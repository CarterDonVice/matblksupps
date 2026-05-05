'use client';

import * as React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export function NewsletterSignup() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const inputId = React.useId();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setSubmitted(true);
    // TODO: wire to email marketing platform (Klaviyo)
  };

  return (
    <section
      aria-labelledby="newsletter"
      className="relative bg-ink-800 py-14 sm:py-20 border-t border-ink-600 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 texture-wordmark opacity-30 pointer-events-none"
      />
      <div className="container relative">
        <div className="max-w-xl mx-auto text-center space-y-5">
          <p className="label-eyebrow">Members Only</p>
          <h2
            id="newsletter"
            className="font-display text-4xl sm:text-5xl text-white tracking-[0.01em] leading-[0.95]"
          >
            The Blacklist
          </h2>
          <p className="text-bone-600 text-[15px] max-w-md mx-auto">
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
              className="mt-2 flex flex-col sm:flex-row gap-2.5 max-w-md mx-auto"
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
          <p className="text-bone-500 text-[10px] max-w-md mx-auto leading-relaxed">
            By signing up you agree to receive marketing emails. Unsubscribe
            anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
