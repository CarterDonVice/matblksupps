'use client';

import * as React from 'react';
import { Star } from 'lucide-react';
import { ProductGallery } from './ProductGallery';
import { PurchaseBlock } from './PurchaseBlock';
import { blackoutDailyDriver } from '@/lib/products';

export function Hero() {
  const product = blackoutDailyDriver;

  return (
    <section
      aria-label="Product hero"
      className="relative bg-ink isolate overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 texture-grain opacity-60"
      />

      <div className="container pt-2 pb-12 sm:pt-6 sm:pb-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Gallery */}
          <ProductGallery
            images={product.images}
            alt={`${product.name} pre-workout`}
          />

          {/* Right column — meta + purchase block */}
          <div className="mt-8 lg:mt-2 max-w-md mx-auto lg:mx-0 space-y-6">
            <div>
              <p className="label-eyebrow mb-2">Pre-Workout</p>
              <h1 className="font-display text-5xl sm:text-6xl text-white tracking-[0.01em] leading-[0.92]">
                Blackout
                <br />
                <span className="text-bone">Daily Driver</span>
              </h1>
              <p className="mt-3 text-bone-600 text-[15px] sm:text-base">
                Clinically dosed. Every rep. Every set.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <Stars rating={product.averageRating} />
              <span className="text-bone-600 text-xs">
                <span className="text-bone font-medium">
                  {product.averageRating.toFixed(1)}
                </span>{' '}
                · {product.reviewCount} verified reviews
              </span>
              <span aria-hidden className="text-bone-500">·</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-bone-600">
                <span className="h-1.5 w-1.5 rounded-full bg-success" />
                In Stock
              </span>
            </div>

            <PurchaseBlock />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stars({ rating }: { rating: number }) {
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
            className={`h-4 w-4 ${filled ? 'text-bone fill-bone' : 'text-bone-500'}`}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}
