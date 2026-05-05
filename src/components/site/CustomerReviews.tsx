'use client';

import * as React from 'react';
import { Star, Plus, ChevronDown } from 'lucide-react';
import { reviews as seedReviews, tenet } from '@/lib/products';
import type { Review } from '@/lib/types';
import { WriteReviewModal } from './WriteReviewModal';

type SortKey = 'recent' | 'highest' | 'lowest';

const sortOptions: { id: SortKey; label: string }[] = [
  { id: 'recent', label: 'Most Recent' },
  { id: 'highest', label: 'Highest Rated' },
  { id: 'lowest', label: 'Lowest Rated' },
];

const PAGE_SIZE = 3;

export function CustomerReviews() {
  const [sort, setSort] = React.useState<SortKey>('recent');
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);
  const [userReviews, setUserReviews] = React.useState<Review[]>([]);
  const [modalOpen, setModalOpen] = React.useState(false);

  const allReviews = React.useMemo(
    () => [...userReviews, ...seedReviews],
    [userReviews],
  );

  const sorted = React.useMemo(() => {
    const r = [...allReviews];
    if (sort === 'recent') {
      r.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    } else if (sort === 'highest') {
      r.sort((a, b) => b.stars - a.stars || +new Date(b.date) - +new Date(a.date));
    } else {
      r.sort((a, b) => a.stars - b.stars || +new Date(b.date) - +new Date(a.date));
    }
    return r;
  }, [sort, allReviews]);

  const visible = sorted.slice(0, visibleCount);
  const remaining = sorted.length - visibleCount;
  const hasMore = remaining > 0;

  // Aggregate rating includes user-submitted reviews
  const ratingSummary = React.useMemo(() => {
    if (allReviews.length === 0) {
      return {
        rating: tenet.averageRating,
        count: tenet.reviewCount,
      };
    }
    const total = allReviews.reduce((sum, r) => sum + r.stars, 0);
    return {
      rating: total / allReviews.length,
      count: allReviews.length,
    };
  }, [allReviews]);

  const handleSubmit = (r: Review) => {
    setUserReviews((prev) => [r, ...prev]);
    setVisibleCount((c) => Math.max(c, 1));
  };

  const showMore = () => {
    setVisibleCount((c) => Math.min(c + PAGE_SIZE, sorted.length));
  };

  const showLess = () => setVisibleCount(PAGE_SIZE);

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
          <RatingSummary rating={ratingSummary.rating} count={ratingSummary.count} />
        </header>

        {/* Filter bar */}
        <div className="flex items-center gap-2 mb-6 -mx-5 px-5 overflow-x-auto scrollbar-hide">
          <span className="label-eyebrow shrink-0 mr-2">Sort by</span>
          {sortOptions.map((opt) => (
            <button
              key={opt.id}
              type="button"
              onClick={() => {
                setSort(opt.id);
                setVisibleCount(PAGE_SIZE);
              }}
              aria-pressed={sort === opt.id}
              className={[
                'shrink-0 inline-flex items-center px-3.5 h-8 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-200',
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

        {/* Footer actions: Show More + Write a Review */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
          {hasMore ? (
            <button
              type="button"
              onClick={showMore}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white text-ink font-condensed text-xs font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone"
            >
              Show {Math.min(remaining, PAGE_SIZE)} More
              <ChevronDown className="h-4 w-4" strokeWidth={2.25} />
            </button>
          ) : visibleCount > PAGE_SIZE ? (
            <button
              type="button"
              onClick={showLess}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white text-ink font-condensed text-xs font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone"
            >
              Show Less
              <ChevronDown className="h-4 w-4 rotate-180" strokeWidth={2.25} />
            </button>
          ) : (
            <span className="hidden sm:block" />
          )}

          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white text-ink font-condensed text-xs font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone"
          >
            <Plus className="h-4 w-4" strokeWidth={2.25} />
            Write a Review
          </button>
        </div>
      </div>

      <WriteReviewModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
      />
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
      <div className="row-start-1 col-start-1 sm:col-start-1 flex items-start pt-0.5">
        <Stars rating={review.stars} />
      </div>

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
