import { Header } from '@/components/site/Header';
import { Hero } from '@/components/product/Hero';
import { SocialProofBar } from '@/components/site/SocialProofBar';
import { Comparison } from '@/components/site/Comparison';
import { WhatYoullFeel } from '@/components/site/WhatYoullFeel';
import { CustomerReviews } from '@/components/site/CustomerReviews';
import { FAQ } from '@/components/site/FAQ';
import { GuaranteeAndBlacklist } from '@/components/site/GuaranteeAndBlacklist';
import { FillerBand } from '@/components/site/FillerBand';
import { Footer } from '@/components/site/Footer';
import { ProductJsonLd } from '@/components/site/JsonLd';
import { Reveal } from '@/components/site/Reveal';

export default function HomePage() {
  return (
    <>
      <ProductJsonLd />
      <Header />
      <main className="flex-1">
        <Hero />
        <Reveal><SocialProofBar /></Reveal>
        <Reveal><Comparison /></Reveal>
        <Reveal><WhatYoullFeel /></Reveal>
        <Reveal><FillerBand text="Train by the Tenet." /></Reveal>
        <Reveal><CustomerReviews /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><FillerBand text="Every Milligram. Every Ingredient. Every Day." /></Reveal>
        <Reveal><GuaranteeAndBlacklist /></Reveal>
      </main>
      <Reveal><Footer /></Reveal>
    </>
  );
}
