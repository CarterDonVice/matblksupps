'use client';

import * as React from 'react';
import {
  Plus,
  ChevronDown,
  Search,
  X,
  SlidersHorizontal,
} from 'lucide-react';
import { useReviews } from '@/contexts/ReviewsContext';
import type { Review } from '@/lib/types';
import { WriteReviewModal } from './WriteReviewModal';
import { StarRow, StarSharp } from '@/components/ui/StarSharp';

type SortKey = 'recent' | 'highest' | 'lowest';

const sortOptions: { id: SortKey; label: string }[] = [
  { id: 'recent', label: 'Most Recent' },
  { id: 'highest', label: 'Highest Rated' },
  { id: 'lowest', label: 'Lowest Rated' },
];

const PAGE_SIZE = 3;

export function CustomerReviews() {
  const { reviews, averageRating, count, addReview } = useReviews();

  const [sort, setSort] = React.useState<SortKey>('recent');
  const [search, setSearch] = React.useState('');
  const [stars, setStars] = React.useState<Set<number>>(new Set());
  const [visibleCount, setVisibleCount] = React.useState(PAGE_SIZE);
  const [modalOpen, setModalOpen] = React.useState(false);

  const filtered = React.useMemo(() => {
    let r = [...reviews];

    if (stars.size > 0) {
      r = r.filter((rev) => stars.has(rev.stars));
    }

    const q = search.trim().toLowerCase();
    if (q) {
      r = r.filter(
        (rev) =>
          (rev.title?.toLowerCase().includes(q) ?? false) ||
          rev.body.toLowerCase().includes(q) ||
          rev.author.toLowerCase().includes(q),
      );
    }

    if (sort === 'recent') {
      r.sort((a, b) => +new Date(b.date) - +new Date(a.date));
    } else if (sort === 'highest') {
      r.sort((a, b) => b.stars - a.stars || +new Date(b.date) - +new Date(a.date));
    } else {
      r.sort((a, b) => a.stars - b.stars || +new Date(b.date) - +new Date(a.date));
    }

    return r;
  }, [reviews, stars, search, sort]);

  React.useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [search, stars, sort]);

  const visible = filtered.slice(0, visibleCount);
  const remaining = filtered.length - visibleCount;
  const hasMore = remaining > 0;
  const isFiltered = stars.size > 0 || search.trim().length > 0;

  const toggleStar = (n: number) => {
    setStars((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  };

  const clearFilters = () => {
    setStars(new Set());
    setSearch('');
  };

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
          <div className="flex items-center gap-3 flex-wrap">
            <StarRow rating={averageRating} size={18} />
            <span className="font-display text-2xl text-white">
              {averageRating.toFixed(1)}
            </span>
            <span className="text-bone-600 text-sm">
              based on <span className="text-bone">{count}</span> verified reviews
            </span>
          </div>
        </header>

        <div className="mb-3 space-y-3">
          <SearchInput value={search} onChange={setSearch} />
          <div className="flex items-center gap-2 flex-wrap">
            <StarFilter
              stars={stars}
              onToggle={toggleStar}
              onClearAll={() => setStars(new Set())}
            />
            <div className="ml-auto">
              <SortDropdown sort={sort} onChange={setSort} />
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <p className="text-bone-500 text-[12px]">
              Showing{' '}
              <span className="text-bone font-medium">{filtered.length}</span> of{' '}
              <span className="text-bone font-medium">{reviews.length}</span> reviews
            </p>
            {isFiltered && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-bone-600 hover:text-bone text-[11px] tracking-[0.16em] uppercase font-semibold transition-colors inline-flex items-center gap-1"
              >
                <X className="h-3 w-3" strokeWidth={2.25} />
                Clear filters
              </button>
            )}
          </div>
        </div>

        <div className="divide-y divide-ink-600 border-y border-ink-600 mt-3">
          {visible.length === 0 ? (
            <div className="py-12 text-center space-y-2">
              <SlidersHorizontal
                className="h-6 w-6 text-bone-500 mx-auto"
                strokeWidth={1.5}
              />
              <p className="text-bone-600 text-sm">
                No reviews match your filters.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="text-bone hover:text-white text-xs tracking-[0.16em] uppercase font-semibold transition-colors underline underline-offset-4 decoration-ink-600"
              >
                Clear filters
              </button>
            </div>
          ) : (
            visible.map((r) => <ReviewRow key={r.id} review={r} />)
          )}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
          {visible.length > 0 && hasMore ? (
            <button
              type="button"
              onClick={() => setVisibleCount((c) => Math.min(c + PAGE_SIZE, filtered.length))}
              className={whitePill}
            >
              Show {Math.min(remaining, PAGE_SIZE)} More
              <ChevronDown className="h-4 w-4" strokeWidth={2.25} />
            </button>
          ) : visible.length > 0 && visibleCount > PAGE_SIZE ? (
            <button
              type="button"
              onClick={() => setVisibleCount(PAGE_SIZE)}
              className={whitePill}
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
            className={whitePill}
          >
            <Plus className="h-4 w-4" strokeWidth={2.25} />
            Write a Review
          </button>
        </div>
      </div>

      <WriteReviewModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={addReview}
      />
    </section>
  );
}

const whitePill =
  'inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white text-ink font-condensed text-xs font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone';

function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <Search
        className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-bone-500 pointer-events-none"
        strokeWidth={1.75}
      />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search reviews..."
        aria-label="Search reviews"
        className="w-full h-11 pl-10 pr-9 rounded-xl bg-ink-800 border border-ink-600 text-bone placeholder:text-bone-500 text-sm outline-none transition-colors focus:border-bone-500 focus-visible:ring-2 focus-visible:ring-bone/20"
      />
      {value && (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => onChange('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full text-bone-500 hover:text-bone hover:bg-ink-700 transition-colors"
        >
          <X className="h-3.5 w-3.5" strokeWidth={2} />
        </button>
      )}
    </div>
  );
}

