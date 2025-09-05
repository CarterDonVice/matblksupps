
"use client";

import { useState } from 'react';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from "@/hooks/use-toast";
import { Minus, Plus, ShoppingCartIcon, Zap } from 'lucide-react';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import Link from 'next/link';
import Image from 'next/image';

interface FeaturedProductProps {
  product: Product;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  
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
  const logos = Array(15).fill("/images/matblklogo.png");

  return (
    <div className="relative -mt-4 bg-background overflow-hidden flex flex-col justify-center min-h-screen pt-0 pb-12">
      <div className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none overflow-hidden md:block">
        <div className="absolute inset-0 flex items-center">
          <div className="flex w-max animate-scroll-logos">
            {[...logos, ...logos].map((src, index) => (
              <div key={index} className="flex-shrink-0 mx-6" style={{ width: '800px' }}>
                <Image
                  src={src}
                  alt=""
                  width={800}
                  height={800}
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative h-[400px] md:h-auto flex items-center justify-center">
               <div className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none overflow-hidden md:hidden">
                <div className="absolute inset-0 flex items-center">
                  <div className="flex w-max animate-scroll-logos">
                    {[...logos, ...logos].map((src, index) => (
                      <div key={index} className="flex-shrink-0 mx-6" style={{ width: '800px' }}>
                        <Image
                          src={src}
                          alt=""
                          width={800}
                          height={800}
                          className="object-contain"
                          aria-hidden="true"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
              </div>
              <div className="relative z-10 w-full max-w-sm md:max-w-none">
                 <ProductImageGallery images={product.images} altText={product.fullName} dataAiHint={product.dataAiHint} />
              </div>
            </div>
            
            <div className="bg-black/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg space-y-6">
              <h1 className="font-headline font-bold">
                  <span className="text-5xl lg:text-6xl text-primary">GO-2</span>
                  <span className="text-5xl lg:text-6xl text-foreground ml-4">Daily Driver</span>
              </h1>
              
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
                  <div className="flex items-center rounded-md border border-white/20">
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
              </div>
          </div>
      </div>
    </div>
  );
}
