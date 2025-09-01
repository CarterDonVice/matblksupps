
import { products } from '@/data/products';
import { ProductCard } from '@/components/products/ProductCard';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shop All Products | MAT BLK Supplements',
  description: 'Browse the complete collection of MAT BLK supplements.',
};

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <nav className="mb-8 text-sm text-muted-foreground flex items-center space-x-2">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={16} />
        <span className="text-foreground">Shop</span>
      </nav>

      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
          All Products
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our entire collection of premium supplements, crafted for excellence.
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
            No products found. Stay tuned!
          </p>
        </div>
      )}
    </div>
  );
}
