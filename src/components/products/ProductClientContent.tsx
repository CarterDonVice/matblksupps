
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
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

interface ProductClientContentProps {
  product: Product;
  allProducts: Product[];
  relatedFlavors: Product[];
}

export function ProductClientContent({ product, allProducts, relatedFlavors }: ProductClientContentProps) {
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
        
        <div className="space-y-6 bg-black/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg">
          <h1 className="font-headline font-bold">
            <span className="text-5xl lg:text-6xl text-foreground">{product.baseName}</span>
            <span className="text-5xl lg:text-6xl text-primary ml-4">{product.subName}</span>
          </h1>
          
          <p className="font-headline text-3xl text-foreground font-semibold">
            ${product.price.toFixed(2)}
          </p>

          {relatedFlavors.length > 0 && (
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Flavor: <span className="text-primary font-bold">{product.flavor}</span></p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" className="text-lg py-1 px-3 border-primary">{product.flavor}</Badge>
                {relatedFlavors.map(flavor => (
                  <Link href={`/product/${flavor.slug}`} key={flavor.id}>
                    <Badge variant="outline" className="text-lg py-1 px-3 cursor-pointer hover:bg-accent hover:text-accent-foreground">{flavor.flavor}</Badge>
                  </Link>
                ))}
              </div>
            </div>
          )}


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
            <div className="flex items-center border border-white/20 rounded-md">
              <Button variant="ghost" size="icon" onClick={decreaseQuantity} className="h-10 w-10 rounded-r-none" disabled={product.isOutOfStock}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="px-4 w-12 text-center font-medium">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={increaseQuantity} className="h-10 w-10 rounded-l-none" disabled={product.isOutOfStock}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button size="lg" className="w-full btn-primary py-7 text-lg" onClick={handleAddToCart} disabled={product.isOutOfStock}>
            {product.isOutOfStock ? (
              'Out of Stock'
            ) : (
              <>
                <ShoppingCartIcon className="mr-2 h-5 w-5" /> Add to Cart
              </>
            )}
          </Button>
        </div>
      </div>

      <section className="py-12 md:py-16 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Product Description
            </h2>
            <div className="text-muted-foreground space-y-4">
              {product.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
        </div>
      </section>

      {product.ingredients && product.ingredients.length > 0 && (
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6 text-center">
              Ingredients
            </h2>
            <div className="bg-card p-6 rounded-lg border border-border/50">
              <ul className="space-y-2 text-muted-foreground columns-1 sm:columns-2">
                {product.ingredients.map((ingredient, index) => {
                    const isHeader = !ingredient.startsWith('L-') && !ingredient.startsWith('Alpha-GPC') && !ingredient.startsWith('Huperzine') && !ingredient.startsWith('Caffeine') && !ingredient.startsWith('Dicaffeine') && !ingredient.startsWith('Total') && !ingredient.startsWith('Taurine') && !ingredient.startsWith('Himalayan') && !ingredient.startsWith('Potassium') && !ingredient.startsWith('Magnesium') && !ingredient.startsWith('Piperine') && !ingredient.startsWith('DMAE') && !ingredient.startsWith('Yohimbine') && !ingredient.startsWith('Hordenine') && !ingredient.startsWith('Rauwolscine') && !ingredient.startsWith('GlycerPump') && !ingredient.startsWith('Nitrosigine') && !ingredient.startsWith('Lion') && !ingredient.startsWith('Creatine') && !ingredient.startsWith('Betaine') && !ingredient.startsWith('Astragin') && !ingredient.startsWith('Whey') && !ingredient.startsWith('Digestive');
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
      )}

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
