'use client';

import * as React from 'react';
import Image from 'next/image';
import { ImageOff, ChevronLeft, ChevronRight } from 'lucide-react';

interface Props {
  /** First non-null image is the hero. `null` slots are "coming soon" placeholders. */
  images: (string | null)[];
  alt: string;
}

export function ProductGallery({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const slidesRef = React.useRef<HTMLDivElement>(null);
  const total = images.length;

  // Sync active dot with horizontal mobile scroll
  React.useEffect(() => {
    const el = slidesRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setActiveIndex(i);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToIndex = (i: number) => {
    const el = slidesRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
    setActiveIndex(i);
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Hero stage: swipeable on mobile, single big image on desktop */}
      <div className="relative">
        <div
          ref={slidesRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 sm:mx-0"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="snap-center shrink-0 w-screen sm:w-full aspect-square relative"
            >
              <Slide src={src} alt={`${alt} ${i + 1}`} priority={i === 0} />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous image"
          onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className="hidden sm:inline-flex absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-ink/70 backdrop-blur text-bone hover:text-white border border-ink-600 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity z-10"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="Next image"
          onClick={() => scrollToIndex(Math.min(total - 1, activeIndex + 1))}
          disabled={activeIndex === total - 1}
          className="hidden sm:inline-flex absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-ink/70 backdrop-blur text-bone hover:text-white border border-ink-600 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity z-10"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3 px-1">
        {images.map((src, i) => {
          const isActive = activeIndex === i;
          return (
            <button
              key={i}
              type="button"
              aria-label={`View image ${i + 1}`}
              aria-current={isActive}
              onClick={() => scrollToIndex(i)}
              className={[
                'relative aspect-square rounded-lg overflow-hidden border-2',
                'transition-all duration-200 ease-out',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bone',
                isActive
                  ? 'border-white opacity-100 scale-[1.05] shadow-[0_4px_16px_rgba(0,0,0,0.5)]'
                  : 'border-ink-600 opacity-60 hover:opacity-100 hover:border-bone-500 hover:scale-[1.02]',
              ].join(' ')}
            >
              <ThumbContent src={src} alt={`${alt} thumbnail ${i + 1}`} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Main slide. Real product image renders ZoomableImage on desktop; placeholder otherwise. */
function Slide({
  src,
  alt,
  priority,
}: {
  src: string | null;
  alt: string;
  priority?: boolean;
}) {
  if (!src) return <PlaceholderSlide />;
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-x-[8%] inset-y-[12%] product-glow pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-x-[18%] bottom-[5%] h-[10%] rounded-[50%] blur-2xl opacity-70"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.7), transparent 70%)',
        }}
      />
      <ZoomableImage src={src} alt={alt} priority={priority} />
    </>
  );
}

/**
 * Cursor-tracked hover zoom on desktop (≥1024px hover-capable).
 * On mobile/touch the image is plain. Uses transform-origin tied to cursor.
 */
function ZoomableImage({
  src,
  alt,
  priority,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [hovered, setHovered] = React.useState(false);
  const [origin, setOrigin] = React.useState({ x: 50, y: 50 });
  const stageRef = React.useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
    });
  };

  return (
    <div
      ref={stageRef}
      className="absolute inset-0 hidden sm:block group/zoom cursor-zoom-in"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={onMove}
    >
      <div
        className="absolute inset-0 transition-transform duration-200 ease-out will-change-transform"
        style={{
          transform: hovered ? 'scale(2)' : 'scale(1)',
          transformOrigin: `${origin.x}% ${origin.y}%`,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-contain p-4 sm:p-6 drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)]"
        />
      </div>
      {/* Mobile fallback (always-on, no zoom) */}
      <div className="sm:hidden absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-contain p-4 drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)]"
        />
      </div>
    </div>
  );
}

function PlaceholderSlide() {
  return (
    <div className="absolute inset-3 sm:inset-5 rounded-2xl border border-dashed border-ink-600 bg-ink-800/40 flex flex-col items-center justify-center text-center px-6 gap-3">
      <ImageOff className="h-8 w-8 text-bone-500" strokeWidth={1.5} />
      <p className="label-eyebrow">Image Coming Soon</p>
    </div>
  );
}

function ThumbContent({ src, alt }: { src: string | null; alt: string }) {
  if (!src) {
    return (
      <div className="absolute inset-0 bg-ink-800/60 border border-dashed border-ink-600 flex items-center justify-center">
        <ImageOff className="h-4 w-4 text-bone-500" strokeWidth={1.5} aria-label={alt} />
      </div>
    );
  }
  return (
    <div className="absolute inset-0 bg-ink-800/60">
      <Image src={src} alt={alt} fill sizes="120px" className="object-contain p-1" />
    </div>
  );
}
