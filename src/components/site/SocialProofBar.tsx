import { Star } from 'lucide-react';

const stats = [
  { value: '4.9', label: 'From 200+ Reviews', isStar: true },
  { value: '100+', label: 'Servings per Tub' },
  { value: '0', label: 'Proprietary Blends' },
  { value: '11', label: 'Clinical Doses' },
];

export function SocialProofBar() {
  return (
    <section
      aria-label="Social proof"
      className="relative bg-ink-800 border-y border-ink-700"
    >
      <div className="container py-7 sm:py-8">
        <ul className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-ink-700">
          {stats.map((s, i) => (
            <li
              key={i}
              className={[
                'flex flex-col items-center text-center px-3 py-3 sm:py-2',
                // Mobile dividers between cells in the 2x2 grid
                i % 2 === 0 ? 'border-r border-ink-700 sm:border-r-0' : '',
                i < 2 ? 'border-b border-ink-700 sm:border-b-0 sm:border-r-0' : '',
              ].join(' ')}
            >
              <div className="font-display text-3xl sm:text-4xl text-white tracking-[0.01em] leading-none flex items-center gap-1.5 tabular-nums">
                {s.isStar && (
                  <Star
                    className="h-5 w-5 text-bone fill-bone"
                    strokeWidth={1.5}
                  />
                )}
                {s.value}
              </div>
              <p className="mt-2 label-eyebrow text-[10px] sm:text-[11px] tracking-[0.18em]">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
