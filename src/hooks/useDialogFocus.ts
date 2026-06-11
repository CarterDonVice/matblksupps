'use client';

import * as React from 'react';

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Focus management for hand-rolled overlays.
 *
 * - On open: stores the previously focused element and moves focus into the
 *   dialog (first focusable element, falling back to the container).
 * - While open: traps Tab / Shift+Tab inside the dialog.
 * - On close: restores focus to the element that opened the dialog.
 * - Closed state: sets the `inert` property imperatively (React 18 does not
 *   forward the boolean attribute) so hidden overlays are unreachable by
 *   keyboard and assistive tech.
 *
 * The returned ref goes on the overlay root element. Pass `open` so the hook
 * can react to state changes. No visual behavior is affected.
 */
export function useDialogFocus<T extends HTMLElement>(open: boolean) {
  const ref = React.useRef<T | null>(null);
  const restoreRef = React.useRef<HTMLElement | null>(null);

  // Keep closed overlays out of the tab order and accessibility tree.
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.inert = !open;
  }, [open]);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || !open) return;

    restoreRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    // Move focus into the dialog after the open transition starts.
    const first = el.querySelector<HTMLElement>(FOCUSABLE);
    if (first) first.focus();
    else {
      el.tabIndex = -1;
      el.focus();
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusables = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusables.length === 0) {
        e.preventDefault();
        return;
      }
      const firstEl = focusables[0];
      const lastEl = focusables[focusables.length - 1];
      const active = document.activeElement;
      if (e.shiftKey) {
        if (active === firstEl || !el.contains(active)) {
          e.preventDefault();
          lastEl.focus();
        }
      } else if (active === lastEl || !el.contains(active)) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown, true);
    return () => {
      document.removeEventListener('keydown', onKeyDown, true);
      const restore = restoreRef.current;
      if (restore && document.contains(restore)) restore.focus();
    };
  }, [open]);

  return ref;
}
