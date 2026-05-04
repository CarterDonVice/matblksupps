'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { blackoutDailyDriver } from '@/lib/products';
import { FlavorSelector } from './FlavorSelector';
import { PurchaseTypeSelector } from './PurchaseTypeSelector';

export function Hero() {
  const product = blackoutDailyDriver;

  return (
    <section
      aria-label="Product hero"
      className="relative bg-ink isolate"
    >
      {/* Background ambient gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(ellipse at 50% 35%, rgba(240,236,228,0.05) 0%, transparent 55%)',
          }}
        />
        <div className="absolute inset-0 grain opacity-50" />
      </div>

      <div className="container pt-6 pb-10 sm:pt-10 sm:pb-16">
        {/* Product image stage */}
        <div className="relative w-full aspect-square max-w-[420px] sm:max-w-[520px] mx-auto">
          <div className="absolute inset-0 vignette pointer-events-none" />
          <div
            className="absolute inset-x-[12%] bottom-[6%] h-[14%] rounded-[50%] blur-2xl opacity-60"
            style={{
              background: 'radial-gradient(ellipse, rgba(0,0,0,0.7), transparent 70%)',
            }}
            aria-hidden
          />
          <Image
            src={product.images[0]}
            alt={`${product.name} pre-workout tub`}
            fill
            priority
            sizes="(max-width: 640px) 100vw, 520px"
            className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] animate-fade-in"
          />
        </div>

        {/* Headline + meta */}
        <div className="text-center mt-6 sm:mt-8 space-y-3">
          <p className="label-eyebrow">Pre-Workout</p>
          <h1 className="font-display text-5xl sm:text-7xl text-white tracking-[0.02em] leading-[0.95] text-balance">
            Blackout
            <br />
            <span className="text-bone">Daily Driver</span>
          </h1>
          <p className="text-bone-600 text-[15px] sm:text-base max-w-md mx-auto">
            Clinically dosed. Every rep. Every set.
          </p>

          <div className="flex items-center justify-center gap-3 pt-1">
            <StarRow rating={product.averageRating} />
            <span className="text-bone-600 text-xs">
              <span className="text-bone font-medium">
                {product.averageRating.toFixed(1)}
              </span>{' '}
              · {product.reviewCount} reviews
            </span>
            <span aria-hidden className="text-bone-500">·</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-bone-600">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              In Stock
            </span>
          </div>
        </div>

        {/* Selectors */}
        <div className="mt-8 sm:mt-10 max-w-md mx-auto space-y-6">
          <FlavorSelector />
          <PurchaseTypeSelector />
        </div>
      </div>
    </section>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < Math.round(rating);
        return (
          <Star
            key={i}
            className={`h-3.5 w-3.5 ${filled ? 'text-bone fill-bone' : 'text-bone-500'}`}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}
