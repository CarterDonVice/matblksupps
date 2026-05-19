import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { Hero } from '@/components/product/Hero';
import { SocialProofBar } from '@/components/site/SocialProofBar';
import { Comparison } from '@/components/site/Comparison';
import { WhatYoullFeel } from '@/components/site/WhatYoullFeel';
import { CustomerReviews } from '@/components/site/CustomerReviews';
import { FAQ } from '@/components/site/FAQ';
import { GuaranteeAndBlacklist } from '@/components/site/GuaranteeAndBlacklist';
import { FillerBand } from '@/components/site/FillerBand';
import { ProductJsonLd, FAQJsonLd } from '@/components/site/JsonLd';
import { Reveal } from '@/components/site/Reveal';
import { ProductSEOContent } from '@/components/product/ProductSEOContent';
import { tenet } from '@/lib/products';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: tenet.slug }];
}

export const metadata: Metadata = {
  title:
    'TENET Daily Driver Pre-Workout — Clinically Dosed, Transparent Label | MAT BLK',
  description:
    'TENET 2026 daily driver pre-workout. 6g L-citrulline, 3.2g beta-alanine, 600mg Alpha-GPC, 100mg caffeine anhydrous. Transparent label. No proprietary blends.',
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug !== tenet.slug) notFound();

  return (
    <>
      <ProductJsonLd />
      <FAQJsonLd />
      <Header />
      <main className="flex-1">
        <Hero />
        <Reveal><SocialProofBar /></Reveal>
        <Reveal><ProductSEOContent /></Reveal>
        <Reveal><Comparison /></Reveal>
        <Reveal><WhatYoullFeel /></Reveal>
        <Reveal><FillerBand text="Train by the Tenet." /></Reveal>
        <Reveal><CustomerReviews /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><GuaranteeAndBlacklist /></Reveal>
      </main>
      <Reveal><Footer /></Reveal>
    </>
  );
}
