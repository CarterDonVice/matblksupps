'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';

interface Props {
  text: string;
}

export function ReadMoreDescription({ text }: Props) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div className="border-t border-ink-600 pt-5">
      <p
        className={`text-bone-600 text-[14px] leading-relaxed ${
          expanded ? '' : 'line-clamp-3'
        }`}
      >
        {text}
      </p>
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-2 inline-flex items-center gap-1.5 text-bone hover:text-white transition-colors text-xs tracking-[0.16em] uppercase font-semibold"
      >
        {expanded ? 'Read less' : 'Read more'}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
          strokeWidth={2}
        />
      </button>
    </div>
  );
}
