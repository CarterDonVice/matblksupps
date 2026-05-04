import type { Metadata } from 'next';
import Image from 'next/image';
import { FlaskConical, Microscope, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description:
    'MAT BLK Supplements builds clinically dosed, science-backed formulas for the lifter who shows up every day. No proprietary blends. No gimmicks.',
};

const principles = [
  {
    icon: FlaskConical,
    title: 'Clinical Doses',
    body: 'Every active ingredient hits the dose used in the studies. Nothing tucked behind a "proprietary blend."',
  },
  {
    icon: Microscope,
    title: 'Proven Ingredients',
    body: 'No frontier chemistry, no flavor-of-the-month patents. The stack is what works — at the grams that work.',
  },
  {
    icon: ShieldCheck,
    title: 'No Compromises',
    body: 'Premium quality, accessible pricing, and a 100% satisfaction guarantee. Love it or we make it right.',
  },
];

export default function AboutPage() {
  return (
    <article className="space-y-12 sm:space-y-16">
      <header className="space-y-5">
        <p className="label-eyebrow">The Brand</p>
        <h1 className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92]">
          Built For The
          <br />
          <span className="text-bone">Daily Driver</span>
        </h1>
        <p className="text-bone-600 text-lg leading-relaxed max-w-prose">
          MAT BLK Supplements was founded on a simple principle: the gym doesn't
          care about marketing copy. It cares about what's actually in the scoop.
        </p>
      </header>

      <section className="relative -mx-5 sm:mx-0 sm:rounded-2xl border border-ink-600 bg-ink-800 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 texture-wordmark opacity-30 pointer-events-none"
        />
        <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 p-7 sm:p-10 items-center">
          <div className="space-y-4 text-bone-600 text-[15px] sm:text-base leading-relaxed">
            <p>
              We started in the same place a lot of lifters do — frustrated. Tubs
              of pre-workout listing 17 ingredients in a 4-gram blend. Brands
              chasing the next exotic compound instead of dosing the basics
              properly. Hot pink tubs in the brightest possible packaging.
            </p>
            <p>
              We wanted the opposite. A daily driver. The pre you reach for five
              days a week without thinking about it. Clinical doses on the things
              that move the needle: pump, focus, energy, absorption. Smooth stim
              profile. Flavor that tastes like a drink, not a chemistry set.
            </p>
            <p>
              <span className="text-white font-medium">
                That's it. That's the brand.
              </span>{' '}
              No inflated claims. No hero athlete on the bottle. Just a formula
              built on science and a label built to disappear into your gym bag.
            </p>
          </div>
          <Image
            src="/images/AbrevLogo.png"
            alt="MAT BLK monogram"
            width={140}
            height={140}
            className="h-24 w-24 sm:h-32 sm:w-32 object-contain opacity-90 mx-auto"
          />
        </div>
      </section>

      <section>
        <h2 className="font-display text-4xl sm:text-5xl text-white tracking-[0.01em] mb-8">
          What We Stand For
        </h2>
        <ul className="grid sm:grid-cols-3 gap-3 sm:gap-4">
          {principles.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="rounded-2xl border border-ink-600 bg-ink-800 p-6 sm:p-7 space-y-4"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink-600 bg-ink text-bone">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3 className="font-condensed text-lg font-extrabold tracking-[0.06em] uppercase text-white">
                {title}
              </h3>
              <p className="text-bone-600 text-sm leading-relaxed">{body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-ink-600 bg-ink-800 p-7 sm:p-10 text-center space-y-3">
        <p className="label-eyebrow">The Bottom Line</p>
        <p className="font-display text-3xl sm:text-4xl text-white tracking-[0.01em] leading-[1.05]">
          Show up every day. We'll handle the scoop.
        </p>
      </section>
    </article>
  );
}
