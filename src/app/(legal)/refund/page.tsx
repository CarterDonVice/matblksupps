import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    '100% satisfaction guarantee on TENET Daily Driver Pre Workout. Contact us within 30 days for a full refund.',
};

export default function RefundPage() {
  return (
    <article className="space-y-6">
      <p className="label-eyebrow">Last updated</p>
      <h1 className="font-display text-5xl sm:text-6xl text-white">Refund Policy</h1>
      <p className="text-bone-600">
        100% satisfaction guarantee. If you&apos;re not happy with your order,
        contact us within 30 days for a refund or replacement, no questions
        asked.
      </p>
    </article>
  );
}
