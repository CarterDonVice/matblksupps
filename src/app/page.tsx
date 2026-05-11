import { Header } from '@/components/site/Header';
import { Hero } from '@/components/product/Hero';
import { SocialProofBar } from '@/components/site/SocialProofBar';
import { FeatureCards } from '@/components/site/FeatureCards';
import { WhatYoullFeel } from '@/components/site/WhatYoullFeel';
import { Testimonials } from '@/components/site/Testimonials';
import { CustomerReviews } from '@/components/site/CustomerReviews';
import { FAQ } from '@/components/site/FAQ';
import { GuaranteeAndBlacklist } from '@/components/site/GuaranteeAndBlacklist';
import { Footer } from '@/components/site/Footer';
import { ProductJsonLd } from '@/components/site/JsonLd';

export default function HomePage() {
  return (
    <>
      <ProductJsonLd />
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProofBar />
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
