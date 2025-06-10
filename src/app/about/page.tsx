import Image from 'next/image';
import { Zap, Target, ShieldCheck, TestTube2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | MAT BLK Supplements',
  description: 'Learn about MAT BLK Supplements mission, values, and our commitment to quality.',
};

export default function AboutPage() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: 'Peak Potency',
      description: 'We believe in formulations that deliver tangible results. Our supplements are packed with clinically effective doses of the highest quality ingredients.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Uncompromising Quality',
      description: 'From raw ingredient sourcing to final product testing, quality is paramount. We partner with cGMP certified facilities to ensure purity and safety.',
    },
    {
      icon: <TestTube2 className="h-10 w-10 text-primary" />,
      title: 'Science-Backed Formulas',
      description: 'Our products aren\'t based on hype. Each ingredient is selected based on scientific research demonstrating its efficacy and synergistic potential.',
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-headline text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-up">
            About MAT BLK
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            We are MAT BLK. Forged from a relentless pursuit of excellence, we craft premium supplements for those who demand more from their bodies and their lives.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <Image
                src="https://placehold.co/700x500.png"
                alt="MAT BLK Research and Development"
                width={700}
                height={500}
                className="rounded-lg shadow-2xl object-cover"
                data-ai-hint="science lab"
              />
            </div>
            <div className="space-y-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <h2 className="font-headline text-4xl font-bold text-foreground">
                Our Philosophy: <span className="text-primary">Pure. Potent. Proven.</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                In a world saturated with fleeting trends and exaggerated claims, MAT BLK stands for unwavering integrity. Our name, derived from "matte black," symbolizes sophistication, power, and a commitment to essential, high-impact performance. We strip away the unnecessary, focusing solely on what works.
              </p>
              <p className="text-lg text-muted-foreground">
                Our mission is to empower you to unlock your full potential. We meticulously design each product with scientifically validated ingredients at doses that make a difference. No fillers, no shortcuts – just pure, potent formulations you can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another supplement company. We're your partners in performance.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-8 bg-background rounded-lg shadow-xl text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in-up"
                style={{animationDelay: `${(index * 0.2) + 0.2}s`}}
              >
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          <Target className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join the MAT BLK Movement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to elevate your game? Experience the MAT BLK difference and redefine your limits.
          </p>
          {/* <Button size="lg" className="btn-primary px-10 py-7 text-lg">
            <Link href="/products/preworkout">Shop Our Collection</Link>
          </Button> */}
        </div>
      </section>
    </div>
  );
}
