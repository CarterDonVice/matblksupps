'use client';

import * as React from 'react';
import { Check } from 'lucide-react';
import { useSelection } from '@/contexts/SelectionContext';
import { tenet } from '@/lib/products';

const subscribeBenefits = [
  'Save 10% on every order',
  'Free shipping on 2+ bottles',
  'Cancel anytime',
];

export function PurchaseTypeSelector() {
  const { purchaseType, setPurchaseType } = useSelection();

  return (
    <div className="space-y-3">
      <span className="label-eyebrow">Purchase Type</span>

      <div role="radiogroup" aria-label="Purchase type" className="space-y-2.5">
        <Option
          active={purchaseType === 'subscribe'}
          onSelect={() => setPurchaseType('subscribe')}
          title="Subscribe & Save"
          badge="Save 10%"
          price={tenet.subscribePrice}
          comparePrice={tenet.price}
        >
          <ul className="mt-3 space-y-1.5">
            {subscribeBenefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-2 text-[13px] text-bone-600"
              >
                <Check className="h-3.5 w-3.5 text-success" strokeWidth={2.5} />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </Option>

        <Option
          active={purchaseType === 'one-time'}
          onSelect={() => setPurchaseType('one-time')}
          title="One Time Purchase"
          price={tenet.price}
        />
      </div>
    </div>
  );
}

interface OptionProps {
  active: boolean;
  onSelect: () => void;
  title: string;
  badge?: string;
  price: number;
  comparePrice?: number;
  children?: React.ReactNode;
}

function Option({
  active,
  onSelect,
  title,
  badge,
  price,
  comparePrice,
  children,
}: OptionProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onSelect}
      className={[
        'w-full text-left relative block rounded-xl p-4 transition-all duration-200 ease-out',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone',
        active
          ? 'border-2 border-white bg-ink-800'
          : 'border border-ink-600 bg-ink-800/40 hover:border-bone-500 opacity-90',
      ].join(' ')}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className={[
            'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors',
            active ? 'border-white bg-white' : 'border-ink-600 bg-transparent',
          ].join(' ')}
        >
          {active && <span className="h-2 w-2 rounded-full bg-ink" />}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-condensed text-[15px] font-bold tracking-[0.12em] uppercase text-bone">
                {title}
              </span>
              {badge && (
                <span className="inline-flex items-center px-1.5 py-0.5 text-[9px] font-bold tracking-[0.18em] uppercase bg-success/15 text-success rounded-sm">
                  {badge}
                </span>
              )}
            </div>
            <div className="flex items-baseline gap-2 shrink-0">
              <span className="font-display text-2xl text-bone leading-none">
                ${price.toFixed(2)}
              </span>
              {comparePrice && (
                <span className="text-bone-500 line-through text-sm">
                  ${comparePrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          {children}
        </div>
      </div>
    </button>
  );
}
