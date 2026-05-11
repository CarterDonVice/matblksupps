import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IngredientStack, type IngredientCardData } from './IngredientCard';

/** 5 featured ingredients shown on the homepage Behind the Formula section. */
export const featuredIngredients: IngredientCardData[] = [
  {
    name: 'L Citrulline',
    dose: '6,000 mg',
    body: (
      <>
        The pump ingredient. L Citrulline converts to L Arginine in your kidneys,
        boosting nitric oxide production for better blood flow and sustained
        pumps. 6,000mg is the clinically validated dose. Most pre workouts use
        3,000mg or less. Half the dose, half the result. Part of TENET's{' '}
        <span className="text-white font-medium">DUAL PUMP PATHWAYS</span>.
      </>
    ),
  },
  {
    name: 'NO3-T® Sodium Nitrate',
    dose: '1,000 mg',
    body: (
      <>
        The second pump pathway. ThermoLife's patented sodium nitrate delivers
        nitrate to your muscles for vasodilation through a separate pathway from
        citrulline. Stacked together with L Citrulline, you get amplified blood
        flow and pumps that don't quit. The second half of{' '}
        <span className="text-white font-medium">DUAL PUMP PATHWAYS</span>.
      </>
    ),
  },
  {
    name: 'Beta Alanine',
    dose: '3,200 mg',
    body: (
      <>
        The endurance ingredient. Beta Alanine increases muscle carnosine, which
        buffers lactic acid during high intensity training. 3,200mg is the daily
        dose backed by clinical research. That tingle you feel is the ingredient
        working.
      </>
    ),
  },
  {
    name: 'Dual Caffeine System',
    dose: '233 mg total',
    body: (
      <>
        Most pre workouts hit you with one caffeine source and let you crash.
        TENET uses two. 100mg Caffeine Anhydrous for the immediate spike. 133mg
        Di Caffeine Malate for sustained release. Smooth energy. No hard cliff.
        TENET's{' '}
        <span className="text-white font-medium">DUAL CAFFEINE SYSTEM</span>.
      </>
    ),
  },
  {
    name: 'Alpha GPC (50%)',
    dose: '600 mg',
    body: (
      <>
        The focus ingredient. Alpha GPC increases acetylcholine production for
        sharper mind muscle connection and cognitive performance during
        training. 600mg at 50% potency is the clinical dose.
      </>
    ),
  },
];

export function BehindTheFormula() {
  return (
    <section
      aria-labelledby="behind-formula"
      className="bg-ink py-16 sm:py-24 border-t border-ink-600"
    >
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <p className="label-eyebrow mb-3">The Science</p>
          <h2
            id="behind-formula"
            className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92] mb-3"
          >
            Behind the Formula
          </h2>
          <p className="text-bone-600 text-[15px] sm:text-base">
            Built on what works. Backed by science.
          </p>
        </header>

        <IngredientStack items={featuredIngredients} />

        <div className="mt-8 text-center">
          <Link
            href="/science"
            className="inline-flex items-center gap-2 text-bone hover:text-white text-xs tracking-[0.16em] uppercase font-semibold transition-colors underline underline-offset-4 decoration-ink-600 hover:decoration-bone"
          >
            Read the full breakdown on all 10 ingredients
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.25} />
          </Link>
        </div>
      </div>
    </section>
  );
}
