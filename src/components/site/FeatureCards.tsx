'use client';

import * as React from 'react';
import {
  Activity,
  Zap,
  Target,
  FlaskConical,
  Plus,
  type LucideIcon,
} from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  body: string;
}

const features: Feature[] = [
  {
    icon: Activity,
    title: 'Dual Pump Pathways',
    body: 'Targeting multiple pathways for a comprehensive and sustained pump.',
  },
  {
    icon: Zap,
    title: 'Dual Caffeine Sources',
    body: 'Immediate and extended-release energy. Perform now, no crash later.',
  },
  {
    icon: Target,
    title: 'Enhanced Absorption',
    body: 'Piperine ensures your body actually uses what you take.',
  },
  {
    icon: FlaskConical,
    title: 'Clinically Dosed',
    body: 'Science-backed ingredients at doses proven to be effective.',
  },
];

export function FeatureCards() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section
      aria-labelledby="why-blackout"
      className="bg-ink-800 py-16 sm:py-24 border-y border-ink-600"
    >
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="label-eyebrow mb-3">The Build</p>
          <h2
            id="why-blackout"
            className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92]"
          >
            Why Blackout
          </h2>
        </header>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {features.map((feature, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={feature.title}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={[
                    'w-full text-left rounded-2xl border p-5 sm:p-6 transition-all duration-300 ease-out',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone',
                    isOpen
                      ? 'border-bone-500/60 bg-ink shadow-[0_8px_30px_rgba(0,0,0,0.4)]'
                      : 'border-ink-600 bg-ink-700 hover:border-bone-500 hover:bg-ink',
                  ].join(' ')}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span
                      className={[
                        'inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-md border transition-colors',
                        isOpen
                          ? 'border-bone-500/60 bg-ink-800 text-white'
                          : 'border-ink-600 bg-ink-800 text-bone',
                      ].join(' ')}
                    >
                      <feature.icon
                        className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                        strokeWidth={1.75}
                      />
                    </span>
                    <Plus
                      className={`h-4 w-4 shrink-0 mt-1 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-white' : 'text-bone-500'
                      }`}
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-condensed text-base sm:text-lg font-extrabold tracking-[0.06em] uppercase text-white leading-tight">
                    {feature.title}
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 mt-3'
                        : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <p className="overflow-hidden text-bone-600 text-[13px] sm:text-sm leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
