'use client';

import * as React from 'react';
import { Star } from 'lucide-react';
import { reviews, blackoutDailyDriver } from '@/lib/products';
import type { Review } from '@/lib/types';

type SortKey = 'recent' | 'highest' | 'lowest';

const sortOptions: { id: SortKey; label: string }[] = [
  { id: 'recent', label: 'Most Recent' },
  { id: 'highest', label: 'Highest Rated' },
  { id: 'lowest', label: 'Lowest Rated' },
];

const INITIAL_VISIBLE = 3;

export function CustomerReviews() {
  const [sort, setSort] = React.useState<SortKey>('recent');
  const [showAll, setShowAll] = React.useState(false);

  const sorted = React.useMemo(() => {
    const r = [...reviews];
    if (sort === 'recent') {
      r.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    } else if (sort === 'highest') {
      r.sort((a, b) => b.stars - a.stars || +new Date(b.date) - +new Date(a.date));
    } else {
      r.sort((a, b) => a.stars - b.stars || +new Date(b.date) - +new Date(a.date));
    }
    return r;
  }, [sort]);

  const visible = showAll ? sorted : sorted.slice(0, INITIAL_VISIBLE);
  const hidden = sorted.length - INITIAL_VISIBLE;

  return (
    <section
      aria-labelledby="reviews"
      className="bg-ink py-16 sm:py-24 border-t border-ink-600"
    >
      <div className="container max-w-3xl">
        <header className="mb-8 sm:mb-10">
          <p className="label-eyebrow mb-3">Reviews</p>
          <h2
            id="reviews"
            className="font-display text-5xl sm:text-6xl text-white tracking-[0.01em] leading-[0.92] mb-5"
          >
            What They're Saying
          </h2>
          <RatingSummary
            rating={blackoutDailyDriver.averageRating}
            count={blackoutDailyDriver.reviewCount}
          />
        </header>

        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-6 -mx-5 px-5 overflow-x-auto scrollbar-hide">
          <span className="label-eyebrow shrink-0 mr-2">Sort by</span>
          {sortOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => setSort(opt.id)}
              aria-pressed={sort === opt.id}
              className={[
                'shrink-0 inline-flex items-center px-3.5 h-8 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone',
                sort === opt.id
                  ? 'bg-bone text-ink'
                  : 'bg-ink-800 text-bone-600 border border-ink-600 hover:text-bone hover:border-bone-500',
              ].join(' ')}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Stacked rows */}
        <div className="divide-y divide-ink-600 border-y border-ink-600">
          {visible.map((r) => (
            <ReviewRow key={r.id} review={r} />
          ))}
        </div>

        {/* Footer actions */}
        <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
          {hidden > 0 && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="text-bone hover:text-white text-xs tracking-[0.16em] uppercase font-semibold transition-colors underline underline-offset-4 decoration-ink-600"
            >
              {showAll ? 'Show Less' : `Show ${hidden} More`}
            </button>
          )}
          <button
            type="button"
            className="ml-auto inline-flex items-center h-10 px-5 rounded-lg border border-bone-500/40 text-bone hover:text-white hover:border-bone-500 transition-colors text-xs tracking-[0.16em] uppercase font-semibold"
          >
            Write a Review
          </button>
        </div>
      </div>
    </section>
  );
}

function RatingSummary({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Stars rating={rating} size="lg" />
      <span className="font-display text-2xl text-white">
        {rating.toFixed(1)}
      </span>
      <span className="text-bone-600 text-sm">
        based on <span className="text-bone">{count}</span> verified reviews
      </span>
    </div>
  );
}

function Stars({ rating, size = 'md' }: { rating: number; size?: 'md' | 'lg' }) {
  const cls = size === 'lg' ? 'h-4 w-4' : 'h-3.5 w-3.5';
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(rating);
        return (
          <Star
            key={i}
            className={`${cls} ${filled ? 'text-bone fill-bone' : 'text-bone-500'}`}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}

function ReviewRow({ review }: { review: Review }) {
  return (
    <article className="grid grid-cols-[auto_1fr] sm:grid-cols-[80px_1fr_auto] gap-x-4 sm:gap-x-6 gap-y-2 py-5 sm:py-6">
      {/* Stars (left) */}
      <div className="row-start-1 col-start-1 sm:col-start-1 flex items-start pt-0.5">
        <Stars rating={review.stars} />
      </div>

      {/* Title + body (center) */}
      <div className="col-start-2 sm:col-start-2 sm:row-start-1 sm:row-span-2">
        {review.title && (
          <h3 className="font-condensed text-[15px] sm:text-base font-extrabold tracking-[0.04em] uppercase text-white leading-snug mb-1.5">
            {review.title}
          </h3>
        )}
        <p className="text-bone-600 text-[14px] sm:text-[15px] leading-relaxed">
          "{review.body}"
        </p>
      </div>

      {/* Author + date (right on desktop, below on mobile) */}
      <div className="col-start-2 sm:col-start-3 sm:row-start-1 sm:row-span-2 sm:text-right text-[12px] sm:text-xs space-y-0.5 sm:pl-3">
        <div className="text-bone font-medium">{review.author}</div>
        <time className="text-bone-500 block" dateTime={review.date}>
          {new Date(review.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
        {review.verified && (
          <span className="text-success text-[10px] tracking-[0.18em] uppercase font-semibold">
            ✓ Verified
          </span>
        )}
      </div>
    </article>
  );
}
