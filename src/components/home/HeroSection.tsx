
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-br from-background to-card p-4">
      <div className="animate-fade-in-up">
        <div className="flex flex-col items-center justify-center mb-8">
          <Zap className="h-28 w-28 md:h-36 md:w-36 text-primary mb-4" />
          <h1 className="font-headline text-7xl md:text-8xl lg:text-9xl font-bold text-foreground">
            MAT BLK
          </h1>
        </div>
        <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-tight">
          High Quality. Pure. Potent. No Compromises.
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
