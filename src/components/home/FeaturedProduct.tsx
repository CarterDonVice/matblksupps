
"use client";

import { useState } from 'react';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from "@/hooks/use-toast";
import { Minus, Plus, ShoppingCartIcon, Zap, Bell, Mail, Phone } from 'lucide-react';
import { ProductImageGallery } from '@/components/products/ProductImageGallery';
import Link from 'next/link';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from '../ui/input';
import { Label } from '../ui/label';

interface FeaturedProductProps {
  product: Product;
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const [notifyDialogOpen, setNotifyDialogOpen] = useState(false);

  const logos = Array(18).fill("/images/matblklogo.png");
  
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

  const handleNotifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd handle form submission here (e.g., send to an API)
    setNotifyDialogOpen(false);
    toast({
      title: "You're on the list!",
      description: "We'll notify you as soon as this product is back in stock.",
    });
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="relative bg-background overflow-hidden flex flex-col justify-center py-12 md:py-24">
       <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-5 pointer-events-none">
        {logos.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={src}
              alt="MAT BLK Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        ))}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="relative h-[400px] md:h-auto flex items-center justify-center">
              <div className="relative z-10 w-full max-w-sm md:max-w-none">
                 <ProductImageGallery images={product.images} altText={product.fullName} dataAiHint={product.dataAiHint} />
              </div>
            </div>
            
            <div className="bg-black/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg space-y-6">
              <h1 className="font-headline font-bold">
                  <span className="text-5xl lg:text-6xl text-primary">Blackout</span>
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
                      <Button variant="ghost" size="icon" onClick={decreaseQuantity} className="h-10 w-10 rounded-r-none" disabled={product.isOutOfStock}>
                      <Minus className="h-4 w-4" />
                      </Button>
                      <span className="px-4 w-12 text-center font-medium">{quantity}</span>
                      <Button variant="ghost" size="icon" onClick={increaseQuantity} className="h-10 w-10 rounded-l-none" disabled={product.isOutOfStock}>
                      <Plus className="h-4 w-4" />
                      </Button>
                  </div>
                  </div>

                  {product.isOutOfStock ? (
                    <div className="space-y-4">
                      <Button size="lg" className="w-full btn-primary py-7 text-lg" disabled>
                        Out of Stock
                      </Button>
                       <Dialog open={notifyDialogOpen} onOpenChange={setNotifyDialogOpen}>
                        <DialogTrigger asChild>
                          <Button size="lg" variant="outline" className="w-full py-7 text-lg btn-secondary">
                            <Bell className="mr-2 h-5 w-5" /> Let me know when it's back!
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Get Notified</DialogTitle>
                            <DialogDescription>
                              Enter your email and phone number below to be notified when {product.fullName} is back in stock.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleNotifySubmit}>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="email" className="text-right flex items-center justify-end gap-1">
                                  <Mail className="w-4 h-4" /> Email
                                </Label>
                                <Input id="email" type="email" placeholder="you@example.com" required className="col-span-3" />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="phone" className="text-right flex items-center justify-end gap-1">
                                  <Phone className="w-4 h-4" /> Phone
                                </Label>
                                <Input id="phone" type="tel" placeholder="(555) 555-5555" className="col-span-3" />
                              </div>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                  Cancel
                                </Button>
                              </DialogClose>
                              <Button type="submit" className="btn-primary">Notify Me</Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ) : (
                    <Button size="lg" className="w-full btn-primary py-7 text-lg" onClick={handleAddToCart}>
                      <ShoppingCartIcon className="mr-2 h-5 w-5" /> Add to Cart
                    </Button>
                  )}
              </div>
          </div>
      </div>
    </div>
  );
}
