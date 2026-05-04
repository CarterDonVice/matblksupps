import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <article className="space-y-6">
      <p className="label-eyebrow">The Brand</p>
      <h1 className="font-display text-5xl sm:text-6xl text-white">
        Built For The Daily Driver
      </h1>
      <p className="text-bone-600">
        MAT BLK Supplements was founded on a simple principle: clinically dosed
        ingredients, no proprietary blends, exceptional flavor. No frontier
        ingredients. No gimmicks. Just what works.
      </p>
      <p className="text-bone-600">
        Premium quality at accessible pricing. Designed for the lifter who shows
        up every day.
      </p>
    </article>
  );
}
