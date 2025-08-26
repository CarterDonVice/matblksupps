
import type { Product } from '@/lib/types';

interface ProductDescriptionSectionProps {
  product: Product;
}

export function ProductDescriptionSection({ product }: ProductDescriptionSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
            Product Description
          </h2>
          <div className="text-muted-foreground space-y-4">
            {product.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
      </div>
    </section>
  );
}
