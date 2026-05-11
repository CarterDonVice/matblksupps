'use client';

import * as React from 'react';
import { reviews as seedReviews, tenet } from '@/lib/products';
import type { Review } from '@/lib/types';

const STORAGE_KEY = 'tenet:reviews';

interface ReviewsValue {
  /** All reviews — user-submitted first, then seed reviews */
  reviews: Review[];
  /** Aggregate rating (average of all stars) */
  averageRating: number;
  /** Total count */
  count: number;
  /** Append a new user-submitted review */
  addReview: (input: Omit<Review, 'id' | 'date' | 'verified'>) => void;
}

const ReviewsContext = React.createContext<ReviewsValue | null>(null);

export function ReviewsProvider({ children }: { children: React.ReactNode }) {
  const [userReviews, setUserReviews] = React.useState<Review[]>([]);

  // Hydrate from localStorage on mount
  React.useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed: unknown = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        setUserReviews(parsed as Review[]);
      }
    } catch {
      /* noop — bad json shouldn't kill the app */
    }
  }, []);

  // Persist whenever user reviews change
  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userReviews));
    } catch {
      /* noop */
    }
  }, [userReviews]);

  const reviews = React.useMemo(
    () => [...userReviews, ...seedReviews],
    [userReviews],
  );

  const summary = React.useMemo(() => {
    if (reviews.length === 0) {
      return { averageRating: tenet.averageRating, count: tenet.reviewCount };
    }
    const total = reviews.reduce((sum, r) => sum + r.stars, 0);
    return {
      averageRating: total / reviews.length,
      count: reviews.length,
    };
  }, [reviews]);

  const addReview = React.useCallback(
    (input: Omit<Review, 'id' | 'date' | 'verified'>) => {
      setUserReviews((prev) => [
        {
          ...input,
          id: `user-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
          date: new Date().toISOString().slice(0, 10),
          verified: false,
        },
        ...prev,
      ]);
    },
    [],
  );

  const value: ReviewsValue = {
    reviews,
    averageRating: summary.averageRating,
    count: summary.count,
    addReview,
  };

  return (
    <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
  );
}

export function useReviews() {
  const ctx = React.useContext(ReviewsContext);
  if (!ctx) throw new Error('useReviews must be used inside ReviewsProvider');
  return ctx;
}
