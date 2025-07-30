
"use client";

import { useState } from 'react';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from "@/hooks/use-toast";
import { Minus, Plus, ShoppingCartIcon, Zap } from 'lucide-react';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.10] pointer-events-none">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full flex animate-scroll-slow">
                    {[...logos, ...logos].map((src, index) => (
                    <div key={index} className="flex-shrink-0 mx-6" style={{ width: '941px' }}>
                        <Image
                        src={src}
                        alt=""
                        width={941}
                        height={941}
                        className="object-contain"
                        aria-hidden="true"
                        />
                    </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
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
                        <ul className="space-y-2">
                        {product.ingredients.map((ingredient, index) => {
                            const isHeader = !ingredient.startsWith('L-') && !ingredient.startsWith('NO3-T') && !ingredient.startsWith('Alpha-GPC') && !ingredient.startsWith('Huperzine') && !ingredient.startsWith('Caffeine') && !ingredient.startsWith('Dicaffeine') && !ingredient.startsWith('Total') && !ingredient.startsWith('Cluster') && !ingredient.startsWith('Taurine') && !ingredient.startsWith('Himalayan') && !ingredient.startsWith('Potassium') && !ingredient.startsWith('Magnesium') && !ingredient.startsWith('Piperine');
                            return (
                            <li key={index} className={isHeader ? 'font-bold text-foreground pt-2' : 'ml-4'}>
                                {ingredient}
                            </li>
                            )
                        })}
                        </ul>
                    </AccordionContent>
                    </AccordionItem>
                )}
                </Accordion>
            </div>
            </div>
        </div>
    </section>
  );

