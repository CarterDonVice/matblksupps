'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { useSelection } from '@/contexts/SelectionContext';
import { blackoutDailyDriver } from '@/lib/products';

export function FlavorSelector() {
  const { flavorId, setFlavor } = useSelection();
  const flavors = blackoutDailyDriver.flavors;
  const selected = flavors.find((f) => f.id === flavorId);

  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <span className="label-eyebrow">Flavor</span>
        <span className="text-bone text-sm font-medium tracking-wide">
          {selected?.name}
        </span>
      </div>

      <div
        role="radiogroup"
        aria-label="Select flavor"
        className="grid grid-cols-2 gap-3"
      >
        {flavors.map((flavor) => {
          const active = flavor.id === flavorId;
          return (
            <button
              key={flavor.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setFlavor(flavor.id)}
              className={[
                'group relative aspect-[4/3] rounded-2xl overflow-hidden',
                'transition-all duration-300 ease-out',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone',
                active
                  ? 'ring-2 ring-white scale-[1.01]'
                  : 'ring-1 ring-ink-600 hover:ring-bone-500 opacity-90 hover:opacity-100',
              ].join(' ')}
            >
              {/* Fruit-profile gradient */}
              <div
                aria-hidden
                className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ background: flavor.gradient }}
              />
              {/* Subtle dark vignette to keep text legible */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.55) 100%)',
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 texture-grain opacity-50 mix-blend-overlay"
              />

              {/* Selected check */}
              {active && (
                <span
                  aria-hidden
                  className="absolute top-2.5 right-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink shadow-md"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              )}

              {/* Flavor name */}
              <div className="absolute inset-x-0 bottom-0 p-3 text-left">
                <p className="font-condensed text-[13px] sm:text-sm font-extrabold tracking-[0.14em] uppercase text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] leading-tight">
                  {flavor.name}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
