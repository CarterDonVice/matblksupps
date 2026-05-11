import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { Hero } from '@/components/product/Hero';
import { SocialProofBar } from '@/components/site/SocialProofBar';
import { FeatureCards } from '@/components/site/FeatureCards';
import { Comparison } from '@/components/site/Comparison';
import { BehindTheFormula } from '@/components/site/BehindTheFormula';
import { WhatYoullFeel } from '@/components/site/WhatYoullFeel';
import { Testimonials } from '@/components/site/Testimonials';
import { CustomerReviews } from '@/components/site/CustomerReviews';
import { FAQ } from '@/components/site/FAQ';
import { GuaranteeAndBlacklist } from '@/components/site/GuaranteeAndBlacklist';
import { FillerBand } from '@/components/site/FillerBand';
import { ProductJsonLd } from '@/components/site/JsonLd';
import { Reveal } from '@/components/site/Reveal';
import { tenet } from '@/lib/products';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: tenet.slug }];
}

export const metadata: Metadata = {
  title: 'TENET — Best Clinically Dosed Daily Pre-Workout',
  description:
    'TENET is a clinically dosed daily driver pre-workout. Science-backed formula with L-Citrulline, Sodium Nitrate, Beta-Alanine, Alpha-GPC, and dual caffeine. No proprietary blends.',
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug !== tenet.slug) notFound();

  return (
    <>
      <ProductJsonLd />
      <Header />
      <main className="flex-1">
        <Hero />
        <Reveal><SocialProofBar /></Reveal>
        <Reveal><ProductDescription /></Reveal>
        <Reveal><FeatureCards /></Reveal>
        <Reveal><FillerBand text="No Crash. No Junk. No Shortcuts." /></Reveal>
        <Reveal><Comparison /></Reveal>
        <Reveal><BehindTheFormula /></Reveal>
        <Reveal><WhatYoullFeel /></Reveal>
        <Reveal><FillerBand text="Train by the Tenet." /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><CustomerReviews /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><FillerBand text="Every Milligram. Every Ingredient. Every Day." /></Reveal>
        <Reveal><GuaranteeAndBlacklist /></Reveal>
      </main>
      <Reveal><Footer /></Reveal>
    </>
  );
}

function ProductDescription() {
  return (
    <section
      aria-labelledby="product-description"
      className="bg-ink-800 py-14 sm:py-20 border-t border-ink-600"
    >
      <div className="container max-w-2xl">
        <h2
          id="product-description"
          className="font-display text-4xl sm:text-5xl text-white tracking-[0.01em] leading-[0.95] mb-5"
        >
          About the Formula
        </h2>
        <p className="text-bone-600 text-[15px] sm:text-base leading-relaxed">
          {tenet.longDescription}
        </p>
      </div>
    </section>
  );
}
