
import { getProductsByCategory } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import type { ProductCategory } from '@/lib/types';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export async function generateStaticParams() {
  const categories: ProductCategory[] = ['preworkout', 'protein', 'creatine'];
  return categories.map(category => ({ category }));
}

interface CategoryPageProps {
  params: {
    category: ProductCategory;
  };
}

// Function to capitalize first letter for titles
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const products = getProductsByCategory(category);

  if (!products.length && !['preworkout', 'protein', 'creatine'].includes(category)) {
    notFound();
  }
  
  const categoryTitle = category === 'preworkout' ? 'Pre-Workout' : capitalize(category);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <nav className="mb-8 text-sm text-muted-foreground flex items-center space-x-2">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={16} />
        <span>Products</span>
        <ChevronRight size={16} />
        <span className="text-foreground">{categoryTitle}</span>
      </nav>

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
    </div>
  );
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = params;
  const categoryTitle = category === 'preworkout' ? 'Pre-Workout' : capitalize(category);
  return {
    title: `${categoryTitle} | MAT BLK Supplements`,
    description: `Browse our ${category.toLowerCase()} products at MAT BLK Supplements.`,
  };
}
