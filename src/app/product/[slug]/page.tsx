import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Star } from 'lucide-react';
import { AnnouncementBar } from '@/components/site/AnnouncementBar';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { TrustBar } from '@/components/site/TrustBar';
import { IngredientAccordion } from '@/components/site/IngredientAccordion';
import { CustomerReviews } from '@/components/site/CustomerReviews';
import { SatisfactionGuarantee } from '@/components/site/SatisfactionGuarantee';
import { FlavorSelector } from '@/components/product/FlavorSelector';
import { PurchaseTypeSelector } from '@/components/product/PurchaseTypeSelector';
import { StickyAddToCart } from '@/components/product/StickyAddToCart';
import { ProductDetailAccordion } from '@/components/product/ProductDetailAccordion';
import { ProductGallery } from '@/components/product/ProductGallery';
import { ReadMoreDescription } from '@/components/product/ReadMoreDescription';
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
    'Best clinically dosed pre-workout supplement. Science-backed daily driver formula with L-Citrulline, Alpha-GPC, dual caffeine. No proprietary blends.',
};

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = blackoutDailyDriver;
  if (slug !== product.slug) notFound();

  return (
    <>
      <ProductJsonLd />
      <AnnouncementBar />
      <Header />

      <main className="flex-1">
        <section className="bg-ink pt-2 pb-10 sm:pt-6 sm:pb-14">
          <div className="container">
            <div className="grid lg:grid-cols-2 lg:gap-12">
              <ProductGallery
                images={product.images}
                alt={`${product.name} pre-workout`}
              />

              <div className="mt-6 lg:mt-0 max-w-md mx-auto lg:mx-0 lg:pt-8 space-y-6">
                <div>
                  <p className="label-eyebrow mb-2">Pre-Workout</p>
                  <h1 className="font-display text-4xl sm:text-5xl text-white tracking-[0.01em] leading-[0.95]">
                    {product.name}
                  </h1>
                  <p className="mt-2 text-bone-600 text-sm tracking-[0.18em] uppercase font-semibold">
                    {product.subName}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center gap-0.5"
                    aria-label={`${product.averageRating} stars`}
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.round(product.averageRating)
                            ? 'text-bone fill-bone'
                            : 'text-bone-500'
                        }`}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <span className="text-bone-600 text-xs">
                    <span className="text-bone font-medium">
                      {product.averageRating.toFixed(1)}
                    </span>{' '}
                    · {product.reviewCount} reviews
                  </span>
                  <span aria-hidden className="text-bone-500">·</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-bone-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    In Stock
                  </span>
                </div>

                <FlavorSelector />
                <PurchaseTypeSelector />

                <ReadMoreDescription text={product.longDescription} />
              </div>
            </div>
          </div>
        </section>

        <TrustBar />
        <ProductDetailAccordion />
        <IngredientAccordion />
        <SatisfactionGuarantee />
        <CustomerReviews />
      </main>

      <Footer />
      <StickyAddToCart />
    </>
  );
}
