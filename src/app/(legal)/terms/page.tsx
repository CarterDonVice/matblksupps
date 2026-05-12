import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of service for MAT BLK Supplements and the TENET Daily Driver Pre-Workout. Read before purchase.',
};

export default function TermsPage() {
  return (
    <article className="space-y-6">
      <p className="label-eyebrow">Last updated</p>
      <h1 className="font-display text-5xl sm:text-6xl text-white">Terms of Service</h1>
      <p className="text-bone-600">
        Placeholder for the full terms of service. Use of this site implies
        agreement to forthcoming terms.
      </p>
    </article>
  );
}
