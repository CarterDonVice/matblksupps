"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { CreditCard, Lock, Mail, MapPin, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real app, this would submit to a server action or API endpoint
    // For now, simulate order placement
    toast({
      title: "Order Placed!",
      description: "Thank you for your purchase. Your MAT BLK supplements are on their way!",
    });
    clearCart();
    router.push("/"); 
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-headline text-3xl mb-4">Your cart is empty.</h1>
        <p className="text-muted-foreground mb-8">Please add items to your cart before proceeding to checkout.</p>
        <Button asChild className="btn-primary">
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Checkout
          </h1>
          <p className="text-muted-foreground mt-2">Securely complete your MAT BLK order.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <form onSubmit={handleSubmit} className="space-y-8 bg-card p-8 rounded-lg shadow-xl border border-border/50">
            <div>
              <h2 className="font-headline text-2xl mb-6 text-foreground">Shipping Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-foreground/80 flex items-center mb-1"><User className="w-4 h-4 mr-2 text-primary" />Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" required className="bg-background border-border/70"/>
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground/80 flex items-center mb-1"><Mail className="w-4 h-4 mr-2 text-primary" />Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required className="bg-background border-border/70"/>
                </div>
                <div>
                  <Label htmlFor="address" className="text-foreground/80 flex items-center mb-1"><MapPin className="w-4 h-4 mr-2 text-primary" />Shipping Address</Label>
                  <Input id="address" type="text" placeholder="123 Main St" required className="bg-background border-border/70"/>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <Input type="text" placeholder="City" required className="bg-background border-border/70"/>
                    <Input type="text" placeholder="ZIP Code" required className="bg-background border-border/70"/>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-headline text-2xl mb-6 text-foreground">Payment Details</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber" className="text-foreground/80 flex items-center mb-1"><CreditCard className="w-4 h-4 mr-2 text-primary" />Card Number</Label>
                  <Input id="cardNumber" type="text" placeholder="•••• •••• •••• ••••" required className="bg-background border-border/70"/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate" className="text-foreground/80">Expiry Date</Label>
                    <Input id="expiryDate" type="text" placeholder="MM/YY" required className="bg-background border-border/70"/>
                  </div>
                  <div>
                    <Label htmlFor="cvc" className="text-foreground/80">CVC</Label>
                    <Input id="cvc" type="text" placeholder="•••" required className="bg-background border-border/70"/>
                  </div>
                </div>
              </div>
            </div>
             <p className="text-xs text-muted-foreground flex items-center mt-2">
                <Lock className="w-3 h-3 mr-1 text-primary"/> Secure SSL Encrypted Payment
            </p>

            <Button type="submit" size="lg" className="w-full btn-primary py-7 text-lg">
              Place Order (${cartTotal.toFixed(2)})
            </Button>
          </form>

          <div className="bg-card p-8 rounded-lg shadow-xl border border-border/50 sticky top-28">
            <h2 className="font-headline text-2xl mb-6 text-foreground">Order Summary</h2>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 mb-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <Image src={item.images[0]} alt={item.fullName} width={40} height={40} className="rounded" data-ai-hint={item.dataAiHint || "product image"}/>
                    <span className="text-foreground/90">{item.fullName} (x{item.quantity})</span>
                  </div>
                  <span className="text-foreground/90">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold text-xl text-foreground mt-2">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
