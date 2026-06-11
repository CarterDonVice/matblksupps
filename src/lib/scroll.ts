'use client';

/** Smooth-scroll an in-page element into view, accounting for sticky header. */
export function scrollToId(id: string, offset = 80) {
  if (typeof window === 'undefined') return;
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  const reduceMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' });
}
