import { Coffee, Zap, Mountain, Waves, type LucideIcon } from 'lucide-react';

interface Stage {
  time: string;
  name: string;
  icon: LucideIcon;
  body: string;
}

const stages: Stage[] = [
  {
    time: '0–15',
    name: 'Absorption',
    icon: Coffee,
    body: 'Mix, drink, and start your warm-up. Citrulline and beta-alanine begin entering your bloodstream.',
  },
  {
    time: '15–30',
    name: 'Onset',
    icon: Zap,
    body: 'Caffeine kicks in. Focus sharpens. Pump pathways activate. You\'re ready to lift.',
  },
  {
    time: '30–90',
    name: 'Peak',
    icon: Mountain,
    body: 'Sustained energy from dual caffeine sources. Maximum pump. Locked-in mind-muscle connection.',
  },
  {
    time: '90+',
    name: 'Taper',
    icon: Waves,
    body: 'Smooth comedown. No jitters, no crash. Just the satisfaction of a session well-trained.',
  },
];

export function WhatYoullFeel() {
  return (
    <section
      aria-labelledby="what-youll-feel"
      className="relative bg-ink py-16 sm:py-24 border-t border-ink-600"
    >
      <div className="container">
        <header className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="label-eyebrow mb-3">The Experience</p>
          <h2
            id="what-youll-feel"
            className="font-display text-5xl sm:text-7xl text-white tracking-[0.01em] leading-[0.92] mb-3"
          >
            What You'll Feel
          </h2>
          <p className="text-bone-600 text-[15px] sm:text-base">
            From the first sip to your last set.
          </p>
        </header>

        <ol className="relative max-w-5xl mx-auto">
          {/* Desktop horizontal timeline */}
          <div className="hidden md:grid grid-cols-4 gap-4 relative">
            {/* Connecting line */}
            <div
              aria-hidden
              className="absolute left-[12.5%] right-[12.5%] top-[36px] h-px bg-ink-600"
            />
            {stages.map((s, i) => (
              <Stage key={i} stage={s} index={i} />
            ))}
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden relative pl-10">
            <div
              aria-hidden
              className="absolute left-[19px] top-3 bottom-3 w-px bg-ink-600"
            />
            <div className="space-y-4">
              {stages.map((s, i) => (
                <StageMobile key={i} stage={s} index={i} />
              ))}
            </div>
          </div>
        </ol>
      </div>
    </section>
  );
}

function Stage({ stage, index }: { stage: Stage; index: number }) {
  return (
    <li className="flex flex-col items-center text-center">
      <span className="relative z-10 inline-flex h-[72px] w-[72px] items-center justify-center rounded-full border border-ink-600 bg-ink shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
        <stage.icon className="h-7 w-7 text-bone" strokeWidth={1.5} />
      </span>
      <p className="mt-4 font-display text-2xl text-white tabular-nums">
        {stage.time}
        <span className="text-bone-600 text-base ml-1">min</span>
      </p>
      <p className="mt-1 label-eyebrow">
        Stage {index + 1} · {stage.name}
      </p>
      <p className="mt-3 text-bone-600 text-sm leading-relaxed max-w-[200px]">
        {stage.body}
      </p>
    </li>
  );
}

function StageMobile({ stage, index }: { stage: Stage; index: number }) {
  return (
    <li className="relative">
      <span className="absolute -left-[26px] top-1.5 inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-ink-600 bg-ink">
        <stage.icon className="h-4 w-4 text-bone" strokeWidth={1.5} />
      </span>
      <div className="rounded-xl border border-ink-600 bg-ink-800 p-4">
        <div className="flex items-baseline justify-between mb-1">
          <p className="font-display text-xl text-white tabular-nums">
            {stage.time}
            <span className="text-bone-600 text-sm ml-1">min</span>
          </p>
          <p className="label-eyebrow">
            Stage {index + 1} · {stage.name}
          </p>
        </div>
        <p className="text-bone-600 text-[13px] leading-relaxed">
          {stage.body}
        </p>
      </div>
    </li>
  );
}
