import type { Product } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out bg-card border-border/50 rounded-lg group">
      <CardHeader className="p-0">
        <Link href={`/product/${product.slug}`} className="block overflow-hidden aspect-square">
          <Image
            src={product.images[0]}
            alt={product.fullName}
            width={400}
            height={400}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
            data-ai-hint={product.dataAiHint || "supplement product"}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-2xl mb-2 text-primary group-hover:text-primary/90 transition-colors">
          <Link href={`/product/${product.slug}`}>{product.name} <span className="text-foreground/80">{product.subName}</span></Link>
        </CardTitle>
        <CardDescription className="text-muted-foreground mb-4 h-12 overflow-hidden">
          {product.shortDescription}
        </CardDescription>
        <p className="font-headline text-2xl text-foreground font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full btn-secondary hover:bg-primary hover:text-primary-foreground group-hover:border-primary">
          <Link href={`/product/${product.slug}`} className="flex items-center justify-center gap-2">
            View Product <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
