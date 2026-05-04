import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <article className="prose-content space-y-6">
      <p className="label-eyebrow">Last updated May 2026</p>
      <h1 className="font-display text-5xl sm:text-6xl text-white">Privacy Policy</h1>
      <p className="text-bone-600">
        We respect your privacy. This page is a placeholder for the full privacy
        policy. Please contact us at hello@matblksupps.com with any questions.
      </p>
    </article>
  );
}
