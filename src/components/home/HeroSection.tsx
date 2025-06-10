
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-background to-card py-16 md:py-20 lg:py-24 px-4">
      <div className="animate-fade-in-up">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="font-headline font-bold text-foreground text-center leading-none">
            <div className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem]">MAT</div>
            <div className="text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem] xl:text-[16rem] -mt-[2rem] sm:-mt-[2.5rem] md:-mt-[3rem] lg:-mt-[3.5rem] xl:-mt-[4rem]">BLK</div>
          </div>
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
