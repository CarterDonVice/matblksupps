'use client';

import * as React from 'react';
import { Plus } from 'lucide-react';

interface Section {
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    title: 'How to Use',
    content: (
      <p>
        Mix one (1) scoop with 8–10 oz of cold water 20–30 minutes before
        training. Stir or shake until fully dissolved. Start with a half scoop
        to assess tolerance.
      </p>
    ),
  },
  {
    title: 'Nutrition Facts',
    content: (
      <div className="space-y-3">
        <div className="flex justify-between"><span>Serving Size</span><span>1 Scoop (~14g)</span></div>
        <div className="flex justify-between"><span>Servings per Container</span><span>30</span></div>
        <div className="flex justify-between"><span>Calories</span><span>10</span></div>
        <div className="flex justify-between"><span>Total Carbs</span><span>2g</span></div>
        <div className="flex justify-between"><span>Sodium</span><span>200mg</span></div>
        <div className="flex justify-between"><span>Potassium</span><span>300mg</span></div>
        <p className="text-bone-500 text-xs pt-3 border-t border-ink-600">
          See What's Inside section below for the full active ingredient breakdown.
        </p>
      </div>
    ),
  },
  {
    title: 'Suggested Use',
    content: (
      <p>
        For men 18 and older. Do not exceed one (1) serving in 24 hours.
        Not for use by individuals sensitive to caffeine. Consult a physician
        before use if pregnant, nursing, or have a medical condition.
      </p>
    ),
  },
  {
    title: 'Other Ingredients',
    content: (
      <p>
        Natural and Artificial Flavors, Citric Acid, Malic Acid, Silicon
        Dioxide, Sucralose, Acesulfame Potassium, FD&amp;C colors as listed by
        flavor.
      </p>
    ),
  },
  {
    title: 'Shipping & Returns',
    content: (
      <div className="space-y-2">
        <p>
          Free shipping on orders of 2+ bottles. Standard orders ship in 1–2
          business days via UPS or USPS.
        </p>
        <p>
          100% satisfaction guarantee — if you're not happy with your order,
          contact us within 30 days for a refund or replacement.
        </p>
      </div>
    ),
  },
];

export function ProductDetailAccordion() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section
      aria-label="Product details"
      className="bg-ink py-12 sm:py-16 border-b border-ink-600"
    >
      <div className="container max-w-3xl">
        <div className="space-y-2.5">
          {sections.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={s.title}
                className={`rounded-xl border bg-ink-800 transition-colors ${
                  isOpen ? 'border-bone-500/40' : 'border-ink-600'
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone rounded-xl"
                >
                  <h3 className="font-condensed text-base sm:text-lg font-extrabold tracking-[0.06em] uppercase text-white">
                    {s.title}
                  </h3>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-bone-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 text-white' : ''
                    }`}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-bone-600 text-sm leading-relaxed">
                      {s.content}
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
