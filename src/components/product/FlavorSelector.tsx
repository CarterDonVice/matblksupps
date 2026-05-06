'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { useSelection } from '@/contexts/SelectionContext';
import { tenet } from '@/lib/products';

export function FlavorSelector() {
  const { flavorId, setFlavor } = useSelection();
  const flavors = tenet.flavors;

  return (
    <div className="space-y-3">
      <span className="label-eyebrow">Flavor</span>

      <div
        role="radiogroup"
        aria-label="Select flavor"
        className="grid grid-cols-2 gap-3"
      >
        {flavors.map((flavor) => {
          const active = flavor.id === flavorId;
          const [line1, ...rest] = flavor.name.split(' ');
          const line2 = rest.join(' ');
          return (
            <button
              key={flavor.id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setFlavor(flavor.id)}
              className={[
                'group relative aspect-[4/3] rounded-2xl overflow-hidden',
                'transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink focus-visible:ring-bone',
                active
                  ? 'ring-2 ring-white scale-[1.02] hover:scale-[1.025]'
                  : 'ring-1 ring-ink-600 hover:ring-bone-500 opacity-90 hover:opacity-100 hover:scale-[1.01]',
              ].join(' ')}
            >
              {/* Fruit-profile gradient */}
              <div
                aria-hidden
                className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ background: flavor.gradient }}
              />
              {/* Subtle bottom vignette to keep stacked text legible */}
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.0) 35%, rgba(0,0,0,0.6) 100%)',
                }}
              />
              <div
                aria-hidden
                className="absolute inset-0 texture-grain opacity-50 mix-blend-overlay"
              />

              {active && (
                <span
                  aria-hidden
                  className="absolute top-2.5 right-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink shadow-md"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              )}

              {/* Stacked flavor name — two lines, larger */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 text-left">
                <p className="font-condensed font-extrabold tracking-[0.08em] uppercase text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)] leading-[0.95] text-xl sm:text-2xl">
                  {line1}
                  {line2 && (
                    <>
                      <br />
                      {line2}
                    </>
                  )}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
