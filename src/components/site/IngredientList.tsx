import { blackoutDailyDriver } from '@/lib/products';

export function IngredientList() {
  return (
    <section
      aria-labelledby="formula"
      className="relative bg-ink py-16 sm:py-24 border-t border-ink-600 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 texture-wordmark opacity-50 pointer-events-none"
      />

      <div className="container relative max-w-3xl">
        <header className="text-center mb-10 sm:mb-14">
          <p className="label-eyebrow mb-3">The Formula</p>
          <h2
            id="formula"
            className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92] mb-4"
          >
            What's Inside
          </h2>
          <p className="text-bone-600 max-w-md mx-auto text-[15px] leading-relaxed">
            No proprietary blends. No underdosed fillers. Just what works,
            at doses that actually work.
          </p>
        </header>

        <ul className="divide-y divide-ink-600 border-y border-ink-600">
          {blackoutDailyDriver.ingredients.map((ing) => (
            <li
              key={ing.name}
              className="flex items-baseline justify-between gap-4 py-3.5 sm:py-4"
            >
              <span
                className={
                  ing.hero
                    ? 'text-white font-semibold underline decoration-bone-500/60 underline-offset-[5px] decoration-[1.5px] text-[15px] sm:text-base'
                    : 'text-bone-600 text-[15px] sm:text-base'
                }
              >
                {ing.name}
              </span>
              <span
                className={
                  ing.hero
                    ? 'font-condensed text-lg sm:text-xl font-extrabold tabular-nums text-white tracking-wide'
                    : 'font-condensed text-base sm:text-lg font-bold tabular-nums text-bone tracking-wide'
                }
              >
                {ing.dose}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-bone-500 text-[11px] tracking-[0.04em] leading-relaxed text-center">
          † Based on clinical studies of individual ingredients at matching dosages.
          These statements have not been evaluated by the FDA. This product is not
          intended to diagnose, treat, cure, or prevent any disease.
        </p>
      </div>
    </section>
  );
}
