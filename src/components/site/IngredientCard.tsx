'use client';

import * as React from 'react';
import { Plus } from 'lucide-react';

export interface IngredientCardData {
  /** Name plus optional registered mark */
  name: string;
  /** Dose label, e.g. "6,000 mg" */
  dose: string;
  /** Expanded body copy */
  body: React.ReactNode;
}

/**
 * Single expandable ingredient card. Click toggles open/closed.
 * `defaultOpen` lets the parent open the first card by default if desired.
 */
export function IngredientCard({
  data,
  open,
  onToggle,
}: {
  data: IngredientCardData;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <li
      className={`rounded-xl border bg-ink-800/60 transition-colors duration-200 ${
        open ? 'border-bone-500/40' : 'border-ink-600'
      }`}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone"
      >
        <span className="flex-1 min-w-0">
          <span className="font-condensed text-base sm:text-lg font-extrabold tracking-[0.04em] uppercase text-white block leading-snug">
            {data.name}
          </span>
        </span>
        <span className="font-condensed text-base sm:text-lg font-bold tabular-nums text-bone tracking-wide shrink-0 hidden xs:inline">
          {data.dose}
        </span>
        <Plus
          className={`h-5 w-5 shrink-0 text-bone-600 transition-transform duration-300 ${
            open ? 'rotate-45 text-white' : ''
          }`}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 sm:px-6 pb-5 sm:pb-6 space-y-2">
            <p className="font-condensed text-sm font-bold tabular-nums text-bone tracking-wide xs:hidden">
              {data.dose}
            </p>
            <p className="text-bone-600 text-[14px] sm:text-[15px] leading-relaxed max-w-prose">
              {data.body}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

/**
 * Group of ingredient cards with single-open accordion behavior.
 */
export function IngredientStack({
  items,
  initialIndex,
}: {
  items: IngredientCardData[];
  /** Index of card to start open. Defaults to null (all collapsed). */
  initialIndex?: number;
}) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(
    initialIndex ?? null,
  );
  return (
    <ul className="space-y-2.5 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <IngredientCard
          key={i}
          data={item}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </ul>
  );
}
