import { Star, BadgeCheck } from 'lucide-react';

interface Testimonial {
  body: string;
  author: string;
  context: string;
}

const testimonials: Testimonial[] = [
  {
    body:
      "Finally a daily that doesn't wreck my sleep or leave me crashing at 2pm. The pumps on Mango Passionfruit are absurd.",
    author: 'Marcus T.',
    context: '5 days/week lifter',
  },
  {
    body:
      'The Midnight Limeade tastes like an actual drink, not chemicals. And I can feel every ingredient working — not just caffeine.',
    author: 'Jay R.',
    context: 'Powerlifter, 3 years training',
  },
  {
    body:
      "I've cycled through 6 pre-workouts this year. TENET is the first one I've actually re-ordered.",
    author: 'David L.',
    context: 'Hybrid athlete',
  },
];

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials"
      className="relative bg-ink-800 py-16 sm:py-24 border-y border-ink-600 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 texture-wordmark opacity-25 pointer-events-none"
      />
      <div className="container relative">
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="label-eyebrow mb-3">Voices</p>
          <h2
            id="testimonials"
            className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92] mb-3"
          >
            Featured Reviews
          </h2>
          <p className="text-bone-600 text-[15px] sm:text-base">
            Real lifters. Real sessions. Real results.
          </p>
        </header>

        <ul className="grid md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <li
              key={i}
              className="relative rounded-2xl border border-ink-600 bg-ink p-7 sm:p-8 flex flex-col gap-5"
            >
              <span
                aria-hidden
                className="absolute top-4 left-5 font-display text-7xl text-ink-700 leading-none select-none pointer-events-none"
              >
                "
              </span>
              <div
                className="flex items-center gap-0.5 relative"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star
                    key={n}
                    className="h-4 w-4 text-gold fill-gold"
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <blockquote className="relative">
                <p className="text-bone text-[15px] sm:text-base leading-relaxed italic">
                  {t.body}
                </p>
              </blockquote>
              <footer className="mt-auto pt-4 border-t border-ink-600 flex items-center justify-between gap-3">
                <div>
                  <p className="font-condensed text-sm font-extrabold tracking-[0.12em] uppercase text-white">
                    {t.author}
                  </p>
                  <p className="text-bone-600 text-[12px]">{t.context}</p>
                </div>
                <BadgeCheck
                  className="h-5 w-5 text-success shrink-0"
                  strokeWidth={1.75}
                  aria-label="Verified"
                />
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
