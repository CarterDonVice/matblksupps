'use client';

import * as React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
  /** ms delay before showing — useful for cascading entries */
  delay?: number;
  /** Render as something other than a <div> (e.g. "section", "article") */
  as?: keyof React.JSX.IntrinsicElements;
}

/**
 * Scroll-fade wrapper. Uses IntersectionObserver to add a one-time
 * fade-in + slight upward translation when the element enters the viewport.
 * Respects prefers-reduced-motion via globals.css.
 */
export function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const ref = React.useRef<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // SSR safety + Safari old fallback
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref as React.Ref<HTMLElement>}
      className={[
        'transition-[opacity,transform] duration-500 ease-out will-change-transform',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className ?? '',
      ].join(' ')}
      style={visible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
