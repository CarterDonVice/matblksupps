
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Handshake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Become an Ambassador | MAT BLK Supplements',
  description: 'Join the MAT BLK team and become a brand ambassador.',
};

export default function AmbassadorPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex items-center justify-center">
      <div className="max-w-xl mx-auto text-center bg-card p-10 rounded-2xl shadow-2xl border border-border/50">
        <Handshake className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
          Become a MAT BLK Ambassador
        </h1>
        <p className="text-muted-foreground mb-8">
          We are currently building our ambassador program. If you are passionate about quality supplements and peak performance, we want to hear from you. Please reach out to us to express your interest.
        </p>
        <Button asChild size="lg" className="btn-primary">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
