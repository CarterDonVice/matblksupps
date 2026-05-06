'use client';

import * as React from 'react';
import { Star } from 'lucide-react';
import { ProductGallery } from './ProductGallery';
import { PurchaseBlock } from './PurchaseBlock';
import { tenet } from '@/lib/products';

export function Hero() {
  const product = tenet;

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
          <ProductGallery
            images={product.images}
            alt={`${product.name} pre-workout`}
          />

          <div className="mt-8 lg:mt-2 max-w-md mx-auto lg:mx-0 space-y-5">
            <div>
              <p className="label-eyebrow mb-3">Pre-Workout</p>
              <h1 className="font-display text-7xl sm:text-8xl lg:text-9xl text-white tracking-[0.01em] leading-[0.9]">
                TENET
              </h1>
              <p className="mt-4 text-bone text-[15px] sm:text-base">
                The daily tenet of serious training.
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap pt-1">
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

            {/* Anchor target for Guarantee CTA */}
            <div id="purchase" className="scroll-mt-20 pt-2">
              <PurchaseBlock />
            </div>
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
            className={`h-4 w-4 ${filled ? 'text-gold fill-gold' : 'text-bone-500'}`}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}
