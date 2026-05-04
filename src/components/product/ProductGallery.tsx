'use client';

import * as React from 'react';
import Image from 'next/image';

interface Props {
  images: string[];
  alt: string;
}

export function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Sync active dot with horizontal scroll on mobile
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setActive(i);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 sm:mx-0 sm:rounded-2xl sm:bg-ink-800/60 sm:border sm:border-ink-600"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-screen sm:w-full aspect-square relative"
          >
            <div className="absolute inset-0 vignette pointer-events-none" />
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-4"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-4">
          {images.map((_, i) => (
            <span
              key={i}
              aria-hidden
              className={`h-1.5 rounded-full transition-all ${
                i === active ? 'w-6 bg-bone' : 'w-1.5 bg-ink-600'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
