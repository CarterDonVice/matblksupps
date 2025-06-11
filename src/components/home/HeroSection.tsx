
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-background to-card py-16 md:py-20 lg:py-24 px-4">
      <div className="animate-fade-in-up">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="font-headline font-bold text-foreground text-center leading-none">
            {/* Font sizes for MAT */}
            <div className="text-[12rem] sm:text-[15rem] md:text-[18rem] lg:text-[22rem] xl:text-[26rem]">MAT</div>
            {/* Slightly larger font sizes for BLK to help match width of MAT, and adjusted negative margins */}
            <div className="text-[12.6rem] sm:text-[15.75rem] md:text-[18.9rem] lg:text-[23.1rem] xl:text-[27.3rem] -mt-[3.15rem] sm:-mt-[3.94rem] md:-mt-[4.73rem] lg:-mt-[5.78rem] xl:-mt-[6.83rem]">BLK</div>
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
