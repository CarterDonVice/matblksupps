import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { CheckCircle } from 'lucide-react';

export function HeroSection() {
  const mainProduct = products.find(p => p.slug === 'mat-blk-pure-and-potent');

  if (!mainProduct) {
    return null; // Or some fallback UI
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              {mainProduct.name} <span className="text-foreground">{mainProduct.subName}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {mainProduct.shortDescription}
            </p>
            <ul className="space-y-3 mb-10">
              {mainProduct.sellingPoints?.slice(0, 2).map((point, index) => (
                <li key={index} className="flex items-center text-lg text-foreground">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-primary px-10 py-7 text-lg">
                <Link href={`/product/${mainProduct.slug}`}>Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="px-10 py-7 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative aspect-square max-w-lg mx-auto rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={mainProduct.images[0]}
                alt={mainProduct.fullName}
                fill
                priority
                className="object-cover"
                data-ai-hint={mainProduct.dataAiHint || "supplement container"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
