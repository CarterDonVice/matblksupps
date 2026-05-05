'use client';

import { ShieldCheck, ArrowDown } from 'lucide-react';
import { scrollToId } from '@/lib/scroll';

export function GuaranteeSection() {
  return (
    <section
      aria-labelledby="guarantee"
      className="relative bg-ink-800 border-y border-ink-600 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 texture-wordmark opacity-30 pointer-events-none"
      />
      <div className="container relative py-16 sm:py-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <span className="inline-flex h-16 w-16 sm:h-[72px] sm:w-[72px] items-center justify-center rounded-full border border-bone-500/40 bg-ink/40">
            <ShieldCheck
              className="h-8 w-8 sm:h-9 sm:w-9 text-white"
              strokeWidth={1.5}
            />
          </span>

          <h2
            id="guarantee"
            className="font-display text-4xl sm:text-6xl text-white tracking-[0.01em] leading-[0.95]"
          >
            100% Satisfaction
            <br />
            Guaranteed
          </h2>

          <p className="text-bone text-[16px] sm:text-lg max-w-xl mx-auto leading-relaxed">
            Try TENET. If you don't feel the difference, we'll refund you.
            <br className="hidden sm:block" /> No hoops. No questions.
          </p>

          <p className="text-bone-600 text-sm sm:text-[15px] max-w-md mx-auto leading-relaxed">
            We back every tub with a 30-day satisfaction guarantee. If TENET
            doesn't perform like we say it does, contact us for a full refund —
            even if the tub is empty. That's how confident we are.
          </p>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => scrollToId('purchase')}
              className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 focus-visible:ring-bone shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
            >
              Shop TENET Risk-Free
              <ArrowDown className="h-4 w-4" strokeWidth={2.25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
