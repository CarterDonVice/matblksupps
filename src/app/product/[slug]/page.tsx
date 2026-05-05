import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { Hero } from '@/components/product/Hero';
import { FeatureCards } from '@/components/site/FeatureCards';
import { CustomerReviews } from '@/components/site/CustomerReviews';
import { NewsletterSignup } from '@/components/site/NewsletterSignup';
import { ProductJsonLd } from '@/components/site/JsonLd';
import { blackoutDailyDriver } from '@/lib/products';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: blackoutDailyDriver.slug }];
}

export const metadata: Metadata = {
  title: 'Blackout Daily Driver — Best Clinically Dosed Pre-Workout',
  description:
    'Best clinically dosed pre-workout supplement. Science-backed daily driver formula with L-Citrulline, Sodium Nitrate, Beta-Alanine, Alpha-GPC, and dual caffeine. No proprietary blends.',
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (slug !== blackoutDailyDriver.slug) notFound();

  return (
    <>
      <ProductJsonLd />
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductDescription />
        <FeatureCards />
        <CustomerReviews />
        <NewsletterSignup />
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
          {blackoutDailyDriver.longDescription}
        </p>
      </div>
    </section>
  );
}
