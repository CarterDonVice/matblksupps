
import type { Metadata } from 'next';
import { Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | MAT BLK Supplements',
  description: 'Get in touch with MAT BLK Supplements for any questions or inquiries.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center bg-card p-10 rounded-2xl shadow-2xl border border-border/50">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
          Contact Us
        </h1>
        <p className="text-muted-foreground mb-4">
          For all inquiries, please reach out to us at:
        </p>
        <a 
          href="mailto:matblksupplements@gmail.com" 
          className="inline-flex items-center gap-2 text-lg text-foreground hover:text-primary transition-colors duration-300"
        >
          <Mail className="h-5 w-5" />
          matblksupplements@gmail.com
        </a>
      </div>
    </div>
  );
}
