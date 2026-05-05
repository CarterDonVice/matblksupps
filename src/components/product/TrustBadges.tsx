import { ShieldCheck, Eye } from 'lucide-react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface Badge {
  icon: IconComponent;
  label: string;
}

const badges: Badge[] = [
  { icon: ShieldCheck, label: 'GMP-Compliant Facility' },
  { icon: FlagUSA, label: 'Made in USA' },
  { icon: Eye, label: 'Transparent Formula' },
];

/** Simple flat USA-flag glyph — built inline so we don't ship an extra dep. */
function FlagUSA(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="0.6" y="0.6" width="22.8" height="14.8" rx="1" />
      {/* Stripes */}
      <line x1="9.5" y1="3.4" x2="23.4" y2="3.4" />
      <line x1="0.6" y1="6.2" x2="23.4" y2="6.2" />
      <line x1="0.6" y1="9.0" x2="23.4" y2="9.0" />
      <line x1="0.6" y1="11.8" x2="23.4" y2="11.8" />
      {/* Canton */}
      <rect x="0.6" y="0.6" width="9" height="6.4" />
    </svg>
  );
}

export function TrustBadges() {
  return (
    <ul
      aria-label="Product trust badges"
      className="grid grid-cols-3 gap-2 sm:gap-3"
    >
      {badges.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex flex-col items-center text-center gap-2 rounded-xl border border-ink-600 bg-ink-800/40 px-2.5 py-3"
        >
          <Icon
            className="h-5 w-5 sm:h-6 sm:w-6 text-white shrink-0"
            strokeWidth={1.5}
          />
          <span className="text-bone-600 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] uppercase leading-tight">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
