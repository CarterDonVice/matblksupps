/**
 * Branded stand-in for the hero product image (desktop). Renders inside the
 * same aspect-square slot the gallery uses, so a real product photo can drop
 * in later with zero layout change.
 */
export function HeroBrandPanel({ className }: { className?: string }) {
  return (
    <div
      className={[
        'relative aspect-square rounded-2xl border border-ink-600 bg-ink-800/40 overflow-hidden',
        className ?? '',
      ].join(' ')}
    >
      <div
        aria-hidden
        className="absolute inset-0 texture-wordmark opacity-40 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 texture-grain opacity-50 pointer-events-none"
      />
      <div className="relative h-full flex flex-col justify-center px-10 xl:px-14 py-10">
        <p className="label-eyebrow mb-6">The Headline Doses</p>

        <ul className="space-y-5 xl:space-y-6">
          <li>
            <p className="font-display text-5xl xl:text-6xl text-white leading-none tracking-[0.01em]">
              6g
            </p>
            <p className="font-condensed text-sm xl:text-base font-extrabold tracking-[0.18em] uppercase text-bone-600 mt-1">
              L-Citrulline
            </p>
          </li>
          <li>
            <p className="font-display text-5xl xl:text-6xl text-white leading-none tracking-[0.01em]">
              3g
            </p>
            <p className="font-condensed text-sm xl:text-base font-extrabold tracking-[0.18em] uppercase text-bone-600 mt-1">
              HydroPrime Glycerol
            </p>
          </li>
          <li>
            <p className="font-display text-5xl xl:text-6xl text-white leading-none tracking-[0.01em]">
              3.2g
            </p>
            <p className="font-condensed text-sm xl:text-base font-extrabold tracking-[0.18em] uppercase text-bone-600 mt-1">
              Beta-Alanine
            </p>
          </li>
        </ul>

        <div className="mt-8 pt-6 border-t border-ink-600 flex flex-col gap-2">
          <p className="font-condensed text-[13px] xl:text-sm font-extrabold tracking-[0.2em] uppercase text-bone">
            Dual Pump Pathways
          </p>
          <p className="font-condensed text-[13px] xl:text-sm font-extrabold tracking-[0.2em] uppercase text-bone">
            Dual Caffeine System
          </p>
        </div>
      </div>
    </div>
  );
}
