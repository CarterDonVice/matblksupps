'use client';

import * as React from 'react';

interface Props {
  /** Single-line copy. Brand voice rule: no em-dashes, colons, semicolons. */
  text: string;
  /** Smaller treatment for inline use (e.g. sub-hero trust line). */
  variant?: 'band' | 'inline-trust' | 'inline-soft';
  className?: string;
}

/**
 * Typography-only filler band. Single line, white text on dark background,
 * generous breathing room between sections.
 */
export function FillerBand({ text, variant = 'band', className }: Props) {
  if (variant === 'inline-trust') {
    return (
      <p
        className={`text-center font-condensed font-bold tracking-[0.18em] uppercase text-bone-600 text-[11px] sm:text-[12px] ${className ?? ''}`}
      >
        {text}
      </p>
    );
  }
  if (variant === 'inline-soft') {
    return (
      <p
        className={`text-center text-bone-600 text-[12px] sm:text-[13px] ${className ?? ''}`}
      >
        {text}
      </p>
    );
  }
  return (
    <section
      aria-hidden="true"
      className={`bg-ink py-[60px] sm:py-[80px] px-5 ${className ?? ''}`}
    >
      <p className="container max-w-3xl text-center font-condensed font-extrabold tracking-[0.14em] uppercase text-white text-2xl sm:text-4xl leading-tight">
        {text}
      </p>
    </section>
  );
}
