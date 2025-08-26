
import type { Product } from '@/lib/types';

interface ProductIngredientsSectionProps {
  product: Product;
}

export function ProductIngredientsSection({ product }: ProductIngredientsSectionProps) {
  if (!product.ingredients || product.ingredients.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
          Ingredients
        </h2>
        <div className="bg-card p-6 rounded-lg border border-border/50">
          <ul className="space-y-2 text-muted-foreground columns-1 sm:columns-2">
            {product.ingredients.map((ingredient, index) => {
                const isHeader = !ingredient.startsWith('L-') && !ingredient.startsWith('NO3-T') && !ingredient.startsWith('Alpha-GPC') && !ingredient.startsWith('Huperzine') && !ingredient.startsWith('Caffeine') && !ingredient.startsWith('Dicaffeine') && !ingredient.startsWith('Total') && !ingredient.startsWith('Cluster') && !ingredient.startsWith('Taurine') && !ingredient.startsWith('Himalayan') && !ingredient.startsWith('Potassium') && !ingredient.startsWith('Magnesium') && !ingredient.startsWith('Piperine');
                return (
                <li key={index} className={`${isHeader ? 'font-bold text-foreground pt-2 text-lg' : 'ml-4'} break-inside-avoid-column`}>
                    {ingredient}
                </li>
                )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
