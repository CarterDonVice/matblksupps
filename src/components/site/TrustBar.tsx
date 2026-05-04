import { Beaker, ShieldCheck, Truck, Microscope, BadgeCheck } from 'lucide-react';

const trust = [
  { icon: Beaker, label: 'Clinically Dosed' },
  { icon: BadgeCheck, label: 'No Proprietary Blends' },
  { icon: ShieldCheck, label: '100% Satisfaction Guarantee' },
  { icon: Truck, label: 'Free Shipping 2+ Bottles' },
  { icon: Microscope, label: 'Science-Backed Formula' },
];

export function TrustBar() {
  return (
    <section
      aria-label="Trust signals"
      className="border-y border-ink-600 bg-ink/60"
    >
      <div className="overflow-x-auto scrollbar-hide">
        <ul className="flex items-center gap-7 sm:gap-12 px-5 sm:px-8 py-3.5 min-w-max sm:justify-center">
          {trust.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 text-bone-600 whitespace-nowrap"
            >
              <Icon className="h-4 w-4 text-bone shrink-0" strokeWidth={1.75} />
              <span className="text-[11px] font-semibold tracking-[0.16em] uppercase">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
