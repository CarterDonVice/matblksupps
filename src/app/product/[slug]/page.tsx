// Rebuilt from scratch to conform to Next.js 15 architecture.

// This page will be a Server Component to handle data fetching and metadata.
import { getProductBySlug, getProductsByBaseName, products as allProducts } from '@/data/products';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import { ProductClientContent } from '@/components/products/ProductClientContent';
import type { ProductCategory } from '@/lib/types';

// This function tells Next.js which dynamic routes to pre-build at build time.
export async function generateStaticParams() {
  return allProducts.map(product => ({
    slug: product.slug,
  }));
}

// Define the expected props structure for this page.
// It receives `params` which contains the dynamic `slug` from the URL.
interface ProductPageProps {
  params: {
    slug: string;
  };
}

// This is the main Server Component for the product page.
// It is marked `async` to allow for data fetching.
// CRITICAL FIX: The `slug` is destructured directly from `params` in the function signature.
// This is the correct pattern for Next.js 15 to avoid the "param property was accessed directly" error.
export default async function ProductPage({ params: { slug } }: ProductPageProps) {
  
  // Fetch the specific product data on the server using the slug.
  const product = getProductBySlug(slug);

  // If no product is found for the given slug, show a 404 page.
  if (!product) {
    notFound();
  }

  // Find other flavors of the same product to display as alternatives.
  const relatedFlavors = getProductsByBaseName(product.baseName).filter(p => p.id !== product.id);

  // Prepare data for the breadcrumb navigation.
  const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const categoryLink = `/shop/${product.category}`;

  // This Server Component returns JSX.
  // It handles the overall page layout and passes the fetched data down to a Client Component.
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8 text-sm text-muted-foreground flex items-center space-x-2">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={16} />
        <Link href={categoryLink} className="hover:text-primary">
          {categoryName}
        </Link>
        <ChevronRight size={16} />
        <span className="text-foreground">{product.fullName}</span>
      </nav>

      {/* 
        The actual interactive UI for the product (image gallery, add to cart button, etc.)
        is handled by a Client Component. We pass all the necessary data fetched on the
        server down to it as props.
      */}
      <ProductClientContent 
        product={product} 
        allProducts={allProducts} 
        relatedFlavors={relatedFlavors} 
      />
    </div>
  );
}

// This function generates the page's metadata (like title and description) on the server.
// CRITICAL FIX: Just like the page component, it destructures `slug` directly from `params`.
export async function generateMetadata({ params: { slug } }: ProductPageProps) {
  const product = getProductBySlug(slug);

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
