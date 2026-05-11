import * as React from 'react';

/**
 * Sharp 5-point classic star (geometric, not rounded like Lucide's).
 * Gold fill (#D4AF37) with lighter gold stroke (#E8D4A0) outline.
 * Pass `empty` to render the unfilled state.
 */
interface Props extends Omit<React.SVGProps<SVGSVGElement>, 'fill'> {
  empty?: boolean;
  /** Pixel size — applied to both width and height. Defaults to inheriting via className. */
  size?: number;
}

export function StarSharp({ empty, size, className, ...rest }: Props) {
  const fill = empty ? 'transparent' : 'currentColor';
  const stroke = empty ? 'currentColor' : 'rgba(232, 212, 160, 0.95)';
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path
        d="M12 1 L14.5 8.6 L22.5 8.6 L16 13.3 L18.5 20.9 L12 16.2 L5.5 20.9 L8 13.3 L1.5 8.6 L9.5 8.6 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={empty ? 1.4 : 1.2}
        strokeLinejoin="miter"
        strokeMiterlimit={4}
      />
    </svg>
  );
}

/**
 * Reusable star row that always renders 5 stars, filling N of them.
 */
export function StarRow({
  rating,
  size = 16,
  className,
  label,
}: {
  rating: number;
  size?: number;
  className?: string;
  label?: string;
}) {
  const filled = Math.round(rating);
  return (
    <div
      className={`flex items-center gap-0.5 text-gold ${className ?? ''}`}
      aria-label={label ?? `${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <StarSharp
          key={i}
          size={size}
          empty={i >= filled}
          className={i >= filled ? 'text-bone-500' : 'text-gold'}
        />
      ))}
    </div>
  );
}
