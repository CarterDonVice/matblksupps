import { ShieldCheck } from 'lucide-react';

export function SatisfactionGuarantee() {
  return (
    <section
      aria-label="Satisfaction guarantee"
      className="relative bg-ink-700 py-14 sm:py-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 grain opacity-40 pointer-events-none"
      />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-bone-500/40 bg-ink/40">
            <ShieldCheck className="h-7 w-7 text-bone" strokeWidth={1.5} />
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-white tracking-[0.02em] leading-[0.95]">
            100% Satisfaction
            <br />
            Guarantee
          </h2>
          <p className="text-bone-600 text-[15px] sm:text-base max-w-md mx-auto">
            Love it or we make it right. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
