
import { getProductsByCategory } from '@/data/products';
import type { ProductCategory } from '@/lib/types';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { CategoryPageClient } from '@/components/products/CategoryPageClient';

interface CategoryPageProps {
  params: {
    category: ProductCategory;
  };
}

// Function to capitalize first letter for titles
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function CategoryPage({ params }: CategoryPageProps) {
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
      <CategoryPageClient products={products} category={category} categoryTitle={categoryTitle} />
    </div>
  );
}

export async function generateMetadata({ params }: { params: { category: ProductCategory } }) {
  const { category } = params;
  const categoryTitle = category === 'preworkout' ? 'Pre-Workout' : capitalize(category);
  return {
    title: `${categoryTitle} | MAT BLK Supplements`,
    description: `Browse our ${category.toLowerCase()} products at MAT BLK Supplements.`,
  };
}
