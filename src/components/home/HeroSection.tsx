
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogoCarousel } from './LogoCarousel';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-background to-card pt-7 pb-16 md:pt-7 md:pb-20 lg:pt-7 lg:pb-24 px-4">
      <div className="animate-fade-in-up w-full">
        <div className="flex flex-col items-center justify-center mb-8">
          <LogoCarousel />
        </div>
        <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-tight">
          UNWAVERING. UNCOMPROMISING. FULL BODY FUEL
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="btn-primary px-10 py-7 text-lg">
            <Link href="/products/preworkout">Explore Products</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-10 py-7 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/about">Our Philosophy</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
