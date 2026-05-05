'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { tenet } from '@/lib/products';

export function NutritionFacts() {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={[
        'rounded-xl border bg-ink-800/60 transition-colors duration-200',
        open ? 'border-bone-500/40' : 'border-ink-600',
      ].join(' ')}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="nutrition-facts-panel"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 text-left rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone"
      >
        <span className="font-condensed text-[13px] sm:text-sm font-extrabold tracking-[0.16em] uppercase text-bone">
          Nutrition Facts
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-bone-600 transition-transform duration-300 ${
            open ? 'rotate-180 text-white' : ''
          }`}
          strokeWidth={1.75}
        />
      </button>

      <div
        id="nutrition-facts-panel"
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 pb-4 sm:pb-5">
            <ul className="border-t border-ink-600 divide-y divide-ink-600">
              {tenet.ingredients.map((ing) => (
                <li
                  key={ing.name}
                  className="flex items-baseline justify-between gap-3 py-2.5"
                >
                  <span className="text-bone text-[13px] sm:text-sm">
                    {ing.name}
                  </span>
                  <span className="font-condensed text-sm font-bold tabular-nums text-bone tracking-wide">
                    {ing.dose}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-bone-500 text-[10px] leading-relaxed">
              † Based on clinical studies of individual ingredients at matching
              dosages. These statements have not been evaluated by the FDA. This
              product is not intended to diagnose, treat, cure, or prevent any
              disease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
