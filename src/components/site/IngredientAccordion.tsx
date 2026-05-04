'use client';

import * as React from 'react';
import { Plus } from 'lucide-react';
import { blackoutDailyDriver } from '@/lib/products';

export function IngredientAccordion() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section
      aria-labelledby="whats-inside"
      className="bg-ink-800 py-16 sm:py-24 border-y border-ink-600"
    >
      <div className="container max-w-3xl">
        <header className="mb-10 sm:mb-14 text-center">
          <p className="label-eyebrow mb-3">The Formula</p>
          <h2
            id="whats-inside"
            className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92] mb-4"
          >
            What's Inside
          </h2>
          <p className="text-bone-600 max-w-md mx-auto text-[15px] leading-relaxed">
            No proprietary blends. No underdosed fillers. Just what works,
            at doses that actually work.
          </p>
        </header>

        <div className="space-y-2.5">
          {blackoutDailyDriver.ingredientGroups.map((group, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={group.title}
                className={`rounded-xl border bg-ink-700 transition-colors ${
                  isOpen ? 'border-bone-500/40' : 'border-ink-600'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`acc-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone rounded-xl"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <span className="font-display text-base text-bone-500 tracking-widest tabular-nums shrink-0">
                      0{i + 1}
                    </span>
                    <h3 className="font-condensed text-lg sm:text-xl font-extrabold tracking-[0.04em] uppercase text-white leading-none truncate">
                      {group.title}
                    </h3>
                  </div>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-bone-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 text-white' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </button>

                <div
                  id={`acc-panel-${i}`}
                  role="region"
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-[calc(1.25rem+1.5rem)] sm:pl-[calc(1.5rem+1.75rem)]">
                      <p className="text-bone-600 text-sm mb-4 leading-relaxed">
                        {group.blurb}
                      </p>
                      <ul className="space-y-2.5 border-t border-ink-600 pt-4">
                        {group.items.map((item) => (
                          <li
                            key={item.name}
                            className="flex items-center justify-between gap-4 text-sm"
                          >
                            <span className="text-bone">{item.name}</span>
                            <span className="font-condensed text-base font-bold tabular-nums text-white tracking-wide">
                              {item.dose}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
