
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FeaturedProduct } from '@/components/home/FeaturedProduct';
import { ProductDescriptionSection } from '@/components/home/ProductDescriptionSection';
import { ProductIngredientsSection } from '@/components/home/ProductIngredientsSection';
import { Layers, Fuel, FlaskConical } from 'lucide-react';

const DifferentiatorFlexIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10 text-primary"
    >
      <path d="M3 21h3l3.5-6h3l3.5 6h3" />
      <path d="M19 15c-1.6-1.6-1.6-4.4 0-6" />
      <path d="M12 15h2" />
      <path d="M12 5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2Z" />
    </svg>
);


const differentiators = [
    {
        icon: <DifferentiatorFlexIcon />,
        title: 'Dual Pump Pathways',
        description: 'Targeting multiple pathways for a comprehensive and sustained pump.',
    },
    {
        icon: <Fuel className="h-10 w-10 text-primary" />,
        title: 'Performance Carbohydrates',
        description: 'Sustained energy release to fuel you through the toughest workouts.',
    },
    {
        icon: <Layers className="h-10 w-10 text-primary" />,
        title: 'Dual Caffeine Sources',
        description: 'Immediate and extended-release energy to perform now and avoid the crash later.',
    },
    {
        icon: <FlaskConical className="h-10 w-10 text-primary" />,
        title: 'Clinically Dosed',
        description: 'Science-backed ingredients at doses proven to be effective.',
    },
]

export default function HomePage() {
  const dailyDriverProduct = products.find(p => p.id === '6');

  if (!dailyDriverProduct) {
    return <div>Error loading product.</div>;
  }

  return (
    <div>
      {/* New Hero Section */}
      <section className="py-16 md:py-20 bg-background text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-headline text-5xl md:text-7xl font-bold text-primary mb-4 animate-fade-in-up">
              Performance From Every Angle
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Better Input for Better Output. Scientifically designed formulas, made by athletes for athletes.
            </p>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Button asChild size="lg" className="btn-primary px-10 py-7 text-lg">
                    <Link href="/shop/preworkout">Invest In Your Performance</Link>
                </Button>
            </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 md:py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
            {differentiators.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col items-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Section - Moved Down */}
      <FeaturedProduct product={dailyDriverProduct} />
      <ProductDescriptionSection product={dailyDriverProduct} />
      <ProductIngredientsSection product={dailyDriverProduct} />

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
