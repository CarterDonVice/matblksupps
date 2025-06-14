
import Link from 'next/link';
import Image from 'next/image';
import { footerNavLinks } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 mb-4 transition-transform hover:scale-105">
              <Image
                src="/images/mat-blk-logo.jpg"
                alt="MAT BLK Logo"
                width={100} 
                height={33} // Adjusted assuming 3:1 aspect ratio, adjust as needed
                className="object-contain"
                data-ai-hint="company logo"
              />
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Elevating performance with premium supplements.
            </p>
          </div>

          <nav className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            {footerNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; {currentYear} MAT BLK Supplements. All rights reserved.</p>
            <p className="mt-1">Designed with precision.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
