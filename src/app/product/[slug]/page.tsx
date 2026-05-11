import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { Hero } from '@/components/product/Hero';
import { SocialProofBar } from '@/components/site/SocialProofBar';
import { FeatureCards } from '@/components/site/FeatureCards';
import { WhatYoullFeel } from '@/components/site/WhatYoullFeel';
import { Testimonials } from '@/components/site/Testimonials';
import { CustomerReviews } from '@/components/site/CustomerReviews';
import { FAQ } from '@/components/site/FAQ';
import { GuaranteeAndBlacklist } from '@/components/site/GuaranteeAndBlacklist';
import { ProductJsonLd } from '@/components/site/JsonLd';
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
        <SocialProofBar />
        <ProductDescription />
        <FeatureCards />
        <WhatYoullFeel />
        <Testimonials />
        <CustomerReviews />
        <FAQ />
        <GuaranteeAndBlacklist />
      </main>
      <Footer />
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
