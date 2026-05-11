import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { IngredientStack, type IngredientCardData } from '@/components/site/IngredientCard';
import { Reveal } from '@/components/site/Reveal';

export const metadata: Metadata = {
  title: 'The Science Behind TENET',
  description:
    'Every milligram. Every ingredient. The full breakdown of all 10 clinically dosed ingredients in TENET.',
};

const ingredients: IngredientCardData[] = [
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
    name: 'Sodium Nitrate (NO3-T®)',
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
  {
    name: 'L Tyrosine',
    dose: '2,000 mg',
    body: (
      <>
        A focus and stress response ingredient. L Tyrosine supports the
        production of dopamine and norepinephrine, neurotransmitters critical
        for cognitive performance under stress. Useful for sustained mental
        output during long sessions.
      </>
    ),
  },
  {
    name: 'Taurine',
    dose: '1,000 mg',
    body: (
      <>
        A hydration and cellular support ingredient. Taurine helps regulate
        fluid balance, supports muscle function, and is often included in pre
        workouts for its synergy with caffeine.
      </>
    ),
  },
  {
    name: 'Caffeine Anhydrous',
    dose: '100 mg',
    body: (
      <>
        The immediate spike. 100mg of Caffeine Anhydrous provides the initial
        kick of energy and alertness 15 to 30 minutes after ingestion. The first
        half of TENET's{' '}
        <span className="text-white font-medium">DUAL CAFFEINE SYSTEM</span>.
      </>
    ),
  },
  {
    name: 'Di Caffeine Malate',
    dose: '133 mg',
    body: (
      <>
        The sustained release. 133mg of Di Caffeine Malate bonds caffeine with
        malic acid for slower absorption and extended energy without the hard
        crash of single source caffeine. The second half of TENET's{' '}
        <span className="text-white font-medium">DUAL CAFFEINE SYSTEM</span>.
      </>
    ),
  },
  {
    name: 'Huperzine A (1% extract)',
    dose: '15 mg',
    body: (
      <>
        A focus extender. Huperzine A inhibits the breakdown of acetylcholine,
        working synergistically with Alpha GPC to maintain mind muscle
        connection deeper into your training session.
      </>
    ),
  },
  {
    name: 'Piperine (95%)',
    dose: '5 mg',
    body: (
      <>
        The absorption ingredient. Black pepper extract increases the
        bioavailability of other compounds in the formula. Small dose,
        meaningful effect.
      </>
    ),
  },
];

export default function SciencePage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ink">
        <section className="py-16 sm:py-24 border-b border-ink-600">
          <div className="container max-w-4xl text-center">
            <p className="label-eyebrow mb-3">The Science</p>
            <h1 className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92] mb-3">
              Behind TENET
            </h1>
            <p className="text-bone-600 text-[15px] sm:text-base max-w-xl mx-auto">
              Every milligram. Every ingredient. The full breakdown.
            </p>
          </div>
        </section>

        <Reveal>
          <section className="py-12 sm:py-16">
            <div className="container">
              <IngredientStack items={ingredients} />
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="bg-ink-800 border-t border-ink-600 py-16 sm:py-24">
            <div className="container max-w-2xl text-center space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl text-white tracking-[0.01em] leading-[0.95]">
                Built to be your foundation.
              </h2>
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-white text-ink font-condensed text-sm font-extrabold tracking-[0.16em] uppercase transition-all duration-200 hover:scale-[1.02] hover:bg-bone active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-800 focus-visible:ring-bone shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
                >
                  Shop TENET
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
