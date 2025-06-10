"use client"; // Required for useState and useCart

import { useEffect, useState } from 'react';
import { getProductBySlug, products as allProducts } from '@/data/products';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ChevronRight, Minus, Plus, ShoppingCartIcon, Zap } from 'lucide-react';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import { ProductCard } from '@/components/products/ProductCard';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (product) {
      const filtered = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
      setRelatedProducts(filtered);
    }
  }, [product]);


  if (!product) {
    // If product is not found client-side (e.g., after client navigation)
    // For a real app, you might want a more robust notFound handling here or rely on server-side notFound
    return <div className="container mx-auto py-12 text-center">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: `${product.fullName} added to cart!`,
      description: `Quantity: ${quantity}`,
      action: (
         <Link href="/cart">
            <Button variant="outline" size="sm">
                View Cart
            </Button>
         </Link>
      ),
    });
  };
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <nav className="mb-8 text-sm text-muted-foreground flex items-center space-x-2">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={16} />
        <Link href={`/products/${product.category}`} className="hover:text-primary">
          {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </Link>
        <ChevronRight size={16} />
        <span className="text-foreground">{product.fullName}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start mb-16">
        <ProductImageGallery images={product.images} altText={product.fullName} dataAiHint={product.dataAiHint} />
        
        <div className="space-y-6">
          <h1 className="font-headline text-4xl lg:text-5xl font-bold text-primary">{product.name} <span className="text-foreground">{product.subName}</span></h1>
          
          <p className="font-headline text-3xl text-foreground font-semibold">
            ${product.price.toFixed(2)}
          </p>

          {product.shortDescription && <p className="text-lg text-muted-foreground">{product.shortDescription}</p>}
          
          {product.sellingPoints && product.sellingPoints.length > 0 && (
            <ul className="space-y-2 pt-2">
              {product.sellingPoints.map((point, index) => (
                <li key={index} className="flex items-center text-foreground">
                  <Zap className="h-5 w-5 text-primary mr-2 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-4 pt-4">
            <p className="text-sm font-medium text-foreground">Quantity:</p>
            <div className="flex items-center border border-border rounded-md">
              <Button variant="ghost" size="icon" onClick={decreaseQuantity} className="h-10 w-10 rounded-r-none">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 w-12 text-center font-medium">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={increaseQuantity} className="h-10 w-10 rounded-l-none">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button size="lg" className="w-full btn-primary py-7 text-lg" onClick={handleAddToCart}>
            <ShoppingCartIcon className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description">
              <AccordionTrigger className="text-xl font-headline hover:no-underline">Product Description</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-4 pt-2">
                {product.description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </AccordionContent>
            </AccordionItem>
            {product.ingredients && product.ingredients.length > 0 && (
              <AccordionItem value="ingredients">
                <AccordionTrigger className="text-xl font-headline hover:no-underline">Ingredients</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2">
                  <ul className="list-disc list-inside space-y-1">
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="pt-16 border-t border-border/40">
           <h2 className="font-headline text-3xl md:text-4xl font-bold text-center text-foreground mb-10">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      )}
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
