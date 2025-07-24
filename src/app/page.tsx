
import { HeroSection } from '@/components/home/HeroSection';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { LogoCarousel } from '@/components/home/LogoCarousel';

export default function HomePage() {
  // Define the IDs of the products you want to feature
  // New order: G2 (ID '6'), Jitter Bug (ID '2'), Protein (ID '5'), Stacked Creatine (ID '4')
  const featuredProductIds = ['6', '2', '5', '4']; 
  
  // Filter the products array to get the featured products
  let selectedFeaturedProducts = products.filter(product => 
    featuredProductIds.includes(product.id)
  );

  // Sort the selected featured products to maintain the specified order on the page
  selectedFeaturedProducts.sort((a, b) => featuredProductIds.indexOf(a.id) - featuredProductIds.indexOf(b.id));
  
  const featuredProducts = selectedFeaturedProducts;

  return (
    <div>
      <HeroSection />
      <LogoCarousel />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our Arsenal
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover clinically dosed supplements engineered for peak performance and optimal results.
            </p>
          </div>
          
          {featuredProducts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {featuredProducts.map((product, index) => (
                <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}

          <div className="text-center animate-fade-in-up" style={{ animationDelay: `${(featuredProducts.length + 1) * 0.2}s` }}>
            <Button asChild size="lg" className="btn-primary px-8 py-6 text-base">
              <Link href="/products/preworkout">View All Pre-Workouts</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
              Why MAT BLK?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              At MAT BLK, we're obsessed with purity, potency, and performance. Our formulations are backed by science and crafted with the highest quality ingredients to ensure you achieve your goals. No compromises, just results.
            </p>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base">
              <Link href="/about">Our Philosophy</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
