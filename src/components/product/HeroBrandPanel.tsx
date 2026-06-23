/**
 * Branded stand-in for the hero product image. Renders inside the same
 * aspect-square slot the gallery uses on both mobile and desktop, so a real
 * product photo can drop in later with no layout change. Brand and
 * positioning only. The doses live in the formula panel further down.
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
      <div className="relative h-full flex flex-col items-center justify-center text-center px-8 py-10">
        <p className="label-eyebrow mb-4">Daily Driver Pre Workout</p>
        <p className="font-display text-7xl sm:text-8xl text-white leading-[0.9] tracking-[0.02em]">
          TENET
        </p>

        <div className="mt-8 sm:mt-10 space-y-2.5">
          <p className="font-condensed text-[13px] sm:text-sm font-extrabold tracking-[0.22em] uppercase text-bone">
            Dual Pump Pathways
          </p>
          <p className="font-condensed text-[13px] sm:text-sm font-extrabold tracking-[0.22em] uppercase text-bone">
            Dual Caffeine System
          </p>
          <p className="font-condensed text-[13px] sm:text-sm font-extrabold tracking-[0.22em] uppercase text-bone-600">
            Fully Dosed. Fully Disclosed.
          </p>
        </div>
      </div>
    </div>
  );
}
