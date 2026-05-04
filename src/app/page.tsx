import { AnnouncementBar } from '@/components/site/AnnouncementBar';
import { Header } from '@/components/site/Header';
import { Hero } from '@/components/product/Hero';
import { IngredientList } from '@/components/site/IngredientList';
import { FeatureCards } from '@/components/site/FeatureCards';
import { CustomerReviews } from '@/components/site/CustomerReviews';
import { NewsletterSignup } from '@/components/site/NewsletterSignup';
import { Footer } from '@/components/site/Footer';
import { ProductJsonLd } from '@/components/site/JsonLd';

export default function HomePage() {
  return (
    <>
      <ProductJsonLd />
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <IngredientList />
        <FeatureCards />
        <CustomerReviews />
        <NewsletterSignup />
      </main>
      <Footer />
    </>
  );
}
