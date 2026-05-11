import {
  Activity,
  Zap,
  Target,
  FlaskConical,
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
  return (
    <section
      aria-labelledby="why-tenet"
      className="bg-ink-800 py-12 sm:py-16 border-y border-ink-600"
    >
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-7 sm:mb-9">
          <p className="label-eyebrow mb-3">The Build</p>
          <h2
            id="why-tenet"
            className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92] mb-3"
          >
            Why TENET
          </h2>
          <p className="text-bone-600 text-[15px] sm:text-base">
            Built on what works. Backed by science.
          </p>
        </header>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {features.map((feature) => (
            <li
              key={feature.title}
              className="rounded-2xl border border-ink-600 bg-ink p-5 sm:p-6 flex flex-col gap-3"
            >
              <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-md border border-ink-600 bg-ink-800 text-bone shrink-0">
                <feature.icon
                  className="h-[18px] w-[18px] sm:h-5 sm:w-5"
                  strokeWidth={1.75}
                />
              </span>
              <h3 className="font-condensed text-base sm:text-lg font-extrabold tracking-[0.06em] uppercase text-white leading-tight">
                {feature.title}
              </h3>
              <p className="text-bone-600 text-[13px] sm:text-sm leading-[1.55]">
                {feature.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
