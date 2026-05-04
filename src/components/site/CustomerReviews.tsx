'use client';

import * as React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '@/lib/products';
import { blackoutDailyDriver } from '@/lib/products';

export function CustomerReviews() {
  return (
    <section
      aria-labelledby="reviews"
      className="bg-ink py-16 sm:py-24"
    >
      <div className="container">
        <header className="max-w-2xl mb-8 sm:mb-12">
          <p className="label-eyebrow mb-3">Reviews</p>
          <h2
            id="reviews"
            className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92] mb-5"
          >
            What
            <br />
            <span className="text-bone">They're Saying</span>
          </h2>
          <RatingSummary
            rating={blackoutDailyDriver.averageRating}
            count={blackoutDailyDriver.reviewCount}
          />
        </header>

        {/* Mobile: horizontal scroll. Desktop: grid */}
        <div className="md:hidden -mx-5">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-5 pb-2">
            {reviews.map((r) => (
              <div
                key={r.id}
                className="snap-center shrink-0 w-[80%] max-w-[320px]"
              >
                <ReviewCard review={r} />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            className="text-bone-600 text-sm tracking-[0.16em] uppercase font-semibold hover:text-bone transition-colors underline-offset-4 underline decoration-ink-600"
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
    <div className="flex items-center gap-3">
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

function Stars({
  rating,
  size = 'md',
}: {
  rating: number;
  size?: 'md' | 'lg';
}) {
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

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <article className="h-full rounded-xl border border-ink-600 bg-ink-800 p-5 flex flex-col">
      <Stars rating={review.stars} />
      {review.title && (
        <h3 className="mt-3 font-condensed text-lg font-extrabold tracking-[0.04em] uppercase text-white leading-snug">
          {review.title}
        </h3>
      )}
      <p className="mt-2 text-bone-600 text-sm leading-relaxed flex-1">
        "{review.body}"
      </p>
      <footer className="mt-4 pt-4 border-t border-ink-600 flex items-center justify-between text-xs">
        <div className="text-bone font-medium">
          {review.author}
          {review.verified && (
            <span className="ml-2 text-success text-[10px] tracking-[0.18em] uppercase font-semibold">
              · Verified
            </span>
          )}
        </div>
        <time className="text-bone-500" dateTime={review.date}>
          {new Date(review.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </time>
      </footer>
    </article>
  );
}
