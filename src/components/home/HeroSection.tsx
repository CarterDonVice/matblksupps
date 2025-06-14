
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-background to-card py-16 md:py-20 lg:py-24 px-4">
      <div className="animate-fade-in-up">
        <div className="flex flex-col items-center justify-center mb-8">
          <Image
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2236741981.
            src="/public/images/logopng.png"
            alt="MAT BLK Logo"
            width={150}
            height={150}
            className="object-contain"
            priority
            data-ai-hint="company logo main"
          />
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
