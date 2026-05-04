'use client';

import * as React from 'react';
import { useSelection } from '@/contexts/SelectionContext';
import { blackoutDailyDriver } from '@/lib/products';

export function FlavorSelector() {
  const { flavorId, setFlavor } = useSelection();
  const flavors = blackoutDailyDriver.flavors;
  const selected = flavors.find((f) => f.id === flavorId);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
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
                'group relative h-[88px] rounded-xl px-4 py-3',
                'flex flex-col items-center justify-center gap-1 text-center',
                'transition-all duration-200 ease-out',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone',
                active
                  ? 'border-2 border-white bg-ink-800 text-white shadow-[0_0_0_4px_rgba(240,236,228,0.04)]'
                  : 'border border-ink-600 bg-ink-800/40 text-bone-600 hover:border-bone-500 hover:text-bone',
              ].join(' ')}
            >
              <span
                className="h-3 w-3 rounded-full mb-0.5"
                style={{
                  background: active ? flavor.accentHex : 'transparent',
                  boxShadow: active
                    ? `0 0 0 1px ${flavor.accentHex}`
                    : `inset 0 0 0 1px var(--color-border)`,
                }}
              />
              <span className="font-condensed text-xs font-bold tracking-[0.18em] uppercase leading-tight">
                {flavor.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
