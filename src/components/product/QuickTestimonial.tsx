import { BadgeCheck } from 'lucide-react';
import { StarRow } from '@/components/ui/StarSharp';

/**
 * Compact pull-quote card. Shown beneath the trust badges in the
 * purchase block to fill the right-column space on desktop.
 */
export function QuickTestimonial() {
  return (
    <figure className="relative rounded-xl border border-ink-600 bg-ink-800/60 p-5">
      <span
        aria-hidden
        className="absolute top-2 right-3 font-display text-6xl text-ink-700 leading-none select-none pointer-events-none"
      >
        "
      </span>
      <StarRow rating={5} size={14} className="mb-3" />
      <blockquote>
        <p className="text-bone text-[14px] leading-relaxed italic">
          Smoothest pre-workout I've used daily for months. No crash, real
          pumps.
        </p>
      </blockquote>
      <figcaption className="mt-3 pt-3 border-t border-ink-600 flex items-center justify-between gap-3 text-[11px]">
        <span className="font-condensed font-extrabold tracking-[0.16em] uppercase text-white">
          — Marcus T.
        </span>
        <span className="inline-flex items-center gap-1 text-success tracking-[0.16em] uppercase font-semibold text-[10px]">
          <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2} />
          Verified
        </span>
      </figcaption>
    </figure>
  );
}
