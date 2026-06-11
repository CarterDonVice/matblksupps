import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility',
  description:
    'MAT BLK Supplements is committed to a website everyone can use. How we build toward WCAG 2.1 AA and how to reach us if you hit a barrier.',
  alternates: { canonical: '/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <article className="space-y-6">
      <h1 className="font-display text-5xl sm:text-6xl text-white">
        Accessibility
      </h1>
      <p className="text-bone-600">
        MAT BLK Supplements is committed to a website that everyone can use. We
        build toward the Web Content Accessibility Guidelines (WCAG) 2.1 Level
        AA and review the site against them as it evolves. That work includes
        keyboard navigation, screen reader support, sufficient color contrast,
        and reduced motion preferences. Accessibility is ongoing. If you hit a
        barrier anywhere on this site, tell us and we will work to fix it.
        Reach us at support@matblksupps.com and include the page and the
        problem you ran into.
      </p>
    </article>
  );
}
