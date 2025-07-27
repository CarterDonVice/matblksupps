
import { HeroSection } from '@/components/home/HeroSection';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FeaturedProduct } from '@/components/home/FeaturedProduct';

export default function HomePage() {
  const dailyDriverProduct = products.find(p => p.id === '6');

  if (!dailyDriverProduct) {
    // Fallback or error handling if product not found
    return (
      <div>
        <HeroSection />
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Product Not Found
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              The featured product could not be loaded at this time.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <HeroSection />
      
      <FeaturedProduct product={dailyDriverProduct} />

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
              Why MAT BLK?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              At MAT BLK, we're done with underdosed and overhyped supplements. Every product is built on real science, fully dosed, and made with quality ingredients that deliver. We’re here to raise the standard so you can push harder, train better, and get more out of every workout.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
