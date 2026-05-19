'use client';

import * as React from 'react';
import { ProductGallery } from './ProductGallery';
import { PurchaseBlock } from './PurchaseBlock';
import { NutritionFacts } from './NutritionFacts';
import { tenet } from '@/lib/products';
import { useReviews } from '@/contexts/ReviewsContext';
import { scrollToId } from '@/lib/scroll';
import { StarRow } from '@/components/ui/StarSharp';
import { FillerBand } from '@/components/site/FillerBand';

export function Hero() {
  const product = tenet;
  const { averageRating, count } = useReviews();

  return (
    <section
      aria-label="Product hero"
      className="relative bg-ink isolate overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 texture-grain opacity-60"
      />

      <div className="container pt-2 pb-10 sm:pt-6 sm:pb-14">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* LEFT COLUMN — gallery + (desktop-only) static nutrition facts */}
          <div>
            <ProductGallery
              images={product.images}
              alt={`${product.name} pre-workout`}
            />
            <NutritionFacts
              variant="static"
              className="hidden lg:block mt-6"
            />
          </div>

          {/* RIGHT COLUMN — title + meta + purchase block */}
          <div className="mt-8 lg:mt-2 max-w-md mx-auto lg:mx-0 space-y-5 lg:space-y-3">
            <div>
              <p className="label-eyebrow mb-3 lg:mb-2">Pre-Workout</p>
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white tracking-[0.01em] leading-[0.9]">
                TENET
                <span className="sr-only">
                  {' '}Daily Driver Pre-Workout — Clinically Dosed, Transparent
                  Label, Moderate-Stim
                </span>
              </h1>
              <p className="mt-3 lg:mt-2 font-condensed text-base sm:text-lg font-bold tracking-[0.18em] uppercase text-bone-600">
                Full Stack Daily Driver
              </p>
            </div>

            <button
              type="button"
              onClick={() => scrollToId('reviews')}
              aria-label={`Read ${count} verified reviews — average ${averageRating.toFixed(1)} stars`}
              className="group flex items-center gap-3 flex-wrap pt-1 -mx-1 px-1 py-1 rounded-md transition-colors hover:bg-ink-800/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone text-left"
            >
              <StarRow rating={averageRating} size={21} />
              <span className="text-bone-600 text-xs group-hover:text-bone transition-colors">
                <span className="text-bone font-medium">
                  {averageRating.toFixed(1)}
                </span>{' '}
                · {count} verified reviews
              </span>
              <span aria-hidden className="text-bone-500">·</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-bone-600">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                In Stock
              </span>
            </button>

            {/* Sub-hero trust line (Band 1) — left-aligned with TENET title */}
            <p className="pt-1 text-left font-condensed font-bold tracking-[0.18em] uppercase text-bone-600 text-[11px] sm:text-[12px]">
              Clinically Dosed. Transparent Formula. Made in USA.
            </p>

            {/* Anchor for Guarantee CTA */}
            <div id="purchase" className="scroll-mt-20 pt-2 lg:pt-1">
              <PurchaseBlock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
