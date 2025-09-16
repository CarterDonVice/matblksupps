
// No "use client" directive here - this is now primarily a Server Component

import { getProductBySlug, getProductsByBaseName, products as allProducts } from '@/data/products';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { ChevronRight } from 'lucide-react';
import { ProductClientContent } from '@/components/products/ProductClientContent';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

// This function is for Next.js to know which slugs to pre-render at build time
export async function generateStaticParams() {
  return allProducts.map(product => ({
    slug: product.slug,
  }));
}

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound(); // Use Next.js notFound for server components
  }

  const relatedFlavors = getProductsByBaseName(product.baseName).filter(p => p.id !== product.id);

  const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const categoryLink = `/shop/${product.category}`;


  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <nav className="mb-8 text-sm text-muted-foreground flex items-center space-x-2">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={16} />
        <Link href={categoryLink} className="hover:text-primary">
          {categoryName}
        </Link>
        <ChevronRight size={16} />
        <span className="text-foreground">{product.fullName}</span>
      </nav>

      {/* Pass product data and allProducts to the client component */}
      <ProductClientContent product={product} allProducts={allProducts} relatedFlavors={relatedFlavors} />
    </div>
  );
}

// Generate metadata for the page
export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist."
    }
  }
  return {
    title: `${product.fullName} | MAT BLK Supplements`,
    description: product.shortDescription || product.description[0],
  };
}
