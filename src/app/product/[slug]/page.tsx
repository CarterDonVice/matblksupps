// src/app/product/[slug]/page.tsx

import { getProductBySlug, getProductsByBaseName, products as allProducts } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { ProductClientContent } from '@/components/products/ProductClientContent';

// Prebuild dynamic routes for SSG
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return allProducts.map(p => ({ slug: p.slug }));
}

// If you want ISR, uncomment and tune:
// export const revalidate = 60; // seconds

// Next.js 15: params is a Promise in Server Components
interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedFlavors = getProductsByBaseName(product.baseName).filter(p => p.id !== product.id);

  const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const categoryLink = `/shop/${product.category}`;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted-foreground flex items-center space-x-2">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={16} />
        <Link href={categoryLink} className="hover:text-primary">
          {categoryName}
        </Link>
        <ChevronRight size={16} />
        <span className="text-foreground">{product.fullName}</span>
      </nav>

      <ProductClientContent
        product={product}
        allProducts={allProducts}
        relatedFlavors={relatedFlavors}
      />
    </div>
  );
}

// Next.js 15: generateMetadata also receives params as a Promise
export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.fullName} | MAT BLK Supplements`,
    description: product.shortDescription || product.description[0],
  };
}