
"use client";

import type { Product, ProductCategory } from '@/lib/types';
import { ProductCard } from '@/components/products/ProductCard';

interface CategoryPageClientProps {
  products: Product[];
  category: ProductCategory;
  categoryTitle: string;
}

export function CategoryPageClient({ products, category, categoryTitle }: CategoryPageClientProps) {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          {categoryTitle}
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our {category.toLowerCase()} supplements, crafted for excellence.
        </p>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-muted-foreground">
            No products found in this category yet. Stay tuned!
          </p>
        </div>
      )}
    </>
  );
}
