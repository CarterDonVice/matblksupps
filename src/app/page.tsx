import { AnnouncementBar } from '@/components/site/AnnouncementBar';
import { Header } from '@/components/site/Header';
import { Hero } from '@/components/product/Hero';
import { TrustBar } from '@/components/site/TrustBar';
import { KeyBenefits } from '@/components/site/KeyBenefits';
import { IngredientAccordion } from '@/components/site/IngredientAccordion';
import { SatisfactionGuarantee } from '@/components/site/SatisfactionGuarantee';
import { CustomerReviews } from '@/components/site/CustomerReviews';
import { Footer } from '@/components/site/Footer';
import { ProductJsonLd } from '@/components/site/JsonLd';
import { StickyAddToCart } from '@/components/product/StickyAddToCart';

export default function HomePage() {
  return (
    <>
      <ProductJsonLd />
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <KeyBenefits />
        <IngredientAccordion />
        <SatisfactionGuarantee />
        <CustomerReviews />
      </main>
      <Footer />
      <StickyAddToCart />
    </>
  );
}
