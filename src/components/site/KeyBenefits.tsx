import {
  Activity,
  Flame,
  Zap,
  FlaskConical,
  Target,
  Droplets,
  type LucideIcon,
} from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  body: string;
}

const benefits: Benefit[] = [
  {
    icon: Activity,
    title: 'Dual Pump Pathways',
    body: 'Targeting multiple pathways for a comprehensive and sustained pump.',
  },
  {
    icon: Flame,
    title: 'Performance Carbohydrates',
    body: 'Sustained energy release to fuel you through the toughest workouts.',
  },
  {
    icon: Zap,
    title: 'Dual Caffeine Sources',
    body: 'Immediate and extended-release energy. Perform now, no crash later.',
  },
  {
    icon: FlaskConical,
    title: 'Clinically Dosed',
    body: 'Science-backed ingredients at doses proven to be effective.',
  },
  {
    icon: Target,
    title: 'Enhanced Absorption',
    body: 'Piperine ensures your body actually uses what you take.',
  },
  {
    icon: Droplets,
    title: 'Hydration Support',
    body: 'Full electrolyte matrix to keep performance sharp.',
  },
];

export function KeyBenefits() {
  return (
    <section
      aria-labelledby="why-blackout"
      className="bg-ink py-16 sm:py-24"
    >
      <div className="container">
        <header className="max-w-2xl mb-10 sm:mb-14">
          <p className="label-eyebrow mb-3">The Build</p>
          <h2
            id="why-blackout"
            className="font-display text-5xl sm:text-7xl text-bone tracking-[0.01em] leading-[0.92]"
          >
            Why
            <br />
            <span className="text-white">Blackout</span>
          </h2>
        </header>

        <ul className="grid grid-cols-2 gap-px bg-ink-600 border border-ink-600 rounded-2xl overflow-hidden">
          {benefits.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="bg-ink p-5 sm:p-7 flex flex-col gap-3 sm:gap-4 group transition-colors hover:bg-ink-800"
            >
              <span className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-md border border-ink-600 bg-ink-800 text-bone group-hover:text-white group-hover:border-bone-500 transition-colors">
                <Icon className="h-[18px] w-[18px] sm:h-5 sm:w-5" strokeWidth={1.75} />
              </span>
              <h3 className="font-condensed text-base sm:text-lg font-extrabold tracking-[0.06em] uppercase text-white leading-tight">
                {title}
              </h3>
              <p className="text-bone-600 text-[13px] sm:text-sm leading-relaxed">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
