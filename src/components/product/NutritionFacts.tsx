'use client';

import * as React from 'react';
import { tenet } from '@/lib/products';

interface Props {
  /** "dropdown" = condensed open panel (mobile right-column): four headliners
   *  visible by default with a "see the full formula" expand.
   *  "static"   = always-open full list (desktop left-column under the gallery). */
  variant?: 'dropdown' | 'static';
  className?: string;
}

export function NutritionFacts({ variant = 'dropdown', className }: Props) {
  if (variant === 'static') {
    return <StaticPanel className={className} />;
  }
  return <CondensedPanel className={className} />;
}

function StaticPanel({ className }: { className?: string }) {
  return (
    <section
      aria-label="Nutrition facts"
      className={[
        'rounded-xl border border-ink-600 bg-ink-800/40 px-5 py-5',
        className ?? '',
      ].join(' ')}
    >
      <p className="font-condensed text-sm font-extrabold tracking-[0.16em] uppercase text-bone mb-4">
        Nutrition Facts
      </p>
      <List />
      <Disclaimer />
    </section>
  );
}

function CondensedPanel({ className }: { className?: string }) {
  return (
    <section
      aria-label="Nutrition facts"
      className={[
        'rounded-xl border border-ink-600 bg-ink-800/60 px-4 sm:px-5 pt-4 pb-4 sm:pb-5',
        className ?? '',
      ].join(' ')}
    >
      <p className="font-condensed text-[13px] sm:text-sm font-extrabold tracking-[0.16em] uppercase text-bone mb-3">
        Nutrition Facts
      </p>
      <List bordered condensed />
      <Disclaimer />
    </section>
  );
}

/** The four label-order headliners shown before the full-formula expand. */
const PREVIEW_NAMES = [
  'L-Citrulline',
  'Glycerol (HydroPrime®)',
  'Beta-Alanine',
  'L-Tyrosine',
];

function List({
  bordered = false,
  condensed = false,
}: {
  bordered?: boolean;
  /** Show only the four headliners with a "see the full formula" expand. */
  condensed?: boolean;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const showAll = !condensed || expanded;
  const preview = tenet.ingredients.filter((ing) =>
    PREVIEW_NAMES.includes(ing.name),
  );
  const items = showAll ? tenet.ingredients : preview;
  const hiddenCount = tenet.ingredients.length - preview.length;

  return (
    <>
      <ul
        className={[
          'divide-y divide-ink-600',
          bordered ? 'border-t border-ink-600' : '',
        ].join(' ')}
      >
        {items.map((ing) => (
          <li
            key={ing.name}
            className="flex items-baseline justify-between gap-3 py-2.5"
          >
            <span className="text-bone text-[13px] sm:text-sm">{ing.name}</span>
            <span className="font-condensed text-sm font-bold tabular-nums text-bone tracking-wide">
              {ing.dose}
            </span>
          </li>
        ))}
      </ul>
      {condensed && !expanded && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="mt-2 w-full py-2 text-center text-bone text-[12px] tracking-[0.16em] uppercase font-semibold border-t border-ink-600 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone rounded-sm"
        >
          See the full formula ({hiddenCount} more)
        </button>
      )}
    </>
  );
}

function Disclaimer() {
  return (
    <div className="mt-3 space-y-2">
      <p className="text-bone-600 text-xs leading-relaxed">
        † Based on clinical studies of individual ingredients at matching dosages.
        These statements have not been evaluated by the Food and Drug
        Administration. This product is not intended to diagnose, treat, cure, or
        prevent any disease.
      </p>
      <p className="text-bone-500 text-[10px] leading-relaxed">
        HydroPrime® is a registered trademark of Pinnacle Ingredients, LLC.
      </p>
    </div>
  );
}
