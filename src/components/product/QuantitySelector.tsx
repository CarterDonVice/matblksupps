'use client';

import * as React from 'react';
import { Minus, Plus } from 'lucide-react';
import { useSelection } from '@/contexts/SelectionContext';

export function QuantitySelector() {
  const { quantity, setQuantity } = useSelection();
  const inputId = React.useId();

  const dec = () => setQuantity((q) => q - 1);
  const inc = () => setQuantity((q) => q + 1);

  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <label htmlFor={inputId} className="label-eyebrow">
          Quantity
        </label>
        {quantity >= 2 && (
          <span className="text-success text-[10px] font-semibold tracking-[0.18em] uppercase">
            ✓ Free shipping unlocked
          </span>
        )}
      </div>

      <div className="inline-flex items-center rounded-xl border border-ink-600 bg-ink-800/60 overflow-hidden">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={dec}
          disabled={quantity <= 1}
          className="inline-flex h-12 w-12 items-center justify-center text-bone hover:text-white hover:bg-ink-700 active:bg-ink-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bone"
        >
          <Minus className="h-4 w-4" strokeWidth={2} />
        </button>
        <input
          id={inputId}
          type="number"
          inputMode="numeric"
          value={quantity}
          onChange={(e) => {
            const val = parseInt(e.target.value, 10);
            if (!Number.isNaN(val)) setQuantity(val);
          }}
          min={1}
          max={99}
          className="h-12 w-14 bg-transparent text-center font-display text-xl text-white tabular-nums [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none border-x border-ink-600"
          aria-label="Quantity"
        />
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={inc}
          disabled={quantity >= 99}
          className="inline-flex h-12 w-12 items-center justify-center text-bone hover:text-white hover:bg-ink-700 active:bg-ink-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-bone"
        >
          <Plus className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
