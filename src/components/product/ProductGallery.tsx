'use client';

import * as React from 'react';
import Image from 'next/image';
import { ImageOff, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

interface Props {
  images: (string | null)[];
  alt: string;
}

export function ProductGallery({ images, alt }: Props) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [zoomOpen, setZoomOpen] = React.useState(false);
  const slidesRef = React.useRef<HTMLDivElement>(null);
  const total = images.length;

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

  const activeSrc = images[activeIndex];

  return (
    <div className="space-y-4 sm:space-y-5">
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
              <Slide
                src={src}
                alt={
                  i === 0
                    ? 'TENET Daily Driver Pre-Workout by MAT BLK — clinically dosed, transparent-label, moderate-stim formula'
                    : `TENET Daily Driver Pre-Workout — clinically dosed pre-workout for serious lifters (view ${i + 1})`
                }
                priority={i === 0}
                onTap={src ? () => setZoomOpen(true) : undefined}
              />
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

        {/* Mobile zoom hint */}
        {activeSrc && (
          <button
            type="button"
            aria-label="View image fullscreen"
            onClick={() => setZoomOpen(true)}
            className="sm:hidden absolute bottom-3 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/80 backdrop-blur border border-ink-600 text-bone z-10"
          >
            <ZoomIn className="h-4 w-4" strokeWidth={1.75} />
          </button>
        )}
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
              <ThumbContent
                src={src}
                alt={`TENET Daily Driver Pre-Workout thumbnail ${i + 1}`}
              />
            </button>
          );
        })}
      </div>

      <ZoomViewer
        open={zoomOpen}
        src={activeSrc}
        alt={alt}
        onClose={() => setZoomOpen(false)}
      />
    </div>
  );
}

function Slide({
  src,
  alt,
  priority,
  onTap,
}: {
  src: string | null;
  alt: string;
  priority?: boolean;
  onTap?: () => void;
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
      <ZoomableImage src={src} alt={alt} priority={priority} onTap={onTap} />
    </>
  );
}

function ZoomableImage({
  src,
  alt,
  priority,
  onTap,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  onTap?: () => void;
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
    <>
      {/* Desktop: cursor-tracked hover zoom */}
      <div
        ref={stageRef}
        className="absolute inset-0 hidden sm:block cursor-zoom-in"
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
            quality={95}
            className="object-contain p-4 sm:p-6 drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)]"
          />
        </div>
      </div>

      {/* Mobile: tap to open fullscreen viewer */}
      <button
        type="button"
        onClick={onTap}
        aria-label="Tap to zoom"
        className="sm:hidden absolute inset-0 z-[1]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          quality={95}
          className="object-contain p-4 drop-shadow-[0_30px_40px_rgba(0,0,0,0.65)]"
        />
      </button>
    </>
  );
}

function ZoomViewer({
  open,
  src,
  alt,
  onClose,
}: {
  open: boolean;
  src: string | null;
  alt: string;
  onClose: () => void;
}) {
  const [scale, setScale] = React.useState(1);

  // Lock scroll + reset zoom on open
  React.useEffect(() => {
    if (!open) {
      setScale(1);
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const lastTap = React.useRef(0);
  const handleTap = () => {
    const now = Date.now();
    // Double-tap detection
    if (now - lastTap.current < 300) {
      setScale((s) => (s > 1 ? 1 : 2.2));
    }
    lastTap.current = now;
  };

  if (!src) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      aria-hidden={!open}
      className={`fixed inset-0 z-[70] bg-ink/98 backdrop-blur-md transition-opacity duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{ touchAction: 'pinch-zoom' }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-ink-800/80 backdrop-blur border border-ink-600 text-bone hover:text-white transition-colors"
      >
        <X className="h-5 w-5" strokeWidth={1.75} />
      </button>

      <p className="absolute top-5 left-5 z-10 label-eyebrow text-bone-500">
        Double-tap or pinch to zoom
      </p>

      <div
        className="absolute inset-0 flex items-center justify-center p-6 overflow-auto"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-[600px] aspect-square transition-transform duration-300 ease-out"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center',
            touchAction: 'pinch-zoom',
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleTap();
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            quality={100}
            className="object-contain pointer-events-none"
          />
        </div>
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
      <Image src={src} alt={alt} fill sizes="120px" quality={90} className="object-contain p-1" />
    </div>
  );
}
