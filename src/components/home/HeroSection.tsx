
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogoCarousel } from './LogoCarousel';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-background to-card pb-8 md:pb-14 lg:pb-16 px-4 pt-28">
      <div className="w-full overflow-x-hidden">
        <div className="flex flex-col items-center justify-center mb-8">
          <LogoCarousel />
        </div>
        <p className="font-headline text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-tight">
          UNWAVERING. UNCOMPROMISING. FULL BODY FUEL
        </p>
      </div>
    </section>
  );
}
