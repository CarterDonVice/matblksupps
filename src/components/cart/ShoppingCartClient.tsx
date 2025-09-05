
"use client";

import { useCart } from '@/contexts/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import type { CartItem } from '@/lib/types';

export function ShoppingCartClient() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, itemCount, clearCart } = useCart();
  const [itemToRemove, setItemToRemove] = useState<CartItem | null>(null);

  const handleOpenConfirmDialog = (item: CartItem) => {
    setItemToRemove(item);
  };

  const handleConfirmRemove = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove.id);
      setItemToRemove(null); // Close dialog
    }
  };

  const handleCancelRemove = () => {
    setItemToRemove(null); // Close dialog
  };
  
  const handleClearCartConfirm = () => {
    // A bit of a hack to use the same dialog logic for clear cart
    setItemToRemove({ 
      id: '__CLEAR_ALL__', 
      name: 'All Items', 
      fullName: 'All items in your cart',
      slug: '',
      subName: '',
      baseName: '',
      flavor: '',
      category: 'preworkout', // dummy value
      price: 0,
      images: [],
      description: [],
      quantity: 0
    });
  }

  const handleConfirmClearCart = () => {
    clearCart();
    setItemToRemove(null);
  }


  if (itemCount === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
        <h2 className="font-headline text-3xl font-semibold text-foreground mb-4">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild size="lg" className="btn-primary px-8">
          <Link href="/">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-border">
              <h2 className="font-headline text-2xl font-semibold text-foreground">
                  Your Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
              </h2>
              {cartItems.length > 0 && (
                  <Button variant="outline" size="sm" onClick={handleClearCartConfirm} className="text-destructive hover:bg-destructive hover:text-destructive-foreground border-destructive">
                      <Trash2 className="mr-2 h-4 w-4" /> Clear Cart
                  </Button>
              )}
          </div>
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-md overflow-hidden shrink-0">
                <Image
                  src={item.images[0]}
                  alt={item.fullName}
                  fill
                  className="object-cover"
                  data-ai-hint={item.dataAiHint || "product image"}
                />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <Link href={`/product/${item.slug}`} className="hover:text-primary">
                    <h3 className="font-headline text-lg md:text-xl font-semibold text-foreground">{item.fullName}</h3>
                  </Link>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                  <p className="text-md font-semibold text-primary mt-1">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border border-input rounded-md">
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-8 w-8 rounded-r-none">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-3 text-sm">{item.quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-8 w-8 rounded-l-none">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="ghost" size="icon" onClick={() => handleOpenConfirmDialog(item)} className="text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        { itemCount > 0 && (
          <div className="lg:col-span-1 p-6 bg-card rounded-lg shadow-lg border border-border/50 sticky top-28">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal ({itemCount} items)</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-xl text-foreground pt-4 border-t border-border mb-8">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <Button asChild size="lg" className="w-full btn-primary py-7 text-lg">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
            <Button asChild variant="link" className="w-full mt-4 text-primary">
              <Link href="/">Continue Shopping</Link>
            </Button>
          </div>
        )}
      </div>

      {itemToRemove && (
        <AlertDialog open={!!itemToRemove} onOpenChange={(isOpen) => !isOpen && handleCancelRemove()}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                {itemToRemove.id === '__CLEAR_ALL__' 
                  ? "This action will remove all items from your cart."
                  : `This action will remove "${itemToRemove.fullName}" from your cart.`}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCancelRemove}>Cancel</AlertDialogCancel>
              <AlertDialogAction 
                onClick={itemToRemove.id === '__CLEAR_ALL__' ? handleConfirmClearCart : handleConfirmRemove}
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              >
                Remove
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
}
