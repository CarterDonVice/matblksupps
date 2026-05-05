'use client';

import * as React from 'react';
import { Star, ArrowDown } from 'lucide-react';
import { ProductGallery } from './ProductGallery';
import { PurchaseBlock } from './PurchaseBlock';
import { tenet } from '@/lib/products';
import { scrollToId } from '@/lib/scroll';

interface Slide {
  label: string;
  headline: React.ReactNode;
  subhead: string;
  cta: string;
}

const slides: Slide[] = [
  {
    label: 'Pre-Workout',
    headline: (
      <>
        Performance From
        <br />
        <span className="text-bone">Every Angle</span>
      </>
    ),
    subhead: 'Clinically dosed pre-workout. Built for daily training.',
    cta: 'Shop TENET',
  },
  {
    label: 'The Formula',
    headline: (
      <>
        Better Input.
        <br />
        <span className="text-bone">Better Output.</span>
      </>
    ),
    subhead: 'Real ingredients. Real doses. No filler.',
    cta: 'View the Formula',
  },
  {
    label: 'Daily Discipline',
    headline: (
      <>
        Every Rep. Every Set.
        <br />
        <span className="text-bone">Every Day.</span>
      </>
    ),
    subhead: 'The daily tenet of serious training.',
    cta: 'Shop TENET',
  },
];

const ROTATE_MS = 6000;

export function Hero() {
  const product = tenet;
  const [active, setActive] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      aria-label="Product hero"
      className="relative bg-ink isolate overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 texture-grain opacity-60"
      />

      <div
        className="container pt-2 pb-10 sm:pt-6 sm:pb-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Gallery — same image set across all slides */}
          <ProductGallery
            images={product.images}
            alt={`${product.name} pre-workout`}
          />

          {/* Right column — rotating headline + persistent meta + purchase block */}
          <div className="mt-8 lg:mt-2 max-w-md mx-auto lg:mx-0 space-y-6">
            <div
              role="region"
              aria-roledescription="carousel"
              aria-label="Hero messages"
              className="relative"
            >
              <div className="relative min-h-[230px] sm:min-h-[250px]">
                {slides.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <div
                      key={i}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`Slide ${i + 1} of ${slides.length}`}
                      aria-hidden={!isActive}
                      className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                      style={{
                        opacity: isActive ? 1 : 0,
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <p className="label-eyebrow mb-3">{s.label}</p>
                      <h1 className="font-display text-5xl sm:text-6xl text-white tracking-[0.01em] leading-[0.92] mb-4 text-balance">
                        {s.headline}
                      </h1>
                      <p className="text-bone-600 text-[15px] sm:text-base mb-6 max-w-md">
                        {s.subhead}
                      </p>
                      <button
                        type="button"
                        onClick={() => scrollToId('purchase')}
                        className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                      >
                        {s.cta}
                        <ArrowDown className="h-4 w-4" strokeWidth={2.25} />
                      </button>
                    </div>
                  );
                })}
              </div>

              <div
                className="flex items-center gap-2 mt-2"
                role="tablist"
                aria-label="Choose hero slide"
              >
                {slides.map((_, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={i}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Show slide ${i + 1}`}
                      onClick={() => setActive(i)}
                      className={[
                        'h-1.5 rounded-full transition-all duration-300',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone',
                        isActive
                          ? 'w-8 bg-bone'
                          : 'w-1.5 bg-ink-600 hover:bg-bone-500',
                      ].join(' ')}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap pt-4 border-t border-ink-600">
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

            {/* Anchor target for Hero CTAs and Guarantee CTA */}
            <div id="purchase" className="scroll-mt-20">
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
            className={`h-4 w-4 ${filled ? 'text-bone fill-bone' : 'text-bone-500'}`}
            strokeWidth={1.5}
          />
        );
      })}
    </div>
  );
}
