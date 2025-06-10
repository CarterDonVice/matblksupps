
"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from "@/hooks/use-toast";
import { Minus, Plus, ShoppingCartIcon, Zap } from 'lucide-react';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import { ProductCard } from '@/components/products/ProductCard';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ProductClientContentProps {
  product: Product;
  allProducts: Product[];
}

export function ProductClientContent({ product, allProducts }: ProductClientContentProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (product) {
      const filtered = allProducts.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
      setRelatedProducts(filtered);
    }
  }, [product, allProducts]);

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
    <>
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
    </>
  );
}
