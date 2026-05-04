'use client';

import * as React from 'react';

const messages = [
  'FREE SHIPPING ON 2+ BOTTLES',
  'CLINICALLY DOSED. ZERO COMPROMISES.',
  '20% OFF YOUR FIRST ORDER — SCROLL DOWN',
];

export function AnnouncementBar() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="relative w-full bg-bone text-ink overflow-hidden"
      role="region"
      aria-label="Site announcements"
    >
      <div className="container relative h-9 flex items-center justify-center">
        {messages.map((msg, i) => (
          <span
            key={msg}
            aria-hidden={i !== index}
            className="absolute inset-0 flex items-center justify-center text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-500 ease-out px-4 text-center"
            style={{
              opacity: i === index ? 1 : 0,
              transform: `translateY(${i === index ? 0 : -6}px)`,
            }}
          >
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
}