function StarFilter({
  stars,
  onToggle,
  onClearAll,
}: {
  stars: Set<number>;
  onToggle: (n: number) => void;
  onClearAll: () => void;
}) {
  const allActive = stars.size === 0;
  return (
    <div
      className="flex items-center gap-1.5 flex-wrap"
      role="group"
      aria-label="Filter by rating"
    >
      <FilterPill active={allActive} onClick={onClearAll}>
        All
      </FilterPill>
      {[5, 4, 3, 2, 1].map((n) => (
        <FilterPill key={n} active={stars.has(n)} onClick={() => onToggle(n)}>
          <span className="inline-flex items-center gap-0.5">
            {n}
            <StarSharp size={10} className="text-current" />
          </span>
        </FilterPill>
      ))}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        'shrink-0 inline-flex items-center px-2.5 sm:px-3 h-8 rounded-full text-[11px] font-semibold tracking-[0.12em] uppercase transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone',
        active
          ? 'bg-bone text-ink'
          : 'bg-ink-800 text-bone-600 border border-ink-600 hover:text-bone hover:border-bone-500',
      ].join(' ')}
    >
      {children}
    </button>
  );
}

function SortDropdown({
  sort,
  onChange,
}: {
  sort: SortKey;
  onChange: (s: SortKey) => void;
}) {
  return (
    <div className="relative shrink-0">
      <select
        value={sort}
        onChange={(e) => onChange(e.target.value as SortKey)}
        aria-label="Sort reviews"
        className="appearance-none h-8 pl-3 pr-8 rounded-full bg-ink-800 border border-ink-600 text-bone text-[11px] font-semibold tracking-[0.14em] uppercase cursor-pointer hover:border-bone-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone"
      >
        {sortOptions.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-bone-500 pointer-events-none"
        strokeWidth={1.75}
      />
    </div>
  );
}

function ReviewRow({ review }: { review: Review }) {
  return (
    <article className="grid grid-cols-[auto_1fr] sm:grid-cols-[80px_1fr_auto] gap-x-4 sm:gap-x-6 gap-y-2 py-5 sm:py-6">
      <div className="row-start-1 col-start-1 sm:col-start-1 flex items-start pt-0.5">
        <StarRow rating={review.stars} size={14} />
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
